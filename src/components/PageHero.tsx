import type { ReactNode } from 'react'
import CherryStop from './CherryStop'

// Shared subpage hero: quiet blue field, plain semantic heading, and the
// brand's one gesture — the cherry full stop closing the H1.
export default function PageHero({
  eyebrow,
  children,
  lead,
}: {
  eyebrow: string
  children: ReactNode // h1 content (may include <em>)
  lead: string
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          {children}
          <CherryStop />
        </h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  )
}
