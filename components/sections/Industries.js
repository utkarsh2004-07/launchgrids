'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const industries = [
  { emoji: '🏪', name: 'Local Shops' },
  { emoji: '💇', name: 'Salons & Spas' },
  { emoji: '☕', name: 'Cafes & Restaurants' },
  { emoji: '🏥', name: 'Clinics & Healthcare' },
  { emoji: '📚', name: 'Coaching & Institutes' },
  { emoji: '🏠', name: 'Real Estate' },
  { emoji: '💼', name: 'Consultants & Professionals' },
  { emoji: '🛒', name: 'Ecommerce Brands' },
  { emoji: '🚀', name: 'Startups' },
  { emoji: '⚙️', name: 'Service Businesses' },
  { emoji: '💪', name: 'Fitness Businesses' },
  { emoji: '🏡', name: 'Interior Designers' },
  { emoji: '🔨', name: 'Construction Businesses' },
  { emoji: '🎥', name: 'Agencies & Creators' },
]

export default function Industries() {
  useScrollReveal()

  return (
    <section className="section-padding bg-white dark:bg-[#0C0A1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Industries We Serve</div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            We Work With{' '}
            <span className="gradient-text">Every Business Type</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether you're a local shop or a growing startup, LaunchGrids has the right solution for you.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="card-base bg-white dark:bg-[#12103A] p-4 flex flex-col items-center gap-2 text-center group cursor-default"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{ind.emoji}</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
