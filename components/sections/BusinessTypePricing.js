'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Store, Briefcase, ShoppingCart, Code2, ArrowRight } from 'lucide-react'

const bizTypes = [
  {
    icon: <Store className="w-7 h-7" />,
    type: 'Local Business',
    examples: 'Salon, Cafe, Gym, Coaching Class, Clinic, Shop',
    price: 'Rs.25,000 - Rs.80,000',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
    border: 'border-blue-100 dark:border-blue-900/20',
    needs: [
      'Professional Website',
      'Google Business Setup',
      'Instagram Profile Setup',
      'WhatsApp Business Setup',
      'Basic SEO',
      'Social Media Posts',
    ],
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    type: 'Service Business',
    examples: 'Consultant, Real Estate, Architect, Agency, Finance, Legal, Education',
    price: 'Rs.50,000 - Rs.1,50,000',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20',
    border: 'border-violet-100 dark:border-violet-900/20',
    needs: [
      'Strong Branding',
      'Lead Generation System',
      'Landing Pages',
      'SEO Strategy',
      'Content Creation',
      'Google & Meta Ads Setup',
    ],
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    type: 'Ecommerce Business',
    examples: 'Clothing Store, Beauty Products, Handmade Products, Electronics, Online Retail',
    price: 'Rs.1,50,000 - Rs.4,00,000+',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    bg: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
    border: 'border-orange-100 dark:border-orange-900/20',
    needs: [
      'Product Pages & Cart',
      'Payment Gateway Integration',
      'Order Management System',
      'Shipping Setup',
      'Product Content & SEO',
      'Ads & Automation',
    ],
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    type: 'Startup / Custom Software',
    examples: 'SaaS, Booking Platform, Dashboard, CRM, Internal Software',
    price: 'Rs.2,00,000 - Rs.10,00,000+',
    color: 'green',
    gradient: 'from-green-500 to-teal-500',
    bg: 'from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20',
    border: 'border-green-100 dark:border-green-900/20',
    needs: [
      'Custom Development',
      'UI/UX Design',
      'Backend & Database',
      'Admin Panel & User Login',
      'Payment Integration',
      'Testing & Maintenance',
    ],
  },
]

const colorMap = {
  blue: { icon: 'text-blue-600 dark:text-blue-400', bullet: 'bg-blue-500', price: 'text-blue-700 dark:text-blue-300', badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
  violet: { icon: 'text-violet-600 dark:text-violet-400', bullet: 'bg-violet-500', price: 'text-violet-700 dark:text-violet-300', badge: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300' },
  orange: { icon: 'text-orange-600 dark:text-orange-400', bullet: 'bg-orange-500', price: 'text-orange-700 dark:text-orange-300', badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' },
  green: { icon: 'text-green-600 dark:text-green-400', bullet: 'bg-green-500', price: 'text-green-700 dark:text-green-300', badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
}

export default function BusinessTypePricing() {
  useScrollReveal()

  return (
    <section className="section-padding bg-white dark:bg-[#0C0A1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">By Business Type</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Pricing by{' '}
            <span className="gradient-text">Your Business Type</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Different businesses have different needs. Find the right investment range for yours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {bizTypes.map((b, i) => {
            const c = colorMap[b.color]
            return (
              <div
                key={b.type}
                className={`reveal reveal-delay-${i + 1} card-base bg-white dark:bg-[#12103A] overflow-hidden group`}
              >
                {/* Top color bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${b.gradient}`} />

                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.bg} border ${b.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={c.icon}>{b.icon}</span>
                  </div>

                  {/* Type */}
                  <h3
                    className="font-extrabold text-lg text-gray-900 dark:text-white mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {b.type}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-4 leading-relaxed">{b.examples}</p>

                  {/* Price badge */}
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-bold mb-5 ${c.badge}`}>
                    {b.price}
                  </div>

                  {/* Needs */}
                  <div className="space-y-2">
                    {b.needs.map(n => (
                      <div key={n} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.bullet} flex-shrink-0`} />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{n}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 flex items-center gap-1 text-xs font-bold text-brand-blue dark:text-blue-400 hover:gap-2 transition-all"
                  >
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
