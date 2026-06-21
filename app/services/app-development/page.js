import ServicePageLayout from '@/components/ServicePageLayout'
import { Smartphone, Code2, Shield, Zap, Users, BarChart3 } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'App Development Agency in India - Android & iOS Apps | LaunchGrids',
  description: 'Professional mobile app development for Android and iOS in India. Business apps, customer engagement apps, and custom mobile applications with UI/UX design and App Store launch. Starting from Rs.50,000.',
  keywords: ['app development India', 'mobile app development India', 'Android app development India', 'iOS app development India', 'business app India', 'React Native app India', 'custom app development India', 'app development agency India'],
  alternates: { canonical: 'https://launchgrids.in/services/app-development' },
  openGraph: {
    title: 'App Development Agency in India - Android & iOS Apps | LaunchGrids',
    description: 'Professional Android and iOS app development with UI/UX design and App Store launch. Starting from Rs.50,000.',
    url: 'https://launchgrids.in/services/app-development',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'App Development Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development Agency in India | LaunchGrids',
    description: 'Professional Android and iOS app development. Starting from Rs.50,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional Android and iOS mobile app development for businesses in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '50000' },
  url: 'https://launchgrids.in/services/app-development',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'App Development', item: 'https://launchgrids.in/services/app-development' },
  ],
}

const service = {
  name: 'App Development',
  category: 'Web & Tech',
  orbColor: 'bg-blue-100 dark:bg-blue-900/20',
  iconBg: 'bg-blue-50 dark:bg-blue-950/20',
  iconColor: 'text-blue-600 dark:text-blue-400',
  heroTitle: 'Build Your Business App with',
  heroHighlight: 'Mobile App Development',
  heroDesc: 'We develop professional mobile applications for Android and iOS that help businesses engage customers, streamline operations, and create new revenue streams.',
  heroPoints: ['Android & iOS', 'Custom Features', 'UI/UX Design', 'App Store Launch'],
  stats: [
    { value: '20+', label: 'Apps Built' },
    { value: '4-8', label: 'Weeks Delivery' },
    { value: 'Both', label: 'Android & iOS' },
    { value: '100%', label: 'Custom Built' },
  ],
  offerDesc: 'Complete mobile app development from design to App Store launch.',
  offerings: [
    { icon: <Smartphone className="w-6 h-6" />, title: 'Android App Development', desc: 'Native Android apps for Google Play Store with full feature set.' },
    { icon: <Code2 className="w-6 h-6" />, title: 'iOS App Development', desc: 'Native iOS apps for Apple App Store with smooth performance.' },
    { icon: <Users className="w-6 h-6" />, title: 'Cross-Platform Apps', desc: 'React Native apps that work on both Android and iOS from one codebase.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Backend & API', desc: 'Server-side backend and API development for app functionality.' },
    { icon: <Zap className="w-6 h-6" />, title: 'UI/UX Design', desc: 'Beautiful, intuitive app interface design for great user experience.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'App Store Launch', desc: 'Complete app submission and launch on Google Play and Apple App Store.' },
  ],
  process: [
    { title: 'Discovery', desc: 'We define app features, user flows, and technical requirements.' },
    { title: 'Design', desc: 'We design the complete app UI/UX with interactive prototypes.' },
    { title: 'Development', desc: 'We build the app with all features, backend, and integrations.' },
    { title: 'Launch', desc: 'We test, submit, and launch the app on app stores.' },
  ],
  whyDesc: 'A mobile app gives your business a direct channel to customers and builds brand loyalty.',
  benefits: ['Works on Android and iOS', 'Custom features for your business', 'Professional UI/UX design', 'Backend and API included', 'App Store submission handled', 'Post-launch support available', 'Scalable architecture', 'Starting from Rs.50,000'],
  faqs: [
    { q: 'How much does app development cost?', a: 'Simple apps start from Rs.50,000. Feature-rich apps with backend start from Rs.1,50,000+.' },
    { q: 'How long does app development take?', a: 'Simple apps take 4-6 weeks. Complex apps with custom features take 8-16 weeks.' },
    { q: 'Do you build for both Android and iOS?', a: 'Yes, we build for both platforms. We can build native apps or cross-platform apps using React Native.' },
    { q: 'Do you handle App Store submission?', a: 'Yes, we handle complete submission to Google Play Store and Apple App Store.' },
  ],
  ctaDesc: 'Build a mobile app that engages your customers and grows your business.',
}

export default function AppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
