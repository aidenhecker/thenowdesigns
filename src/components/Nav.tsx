import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HashLink from './HashLink'

// Sticky nav: constant paper background and ink rule — no scroll morphing.
export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)
  const active = (p: string) => (pathname === p || pathname === p + '/' ? 'active' : undefined)

  return (
    <nav className="nav" id="nav" aria-label="Primary">
      <Link to="/" className="brand" aria-label="The Now Designs">
        The N<span className="cherry-o" aria-hidden="true"></span>w Designs
        <span className="brand-dot live-dot" aria-hidden="true"></span>
      </Link>
      <div className={'nav-links' + (open ? ' open' : '')} id="navlinks">
        <Link to="/services/" className={active('/services')} onClick={close}>Services</Link>
        <Link to="/work/" className={active('/work')} onClick={close}>Work</Link>
        <Link to="/about/" className={active('/about')} onClick={close}>About</Link>
        <HashLink to="/#contact" className="btn btn--cherry" onClick={close}>Book a free call</HashLink>
      </div>
      <button
        className={'nav-toggle' + (open ? ' open' : '')}
        id="toggle"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="navlinks"
        onClick={() => setOpen((o) => !o)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}
