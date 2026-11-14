/* =========================================================
   ZACH LIFESTYLE — Shared UI (header, mega menu, cart, wishlist,
   search, product cards) + per-page initialisers.
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const I = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.6 4-5.3 7.5-5.3s6.3 1.7 7.5 5.3"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 12h11M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15m-5-5 5 5-5 5"/></svg>',
  left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 12H5m5-5-5 5 5 5"/></svg>',
  caret: '<svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m1 1 4 4 4-4"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="14"><path d="M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 16.9 6.4 20l1.3-6.2L3 9.5l6.3-.7L12 3Z"/></svg>',
  zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2M11 8v6M8 11h6"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3 5 6v5.5c0 4.3 3 7.8 7 9.5 4-1.7 7-5.2 7-9.5V6l-7-3Z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><circle cx="12" cy="15.5" r="1.3"/></svg>',
  gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 4h11L21 9l-9 11L3 9l3.5-5Z"/><path d="M3 9h18M9 4l3 16 3-16"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.7 5.6L4 15.5M4 20v-4.5h4.5"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3.5s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="9" width="16" height="11" rx="1"/><path d="M3 9h18M12 9v11M12 9c-1.5-3.5-5.5-4-5.5-1.5S10 9 12 9Zm0 0c1.5-3.5 5.5-4 5.5-1.5S14 9 12 9Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/></svg>',
  insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r=".8" fill="currentColor"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="m10.5 9.5 4 2.5-4 2.5z" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m5 5 14 14M19 5 5 19"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a.5.5 0 0 1 .5-.5Z"/></svg>',
};
const LOGO = `<svg class="logo-mark" viewBox="0 0 32 32" fill="none"><rect x="1" y="1" width="30" height="30" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M9 10h14L9 22h14" stroke="currentColor" stroke-width="2.4" stroke-linejoin="miter"/><circle cx="25.5" cy="6.5" r="1.6" fill="#2B9BC8"/></svg>`;

const stars = r => `<span class="stars" aria-label="${r} out of 5">${[1, 2, 3, 4, 5].map(i => `<span class="${r >= i - .25 ? '' : 'half'}">${I.star}</span>`).join('')}</span>`;

/* ---------- Store (localStorage, fail-safe) ---------- */
const Store = {
  get(k, d) { try { const v = localStorage.getItem('zach:' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('zach:' + k, JSON.stringify(v)); } catch {} },
};
let cart = Store.get('cart', []);
let wish = new Set(Store.get('wish', []));
const FREE_SHIP = 1499;

function saveCart() { Store.set('cart', cart); renderCart(); bump('[data-cart-count]', cart.reduce((a, l) => a + l.qty, 0)); }
function saveWish() { Store.set('wish', [...wish]); bump('[data-wish-count]', wish.size); }
function bump(sel, n) { $$(sel).forEach(el => { el.textContent = n; el.dataset.n = n; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }); }

function defaultSize(p) { const s = SIZES[p.cat]; return s ? s.opts[s.def] : ''; }
function addToCart(id, { metal, size, qty = 1, open = true } = {}) {
  const p = byId(id); if (!p) return;
  metal = metal || p.metal; size = size || defaultSize(p);
  const key = `${id}|${metal}|${size}`;
  const line = cart.find(l => l.key === key);
  if (line) line.qty += qty; else cart.push({ key, id, metal, size, qty });
  saveCart();
  toast(`${p.name} added to bag`);
  if (open) openDrawer('cart');
}
function toggleWish(id) {
  const p = byId(id);
  if (wish.has(id)) { wish.delete(id); toast(`Removed from wishlist`); } else { wish.add(id); toast(`${p.name} saved to wishlist`); }
  saveWish();
  $$(`[data-wish="${id}"]`).forEach(b => { b.classList.toggle('on', wish.has(id)); b.setAttribute('aria-pressed', wish.has(id)); });
}

let toastT;
function toast(msg) {
  const t = $('#toast'); if (!t) return;
  t.innerHTML = I.check + `<span>${msg}</span>`; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------- Product card ---------- */
function productCard(p, { addBtn = false, newBadge = false } = {}) {
  const isNew = newBadge || p.tags.includes('new');
  const isBest = p.tags.includes('best');
  return `<article class="pcard"><div class="pcard-top">
    <a class="pcard-media" href="product.html?id=${p.id}" aria-label="${p.name}">
      <div class="badges">${isNew ? '<span class="badge new">New</span>' : isBest ? '<span class="badge hot">Bestseller</span>' : ''}<span class="badge off">-${off(p)}%</span></div>
      <div class="img main">${Jewel.media(p)}</div>
      <div class="img alt">${Jewel.media(p, { view: 1 })}</div>
    </a>
    <button class="wish ${wish.has(p.id) ? 'on' : ''}" data-wish="${p.id}" aria-pressed="${wish.has(p.id)}" aria-label="Add ${p.name} to wishlist">${I.heart}</button>
    ${addBtn ? '' : `<button class="quick-add" data-add="${p.id}">${I.plus}<span>Quick Add</span></button>`}
    </div><div class="pcard-body">
      <div class="rating">${stars(p.rating)}<span>${p.rating} (${p.reviews})</span></div>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <p class="meta">${METAL_NAMES[p.metal]}</p>
      <div class="price"><b>${fmt(p.price)}</b><s>${fmt(p.mrp)}</s><em>${off(p)}% OFF</em></div>
      <div class="swatches">${p.metals.map(m => `<i class="sw-${m}" title="${METAL_NAMES[m]}"></i>`).join('')}</div>
      ${addBtn ? `<div class="add-row"><button class="btn btn-outline btn-sm btn-block" data-add="${p.id}">${I.bag} Add to Cart</button></div>` : ''}
    </div>
  </article>`;
}

/* ---------- Header / Footer / Overlays ---------- */
const NAV = [
  { label: 'Jewellery', href: 'shop.html', mega: true },
  { label: 'Chains', href: 'shop.html?cat=chains' },
  { label: 'Bracelets', href: 'shop.html?cat=bracelets' },
  { label: 'Rings', href: 'shop.html?cat=rings' },
  { label: 'Earrings', href: 'shop.html?cat=earrings' },
  { label: 'Necklaces', href: 'shop.html?cat=necklaces' },
  { label: 'Collections', href: 'shop.html?tag=signature' },
  { label: 'New Arrivals', href: 'shop.html?tag=new', dot: true },
];

function headerHTML() {
  const q = new URLSearchParams(location.search);
  const here = location.pathname.split('/').pop() + location.search;
  return `
  <div class="announce" aria-label="Announcements"><div class="announce-track">${[0, 1].map(() =>
    ['Free express shipping above ₹1,499', 'Anti-tarnish · Waterproof · Skin-safe', '7-day easy exchange', 'Use code EDGE10 for 10% off your first order', 'Cash on delivery available'].map(t => `<span>${t}</span>`).join('')).join('')}</div></div>
  <header class="header" id="header">
    <div class="wrap header-inner">
      <button class="icon-btn burger" data-open="nav" aria-label="Open menu">${I.menu}</button>
      <a href="index.html" class="logo" aria-label="Zach Lifestyle home">${LOGO}<span class="logo-word">ZACH<small>LIFESTYLE</small></span></a>
      <nav class="nav" aria-label="Main">
        ${NAV.map(n => `<div class="nav-item ${n.mega ? 'has-mega' : ''}">
          <a class="nav-link ${here === n.href ? 'active' : ''}" href="${n.href}" ${n.mega ? 'aria-haspopup="true" aria-expanded="false"' : ''}>${n.label}${n.mega ? `<span class="caret">${I.caret}</span>` : ''}${n.dot ? '<span class="dot"></span>' : ''}</a>
          ${n.mega ? megaHTML() : ''}
        </div>`).join('')}
      </nav>
      <div class="header-actions">
        <button class="icon-btn" data-open="search" aria-label="Search">${I.search}</button>
        <button class="icon-btn hide-sm" data-open="account" aria-label="Account">${I.user}</button>
        <a class="icon-btn" href="shop.html?wishlist=1" aria-label="Wishlist">${I.heart}<span class="count" data-wish-count data-n="${wish.size}">${wish.size}</span></a>
        <button class="icon-btn" data-open="cart" aria-label="Cart">${I.bag}<span class="count" data-cart-count data-n="0">0</span></button>
      </div>
    </div>
  </header>`;
}

function megaHTML() {
  const feat = [byId('onyx-cuban-chain'), byId('zach-signet-ring')];
  return `<div class="mega" role="region" aria-label="Jewellery menu"><div class="mega-inner">
    <div><h4>Shop by Category</h4><ul>${CATEGORIES.map(c => `<li><a href="shop.html?cat=${c.slug}">${c.name}</a></li>`).join('')}<li><a href="shop.html"><b>View all jewellery →</b></a></li></ul></div>
    <div><h4>Shop by Finish</h4><ul>${Object.entries(METAL_NAMES).map(([k, v]) => `<li><a href="shop.html?metal=${k}"><i class="sw sw-${k}"></i>${v}</a></li>`).join('')}</ul>
      <h4 style="margin-top:28px">Shop by Price</h4><ul><li><a href="shop.html?max=1500">Under ₹1,500</a></li><li><a href="shop.html?max=2500">Under ₹2,500</a></li><li><a href="shop.html?min=2500">Premium ₹2,500+</a></li></ul></div>
    <div><h4>Shop by Style</h4><ul>${MOODS.map(m => `<li><a href="shop.html?mood=${m.slug}">${m.name}</a></li>`).join('')}</ul>
      <h4 style="margin-top:28px">Featured</h4><ul><li><a href="shop.html?tag=signature">The Zach Signature</a></li><li><a href="shop.html?tag=best">Bestsellers</a></li><li><a href="shop.html?cat=sets">Gift Sets</a></li></ul></div>
    <div class="mega-feature">${feat.map((p, i) => `<a class="mega-card" href="product.html?id=${p.id}">${Jewel.render(p, { bg: 'dark', glowX: i ? 100 : 300 })}<span><small>${i ? 'Most loved' : 'Signature'}</small>${p.name}</span></a>`).join('')}</div>
  </div></div>`;
}

function overlaysHTML() {
  return `
  <div class="drawer-backdrop" data-close></div>
  <aside class="drawer left" id="drawer-nav" aria-label="Menu">
    <div class="drawer-head"><a href="index.html" class="logo">${LOGO}<span class="logo-word">ZACH<small>LIFESTYLE</small></span></a><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <div class="drawer-body m-nav">
      <a href="shop.html?tag=new">New Arrivals ${I.arrow}</a>
      <a href="shop.html">All Jewellery ${I.arrow}</a>
      <div class="sub">${CATEGORIES.map(c => `<a href="shop.html?cat=${c.slug}">${c.name}</a>`).join('')}</div>
      <a href="shop.html?tag=signature">Collections ${I.arrow}</a>
      <a href="shop.html?tag=best">Bestsellers ${I.arrow}</a>
      <div class="sub">${MOODS.map(m => `<a href="shop.html?mood=${m.slug}">${m.name}</a>`).join('')}</div>
      <a href="#" data-open="account">Account ${I.arrow}</a>
      <a href="shop.html?wishlist=1">Wishlist ${I.arrow}</a>
    </div>
  </aside>
  <aside class="drawer right" id="drawer-cart" aria-label="Shopping bag">
    <div class="drawer-head"><h3>Your Bag <span data-cart-count-text></span></h3><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <div class="drawer-body" id="cart-body"></div>
    <div class="drawer-foot" id="cart-foot"></div>
  </aside>
  <div class="search-overlay" id="search" role="dialog" aria-label="Search">
    <div class="wrap">
      <div class="search-top">${I.search}<input id="search-input" type="search" placeholder="Search chains, rings, bracelets…" autocomplete="off"><button class="icon-btn" data-close aria-label="Close search">${I.close}</button></div>
      <div class="search-tags">${['Cuban', 'Signet', 'Gold', 'Black', 'Pendant', 'Studs', 'Bead', 'Set'].map(t => `<button class="chip" data-q="${t}">${t}</button>`).join('')}</div>
      <div id="search-results" class="search-results"></div>
    </div>
  </div>
  <div class="modal" id="account" role="dialog" aria-label="Account"><div class="modal-card">
    <h3>Sign in <button class="icon-btn" data-close aria-label="Close">${I.close}</button></h3>
    <p style="color:var(--gray-4);margin:6px 0 20px;font-size:14px">Track orders, save your wishlist and check out faster.</p>
    <form onsubmit="event.preventDefault();toast('Account system not connected yet — frontend demo');" style="display:grid;gap:10px">
      <input class="field" type="tel" placeholder="Mobile number" aria-label="Mobile number" style="flex:none">
      <button class="btn btn-block">Continue with OTP</button>
      <p style="font-size:12px;color:var(--gray-4);margin:4px 0 0;text-align:center">By continuing you agree to our Terms & Privacy Policy.</p>
    </form>
  </div></div>
  <div class="modal" id="sizeguide" role="dialog" aria-label="Size guide"><div class="modal-card" id="sizeguide-body"></div></div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
}

function footerHTML() {
  return `<footer class="footer"><div class="wrap">
    <div class="footer-grid">
      <div><a href="index.html" class="logo" style="color:var(--ghost)">${LOGO}<span class="logo-word">ZACH<small>LIFESTYLE</small></span></a>
        <p style="margin-top:20px">Premium men's jewellery engineered for the modern man. Designed in India, built to last.</p>
        <div class="socials"><a href="#" aria-label="Instagram">${I.insta}</a><a href="#" aria-label="YouTube">${I.yt}</a><a href="#" aria-label="X">${I.x}</a><a href="#" aria-label="Facebook">${I.fb}</a></div></div>
      <div><h5>Shop</h5><ul>${CATEGORIES.slice(0, 6).map(c => `<li><a href="shop.html?cat=${c.slug}">${c.name}</a></li>`).join('')}</ul></div>
      <div><h5>Collections</h5><ul><li><a href="shop.html?tag=signature">The Zach Signature</a></li><li><a href="shop.html?tag=new">New Arrivals</a></li><li><a href="shop.html?tag=best">Bestsellers</a></li>${MOODS.slice(0, 3).map(m => `<li><a href="shop.html?mood=${m.slug}">${m.name}</a></li>`).join('')}</ul></div>
      <div><h5>Help</h5><ul><li><a href="#">Track Order</a></li><li><a href="#">Shipping</a></li><li><a href="#">Returns & Exchange</a></li><li><a href="#">Size Guide</a></li><li><a href="#">Jewellery Care</a></li><li><a href="#">FAQs</a></li></ul></div>
      <div><h5>Company</h5><ul><li><a href="index.html#story">Our Story</a></li><li><a href="#">Stores</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms</a></li></ul></div>
    </div>
    <div class="footer-word" aria-hidden="true">ZACH LIFESTYLE</div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Zach Lifestyle. All rights reserved.</span><div class="pay"><span>UPI</span><span>VISA</span><span>MASTERCARD</span><span>RUPAY</span><span>NET BANKING</span><span>COD</span></div></div>
  </div></footer>`;
}

/* ---------- Drawers & overlays ---------- */
let openEl = null;
function openDrawer(name) {
  closeAll();
  const map = { nav: '#drawer-nav', cart: '#drawer-cart', search: '#search', account: '#account', sizeguide: '#sizeguide' };
  const el = $(map[name]); if (!el) return;
  el.classList.add('show'); openEl = el;
  if (name === 'nav' || name === 'cart') $('.drawer-backdrop').classList.add('show');
  document.body.classList.add('locked');
  if (name === 'search') setTimeout(() => $('#search-input').focus(), 50);
}
function closeAll() {
  $$('.drawer.show, .search-overlay.show, .modal.show, .drawer-backdrop.show').forEach(e => e.classList.remove('show'));
  document.body.classList.remove('locked'); openEl = null;
}

function renderCart() {
  const body = $('#cart-body'), foot = $('#cart-foot'); if (!body) return;
  const count = cart.reduce((a, l) => a + l.qty, 0);
  $$('[data-cart-count-text]').forEach(e => e.textContent = count ? `(${count})` : '');
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty">${I.bag}<p style="font-weight:600;color:var(--ink);margin:0 0 6px">Your bag is empty</p><p style="margin:0 0 22px;font-size:13px">Find a piece that defines your edge.</p><a class="btn" href="shop.html">Shop Jewellery</a></div>`;
    foot.innerHTML = ''; foot.style.display = 'none'; return;
  }
  foot.style.display = '';
  const sub = cart.reduce((a, l) => a + byId(l.id).price * l.qty, 0);
  const mrp = cart.reduce((a, l) => a + byId(l.id).mrp * l.qty, 0);
  const left = Math.max(0, FREE_SHIP - sub);
  body.innerHTML = `<div class="ship-meter">${left ? `You're <b>${fmt(left)}</b> away from free express shipping` : `${'<b style="color:var(--ice-deep)">✓</b>'} You've unlocked <b>free express shipping</b>`}<div class="bar"><i style="width:${Math.min(100, sub / FREE_SHIP * 100)}%"></i></div></div>` +
    cart.map((l, i) => { const p = byId(l.id); return `<div class="cart-line">
      <a class="thumb" href="product.html?id=${p.id}">${Jewel.render({ ...p, metal: l.metal })}</a>
      <div><h4>${p.name}</h4><div class="line-opt">${METAL_NAMES[l.metal]}${l.size && l.size !== 'One Size' ? ' · ' + l.size : ''}</div>
        <div class="qty"><button data-q="${i}" data-d="-1" aria-label="Decrease">${I.minus}</button><input value="${l.qty}" readonly aria-label="Quantity"><button data-q="${i}" data-d="1" aria-label="Increase">${I.plus.replace('stroke-width="1.8"', 'stroke-width="1.8" width="14"')}</button></div></div>
      <div style="text-align:right"><div class="price" style="justify-content:flex-end"><b style="font-size:14px">${fmt(p.price * l.qty)}</b></div><s style="font-size:12px;color:var(--gray-3)">${fmt(p.mrp * l.qty)}</s><br><button class="remove" data-rm="${i}">Remove</button></div>
    </div>`; }).join('');
  foot.innerHTML = `<div class="totals"><span>Subtotal</span><span>${fmt(sub)}</span></div>
    <p class="totals-note">You save <b style="color:var(--ice-deep)">${fmt(mrp - sub)}</b> · Taxes included · Shipping calculated at checkout</p>
    <button class="btn btn-block" onclick="toast('Checkout not connected yet — frontend demo')">${I.lock} Secure Checkout</button>`;
}

/* ---------- Search ---------- */
function runSearch(q) {
  const out = $('#search-results'); q = q.trim().toLowerCase();
  const list = q ? PRODUCTS.filter(p => [p.name, p.cat, p.variant, METAL_NAMES[p.metal], p.metal, catName(p.cat), ...p.moods].join(' ').toLowerCase().includes(q)) : PRODUCTS.filter(p => p.tags.includes('best')).slice(0, 5);
  out.innerHTML = (q ? '' : '<p class="eyebrow" style="grid-column:1/-1;margin:0">Trending now</p>') +
    (list.length ? list.slice(0, 10).map(p => productCard(p)).join('') : `<p class="search-empty" style="grid-column:1/-1">No pieces match “${q}”. Try “chain” or “ring”.</p>`);
}

/* ---------- Global wiring ---------- */
function initChrome() {
  $('#site-header').innerHTML = headerHTML();
  $('#site-footer').innerHTML = footerHTML();
  document.body.insertAdjacentHTML('beforeend', overlaysHTML());
  bump('[data-cart-count]', cart.reduce((a, l) => a + l.qty, 0));
  renderCart(); runSearch('');

  // Mega menu: hover on desktop, click/keyboard toggles
  $$('.has-mega').forEach(item => {
    let t;
    const set = v => { item.classList.toggle('open', v); $('.nav-link', item).setAttribute('aria-expanded', v); };
    item.addEventListener('mouseenter', () => { clearTimeout(t); set(true); });
    item.addEventListener('mouseleave', () => { t = setTimeout(() => set(false), 120); });
    item.addEventListener('focusin', () => set(true));
    item.addEventListener('focusout', e => { if (!item.contains(e.relatedTarget)) set(false); });
  });

  const header = $('#header');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-open],[data-close],[data-add],[data-wish],[data-rm],[data-q][data-d],.chip[data-q],.modal');
    if (!t) return;
    if (t.matches('[data-open]')) { e.preventDefault(); openDrawer(t.dataset.open); }
    else if (t.matches('[data-close]')) closeAll();
    else if (t.matches('[data-add]')) {
      e.preventDefault(); addToCart(t.dataset.add);
      if (t.classList.contains('quick-add')) { t.classList.add('added'); t.innerHTML = I.check + '<span>Added</span>'; setTimeout(() => { t.classList.remove('added'); t.innerHTML = I.plus + '<span>Quick Add</span>'; }, 1600); }
    }
    else if (t.matches('[data-wish]')) { e.preventDefault(); toggleWish(t.dataset.wish); }
    else if (t.matches('[data-rm]')) { cart.splice(+t.dataset.rm, 1); saveCart(); }
    else if (t.matches('[data-q][data-d]')) { const l = cart[+t.dataset.q]; l.qty += +t.dataset.d; if (l.qty < 1) cart.splice(+t.dataset.q, 1); saveCart(); }
    else if (t.matches('.chip[data-q]')) { $('#search-input').value = t.dataset.q; runSearch(t.dataset.q); }
    else if (t.matches('.modal') && e.target === t) closeAll();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openDrawer('search'); } });
  $('#search-input').addEventListener('input', e => runSearch(e.target.value));
}

