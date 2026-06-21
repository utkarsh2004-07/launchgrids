import { Zap } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - LaunchGrids',
  description: 'Terms of Service for LaunchGrids Digital Agency',
}

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-white/70 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-10">

        <Section title="1. Agreement">
          <p>By engaging LaunchGrids for any service - including website development, branding, digital marketing, SEO, ecommerce, automation, or custom software - you agree to these Terms of Service. These terms form a binding agreement between you (the client) and LaunchGrids.</p>
        </Section>

        <Section title="2. Our Services">
          <p>LaunchGrids provides the following services:</p>
          <ul>
            <li>Website Design & Development</li>
            <li>Ecommerce Website Development</li>
            <li>Branding & Logo Design</li>
            <li>UI/UX Design</li>
            <li>SEO (Search Engine Optimization)</li>
            <li>Digital Marketing (Google Ads, Meta Ads)</li>
            <li>Social Media Management</li>
            <li>WhatsApp & Chatbot Automation</li>
            <li>Custom Software Development</li>
            <li>Monthly Maintenance & Support</li>
          </ul>
          <p>All services are customized based on client requirements and agreed upon before project commencement.</p>
        </Section>

        <Section title="3. Project Process">
          <ul>
            <li>All projects begin with a free consultation to understand your requirements</li>
            <li>A detailed proposal and timeline will be shared before work begins</li>
            <li>Work starts only after written confirmation and advance payment</li>
            <li>Client feedback and approvals are required at each milestone</li>
            <li>Final delivery is made after full payment is received</li>
          </ul>
        </Section>

        <Section title="4. Payment Terms">
          <ul>
            <li><strong>Advance Payment:</strong> 50% of the total project cost is required before work begins</li>
            <li><strong>Final Payment:</strong> Remaining 50% is due before final delivery and handover</li>
            <li><strong>Monthly Services:</strong> Maintenance and marketing plans are billed monthly in advance</li>
            <li><strong>Add-Ons:</strong> Additional services are billed separately as agreed</li>
          </ul>
          <p>Payments can be made via bank transfer, UPI, or other agreed methods. All prices are in Indian Rupees (INR) unless stated otherwise.</p>
        </Section>

        <Section title="5. Project Timeline">
          <p>Estimated timelines are provided at the start of each project. Timelines may be affected by:</p>
          <ul>
            <li>Delays in client providing content, images, or feedback</li>
            <li>Scope changes requested by the client</li>
            <li>Technical complexities discovered during development</li>
          </ul>
          <p>We will communicate any timeline changes promptly. Delays caused by the client do not entitle the client to a refund.</p>
        </Section>

        <Section title="6. Client Responsibilities">
          <p>The client agrees to:</p>
          <ul>
            <li>Provide all required content, images, and information in a timely manner</li>
            <li>Give clear and timely feedback at each project stage</li>
            <li>Ensure all content provided is legally owned or licensed by the client</li>
            <li>Not share project files or credentials with unauthorized parties</li>
          </ul>
        </Section>

        <Section title="7. Revisions & Changes">
          <ul>
            <li>Each package includes a defined number of revision rounds as agreed in the proposal</li>
            <li>Additional revisions beyond the agreed scope will be charged separately</li>
            <li>Major scope changes after project commencement may require a revised quote</li>
          </ul>
        </Section>

        <Section title="8. Intellectual Property">
          <ul>
            <li>Upon full payment, the client owns all final deliverables (website, designs, content)</li>
            <li>LaunchGrids retains the right to showcase completed work in our portfolio</li>
            <li>Third-party assets (fonts, stock images, plugins) are subject to their own licenses</li>
            <li>Source code and custom software remain property of LaunchGrids until full payment is received</li>
          </ul>
        </Section>

        <Section title="9. Confidentiality">
          <p>Both parties agree to keep all project details, business information, and communications confidential. We will not share your business information with any third party without your consent.</p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>LaunchGrids is not liable for:</p>
          <ul>
            <li>Loss of business, revenue, or profits due to website downtime or technical issues</li>
            <li>Issues caused by third-party services (hosting, payment gateways, APIs)</li>
            <li>Content provided by the client that infringes on third-party rights</li>
            <li>Results of SEO or marketing campaigns (results vary and are not guaranteed)</li>
          </ul>
        </Section>

        <Section title="11. Termination">
          <p>Either party may terminate the project with written notice. In case of termination:</p>
          <ul>
            <li>Work completed up to the termination date will be billed accordingly</li>
            <li>Advance payments are non-refundable if work has already commenced</li>
            <li>All deliverables completed and paid for will be handed over to the client</li>
          </ul>
        </Section>

        <Section title="12. Governing Law">
          <p>These terms are governed by the laws of India. Any disputes will be resolved through mutual discussion. If unresolved, disputes will be subject to the jurisdiction of courts in India.</p>
        </Section>

        <Section title="13. Contact Us">
          <p>For any questions regarding these terms:</p>
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
