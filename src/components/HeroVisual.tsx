// Static hero visual — the brand cherry as a photograph. The WebGL cherry
// (scroll-vacuum zoom) was removed by design: identity stays, gimmick goes.
export default function HeroVisual() {
  return (
    <figure className="hero__visual hero__media" data-reveal data-d="2">
      <div className="hero__frame">
        <img
          className="hero__img"
          src="/img/hero-cherry.jpg"
          alt="A glossy cherry on a blue backdrop — the Now Designs mark"
          fetchPriority="high"
        />
      </div>
    </figure>
  )
}
