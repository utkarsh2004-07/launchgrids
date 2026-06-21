'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { CheckCircle2, Wrench, TrendingUp, Rocket } from 'lucide-react'

const plans = [
  {
    icon: <Wrench className="w-6 h-6" />,
    name: 'Basic Maintenance',
    price: 'Rs.5,000 - Rs.10,000',
    period: '/month',
    desc: 'Essential upkeep to keep your website secure, updated, and running smoothly.',
    gradient: 'from-gray-500 to-slate-500',
    color: 'gray',
    features: [
      'Website updates',
      'Security check',
      'Backup management',
      'Small content changes',
      'Basic technical support',
    ],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    name: 'Growth Maintenance',
    price: 'Rs.15,000 - Rs.30,000',
    period: '/month',
    desc: 'Active management to keep your website growing with SEO and social updates.',
    gradient: 'from-brand-blue to-brand-violet',
    color: 'blue',
    popular: true,
    features: [
      'Website updates',
      'SEO updates & monitoring',
      'Social media posts',
      'Analytics performance report',
      'Google Business updates',
      'WhatsApp business support',
    ],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    name: 'Premium Growth Management',
    price: 'Rs.40,000 - Rs.1,00,000+',
    period: '/month',
    desc: 'Full-scale digital management - marketing, ads, content, and growth strategy.',
    gradient: 'from-violet-600 to-purple-700',
    color: 'violet',
    features: [
      'SEO management',
      'Google & Meta Ads management',
      'Social media management',
      'Reels creation & editing',
      'Content writing',
      'Website optimization',
      'Lead generation',
      'Monthly strategy call',
    ],
  },
]

export default function Maintenance() {
  useScrollReveal()

  return (
    <section className="section-padding bg-white dark:bg-[#0C0A1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Ongoing Support</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Monthly{' '}
            <span className="gradient-text">Maintenance Plans</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Keep your website and digital presence running, growing, and converting every month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? `bg-gradient-to-br ${plan.gradient} text-white shadow-xl shadow-blue-200/40 dark:shadow-blue-900/40`
                  : 'card-base bg-white dark:bg-[#12103A]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="popular-badge">Recommended</span>
                </div>
              )}

              <div className="p-7">
                <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center ${
                  plan.popular ? 'bg-white/20' : `bg-gradient-to-br ${plan.gradient} bg-opacity-10`
                }`}>
                  <span className={plan.popular ? 'text-white' : 'text-brand-blue'}>{plan.icon}</span>
                </div>

                <h3
                  className={`text-xl font-extrabold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.desc}
                </p>

                <div className={`rounded-xl p-4 mb-6 ${plan.popular ? 'bg-white/15' : 'bg-gray-50 dark:bg-white/4'}`}>
                  <span
                    className={`text-2xl font-extrabold ${plan.popular ? 'text-white' : 'gradient-text'}`}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.popular ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-2.5 mb-7">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-white/80' : 'text-brand-blue'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-700 dark:text-gray-300'}`}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'bg-white text-brand-blue hover:bg-blue-50'
                      : 'bg-brand-blue text-white hover:bg-blue-700'
                  }`}
                >
                  Get This Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
