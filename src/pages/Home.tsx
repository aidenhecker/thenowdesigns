import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import HashLink from '../components/HashLink'
import CherryStop from '../components/CherryStop'
import ContactForm from '../components/ContactForm'

const SERVICES = [
  { name: 'Web Design', tag: 'Built by hand', href: '/services/#web-design' },
  { name: 'Branding', tag: 'A point of view', href: '/services/#branding' },
  { name: 'Search Engine Optimization', tag: 'Found on Google', href: '/services/#seo' },
  { name: 'WordPress Support', tag: 'Fixed & looked after', href: '/services/#wordpress-support' },
  { name: 'Website Maintenance', tag: 'Always up to date', href: '/services/#maintenance' },
]

// Selected work shown on the homepage. Honest by design: one real, clickable
// live preview hosted on this domain + three labelled in-house concept builds.
const WORKS = [
  { title: 'Karis Hair Salon', img: '/preview/karis/img/karis-hero.jpg', href: '/preview/karis/', live: true },
  { title: 'Brown Bloom · café', img: '/img/work-cafe.jpg', href: '/work/', live: false },
  { title: 'Velura · e-commerce', img: '/img/work-skincare.jpg', href: '/work/', live: false },
  { title: 'Meridian Legal · professional', img: '/img/work-law.jpg', href: '/work/', live: false },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>The Now Designs — AI-accelerated web studio</title>
        <meta name="description" content="AI-accelerated web studio. We design, build, and launch your whole website for you — live in weeks, owned outright by you. Neuro-informed design, hand-finished." />
        <meta property="og:title" content="The Now Designs — AI-accelerated web studio" />
        <meta property="og:description" content="Your whole website, done for you. Designed, built, and launched — AI-accelerated, hand-finished, yours to keep." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thenowdesigns.com/" />
        <meta property="og:image" content="https://thenowdesigns.com/img/og-card.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://thenowdesigns.com/" />
      </Head>

      {/* HERO — purely typographic; the h1 is the LCP */}
      <section className="hero" aria-label="Introduction">
        <div className="wrap">
          <span className="eyebrow">AI-accelerated · 100% human-finished</span>
          <h1>
            Your whole website. <em>Done for you</em>
            <CherryStop />
          </h1>
          <p className="lead">
            A slow, forgettable site quietly costs you customers. We build the fast,
            unforgettable one — live in weeks, yours to keep.
          </p>
          <div className="hero__cta">
            <HashLink to="/#contact" className="btn btn--cherry btn--lg">
              Book a free call <span className="arrow">→</span>
            </HashLink>
            <Link to="/work/" className="hero__link">
              See the work <span className="arrow">→</span>
            </Link>
          </div>
          <ul className="hero__meta">
            <li>Live in weeks</li>
            <li>You own everything</li>
            <li>Same-day replies</li>
          </ul>
        </div>
      </section>

      {/* BRAND BAND — static, readable; replaces the marquee */}
      <aside className="band">
        <p>Plain vanilla, cherry on top <span className="pip" aria-hidden="true"></span></p>
      </aside>

      {/* 01 · THE GAP */}
      <section className="sec" id="gap" aria-labelledby="gap-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">01</span> The difference</span>
            <h2 className="h-sec" id="gap-h">Same business. <em>Different result.</em></h2>
          </div>
          <div className="gap-grid">
            <div className="gap-col gap-col--now">
              <h3>Right now</h3>
              <ul className="gap-list">
                <li>Loads slow — they leave before it paints.</li>
                <li>Looks like a template — instantly forgettable.</li>
                <li>Reads flat — no reason to act today.</li>
              </ul>
            </div>
            <div className="gap-col">
              <h3>With us</h3>
              <ul className="gap-list gap-list--win">
                <li>Loads before they blink.</li>
                <li>Looks like nobody else.</li>
                <li>Built to make them act now.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · PROOF — selected work, moved up: proof before pitch */}
      <section className="sec sec--tint" id="works" aria-labelledby="works-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">02</span> Selected work</span>
            <h2 className="h-sec" id="works-h">Proof, not <em>promises.</em></h2>
          </div>
          <ul className="works-grid">
            {WORKS.map((w) => {
              const inner = (
                <figure>
                  <div className="workpiece__media">
                    <img src={w.img} alt={w.title + ' — website by The Now Designs'} loading="lazy" />
                  </div>
                  <figcaption>
                    <span className="workpiece__title">{w.title}</span>
                    <span className={'workpiece__flag' + (w.live ? ' is-live' : '')}>
                      {w.live ? 'Live preview ↗' : 'Concept'}
                    </span>
                  </figcaption>
                </figure>
              )
              return (
                <li key={w.title}>
                  {w.live ? (
                    <a href={w.href} target="_blank" rel="noopener" className="workpiece">{inner}</a>
                  ) : (
                    <Link to={w.href} className="workpiece">{inner}</Link>
                  )}
                </li>
              )
            })}
          </ul>
          <p className="works-note">
            One live client preview, three in-house concept builds — your project takes a slot here
            when it ships. <Link className="tlink" to="/work/">See all work <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* 03 · WHY THE CHERRY — the identity, at poster scale */}
      <section className="sec" id="cherry" aria-labelledby="cherry-h">
        <div className="wrap split-grid">
          <figure className="split-media">
            <div className="idpanel">
              <img src="/cherry-single.svg" alt="" width="280" height="280" />
            </div>
          </figure>
          <div className="split-copy">
            <span className="eyebrow"><span className="n">03</span> Why the cherry</span>
            <h2 className="h-sec" id="cherry-h">Plain vanilla. <em>Cherry on top.</em></h2>
            <p className="split-sub">Anyone can build a site that works. We build the one people remember.</p>
            <p className="split-line">AI-accelerated scaffolding. 100% human-finished design. Agency-grade in weeks — without the agency invoice.</p>
          </div>
        </div>
      </section>

      {/* 04 · METHOD — the page's single ink band */}
      <section className="sec sec--ink" id="method" aria-labelledby="method-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">04</span> Our method · neuro-informed design</span>
            <h2 className="h-sec" id="method-h">We design for the brain — <em>before</em> the eye.</h2>
            <p>Attention is decided in the first five seconds, below conscious thought. We engineer every page around how the brain actually reads, feels, and decides.</p>
          </div>
          <ol className="method-list">
            <li>
              <h3>The 5-second window</h3>
              <p>Visitors decide to trust you or bounce in 5 seconds. We design the top of your site to pass the blink test before conscious thought even kicks in.</p>
            </li>
            <li>
              <h3>Anticipation, then payoff</h3>
              <p>People don't read websites; they scan them. We build visual momentum and layout pacing that naturally pulls a visitor's thumb down the page.</p>
            </li>
            <li>
              <h3>VRIBE — our in-silico lab</h3>
              <p>We pressure-test our creative against predicted attention models before it ships. You get a site backed by visual behavioral data, not just agency guesswork.</p>
            </li>
          </ol>
          <p className="method-note">Methodology and R&amp;D, not a per-visitor service or mind-reading. VRIBE is in-house research; we apply what it teaches.</p>
        </div>
      </section>

      {/* 05 · SERVICES — a ruled menu with real destinations */}
      <section className="sec" id="services" aria-labelledby="services-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">05</span> What we do</span>
            <h2 className="h-sec" id="services-h">Everything you need. <em>Nothing you don't.</em></h2>
          </div>
          <ol className="svc-list">
            {SERVICES.map((s) => (
              <li key={s.name}>
                <Link to={s.href} className="svc-row">
                  <span className="svc-row__name">{s.name}</span>
                  <span className="svc-row__tag">{s.tag}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="svc-more">
            <Link className="tlink" to="/services/">See all services <span className="arrow">→</span></Link>
          </p>
        </div>
      </section>

      {/* 06 · WHY US + THE STANDARD — merged blue panel */}
      <section className="sec panel--blue" id="why" aria-labelledby="why-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">06</span> Why us</span>
            <h2 className="h-sec" id="why-h">Few clients. Full attention. <em>Real results.</em></h2>
          </div>
          <ul className="why-list">
            <li>Text the person who builds it.</li>
            <li>Loads in under a second.</li>
            <li>You own the code, domain &amp; data — forever.</li>
          </ul>
          <dl className="stats" id="standard">
            <div><dt>Human-coded front end, never templated</dt><dd>100<em>%</em></dd></div>
            <div><dt>Load times we engineer for</dt><dd>Sub<em>-second</em></dd></div>
            <div><dt>Built to rank from line one</dt><dd>SEO<em>-first</em></dd></div>
            <div><dt>Clients at a time, on purpose</dt><dd>6</dd></div>
          </dl>
        </div>
      </section>

      {/* 07 · PROCESS + the one de-escalated micro-ask */}
      <section className="sec sec--tint" id="process" aria-labelledby="process-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">07</span> How it works</span>
            <h2 className="h-sec" id="process-h">Live in <em>weeks</em>, not months.</h2>
          </div>
          <ol className="steps">
            <li><h3>Call</h3><p>A free, no-pitch chat about what you're building.</p></li>
            <li><h3>Design</h3><p>Real screens in your brand — shaped with you.</p></li>
            <li><h3>Build</h3><p>Hand-coded, fast, and SEO-ready.</p></li>
            <li><h3>Launch</h3><p>We ship it and hand you the keys.</p></li>
          </ol>
          <div className="callout">
            <p className="callout__line">
              Start with a <em>free 5-minute teardown</em> of your current site. No pitch — just a
              diagnostic. Not a fit? We'll tell you who to call instead.
            </p>
            <HashLink to="/#contact" className="btn btn--cherry btn--lg">
              Get my free teardown <span className="arrow">→</span>
            </HashLink>
          </div>
        </div>
      </section>

      {/* 08 · BUDGET — the centered exception */}
      <section className="sec" id="pricing" aria-labelledby="budget-h">
        <div className="wrap budget-wrap">
          <span className="eyebrow"><span className="n">08</span> What it costs</span>
          <h2 id="budget-h">
            We cater to <em>your budget</em>
            <CherryStop />
          </h2>
          <p className="budget-line">
            Tell us what you've set aside for your website — we'll build the best site that number
            can buy. No tiers, no games, and you own everything when it ships.
          </p>
          <HashLink to="/#contact" className="btn btn--cherry btn--lg">
            Book a free call <span className="arrow">→</span>
          </HashLink>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec sec--tint contact" id="contact" aria-labelledby="contact-h">
        <div className="wrap contact-grid">
          <div>
            <span className="eyebrow">Let's team up</span>
            <h2 className="h-sec" id="contact-h" style={{ marginTop: 16 }}>Tell us what <em>you're building.</em></h2>
            <p className="lead">
              We'll tell you what we'd do — and what it costs. Free. Same-day reply from the person who builds it.
            </p>
            <ContactForm />
          </div>
          <aside className="contact__aside">
            <h3>What the first call is</h3>
            <ul className="pts">
              <li><span className="c">✓</span> 15 minutes — no slide decks</li>
              <li><span className="c">✓</span> Leave with 3 fixes, hire us or not</li>
              <li><span className="c">✓</span> Same-day reply from the person who builds it</li>
            </ul>
            <ul className="aside-chips">
              <li>Secured by <b>Cloudflare</b></li>
              <li><b>Daily</b> backups</li>
              <li><b>Enterprise</b> spam shielding</li>
              <li>You own everything</li>
            </ul>
            <p className="aside__or">Prefer email?</p>
            <a className="mail" href="mailto:aiden@thenowdesigns.com">aiden@thenowdesigns.com</a>
          </aside>
        </div>
      </section>
    </>
  )
}