function initReveal() {
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' }) : null;
  $$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
}

function initCarousel(root) {
  const track = $('.carousel-track', root), prev = $('[data-prev]', root.parentElement), next = $('[data-next]', root.parentElement), bar = $('.progress i', root);
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const r = max > 0 ? track.scrollLeft / max : 0;
    const w = Math.max(12, track.clientWidth / track.scrollWidth * 100);
    if (bar) { bar.style.width = w + '%'; bar.style.left = (r * (100 - w)) + '%'; }
    if (prev) prev.disabled = track.scrollLeft < 4;
    if (next) next.disabled = track.scrollLeft > max - 4;
  };
  const step = () => (track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 20 : 300);
  prev && prev.addEventListener('click', () => track.scrollBy({ left: -step() * 2 }));
  next && next.addEventListener('click', () => track.scrollBy({ left: step() * 2 }));
  track.addEventListener('scroll', update, { passive: true }); addEventListener('resize', update); update();
  // drag to scroll (desktop)
  let down = false, sx = 0, sl = 0, moved = false;
  track.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.style.scrollSnapType = 'none'; track.style.scrollBehavior = 'auto'; });
  addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) moved = true; track.scrollLeft = sl - dx; });
  addEventListener('pointerup', () => { if (!down) return; down = false; track.style.scrollSnapType = ''; track.style.scrollBehavior = ''; });
  track.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
}

