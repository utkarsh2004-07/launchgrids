'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Vivek Kesur',
    service: 'Ecommerce Website',
    review: 'The website turned out exactly how I wanted. It has a clean design, is easy to navigate, and works smoothly on both mobile and desktop. The checkout process is simple, and the overall shopping experience feels professional.',
    rating: 5,
    initials: 'VK',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Mamta Singh',
    service: 'Email Marketing',
    review: 'Very happy with their Email Marketing Services. Great campaign strategy, responsive team, and improved email performance. Highly recommended for anyone looking to grow through Email Marketing.',
    rating: 5,
    initials: 'MS',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Udupi Krishna Restaurant',
    service: 'Google Business & Instagram',
    review: 'A big thank you to the LaunchGrids team for helping us build a strong online presence. They handled our Google Business Profile with great attention to detail, and the results have been impressive. Their professionalism, creativity, and quick support gave us the confidence to also hand over our Instagram management to them. We look forward to a long-term partnership.',
    rating: 5,
    initials: 'UK',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Gaurav',
    service: 'Video Editing',
    review: 'He did my work of video editing and it was just like I wanted. I was satisfied with the outcome and after that I know I have the proper guy who knows actually what a client needs and delivers the exact result.',
    rating: 5,
    initials: 'G',
    color: 'from-green-500 to-teal-500',
  },
  {
    name: 'Harsh Singh',
    service: 'Digital Marketing',
    review: 'We had a wonderful experience working with this agency. The team is professional, supportive, and result-oriented. They guided us throughout the process and delivered quality digital marketing services. Looking forward to working with them again. Highly recommended.',
    rating: 5,
    initials: 'HS',
    color: 'from-pink-500 to-rose-500',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  useScrollReveal()

  return (
    <section className="section-padding section-alt relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-[-100px] left-[-200px] bg-blue-100 dark:bg-blue-950/20 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Client Reviews</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real reviews from real businesses we've helped grow online.
          </p>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-white dark:bg-[#12103A] border border-gray-200 dark:border-white/8 shadow-sm">
            <StarRating />
            <span className="text-sm font-bold text-gray-900 dark:text-white">5.0</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">on Google</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i % 3) + 1} card-base bg-white dark:bg-[#12103A] p-6 flex flex-col`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gray-200 dark:text-white/10 mb-3 flex-shrink-0" />

              {/* Review text */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-5">
                "{t.review}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/6">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-extrabold">{t.initials}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-gray-900 dark:text-white truncate">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 truncate">{t.service}</div>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <StarRating count={t.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-10 text-center reveal">
          <a
            href="https://share.google/Zsypci6xUwgTp7s92"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-blue-400 hover:underline"
          >
            View all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
