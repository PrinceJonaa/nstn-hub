// ============================================================
// NSTN Hub — Application Logic
// ============================================================

// Pack data
const PACKS = [
  {
    name: "music-theory-core",
    author: "nanosistant",
    version: "0.6.0",
    tier: "Domain",
    domain: "music",
    description: "Scale degrees (14 modes), chord-to-roman, BPM math, tempo feels, delay times, rhyme detection",
    functions: 22,
    test_coverage: "100%",
    quality_score: 98,
    usage_count: 12847,
    verified: true,
    tags: ["music", "theory", "production", "bpm"],
    zero_token: true,
    functionsList: [
      { name: "scale_degrees", sig: "scale_degrees(root: &str, mode: &str) → Vec<String>", desc: "Returns all scale degrees for a given root and mode (14 modes supported)", example: { input: 'scale_degrees("C", "major")', output: '["C", "D", "E", "F", "G", "A", "B"]' } },
      { name: "chord_to_roman", sig: "chord_to_roman(chord: &str, key: &str) → String", desc: "Convert chord name to Roman numeral notation in a given key", example: { input: 'chord_to_roman("Am", "C")', output: '"vi"' } },
      { name: "bpm_to_ms", sig: "bpm_to_ms(bpm: f64) → f64", desc: "Convert BPM to milliseconds per beat", example: { input: 'bpm_to_ms(120.0)', output: '500.0' } },
      { name: "delay_time", sig: "delay_time(bpm: f64, subdivision: &str) → f64", desc: "Calculate delay time for a given BPM and note subdivision", example: { input: 'delay_time(128.0, "1/8")', output: '234.375' } },
      { name: "tempo_feel", sig: "tempo_feel(bpm: f64) → &str", desc: "Return the musical tempo feel name for a given BPM", example: { input: 'tempo_feel(72.0)', output: '"Adagio"' } },
      { name: "rhyme_score", sig: "rhyme_score(a: &str, b: &str) → f64", desc: "Phonetic rhyme similarity score between two words (0.0-1.0)", example: { input: 'rhyme_score("cat", "hat")', output: '0.95' } },
    ]
  },
  {
    name: "finance-quant",
    author: "nanosistant",
    version: "0.6.0",
    tier: "Domain",
    domain: "finance",
    description: "Black-Scholes, Kelly criterion, RSI/MACD/EMA, Sharpe, Sortino, max drawdown, VaR, position sizing",
    functions: 24,
    test_coverage: "100%",
    quality_score: 97,
    usage_count: 9234,
    verified: true,
    tags: ["finance", "options", "trading", "risk"],
    zero_token: true,
    functionsList: [
      { name: "black_scholes", sig: "black_scholes(s: f64, k: f64, t: f64, r: f64, sigma: f64) → f64", desc: "Black-Scholes option pricing model for European call options", example: { input: 'black_scholes(100.0, 100.0, 1.0, 0.05, 0.2)', output: '10.4506' } },
      { name: "kelly_criterion", sig: "kelly_criterion(win_prob: f64, win_loss_ratio: f64) → f64", desc: "Optimal bet size using Kelly criterion", example: { input: 'kelly_criterion(0.6, 2.0)', output: '0.4' } },
      { name: "sharpe_ratio", sig: "sharpe_ratio(returns: &[f64], risk_free: f64) → f64", desc: "Annualized Sharpe ratio", example: { input: 'sharpe_ratio(&[0.02, 0.01, -0.005, 0.03], 0.01)', output: '1.847' } },
      { name: "max_drawdown", sig: "max_drawdown(prices: &[f64]) → f64", desc: "Maximum drawdown from peak to trough", example: { input: 'max_drawdown(&[100, 120, 90, 110])', output: '0.25' } },
      { name: "rsi", sig: "rsi(prices: &[f64], period: usize) → f64", desc: "Relative Strength Index", example: { input: 'rsi(&[44, 44.3, 44.1, ...], 14)', output: '66.48' } },
    ]
  },
  {
    name: "data-analysis",
    author: "nanosistant",
    version: "0.6.0",
    tier: "Domain",
    domain: "data",
    description: "Describe, percentiles, correlation, linear regression, rolling stats, normalization",
    functions: 18,
    test_coverage: "100%",
    quality_score: 96,
    usage_count: 7521,
    verified: true,
    tags: ["data", "statistics", "analysis", "ml"],
    zero_token: true,
    functionsList: [
      { name: "describe", sig: "describe(data: &[f64]) → Stats", desc: "Descriptive statistics: mean, median, std, min, max, quartiles", example: { input: 'describe(&[1, 2, 3, 4, 5])', output: '{ mean: 3.0, median: 3.0, std: 1.414 }' } },
      { name: "percentile", sig: "percentile(data: &[f64], p: f64) → f64", desc: "Calculate the p-th percentile of a dataset", example: { input: 'percentile(&[1,2,3,4,5], 0.75)', output: '4.0' } },
      { name: "correlation", sig: "correlation(x: &[f64], y: &[f64]) → f64", desc: "Pearson correlation coefficient", example: { input: 'correlation(&[1,2,3], &[2,4,6])', output: '1.0' } },
      { name: "linear_regression", sig: "linear_regression(x: &[f64], y: &[f64]) → (f64, f64)", desc: "Simple linear regression returning (slope, intercept)", example: { input: 'linear_regression(&[1,2,3], &[2,4,6])', output: '(2.0, 0.0)' } },
    ]
  },
  {
    name: "logic-set-theory",
    author: "nanosistant",
    version: "0.6.0",
    tier: "Universal",
    domain: "universal",
    description: "Boolean truth tables, set operations, combinations, permutations, propositional logic",
    functions: 17,
    test_coverage: "100%",
    quality_score: 99,
    usage_count: 5102,
    verified: true,
    tags: ["logic", "math", "sets", "combinatorics"],
    zero_token: true,
    functionsList: [
      { name: "truth_table", sig: "truth_table(expr: &str) → Vec<Vec<bool>>", desc: "Generate a truth table for a boolean expression", example: { input: 'truth_table("A AND B")', output: '[[T,T,T],[T,F,F],[F,T,F],[F,F,F]]' } },
      { name: "combinations", sig: "combinations(n: u64, k: u64) → u64", desc: "Calculate C(n,k) — number of combinations", example: { input: 'combinations(10, 3)', output: '120' } },
      { name: "permutations", sig: "permutations(n: u64, k: u64) → u64", desc: "Calculate P(n,k) — number of permutations", example: { input: 'permutations(10, 3)', output: '720' } },
      { name: "set_union", sig: "set_union(a: &[T], b: &[T]) → Vec<T>", desc: "Union of two sets", example: { input: 'set_union(&[1,2,3], &[3,4,5])', output: '[1, 2, 3, 4, 5]' } },
    ]
  },
  {
    name: "information-theory",
    author: "nanosistant",
    version: "0.6.0",
    tier: "Universal",
    domain: "universal",
    description: "Shannon entropy, KL divergence, Levenshtein distance, channel capacity, compression ratio",
    functions: 11,
    test_coverage: "100%",
    quality_score: 98,
    usage_count: 3201,
    verified: true,
    tags: ["information", "entropy", "compression", "distance"],
    zero_token: true,
    functionsList: [
      { name: "shannon_entropy", sig: "shannon_entropy(probs: &[f64]) → f64", desc: "Calculate Shannon entropy in bits", example: { input: 'shannon_entropy(&[0.5, 0.5])', output: '1.0' } },
      { name: "kl_divergence", sig: "kl_divergence(p: &[f64], q: &[f64]) → f64", desc: "Kullback-Leibler divergence", example: { input: 'kl_divergence(&[0.5,0.5], &[0.9,0.1])', output: '0.5108' } },
      { name: "levenshtein", sig: "levenshtein(a: &str, b: &str) → usize", desc: "Levenshtein edit distance between two strings", example: { input: 'levenshtein("kitten", "sitting")', output: '3' } },
    ]
  },
  {
    name: "jersey-club-production",
    author: "PrinceJonaa",
    version: "0.1.0",
    tier: "Operator",
    domain: "music",
    description: "BPM ranges (140-160), shuffle ratios, chant density, hi-hat patterns specific to Jersey Club",
    functions: 8,
    test_coverage: "87%",
    quality_score: 84,
    usage_count: 412,
    verified: false,
    tags: ["music", "jersey-club", "production", "dance"],
    zero_token: true,
    functionsList: [
      { name: "shuffle_ratio", sig: "shuffle_ratio(bpm: f64, swing: f64) → f64", desc: "Calculate shuffle ratio for Jersey Club groove", example: { input: 'shuffle_ratio(150.0, 0.65)', output: '0.72' } },
      { name: "chant_density", sig: "chant_density(bpm: f64, bars: u32) → u32", desc: "Recommended chant hits per section", example: { input: 'chant_density(150.0, 8)', output: '24' } },
      { name: "hihat_pattern", sig: "hihat_pattern(style: &str) → Vec<bool>", desc: "Generate hi-hat pattern for a Jersey Club style", example: { input: 'hihat_pattern("classic")', output: '[T,F,T,T,F,T,T,F,T,T,F,T,T,F,T,T]' } },
    ]
  },
  {
    name: "health-metrics",
    author: "nanosistant",
    version: "0.6.0",
    tier: "Domain",
    domain: "health",
    description: "BMI, BMR (Mifflin-St Jeor), TDEE, heart rate zones, VO2 max, macro calculations",
    functions: 12,
    test_coverage: "100%",
    quality_score: 95,
    usage_count: 4821,
    verified: true,
    tags: ["health", "fitness", "nutrition", "wellness"],
    zero_token: true,
    functionsList: [
      { name: "bmi", sig: "bmi(weight_kg: f64, height_m: f64) → f64", desc: "Calculate Body Mass Index", example: { input: 'bmi(75.0, 1.80)', output: '23.15' } },
      { name: "bmr", sig: "bmr(weight_kg: f64, height_cm: f64, age: u32, sex: &str) → f64", desc: "Basal Metabolic Rate using Mifflin-St Jeor equation", example: { input: 'bmr(75.0, 180.0, 30, "male")', output: '1723.75' } },
      { name: "heart_rate_zones", sig: "heart_rate_zones(max_hr: u32) → Zones", desc: "Calculate training heart rate zones", example: { input: 'heart_rate_zones(190)', output: '{ z1: 95-114, z2: 114-133, ... }' } },
    ]
  },
  {
    name: "geo-distance",
    author: "nanosistant",
    version: "0.6.0",
    tier: "Domain",
    domain: "geo",
    description: "Haversine distance, midpoint, bounding box, bearing, coordinate conversion",
    functions: 10,
    test_coverage: "100%",
    quality_score: 96,
    usage_count: 2891,
    verified: true,
    tags: ["geo", "distance", "coordinates", "maps"],
    zero_token: true,
    functionsList: [
      { name: "haversine", sig: "haversine(lat1: f64, lon1: f64, lat2: f64, lon2: f64) → f64", desc: "Great-circle distance between two points in kilometers", example: { input: 'haversine(40.7128, -74.0060, 51.5074, -0.1278)', output: '5570.22' } },
      { name: "midpoint", sig: "midpoint(lat1: f64, lon1: f64, lat2: f64, lon2: f64) → (f64, f64)", desc: "Geographic midpoint between two coordinates", example: { input: 'midpoint(40.7, -74.0, 51.5, -0.1)', output: '(50.50, -38.33)' } },
      { name: "bearing", sig: "bearing(lat1: f64, lon1: f64, lat2: f64, lon2: f64) → f64", desc: "Initial bearing from point 1 to point 2 in degrees", example: { input: 'bearing(40.7, -74.0, 51.5, -0.1)', output: '51.21' } },
    ]
  }
];

