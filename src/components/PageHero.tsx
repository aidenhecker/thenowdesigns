import KineticHeading, { type Seg } from './KineticHeading'

// Shared subpage hero. Static by design — no 3D accent.
export default function PageHero({
  eyebrow,
  heading,
  lead,
}: {
  eyebrow: string
  heading: Seg[]
  lead: string
}) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <span className="eyebrow" data-reveal>{eyebrow}</span>
        <KineticHeading as="h1" segments={heading} />
        <p className="lead" data-reveal data-d="2">{lead}</p>
      </div>
    </header>
  )
}
