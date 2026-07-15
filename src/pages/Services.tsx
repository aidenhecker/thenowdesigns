import { Head } from 'vite-react-ssg'
import HashLink from '../components/HashLink'
import PageHero from '../components/PageHero'
import CherryStop from '../components/CherryStop'

const DETAILS = [
  {
    id: 'web-design',
    num: '01',
    name: 'Web Design',
    intro: 'Editorial, conversion-minded websites built by hand — not dragged out of a template. Beautiful on every screen, fast as hell, engineered to turn visitors into customers.',
    points: [
      'Custom design in your brand, not a theme',
      'Hand-coded — no page-builder bloat',
      'Sub-second load times, top Lighthouse scores',
      'Responsive and accessible on every device',
      'SEO architecture baked in from line one',
    ],
    tag: 'Design + Build',
  },
  {
    id: 'branding',
    num: '02',
    name: 'Branding',
    intro: 'A look with a point of view. We build marks, palettes, and type systems that feel inevitable — so your site reads as a real brand, not a stock kit.',
    points: [
      'Logo / wordmark + variations',
      'Color palette & typography system',
      'Brand guidelines you can hand to anyone',
      'Social, email, and collateral templates',
      'A visual identity that scales with you',
    ],
    tag: 'Logo + System',
  },
  {
    id: 'seo',
    num: '03',
    name: 'Search Engine Optimization',
    intro: 'A beautiful site nobody finds is a waste. We make yours rank, convert, and improve — with search work built on real data, not guesswork.',
    points: [
      'Technical SEO & site-speed tuning',
      'Local SEO that actually ranks',
      'Keyword & content strategy from search data',
      'Google Business profile optimization',
      'Conversion tracking & 60-second monthly reports',
    ],
    tag: 'SEO + Content',
  },
  {
    id: 'wordpress-support',
    num: '04',
    name: 'WordPress Support',
    intro: "Already on WordPress? We keep it fast, secure, and current — theme tweaks, plugin work, bug fixes, and the hands-on help that keeps it running like it should.",
    points: [
      'Theme & template customization',
      'Plugin setup, updates & cleanup',
      'Speed & security hardening',
      'Bug fixes and broken-layout repair',
      'Content edits, done for you',
    ],
    tag: 'Care + Fixes',
  },
  {
    id: 'maintenance',
    num: '05',
    name: 'Website Maintenance',
    intro: 'Launch is the start, not the finish. We keep your site quick, patched, backed up, and looking sharp — so it never quietly drifts out of date.',
    points: [
      'Software, plugin & dependency updates',
      'Daily backups & uptime monitoring',
      'Security patches & SSL renewal',
      'Small content & design tweaks',
      'A 60-second monthly health report',
    ],
    tag: 'Updates + Backups',
  },
]