const CATEGORIES = [
  { name: "Universal", icon: "∀", count: 2 },
  { name: "Music", icon: "♪", count: 2, domain: "music" },
  { name: "Finance", icon: "◈", count: 1, domain: "finance" },
  { name: "Data", icon: "▦", count: 1, domain: "data" },
  { name: "Health", icon: "♥", count: 1, domain: "health" },
  { name: "Geo", icon: "◉", count: 1, domain: "geo" },
  { name: "Time", icon: "⏱", count: 0 },
  { name: "Text", icon: "Aa", count: 0 },
  { name: "Code", icon: "</>", count: 0 },
  { name: "Physics", icon: "Δ", count: 0 },
  { name: "Social", icon: "◎", count: 0 },
  { name: "Custom", icon: "✦", count: 0 },
];

// ============================================================
// Router
// ============================================================

function getHash() {
  return location.hash || '#/';
}

function route() {
  const hash = getHash();
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  // Update nav
  document.querySelectorAll('.nav-links a[data-nav]').forEach(a => a.classList.remove('active'));

  if (hash.startsWith('#/packs/')) {
    const packName = hash.replace('#/packs/', '');
    document.getElementById('page-detail').classList.add('active');
    renderDetail(packName);
    document.querySelector('[data-nav="packs"]')?.classList.add('active');
  } else if (hash === '#/packs') {
    document.getElementById('page-packs').classList.add('active');
    document.querySelector('[data-nav="packs"]')?.classList.add('active');
    renderBrowse();
  } else if (hash === '#/submit') {
    document.getElementById('page-submit').classList.add('active');
    document.querySelector('[data-nav="submit"]')?.classList.add('active');
  } else {
    document.getElementById('page-home').classList.add('active');
    document.querySelector('[data-nav="home"]')?.classList.add('active');
  }

  window.scrollTo(0, 0);
  // Close mobile menu
  document.getElementById('nav-links')?.classList.remove('open');
}