/* =========================================================
   PAGES
   ========================================================= */
const Pages = {};

Pages.home = () => {
  // Hero slides
  const slides = [
    { spec: { shape: 'chain', variant: 'cuban', metal: 'silver' }, t: 'translate(200 250) scale(1.05) translate(-200 -250)', eyebrow: 'The Zach Signature · 2026', h: 'Define<br>your <em>edge.</em>', p: 'Premium jewellery designed for the modern man.' },
    { spec: { shape: 'ring', variant: 'signet', metal: 'silver' }, t: 'translate(200 240) scale(.95) rotate(-10) translate(-200 -250)', eyebrow: 'Sculpted Signets', h: 'Made to<br><em>be worn.</em>', p: 'Surgical-steel signets, polished in eight stages and built for a lifetime.' },
    { spec: { shape: 'bracelet', variant: 'cuban', metal: 'black' }, t: 'translate(200 250) scale(1.1) rotate(-14) translate(-200 -250)', eyebrow: 'Gunmetal Edit', h: 'Quiet<br><em>power.</em>', p: 'Gunmetal black links with a cold-forged finish. Bold without saying a word.' },
  ];
  const hero = $('#hero');
  hero.innerHTML = slides.map((s, i) => `<div class="hero-slide ${i ? '' : 'active'}" aria-hidden="${!!i}">
      <div class="hero-bg"></div>
      <div class="hero-art" aria-hidden="true">${Jewel.render(s.spec, { bg: 'none', transform: s.t })}</div>
      <div class="wrap hero-content">
        <span class="eyebrow">${s.eyebrow}</span>
        <h1>${s.h}</h1>
        <p class="lede">${s.p}</p>
        <div class="hero-ctas"><a class="btn btn-light" href="shop.html">Shop Men's Jewellery ${I.arrow}</a><a class="btn btn-ghost-dark" href="shop.html?tag=signature">Explore Collection</a></div>
      </div>
    </div>`).join('') + `
    <div class="hero-dots" role="tablist">${slides.map((_, i) => `<button role="tab" aria-label="Slide ${i + 1}" class="${i ? '' : 'active'}" data-slide="${i}"></button>`).join('')}<span class="num">01 / 0${slides.length}</span></div>
    <div class="hero-specs"><span class="spec-chip"><i></i>316L Surgical Steel</span><span class="spec-chip"><i></i>Anti-Tarnish</span><span class="spec-chip"><i></i>Waterproof</span></div>`;
  let cur = 0, timer;
  const go = n => {
    const ss = $$('.hero-slide', hero), ds = $$('.hero-dots button', hero);
    ss[cur].classList.remove('active'); ss[cur].setAttribute('aria-hidden', 'true'); ds[cur].classList.remove('active');
    cur = (n + ss.length) % ss.length;
    ss[cur].classList.add('active'); ss[cur].setAttribute('aria-hidden', 'false'); void ds[cur].offsetWidth; ds[cur].classList.add('active');
    $('.hero-dots .num', hero).textContent = `0${cur + 1} / 0${ss.length}`;
    clearInterval(timer); timer = setInterval(() => go(cur + 1), 6500);
  };
  $$('.hero-dots button', hero).forEach(b => b.addEventListener('click', () => go(+b.dataset.slide)));
  timer = setInterval(() => go(cur + 1), 6500);

  // Categories
  $('#cat-grid').innerHTML = CATEGORIES.map((c, i) => `<a class="cat-card reveal" style="transition-delay:${i * 50}ms" href="shop.html?cat=${c.slug}">
    <div class="media">${Jewel.render(c.spec, { bg: i % 2 ? 'dark' : 'light', label: c.name })}</div>
    <div class="label"><h3>${c.name}</h3><span>${PRODUCTS.filter(p => p.cat === c.slug).length} styles ${I.arrow}</span></div></a>`).join('');

  // Signature
  $('#sig-media').innerHTML = Jewel.render({ shape: 'ring', variant: 'signet', metal: 'silver' }, { bg: 'dark', transform: 'translate(200 200) scale(1.05) rotate(-8) translate(-200 -250)', glowX: 120, glowY: 80 });
  $('#sig-grid').innerHTML = PRODUCTS.filter(p => p.tags.includes('signature')).slice(0, 6).map(p => productCard(p)).join('');

  // New arrivals
  $('#new-track').innerHTML = PRODUCTS.filter(p => p.tags.includes('new')).map(p => productCard(p, { addBtn: true, newBadge: true })).join('');
  initCarousel($('#new-carousel'));

  // Moods
  $('#mood-grid').innerHTML = MOODS.map((m, i) => `<a class="mood-card reveal" href="shop.html?mood=${m.slug}">
    <div class="media">${Jewel.render(m.spec, { bg: 'dark', transform: m.t, glowX: 320, glowY: 140 })}</div>
    <span class="idx">0${i + 1} — Style</span>
    <h3>${m.name}</h3><p>${m.copy}</p><span class="link-arrow">Shop the edit ${I.arrow}</span></a>`).join('');

  // Bestsellers
  $('#best-grid').innerHTML = PRODUCTS.filter(p => p.tags.includes('best')).sort((a, b) => b.reviews - a.reviews).slice(0, 8).map(p => productCard(p)).join('');

  // Story visuals
  $('#story-a').innerHTML = Jewel.render({ shape: 'pendant', variant: 'tag', metal: 'silver' }, { bg: 'dark', transform: 'translate(200 230) scale(1.25) translate(-200 -250)', glowX: 90, glowY: 90 });
  $('#story-b').innerHTML = Jewel.render({ shape: 'ring', variant: 'inlay', metal: 'black' }, { bg: 'dark', transform: 'translate(200 260) scale(.95) translate(-200 -250)' });
  $('#story-c').innerHTML = Jewel.render({ shape: 'bracelet', variant: 'cuban', metal: 'gold' }, { bg: 'dark', transform: 'translate(200 260) scale(1.4) rotate(-20) translate(-200 -250)', glowX: 80 });
};

