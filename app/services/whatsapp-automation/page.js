import ServicePageLayout from '@/components/ServicePageLayout'
import { MessageCircle, Bot, Zap, Users, Bell, Settings, TrendingUp, Shield } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'WhatsApp Automation Agency in India — Business Chatbot Setup | LaunchGrids',
  description: 'LaunchGrids sets up WhatsApp Business automation for Indian businesses. Automated replies, lead capture, catalog setup, chatbot integration, and customer communication flows. Starting from ₹10,000.',
  keywords: ['WhatsApp automation agency India', 'WhatsApp Business setup India', 'WhatsApp chatbot India', 'business automation India', 'WhatsApp marketing India', 'automated WhatsApp replies India', 'WhatsApp Business API India'],
  alternates: { canonical: 'https://launchgrids.in/services/whatsapp-automation' },
  openGraph: {
    title: 'WhatsApp Automation Agency in India | LaunchGrids',
    description: 'Automate your WhatsApp Business with chatbots, auto-replies, and lead capture. Starting from ₹10,000.',
    url: 'https://launchgrids.in/services/whatsapp-automation',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'WhatsApp Automation Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Automation Agency in India | LaunchGrids',
    description: 'Automate your WhatsApp Business with chatbots, auto-replies, and lead capture. Starting from ₹10,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WhatsApp Business Automation',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'WhatsApp Business automation setup with chatbots and automated replies for businesses in India',
  areaServed: 'IN',
  url: 'https://launchgrids.in/services/whatsapp-automation',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'WhatsApp Automation', item: 'https://launchgrids.in/services/whatsapp-automation' },
  ],
}

const service = {
  name: 'WhatsApp Automation',
  category: 'Automation',
  orbColor: 'bg-green-100 dark:bg-green-900/20',
  iconBg: 'bg-green-50 dark:bg-green-950/20',
  iconColor: 'text-green-600 dark:text-green-400',
  heroTitle: 'Automate Your Business with',
  heroHighlight: 'WhatsApp Automation',
  heroDesc: 'WhatsApp is India\'s most used messaging app. We help businesses automate customer communication, capture leads, and provide 24/7 support through WhatsApp Business automation.',
  heroPoints: ['Auto Replies', 'Lead Capture', 'Catalog Setup', '24/7 Support'],
  stats: [
    { value: '500M+', label: 'WhatsApp Users in India' },
    { value: '98%', label: 'Message Open Rate' },
    { value: '3x', label: 'Faster Response' },
    { value: '24/7', label: 'Automated Support' },
  ],
  offerDesc: 'Complete WhatsApp Business automation setup to handle customer queries, capture leads, and grow your business automatically.',
  offerings: [
    { icon: <MessageCircle className="w-6 h-6" />, title: 'WhatsApp Business Setup', desc: 'Professional WhatsApp Business account setup with business profile, catalog, and quick replies.' },
    { icon: <Bot className="w-6 h-6" />, title: 'Chatbot Integration', desc: 'Automated chatbot to answer FAQs, capture lead information, and route customers to the right department.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Automated Replies', desc: 'Instant automated responses for common queries, greetings, away messages, and follow-ups.' },
    { icon: <Users className="w-6 h-6" />, title: 'Lead Capture Flow', desc: 'Automated lead capture sequences to collect name, phone, email, and requirements from prospects.' },
    { icon: <Bell className="w-6 h-6" />, title: 'Broadcast Campaigns', desc: 'Send promotional messages, offers, and updates to your customer list via WhatsApp broadcasts.' },
    { icon: <Settings className="w-6 h-6" />, title: 'CRM Integration', desc: 'Connect WhatsApp with your CRM to automatically save leads and track customer conversations.' },
  ],
  process: [
    { title: 'Business Analysis', desc: 'We analyze your customer communication flow and identify automation opportunities.' },
    { title: 'WhatsApp Setup', desc: 'We set up your WhatsApp Business account with professional profile and catalog.' },
    { title: 'Automation Build', desc: 'We build chatbot flows, automated replies, and lead capture sequences.' },
    { title: 'Testing & Launch', desc: 'We test all automation flows and train your team on managing the system.' },
  ],
  whyDesc: 'WhatsApp automation saves time, captures more leads, and provides instant customer support — all automatically.',
  benefits: [
    'Respond to customers instantly — 24/7 automated replies',
    'Never miss a lead — automated capture and follow-up',
    'Professional WhatsApp Business profile setup',
    'Product catalog setup for easy browsing',
    'Broadcast messages to your entire customer list',
    'Reduce manual work with smart automation flows',
    'Integration with CRM and other business tools',
    'Training provided for your team to manage the system',
  ],
  faqs: [
    { q: 'What is WhatsApp Business automation?', a: 'WhatsApp Business automation uses chatbots and automated flows to respond to customers, capture leads, and send messages automatically without manual effort.' },
    { q: 'How much does WhatsApp automation cost?', a: 'WhatsApp Business setup starts from ₹5,000. Full automation with chatbot starts from ₹10,000.' },
    { q: 'Do I need WhatsApp Business API?', a: 'For basic automation, WhatsApp Business app is sufficient. For advanced automation and bulk messaging, WhatsApp Business API is recommended.' },
    { q: 'Can I still reply manually after automation?', a: 'Yes, automation handles routine queries automatically. You can always take over and reply manually for complex conversations.' },
  ],
  ctaDesc: 'Automate your WhatsApp and never miss a customer inquiry again. Set up 24/7 automated support today.',
}

export default function WhatsAppAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
