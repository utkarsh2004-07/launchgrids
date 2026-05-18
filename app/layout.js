import './globals.css'

import './globals.css'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: {
    default: 'LaunchGrids — #1 Complete Digital Business Setup Agency in India',
    template: '%s | LaunchGrids',
  },
  description: 'LaunchGrids is India\'s best complete digital business setup agency. We build websites, ecommerce stores, branding, logo design, SEO, digital marketing, WhatsApp automation, chatbots, Google Ads, Meta Ads, CRM, content writing & growth systems — all in one place. Serving small businesses, startups, local shops, salons, clinics, restaurants, real estate, coaches & ecommerce brands across India. Starting from ₹25,000.',
  keywords: [
    // Core business keywords
    'digital business setup agency India',
    'complete digital setup for business',
    'digital agency India',
    'best digital agency India',
    'top digital agency India',
    'affordable digital agency India',
    'digital agency for small business India',
    'digital agency for startups India',
    'online business setup agency',
    'business setup agency India',
    'LaunchGrids',
    'launchgrids.in',

    // Website development
    'website development agency India',
    'website design agency India',
    'professional website development India',
    'business website development India',
    'affordable website development India',
    'website development for small business',
    'responsive website design India',
    'Next.js website development India',
    'custom website development India',
    'website design and development India',

    // Ecommerce
    'ecommerce website development India',
    'ecommerce website design India',
    'online store development India',
    'ecommerce agency India',
    'shopify alternative India',
    'ecommerce setup agency India',
    'product website development India',

    // Branding & Design
    'branding agency India',
    'logo design agency India',
    'brand identity design India',
    'branding and website agency India',
    'logo design India',
    'graphic design agency India',
    'UI UX design agency India',
    'brand design agency India',
    'visual identity design India',

    // SEO
    'SEO agency India',
    'SEO services India',
    'best SEO agency India',
    'affordable SEO services India',
    'local SEO India',
    'Google ranking agency India',
    'SEO for small business India',
    'search engine optimization India',
    'SEO expert India',

    // Digital Marketing
    'digital marketing agency India',
    'best digital marketing agency India',
    'affordable digital marketing India',
    'digital marketing for small business India',
    'online marketing agency India',
    'social media marketing agency India',
    'Instagram marketing agency India',
    'Facebook marketing agency India',
    'performance marketing agency India',

    // Ads
    'Google Ads agency India',
    'Meta Ads agency India',
    'Facebook Ads agency India',
    'Instagram Ads agency India',
    'PPC agency India',
    'paid ads agency India',
    'Google Ads management India',
    'Meta Ads management India',

    // Automation
    'WhatsApp automation agency India',
    'WhatsApp Business setup India',
    'chatbot development India',
    'business automation agency India',
    'CRM setup agency India',
    'lead generation automation India',
    'WhatsApp chatbot India',
    'marketing automation India',

    // Content
    'content writing agency India',
    'social media content agency India',
    'Instagram post design agency India',
    'reels editing agency India',
    'video editing agency India',
    'content marketing agency India',

    // Local & niche
    'digital agency for salon India',
    'digital agency for clinic India',
    'digital agency for restaurant India',
    'digital agency for real estate India',
    'digital agency for coaching institute India',
    'digital agency for ecommerce India',
    'digital setup for local business India',
    'digital marketing for doctors India',
    'website for small business India',

    // Lead generation
    'lead generation agency India',
    'lead generation for small business India',
    'sales funnel agency India',
    'landing page design India',

    // Maintenance
    'website maintenance agency India',
    'monthly website maintenance India',
    'website support agency India',

    // Packages & pricing
    'affordable website package India',
    'digital marketing package India',
    'website development package India',
    'complete business package India',
    'startup digital package India',
  ],
  authors: [{ name: 'LaunchGrids', url: 'https://launchgrids.in' }],
  creator: 'LaunchGrids',
  publisher: 'LaunchGrids',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://launchgrids.in',
  },
  openGraph: {
    type: 'website',
    url: 'https://launchgrids.in',
    title: 'LaunchGrids — #1 Complete Digital Business Setup Agency in India',
    description: 'Website, branding, SEO, digital marketing, WhatsApp automation, ecommerce & growth systems — complete digital setup for your business starting from ₹25,000.',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{
      url: '/logo.png',
      width: 1200,
      height: 630,
      alt: 'LaunchGrids - Complete Digital Business Setup Agency India',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaunchGrids — #1 Complete Digital Business Setup Agency in India',
    description: 'Website, branding, SEO, digital marketing, automation & ecommerce — all in one place. Starting from ₹25,000.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