Pages.shop = () => {
  const q = new URLSearchParams(location.search);
  const state = { cat: q.get('cat') || 'all', metal: q.get('metal') || 'all', sort: 'featured' };
  const tag = q.get('tag'), mood = q.get('mood'), wl = q.get('wishlist'), min = +q.get('min') || 0, max = +q.get('max') || Infinity;
  const moodObj = MOODS.find(m => m.slug === mood);
  let title = 'All Jewellery', sub = 'Chains, bracelets, rings and more — engineered in surgical steel and finished by hand.';
  if (wl) { title = 'Your Wishlist'; sub = 'Pieces you\'ve saved for later.'; }
  else if (tag === 'new') { title = 'New Arrivals'; sub = 'The latest drops from the Zach studio.'; }
  else if (tag === 'signature') { title = 'The Zach Signature'; sub = "Designed for those who don't follow the crowd."; }
  else if (tag === 'best') { title = 'Zach Bestsellers'; sub = 'The pieces our community wears most.'; }
  else if (moodObj) { title = moodObj.name; sub = moodObj.copy; }
  else if (state.cat !== 'all') { title = catName(state.cat); sub = DESCRIPTIONS[state.cat] || sub; }
  document.title = `${title} — Zach Lifestyle`;
  $('#shop-title').textContent = title; $('#shop-sub').textContent = sub; $('#crumb-last').textContent = title;

  $('#cat-chips').innerHTML = [{ slug: 'all', name: 'All' }, ...CATEGORIES].map(c => `<button class="chip ${state.cat === c.slug ? 'active' : ''}" data-cat="${c.slug}">${c.name}</button>`).join('');
  $('#metal-filter').innerHTML = ['all', 'silver', 'gold', 'black'].map(m => `<button class="${state.metal === m ? 'active' : ''}" data-metal="${m}">${m === 'all' ? '' : `<i class="sw-${m}"></i>`}${m === 'all' ? 'All finishes' : { silver: 'Steel', gold: 'Gold', black: 'Black' }[m]}</button>`).join('');

  const draw = () => {
    let list = PRODUCTS.filter(p =>
      (state.cat === 'all' || p.cat === state.cat) &&
      (state.metal === 'all' || p.metals.includes(state.metal)) &&
      (!tag || p.tags.includes(tag)) && (!mood || p.moods.includes(mood)) && (!wl || wish.has(p.id)) &&
      p.price >= min && p.price <= max);
    const s = state.sort;
    if (s === 'low') list.sort((a, b) => a.price - b.price);
    if (s === 'high') list.sort((a, b) => b.price - a.price);
    if (s === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (s === 'new') list.sort((a, b) => b.tags.includes('new') - a.tags.includes('new'));
    if (s === 'discount') list.sort((a, b) => off(b) - off(a));
    $('#count').textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;
    $('#shop-grid').innerHTML = list.length ? list.map(p => productCard(state.metal !== 'all' ? { ...p, metal: state.metal } : p)).join('')
      : `<div class="empty-state" style="grid-column:1/-1">${wl ? 'Your wishlist is empty. Tap the ♡ on any piece to save it.' : 'No pieces match these filters.'}<br><br><a class="btn btn-outline" href="shop.html">View all jewellery</a></div>`;
  };
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-cat]'), m = e.target.closest('[data-metal]');
    if (c) { state.cat = c.dataset.cat; $$('[data-cat]').forEach(b => b.classList.toggle('active', b === c)); draw(); }
    if (m) { state.metal = m.dataset.metal; $$('[data-metal]').forEach(b => b.classList.toggle('active', b === m)); draw(); }
  });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; draw(); });
  if (wl) addEventListener('storage', draw);
  draw();
};

