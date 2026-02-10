import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react'
import { CONTACT, SITE } from '../../lib/constants'
import Container from '../ui/Container'

const quickLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Due Diligence', to: '/real-estate-due-diligence-dominican-republic' },
  { label: 'About', to: '/about' },
  { label: 'Properties', to: '/properties' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { icon: Instagram, href: CONTACT.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: CONTACT.social.facebook, label: 'Facebook' },
  { icon: Linkedin, href: CONTACT.social.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark" role="contentinfo">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-lg font-bold text-gold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="text-sm text-soft-white/70 leading-relaxed">{CONTACT.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className="text-sm text-soft-white/70 hover:text-gold transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-soft-white/70 hover:text-gold transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-gold mb-6">Quick Links</h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-soft-white/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-gold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-soft-white/70 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-soft-white/50 leading-relaxed">
              Independent real estate legal due diligence for foreign investors in the Dominican Republic.
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="py-6">
          <p className="text-center text-xs text-soft-white/40">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
