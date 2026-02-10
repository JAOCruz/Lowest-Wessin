import { useState } from 'react'
import { MapPin, Phone, Mail, ArrowRight, Send } from 'lucide-react'
import { CONTACT, CONSULTATION_URL } from '../lib/constants'
import { useFadeUp } from '../hooks/useGSAP'
import SEOHead from '../components/shared/SEOHead'
import Container from '../components/ui/Container'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'

const subjectOptions = [
  'Due Diligence Inquiry',
  'Contract Review',
  'Legal Representation',
  'Property Inquiry',
  'General Question',
]

export default function ContactPage() {
  const heroRef = useFadeUp()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission - integrate with form service later
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Contact"
        description="Schedule a consultation with Cana Law for independent real estate legal due diligence in the Dominican Republic. Receive a tailored proposal for your investment."
        canonicalPath="/contact"
      />

      {/* Hero */}
      <section className="pt-36 pb-16">
        <Container>
          <div ref={heroRef} className="max-w-3xl">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Start with a Consultation
            </h1>
            <p className="text-lg text-body/70 leading-relaxed">
              Tell us about your investment goals and we&rsquo;ll provide a tailored proposal
              with a clear scope of work.
            </p>
          </div>
        </Container>
      </section>

      {/* Consultation Flow */}
      <section className="pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            {[
              { step: '01', title: 'Submit Inquiry', desc: 'Share your situation and goals via the form or book a call.' },
              { step: '02', title: 'Receive Proposal', desc: 'We provide a tailored proposal with scope, timeline, and fees.' },
              { step: '03', title: 'Engage Services', desc: 'Once approved, we begin work and keep you informed throughout.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="font-display text-2xl font-bold text-gold/40">{item.step}</div>
                <div>
                  <h3 className="font-bold text-navy text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-body/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <GlassCard>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <Send size={28} className="text-gold" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy mb-3">
                      Inquiry Received
                    </h3>
                    <p className="text-body/70">
                      Thank you. We will review your inquiry and respond with a tailored
                      proposal within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-body/80 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-soft-white border border-navy/10 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-body/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-soft-white border border-navy/10 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-body/80 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-soft-white border border-navy/10 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-body/80 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-soft-white border border-navy/10 text-navy focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
                        >
                          <option value="" className="bg-navy">Select a subject</option>
                          {subjectOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-navy">{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-body/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-soft-white border border-navy/10 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm resize-none"
                        placeholder="Tell us about your investment goals and how we can help..."
                      />
                    </div>

                    <Button type="submit" size="lg">
                      Send Inquiry
                      <ArrowRight size={16} className="ml-2" />
                    </Button>

                    <p className="text-xs text-navy/40">
                      After submitting, you will receive a tailored proposal within 24-48 hours.
                    </p>
                  </form>
                )}
              </GlassCard>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard>
                <h3 className="font-display text-lg font-bold text-navy mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-body/70 leading-relaxed">{CONTACT.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gold flex-shrink-0" />
                    <a href={`tel:${CONTACT.phone}`} className="text-sm text-body/70 hover:text-gold transition-colors">
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-gold flex-shrink-0" />
                    <a href={`mailto:${CONTACT.email}`} className="text-sm text-body/70 hover:text-gold transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="border-gold/20">
                <h3 className="font-display text-lg font-bold text-navy mb-3">
                  Prefer a Direct Call?
                </h3>
                <p className="text-sm text-body/60 mb-4">
                  Book a consultation directly through our scheduling system.
                </p>
                <Button href={CONSULTATION_URL} className="w-full">
                  Book a Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
