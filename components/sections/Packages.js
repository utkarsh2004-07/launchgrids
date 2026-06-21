'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Rocket } from 'lucide-react'

const packages = [
  {
    icon: <Zap className="w-6 h-6" />,
    name: 'Launch',
    tagline: 'Start your business online',
    price: 'Rs.25,000 - Rs.50,000',
    bestFor: 'Small businesses, local shops, freelancers, salons, cafes, coaching classes, clinics, and service providers.',
    cta: 'Start Your Business Online',
    popular: false,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Basic business consultation',
      'Domain and hosting setup',
      'Mobile responsive design',
      'Basic UI/UX design',
      'Basic logo and branding direction',
      'Brand colors and fonts',
      'Google Business Profile setup',
      'WhatsApp Business setup',
      'Contact form',
      'Social media profile setup',
      '5 Instagram post designs',
      'Basic SEO setup',
      'Google Analytics setup',
      'Basic website speed optimization',
    ],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    name: 'Growth',
    tagline: 'Scale your brand presence',
    price: 'Rs.60,000 - Rs.1,20,000',
    bestFor: 'Growing businesses, local brands, consultants, clinics, real estate, restaurants, institutes, service companies, and professionals.',
    cta: 'Grow Your Brand',
    popular: true,
    color: 'violet',
    gradient: 'from-brand-blue to-brand-violet',
    features: [
      'Everything in Launch Package, plus:',
      'Advanced UI/UX design',
      'Complete brand identity',
      'Logo direction, color palette, typography',
      'SEO setup for important pages',
      'Google Business Profile optimization',
      '10 to 15 Instagram post designs',
      '3 to 5 reels editing',
      'Website content writing',
      'Blog setup',
      'WhatsApp Business automation',
      'Lead capture form',
      'Professional email setup',
      'Basic chatbot setup',
      'Google Analytics and Search Console',
      'Meta Pixel setup',
      '1 month social media management',
      'Basic digital marketing strategy',
    ],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    name: 'Scale',
    tagline: 'Complete business growth system',
    price: 'Rs.1,50,000 - Rs.3,00,000+',
    bestFor: 'Ecommerce businesses, startups, premium brands, online stores, companies, and businesses needing complete digital systems.',
    cta: 'Scale Your Business',
    popular: false,
    color: 'purple',
    gradient: 'from-purple-600 to-violet-700',
    features: [
      'Everything in Growth Package, plus:',
      'Custom website or ecommerce website',
      'Product listing setup',
      'Payment gateway integration',
      'Order management setup',
      'Advanced UI/UX design',
      'Advanced branding system',
      'Sales funnel design',
      'Landing pages',
      'SEO strategy',
      'Blog/content strategy',
      '20 to 30 Instagram post designs',
      '8 to 12 reels editing',
      'Video editing for ads',
      'Advanced WhatsApp automation',
      'Chatbot setup',
      'CRM setup',
      'Email marketing setup',
      'Google Ads setup',
      'Meta Ads setup',
      'Analytics dashboard',
      'Conversion tracking',
      'Review management setup',
      '1 to 2 months marketing support',
      'Custom software features if needed',
    ],
  },
]

const colorStyles = {
  blue: {
    iconBg: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    priceBg: 'bg-blue-50 dark:bg-blue-950/20',
    priceColor: 'text-blue-700 dark:text-blue-300',
    checkColor: 'text-blue-500',
    ctaBg: 'bg-blue-600 hover:bg-blue-700',
    border: 'border-gray-200 dark:border-white/8',
  },
  violet: {
    iconBg: 'bg-gradient-to-br from-brand-blue to-brand-violet',
    iconColor: 'text-white',
    priceBg: 'bg-white/20',
    priceColor: 'text-white',
    checkColor: 'text-white/90',
    ctaBg: 'bg-white hover:bg-blue-50',
    border: 'border-transparent',
  },
  purple: {
    iconBg: 'bg-purple-50 dark:bg-purple-950/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    priceBg: 'bg-purple-50 dark:bg-purple-950/20',
    priceColor: 'text-purple-700 dark:text-purple-300',
    checkColor: 'text-purple-500',
    ctaBg: 'bg-purple-600 hover:bg-purple-700',
    border: 'border-gray-200 dark:border-white/8',
  },
}

export default function Packages() {
  useScrollReveal()

  return (
    <section id="packages" className="section-padding section-alt relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bottom-[-200px] right-[-200px] bg-violet-100 dark:bg-violet-950/20 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Simple Pricing</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Transparent{' '}
            <span className="gradient-text">Packages</span> for Every Business
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose a package that fits your business stage and goals. All packages are customizable.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {packages.map((pkg, i) => {
            const c = colorStyles[pkg.color]
            const isPopular = pkg.popular

            return (
              <div
                key={pkg.name}
                className={`reveal reveal-delay-${i + 1} relative rounded-2xl overflow-hidden flex flex-col ${
                  isPopular
                    ? `bg-gradient-to-br ${pkg.gradient} text-white shadow-2xl shadow-blue-200/40 dark:shadow-blue-900/40 scale-[1.02] lg:scale-105`
                    : `card-base bg-white dark:bg-[#12103A] ${c.border}`
                }`}
              >
                {isPopular && (
                  <div className="absolute top-4 right-4">
                    <span className="popular-badge">Most Popular</span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${isPopular ? 'bg-white/20' : c.iconBg} flex items-center justify-center`}>
                      <span className={isPopular ? 'text-white' : c.iconColor}>{pkg.icon}</span>
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-white/60' : 'text-gray-400'}`}>Package</div>
                      <h3
                        className={`text-2xl font-extrabold ${isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  <p className={`text-sm mb-5 ${isPopular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className={`rounded-xl px-5 py-4 mb-5 ${isPopular ? 'bg-white/15' : c.priceBg}`}>
                    <div className={`text-xl font-extrabold mb-0.5 ${isPopular ? 'text-white' : c.priceColor}`} style={{ fontFamily: 'Syne, sans-serif' }}>
                      {pkg.price}
                    </div>
                    <div className={`text-xs ${isPopular ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'}`}>Starting price (customizable)</div>
                  </div>

                  {/* Best for */}
                  <div className={`text-xs mb-5 p-3 rounded-lg ${isPopular ? 'bg-white/10' : 'bg-gray-50 dark:bg-white/4'}`}>
                    <span className={`font-bold ${isPopular ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>Best for: </span>
                    <span className={isPopular ? 'text-white/70' : 'text-gray-600 dark:text-gray-400'}>{pkg.bestFor}</span>
                  </div>

                  {/* Features */}
                  <div className="flex-1 space-y-2 mb-7">
                    {pkg.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isPopular ? 'text-white/80' : c.checkColor}`}
                        />
                        <span className={`text-xs leading-relaxed ${
                          f.startsWith('Everything') ? 'font-bold' : ''
                        } ${isPopular ? 'text-white/80' : 'text-gray-700 dark:text-gray-300'}`}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 ${
                      isPopular
                        ? `${c.ctaBg} text-brand-blue`
                        : `${c.ctaBg} text-white`
                    }`}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pricing note */}
        <div className="mt-10 text-center reveal">
          <div className="inline-block px-6 py-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>Note:</strong> Final pricing depends on business type, website size, ecommerce features, content requirement, automation needs, custom software features, and marketing goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
