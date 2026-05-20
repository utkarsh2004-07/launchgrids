import ServicePageLayout from '@/components/ServicePageLayout'
import { MapPin, Star, Search, Globe, BarChart3, Users } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Google Business Profile Setup in India — Local SEO | LaunchGrids',
  description: 'Professional Google Business Profile setup and optimization for local businesses in India. Appear on Google Search and Maps, get more local customers. Starting from ₹3,000.',
  keywords: ['Google Business Profile setup India', 'Google My Business India', 'local SEO India', 'Google Maps listing India', 'local business listing India'],
  alternates: { canonical: 'https://launchgrids.in/services/google-business-profile' },
  openGraph: { title: 'Google Business Profile Setup India | LaunchGrids', url: 'https://launchgrids.in/services/google-business-profile', images: [{ url: '/logo.png' }] },
}

const service = {
  name: 'Google Business Profile',
  category: 'Marketing',
  orbColor: 'bg-orange-100 dark:bg-orange-900/20',
  iconBg: 'bg-orange-50 dark:bg-orange-950/20',
  iconColor: 'text-orange-600 dark:text-orange-400',
  heroTitle: 'Get Found on Google Maps with',
  heroHighlight: 'Google Business Profile',
  heroDesc: 'When customers search for businesses near them, Google Business Profile is what shows up. We set up and optimize your profile so local customers can find you easily.',
  heroPoints: ['Google Maps Listing', 'Local SEO', 'Review Management', 'Business Info Setup'],
  stats: [{ value: '3x', label: 'More Local Calls' }, { value: '46%', label: 'Searches are Local' }, { value: '7 days', label: 'Setup Time' }, { value: 'Free', label: 'Google Listing' }],
  offerDesc: 'Complete Google Business Profile setup and optimization for maximum local visibility.',
  offerings: [
    { icon: <MapPin className="w-6 h-6" />, title: 'Profile Creation & Verification', desc: 'Create and verify your Google Business Profile with accurate business information.' },
    { icon: <Globe className="w-6 h-6" />, title: 'Business Info Optimization', desc: 'Optimize business name, category, description, hours, and contact details.' },
    { icon: <Star className="w-6 h-6" />, title: 'Review Strategy', desc: 'Setup review request system to get more positive Google reviews from customers.' },
    { icon: <Search className="w-6 h-6" />, title: 'Local Keyword Optimization', desc: 'Optimize your profile for local search keywords to rank higher in local results.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Posts & Updates', desc: 'Regular Google Business posts with offers, updates, and announcements.' },
    { icon: <Users className="w-6 h-6" />, title: 'Q&A Management', desc: 'Setup and manage the Q&A section to answer common customer questions.' },
  ],
  process: [
    { title: 'Profile Audit', desc: 'We check if your business already has a profile and audit its current state.' },
    { title: 'Setup & Verify', desc: 'We create or claim your profile and complete the verification process.' },
    { title: 'Optimize', desc: 'We optimize all profile sections with keywords, photos, and complete information.' },
    { title: 'Monitor', desc: 'We monitor reviews, answer questions, and keep the profile updated.' },
  ],
  whyDesc: 'Google Business Profile is the most powerful free tool for local businesses to get discovered by nearby customers.',
  benefits: ['Appear on Google Search and Maps', 'Get more calls and directions from local customers', 'Build trust with Google reviews', 'Free visibility on Google', 'Show business hours, photos, and services', 'Rank for "near me" searches', 'Insights on how customers find you', 'Quick setup in 7 days'],
  faqs: [
    { q: 'Is Google Business Profile free?', a: 'Yes, Google Business Profile is completely free. You only pay for our setup and optimization service.' },
    { q: 'How long does verification take?', a: 'Google verification typically takes 3-7 days via postcard or instant via phone/email for eligible businesses.' },
    { q: 'Can I manage it myself after setup?', a: 'Yes, we set it up and train you to manage it. We also offer monthly management plans.' },
    { q: 'What if my business already has a profile?', a: 'We can claim and optimize your existing profile. Many businesses have unclaimed or incomplete profiles.' },
  ],
  ctaDesc: 'Get found by local customers on Google Search and Maps with a fully optimized Google Business Profile.',
}

export default function GoogleBusinessPage() {
  return <ServicePageLayout service={service} />
}