const FAQ = [
  { q: 'How long does a website take?', a: "Most builds go live in 4–6 weeks, not 4–6 months. Bigger projects can take longer — we'll give you a real timeline on the first call, with weekly progress so you're never wondering." },
  { q: "Do I own the website when it's done?", a: 'Completely. You own the code, the domain, and the data — forever. No vendor lock-in. If you ever leave, you walk away with everything.' },
  { q: 'Do you build custom, or on WordPress?', a: 'Whatever serves you best. We hand-code custom sites for maximum speed and control, and we also support and maintain WordPress if that’s the right call. The goal is your result, not our preference.' },
  { q: 'What if I just need a redesign or upkeep?', a: 'That’s fine. We take on redesigns, single pages, custom sections, SEO-only and maintenance-only engagements. Tell us where you are and we’ll scope exactly what you need.' },
  { q: 'Will my site actually rank on Google?', a: 'SEO architecture is built into every site from line one, and speed (which Google rewards) is a given. For ongoing rankings, our Search Engine Optimization service handles the technical work, content, and reporting month to month.' },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — The Now Designs</title>
        <meta name="description" content="Web design, branding, search engine optimization, WordPress support, and website maintenance — done for you, end to end. Fast, beautiful, conversion-first." />
        <meta property="og:title" content="Services — The Now Designs" />
        <meta property="og:description" content="Web design, branding, SEO, WordPress support, and maintenance — done for you, end to end." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thenowdesigns.com/services/" />
        <meta property="og:image" content="https://thenowdesigns.com/img/og-card.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://thenowdesigns.com/services/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })}</script>
      </Head>

      <PageHero
        eyebrow="Services"
        lead="Five services, one studio, zero handoffs. A whole site, a fresh identity, the SEO to get found, or the ongoing care to keep it sharp — it's all done for you."
      >
        Everything you need to <em>win online</em>
      </PageHero>

      {/* 01 · SERVICE DETAILS — each service a deep-linkable article */}
      <section className="sec" aria-label="Our services">
        <div className="wrap">
          {DETAILS.map((d) => (
            <article className="svc-detail" id={d.id} key={d.id}>
              <div className="svc-detail__text">
                <span className="svc-detail__num">{d.num}</span>
                <h2>{d.name}</h2>
                <p className="svc-detail__intro">{d.intro}</p>
                <ul>
                  {d.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="svc-detail__media">
                <div className="numpanel" aria-hidden="true">
                  <span>{d.num}</span>
                  <span className="tag">{d.tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 02 · PROCESS */}
      <section className="sec sec--tint" id="process" aria-labelledby="process-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">02</span> How it works</span>
            <h2 className="h-sec" id="process-h">Live in <em>weeks</em>, not months.</h2>
            <p>Four steps. One direct line to the person building it. No approval chains, no waiting rooms.</p>
          </div>
          <ol className="steps">
            <li><h3>The Call</h3><p>A free, no-pitch conversation. You tell us what you're building; we tell you exactly what we'd do.</p></li>
            <li><h3>The Design</h3><p>We design it in your brand. You see real screens — and shape it with us before a line ships.</p></li>
            <li><h3>The Build</h3><p>We hand-code it: fast, responsive, SEO-ready. Weekly updates, revisions until it's right.</p></li>
            <li><h3>The Launch</h3><p>We ship it locked-down and lightning quick — then hand you the keys. Cherry on top included.</p></li>
          </ol>
        </div>
      </section>

      {/* 03 · SECURITY — the page's ink band */}
      <section className="sec sec--ink" id="security" aria-labelledby="security-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">03</span> Security · not optional</span>
            <h2 className="h-sec" id="security-h">It's not about the website. It's about <em>keeping what's yours.</em></h2>
            <p>AI changed how websites get attacked. Bots, phishing nets, and scrapers run around the clock, headless, below the surface. A website is the easy part — keeping <em>you</em> safe online is the real work.</p>
          </div>
          <ul className="shield-list">
            <li>
              <h3>The threat is invisible</h3>
              <p>Most attacks never touch a browser. Automated bots probe, scrape, and phish 24/7. If a site isn't locked down at the wire, you only see the damage.</p>
            </li>
            <li>
              <h3>Your ideas are the target</h3>
              <p>In an AI world, your ideas are what make you money. The wrong setup lets anyone copy your content and lift your data. We make sure your ideas keep paying <em>you.</em></p>
            </li>
            <li>
              <h3>We lock it down</h3>
              <p>Every site ships with end-to-end HTTPS and secure DNS through <b>Cloudflare</b> — battle-tested infrastructure, standard on every build.</p>
            </li>
          </ul>
          <ul className="trust-band" aria-label="Security measures">
            <li className="trust-band__lbl" aria-hidden="true">Secured with</li>
            <li className="trust-chip"><b>Cloudflare</b> DNS</li>
            <li className="trust-chip"><b>HTTPS</b> / TLS 1.3</li>
            <li className="trust-chip"><b>DNSSEC</b></li>
            <li className="trust-chip"><b>SSL</b> on every page</li>
            <li className="trust-chip">Bot &amp; DDoS protection</li>
          </ul>
          <p className="secure-kicker">Your identity, your data, your ideas — <em>safe, and yours to keep.</em></p>
        </div>
      </section>

      {/* 04 · BUDGET */}
      <section className="sec" id="pricing" aria-labelledby="budget-h">
        <div className="wrap budget-wrap">
          <span className="eyebrow"><span className="n">04</span> What it costs</span>
          <h2 id="budget-h">
            We cater to <em>your budget</em>
            <CherryStop />
          </h2>
          <p className="budget-line">
            Most studios hide prices — that's the overhead talking. Tell us your number and we'll
            build the best site it can buy. No tiers, no games, and you own everything when it ships.
          </p>
          <HashLink to="/#contact" className="btn btn--cherry btn--lg">Book a free call <span className="arrow">→</span></HashLink>
        </div>
      </section>

      {/* 05 · FAQ — the page's blue panel */}
      <section className="sec panel--blue" id="faq" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="n">05</span> Good questions</span>
            <h2 className="h-sec" id="faq-h">Before you <em>ask.</em></h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q} name="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-labelledby="cta-h">
        <div className="wrap">
          <h2 id="cta-h">Tell us what you're <em>building</em><CherryStop /></h2>
          <p>We'll tell you exactly what we'd do — and what it'd cost. Free, no pitch, no pressure.</p>
          <HashLink to="/#contact" className="btn btn--cherry">Book a free call <span className="arrow">→</span></HashLink>
        </div>
      </section>
    </>
  )
}
