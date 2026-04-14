import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Header() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/welcome', label: 'Welcome' },
    { href: '/services', label: 'Services' },
    { href: '/events', label: 'Event Details' },
    { href: '/blog', label: 'Blog Feed' },
    { href: '/about', label: 'About Us' },
    { href: '/groups', label: 'Groups' },
    { href: '/members', label: 'Members' },
  ]

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <Link href="/" className="header-brand">
            <img
              src="https://static.wixstatic.com/media/8d010f_11132be18ff44be589b4d092973aabd6~mv2.png/v1/fill/w_72,h_72,al_c,q_85,enc_avif,quality_auto/8d010f_11132be18ff44be589b4d092973aabd6~mv2.png"
              alt="Sunshine After Loss"
              className="header-brand-icon"
            />
            <span className="header-tagline">Reclaiming Life, One Step at a Time</span>
          </Link>
          <nav className="main-nav">
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={router.pathname === link.href ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <button
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
