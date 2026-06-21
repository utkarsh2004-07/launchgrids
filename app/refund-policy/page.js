import { Zap } from 'lucide-react'

export const metadata = {
  title: 'Refund Policy - LaunchGrids',
  description: 'Refund Policy for LaunchGrids Digital Agency',
}

export default function RefundPolicy() {
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
            Refund Policy
          </h1>
          <p className="text-white/70 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-10">

        <Section title="1. Overview">
          <p>At LaunchGrids, we are committed to delivering high-quality digital services. We invest significant time, effort, and resources into every project. Please read this Refund Policy carefully before engaging our services.</p>
        </Section>

        <Section title="2. Advance Payment (Non-Refundable)">
          <p>The 50% advance payment collected before project commencement is <strong>non-refundable</strong> once work has begun. This covers:</p>
          <ul>
            <li>Initial consultation and requirement analysis</li>
            <li>Project planning and resource allocation</li>
            <li>Design mockups and wireframes</li>
            <li>Domain and hosting setup (if applicable)</li>
            <li>Time and resources already invested in your project</li>
          </ul>
        </Section>

        <Section title="3. When a Refund May Be Considered">
          <p>A partial or full refund may be considered in the following situations:</p>
          <ul>
            <li><strong>Project not started:</strong> If you cancel before any work has begun, the advance payment may be refunded after deducting a 10% processing fee</li>
            <li><strong>LaunchGrids unable to deliver:</strong> If we are unable to complete the agreed project due to our own limitations, a proportional refund will be issued for work not completed</li>
            <li><strong>Duplicate payment:</strong> If you accidentally made a duplicate payment, the extra amount will be fully refunded</li>
          </ul>
        </Section>

        <Section title="4. No Refund Situations">
          <p>Refunds will <strong>not</strong> be provided in the following cases:</p>
          <ul>
            <li>Work has already been completed and delivered as per the agreed scope</li>
            <li>Client changed their mind after work commenced</li>
            <li>Client delayed providing content, feedback, or approvals causing project delays</li>
            <li>Dissatisfaction with SEO results, ad performance, or marketing outcomes (results are not guaranteed)</li>
            <li>Issues caused by third-party services (hosting providers, payment gateways, social media platforms)</li>
            <li>Client requested changes beyond the agreed project scope</li>
            <li>Monthly maintenance or marketing plans already in progress</li>
          </ul>
        </Section>

        <Section title="5. Monthly Services (Maintenance & Marketing)">
          <ul>
            <li>Monthly plans are billed in advance and are <strong>non-refundable</strong> once the billing cycle has started</li>
            <li>You may cancel monthly services with <strong>7 days written notice</strong> before the next billing cycle</li>
            <li>No refund will be issued for the current active month</li>
          </ul>
        </Section>

        <Section title="6. Revision & Dispute Resolution">
          <p>Before requesting a refund, we strongly encourage you to:</p>
          <ul>
            <li>Communicate your concerns clearly via WhatsApp or email</li>
            <li>Allow us to address the issue through revisions or corrections</li>
            <li>Give us a reasonable opportunity to resolve the problem</li>
          </ul>
          <p>Most issues can be resolved through open communication. We are committed to your satisfaction and will work with you to find a fair solution.</p>
        </Section>

        <Section title="7. Refund Process">
          <p>If a refund is approved:</p>
          <ul>
            <li>Refunds will be processed within <strong>7-10 business days</strong></li>
            <li>Refunds will be issued via the same payment method used for the original payment</li>
            <li>Bank transfer charges (if any) will be deducted from the refund amount</li>
          </ul>
        </Section>

        <Section title="8. How to Request a Refund">
          <p>To request a refund, contact us with:</p>
          <ul>
            <li>Your name and business name</li>
            <li>Project details and payment reference</li>
            <li>Reason for the refund request</li>
          </ul>
          <p>Contact us at:</p>
          <ul>
            <li>Email: <strong>hello@launchgrids.in</strong></li>
          </ul>
          <p>We will review your request and respond within <strong>3 business days</strong>.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>LaunchGrids reserves the right to update this Refund Policy at any time. Changes will be posted on this page. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
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