// ============================================================
// Render Helpers
// ============================================================

function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toString();
}

function qualityClass(score) {
  if (score >= 95) return 'excellent';
  if (score >= 85) return 'good';
  return 'average';
}

function renderPackCard(pack, opts = {}) {
  const { showRank } = opts;
  return `
    <a class="pack-card${opts.animate ? ' animate-in' : ''}" href="#/packs/${pack.name}" aria-label="View ${pack.name}">
      <div class="pack-card-header">
        <div>
          <div class="pack-name">${pack.name}</div>
          <div class="pack-author"><span class="namespace">${pack.author}</span>/${pack.name}</div>
        </div>
        <div class="quality-score ${qualityClass(pack.quality_score)}">${pack.quality_score}</div>
      </div>
      <div class="pack-description">${pack.description}</div>
      <div class="pack-badges">
        ${pack.zero_token ? '<span class="badge badge-zero-token"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/></svg> ZERO TOKEN</span>' : ''}
        ${pack.verified ? '<span class="badge badge-verified"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg> VERIFIED</span>' : '<span class="badge badge-unverified">UNVERIFIED</span>'}
        <span class="badge badge-tier">${pack.tier}</span>
        <span class="badge badge-deterministic">DETERMINISTIC</span>
      </div>
      <div class="pack-meta">
        <span class="pack-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
          ${pack.functions} functions
        </span>
        <span class="pack-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          <span class="test-coverage ${pack.test_coverage === '100%' ? 'full' : 'partial'}">${pack.test_coverage}</span> tests
        </span>
        <span class="pack-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          ${formatNumber(pack.usage_count)}
        </span>
      </div>
    </a>`;
}

