import { Head } from 'vite-react-ssg'
import HashLink from '../components/HashLink'
import PageHero from '../components/PageHero'
import CherryStop from '../components/CherryStop'

const WORK = [
  {
    img: '/img/work-cafe.jpg', cat: 'Café · Brand + Site', title: 'Brown Bloom',
    desc: 'Appetite-first design built to drive online orders and table bookings — warm, fast, mobile-first.',
    challenge: 'A neighbourhood café losing walk-ins to slicker delivery apps.',
    approach: 'Appetite-led photography, one-tap ordering, mobile-first speed.',
    outcome: 'A site engineered to turn a hungry scroll into a booked table.',
  },
  {
    img: '/img/work-fitness.jpg', cat: 'Fitness · Site + Booking', title: 'MOVE',
    desc: 'High-energy, conversion-focused layout that turns visitors into trial sign-ups.',
    challenge: 'A studio with energy in person but a flat, forgettable site.',
    approach: 'Kinetic layout, a single bold CTA, friction-free trial booking.',
    outcome: 'Every section funnels toward one action: claim the free trial.',
  },
  {
    img: '/img/work-law.jpg', cat: 'Professional · Brand + Site', title: 'Meridian Legal',
    desc: 'Calm, trustworthy, and credible — a professional-services site that wins the first call.',
    challenge: "A firm whose expertise didn't match a dated, low-trust site.",
    approach: 'Restrained typography, clear practice areas, a calm path to contact.',
    outcome: 'Credibility you feel in the first three seconds — built to win the call.',
  },
  {
    img: '/img/work-skincare.jpg', cat: 'E-commerce · Storefront', title: 'Velura',
    desc: 'Clean, tactile product storytelling built to lift average order value.',
    challenge: 'A premium product flattened by a generic template storefront.',
    approach: 'Tactile product storytelling, considered bundling, fast checkout.',
    outcome: 'A storefront designed to lift average order value, not just traffic.',
  },
  {
    img: '/img/work-architecture.jpg', cat: 'Architecture · Portfolio', title: 'A / N Studio',
    desc: 'Editorial, image-led portfolio that lets the work speak — and the inquiries follow.',
    challenge: 'Stunning projects buried in a cluttered, slow-loading gallery.',
    approach: 'Editorial whitespace, full-bleed imagery, a single clear inquiry path.',
    outcome: 'The work speaks first; the inquiry follows on its own.',
  },
  {
    img: '/img/work-restaurant.jpg', cat: 'Hospitality · Site + Menu', title: 'Vero',
    desc: 'Moody, mouth-watering, and reservation-ready — hospitality design that fills tables.',
    challenge: 'A destination restaurant with a menu PDF where a website should be.',
    approach: 'Moody photography, a live menu, reservations one tap from anywhere.',
    outcome: 'A site that makes you hungry — and books the table while it does.',
  },
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Work — The Now Designs</title>
        <meta name="description" content="Selected work and concept builds from The Now Designs — fast, beautiful, conversion-first websites across industries." />
        <meta property="og:title" content="Work — The Now Designs" />
        <meta property="og:description" content="Selected work and concept builds — fast, beautiful, conversion-first websites." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thenowdesigns.com/work/" />
        <meta property="og:image" content="https://thenowdesigns.com/img/og-card.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://thenowdesigns.com/work/" />
      </Head>

      <PageHero
        eyebrow="Work"
        lead="Selected directions and concept builds across industries — fast, conversion-first, and unmistakably custom. Your project slots right in here."
      >
        A taste of what <em>we build</em>
      </PageHero>

      {/* 01 · CASE STUDIES */}
      <section className="sec" aria-labelledby="cases-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">01</span> Case studies</span>
            <h2 className="h-sec" id="cases-h">Concept builds, <em>across industries.</em></h2>
          </div>
          <div className="work-grid">
            {WORK.map((w) => (
              <article className="work-card" key={w.title}>
                <figure>
                  <div className="work-card__media">
                    <img src={w.img} alt={w.title + ' website concept by The Now Designs'} loading="lazy" />
                  </div>
                </figure>
                <div className="work-card__meta">
                  <span className="work-card__cat">{w.cat}</span>
                  <span className="work-card__flag">Concept</span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <dl className="case">
                  <div><dt>Challenge</dt><dd>{w.challenge}</dd></div>
                  <div><dt>Approach</dt><dd>{w.approach}</dd></div>
                  <div><dt>Outcome</dt><dd>{w.outcome}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <p className="work-note">
            These case studies show our range and the thinking behind each build — representative
            directions across industries. As client projects ship, they take their place here. Want
            yours to be next? Let's talk.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-labelledby="cta-h">
        <div className="wrap">
          <h2 id="cta-h">Your site could be <em>next</em><CherryStop /></h2>
          <p>Tell us what you're building — we'll show you exactly what we'd do, free.</p>
          <HashLink to="/#contact" className="btn btn--cherry">Book a free call <span className="arrow">→</span></HashLink>
        </div>
      </section>
    </>
  )
}
