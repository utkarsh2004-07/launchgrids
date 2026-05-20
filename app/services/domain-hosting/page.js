import ServicePageLayout from '@/components/ServicePageLayout'
import { Globe, Shield, Settings, Zap, Server, Lock } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Domain & Hosting Setup in India — Website Deployment | LaunchGrids',
  description: 'Complete domain registration, hosting setup, SSL certificate, and website deployment services in India. Get your website live with professional server configuration.',
  keywords: ['domain hosting setup India', 'website hosting India', 'SSL certificate setup India', 'domain registration India', 'website deployment India'],
  alternates: { canonical: 'https://launchgrids.in/services/domain-hosting' },
  openGraph: { title: 'Domain & Hosting Setup India | LaunchGrids', url: 'https://launchgrids.in/services/domain-hosting', images: [{ url: '/logo.png' }] },
}

const service = {
  name: 'Domain & Hosting Setup',
  category: 'Web & Tech',
  orbColor: 'bg-blue-100 dark:bg-blue-900/20',
  iconBg: 'bg-blue-50 dark:bg-blue-950/20',
  iconColor: 'text-blue-600 dark:text-blue-400',
  heroTitle: 'Complete Domain & Hosting',
  heroHighlight: 'Setup for Your Website',
  heroDesc: 'We handle complete domain registration, hosting configuration, SSL setup, DNS management, and website deployment so your site goes live without any technical hassle.',
  heroPoints: ['Domain Registration', 'Hosting Setup', 'SSL Certificate', 'DNS Configuration'],
  stats: [{ value: '200+', label: 'Sites Deployed' }, { value: '99.9%', label: 'Uptime' }, { value: '24hr', label: 'Setup Time' }, { value: 'Free', label: 'SSL Included' }],
  offerDesc: 'End-to-end domain and hosting setup — from registration to going live.',
  offerings: [
    { icon: <Globe className="w-6 h-6" />, title: 'Domain Registration', desc: 'Register your .in, .com, .co.in domain with the best registrar for your needs.' },
    { icon: <Server className="w-6 h-6" />, title: 'Hosting Configuration', desc: 'Setup and configure hosting on Cloudflare, Vercel, Hostinger, or your preferred provider.' },
    { icon: <Lock className="w-6 h-6" />, title: 'SSL Certificate', desc: 'Free SSL certificate setup for HTTPS security and better Google rankings.' },
    { icon: <Settings className="w-6 h-6" />, title: 'DNS Management', desc: 'Complete DNS record configuration including A, CNAME, MX, and TXT records.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Website Deployment', desc: 'Deploy your website files to the server and make it live on your domain.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Email Setup', desc: 'Professional business email setup like hello@yourbusiness.com.' },
  ],
  process: [
    { title: 'Domain Selection', desc: 'We help you choose the right domain name and register it.' },
    { title: 'Hosting Setup', desc: 'We configure your hosting environment with optimal settings.' },
    { title: 'SSL & DNS', desc: 'We install SSL certificate and configure all DNS records.' },
    { title: 'Go Live', desc: 'We deploy your website and verify everything is working correctly.' },
  ],
  whyDesc: 'Proper hosting setup ensures your website is fast, secure, and always online.',
  benefits: ['Complete setup from domain to live website', 'Free SSL certificate included', 'Fast loading hosting configuration', 'Professional business email setup', 'DNS management and configuration', '99.9% uptime guarantee', 'Technical support after setup', 'Works with all major hosting providers'],
  faqs: [
    { q: 'Which hosting provider do you recommend?', a: 'For most businesses we recommend Cloudflare Pages (free), Vercel, or Hostinger depending on the website type.' },
    { q: 'How much does domain and hosting cost?', a: 'Domain costs ₹500-1,500/year. Hosting ranges from free (Cloudflare Pages) to ₹3,000-10,000/year for premium hosting.' },
    { q: 'Do you provide ongoing hosting management?', a: 'Yes, we offer monthly maintenance plans that include hosting management, renewals, and technical support.' },
    { q: 'Can you migrate my existing website?', a: 'Yes, we can migrate your existing website from any hosting provider to a new one with zero downtime.' },
  ],
  ctaDesc: 'Get your website live with professional domain and hosting setup.',
}

export default function DomainHostingPage() {
  return <ServicePageLayout service={service} />
}
