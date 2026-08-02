import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
  const onScroll = () => {
    const nav = document.querySelector('nav')
    if (window.pageYOffset > 20) {
      nav.classList.add('scrolled-nav')
      setScrolled(true)
    } else {
      nav.classList.remove('scrolled-nav')
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgb(232, 230, 222)',
        backdropFilter: 'none',
        boxShadow: scrolled ? '0 1px 3px rgb(10 15 38 / 0.08)' : '0 1px 2px rgb(10 15 38 / 0.04)',
      }}
    >
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="font-display font-bold text-lg tracking-tight text-brand">
            SC<span className="text-brand/40">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link text-sm font-medium transition-colors ${active === l.href.slice(1) ? 'text-brand active' : 'text-brand/70 hover:text-brand'
                  }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brand/90 transition-colors"
            >
              Contact <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-brand/5 transition-colors"
            aria-label="Open menu"
          >
            <FiMenu className="w-5 h-5 text-brand" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-brand/20 backdrop-blur-sm md:hidden z-40"
          onClick={close}
        />
      )}

      <div
        className={`mobile-menu fixed top-0 right-0 bottom-0 w-72 bg-cream shadow-2xl md:hidden z-50 ${open ? 'open' : ''
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-brand/10">
          <span className="font-display font-bold text-lg tracking-tight text-brand">Menu</span>
          <button
            onClick={close}
            className="p-2 -mr-2 rounded-lg hover:bg-brand/5 transition-colors"
            aria-label="Close menu"
          >
            <FiX className="w-5 h-5 text-brand" />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="block px-4 py-3 rounded-xl text-brand/70 font-medium hover:bg-brand/5 hover:text-brand transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-4 text-center bg-brand text-white font-medium px-5 py-3 rounded-full hover:bg-brand/90 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}