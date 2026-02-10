import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import gsap from 'gsap'
import { NAV_LINKS, CONSULTATION_URL, CONTACT } from '../../lib/constants'
import Button from '../ui/Button'

export default function MobileMenu({ open, onClose }) {
  const overlayRef = useRef(null)
  const panelRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return

    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.set(overlayRef.current, { display: 'block' })
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 })
      gsap.fromTo(
        panelRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power2.out' }
      )
    } else {
      gsap.to(panelRef.current, { x: '100%', duration: 0.3, ease: 'power2.in' })
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { display: 'none' })
          }
          document.body.style.overflow = ''
        },
      })
    }
  }, [open])

  useEffect(() => {
    if (open) onClose()
  }, [pathname])

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[60] hidden opacity-0" aria-hidden={!open}>
      <div className="absolute inset-0 bg-navy-dark/80" onClick={onClose} />
      <div
        ref={panelRef}
        className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-navy border-l border-white/10 flex flex-col translate-x-full"
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="font-display text-lg font-bold text-gold">Cana Law</span>
          <button
            onClick={onClose}
            className="text-soft-white/70 hover:text-soft-white p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-6 space-y-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.to
                  ? 'text-gold bg-gold/10'
                  : 'text-soft-white/80 hover:text-gold hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10 space-y-4">
          <Button href={CONSULTATION_URL} className="w-full">
            Schedule Consultation
          </Button>
          <div className="text-center">
            <a href={`mailto:${CONTACT.email}`} className="text-xs text-soft-white/50 hover:text-gold transition-colors">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
