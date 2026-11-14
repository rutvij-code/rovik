/* =========================================================
   ZACH LIFESTYLE — Catalogue data
   Add `img: "path/to/photo.jpg"` (and `imgs: [..4 views..]`) to any
   product to replace the studio render with real photography.
   ========================================================= */
const CATEGORIES = [
  { slug: 'chains',    name: 'Chains',         spec: { shape: 'chain', variant: 'cuban', metal: 'silver' } },
  { slug: 'bracelets', name: 'Bracelets',      spec: { shape: 'bracelet', variant: 'cuban', metal: 'black' } },
  { slug: 'rings',     name: 'Rings',          spec: { shape: 'ring', variant: 'signet', metal: 'silver' } },
  { slug: 'earrings',  name: 'Earrings',       spec: { shape: 'earring', variant: 'onyx', metal: 'silver' } },
  { slug: 'pendants',  name: 'Pendants',       spec: { shape: 'pendant', variant: 'tag', metal: 'silver' } },
  { slug: 'necklaces', name: 'Necklaces',      spec: { shape: 'necklace', variant: 'beads', metal: 'gold' } },
  { slug: 'sets',      name: 'Jewellery Sets', spec: { shape: 'set', variant: 'classic', metal: 'silver' } },
];

const METAL_NAMES = { silver: 'Polished Steel', gold: '18K Gold Plated', black: 'Gunmetal Black' };

