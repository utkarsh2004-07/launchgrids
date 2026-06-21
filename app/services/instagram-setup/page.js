import ServicePageLayout from '@/components/ServicePageLayout'
import { Instagram, Eye, Star, Users, Layout, Zap } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Instagram Page Setup & Management in India | LaunchGrids',
  description: 'Professional Instagram business page setup in India. Bio optimization, highlights, profile strategy, and complete Instagram presence setup for businesses. Starting from Rs.3,000.',
  keywords: ['Instagram page setup India', 'Instagram business profile India', 'Instagram marketing India', 'Instagram setup agency India'],
  alternates: { canonical: 'https://launchgrids.in/services/instagram-setup' },
  openGraph: { title: 'Instagram Page Setup India | LaunchGrids', url: 'https://launchgrids.in/services/instagram-setup', images: [{ url: '/logo.png' }] },
}

const service = {
  name: 'Instagram Page Setup',
  category: 'Content',
  orbColor: 'bg-pink-100 dark:bg-pink-900/20',
  iconBg: 'bg-pink-50 dark:bg-pink-950/20',
  iconColor: 'text-pink-600 dark:text-pink-400',
  heroTitle: 'Professional Instagram Setup',
  heroHighlight: 'for Your Business',
  heroDesc: 'Your Instagram profile is your digital storefront. We set up a professional, optimized Instagram business page that attracts followers and converts them into customers.',
  heroPoints: ['Business Account Setup', 'Bio Optimization', 'Highlight Covers', 'Content Strategy'],
  stats: [{ value: '500M+', label: 'Instagram Users India' }, { value: '3x', label: 'More Engagement' }, { value: '2 days', label: 'Setup Time' }, { value: '100%', label: 'Branded Profile' }],
  offerDesc: 'Complete Instagram business page setup with professional branding and strategy.',
  offerings: [
    { icon: <Instagram className="w-6 h-6" />, title: 'Business Account Setup', desc: 'Convert to or create Instagram Business account with all features enabled.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Bio Optimization', desc: 'Keyword-rich bio with clear value proposition, contact info, and call-to-action.' },
    { icon: <Layout className="w-6 h-6" />, title: 'Highlight Covers', desc: 'Branded highlight cover icons matching your brand colors and style.' },
    { icon: <Star className="w-6 h-6" />, title: 'Profile Photo & Branding', desc: 'Optimized profile photo and consistent visual branding setup.' },
    { icon: <Users className="w-6 h-6" />, title: 'Link in Bio Setup', desc: 'Setup Linktree or custom link page to drive traffic to your website and offers.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Content Strategy', desc: 'Initial content calendar and posting strategy for consistent growth.' },
  ],
  process: [
    { title: 'Account Audit', desc: 'We review your current Instagram presence and identify improvement areas.' },
    { title: 'Profile Setup', desc: 'We set up or optimize your business account with all required information.' },
    { title: 'Branding', desc: 'We create branded highlight covers and visual elements matching your brand.' },
    { title: 'Strategy Handoff', desc: 'We provide a content strategy guide for consistent posting and growth.' },
  ],
  whyDesc: 'A professional Instagram profile builds credibility and makes your business look trustworthy to potential customers.',
  benefits: ['Professional business account setup', 'SEO-optimized bio for discoverability', 'Branded highlight covers', 'Link in bio setup for traffic', 'Content strategy included', 'Fast 2-day setup', 'Works for all business types', 'Affordable starting from Rs.3,000'],
  faqs: [
    { q: 'Do I need a business account?', a: 'Yes, Instagram Business account gives you access to analytics, contact buttons, ads, and shopping features.' },
    { q: 'What is included in the setup?', a: 'Profile optimization, bio writing, highlight covers, link in bio setup, and a basic content strategy guide.' },
    { q: 'Do you also manage the account after setup?', a: 'Yes, we offer monthly social media management packages for ongoing content creation and posting.' },
    { q: 'How long does setup take?', a: 'Complete Instagram setup takes 1-2 business days.' },
  ],
  ctaDesc: 'Get a professional Instagram presence that attracts followers and converts them into customers.',
}

export default function InstagramSetupPage() {
  return <ServicePageLayout service={service} />
}
