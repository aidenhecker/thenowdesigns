import { Link } from 'react-router-dom'
import HashLink from './HashLink'

export default function Footer() {
  const yr = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <Link to="/" className="footer-brand">
              <img className="footer-logo" src="/img/logo-wordmark.png" alt="The Now Designs" />
            </Link>
            <p className="footer__big" style={{ marginTop: 24 }}>
              Your website, <em>all done for you.</em>
            </p>
          </div>
          <ul className="footer__links">
            <li><Link to="/services/">Services</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/work/">Work</Link></li>
            <li><HashLink to="/#contact">Book a free call</HashLink></li>
          </ul>
        </div>
        <a
          className="footer__speed"
          href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fthenowdesigns.com%2F"
          target="_blank"
          rel="noopener"
        >
          <span className="footer__speed-dot live-dot" aria-hidden="true"></span>
          We don’t just promise speed — run our live site through Google’s test <span className="arrow">↗</span>
        </a>
        <div className="footer__bot">
          <span>© {yr} The Now Designs. Fairly normal designs, with a cherry on top.</span>
          <span className="footer__legal">
            <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> ·{' '}
            <a
              href="https://www.instagram.com/thenowdesigns"
              target="_blank"
              rel="noopener"
              aria-label="The Now Designs on Instagram"
            >
              Instagram
            </a>
          </span>
          <address>
            <a href="mailto:aiden@thenowdesigns.com">aiden@thenowdesigns.com</a>
          </address>
        </div>
      </div>
    </footer>
  )
}
