/* The Now Designs — hero cherry-drop
   Canvas 2D, zero dependencies, zero build step, deferred past LCP.
   A single cherry falls onto a warm plate, squashes, settles, then STOPS
   (no perpetual motion -> no WCAG 2.2.2 concern, ~0 steady-state cost).
   Degrades to the inline SVG (.cherry-fallback) when JS is off, the 2D
   context is unavailable, or the user prefers reduced motion. */
(function () {
  'use strict';

  var stage = document.getElementById('cherry-stage');
  if (!stage) return;

  // Reduced motion: never animate. The settled SVG is the final state.
  var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq && mq.matches) return;

  var TAU = Math.PI * 2;
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  var booted = false;
  var idle = window.requestIdleCallback || function (cb) { return setTimeout(cb, 200); };

  // Defer hard: after full load, then an idle slot, then only if on screen.
  function schedule() {
    idle(function () {
      if (booted) return;
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) {
          if (es[0] && es[0].isIntersecting) { io.disconnect(); boot(); }
        }, { threshold: 0.2 });
        io.observe(stage);
      } else {
        boot();
      }
    }, { timeout: 1200 });
  }
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });

  function boot() {
    if (booted) return;
    booted = true;

    var canvas = document.createElement('canvas');
    canvas.className = 'cherry-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    var ctx = canvas.getContext && canvas.getContext('2d', { alpha: true });
    if (!ctx) return; // no 2D context -> SVG fallback stays visible

    stage.appendChild(canvas);

    var DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    var W = 0, H = 0, cx = 0, plateY = 0, floorY = 0, R = 0, startY = 0;

    function size() {
      var r = stage.getBoundingClientRect();
      W = r.width; H = r.height;
      if (!W || !H) return false;
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cx = W * 0.5;
      R = clamp(Math.min(W, H) * 0.135, 30, 120);
      plateY = H * 0.60;        // cherry CENTER at rest
      floorY = plateY + R + 4;  // contact-shadow line
      startY = -R * 1.9;        // start above the frame
      return true;
    }

    // physics constants
    var GRAV = 2200, REST = 0.36;
    var SQ_K = 260, SQ_DAMP = 16;
    var ST_K = 95, ST_DAMP = 5.6, ST_REST = -0.05;
    var RING_DUR = 0.7;

    // state
    var y, vy, landed, squash, squashVel, stemA, stemVel, rippled, ringActive, ringT, done;
    function reset() {
      y = startY; vy = 0; landed = false;
      squash = 0; squashVel = 0;
      stemA = -0.18; stemVel = 0;
      rippled = false; ringActive = false; ringT = 0;
      done = false;
    }

    var raf = 0, lastT = 0, paused = false;

    function step(dt) {
      if (!landed) {
        vy += GRAV * dt;
        y += vy * dt;
        if (y >= plateY) {
          y = plateY;
          var impact = vy;
          if (impact < 70) { landed = true; vy = 0; }
          else vy = -impact * REST;
          squashVel += impact * 0.0016;        // impact -> squash
          stemVel += -impact * 0.0009;         // impact -> stem whip
          if (!rippled) { rippled = true; ringActive = true; ringT = 0; }
        }
      }
      // squash spring -> round
      squashVel += (-SQ_K * squash - SQ_DAMP * squashVel) * dt;
      squash += squashVel * dt;
      if (squash < -0.12) { squash = -0.12; if (squashVel < 0) squashVel = 0; }
      // stem spring -> rest angle
      stemVel += (-ST_K * (stemA - ST_REST) - ST_DAMP * stemVel) * dt;
      stemA += stemVel * dt;
      // ripple life
      if (ringActive) { ringT += dt; if (ringT > RING_DUR) ringActive = false; }
    }

    function render() {
      ctx.clearRect(0, 0, W, H);

      var fall = clamp(1 - (plateY - y) / (plateY - startY), 0, 1);
      var bottom = y + R;

      // contact shadow on the plate (deforms with squash + proximity)
      var shW = R * 1.7 * (1 + squash * 0.7) * (0.5 + 0.5 * fall);
      var shH = R * 0.42 * (0.55 + 0.45 * fall);
      var base = 0.08 + 0.12 * fall;
      var sg = ctx.createRadialGradient(cx, floorY, 0, cx, floorY, shW);
      sg.addColorStop(0, 'rgba(21,20,15,' + base.toFixed(3) + ')');
      sg.addColorStop(0.7, 'rgba(21,20,15,' + (base * 0.5).toFixed(3) + ')');
      sg.addColorStop(1, 'rgba(21,20,15,0)');
      ctx.save();
      ctx.translate(cx, floorY);
      ctx.scale(1, shH / shW);
      ctx.fillStyle = sg;
      ctx.beginPath(); ctx.arc(0, 0, shW, 0, TAU); ctx.fill();
      ctx.restore();

      // single soft ripple on first contact
      if (ringActive) {
        var rp = ringT / RING_DUR;
        ctx.save();
        ctx.globalAlpha = (1 - rp) * 0.2;
        ctx.strokeStyle = '#C5391F';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.ellipse(cx, floorY, R * (0.8 + rp * 1.9), R * (0.2 + rp * 0.55), 0, 0, TAU);
        ctx.stroke();
        ctx.restore();
      }

      // cherry body (squash about the planted bottom)
      var sx = 1 + squash * 0.6, sy = 1 - squash * 0.6;
      ctx.save();
      ctx.translate(cx, bottom);
      ctx.scale(sx, sy);
      var g = ctx.createRadialGradient(-R * 0.34, -R * 1.34, R * 0.05, 0, -R, R * 1.2);
      g.addColorStop(0, '#ffc2ad');
      g.addColorStop(0.22, '#f2654a');
      g.addColorStop(0.6, '#E1452E');
      g.addColorStop(0.88, '#C5391F');
      g.addColorStop(1, '#85220f');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(0, -R, R, 0, TAU); ctx.fill();
      // stem dimple
      var d = ctx.createRadialGradient(R * 0.02, -R * 1.9, 0, R * 0.02, -R * 1.9, R * 0.36);
      d.addColorStop(0, 'rgba(86,20,12,0.5)');
      d.addColorStop(1, 'rgba(86,20,12,0)');
      ctx.fillStyle = d;
      ctx.beginPath(); ctx.arc(R * 0.02, -R * 1.9, R * 0.36, 0, TAU); ctx.fill();
      // specular highlight
      var s = ctx.createRadialGradient(-R * 0.36, -R * 1.36, 0, -R * 0.36, -R * 1.36, R * 0.44);
      s.addColorStop(0, 'rgba(255,255,255,0.85)');
      s.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = s;
      ctx.beginPath(); ctx.arc(-R * 0.36, -R * 1.36, R * 0.44, 0, TAU); ctx.fill();
      ctx.restore();

      // stem (does not squash; rotates about the cherry's top)
      var topY = bottom - 2 * R * sy;
      ctx.save();
      ctx.translate(cx, topY);
      ctx.rotate(stemA);
      ctx.beginPath();
      ctx.moveTo(0, 2);
      ctx.quadraticCurveTo(R * 0.12, -R * 0.55, R * 0.17, -R * 0.98);
      ctx.lineWidth = Math.max(3, R * 0.085);
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#6f5a36';
      ctx.stroke();
      ctx.restore();
    }

    function tick(now) {
      var dt = lastT ? Math.min((now - lastT) / 1000, 1 / 30) : 1 / 60;
      lastT = now;
      step(dt);
      render();
      var atRest = landed &&
        Math.abs(squash) < 0.004 && Math.abs(squashVel) < 0.05 &&
        Math.abs(stemA - ST_REST) < 0.004 && Math.abs(stemVel) < 0.05 &&
        !ringActive;
      if (atRest) { raf = 0; done = true; return; } // freeze on the last frame
      raf = requestAnimationFrame(tick);
    }

    function start() { lastT = 0; if (!raf) raf = requestAnimationFrame(tick); }

    function begin() {
      reset();
      render();                         // paint frame 0 (cherry still above)
      stage.classList.add('is-live');   // fade canvas in / SVG out
      setTimeout(start, 450);           // a beat, then the drop
    }

    if (!size()) {
      requestAnimationFrame(function () { if (size()) begin(); });
    } else {
      begin();
    }

    // pause on hidden tab (it self-terminates anyway)
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { if (raf) { cancelAnimationFrame(raf); raf = 0; paused = true; } }
      else if (paused && !done) { paused = false; start(); }
    });

    // keep crisp on resize; if settled, just redraw the static frame
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { if (size()) { if (done) { y = plateY; render(); } } }, 150);
    }, { passive: true });

    // delight: click to replay (user-initiated -> no motion-policy concern)
    canvas.addEventListener('click', function () {
      if (raf) return;
      reset(); render(); start();
    });
  }
})();
