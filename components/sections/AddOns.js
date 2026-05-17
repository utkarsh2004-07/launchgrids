'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Plus } from 'lucide-react'

const addons = [
  { emoji: '📱', name: 'Mobile App Development' },
  { emoji: '🛒', name: 'Advanced Ecommerce Features' },
  { emoji: '🤖', name: 'Advanced Chatbot' },
  { emoji: '⚙️', name: 'CRM Automation' },
  { emoji: '🔍', name: 'Monthly SEO' },
  { emoji: '📱', name: 'Monthly Social Media Management' },
  { emoji: '🎯', name: 'Google Ads Management' },
  { emoji: '📢', name: 'Meta Ads Management' },
  { emoji: '📸', name: 'Product Photography' },
  { emoji: '📦', name: '3D Modeling' },
  { emoji: '🎨', name: 'Graphic Design' },
  { emoji: '🔧', name: 'Website Maintenance' },
  { emoji: '🌐', name: 'Hosting Renewal' },
  { emoji: '✍️', name: 'Content Writing Package' },
  { emoji: '🎬', name: 'Reel Shooting & Editing' },
]

export default function AddOns() {
  useScrollReveal()

  return (
    <section className="section-padding section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">
            <Plus className="w-3 h-3" />
            Flexible Add-Ons
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Add-On{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Customize your package with any additional services your business needs.
          </p>
        </div>

        <div className="reveal flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {addons.map((a) => (
            <div
              key={a.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-[#12103A] border border-gray-200 dark:border-white/8 hover:border-brand-blue dark:hover:border-brand-violet hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
            >
              <span className="text-base">{a.emoji}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-brand-blue dark:group-hover:text-blue-400 transition-colors">
                {a.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            Need a specific service not listed here? We'll customize a plan for you.
          </p>
          <a href="#contact" className="btn-primary mx-auto inline-flex">
            <Plus className="w-4 h-4" />
            Request Custom Add-On
          </a>
        </div>
      </div>
    </section>
  )
}
