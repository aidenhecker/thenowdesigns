# thenowdesigns

Visuals, Art and Design.

## Website leak scanner

`/scan/` runs a real mobile Lighthouse diagnostic, turns failed audits into
plain-language buyer friction, and qualifies visitors for the fixed-scope
Website Repair Sprint.

The scanner works at low volume with Microlink's public endpoint. Before paid
traffic, set the `VITE_SCAN_API_URL` GitHub Actions variable to a server-side
proxy with commercial capacity. Set `VITE_WHOP_REPAIR_URL` to the public Whop
checkout URL when the Repair Sprint product is ready; until then, buyers submit
the report for scope confirmation and receive checkout afterward.

Copy `.env.example` to `.env.local` for local configuration. Never place a
private provider key in a `VITE_` variable because those values ship to the
browser.