// ============================================================
// Home Page
// ============================================================

function renderHome() {
  // Featured (top 4 by quality)
  const featured = [...PACKS].sort((a, b) => b.quality_score - a.quality_score).slice(0, 4);
  document.getElementById('featured-grid').innerHTML = featured.map((p, i) => renderPackCard(p, { animate: true })).join('');

  // Categories
  document.getElementById('category-grid').innerHTML = CATEGORIES.map(c => `
    <a class="category-chip" href="#/packs${c.domain ? '?domain=' + c.domain : ''}"  ${!c.domain && c.name !== 'Universal' ? 'style="opacity:0.5"' : ''}>
      <span>${c.icon}</span>
      ${c.name}
      <span class="count">${c.count}</span>
    </a>
  `).join('');

  // Trending (sorted by usage)
  const trending = [...PACKS].sort((a, b) => b.usage_count - a.usage_count);
  document.getElementById('trending-list').innerHTML = trending.map((p, i) => `
    <a class="trending-item" href="#/packs/${p.name}">
      <span class="trending-rank">${i + 1}</span>
      <div class="trending-info">
        <div class="trending-name">${p.name}</div>
        <div class="trending-desc">${p.description}</div>
      </div>
      <div class="trending-stats">
        <span class="stat-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          <span class="test-coverage ${p.test_coverage === '100%' ? 'full' : 'partial'}">${p.test_coverage}</span>
        </span>
        <span class="stat-badge">
          ${formatNumber(p.usage_count)} uses
        </span>
        ${p.zero_token ? '<span class="badge badge-zero-token" style="font-size:10px">$0</span>' : ''}
      </div>
    </a>
  `).join('');
}

// ============================================================
// Browse Page
// ============================================================

let currentSort = 'trending';
let currentTier = 'all';
let verifiedOnly = false;