const PRODUCTS = [
  { id: 'onyx-cuban-chain', name: 'Onyx Cuban Chain', cat: 'chains', shape: 'chain', variant: 'cuban', metal: 'black', metals: ['black', 'silver', 'gold'], price: 2499, mrp: 3999, rating: 4.8, reviews: 412, tags: ['signature', 'best'], moods: ['bold', 'street', 'night'] },
  { id: 'arctic-curb-chain', name: 'Arctic Curb Chain', cat: 'chains', shape: 'chain', variant: 'curb', metal: 'silver', metals: ['silver', 'gold'], price: 1899, mrp: 2799, rating: 4.7, reviews: 288, tags: ['new'], moods: ['everyday', 'minimal'] },
  { id: 'meridian-rope-chain', name: 'Meridian Rope Chain', cat: 'chains', shape: 'chain', variant: 'rope', metal: 'gold', metals: ['gold', 'silver'], price: 2899, mrp: 4299, rating: 4.6, reviews: 196, tags: ['signature'], moods: ['bold', 'night'] },
  { id: 'vector-box-chain', name: 'Vector Box Chain', cat: 'chains', shape: 'chain', variant: 'box', metal: 'silver', metals: ['silver', 'black'], price: 1599, mrp: 2299, rating: 4.5, reviews: 140, tags: ['best'], moods: ['minimal', 'everyday'] },
  { id: 'titan-link-bracelet', name: 'Titan Link Bracelet', cat: 'bracelets', shape: 'bracelet', variant: 'cuban', metal: 'silver', metals: ['silver', 'black', 'gold'], price: 1799, mrp: 2699, rating: 4.8, reviews: 520, tags: ['best', 'signature'], moods: ['bold', 'street'] },
  { id: 'obsidian-bead-bracelet', name: 'Obsidian Bead Bracelet', cat: 'bracelets', shape: 'bracelet', variant: 'beads', metal: 'black', metals: ['black', 'silver'], price: 1299, mrp: 1899, rating: 4.7, reviews: 377, tags: ['new', 'best'], moods: ['everyday', 'street'] },
  { id: 'edge-cuff', name: 'Edge Cuff', cat: 'bracelets', shape: 'bracelet', variant: 'cuff', metal: 'silver', metals: ['silver', 'black'], price: 2199, mrp: 2999, rating: 4.6, reviews: 98, tags: ['new'], moods: ['minimal', 'night'] },
  { id: 'gilded-curb-bracelet', name: 'Gilded Curb Bracelet', cat: 'bracelets', shape: 'bracelet', variant: 'curb', metal: 'gold', metals: ['gold', 'silver'], price: 1999, mrp: 2899, rating: 4.5, reviews: 121, tags: ['signature'], moods: ['night', 'bold'] },
  { id: 'zach-signet-ring', name: 'Zach Signet Ring', cat: 'rings', shape: 'ring', variant: 'signet', metal: 'silver', metals: ['silver', 'gold', 'black'], price: 1999, mrp: 2999, rating: 4.9, reviews: 640, tags: ['signature', 'best'], moods: ['bold', 'night'] },
  { id: 'frost-line-band', name: 'Frost Line Band', cat: 'rings', shape: 'ring', variant: 'inlay', metal: 'black', metals: ['black', 'silver'], price: 1499, mrp: 2199, rating: 4.7, reviews: 233, tags: ['new'], moods: ['minimal', 'street'] },
  { id: 'monolith-band', name: 'Monolith Band', cat: 'rings', shape: 'ring', variant: 'band', metal: 'gold', metals: ['gold', 'silver', 'black'], price: 1699, mrp: 2499, rating: 4.6, reviews: 187, tags: ['best'], moods: ['minimal', 'everyday'] },
  { id: 'apex-hoops', name: 'Apex Hoops', cat: 'earrings', shape: 'earring', variant: 'hoops', metal: 'silver', metals: ['silver', 'black', 'gold'], price: 999, mrp: 1499, rating: 4.6, reviews: 164, tags: ['new'], moods: ['street', 'everyday'] },
  { id: 'eclipse-studs', name: 'Eclipse Onyx Studs', cat: 'earrings', shape: 'earring', variant: 'onyx', metal: 'silver', metals: ['silver', 'black'], price: 899, mrp: 1299, rating: 4.7, reviews: 302, tags: ['best'], moods: ['night', 'minimal'] },
  { id: 'glacier-studs', name: 'Glacier Crystal Studs', cat: 'earrings', shape: 'earring', variant: 'ice', metal: 'silver', metals: ['silver', 'gold'], price: 1099, mrp: 1599, rating: 4.8, reviews: 211, tags: ['new', 'signature'], moods: ['night', 'bold'] },
  { id: 'zach-tag-pendant', name: 'Zach Tag Pendant', cat: 'pendants', shape: 'pendant', variant: 'tag', metal: 'silver', metals: ['silver', 'black'], price: 2299, mrp: 3299, rating: 4.8, reviews: 355, tags: ['signature', 'best'], moods: ['street', 'everyday'] },
  { id: 'blade-bar-pendant', name: 'Blade Bar Pendant', cat: 'pendants', shape: 'pendant', variant: 'bar', metal: 'black', metals: ['black', 'silver', 'gold'], price: 1899, mrp: 2599, rating: 4.6, reviews: 142, tags: ['new'], moods: ['minimal', 'street'] },
  { id: 'sovereign-cross', name: 'Sovereign Cross', cat: 'pendants', shape: 'pendant', variant: 'cross', metal: 'gold', metals: ['gold', 'silver'], price: 2499, mrp: 3499, rating: 4.7, reviews: 176, tags: ['best'], moods: ['bold', 'night'] },
  { id: 'axis-coin-pendant', name: 'Axis Coin Pendant', cat: 'pendants', shape: 'pendant', variant: 'coin', metal: 'silver', metals: ['silver', 'gold'], price: 1999, mrp: 2799, rating: 4.5, reviews: 88, tags: ['new'], moods: ['everyday', 'street'] },
  { id: 'nightfall-bead-necklace', name: 'Nightfall Bead Necklace', cat: 'necklaces', shape: 'necklace', variant: 'beads', metal: 'gold', metals: ['gold', 'silver'], price: 1799, mrp: 2499, rating: 4.6, reviews: 109, tags: ['new'], moods: ['night', 'street'] },
  { id: 'dual-layer-necklace', name: 'Dual Layer Necklace', cat: 'necklaces', shape: 'necklace', variant: 'layered', metal: 'silver', metals: ['silver', 'gold'], price: 2799, mrp: 3999, rating: 4.7, reviews: 154, tags: ['signature', 'new'], moods: ['bold', 'street'] },
  { id: 'essentials-set', name: 'The Essentials Set', cat: 'sets', shape: 'set', variant: 'classic', metal: 'silver', metals: ['silver', 'gold'], price: 3999, mrp: 5999, rating: 4.8, reviews: 97, tags: ['signature'], moods: ['everyday', 'minimal'] },
  { id: 'noir-statement-set', name: 'Noir Statement Set', cat: 'sets', shape: 'set', variant: 'noir', metal: 'black', metals: ['black', 'silver'], price: 4499, mrp: 6999, rating: 4.9, reviews: 132, tags: ['best'], moods: ['night', 'bold'] },
];

