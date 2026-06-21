import ServicePageLayout from '@/components/ServicePageLayout'
import { Layers, Smartphone, Eye, Code2, PenTool, Zap } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'UI/UX Design Agency in India - Website & App Design | LaunchGrids',
  description: 'LaunchGrids provides professional UI/UX design services in India. Clean, user-friendly designs for websites, apps, dashboards, and digital platforms. Figma source files included. Starting from Rs.15,000.',
  keywords: ['UI UX design agency India', 'website UI design India', 'app UX design India', 'user interface design India', 'user experience design India', 'Figma design India', 'web design agency India', 'app design India', 'dashboard design India'],
  alternates: { canonical: 'https://launchgrids.in/services/ui-ux-design' },
  openGraph: {
    title: 'UI/UX Design Agency in India - Website & App Design | LaunchGrids',
    description: 'Clean, user-friendly UI/UX designs for websites, apps, and dashboards. Figma files included. Starting from Rs.15,000.',
    url: 'https://launchgrids.in/services/ui-ux-design',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'UI UX Design Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Agency in India | LaunchGrids',
    description: 'Clean, user-friendly UI/UX designs for websites and apps. Starting from Rs.15,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UI/UX Design',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional UI/UX design services for websites, apps, and dashboards in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '15000' },
  url: 'https://launchgrids.in/services/ui-ux-design',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: 'https://launchgrids.in/services/ui-ux-design' },
  ],
}

const service = {
  name: 'UI/UX Design',
  category: 'Branding & Design',
  orbColor: 'bg-violet-100 dark:bg-violet-900/20',
  iconBg: 'bg-violet-50 dark:bg-violet-950/20',
  iconColor: 'text-violet-600 dark:text-violet-400',
  heroTitle: 'Beautiful & Functional',
  heroHighlight: 'UI/UX Design',
  heroDesc: 'We design clean, intuitive, and conversion-focused interfaces for websites, apps, and digital platforms that users love to interact with.',
  heroPoints: ['User Research', 'Wireframing', 'Prototyping', 'Responsive Design'],
  stats: [
    { value: '100+', label: 'Designs Delivered' },
    { value: '5-10', label: 'Days Delivery' },
    { value: '3x', label: 'Better Conversions' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
  offerDesc: 'Complete UI/UX design from wireframes to final pixel-perfect designs.',
  offerings: [
    { icon: <Layers className="w-6 h-6" />, title: 'Website UI Design', desc: 'Professional website designs with modern layouts, typography, and visual hierarchy.' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile App Design', desc: 'Intuitive mobile app interfaces for Android and iOS with smooth user flows.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Wireframing', desc: 'Low and high-fidelity wireframes to plan layout and user journey before development.' },
    { icon: <Code2 className="w-6 h-6" />, title: 'Dashboard Design', desc: 'Clean admin panels, analytics dashboards, and SaaS product interfaces.' },
    { icon: <PenTool className="w-6 h-6" />, title: 'Prototype & Clickable Demo', desc: 'Interactive prototypes to test user flows before development begins.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Design System', desc: 'Reusable component libraries and design systems for consistent product UI.' },
  ],
  process: [
    { title: 'Research & Discovery', desc: 'We study your users, competitors, and business goals to define design direction.' },
    { title: 'Wireframes', desc: 'We create wireframes to plan layout, navigation, and content structure.' },
    { title: 'Visual Design', desc: 'We apply brand colors, typography, and visual elements to create final designs.' },
    { title: 'Handoff', desc: 'We deliver design files with developer specs for smooth implementation.' },
  ],
  whyDesc: 'Good design is not just about looks - it\'s about making your product easy to use and converting visitors into customers.',
  benefits: ['User-centered design approach', 'Mobile-first responsive layouts', 'Conversion-optimized page structures', 'Consistent design system', 'Fast delivery in 5-10 days', 'Figma/Adobe XD source files included', 'Developer-ready design handoff', 'Unlimited revisions until satisfied'],
  faqs: [
    { q: 'What tools do you use for UI/UX design?', a: 'We primarily use Figma for all UI/UX design work, delivering source files along with exported assets.' },
    { q: 'How much does UI/UX design cost?', a: 'Website UI design starts from Rs.15,000. App design starts from Rs.25,000 depending on number of screens.' },
    { q: 'Do you also develop the designs?', a: 'Yes, we offer complete design + development packages. We can build exactly what we design.' },
    { q: 'Will I get the source files?', a: 'Yes, you receive all Figma source files along with exported PNG/SVG assets.' },
  ],
  ctaDesc: 'Get a beautiful, user-friendly design that converts visitors into customers.',
}

export default function UIUXPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
