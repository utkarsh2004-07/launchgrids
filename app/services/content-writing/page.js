import ServicePageLayout from '@/components/ServicePageLayout'
import { FileText, PenTool, Globe, Instagram, Search, MessageCircle, BookOpen, TrendingUp } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Content Writing Agency in India — SEO Content & Copywriting | LaunchGrids',
  description: 'LaunchGrids provides professional content writing services in India. Website content, SEO blogs, social media captions, product descriptions, and marketing copy that converts. Starting from ₹5,000.',
  keywords: ['content writing agency India', 'SEO content writing India', 'website content writing India', 'blog writing agency India', 'copywriting agency India', 'social media content India', 'product description writing India'],
  alternates: { canonical: 'https://launchgrids.in/services/content-writing' },
  openGraph: {
    title: 'Content Writing Agency in India | LaunchGrids',
    description: 'Professional SEO content writing for websites, blogs, and social media. Starting from ₹5,000.',
    url: 'https://launchgrids.in/services/content-writing',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Content Writing Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Writing Agency in India | LaunchGrids',
    description: 'Professional SEO content writing for websites, blogs, and social media. Starting from ₹5,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Content Writing Services',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional SEO content writing services for websites, blogs, and social media in India',
  areaServed: 'IN',
  url: 'https://launchgrids.in/services/content-writing',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Content Writing', item: 'https://launchgrids.in/services/content-writing' },
  ],
}

const service = {
  name: 'Content Writing',
  category: 'Content',
  orbColor: 'bg-pink-100 dark:bg-pink-900/20',
  iconBg: 'bg-pink-50 dark:bg-pink-950/20',
  iconColor: 'text-pink-600 dark:text-pink-400',
  heroTitle: 'Content That Ranks and',
  heroHighlight: 'Converts Customers',
  heroDesc: 'Great content builds trust, ranks on Google, and converts visitors into customers. We write professional, SEO-optimized content for websites, blogs, and social media that delivers results.',
  heroPoints: ['SEO Optimized', 'Plagiarism Free', 'Conversion Focused', 'Fast Delivery'],
  stats: [
    { value: '500+', label: 'Articles Written' },
    { value: '100%', label: 'Original Content' },
    { value: '3x', label: 'More Organic Traffic' },
    { value: '48hr', label: 'Delivery Time' },
  ],
  offerDesc: 'Complete content writing services — from website copy to SEO blogs, everything your business needs to communicate effectively.',
  offerings: [
    { icon: <Globe className="w-6 h-6" />, title: 'Website Content Writing', desc: 'Home page, about us, service pages, and landing page copy that clearly communicates your value proposition.' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'SEO Blog Writing', desc: 'Keyword-optimized blog articles that rank on Google and drive consistent organic traffic to your website.' },
    { icon: <Instagram className="w-6 h-6" />, title: 'Social Media Captions', desc: 'Engaging Instagram, Facebook, and LinkedIn captions that drive likes, comments, and shares.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Product Descriptions', desc: 'Compelling product descriptions for ecommerce stores that highlight benefits and drive purchases.' },
    { icon: <MessageCircle className="w-6 h-6" />, title: 'Ad Copywriting', desc: 'High-converting ad copy for Google Ads, Meta Ads, and other paid advertising campaigns.' },
    { icon: <Search className="w-6 h-6" />, title: 'SEO Content Strategy', desc: 'Content calendar and keyword strategy to build topical authority and rank for multiple keywords.' },
  ],
  process: [
    { title: 'Brief & Research', desc: 'We understand your business, target audience, tone of voice, and content goals.' },
    { title: 'Keyword Research', desc: 'We identify the right keywords to target for maximum SEO impact and organic traffic.' },
    { title: 'Content Creation', desc: 'We write original, engaging, and SEO-optimized content tailored to your brand voice.' },
    { title: 'Review & Deliver', desc: 'You review the content, request revisions if needed, and we deliver final files.' },
  ],
  whyDesc: 'Content is the foundation of SEO and digital marketing. Quality content builds authority, trust, and consistent organic traffic.',
  benefits: [
    '100% original, plagiarism-free content',
    'SEO-optimized with proper keyword integration',
    'Written in your brand\'s tone and voice',
    'Fast delivery — most content within 48 hours',
    'Unlimited revisions until you\'re satisfied',
    'Research-backed content with accurate information',
    'Formatted for readability with proper headings',
    'Affordable pricing starting from ₹500 per article',
  ],
  faqs: [
    { q: 'How much does content writing cost?', a: 'Blog articles start from ₹500 per article. Website content packages start from ₹5,000. Pricing depends on word count and complexity.' },
    { q: 'Is the content SEO optimized?', a: 'Yes, all content is written with target keywords, proper heading structure, meta descriptions, and SEO best practices.' },
    { q: 'How long does it take to deliver content?', a: 'Standard articles (800-1200 words) are delivered within 48 hours. Longer content or bulk orders may take 3-5 days.' },
    { q: 'Can you write in Hindi as well?', a: 'Yes, we provide content writing in both English and Hindi for businesses targeting Indian audiences.' },
  ],
  ctaDesc: 'Get professional content that ranks on Google and converts your visitors into paying customers.',
}

export default function ContentWritingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