Pages.product = () => {
  const p = byId(new URLSearchParams(location.search).get('id')) || PRODUCTS[0];
  const sz = SIZES[p.cat];
  const st = { metal: p.metal, size: defaultSize(p), view: 0, qty: 1 };
  document.title = `${p.name} — Zach Lifestyle`;
  const mat = () => MATERIALS[st.metal];

  $('#pdp').innerHTML = `
    <div class="gallery">
      <div class="thumbs" id="thumbs"></div>
      <div class="stage" id="stage"><div class="zoomable" id="zoomable"></div>
        <span class="stage-hint">${I.zoom} Hover or tap to zoom</span>
        <div class="stage-nav"><button data-v="-1" aria-label="Previous image">${I.left}</button><button data-v="1" aria-label="Next image">${I.arrow}</button></div>
      </div>
    </div>
    <div class="pdp-info">
      <nav class="crumbs"><a href="index.html">Home</a>/<a href="shop.html?cat=${p.cat}">${catName(p.cat)}</a>/<span>${p.name}</span></nav>
      <h1>${p.name}</h1>
      <div class="rating">${stars(p.rating)}<b style="color:var(--ink)">${p.rating}</b><a href="#reviews">${p.reviews} reviews</a>${p.tags.includes('best') ? '<span class="badge new" style="margin-left:6px">Bestseller</span>' : ''}</div>
      <div class="pdp-price"><b>${fmt(p.price)}</b><s>MRP ${fmt(p.mrp)}</s><em>${off(p)}% OFF</em></div>
      <p class="tax-note">Inclusive of all taxes · Save ${fmt(p.mrp - p.price)}</p>
      <p class="pdp-desc">${DESCRIPTIONS[p.cat]}</p>
      <div class="opt-group"><div class="opt-label">Finish <span id="metal-name">${METAL_NAMES[st.metal]}</span></div>
        <div class="opts">${p.metals.map(m => `<button class="opt ${m === st.metal ? 'active' : ''}" data-metal="${m}"><i class="sw-${m}"></i>${{ silver: 'Steel', gold: 'Gold', black: 'Black' }[m]}</button>`).join('')}</div></div>
      ${sz && sz.opts.length > 1 ? `<div class="opt-group"><div class="opt-label">${sz.label} <a href="#" id="open-size">Size guide</a></div>
        <div class="opts">${sz.opts.map(o => `<button class="opt ${o === st.size ? 'active' : ''}" data-size="${o}">${o}</button>`).join('')}</div></div>` : ''}
      <div class="buy-row">
        <div class="qty"><button id="q-dec" aria-label="Decrease quantity">${I.minus}</button><input id="q-val" value="1" inputmode="numeric" aria-label="Quantity"><button id="q-inc" aria-label="Increase quantity">${I.plus.replace('stroke-width="1.8"', 'stroke-width="1.8" width="14"')}</button></div>
        <button class="btn btn-add-main" id="add-main">${I.bag} Add to Cart</button>
        <button class="wish-lg ${wish.has(p.id) ? 'on' : ''}" data-wish="${p.id}" aria-label="Wishlist" aria-pressed="${wish.has(p.id)}">${I.heart}</button>
      </div>
      <button class="btn btn-buy btn-block" id="buy-now">Buy It Now</button>
      <div class="pin-box">
        <h4>${I.pin} Check Delivery</h4>
        <form class="pin-form" id="pin-form"><input class="field" id="pin" inputmode="numeric" maxlength="6" placeholder="Enter 6-digit pincode" aria-label="Pincode"><button class="btn btn-outline">Check</button></form>
        <div class="pin-result" id="pin-result"></div>
      </div>
      <div class="perks"><div>${I.truck}Free express<br>shipping</div><div>${I.refresh}7-day easy<br>exchange</div><div>${I.shield}1-year<br>warranty</div></div>
      <div class="acc">
        <details open><summary>Description</summary><div class="acc-body"><p style="margin-top:0">${DESCRIPTIONS[p.cat]}</p><ul><li>Weighted, premium hand-feel</li><li>Waterproof & sweat-proof — wear it in the shower, gym or pool</li><li>Arrives in the signature Zach gift box</li></ul></div></details>
        <details><summary>Material & Finish</summary><div class="acc-body"><table class="spec-table" id="spec-table"></table></div></details>
        <details><summary>Size & Fit</summary><div class="acc-body">${sizeGuide(p)}</div></details>
        <details><summary>Jewellery Care</summary><div class="acc-body"><ul><li>Wipe with the included microfibre cloth after wear.</li><li>Avoid direct contact with perfume, bleach and harsh chemicals.</li><li>Store in the Zach pouch to prevent scratches between pieces.</li><li>Rinse with mild soap and lukewarm water; pat dry completely.</li></ul></div></details>
        <details><summary>Shipping, Returns & Exchange</summary><div class="acc-body"><ul><li>Free express shipping on orders above ₹1,499; dispatched within 24 hours.</li><li>7-day hassle-free exchange on unused pieces with original tags and box.</li><li>Returns accepted for manufacturing defects within 7 days of delivery.</li><li>1-year warranty against plating and finish defects.</li></ul></div></details>
      </div>
    </div>`;

  const sticky = $('#sticky-buy');
  sticky.innerHTML = `<div class="sb-info"><span>${p.name}</span><b>${fmt(p.price)}</b></div><button class="btn btn-outline" id="sb-add">Add to Cart</button><button class="btn" id="sb-buy">Buy Now</button>`;
  document.body.classList.add('has-sticky');

  const drawGallery = () => {
    const spec = { ...p, metal: st.metal };
    $('#thumbs').innerHTML = [0, 1, 2, 3].map(v => `<button class="${v === st.view ? 'active' : ''}" data-view="${v}" aria-label="View image ${v + 1}">${Jewel.media(spec, { view: v })}</button>`).join('');
    $('#zoomable').innerHTML = Jewel.media(spec, { view: st.view, label: p.name });
    const m = mat();
    $('#spec-table').innerHTML = `<tr><td>Base metal</td><td>${m.base}</td></tr><tr><td>Finish</td><td>${m.finish}</td></tr><tr><td>Hypoallergenic</td><td>${m.hypo}</td></tr><tr><td>Tarnish resistant</td><td>Yes — 2+ years of daily wear</td></tr><tr><td>Waterproof</td><td>Yes</td></tr><tr><td>SKU</td><td>ZL-${p.id.split('-').map(s => s[0]).join('').toUpperCase()}-${st.metal.slice(0, 2).toUpperCase()}</td></tr>`;
    $('#metal-name').textContent = METAL_NAMES[st.metal];
  };
  drawGallery();

  // Zoom
  const stage = $('#stage'), zm = $('#zoomable');
  const setOrigin = e => { const r = stage.getBoundingClientRect(); const x = ((e.clientX - r.left) / r.width) * 100, y = ((e.clientY - r.top) / r.height) * 100; zm.style.transformOrigin = `${x}% ${y}%`; };
  const fine = matchMedia('(hover: hover)').matches;
  if (fine) {
    stage.addEventListener('mouseenter', () => stage.classList.add('zoomed'));
    stage.addEventListener('mouseleave', () => stage.classList.remove('zoomed'));
    stage.addEventListener('mousemove', setOrigin);
  }
  stage.addEventListener('click', e => { if (e.target.closest('.stage-nav')) return; if (!fine) { setOrigin(e); stage.classList.toggle('zoomed'); } });

  document.addEventListener('click', e => {
    const v = e.target.closest('[data-view]'), sv = e.target.closest('[data-v]'), m = e.target.closest('.pdp-info [data-metal]'), s = e.target.closest('[data-size]');
    if (v) { st.view = +v.dataset.view; drawGallery(); }
    if (sv) { st.view = (st.view + +sv.dataset.v + 4) % 4; stage.classList.remove('zoomed'); drawGallery(); }
    if (m) { st.metal = m.dataset.metal; $$('.pdp-info [data-metal]').forEach(b => b.classList.toggle('active', b === m)); drawGallery(); }
    if (s) { st.size = s.dataset.size; $$('[data-size]').forEach(b => b.classList.toggle('active', b === s)); }
  });
  const qv = $('#q-val');
  const setQ = n => { st.qty = Math.max(1, Math.min(10, n || 1)); qv.value = st.qty; };
  $('#q-dec').onclick = () => setQ(st.qty - 1); $('#q-inc').onclick = () => setQ(st.qty + 1);
  qv.addEventListener('change', () => setQ(parseInt(qv.value, 10)));
  const add = (open = true) => addToCart(p.id, { metal: st.metal, size: st.size, qty: st.qty, open });
  const buy = () => { add(false); toast('Proceeding to secure checkout — not connected in this demo'); };
  $('#add-main').onclick = () => add(); $('#sb-add').onclick = () => add(); $('#buy-now').onclick = buy; $('#sb-buy').onclick = buy;

  const sg = $('#open-size');
  if (sg) sg.onclick = e => { e.preventDefault(); $('#sizeguide-body').innerHTML = `<h3>Size Guide <button class="icon-btn" data-close aria-label="Close">${I.close}</button></h3>${sizeGuide(p)}`; openDrawer('sizeguide'); };

  // Pincode
  $('#pin-form').addEventListener('submit', e => {
    e.preventDefault(); const v = $('#pin').value.trim(), r = $('#pin-result');
    r.classList.add('show');
    if (!/^[1-9]\d{5}$/.test(v)) { r.classList.add('err'); r.innerHTML = '<div>Please enter a valid 6-digit Indian pincode.</div>'; return; }
    r.classList.remove('err');
    const metro = /^(11|40|56|60|70|50|41|38)/.test(v);
    const d = new Date(); d.setDate(d.getDate() + (metro ? 2 : 4));
    const ds = d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
    r.innerHTML = `<div>${I.check}Delivery by <b>${ds}</b> to ${v}</div><div>${I.check}${p.price >= FREE_SHIP ? 'Free express shipping' : 'Free shipping above ₹1,499'}</div><div>${I.check}Cash on delivery available</div>`;
  });

  // Sticky mobile bar shows once main CTA scrolls away
  const io = new IntersectionObserver(([en]) => sticky.classList.toggle('show', !en.isIntersecting && en.boundingClientRect.top < 0), { threshold: 0 });
  io.observe($('#add-main'));

  // Related & reviews
  $('#related').innerHTML = PRODUCTS.filter(x => x.id !== p.id && (x.cat === p.cat || x.moods.some(m => p.moods.includes(m)))).slice(0, 4).map(x => productCard(x)).join('');
  $('#review-score').innerHTML = `<b style="font:800 56px/1 var(--display);font-stretch:110%">${p.rating}</b><div>${stars(p.rating)}<div style="font-size:13px;color:var(--gray-4)">Based on ${p.reviews} verified reviews</div></div>`;
};