const MOODS = [
  { slug: 'minimal',  name: 'The Minimalist',      copy: 'Clean lines. Quiet confidence. Pieces that say less and mean more.', spec: { shape: 'ring', variant: 'inlay', metal: 'silver' }, t: 'translate(255 150) scale(.8) rotate(-12) translate(-200 -250)' },
  { slug: 'bold',     name: 'Bold & Statement',    copy: 'Heavy links and sculpted signets for the man who owns the room.', spec: { shape: 'chain', variant: 'cuban', metal: 'gold' }, t: 'translate(260 230) scale(1.25) translate(-200 -250)' },
  { slug: 'everyday', name: 'Everyday Essentials', copy: 'Anti-tarnish staples built for the 9-to-whenever.', spec: { shape: 'bracelet', variant: 'beads', metal: 'silver' }, t: 'translate(280 250) scale(1.1) translate(-200 -250)' },
  { slug: 'night',    name: 'Night Out',           copy: 'Low light, high shine. Crystal studs and gunmetal edges.', spec: { shape: 'earring', variant: 'ice', metal: 'silver' }, t: 'translate(290 250) scale(1.05) translate(-200 -250)' },
  { slug: 'street',   name: 'Street Luxury',       copy: 'Tags, cubans and stacked layers with a premium finish.', spec: { shape: 'pendant', variant: 'tag', metal: 'black' }, t: 'translate(290 220) scale(1.15) translate(-200 -250)' },
];

const MATERIALS = {
  silver: { base: '316L Surgical Stainless Steel', finish: 'Mirror-polished, PVD sealed', hypo: 'Yes — nickel-free, skin-safe' },
  gold:   { base: '316L Stainless Steel core', finish: '18K gold PVD plating (2.5 microns)', hypo: 'Yes — nickel-free, skin-safe' },
  black:  { base: '316L Stainless Steel core', finish: 'Gunmetal black ion plating', hypo: 'Yes — nickel-free, skin-safe' },
};

const SIZES = {
  chains: { label: 'Length', opts: ['18"', '20"', '22"', '24"'], def: 1 },
  necklaces: { label: 'Length', opts: ['18"', '20"', '22"'], def: 1 },
  pendants: { label: 'Chain Length', opts: ['20"', '22"', '24"'], def: 0 },
  bracelets: { label: 'Wrist Size', opts: ['S · 7"', 'M · 7.5"', 'L · 8"', 'XL · 8.5"'], def: 1 },
  rings: { label: 'Ring Size (IN)', opts: ['16', '18', '20', '22', '24', '26'], def: 2 },
  earrings: { label: 'Size', opts: ['One Size'], def: 0 },
  sets: { label: 'Size', opts: ['Standard (M)', 'Large (L)'], def: 0 },
};

const DESCRIPTIONS = {
  chains: 'Precision-linked and hand-finished, built with weight you can feel and a drape that sits right on the collarbone. Wear it solo or stack it — it holds its own either way.',
  bracelets: 'Engineered links, a secure box clasp and an edge that catches the light without trying too hard. Designed to move with you from the desk to the late night.',
  rings: 'Sculpted from a single block of surgical steel and polished in eight stages. Comfort-fit interior, a bold profile, and a finish that refuses to fade.',
  earrings: 'Low-profile, high-impact. Hypoallergenic posts, secure screw-backs and a cut that throws light at every angle.',
  pendants: 'A statement piece on a fine curb chain. Weighted to hang straight, finished with micro-engraving and the signature Freezing Blue detail.',
  necklaces: 'Layered by design. Built to sit flat, never tangle and catch attention without asking for it.',
  sets: 'A curated stack, styled by the Zach studio and boxed together. One decision, a complete look.',
};

const fmt = n => '₹' + n.toLocaleString('en-IN');
const off = p => Math.round((1 - p.price / p.mrp) * 100);
const byId = id => PRODUCTS.find(p => p.id === id);
const catName = slug => (CATEGORIES.find(c => c.slug === slug) || {}).name || slug;
