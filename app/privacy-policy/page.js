import { Zap } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - LaunchGrids',
  description: 'Privacy Policy for LaunchGrids Digital Agency',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C0A1E]">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-blue to-brand-violet py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <a href="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              Launch<span className="opacity-80">Grids</span>
            </span>
          </a>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
            Privacy Policy
          </h1>
          <p className="text-white/70 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-10">

        <Section title="1. Introduction">
          <p>LaunchGrids ("we", "our", "us") is a digital agency providing website development, branding, digital marketing, SEO, automation, ecommerce, and custom software services. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following information when you contact us or use our services:</p>
          <ul>
            <li>Your name and business name</li>
            <li>Phone number and email address</li>
            <li>Business type and service requirements</li>
            <li>Budget range and project details</li>
            <li>Any messages or content you share with us</li>
          </ul>
          <p>We also collect basic analytics data (page visits, device type) through Google Analytics to improve our website.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul>
            <li>To respond to your inquiries and provide consultations</li>
            <li>To prepare customized proposals and project plans</li>
            <li>To communicate project updates and deliverables</li>
            <li>To send invoices and process payments</li>
            <li>To improve our website and services</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </Section>

        <Section title="4. WhatsApp Communication">
          <p>When you submit our contact form, your details are sent directly to our WhatsApp for faster response. By submitting the form, you consent to being contacted via WhatsApp at the number you provide.</p>
        </Section>

        <Section title="5. Data Security">
          <p>We take reasonable measures to protect your information. All communications are handled securely. We do not store sensitive payment information - all payments are processed through trusted third-party payment gateways.</p>
        </Section>

        <Section title="6. Cookies">
          <p>Our website uses cookies for analytics purposes (Google Analytics). You can disable cookies in your browser settings at any time. Disabling cookies will not affect your ability to use our website.</p>
        </Section>

        <Section title="7. Third-Party Services">
          <p>We may use the following third-party services:</p>
          <ul>
            <li>Google Analytics - website traffic analysis</li>
            <li>Google Ads / Meta Ads - for our own marketing</li>
            <li>WhatsApp Business - client communication</li>
            <li>Cloudflare - website hosting and security</li>
          </ul>
          <p>Each of these services has their own privacy policies which govern their use of your data.</p>
        </Section>

        <Section title="8. Your Rights">
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of any marketing communications</li>
          </ul>
          <p>To exercise these rights, contact us at <strong>hello@launchgrids.in</strong></p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </Section>

        <Section title="10. Contact Us">
          <p>For any privacy-related questions or concerns:</p>
          <ul>
            <li>Email: <strong>hello@launchgrids.in</strong></li>
            <li>Website: <strong>launchgrids.in</strong></li>
          </ul>
        </Section>

        <div className="pt-6 border-t border-gray-100 dark:border-white/10 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
        {title}
      </h2>
      <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-gray-900 [&_strong]:dark:text-white">
        {children}
      </div>
    </div>
  )
}
