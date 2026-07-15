import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll behaviour on navigation: native scroll only — hash target else top.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  // Scroll-reveal + kinetic headings (ports the IntersectionObserver). Per route.
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll('[data-reveal]:not(.in),[data-kinetic]:not(.in)'),
    )
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
