import ServicePageLayout from '@/components/ServicePageLayout'
import { Users, Settings, TrendingUp, BarChart3, Zap, Bell } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'CRM Setup Agency in India - Customer Management System | LaunchGrids',
  description: 'Professional CRM setup for businesses in India. Manage leads, contacts, and sales pipeline with HubSpot, Zoho, or custom CRM. Automated follow-ups and sales reports included. Starting from Rs.10,000.',
  keywords: ['CRM setup India', 'customer management system India', 'CRM for small business India', 'sales CRM India', 'lead management India', 'HubSpot setup India', 'Zoho CRM India', 'CRM agency India', 'sales pipeline management India'],
  alternates: { canonical: 'https://launchgrids.in/services/crm-setup' },
  openGraph: {
    title: 'CRM Setup Agency in India - Customer Management System | LaunchGrids',
    description: 'Professional CRM setup to manage leads, contacts, and sales pipeline. Starting from Rs.10,000.',
    url: 'https://launchgrids.in/services/crm-setup',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'CRM Setup Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Setup Agency in India | LaunchGrids',
    description: 'Professional CRM setup to manage leads, contacts, and sales pipeline. Starting from Rs.10,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CRM Setup',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional CRM setup and configuration for businesses in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '10000' },
  url: 'https://launchgrids.in/services/crm-setup',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'CRM Setup', item: 'https://launchgrids.in/services/crm-setup' },
  ],
}

const service = {
  name: 'CRM Setup',
  category: 'Automation',
  orbColor: 'bg-green-100 dark:bg-green-900/20',
  iconBg: 'bg-green-50 dark:bg-green-950/20',
  iconColor: 'text-green-600 dark:text-green-400',
  heroTitle: 'Manage Your Leads with',
  heroHighlight: 'CRM Setup',
  heroDesc: 'Never lose a lead again. We set up a complete CRM system to manage your contacts, track sales pipeline, and automate follow-ups for your business.',
  heroPoints: ['Lead Management', 'Sales Pipeline', 'Follow-up Automation', 'Team Collaboration'],
  stats: [
    { value: '3x', label: 'More Conversions' },
    { value: '0', label: 'Leads Lost' },
    { value: '5 days', label: 'Setup Time' },
    { value: '100%', label: 'Organized' },
  ],
  offerDesc: 'Complete CRM setup to manage leads, contacts, and sales pipeline efficiently.',
  offerings: [
    { icon: <Users className="w-6 h-6" />, title: 'Contact Management', desc: 'Centralized database for all customer contacts with complete interaction history.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Sales Pipeline', desc: 'Visual sales pipeline to track leads from inquiry to closed deal.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Follow-up Automation', desc: 'Automated follow-up reminders and email sequences for leads.' },
    { icon: <Bell className="w-6 h-6" />, title: 'Task & Reminder System', desc: 'Task management and reminders to never miss a follow-up.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Sales Reports', desc: 'Revenue reports, conversion rates, and sales performance analytics.' },
    { icon: <Settings className="w-6 h-6" />, title: 'Integration Setup', desc: 'Connect CRM with your website forms, WhatsApp, and email.' },
  ],
  process: [
    { title: 'Requirements', desc: 'We understand your sales process and lead management needs.' },
    { title: 'CRM Selection', desc: 'We recommend the best CRM for your business size and budget.' },
    { title: 'Setup & Configure', desc: 'We set up and customize the CRM for your specific workflow.' },
    { title: 'Training', desc: 'We train your team on using the CRM effectively.' },
  ],
  whyDesc: 'A CRM system helps you track every lead, follow up on time, and close more deals consistently.',
  benefits: ['Never lose a lead again', 'Track entire sales pipeline visually', 'Automated follow-up reminders', 'Complete customer history', 'Team collaboration features', 'Integration with website and WhatsApp', 'Sales performance reports', 'Starting from Rs.10,000'],
  faqs: [
    { q: 'Which CRM do you set up?', a: 'We work with HubSpot (free), Zoho CRM, Freshsales, and custom spreadsheet-based CRM depending on your budget.' },
    { q: 'How much does CRM setup cost?', a: 'CRM setup starts from Rs.10,000. The CRM software itself may be free (HubSpot) or paid depending on your choice.' },
    { q: 'Can small businesses use a CRM?', a: 'Absolutely. Even a 1-person business benefits from CRM to track leads and follow-ups systematically.' },
    { q: 'Can you integrate CRM with our website?', a: 'Yes, we connect your website contact forms to automatically create leads in your CRM.' },
  ],
  ctaDesc: 'Set up a CRM and start managing your leads and sales pipeline professionally.',
}

export default function CRMSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
