/* The Now Designs — shared behaviour (nav, mobile menu, scroll reveal, year) */
(function(){
  var nav = document.getElementById('nav');
  if (nav) {
    addEventListener('scroll', function(){ nav.classList.toggle('scrolled', scrollY > 30); });
  }
  var t = document.getElementById('toggle'), l = document.getElementById('navlinks');
  if (t && l) {
    t.addEventListener('click', function(){ t.classList.toggle('open'); l.classList.toggle('open'); });
    l.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ t.classList.remove('open'); l.classList.remove('open'); });
    });
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .14 });
  document.querySelectorAll('[data-reveal]').forEach(function(el){ io.observe(el); });
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
