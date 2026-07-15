import { Head } from 'vite-react-ssg'
import HashLink from '../components/HashLink'
import PageHero from '../components/PageHero'
import CherryStop from '../components/CherryStop'

export default function About() {
  return (
    <>
      <Head>
        <title>About — The Now Designs</title>
        <meta name="description" content="The Now Designs is a done-for-you web studio that hand-builds fast, beautiful, conversion-first websites. Few clients. Full attention. Real results." />
        <meta property="og:title" content="About — The Now Designs" />
        <meta property="og:description" content="A small studio that builds like a big one — fast, beautiful, conversion-first websites, all done for you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thenowdesigns.com/about/" />
        <meta property="og:image" content="https://thenowdesigns.com/img/og-card.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://thenowdesigns.com/about/" />
      </Head>

      <PageHero
        eyebrow="About the studio"
        lead="We hand-build fast, beautiful websites that earn their keep — and we take a handful of clients at a time so yours gets built like it's the only one."
      >
        A small studio that builds like a <em>big</em> one
      </PageHero>

      {/* 01 · STORY */}
      <section className="sec" id="story" aria-labelledby="story-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">01</span> Why we exist</span>
            <h2 className="h-sec" id="story-h">We got tired of <em>template factories.</em></h2>
          </div>
          <div className="story">
            <div>
              <p className="big">Most websites are sold like furniture: pick a template, swap the photos, ship it. Then it loads slow, looks like everyone else, and quietly costs you customers.</p>
              <p>We started The Now Designs to do the opposite. Every site is hand-built — designed around your brand and your buyers, coded to load before they blink, and written to actually convert.</p>
            </div>
            <div>
              <p>The name's the whole philosophy: design for the <em>now</em>. The web your customers use today — fast, mobile-first, beautiful, and honest.</p>
              <p>Keep the roster small and you don't get handed to a junior or buried in a queue. You talk to the person building it, see real progress weekly, and own everything when it's done.</p>
              <p style={{ marginTop: 8 }}>
                <HashLink to="/#contact" className="btn btn--cherry">Book a free call <span className="arrow">→</span></HashLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · VALUES — the page's blue panel */}
      <section className="sec panel--blue" id="values" aria-labelledby="values-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">02</span> How we treat clients</span>
            <h2 className="h-sec" id="values-h">Few clients. Full attention. <em>Real results.</em></h2>
          </div>
          <ol className="method-list method-list--onblue">
            <li>
              <h3>You text the designer</h3>
              <p>No ticket system, no account manager who's never touched code. You message the person building your site — and get an answer the same day.</p>
            </li>
            <li>
              <h3>Built to load instantly</h3>
              <p>Zero bloat, every kilobyte justified. Your site loads before they blink — Google notices, and your visitors notice more.</p>
            </li>
            <li>
              <h3>You own everything</h3>
              <p>Your code, your domain, your data. No lock-in, no hostage situations. If we're not earning it, you walk with everything.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 03 · HOW WE WORK */}
      <section className="sec sec--tint" id="how" aria-labelledby="how-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">03</span> How we work</span>
            <h2 className="h-sec" id="how-h">Honest, fast, <em>and</em> good.</h2>
            <p>Three things most agencies make you choose between. We don't.</p>
          </div>
          <ol className="steps">
            <li><h3>Transparent</h3><p>Straight talk on cost — no hidden fees. A monthly report you can read in 60 seconds. Numbers you can verify yourself.</p></li>
            <li><h3>Fast</h3><p>4–6 week launches, not 4–6 months. Same-day replies. Weekly progress you can actually see.</p></li>
            <li><h3>Crafted</h3><p>Hand-coded, accessible, and tuned for speed and search. Work that looks effortless because the effort went where you can't see it.</p></li>
            <li><h3>Yours</h3><p>You keep the code, the domain, and the data — forever. We earn the relationship every month instead of locking you in.</p></li>
          </ol>
        </div>
      </section>

      {/* 04 · STANDARDS */}
      <section className="sec" id="standards" aria-labelledby="standards-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">04</span> How we build</span>
            <h2 className="h-sec" id="standards-h">Small studio, <em>serious</em> standards.</h2>
          </div>
          <dl className="stats">
            <div><dt>Hand-built — never templated</dt><dd>100<em>%</em></dd></div>
            <div><dt>Load times we engineer for</dt><dd>Sub<em>-second</em></dd></div>
            <div><dt>Built to rank from line one</dt><dd>SEO<em>-first</em></dd></div>
            <div><dt>Clients at a time — on purpose</dt><dd>6</dd></div>
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-labelledby="cta-h">
        <div className="wrap">
          <h2 id="cta-h">When you're ready, <em>we're here</em><CherryStop /></h2>
          <p>If your site is costing you customers, let's talk. Free, no pitch.</p>
          <HashLink to="/#contact" className="btn btn--cherry">Book a free call <span className="arrow">→</span></HashLink>
        </div>
      </section>
    </>
  )
}
