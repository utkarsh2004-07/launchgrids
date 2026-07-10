import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How Much Does a Website Cost? Complete Guide (2026) | LaunchGrids',
  description: 'How much does a website cost in 2026? From ₹15,000 to ₹10,00,000+ — complete breakdown by business type. Local business to ecommerce — everything covered.',
  keywords: ['website development cost', 'website cost India', 'how much does a website cost', 'professional website price'],
  alternates: { canonical: 'https://launchgrids.in/blog/website-cost-guide-2026' },
  openGraph: {
    title: 'How Much Does a Website Cost? Complete Guide (2026)',
    description: 'From ₹15,000 to ₹10,00,000+ — complete breakdown by business type. Local business to ecommerce.',
    url: 'https://launchgrids.in/blog/website-cost-guide-2026',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Website Cost? Complete Guide 2026',
    description: 'From ₹15,000 to ₹10,00,000+ — complete breakdown by business type.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Much Does a Website Cost? Complete Guide (2026)',
  description: 'How much does a website cost in 2026? From ₹15,000 to ₹10,00,000+ — complete breakdown by business type.',
  url: 'https://launchgrids.in/blog/website-cost-guide-2026',
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
  author: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  publisher: {
    '@type': 'Organization',
    name: 'LaunchGrids',
    logo: { '@type': 'ImageObject', url: 'https://launchgrids.in/logo.png' },
  },
  inLanguage: 'en-IN',
  keywords: 'website development cost, website cost India, how much does a website cost',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: { '@type': 'Answer', text: 'A simple website takes 7–14 days. A complex ecommerce or custom software project takes 30–90 days.' },
    },
    {
      '@type': 'Question',
      name: 'Are there ongoing costs after the website is built?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — domain renewal (₹800–₹1,500/year), hosting (₹3,000–₹10,000/year), and a maintenance plan if needed.' },
    },
    {
      '@type': 'Question',
      name: 'Can a good website be built for ₹15,000?',
      acceptedAnswer: { '@type': 'Answer', text: 'A simple business website can be built at this range — but advanced features will not be included. Decide based on your goals.' },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum budget for an ecommerce website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Keep a minimum budget of ₹80,000 for a proper ecommerce store — with payment gateway, inventory management, and mobile optimization.' },
    },
    {
      '@type': 'Question',
      name: 'Does SEO come included with the website?',
      acceptedAnswer: { '@type': 'Answer', text: 'Basic SEO is included in most packages. Advanced SEO strategy requires a separate service or upgraded package.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://launchgrids.in/blog' },
    { '@type': 'ListItem', position: 3, name: 'How Much Does a Website Cost', item: 'https://launchgrids.in/blog/website-cost-guide-2026' },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white dark:bg-[#0C0A1E] min-h-screen transition-colors duration-300">
        <Navbar />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-blue transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-500 dark:text-gray-400">Website Cost Guide 2026</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                Website Development
              </span>
              <span className="text-xs text-gray-400">8 min read</span>
              <span className="text-xs text-gray-400">15 January 2025</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              How Much Does a Website Cost? Complete Guide (2026)
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              If you want to take your business online, the first question that comes up is — <strong className="text-gray-700 dark:text-gray-200">"How much does a website cost?"</strong> The honest answer: it depends. Let's break it down completely.
            </p>
          </div>

          <div className="prose-content">

            <p>Website cost depends on your business type, the features you need, and your goals. This guide covers everything — from a simple business website to a full ecommerce store.</p>

            <p>Here's what we'll cover:</p>
            <ul>
              <li>Cost of a simple business website</li>
              <li>Cost of an ecommerce store</li>
              <li>7 factors that increase the price</li>
              <li>Freelancer vs agency — what's better</li>
              <li>How to figure out the right budget for your business</li>
            </ul>

            <h2>Website Cost — Quick Overview</h2>
            <div className="overflow-x-auto my-6">
              <table>
                <thead>
                  <tr><th>Website Type</th><th>Price Range</th></tr>
                </thead>
                <tbody>
                  <tr><td>Simple Business Website</td><td>₹15,000 – ₹40,000</td></tr>
                  <tr><td>Service Business Website</td><td>₹35,000 – ₹80,000</td></tr>
                  <tr><td>Ecommerce Store</td><td>₹80,000 – ₹3,00,000+</td></tr>
                  <tr><td>Custom Software / SaaS</td><td>₹1,50,000 – ₹8,00,000+</td></tr>
                  <tr><td>Monthly Maintenance</td><td>₹5,000 – ₹30,000/month</td></tr>
                </tbody>
              </table>
            </div>

            <h2>1. Simple Business Website — ₹15,000 to ₹40,000</h2>
            <p>This is the most common and most in-demand option for small businesses.</p>
            <p><strong>Best for:</strong></p>
            <ul>
              <li>Local shops — salon, cafe, gym, medical store</li>
              <li>Coaching classes and tuition centres</li>
              <li>Clinics and doctors</li>
              <li>Freelancers and consultants</li>
              <li>Small service providers</li>
            </ul>
            <p><strong>What you get:</strong></p>
            <ul>
              <li>✅ 5–8 pages (Home, About, Services, Contact, etc.)</li>
              <li>✅ Mobile responsive design</li>
              <li>✅ Basic SEO setup</li>
              <li>✅ Contact form</li>
              <li>✅ Google Maps integration</li>
              <li>✅ WhatsApp button</li>
              <li>✅ Google Analytics setup</li>
            </ul>
            <p><strong>What's not included:</strong></p>
            <ul>
              <li>❌ Online payment</li>
              <li>❌ Product listing</li>
              <li>❌ Blog system</li>
              <li>❌ Advanced automation</li>
            </ul>
            <p>If your goal is simply to establish an online presence and give customers a way to contact you — this range is perfect.</p>

            <h2>2. Professional Service Business Website — ₹35,000 to ₹1,00,000</h2>
            <p>This range is for businesses that don't just want presence — <strong>they want leads.</strong></p>
            <p><strong>Best for:</strong></p>
            <ul>
              <li>Real estate agents and builders</li>
              <li>Architects and interior designers</li>
              <li>Finance consultants and CA firms</li>
              <li>Digital agencies</li>
              <li>Healthcare clinics</li>
              <li>Educational institutes</li>
              <li>Corporate companies</li>
            </ul>
            <p><strong>What you get:</strong></p>
            <ul>
              <li>✅ 10–20+ pages</li>
              <li>✅ Premium UI/UX design</li>
              <li>✅ Complete branding integration</li>
              <li>✅ SEO optimized content</li>
              <li>✅ Lead generation forms</li>
              <li>✅ Blog setup</li>
              <li>✅ WhatsApp automation</li>
              <li>✅ Google Business Profile setup</li>
              <li>✅ Social media integration</li>
              <li>✅ Speed optimization</li>
            </ul>
            <div className="callout-box">
              <strong>LaunchGrids Growth Package (₹40,000 – ₹1,20,000)</strong> is built exactly for this category — where you get a complete digital setup alongside your website.{' '}
              <Link href="/packages" className="font-bold hover:underline">View Packages →</Link>
            </div>

            <h2>3. Ecommerce Website — ₹80,000 to ₹3,00,000+</h2>
            <p>If you want to sell products online, you need an ecommerce website.</p>
            <p><strong>Best for:</strong></p>
            <ul>
              <li>Clothing and fashion brands</li>
              <li>Beauty and skincare products</li>
              <li>Home decor and furniture</li>
              <li>Electronics accessories</li>
              <li>Handmade and artisan products</li>
              <li>Food products and organic brands</li>
            </ul>
            <p><strong>What you get:</strong></p>
            <ul>
              <li>✅ Product listing pages</li>
              <li>✅ Shopping cart system</li>
              <li>✅ Payment gateway (Razorpay / PayU / Paytm)</li>
              <li>✅ Order management system</li>
              <li>✅ Inventory tracking</li>
              <li>✅ Customer login / signup</li>
              <li>✅ Product search and filters</li>
              <li>✅ Shipping integration</li>
              <li>✅ GST invoice generation</li>
              <li>✅ Mobile-first design</li>
            </ul>
            <p><strong>What affects the price?</strong></p>
            <ul>
              <li>Number of products (100 vs 10,000)</li>
              <li>Custom features (size chart, product customization)</li>
              <li>Payment options</li>
              <li>Delivery partner integration</li>
            </ul>

            <h2>4. Custom Software / SaaS — ₹1,50,000 to ₹8,00,000+</h2>
            <p>This is needed when a standard website won't do the job.</p>
            <p><strong>Best for:</strong></p>
            <ul>
              <li>Booking platforms (doctors, salons, hotels)</li>
              <li>CRM systems</li>
              <li>Business dashboards</li>
              <li>SaaS tools</li>
              <li>Internal business software</li>
              <li>Multi-vendor marketplaces</li>
            </ul>
            <p>Everything is built from scratch — design, backend, database — all tailored to your business requirements.</p>

            <h2>7 Factors That Increase Website Cost</h2>

            <h3>1. Number of Pages</h3>
            <p>A 5-page website and a 50-page website are priced very differently. More pages = more work = more cost.</p>

            <h3>2. Design Quality</h3>
            <p>Template-based design is cheaper. Custom UI/UX design — where everything is built from scratch — takes more time and costs more.</p>

            <h3>3. Features and Functionality</h3>
            <p>A basic contact form is cheap. WhatsApp automation + chatbot + CRM integration is expensive. More features = higher cost.</p>

            <h3>4. Content Writing</h3>
            <p>If you write your own content — cost stays low. If the agency writes it — there's an additional charge.</p>

            <h3>5. SEO Setup</h3>
            <p>Basic SEO is usually included. Advanced SEO setup and keyword strategy is an additional cost.</p>

            <h3>6. Speed Optimization</h3>
            <p>Optimizing Core Web Vitals, compressing images, setting up caching — all of this is extra work.</p>

            <h3>7. Ongoing Maintenance</h3>
            <p>After launch, websites need updates — security patches, content changes, new features. Monthly maintenance plans range from ₹5,000 to ₹30,000/month.</p>

            <h2>Freelancer vs Agency — What's Better?</h2>
            <div className="overflow-x-auto my-6">
              <table>
                <thead>
                  <tr><th>Factor</th><th>Freelancer</th><th>Agency</th></tr>
                </thead>
                <tbody>
                  <tr><td>Cost</td><td>Lower (₹5,000–₹20,000)</td><td>Higher (₹15,000+)</td></tr>
                  <tr><td>Quality</td><td>Variable</td><td>Consistent</td></tr>
                  <tr><td>Support</td><td>Limited</td><td>Ongoing</td></tr>
                  <tr><td>Multiple Services</td><td>One skill only</td><td>Website + Branding + SEO</td></tr>
                  <tr><td>Reliability</td><td>Risk involved</td><td>More reliable</td></tr>
                  <tr><td>Timeline</td><td>Delays possible</td><td>Defined timeline</td></tr>
                </tbody>
              </table>
            </div>
            <p>If you just need a single simple page — a freelancer works fine. If you need a complete digital setup — website + branding + SEO + marketing — an agency is the better investment.</p>

            <h2>Why a Cheap Website Can End Up Costing More</h2>
            <p>Say someone builds a website for ₹5,000:</p>
            <ul>
              <li>Slow loading — no Google ranking</li>
              <li>No SEO — zero traffic</li>
              <li>No mobile optimization — 70% of visitors bounce</li>
              <li>No security — website gets hacked</li>
              <li>No support — no one to fix problems</li>
            </ul>
            <p><strong>Result?</strong> 6 months later, you need to rebuild it. Total cost: ₹5,000 + ₹25,000 = ₹30,000 — plus 6 months of wasted time.</p>
            <div className="callout-box">
              <strong>Do it right once — save money in the long run.</strong>
            </div>

            <h2>5 Things to Check Before Hiring a Web Agency</h2>

            <h3>1. Check Their Portfolio</h3>
            <p>Look at their past projects. Check quality and variety of work.</p>

            <h3>2. Read Reviews and Testimonials</h3>
            <p>Google reviews, LinkedIn recommendations — real client feedback matters.</p>

            <h3>3. Do They Offer a Complete Setup?</h3>
            <p>Just a website, or website + SEO + branding + marketing — all in one?</p>

            <h3>4. Post-Launch Support</h3>
            <p>If something breaks after launch — who fixes it?</p>

            <h3>5. Transparent Pricing</h3>
            <p>No hidden charges. Everything should be clear upfront.</p>

            <div className="cta-box">
              <h2 className="!mt-0">LaunchGrids — Complete Digital Business Setup</h2>
              <p><strong>LaunchGrids</strong> doesn't just build websites — we build <strong>complete online business systems.</strong></p>
              <p>Everything in one place:</p>
              <ul>
                <li>🌐 <strong>Website Development</strong> — Professional, fast, mobile-ready</li>
                <li>🎨 <strong>Branding &amp; Logo</strong> — Complete brand identity</li>
                <li>📱 <strong>Social Media Setup</strong> — Instagram, Facebook, LinkedIn</li>
                <li>🔍 <strong>SEO</strong> — Rank on Google</li>
                <li>⚙️ <strong>WhatsApp Automation</strong> — Handle leads automatically</li>
                <li>📊 <strong>Analytics</strong> — Track what's working</li>
                <li>🎯 <strong>Lead Generation</strong> — Get real customers</li>
              </ul>
              <p><strong>Packages start from ₹15,000</strong> — from local businesses to enterprises.</p>
              <Link href="/contact" className="cta-btn" style={{ fontFamily: 'Syne, sans-serif' }}>
                Book a Free Consultation →
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>How long does it take to build a website?</h3>
            <p>A simple website takes 7–14 days. A complex ecommerce or custom software project takes 30–90 days.</p>

            <h3>Are there ongoing costs after the website is built?</h3>
            <p>Yes — domain renewal (₹800–₹1,500/year), hosting (₹3,000–₹10,000/year), and a maintenance plan if needed.</p>

            <h3>Can a good website be built for ₹15,000?</h3>
            <p>A simple business website can be built at this range — but advanced features won't be included. Decide based on your goals.</p>

            <h3>What is the minimum budget for an ecommerce website?</h3>
            <p>Keep a minimum budget of ₹80,000 for a proper ecommerce store — with payment gateway, inventory management, and mobile optimization.</p>

            <h3>Does SEO come included with the website?</h3>
            <p>Basic SEO is included in most packages. Advanced SEO strategy requires a separate service or upgraded package.</p>

            <h2>Conclusion — What Budget Should You Keep?</h2>
            <ul>
              <li><strong>Just need online presence</strong> → ₹15,000 – ₹40,000</li>
              <li><strong>Need to generate leads</strong> → ₹40,000 – ₹1,20,000</li>
              <li><strong>Want to sell products</strong> → ₹80,000 – ₹3,00,000</li>
              <li><strong>Need a custom system</strong> → ₹1,50,000+</li>
            </ul>
            <p><strong>Most important:</strong> A website is an investment — not an expense. The right website pays for itself within a year through leads and customers.</p>

            <div className="callout-box">
              <p className="!mb-1"><strong>📞 Contact us for a free consultation:</strong></p>
              <p className="!mb-1"><strong>WhatsApp / Call:</strong> +91 84592 25202</p>
              <p className="!mb-0"><strong>Website:</strong> <a href="https://launchgrids.in">launchgrids.in</a></p>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/8">
            <Link href="/blog" className="text-sm font-bold text-brand-blue hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </article>

        <Footer />
      </main>
    </>
  )
}