function renderBrowse() {
  let filtered = [...PACKS];

  if (currentTier !== 'all') {
    filtered = filtered.filter(p => p.tier === currentTier);
  }
  if (verifiedOnly) {
    filtered = filtered.filter(p => p.verified);
  }

  // Check URL params for domain filter
  const hash = getHash();
  const domainMatch = hash.match(/domain=(\w+)/);
  if (domainMatch) {
    filtered = filtered.filter(p => p.domain === domainMatch[1]);
  }

  // Sort
  switch (currentSort) {
    case 'trending': filtered.sort((a, b) => b.usage_count - a.usage_count); break;
    case 'newest': filtered.sort((a, b) => a.version > b.version ? -1 : 1); break;
    case 'tests': filtered.sort((a, b) => parseInt(b.test_coverage) - parseInt(a.test_coverage) || b.functions - a.functions); break;
    case 'used': filtered.sort((a, b) => b.usage_count - a.usage_count); break;
  }

  document.getElementById('browse-grid').innerHTML = filtered.map(p => renderPackCard(p)).join('');
  document.getElementById('result-count').textContent = `${filtered.length} pack${filtered.length !== 1 ? 's' : ''} found`;

  // Domain filters
  const domains = [...new Set(PACKS.map(p => p.domain))];
  document.getElementById('domain-filters').innerHTML = domains.map(d => `
    <label class="filter-option" data-filter="domain" data-value="${d}">
      <input type="checkbox" ${domainMatch && domainMatch[1] === d ? 'checked' : ''}> ${d.charAt(0).toUpperCase() + d.slice(1)}
    </label>
  `).join('');
}

// ============================================================
// Detail Page
// ============================================================

