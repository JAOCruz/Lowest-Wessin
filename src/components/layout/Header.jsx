import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { NAV_LINKS, CONSULTATION_URL } from '../../lib/constants'
import { asset } from '../../lib/assets'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="flex-shrink-0">
              <img
                src={asset('/images/logo1.png')}
                alt="Cana Law"
                className="h-16 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.to
                      ? 'text-gold'
                      : 'text-navy/70 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href={CONSULTATION_URL} size="sm">
                Schedule Consultation
              </Button>
            </div>

            <button
              className="lg:hidden text-navy p-2 focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
