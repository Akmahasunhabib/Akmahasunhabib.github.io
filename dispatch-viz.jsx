// Illustrative canvas animations for Research cards when no real figure/video is set.
// Usage: <DispatchViz kind="lattice|foodprint|hetero|scaffold|beam|blade" accent="#c2542f" ink="#2c1d16" bg="#fbf0e8" />
function DispatchViz({ kind, accent, ink, bg }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf, t0 = performance.now(), W, H, dpr;
    const size = () => { dpr = Math.min(window.devicePixelRatio || 1, 2); const r = cv.getBoundingClientRect(); W = Math.max(1, r.width); H = Math.max(1, r.height); cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const paint = (now) => {
      const t = reduce ? 0.35 : (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H); ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      if (W > 40 && H > 40 && VIZ[kind]) { try { VIZ[kind](ctx, W, H, t, accent, ink); } catch (e) { /* skip bad frame */ } }
    };
    const loop = (now) => { paint(now); raf = requestAnimationFrame(loop); };
    // Resizing the buffer wipes the canvas, so always repaint synchronously after it.
    const resize = () => { size(); paint(performance.now()); };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(cv);
    if (!reduce) raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [kind, accent, ink, bg]);
  return <canvas ref={ref} aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%' }}></canvas>;
}

const VIZ = {
  // Mixed unit-cell lattice under cyclic compression
  lattice(ctx, W, H, t, accent, ink) {
    const n = 5, m = 4, pad = 26, cw = (W - pad * 2) / n, ch = (H - pad * 2) / m;
    const s = 1 - 0.06 * (0.5 + 0.5 * Math.sin(t * 1.4));
    const P = (i, j) => { const x = pad + i * cw, y = pad + j * ch; const cy = H / 2; const dy = (y - cy) * s + cy; const bulge = 1 + (1 - s) * 1.6 * Math.sin(Math.PI * (y - pad) / (H - pad * 2)); return [W / 2 + (x - W / 2) * bulge, dy]; };
    ctx.lineWidth = 1.6;
    for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) {
      const a = P(i, j), b = P(i + 1, j), c = P(i + 1, j + 1), d = P(i, j + 1);
      const mixed = (i + j) % 2 === 0;
      ctx.strokeStyle = mixed ? accent : ink; ctx.globalAlpha = mixed ? 0.95 : 0.55;
      ctx.beginPath(); ctx.moveTo(...a); ctx.lineTo(...b); ctx.lineTo(...c); ctx.lineTo(...d); ctx.closePath(); ctx.stroke();
      ctx.beginPath();
      if (mixed) { ctx.moveTo(...a); ctx.lineTo(...c); ctx.moveTo(...b); ctx.lineTo(...d); }
      else { const cx = (a[0] + c[0]) / 2, cy = (a[1] + c[1]) / 2; [a, b, c, d].forEach(p => { ctx.moveTo(cx, cy); ctx.lineTo(...p); }); }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    // platens
    ctx.fillStyle = ink; const top = P(0, 0)[1] - 8, bot = P(0, m)[1] + 2;
    ctx.fillRect(pad - 6, top, W - pad * 2 + 12, 5); ctx.fillRect(pad - 6, bot, W - pad * 2 + 12, 5);
  },
  // Extrusion nozzle tracing layers with an overhang
  foodprint(ctx, W, H, t, accent, ink) {
    const layers = 7, lh = Math.min(16, (H - 70) / layers), baseY = H - 34, x0 = W * 0.22, x1 = W * 0.78;
    const cycle = 9, tt = (t % cycle) / cycle, prog = tt * layers;
    ctx.lineWidth = lh * 0.78;
    for (let L = 0; L < layers; L++) {
      const done = Math.min(1, Math.max(0, prog - L));
      if (done <= 0) break;
      const off = L * 6 * (L > 3 ? 1 : 0.2); // overhang grows in upper layers
      const y = baseY - L * lh, xa = x0 - off, xb = x1 + off * 0.4;
      const xe = xa + (xb - xa) * done;
      ctx.strokeStyle = L > 3 ? accent : ink; ctx.globalAlpha = 0.85;
      ctx.beginPath(); ctx.moveTo(xa, y); ctx.lineTo(xe, y); ctx.stroke();
      if (done < 1) { // nozzle
        ctx.globalAlpha = 1; ctx.fillStyle = ink;
        ctx.beginPath(); ctx.moveTo(xe - 9, y - lh * 0.6 - 26); ctx.lineTo(xe + 9, y - lh * 0.6 - 26); ctx.lineTo(xe + 3, y - lh * 0.6 - 4); ctx.lineTo(xe - 3, y - lh * 0.6 - 4); ctx.closePath(); ctx.fill();
        ctx.fillRect(xe - 6, y - lh * 0.6 - 46, 12, 20);
      }
    }
    ctx.globalAlpha = 1; ctx.fillStyle = ink; ctx.fillRect(x0 - 40, baseY + lh * 0.45, x1 - x0 + 80, 3);
  },
  // Graded lattice + Pareto front filling in
  hetero(ctx, W, H, t, accent, ink) {
    const gx = 22, gy = 26, gw = W * 0.5, gh = H - 52, cols = 6, rows = 6;
    ctx.lineWidth = 1.2;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const x = gx + i * gw / cols, y = gy + j * gh / rows, w = gw / cols, h = gh / rows;
      const dens = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * 0.8 + i * 0.6 + j * 0.3));
      ctx.strokeStyle = ink; ctx.globalAlpha = 0.25 + dens * 0.7; ctx.strokeRect(x, y, w, h);
      if (dens > 0.55) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + w, y + h); ctx.moveTo(x + w, y); ctx.lineTo(x, y + h); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    const px = W * 0.6, py = gy, pw = W - px - 22, ph = gh;
    ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py + ph); ctx.lineTo(px + pw, py + ph); ctx.stroke();
    const N = 26, shown = Math.floor(((t * 0.35) % 1) * (N + 6));
    for (let k = 0; k < N; k++) {
      const u = k / (N - 1), r = ((k * 7919) % 97) / 97;
      const onFront = r < 0.42;
      const fx = px + 8 + u * (pw - 16), fy = py + 10 + (onFront ? Math.pow(1 - u, 1.6) * (ph - 26) : Math.pow(1 - u, 1.6) * (ph - 26) - r * ph * 0.45);
      if (fy < py) continue;
      ctx.fillStyle = onFront ? accent : ink; ctx.globalAlpha = k < shown ? (onFront ? 1 : 0.35) : 0.08;
      ctx.beginPath(); ctx.arc(fx, fy, onFront ? 3.4 : 2.4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  },
  // Porous scaffold with anisotropic pores; anisotropy sweeps
  scaffold(ctx, W, H, t, accent, ink) {
    const pad = 24, cols = 7, rows = 5, cw = Math.max(1, (W - pad * 2) / cols), ch = Math.max(1, (H - pad * 2) / rows);
    const a = 0.5 + 0.5 * Math.sin(t * 0.9), rx = Math.max(0.5, cw * (0.22 + 0.2 * a)), ry = Math.max(0.5, ch * (0.42 - 0.2 * a));
    ctx.fillStyle = ink; ctx.globalAlpha = 0.9; ctx.fillRect(pad, pad, W - pad * 2, H - pad * 2);
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { ctx.beginPath(); ctx.ellipse(pad + (i + 0.5) * cw, pad + (j + 0.5) * ch, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.setLineDash([6, 6]);
    ctx.beginPath(); ctx.moveTo(W / 2 - 60 - 40 * a, H - 10); ctx.lineTo(W / 2 + 60 + 40 * a, H - 10); ctx.stroke();
    ctx.setLineDash([]);
  },
  // Cantilever beam: first two mode shapes oscillating
  beam(ctx, W, H, t, accent, ink) {
    const x0 = 36, x1 = W - 26, y = H / 2, L = x1 - x0;
    ctx.fillStyle = ink; ctx.fillRect(x0 - 14, y - 46, 12, 92);
    for (let k = -5; k < 5; k++) { ctx.beginPath(); ctx.moveTo(x0 - 14, y - 46 + k * 18 + 18); ctx.lineTo(x0 - 26, y - 46 + k * 18 + 30); ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.stroke(); }
    const mode = (b) => (x) => { const bx = b * x / L; return Math.cosh(bx) - Math.cos(bx) - ((Math.cosh(b) + Math.cos(b)) / (Math.sinh(b) + Math.sin(b))) * (Math.sinh(bx) - Math.sin(bx)); };
    const m1 = mode(1.8751), m2 = mode(4.6941), n1 = m1(L), n2 = m2(L);
    const A1 = 22 * Math.sin(t * 2.2), A2 = 9 * Math.sin(t * 6.9);
    ctx.strokeStyle = ink; ctx.globalAlpha = 0.25; ctx.lineWidth = 1; ctx.setLineDash([4, 6]); ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke(); ctx.setLineDash([]);
    ctx.globalAlpha = 1; ctx.strokeStyle = accent; ctx.lineWidth = 5; ctx.beginPath();
    for (let i = 0; i <= 60; i++) { const x = i / 60 * L; const yy = y - A1 * m1(x) / n1 - A2 * m2(x) / n2; i ? ctx.lineTo(x0 + x, yy) : ctx.moveTo(x0 + x, yy); }
    ctx.stroke();
    const tipY = y - A1 - A2; ctx.fillStyle = ink; ctx.fillRect(x1 - 10, tipY - 10, 14, 20);
  },
  // Rotating weeder blade with wear front
  blade(ctx, W, H, t, accent, ink) {
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.36, ang = t * 1.1;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang);
    for (let k = 0; k < 3; k++) {
      ctx.rotate(Math.PI * 2 / 3);
      ctx.fillStyle = ink; ctx.globalAlpha = 0.9;
      ctx.beginPath(); ctx.moveTo(0, -8); ctx.quadraticCurveTo(R * 0.55, -R * 0.35, R, -R * 0.12); ctx.lineTo(R * 0.96, R * 0.04); ctx.quadraticCurveTo(R * 0.5, -R * 0.05, 0, 8); ctx.closePath(); ctx.fill();
      const wear = 0.5 + 0.5 * Math.sin(t * 0.6 + k);
      ctx.strokeStyle = accent; ctx.globalAlpha = 0.95; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(R * (0.55 + 0.25 * wear), -R * (0.30 - 0.14 * wear)); ctx.lineTo(R, -R * 0.12); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(0, 0, 11, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = ink; ctx.globalAlpha = 0.2; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, R + 8, 0, Math.PI * 2); ctx.stroke(); ctx.globalAlpha = 1;
  },
};

Object.assign(window, { DispatchViz });