function renderDetail(packName) {
  const pack = PACKS.find(p => p.name === packName);
  if (!pack) {
    document.getElementById('detail-header').innerHTML = `<h1>Pack not found</h1>`;
    document.getElementById('detail-body').innerHTML = `<p class="text-muted">Could not find pack "${packName}".</p>`;
    return;
  }

  document.getElementById('detail-header').innerHTML = `
    <div class="detail-breadcrumb">
      <a href="#/">Home</a>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      <a href="#/packs">Packs</a>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      <span>${pack.name}</span>
    </div>
    <div class="detail-title-row">
      <div>
        <h1 class="detail-title">${pack.name} <span class="detail-version">v${pack.version}</span></h1>
        <div class="detail-author">by <span class="ns">${pack.author}</span></div>
        <div class="detail-badges">
          ${pack.zero_token ? '<span class="badge badge-zero-token"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/></svg> ZERO TOKEN</span>' : ''}
          ${pack.verified ? '<span class="badge badge-verified"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg> VERIFIED</span>' : '<span class="badge badge-unverified">UNVERIFIED</span>'}
          <span class="badge badge-tier">${pack.tier}</span>
          <span class="badge badge-deterministic">DETERMINISTIC</span>
        </div>
      </div>
      <div class="quality-score ${qualityClass(pack.quality_score)}" style="width:56px;height:56px;font-size:var(--text-lg)">${pack.quality_score}</div>
    </div>
  `;

  const fns = pack.functionsList || [];
  document.getElementById('detail-body').innerHTML = `
    <div class="detail-main">
      <!-- Description -->
      <div class="detail-section">
        <h2>About</h2>
        <p style="color:var(--color-text-muted);font-size:var(--text-sm);line-height:1.7">${pack.description}</p>
        <div style="margin-top:var(--space-4);display:flex;flex-wrap:wrap;gap:var(--space-2)">
          ${pack.tags.map(t => `<span style="padding:2px 10px;background:var(--color-surface-2);border-radius:var(--radius-full);font-size:var(--text-xs);color:var(--color-text-muted)">#${t}</span>`).join('')}
        </div>
      </div>

      <!-- Functions -->
      <div class="detail-section">
        <h2>Functions <span style="color:var(--color-text-faint);font-weight:400">(${pack.functions})</span></h2>
        <div class="function-list">
          ${fns.map(fn => `
            <div class="function-item">
              <div class="function-sig">${escapeHtml(fn.sig)}</div>
              <div class="function-desc">${fn.desc}</div>
              <div class="function-example">
                <span class="comment">// Example</span><br>
                ${escapeHtml(fn.example.input)}<br>
                <span class="output">→ ${escapeHtml(fn.example.output)}</span>
              </div>
            </div>
          `).join('')}
          ${fns.length < pack.functions ? `<p style="text-align:center;color:var(--color-text-faint);font-size:var(--text-xs);padding:var(--space-4)">+ ${pack.functions - fns.length} more functions</p>` : ''}
        </div>
      </div>

      <!-- Routing -->
      <div class="detail-section">
        <h2>Routing</h2>
        <p style="color:var(--color-text-muted);font-size:var(--text-sm);margin-bottom:var(--space-3)">Nanosistant automatically routes queries to this pack based on:</p>
        <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-bottom:var(--space-3)">
          <span style="font-size:var(--text-xs);color:var(--color-text-faint);font-weight:600;text-transform:uppercase;letter-spacing:0.06em;padding-top:3px">Keywords</span>
          ${pack.tags.map(t => `<span style="padding:3px 10px;background:var(--color-primary-subtle);border:1px solid rgba(0,200,200,0.2);border-radius:var(--radius-full);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-primary)">${t}</span>`).join('')}
        </div>
      </div>

      <!-- Pack.toml Preview -->
      <div class="detail-section">
        <button class="collapsible-toggle" onclick="this.classList.toggle('open');this.nextElementSibling.classList.toggle('open')">
          <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
          pack.toml
        </button>
        <div class="collapsible-content">
          <div class="toml-preview"><span class="section-header">[pack]</span>
<span class="key">name</span> = <span class="string">"${pack.name}"</span>
<span class="key">version</span> = <span class="string">"${pack.version}"</span>
<span class="key">author</span> = <span class="string">"${pack.author}"</span>
<span class="key">tier</span> = <span class="string">"${pack.tier}"</span>
<span class="key">domain</span> = <span class="string">"${pack.domain}"</span>
<span class="key">description</span> = <span class="string">"${pack.description}"</span>
<span class="key">tags</span> = [${pack.tags.map(t => `<span class="string">"${t}"</span>`).join(', ')}]

<span class="section-header">[compatibility]</span>
<span class="key">nanosistant_min</span> = <span class="string">"${pack.version}"</span></div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="detail-sidebar">
      <div class="detail-install-card">
        <h3>Quick Install</h3>
        <div class="detail-install-cmd">
          <span class="prompt">$</span>
          <code>nanosistant install ${pack.name}</code>
          <button class="copy-btn" data-copy="nanosistant install ${pack.name}" aria-label="Copy install command">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          </button>
        </div>
        <p style="font-size:var(--text-xs);color:var(--color-text-faint);margin-top:var(--space-3)">Compatible with Nanosistant ≥ ${pack.version}</p>
      </div>

      <div class="detail-stat-card">
        <div class="detail-stat-grid">
          <div class="detail-stat">
            <div class="value text-teal">${pack.functions}</div>
            <div class="label">Functions</div>
          </div>
          <div class="detail-stat">
            <div class="value ${pack.test_coverage === '100%' ? 'text-green' : ''}" style="${pack.test_coverage !== '100%' ? 'color:var(--color-warning)' : ''}">${pack.test_coverage}</div>
            <div class="label">Test Coverage</div>
          </div>
          <div class="detail-stat">
            <div class="value text-purple">${formatNumber(pack.usage_count)}</div>
            <div class="label">Installs</div>
          </div>
          <div class="detail-stat">
            <div class="value text-teal">${pack.quality_score}</div>
            <div class="label">Quality Score</div>
          </div>
        </div>
      </div>

      <div class="detail-stat-card" style="text-align:center">
        <p style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-3)">Every call costs</p>
        <div style="font-size:var(--text-xl);font-weight:800;color:var(--color-primary)">$0.00</div>
        <p style="font-size:var(--text-xs);color:var(--color-text-faint);margin-top:var(--space-2)">Zero tokens burned. Pure math.</p>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================
// Event Listeners
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  route();

  // Mobile menu
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('nav-links')?.classList.toggle('open');
  });

  // Copy buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;

    let text = btn.dataset.copy;
    if (!text && btn.dataset.copyBlock) {
      const block = document.getElementById(btn.dataset.copyBlock);
      if (block) text = block.textContent;
    }
    if (!text) return;

    navigator.clipboard?.writeText(text).then(() => {
      btn.classList.add('copied');
      const origHTML = btn.innerHTML;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = origHTML;
      }, 2000);
    });
  });

  // Sort tabs
  document.querySelectorAll('.sort-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sort-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSort = tab.dataset.sort;
      renderBrowse();
    });
  });

  // Tier filter
  document.querySelectorAll('[data-filter="tier"]').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('[data-filter="tier"]').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      currentTier = opt.dataset.value;
      renderBrowse();
    });
  });

  // Verified filter
  document.getElementById('verified-only')?.addEventListener('change', (e) => {
    verifiedOnly = e.target.checked;
    renderBrowse();
  });
});

window.addEventListener('hashchange', route);
