import ServicePageLayout from '@/components/ServicePageLayout'
import { ShoppingCart, CreditCard, Package, BarChart3, Shield, Smartphone, Settings, TrendingUp } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Ecommerce Website Development in India — Online Store Design | LaunchGrids',
  description: 'LaunchGrids builds high-converting ecommerce websites in India. Custom online stores with payment gateway, product management, order tracking, and mobile-responsive design. Starting from ₹40,000.',
  keywords: ['ecommerce website development India', 'online store development India', 'ecommerce website design India', 'ecommerce agency India', 'custom ecommerce development India', 'payment gateway integration India', 'ecommerce setup India'],
  alternates: { canonical: 'https://launchgrids.in/services/ecommerce-website' },
  openGraph: {
    title: 'Ecommerce Website Development in India | LaunchGrids',
    description: 'High-converting online stores with payment gateway and order management. Starting from ₹40,000.',
    url: 'https://launchgrids.in/services/ecommerce-website',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Website Development in India | LaunchGrids',
    description: 'High-converting online stores with payment gateway and order management. Starting from ₹40,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Website Development',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Custom ecommerce website development with payment gateway integration in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '40000' },
  url: 'https://launchgrids.in/services/ecommerce-website',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Ecommerce Website', item: 'https://launchgrids.in/services/ecommerce-website' },
  ],
}

const service = {
  name: 'Ecommerce Development',
  category: 'Web & Tech',
  orbColor: 'bg-blue-100 dark:bg-blue-900/20',
  iconBg: 'bg-blue-50 dark:bg-blue-950/20',
  iconColor: 'text-blue-600 dark:text-blue-400',
  heroTitle: 'Launch Your Online Store with',
  heroHighlight: 'Ecommerce Development',
  heroDesc: 'We build powerful, conversion-focused ecommerce websites for Indian businesses. From product listings to payment gateway — everything your online store needs to sell and scale.',
  heroPoints: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Mobile Optimized'],
  stats: [
    { value: '50+', label: 'Stores Launched' },
    { value: '2x', label: 'Conversion Rate' },
    { value: '99.9%', label: 'Uptime' },
    { value: '14-21', label: 'Days Delivery' },
  ],
  offerDesc: 'Complete ecommerce solution — from store design to payment integration, everything your online business needs.',
  offerings: [
    { icon: <ShoppingCart className="w-6 h-6" />, title: 'Custom Online Store', desc: 'Fully custom ecommerce website with product pages, categories, filters, and conversion-focused design.' },
    { icon: <CreditCard className="w-6 h-6" />, title: 'Payment Gateway Integration', desc: 'Razorpay, PayU, Cashfree, and UPI payment integration for seamless checkout experience.' },
    { icon: <Package className="w-6 h-6" />, title: 'Product & Inventory Management', desc: 'Easy-to-use admin panel to manage products, stock, variants, pricing, and categories.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Order Management System', desc: 'Complete order tracking, status updates, invoice generation, and customer notifications.' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile-First Design', desc: 'Optimized for mobile shopping — 70% of Indian ecommerce happens on mobile devices.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics & Sales Reports', desc: 'Sales dashboard, revenue reports, best-selling products, and customer behavior analytics.' },
  ],
  process: [
    { title: 'Store Planning', desc: 'We plan your store structure, product categories, and user journey for maximum conversions.' },
    { title: 'Design & UI', desc: 'We design a conversion-focused store UI with your brand colors, fonts, and product showcase.' },
    { title: 'Development & Integration', desc: 'We build the store, integrate payment gateway, and set up the admin panel.' },
    { title: 'Testing & Launch', desc: 'Complete testing of checkout flow, payments, and mobile experience before going live.' },
  ],
  whyDesc: 'Your ecommerce store needs to convert visitors into buyers. We build stores optimized for sales, not just looks.',
  benefits: [
    'Custom design tailored to your brand and products',
    'Multiple payment options — UPI, cards, net banking, wallets',
    'Mobile-optimized for India\'s mobile-first shoppers',
    'Fast loading speed for better conversions and SEO',
    'Easy admin panel to manage products and orders',
    'SEO-optimized product pages for organic traffic',
    'Secure checkout with SSL and fraud protection',
    'Post-launch support and maintenance available',
  ],
  faqs: [
    { q: 'How much does an ecommerce website cost?', a: 'Ecommerce websites start from ₹40,000 for basic stores. Feature-rich stores with custom functionality range from ₹80,000 to ₹2,00,000+.' },
    { q: 'Which payment gateway do you integrate?', a: 'We integrate Razorpay, PayU, Cashfree, and other popular Indian payment gateways with UPI, cards, and net banking support.' },
    { q: 'Can I manage products myself?', a: 'Yes, we provide a simple admin panel where you can add, edit, and manage products, orders, and inventory without any technical knowledge.' },
    { q: 'Do you help with product photography?', a: 'We can guide you on product photography requirements. We also offer graphic design services for product banners and promotional creatives.' },
  ],
  ctaDesc: 'Launch your online store and start selling across India with a professional ecommerce website.',
}

export default function EcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
