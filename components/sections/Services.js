'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  Globe, ShoppingCart, Layers, Palette, Megaphone, Search,
  MapPin, Instagram, Video, FileText, MessageCircle, Bot,
  BarChart3, Code2, Smartphone, Box, PenTool, Star,
  Settings, Zap, TrendingUp, Shield, Users, Layout,
  Chrome, Facebook, Eye
} from 'lucide-react'

const categories = ['All', 'Web & Tech', 'Branding & Design', 'Marketing', 'Automation', 'Content']

const services = [
  { icon: <Globe className="w-5 h-5" />, title: 'Website Development', desc: 'Professional, responsive, fast-loading websites for businesses, startups, and service providers.', cat: 'Web & Tech', color: 'blue' },
  { icon: <ShoppingCart className="w-5 h-5" />, title: 'Ecommerce Website Design', desc: 'Online stores with product pages, cart, payment gateway, order management, and conversion-focused design.', cat: 'Web & Tech', color: 'blue' },
  { icon: <Code2 className="w-5 h-5" />, title: 'Custom Software Development', desc: 'Business dashboards, CRM systems, booking systems, internal tools, and custom web applications.', cat: 'Web & Tech', color: 'blue' },
  { icon: <Layers className="w-5 h-5" />, title: 'UI/UX Design', desc: 'Clean and user-friendly designs for websites, apps, dashboards, and digital platforms.', cat: 'Branding & Design', color: 'violet' },
  { icon: <Palette className="w-5 h-5" />, title: 'Branding', desc: 'Brand identity, color palette, typography, logo direction, brand guidelines, and visual presentation.', cat: 'Branding & Design', color: 'violet' },
  { icon: <PenTool className="w-5 h-5" />, title: 'Logo Design', desc: 'Professional logo concepts, brand mark design, and complete logo package for your business.', cat: 'Branding & Design', color: 'violet' },
  { icon: <Settings className="w-5 h-5" />, title: 'Domain & Hosting Setup', desc: 'Complete domain registration, hosting configuration, SSL setup, and website deployment.', cat: 'Web & Tech', color: 'blue' },
  { icon: <Megaphone className="w-5 h-5" />, title: 'Digital Marketing', desc: 'Online growth through social media, ads, SEO, content, and lead generation systems.', cat: 'Marketing', color: 'orange' },
  { icon: <Search className="w-5 h-5" />, title: 'SEO', desc: 'Search engine optimization to help businesses rank better on Google and get organic traffic.', cat: 'Marketing', color: 'orange' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Google Business Profile Setup', desc: 'Setup and optimization for local businesses to appear on Google Search and Maps.', cat: 'Marketing', color: 'orange' },
  { icon: <Instagram className="w-5 h-5" />, title: 'Instagram Page Setup', desc: 'Professional Instagram profile setup, bio optimization, highlights, and initial page strategy.', cat: 'Content', color: 'pink' },
  { icon: <Eye className="w-5 h-5" />, title: 'Instagram Post Design', desc: 'Branded post creatives, carousel designs, promotional content, and consistent visual templates.', cat: 'Content', color: 'pink' },
  { icon: <Video className="w-5 h-5" />, title: 'Reels Editing', desc: 'Short-form video editing for Instagram reels, brand storytelling, and promotional clips.', cat: 'Content', color: 'pink' },
  { icon: <Video className="w-5 h-5" />, title: 'Video Editing', desc: 'Reels, ad videos, brand videos, explainer videos, and short-form content editing.', cat: 'Content', color: 'pink' },
  { icon: <FileText className="w-5 h-5" />, title: 'Content Writing', desc: 'Website content, service pages, captions, blogs, product descriptions, and marketing copy.', cat: 'Content', color: 'pink' },
  { icon: <MessageCircle className="w-5 h-5" />, title: 'WhatsApp Business Setup', desc: 'WhatsApp Business account setup, catalog, quick replies, and professional communication setup.', cat: 'Automation', color: 'green' },
  { icon: <Zap className="w-5 h-5" />, title: 'WhatsApp Business Automation', desc: 'Automated replies, lead handling, catalog setup, and customer communication flow via WhatsApp.', cat: 'Automation', color: 'green' },
  { icon: <Bot className="w-5 h-5" />, title: 'Chatbot Setup', desc: 'Basic chatbot for website or WhatsApp to answer customer queries and collect leads automatically.', cat: 'Automation', color: 'green' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics Setup', desc: 'Google Analytics, Search Console, Meta Pixel, conversion tracking, and performance reports.', cat: 'Marketing', color: 'orange' },
  { icon: <Chrome className="w-5 h-5" />, title: 'Google Search Console Setup', desc: 'Complete GSC setup, sitemap submission, indexing monitoring, and search performance tracking.', cat: 'Marketing', color: 'orange' },
  { icon: <Facebook className="w-5 h-5" />, title: 'Meta Pixel Setup', desc: 'Facebook/Instagram pixel installation, event tracking, custom audiences, and retargeting setup.', cat: 'Marketing', color: 'orange' },
  { icon: <Users className="w-5 h-5" />, title: 'CRM Setup', desc: 'Customer relationship management system setup to manage leads, contacts, and sales pipeline.', cat: 'Automation', color: 'green' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Lead Generation', desc: 'Complete lead generation system with landing pages, forms, ads, and follow-up automation.', cat: 'Marketing', color: 'orange' },
  { icon: <Layout className="w-5 h-5" />, title: 'Landing Page Design', desc: 'High-converting landing pages for products, services, events, courses, and lead capture.', cat: 'Web & Tech', color: 'blue' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Sales Funnel Design', desc: 'Complete sales funnel from awareness to conversion with landing pages, emails, and automation.', cat: 'Web & Tech', color: 'blue' },
  { icon: <Search className="w-5 h-5" />, title: 'Google Ads Setup', desc: 'Google Search, Display, and Shopping ads setup with keyword research, targeting, and tracking.', cat: 'Marketing', color: 'orange' },
  { icon: <Facebook className="w-5 h-5" />, title: 'Meta Ads Setup', desc: 'Facebook and Instagram advertising setup with audience targeting, creatives, and campaign optimization.', cat: 'Marketing', color: 'orange' },
  { icon: <Instagram className="w-5 h-5" />, title: 'Social Media Management', desc: 'Monthly social media content planning, posting, engagement, and account growth management.', cat: 'Content', color: 'pink' },
  { icon: <Shield className="w-5 h-5" />, title: 'Online Reputation Management', desc: 'Brand monitoring, negative review handling, positive PR, and online reputation building.', cat: 'Marketing', color: 'orange' },
  { icon: <Star className="w-5 h-5" />, title: 'Review Management', desc: 'Google and platform review monitoring, response strategy, and review generation campaigns.', cat: 'Marketing', color: 'orange' },
  { icon: <Settings className="w-5 h-5" />, title: 'Website Maintenance', desc: 'Regular website updates, security checks, backups, content changes, and technical support.', cat: 'Web & Tech', color: 'blue' },
  { icon: <Zap className="w-5 h-5" />, title: 'Speed Optimization', desc: 'Core Web Vitals improvement, image optimization, caching, and performance enhancement.', cat: 'Web & Tech', color: 'blue' },
  { icon: <Smartphone className="w-5 h-5" />, title: 'App Development', desc: 'Mobile application development for Android and iOS for business use cases and customer engagement.', cat: 'Web & Tech', color: 'blue' },
  { icon: <Box className="w-5 h-5" />, title: '3D Modeling', desc: 'Product visualization, architectural rendering, and 3D graphics for digital and marketing use.', cat: 'Branding & Design', color: 'violet' },
  { icon: <Palette className="w-5 h-5" />, title: 'Graphic Design', desc: 'Banners, brochures, business cards, presentations, social creatives, and marketing collateral.', cat: 'Branding & Design', color: 'violet' },
]

const colorMap = {
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/20', icon: 'text-blue-600 dark:text-blue-400', border: 'border-blue-100 dark:border-blue-900/20' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-950/20', icon: 'text-violet-600 dark:text-violet-400', border: 'border-violet-100 dark:border-violet-900/20' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/20', icon: 'text-orange-600 dark:text-orange-400', border: 'border-orange-100 dark:border-orange-900/20' },
  pink: { bg: 'bg-pink-50 dark:bg-pink-950/20', icon: 'text-pink-600 dark:text-pink-400', border: 'border-pink-100 dark:border-pink-900/20' },
  green: { bg: 'bg-green-50 dark:bg-green-950/20', icon: 'text-green-600 dark:text-green-400', border: 'border-green-100 dark:border-green-900/20' },
}

export default function Services() {
  useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.cat === activeCategory)

  return (
    <section id="services" className="section-padding section-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">35+ Services</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Complete Service{' '}
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From website to automation — every service your business needs to grow online, in one place.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30'
                  : 'bg-white dark:bg-[#1C1840] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-brand-blue dark:hover:border-brand-violet hover:text-brand-blue dark:hover:text-brand-violet'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((s, i) => {
            const c = colorMap[s.color]
            return (
              <div
                key={s.title}
                className="card-base bg-white dark:bg-[#12103A] p-5 group"
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={c.icon}>{s.icon}</span>
                </div>
                <h3
                  className="font-bold text-gray-900 dark:text-white text-sm mb-1.5"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                <div className="mt-3">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${c.bg} ${c.icon}`}>
                    {s.cat}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="#contact" className="btn-primary mx-auto inline-flex">
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  )
}
