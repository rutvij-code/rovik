/* =========================================================
   ZACH LIFESTYLE — Studio renderer
   Procedural SVG "product photography" for every piece, so the
   storefront works with zero image assets. To use real photos,
   set `img` (and optionally `imgs` for the gallery) on a product in
   data.js — every card/gallery will prefer the photo automatically.
   ========================================================= */
const Jewel = (() => {
  let uid = 0;
  const METAL = {
    silver: ['#ffffff', '#c7ccd7', '#767d90', '#eef1f6', '#a2a9b8'],
    gold:   ['#fff3cf', '#e5b862', '#8f651f', '#f8dfa0', '#c39339'],
    black:  ['#959cad', '#3e434f', '#111318', '#666d7d', '#272a33'],
  };
  const f = n => n.toFixed(1);

  function metalGrad(id, m) {
    const c = METAL[m] || METAL.silver;
    return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c[0]}"/><stop offset=".28" stop-color="${c[1]}"/>
      <stop offset=".55" stop-color="${c[2]}"/><stop offset=".78" stop-color="${c[3]}"/>
      <stop offset="1" stop-color="${c[4]}"/></linearGradient>`;
  }

  // Sample a parametric curve at equal arc-length steps
  function along(fn, step, t0 = 0, t1 = 1) {
    const N = 900, out = [];
    let prev = fn(t0), acc = 0, next = 0;
    for (let i = 0; i <= N; i++) {
      const t = t0 + (t1 - t0) * i / N;
      const p = fn(t);
      acc += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
      if (acc >= next) {
        const a = fn(Math.max(t0, t - .002)), b = fn(Math.min(t1, t + .002));
        out.push({ x: p[0], y: p[1], a: Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI, t });
        next += step;
      }
      prev = p;
    }
    return out;
  }

  function link(p, i, g, style, s, extra = '') {
    const tr = `transform="translate(${f(p.x)} ${f(p.y)}) rotate(${f(p.a)})${extra}"`;
    if (style === 'box') {
      return `<rect ${tr} x="${-s * .55}" y="${-s * .55}" width="${s * 1.1}" height="${s * 1.1}" rx="${s * .2}" fill="none" stroke="#0b0c10" stroke-opacity=".35" stroke-width="${s * .42}"/>
              <rect ${tr} x="${-s * .55}" y="${-s * .55}" width="${s * 1.1}" height="${s * 1.1}" rx="${s * .2}" fill="none" stroke="url(#${g})" stroke-width="${s * .3}"/>`;
    }
    if (style === 'rope') {
      const t2 = `transform="translate(${f(p.x)} ${f(p.y)}) rotate(${f(p.a + 42)})${extra}"`;
      return `<ellipse ${t2} rx="${s * .95}" ry="${s * .42}" fill="url(#${g})" stroke="#0b0c10" stroke-opacity=".35" stroke-width=".7"/>`;
    }
    const flat = i % 2 === 0;
    const ry = flat ? s * .58 : s * .22;
    const w = style === 'cuban' ? s * .46 : s * .28;
    return `<ellipse ${tr} rx="${s * .98}" ry="${ry}" fill="none" stroke="#0b0c10" stroke-opacity=".4" stroke-width="${w + 1.6}"/>
            <ellipse ${tr} rx="${s * .98}" ry="${ry}" fill="none" stroke="url(#${g})" stroke-width="${w}"/>`;
  }

  // ---------- Shapes (drawn in a 400×320 design space) ----------
  const S = {};

  S.chain = (id, v = 'cuban', o = {}) => {
    const size = { cuban: 15, curb: 10, box: 9, rope: 9 }[v] || 12;
    const step = { cuban: size * 1.02, curb: size * 1.12, box: size * 1.15, rope: size * .62 }[v];
    const bottom = o.bottom || 290;
    const fn = t => [40 + 320 * t, -120 + (bottom + 120) * (1 - Math.pow(2 * t - 1, 2))];
    const pts = along(fn, step);
    let s = pts.map((p, i) => link(p, i, id + 'm', v, size)).join('');
    // clasp detail
    const c = fn(.62);
    s += `<rect x="${f(c[0] - 13)}" y="${f(c[1] - 9)}" width="26" height="18" rx="5" transform="rotate(-24 ${f(c[0])} ${f(c[1])})" fill="url(#${id}m)" stroke="#0b0c10" stroke-opacity=".35"/>`;
    return s;
  };

  function ringPath(cx, cy, rx, ry) { return t => [cx + rx * Math.cos(t * Math.PI * 2), cy + ry * Math.sin(t * Math.PI * 2)]; }

  S.bracelet = (id, v = 'cuban') => {
    const cx = 200, cy = 175, rx = 135, ry = 66;
    if (v === 'beads') {
      const pts = along(ringPath(cx, cy, rx, ry), 27);
      const order = pts.map((p, i) => ({ ...p, i, back: Math.sin(p.t * Math.PI * 2) < 0 })).sort((a, b) => a.y - b.y);
      return order.map(p => {
        const metal = p.i % 7 === 0;
        const r = metal ? 9 : 13.5;
        return `<circle cx="${f(p.x)}" cy="${f(p.y)}" r="${r}" fill="url(#${id}${metal ? 'm' : 'o'})" opacity="${p.back ? .78 : 1}"/>
                <ellipse cx="${f(p.x - r * .35)}" cy="${f(p.y - r * .4)}" rx="${r * .3}" ry="${r * .18}" fill="#fff" opacity="${metal ? .55 : .28}"/>`;
      }).join('') + `<path d="M${cx - 18} ${cy + ry + 2} q18 26 36 0" fill="none" stroke="url(#${id}m)" stroke-width="3"/>`;
    }
    if (v === 'cuff') {
      return `<path d="M${cx - rx} ${cy} A${rx} ${ry} 0 0 1 ${cx + rx - 26} ${cy - ry * .82}" fill="none" stroke="url(#${id}k)" stroke-width="30" stroke-linecap="round" opacity=".7"/>
        <path d="M${cx - rx} ${cy} A${rx} ${ry} 0 0 1 ${cx + rx - 26} ${cy - ry * .82}" fill="none" stroke="url(#${id}m)" stroke-width="26" stroke-linecap="round" opacity=".75"/>
        <path d="M${cx - rx} ${cy + 4} A${rx} ${ry} 0 0 0 ${cx + rx} ${cy + 4}" fill="none" stroke="#0b0c10" stroke-opacity=".45" stroke-width="40"/>
        <path d="M${cx - rx} ${cy} A${rx} ${ry} 0 0 0 ${cx + rx} ${cy}" fill="none" stroke="url(#${id}m)" stroke-width="36"/>
        <path d="M${cx - rx + 8} ${cy + 3} A${rx - 8} ${ry - 6} 0 0 0 ${cx + rx - 8} ${cy + 3}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
        <path d="M${cx - rx + 4} ${cy + 14} A${rx - 4} ${ry - 2} 0 0 0 ${cx + rx - 4} ${cy + 14}" fill="none" stroke="#8AD9F5" stroke-opacity=".9" stroke-width="1.6"/>`;
    }
    const size = v === 'curb' ? 11 : 14;
    const pts = along(ringPath(cx, cy, rx, ry), size * (v === 'curb' ? 1.12 : 1.02));
    const back = pts.map((p, i) => ({ p, i })).filter(o => Math.sin(o.p.t * Math.PI * 2) < 0);
    const front = pts.map((p, i) => ({ p, i })).filter(o => Math.sin(o.p.t * Math.PI * 2) >= 0);
    return `<g opacity=".72">${back.map(o => link(o.p, o.i, id + 'm', v, size)).join('')}</g>` +
      front.map(o => link(o.p, o.i, id + 'm', v, size)).join('') +
      `<rect x="${cx - 22}" y="${cy + ry - 11}" width="44" height="22" rx="6" fill="url(#${id}m)" stroke="#0b0c10" stroke-opacity=".4"/>
       <rect x="${cx - 14}" y="${cy + ry - 4}" width="28" height="8" rx="2" fill="#0b0c10" opacity=".22"/>`;
  };

  S.ring = (id, v = 'band') => {
    const cx = 200, cy = 180;
    let s = `<ellipse cx="${cx + 12}" cy="${cy + 6}" rx="96" ry="104" fill="none" stroke="#0b0c10" stroke-opacity=".55" stroke-width="28"/>
      <ellipse cx="${cx + 7}" cy="${cy + 3}" rx="95" ry="103" fill="none" stroke="url(#${id}k)" stroke-width="26"/>
      <ellipse cx="${cx}" cy="${cy}" rx="94" ry="102" fill="none" stroke="url(#${id}m)" stroke-width="26"/>
      <ellipse cx="${cx}" cy="${cy}" rx="81" ry="89" fill="none" stroke="#0b0c10" stroke-opacity=".35" stroke-width="1.5"/>
      <path d="M${cx - 88} ${cy - 30} A94 102 0 0 1 ${cx - 10} ${cy - 101}" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="3" stroke-linecap="round"/>`;
    if (v === 'inlay') s += `<ellipse cx="${cx}" cy="${cy}" rx="94" ry="102" fill="none" stroke="#8AD9F5" stroke-width="3.2"/><ellipse cx="${cx}" cy="${cy}" rx="94" ry="102" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>`;
    if (v === 'band') s += `<ellipse cx="${cx}" cy="${cy}" rx="94" ry="102" fill="none" stroke="#0b0c10" stroke-opacity=".35" stroke-width="1.2" stroke-dasharray="2 5"/>`;
    if (v === 'signet') {
      s += `<path d="M${cx - 64} 78 L${cx - 64} 96 A64 30 0 0 0 ${cx + 64} 96 L${cx + 64} 78 Z" fill="url(#${id}k)"/>
        <ellipse cx="${cx}" cy="78" rx="64" ry="30" fill="url(#${id}m)" stroke="#0b0c10" stroke-opacity=".35"/>
        <ellipse cx="${cx}" cy="78" rx="52" ry="23" fill="none" stroke="#0b0c10" stroke-opacity=".28" stroke-width="1.5"/>
        <text x="${cx}" y="78" text-anchor="middle" dominant-baseline="central" font-family="Archivo, Arial Black, sans-serif" font-weight="900" font-size="36" fill="#0b0c10" fill-opacity=".38" transform="translate(${cx} 78) scale(1.25 .6) translate(${-cx} -78)">Z</text>`;
    }
    return s;
  };

  function gem(id, cx, cy, r, kind) {
    const pts = [...Array(8)].map((_, i) => [cx + r * Math.cos(i * Math.PI / 4 + Math.PI / 8), cy + r * Math.sin(i * Math.PI / 4 + Math.PI / 8)]);
    const poly = pts.map(p => p.map(f).join(',')).join(' ');
    const inner = pts.map(p => [cx + (p[0] - cx) * .48, cy + (p[1] - cy) * .48]);
    return `<polygon points="${poly}" fill="url(#${id}${kind === 'ice' ? 'g' : 'o'})"/>` +
      pts.map((p, i) => `<line x1="${f(p[0])}" y1="${f(p[1])}" x2="${f(inner[i][0])}" y2="${f(inner[i][1])}" stroke="#fff" stroke-opacity="${kind === 'ice' ? .6 : .18}" stroke-width=".8"/>`).join('') +
      `<polygon points="${inner.map(p => p.map(f).join(',')).join(' ')}" fill="#fff" fill-opacity="${kind === 'ice' ? .35 : .08}" stroke="#fff" stroke-opacity="${kind === 'ice' ? .7 : .2}" stroke-width=".8"/>`;
  }

  S.earring = (id, v = 'hoops') => {
    if (v === 'hoops') {
      return [135, 265].map((x, k) => `
        <circle cx="${x + 6}" cy="186" r="62" fill="none" stroke="#0b0c10" stroke-opacity=".5" stroke-width="13"/>
        <circle cx="${x}" cy="182" r="62" fill="none" stroke="url(#${id}m)" stroke-width="11"/>
        <path d="M${x - 50} ${150} A62 62 0 0 1 ${x - 4} 121" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="${x - 5}" y="114" width="10" height="16" rx="3" fill="url(#${id}m)" stroke="#0b0c10" stroke-opacity=".35"/>`).join('');
    }
    const kind = v === 'ice' ? 'ice' : 'onyx';
    return [145, 255].map(x => `
      <circle cx="${x + 4}" cy="184" r="44" fill="#0b0c10" opacity=".35"/>
      <circle cx="${x}" cy="180" r="44" fill="url(#${id}m)"/>
      <circle cx="${x}" cy="180" r="36" fill="#0b0c10" opacity=".35"/>
      ${gem(id, x, 180, 34, kind)}`).join('');
  };

  S.pendant = (id, v = 'tag') => {
    const fn = t => { const u = 1 - t; return [u * u * 60 + 2 * u * t * 200 + t * t * 340, u * u * -130 + 2 * u * t * 400 + t * t * -130]; };
    const pts = along(fn, 6.4);
    let s = pts.map((p, i) => link(p, i, id + 'm', 'curb', 5.6)).join('');
    const top = 140;
    s += `<ellipse cx="200" cy="${top + 8}" rx="7" ry="11" fill="none" stroke="url(#${id}m)" stroke-width="4"/>`;
    const y = top + 18;
    if (v === 'tag') {
      s += `<rect x="158" y="${y + 4}" width="88" height="128" rx="18" fill="#0b0c10" opacity=".4"/>
        <rect x="154" y="${y}" width="88" height="128" rx="18" fill="url(#${id}m)"/>
        <rect x="163" y="${y + 9}" width="70" height="110" rx="12" fill="none" stroke="#0b0c10" stroke-opacity=".25"/>
        <circle cx="198" cy="${y + 14}" r="4" fill="#0b0c10" opacity=".45"/>
        <text x="198" y="${y + 74}" text-anchor="middle" font-family="Archivo, Arial Black, sans-serif" font-weight="900" font-size="20" letter-spacing="3" fill="#0b0c10" fill-opacity=".42">ZACH</text>
        <line x1="178" y1="${y + 86}" x2="218" y2="${y + 86}" stroke="#8AD9F5" stroke-width="2"/>`;
    } else if (v === 'bar') {
      s += `<rect x="190" y="${y + 3}" width="28" height="150" rx="4" fill="#0b0c10" opacity=".4"/>
        <rect x="186" y="${y}" width="28" height="150" rx="4" fill="url(#${id}m)"/>
        <rect x="193" y="${y + 8}" width="2" height="134" fill="#fff" opacity=".45"/>
        <rect x="199" y="${y + 40}" width="2" height="70" fill="#8AD9F5"/>`;
    } else if (v === 'cross') {
      const d = `M190 ${y} h20 v38 h32 v20 h-32 v78 h-20 v-78 h-32 v-20 h32 z`;
      s += `<path d="${d}" transform="translate(4 3)" fill="#0b0c10" opacity=".4"/><path d="${d}" fill="url(#${id}m)"/>
        <path d="M196 ${y + 6} v122" stroke="#fff" stroke-opacity=".45" stroke-width="2"/>`;
    } else {
      s += `<circle cx="204" cy="${y + 58}" r="58" fill="#0b0c10" opacity=".4"/>
        <circle cx="200" cy="${y + 55}" r="58" fill="url(#${id}m)"/>
        <circle cx="200" cy="${y + 55}" r="47" fill="none" stroke="#0b0c10" stroke-opacity=".3" stroke-width="1.5"/>
        <circle cx="200" cy="${y + 55}" r="52" fill="none" stroke="#fff" stroke-opacity=".35" stroke-dasharray="1.5 4"/>
        <path d="M180 ${y + 38} h40 l-40 34 h40" fill="none" stroke="#0b0c10" stroke-opacity=".45" stroke-width="7" stroke-linejoin="miter"/>`;
    }
    return s;
  };

  S.necklace = (id, v = 'beads') => {
    if (v === 'layered') {
      return S.chain(id, 'rope', { bottom: 300 }) + `<g opacity=".95">${S.chain(id, 'curb', { bottom: 215 })}</g>`;
    }
    const fn = t => [40 + 320 * t, -130 + 410 * (1 - Math.pow(2 * t - 1, 2))];
    const pts = along(fn, 22);
    return pts.map((p, i) => {
      const metal = i % 5 === 0; const r = metal ? 7 : 10.5;
      return `<circle cx="${f(p.x)}" cy="${f(p.y)}" r="${r}" fill="url(#${id}${metal ? 'm' : 'o'})"/>
        <ellipse cx="${f(p.x - r * .35)}" cy="${f(p.y - r * .4)}" rx="${r * .3}" ry="${r * .18}" fill="#fff" opacity=".35"/>`;
    }).join('') + `<circle cx="200" cy="290" r="15" fill="url(#${id}m)"/><text x="200" y="296" text-anchor="middle" font-family="Archivo, Arial Black" font-weight="900" font-size="15" fill="#0b0c10" fill-opacity=".45">Z</text>`;
  };

  S.set = (id, v = 'classic') =>
    `<g transform="translate(40 -10) scale(.8)">${S.chain(id, v === 'noir' ? 'cuban' : 'curb')}</g>
     <g transform="translate(150 175) scale(.55)">${S.bracelet(id, v === 'noir' ? 'beads' : 'cuban')}</g>
     <g transform="translate(-10 170) scale(.42)">${S.ring(id, v === 'noir' ? 'inlay' : 'signet')}</g>`;

  // ---------- Views (for galleries) ----------
  const VIEWS = [
    { t: '' },
    { t: 'translate(200 250) scale(1.75) translate(-200 -240)' },
    { t: 'rotate(-16 200 250) translate(0 6)' },
    { t: 'translate(200 250) scale(.88) translate(-200 -250)', dark: true },
  ];

  /**
   * render(spec, opts)
   * spec: { shape, variant, metal }
   * opts: { bg: 'light'|'dark'|'none', view: 0-3, metal, glow }
   */
  function render(spec, opts = {}) {
    const id = 'j' + (++uid);
    const m = opts.metal || spec.metal || 'silver';
    const view = VIEWS[opts.view || 0];
    const bg = view.dark ? 'dark' : (opts.bg || 'light');
    const shape = (S[spec.shape] || S.chain)(id, spec.variant);
    let back = '';
    if (bg === 'light') {
      back = `<rect width="400" height="500" fill="url(#${id}bg)"/><ellipse cx="200" cy="470" rx="320" ry="90" fill="#c4c9d5" opacity=".35"/>`;
    } else if (bg === 'dark') {
      back = `<rect width="400" height="500" fill="url(#${id}bd)"/><circle cx="${opts.glowX || 300}" cy="${opts.glowY || 110}" r="220" fill="url(#${id}gl)"/>
              <path d="M0 500 L400 360 L400 500 Z" fill="#fff" opacity=".02"/>`;
    }
    return `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${opts.label || ''}">
      <defs>
        ${metalGrad(id + 'm', m)}${metalGrad(id + 'k', 'black')}
        <radialGradient id="${id}bg" cx=".5" cy=".42" r=".75"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#eceef4"/><stop offset="1" stop-color="#d3d7e1"/></radialGradient>
        <radialGradient id="${id}bd" cx=".55" cy=".35" r=".85"><stop offset="0" stop-color="#2a303d"/><stop offset=".6" stop-color="#12151c"/><stop offset="1" stop-color="#07080b"/></radialGradient>
        <radialGradient id="${id}gl"><stop offset="0" stop-color="#8AD9F5" stop-opacity=".28"/><stop offset="1" stop-color="#8AD9F5" stop-opacity="0"/></radialGradient>
        <radialGradient id="${id}o" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#5b6070"/><stop offset=".45" stop-color="#1c1f27"/><stop offset="1" stop-color="#050608"/></radialGradient>
        <radialGradient id="${id}g" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#c9f0fd"/><stop offset=".75" stop-color="#7fcbe8"/><stop offset="1" stop-color="#3f8fb3"/></radialGradient>
        <filter id="${id}sh" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
      </defs>
      ${back}
      <g transform="${opts.transform || view.t}">
        ${bg !== 'none' ? `<ellipse cx="200" cy="420" rx="150" ry="18" fill="#0b0c10" opacity="${bg === 'dark' ? .5 : .16}" filter="url(#${id}sh)"/>` : ''}
        <g transform="translate(0 90)">${shape}</g>
      </g>
    </svg>`;
  }

  // Product media: prefers a real photo if provided
  function media(p, opts = {}) {
    const photo = opts.view ? (p.imgs && p.imgs[opts.view]) : p.img;
    if (photo) return `<img src="${photo}" alt="${p.name}" loading="lazy">`;
    return render(p, { label: p.name, ...opts });
  }

  return { render, media };
})();
