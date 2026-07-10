import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog | LaunchGrids — Digital Business Tips & Guides',
  description: 'Website development, SEO, digital marketing and business growth guides. Practical tips for businesses across India.',
  alternates: { canonical: 'https://launchgrids.in/blog' },
  openGraph: {
    title: 'Blog | LaunchGrids',
    description: 'Website development, SEO, digital marketing and business growth guides.',
    url: 'https://launchgrids.in/blog',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'website-cost-guide-2026',
    title: 'How Much Does a Website Cost? Complete Guide (2026)',
    excerpt: 'Website cost ranges from ₹15,000 to ₹10,00,000+ depending on your business type. Complete breakdown — from simple business websites to full ecommerce stores.',
    date: '2025-01-15',
    category: 'Website Development',
    catColor: 'blue',
    readTime: '8 min read',
  },
]

const catColors = {
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
  green: 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300',
}

export default function BlogPage() {
  return (
    <>
      <main className="bg-white dark:bg-[#0C0A1E] min-h-screen transition-colors duration-300">
        <Navbar />
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              Blog
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Digital Business <span className="gradient-text">Guides</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              Practical guides on website development, SEO, marketing and business growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-gray-200 dark:border-white/8 bg-white dark:bg-[#12103A] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${catColors[post.catColor] || catColors.blue}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-brand-blue transition-colors leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="text-xs font-bold text-brand-blue group-hover:underline">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
