import './globals.css'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: {
    default: 'LaunchGrids — Complete Digital Business Setup Agency in India',
    template: '%s | LaunchGrids',
  },
  description: 'LaunchGrids is India\'s best complete digital business setup agency. We build websites, ecommerce stores, branding, logo design, SEO, digital marketing, WhatsApp automation, chatbots, Google Ads, Meta Ads, CRM, content writing & growth systems — all in one place. Serving small businesses, startups, salons, clinics, restaurants, real estate & ecommerce brands across India. Starting from ₹25,000.',
  keywords: [
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
    'website development agency India',
    'website design agency India',
    'professional website development India',
    'business website development India',
    'affordable website development India',
    'website development for small business',
    'responsive website design India',
    'custom website development India',
    'website design and development India',
    'ecommerce website development India',
    'ecommerce website design India',
    'online store development India',
    'ecommerce agency India',
    'ecommerce setup agency India',
    'branding agency India',
    'logo design agency India',
    'brand identity design India',
    'branding and website agency India',
    'logo design India',
    'graphic design agency India',
    'UI UX design agency India',
    'SEO agency India',
    'SEO services India',
    'best SEO agency India',
    'affordable SEO services India',
    'local SEO India',
    'Google ranking agency India',
    'SEO for small business India',
    'search engine optimization India',
    'digital marketing agency India',
    'best digital marketing agency India',
    'affordable digital marketing India',
    'social media marketing agency India',
    'Instagram marketing agency India',
    'Facebook marketing agency India',
    'performance marketing agency India',
    'Google Ads agency India',
    'Meta Ads agency India',
    'Facebook Ads agency India',
    'Instagram Ads agency India',
    'PPC agency India',
    'Google Ads management India',
    'WhatsApp automation agency India',
    'WhatsApp Business setup India',
    'chatbot development India',
    'business automation agency India',
    'CRM setup agency India',
    'lead generation automation India',
    'WhatsApp chatbot India',
    'content writing agency India',
    'social media content agency India',
    'Instagram post design agency India',
    'reels editing agency India',
    'video editing agency India',
    'digital agency for salon India',
    'digital agency for clinic India',
    'digital agency for restaurant India',
    'digital agency for real estate India',
    'digital agency for coaching institute India',
    'digital setup for local business India',
    'website for small business India',
    'lead generation agency India',
    'sales funnel agency India',
    'landing page design India',
    'website maintenance agency India',
    'monthly website maintenance India',
  ],
  authors: [{ name: 'LaunchGrids', url: 'https://launchgrids.in' }],
  creator: 'LaunchGrids',
  publisher: 'LaunchGrids',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://launchgrids.in',
  },
  openGraph: {
    type: 'website',
    url: 'https://launchgrids.in',
    title: 'LaunchGrids — Complete Digital Business Setup Agency in India',
    description: 'Website, branding, SEO, digital marketing, WhatsApp automation, ecommerce & growth systems — complete digital setup starting from ₹25,000.',
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
    title: 'LaunchGrids — Complete Digital Business Setup Agency in India',
    description: 'Website, branding, SEO, digital marketing, automation & ecommerce — all in one place. Starting from ₹25,000.',
    images: ['/logo.png'],
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
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
