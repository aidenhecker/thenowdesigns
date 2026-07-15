// The brand gesture: a 2D cherry closes the page's H1 as its full stop.
// Screen readers and copy/paste get a real period; the mark is decorative.
export default function CherryStop() {
  return (
    <>
      <span className="sr-only">.</span>
      {'⁠' /* word joiner: the dot never wraps to a line of its own */}
      <span className="h1-dot" aria-hidden="true" />
    </>
  )
}
