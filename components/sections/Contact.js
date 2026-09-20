'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'

const businessTypes = [
  'Local Business (Salon, Cafe, Shop, Clinic)',
  'Service Business (Consultant, Real Estate, Agency)',
  'Ecommerce Business (Online Store, Products)',
  'Startup / SaaS / Custom Software',
  'Other',
]

const serviceOptions = [
  'Website Development',
  'Ecommerce Website',
  'Branding & Logo',
  'UI/UX Design',
  'Digital Marketing',
  'SEO',
  'Social Media Management',
  'WhatsApp Automation',
  'Chatbot Setup',
  'Google & Meta Ads',
  'Custom Software',
  'Content Writing',
  'Analytics Setup',
  'Monthly Maintenance',
]

const budgets = [
  'Rs.25,000 - Rs.50,000',
  'Rs.60,000 - Rs.1,20,000',
  'Rs.1,50,000 - Rs.3,00,000',
  'Rs.3,00,000+',
]

export default function Contact() {
  useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    businessType: '',
    services: [],
    budget: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (s) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi LaunchGrids!
Name: ${form.name}
Business: ${form.business}
Phone: ${form.phone}
Type: ${form.businessType}
Budget: ${form.budget}
Services: ${form.services.slice(0,3).join(', ')}
Msg: ${form.message.slice(0,100) || '-'}`

    window.open(`https://wa.me/918459225202?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding section-alt relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-0 right-0 bg-blue-50 dark:bg-blue-950/10 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Get In Touch</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Let's Build Your{' '}
            <span className="gradient-text">Digital Business</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Fill in the form below and we'll get back to you within 24 hours with a customized plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 reveal reveal-delay-1 space-y-6">
            {[
              { icon: <Phone className="w-5 h-5" />, label: 'Phone / WhatsApp', val: '+91 84592 25202', color: 'blue' },
              { icon: <Mail className="w-5 h-5" />, label: 'Email', val: 'hello@launchgrids.in', color: 'violet' },
              { icon: <MapPin className="w-5 h-5" />, label: 'Service Area', val: 'Mumbai, Maharashtra & all India', color: 'green' },
            ].map(item => (
              <div key={item.label} className="card-base bg-white dark:bg-[#12103A] p-5 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400' :
                  item.color === 'violet' ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400' :
                  'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400'
                }`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-500 mb-0.5">{item.label}</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.val}</div>
                </div>
              </div>
            ))}

            {/* Working hours */}
            <div className="card-base bg-white dark:bg-[#12103A] p-5">
              <h4
                className="font-bold text-gray-900 dark:text-white mb-3 text-sm"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Working Hours
              </h4>
              <div className="space-y-1.5">
                {[
                  { day: 'Monday - Saturday', time: '9:00 AM - 7:00 PM' },
                  { day: 'Sunday', time: 'Emergency Support Only' },
                ].map(h => (
                  <div key={h.day} className="flex justify-between text-xs">
                    <span className="text-gray-600 dark:text-gray-400">{h.day}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 dark:from-brand-blue/10 dark:to-brand-violet/10 border border-brand-blue/10 dark:border-brand-violet/20">
              <div className="space-y-2">
                {[
                  'Free consultation, no obligation',
                  'Response within 24 hours',
                  'Customized plan for every business',
                  'Transparent pricing, no hidden fees',
                ].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            {submitted ? (
              <div className="card-base bg-white dark:bg-[#12103A] p-10 text-center flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3
                  className="text-2xl font-extrabold text-gray-900 dark:text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours with a customized plan for your business.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-base bg-white dark:bg-[#12103A] p-7 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rahul Sharma"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      required
                      placeholder="Your Business Name"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@yourbusiness.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                    Business Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Required Services <span className="text-xs font-normal text-gray-400">(select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleServiceToggle(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          form.services.includes(s)
                            ? 'bg-brand-blue text-white border-brand-blue'
                            : 'bg-white dark:bg-[#1C1840] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-brand-blue dark:hover:border-brand-violet'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                    Budget Range <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select your budget range</option>
                    {budgets.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your business and what you need..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base shadow-lg shadow-blue-200 dark:shadow-blue-900/30"
                >
                  <Send className="w-4 h-4" />
                  Send Message & Get Free Consultation
                </button>

                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
