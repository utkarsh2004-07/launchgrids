import ServicePageLayout from '@/components/ServicePageLayout'
import { Search, TrendingUp, BarChart3, Globe, FileText, MapPin, Chrome, Shield } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'SEO Agency in India - Search Engine Optimization Services | LaunchGrids',
  description: 'LaunchGrids provides expert SEO services in India. We help businesses rank on Google\'s first page with on-page SEO, technical SEO, local SEO, and content optimization. Get more organic traffic and leads.',
  keywords: ['SEO agency India', 'SEO services India', 'best SEO agency India', 'affordable SEO India', 'local SEO India', 'Google ranking agency India', 'SEO for small business India', 'search engine optimization India', 'SEO expert India', 'technical SEO India'],
  alternates: { canonical: 'https://launchgrids.in/services/seo' },
  openGraph: {
    title: 'SEO Agency in India | LaunchGrids',
    description: 'Rank on Google\'s first page with expert SEO services starting from Rs.8,000/month.',
    url: 'https://launchgrids.in/services/seo',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency in India | LaunchGrids',
    description: 'Rank on Google first page with expert SEO services starting from Rs.8,000/month.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Search engine optimization services to help businesses rank on Google in India',
  areaServed: 'IN',
  url: 'https://launchgrids.in/services/seo',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'SEO', item: 'https://launchgrids.in/services/seo' },
  ],
}

const service = {
  name: 'SEO Services',
  category: 'Search Engine Optimization',
  orbColor: 'bg-orange-100 dark:bg-orange-900/20',
  iconBg: 'bg-orange-50 dark:bg-orange-950/20',
  iconColor: 'text-orange-600 dark:text-orange-400',
  heroTitle: 'Rank Higher on Google with',
  heroHighlight: 'Expert SEO Services',
  heroDesc: 'We help businesses across India rank on Google\'s first page through proven SEO strategies - on-page optimization, technical SEO, local SEO, and content that drives organic traffic.',
  heroPoints: ['On-Page SEO', 'Technical SEO', 'Local SEO', 'Content Strategy'],
  stats: [
    { value: '1st', label: 'Page Rankings' },
    { value: '3x', label: 'Organic Traffic Growth' },
    { value: '6mo', label: 'Average Ranking Time' },
    { value: '100%', label: 'White Hat SEO' },
  ],
  offerDesc: 'Complete SEO package covering every aspect of search engine optimization for sustainable Google rankings.',
  offerings: [
    { icon: <Search className="w-6 h-6" />, title: 'Keyword Research', desc: 'In-depth keyword research to find high-intent, low-competition keywords your customers are searching for.' },
    { icon: <FileText className="w-6 h-6" />, title: 'On-Page SEO', desc: 'Title tags, meta descriptions, heading structure, content optimization, and internal linking.' },
    { icon: <Chrome className="w-6 h-6" />, title: 'Technical SEO', desc: 'Site speed, Core Web Vitals, sitemap, robots.txt, schema markup, and crawlability fixes.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, and ranking for location-based searches.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'SEO Analytics & Reporting', desc: 'Monthly reports with keyword rankings, traffic growth, and actionable insights.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Content SEO Strategy', desc: 'Blog strategy, content calendar, and SEO-optimized content to attract organic traffic.' },
  ],
  process: [
    { title: 'SEO Audit', desc: 'Complete audit of your website to identify technical issues, keyword gaps, and opportunities.' },
    { title: 'Strategy & Keywords', desc: 'We build a custom SEO strategy with target keywords based on your business and competition.' },
    { title: 'On-Page & Technical Fix', desc: 'We optimize your website pages, fix technical issues, and improve site structure.' },
    { title: 'Monitor & Report', desc: 'Monthly ranking reports, traffic analysis, and continuous optimization for better results.' },
  ],
  whyDesc: 'SEO is the most cost-effective way to get consistent leads. We use only white-hat, Google-approved techniques for long-term rankings.',
  benefits: [
    'Rank on Google\'s first page for your target keywords',
    'Get consistent organic traffic without paying for ads',
    'Local SEO to attract customers in your city',
    'Technical SEO fixes for better crawling and indexing',
    'Monthly ranking reports and transparent progress tracking',
    'Content strategy to build topical authority',
    'Google Business Profile optimization for local visibility',
    'Long-term sustainable results with white-hat techniques',
  ],
  faqs: [
    { q: 'How long does SEO take to show results?', a: 'SEO typically shows results in 3-6 months. Local SEO can show results faster, within 4-8 weeks.' },
    { q: 'How much do SEO services cost?', a: 'Our SEO packages start from Rs.8,000/month. The price depends on the number of keywords and competition level.' },
    { q: 'Do you guarantee first page rankings?', a: 'No ethical SEO agency can guarantee rankings as Google\'s algorithm changes. We guarantee consistent effort and proven strategies that deliver results.' },
    { q: 'What is local SEO?', a: 'Local SEO helps your business appear in Google searches for location-based queries like "salon near me" or "dentist in Mumbai".' },
  ],
  ctaDesc: 'Start ranking on Google\'s first page and get consistent organic leads for your business.',
}

export default function SEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
