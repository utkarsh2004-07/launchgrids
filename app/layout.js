import './globals.css'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: {
    default: 'LaunchGrids - Digital Business Setup Agency in Mumbai, India',
    template: '%s | LaunchGrids',
  },
  description: 'LaunchGrids is a complete digital business setup agency in Mumbai, India. Website development, branding, SEO, digital marketing, WhatsApp automation, ecommerce & growth systems. Starting from Rs.25,000.',
  keywords: [
    'digital agency Mumbai',
    'website development agency Mumbai',
    'digital marketing agency Mumbai',
    'SEO agency Mumbai',
    'branding agency Mumbai',
    'WhatsApp automation Mumbai',
    'ecommerce website Mumbai',
    'Google Ads agency Mumbai',
    'lead generation agency Mumbai',
    'LaunchGrids',
  ],
  authors: [{ name: 'LaunchGrids', url: 'https://launchgrids.in' }],
  creator: 'LaunchGrids',
  publisher: 'LaunchGrids',
  applicationName: 'LaunchGrids',
  category: 'Digital Agency',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
  },
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
    title: 'LaunchGrids - Complete Digital Business Setup Agency in India',
    description: 'Website, branding, SEO, digital marketing, WhatsApp automation, ecommerce & growth systems - complete digital setup starting from Rs.25,000.',
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
    title: 'LaunchGrids - Complete Digital Business Setup Agency in India',
    description: 'Website, branding, SEO, digital marketing, automation & ecommerce - all in one place. Starting from Rs.25,000.',
    images: ['/logo.png'],
  },
  verification: {
    google: 'google7715039671d69eb3',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        <meta name="language" content="English" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2Z7Z52WXFE" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2Z7Z52WXFE');
            `,
          }}
        />
        {/* Dark mode init */}
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