function sizeGuide(p) {
  const tables = {
    rings: '<p style="margin-top:0">Measure the inner circumference of a ring you already wear, or wrap a strip of paper around your finger.</p><table class="size-table"><tr><th>IN Size</th><th>Circumference</th><th>Diameter</th></tr>' + [[16, '56.0', '17.8'], [18, '58.0', '18.5'], [20, '60.0', '19.1'], [22, '62.1', '19.8'], [24, '64.1', '20.4'], [26, '66.2', '21.1']].map(r => `<tr><td>${r[0]}</td><td>${r[1]} mm</td><td>${r[2]} mm</td></tr>`).join('') + '</table>',
    bracelets: '<p style="margin-top:0">Measure your wrist just above the wrist bone and add 0.5"–1" for a comfortable fit.</p><table class="size-table"><tr><th>Size</th><th>Bracelet</th><th>Fits wrist</th></tr><tr><td>S</td><td>7"</td><td>6–6.5"</td></tr><tr><td>M</td><td>7.5"</td><td>6.5–7"</td></tr><tr><td>L</td><td>8"</td><td>7–7.5"</td></tr><tr><td>XL</td><td>8.5"</td><td>7.5–8"</td></tr></table>',
    chain: '<p style="margin-top:0">Chain length guide for an average build.</p><table class="size-table"><tr><th>Length</th><th>Sits at</th></tr><tr><td>18"</td><td>Base of neck / collarbone</td></tr><tr><td>20"</td><td>Just below collarbone — most popular</td></tr><tr><td>22"</td><td>Upper chest</td></tr><tr><td>24"</td><td>Mid chest, over a tee</td></tr></table>',
  };
  if (p.cat === 'rings') return tables.rings;
  if (p.cat === 'bracelets') return tables.bracelets;
  if (['chains', 'necklaces', 'pendants'].includes(p.cat)) return tables.chain;
  if (p.cat === 'earrings') return '<p style="margin-top:0">One size. Hypoallergenic surgical-steel posts with secure screw-backs; suitable for standard piercings.</p>';
  return '<p style="margin-top:0">Sets include a 20" chain and a 7.5" bracelet (Standard), or 22" / 8" (Large). Rings in sets are size 20 / 22.</p>';
}

document.addEventListener('DOMContentLoaded', () => {
  initChrome();
  const page = document.body.dataset.page;
  if (Pages[page]) Pages[page]();
  initReveal();
});
