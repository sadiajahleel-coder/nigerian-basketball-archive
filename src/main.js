import "./style.css";
import { yearRecords, decades, categoryLabels } from "./data/records.js";

let page = "home";
let state = { decade: "all", category: "all", search: "" };

// ── Router ─────────────────────────────────────────────────
function navigate(newPage, newState = {}) {
  page = newPage;
  if (newState.decade !== undefined) state.decade = newState.decade;
  if (newState.category !== undefined) state.category = newState.category;
  state.search = "";
  render();
  window.scrollTo(0, 0);
}

// ── Data helpers ───────────────────────────────────────────
function getVisible() {
  return yearRecords.filter((yr) => {
    const decOk = state.decade === "all" || yr.decade === Number(state.decade);
    const q = state.search.toLowerCase();
    let catOk = true;
    if (state.category !== "all") {
      catOk = yr.events.some(e => e.category === state.category) ||
        (state.category === "nbbf");
    }
    if (!q) return decOk && catOk;
    const adminText = (yr.administration.board + yr.administration.coaches + yr.administration.notes).toLowerCase();
    const eventsText = yr.events.map(e => e.title + e.detail).join(" ").toLowerCase();
    return decOk && catOk && (adminText.includes(q) || eventsText.includes(q) || String(yr.year).includes(q));
  });
}

function totalEvents() {
  return yearRecords.reduce((sum, yr) => sum + yr.events.length, 0);
}

// ── SVG helpers ────────────────────────────────────────────
function ballSVG(size = 60) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#b85500" stroke="#8c3e00" stroke-width="1.5"/>
    <path d="M50 4 Q66 22 66 50 Q66 78 50 96" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M50 4 Q34 22 34 50 Q34 78 50 96" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M4 50 Q22 34 50 34 Q78 34 96 50" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M4 50 Q22 66 50 66 Q78 66 96 50" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <circle cx="50" cy="50" r="46" fill="none" stroke="#8c3e00" stroke-width="1.5"/>
  </svg>`;
}

function catTag(cat) {
  return `<span class="cat-tag cat--${cat}">${categoryLabels[cat] || cat}</span>`;
}

// ── NAV ────────────────────────────────────────────────────
function navHTML() {
  return `
    <nav class="topnav">
      <div class="topnav__inner">
        <button class="topnav__logo" id="navLogo">
          ${ballSVG(28)}
          <span>Nigeria Basketball Archive</span>
        </button>
        <div class="topnav__links">
          <button class="topnav__link ${page === 'home' ? 'is-active' : ''}" data-nav="home">Home</button>
          <button class="topnav__link ${page === 'records' ? 'is-active' : ''}" data-nav="records">Records</button>
          <button class="topnav__link" data-nav="about">About</button>
        </div>
      </div>
    </nav>`;
}

// ── HOME PAGE ──────────────────────────────────────────────
function homeHTML() {
  const decadeCards = [
    { label: "1960s", value: 1960, desc: "The founding years. NABBA established, first coaches appointed." },
    { label: "1970s", value: 1970, desc: "National expansion. Six zonal coaches. Yugoslav influence." },
    { label: "1980s", value: 1980, desc: "Continental recognition. Nigeria earns AFABA leadership." },
    { label: "1990s", value: 1990, desc: "Premier League launched. Silver medals. Growing ambition." },
    { label: "2000s", value: 2000, desc: "Gold medals. Olympic qualification for the first time." },
    { label: "2010s", value: 2010, desc: "D'Tigers & D'Tigress rise. Olympics. Afrobasket champions." },
    { label: "2020s", value: 2020, desc: "Both D'Tigers and D'Tigress qualify for Tokyo Olympics." },
  ];

  const categoryCards = [
    { value: "nbbf", label: "NBBF Leadership", desc: "Chairmen, Presidents, Secretaries and board members every year.", color: "purple" },
    { value: "tournament", label: "Tournaments", desc: "National League, Sports Festival, Cup competitions and more.", color: "blue" },
    { value: "intl", label: "International", desc: "AfroBasket, Olympics, Commonwealth Games, FIBA events.", color: "red" },
    { value: "milestone", label: "Milestones", desc: "Historic firsts, landmark moments and defining achievements.", color: "green" },
  ];

  return `
    ${navHTML()}

    <section class="home-hero">
      <div class="home-hero__inner">
        <p class="home-hero__eyebrow">Est. 1964 · Compiled by Coach OBJ</p>
        <h1 class="home-hero__title">Nigeria's Basketball History,<br>One Search Away</h1>
        <p class="home-hero__desc">56 years of records documenting every chairman, coach, tournament result, and international competition of Nigerian basketball and the NBBF — from founding to 2020.</p>
        <div class="home-hero__actions">
          <button class="btn-primary" id="browseBtn">Browse Records</button>
          <button class="btn-secondary" id="aboutBtn">About This Archive</button>
        </div>
        <div class="home-hero__stats">
          <div class="hstat"><span class="hstat__num">56</span><span class="hstat__label">Years Documented</span></div>
          <div class="hstat__divider"></div>
          <div class="hstat"><span class="hstat__num">${yearRecords.length}</span><span class="hstat__label">Year Records</span></div>
          <div class="hstat__divider"></div>
          <div class="hstat"><span class="hstat__num">${totalEvents()}</span><span class="hstat__label">Events Recorded</span></div>
          <div class="hstat__divider"></div>
          <div class="hstat"><span class="hstat__num">1964</span><span class="hstat__label">Founded</span></div>
        </div>
      </div>
    </section>

    <section class="home-section">
      <div class="home-section__inner">
        <div class="home-section__head">
          <h2 class="home-section__title">Browse by Decade</h2>
          <p class="home-section__sub">Explore the archive era by era</p>
        </div>
        <div class="decade-cards">
          ${decadeCards.map(d => `
            <button class="decade-card" data-decade="${d.value}">
              <span class="decade-card__year">${d.label}</span>
              <span class="decade-card__desc">${d.desc}</span>
            </button>`).join('')}
        </div>
      </div>
    </section>

    <section class="home-section home-section--alt">
      <div class="home-section__inner">
        <div class="home-section__head">
          <h2 class="home-section__title">Browse by Category</h2>
          <p class="home-section__sub">Find the records that matter to you</p>
        </div>
        <div class="cat-cards">
          ${categoryCards.map(c => `
            <button class="cat-card cat-card--${c.color}" data-category="${c.value}">
              <span class="cat-card__label">${c.label}</span>
              <span class="cat-card__desc">${c.desc}</span>
            </button>`).join('')}
        </div>
      </div>
    </section>

    <section class="home-section">
      <div class="home-section__inner home-about-strip">
        <div class="about-strip__text">
          <h2 class="home-section__title">About This Archive</h2>
          <p>This archive was compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson — who served as Nigeria's National Basketball Coach starting in 1971. It is an upgrade of his original book <em>"25 Years of Basketball in Nigeria 1964–1989"</em>, extended to cover 1964 to 2020.</p>
          <p>Every year contains the complete NBBF board composition, national coaching staff, domestic tournament results, and international competition records.</p>
          <button class="btn-secondary" data-nav="records">Explore All Records</button>
        </div>
        <div class="about-strip__ball">${ballSVG(120)}</div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__logo">Nigeria Basketball Archive</div>
        <p>Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson · 1964–2020 · NBBF</p>
        <p style="margin-top:8px;font-size:11px;opacity:0.5;">Edited &amp; built by <strong>Halima Abdul</strong></p>
      </div>
    </footer>`;
}

// ── RECORDS PAGE ───────────────────────────────────────────
function yearBlockHTML(yr) {
  const hasEvents = yr.events && yr.events.length > 0;
  const hasNotes = yr.administration.notes && yr.administration.notes.trim();
  return `
    <div class="year-block">
      <div class="year-block__header">
        <div class="yb__left">
          <span class="yb__num">${yr.year}</span>
          <div class="yb__pills">
            ${yr.administration.board ? '<span class="yb__pill">Administration</span>' : ''}
            ${hasEvents ? `<span class="yb__pill yb__pill--events">${yr.events.length} event${yr.events.length > 1 ? 's' : ''}</span>` : ''}
          </div>
        </div>
        <button class="yb__toggle" aria-expanded="false">
          <svg class="toggle-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="year-block__body" hidden>
        <div class="yb__section">
          <div class="yb__section-title"><span class="yb__icon">👤</span> Administration</div>
          <div class="yb__section-content">
            ${yr.administration.board ? `<div class="yb__field"><span class="yb__field-label">Board &amp; Leadership</span><p class="yb__field-value">${yr.administration.board}</p></div>` : ''}
            ${yr.administration.coaches ? `<div class="yb__field"><span class="yb__field-label">Coaches &amp; Staff</span><p class="yb__field-value">${yr.administration.coaches}</p></div>` : ''}
            ${hasNotes ? `<div class="yb__field"><span class="yb__field-label">Notes</span><p class="yb__field-value">${yr.administration.notes}</p></div>` : ''}
          </div>
        </div>
        ${hasEvents ? `
        <div class="yb__section yb__section--events">
          <div class="yb__section-title"><span class="yb__icon">🏀</span> Events &amp; Competitions</div>
          <div class="yb__events-list">
            ${yr.events.map(e => `
              <div class="yb__event">
                <div class="yb__event-head">${catTag(e.category)}<span class="yb__event-title">${e.title}</span></div>
                <p class="yb__event-detail">${e.detail}</p>
                ${e.source ? `<p class="yb__event-source">Source: ${e.source}</p>` : ''}
              </div>`).join('')}
          </div>
        </div>` : ''}
      </div>
    </div>`;
}

function recordsHTML() {
  const visible = getVisible();
  const sorted = [...visible].sort((a, b) => b.year - a.year);
  const activeDecadeLabel = decades.find(d => String(d.value) === String(state.decade))?.label || "All Eras";

  return `
    ${navHTML()}
    <div class="records-page">
      <div class="records-page__header">
        <div class="records-page__header-inner">
          <div class="records-breadcrumb">
            <button class="breadcrumb-link" data-nav="home">Home</button>
            <span class="breadcrumb-sep">›</span>
            <span>Records</span>
            ${state.decade !== 'all' ? `<span class="breadcrumb-sep">›</span><span>${activeDecadeLabel}</span>` : ''}
          </div>
          <h1 class="records-page__title">
            ${state.decade !== 'all' ? activeDecadeLabel + ' Records' : 'All Records'}
          </h1>
          <p class="records-page__sub">${visible.length} of ${yearRecords.length} years · click any year to expand</p>
        </div>
      </div>

      <div class="records-controls">
        <div class="records-controls__inner">
          <input class="search-input" type="search" placeholder="Search by year, name, team, event..." value="${state.search}" id="searchInput"/>
          <div class="records-filters">
            ${decades.map(d => `<button class="filter-pill ${state.decade === String(d.value) ? 'is-active' : ''}" data-decade="${d.value}">${d.label}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="records-main">
        <div id="yearBlocks">
          ${sorted.length === 0
            ? '<div class="empty-state">No records match your search.</div>'
            : sorted.map(yr => yearBlockHTML(yr)).join('')}
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__logo">Nigeria Basketball Archive</div>
        <p>Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson · 1964–2020 · NBBF</p>
        <p style="margin-top:8px;font-size:11px;opacity:0.5;">Edited &amp; built by <strong>Halima Abdul</strong></p>
      </div>
    </footer>`;
}

// ── ABOUT PAGE ─────────────────────────────────────────────
function aboutHTML() {
  return `
    ${navHTML()}
    <div class="about-page">
      <div class="about-page__inner">
        <div class="breadcrumb-row">
          <button class="breadcrumb-link" data-nav="home">Home</button>
          <span class="breadcrumb-sep">›</span>
          <span>About</span>
        </div>
        <h1 class="about-page__title">About This Archive</h1>
        <div class="about-page__content">
          <p>This archive was compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson — who served as Nigeria's National Basketball Coach from 1971, making him one of the longest-serving and most influential figures in Nigerian basketball history.</p>
          <p>The archive is an upgrade of Coach OBJ's original publication, <em>"25 Years of Basketball in Nigeria 1964–1989"</em>, extended and updated to cover the full period from 1964 to 2020 — a complete 56-year record of the game in Nigeria.</p>
          <h2>What the Archive Contains</h2>
          <p>For every year from 1964 to 2020, the archive documents:</p>
          <ul>
            <li>The complete NBBF/NABBA board composition — every chairman, president, secretary and member</li>
            <li>National coaching staff and technical personnel</li>
            <li>Domestic tournament results — National League, Sports Festival, Cup competitions</li>
            <li>International competition results — AfroBasket, Olympics, Commonwealth Games, FIBA events</li>
            <li>Youth and university competitions — NUGA, NICEGA, Nestlé-Milo Schools Championship</li>
            <li>Historic milestones and landmark moments</li>
          </ul>
          <h2>The Federation</h2>
          <p>The Nigeria Basketball Federation (NBBF), originally the Nigeria Amateur Basketball Association (NABBA), was founded in 1964. It governs basketball at all levels in Nigeria and is affiliated to FIBA (International Basketball Federation) and the Africa Zone 3.</p>
          <h2>Digital Archive</h2>
          <p>This digital version was edited and built by <strong>Halima Abdul</strong>, making 56 years of Nigerian basketball history publicly accessible for the first time.</p>
          <button class="btn-primary" data-nav="records">Explore the Records</button>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__logo">Nigeria Basketball Archive</div>
        <p>Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson · 1964–2020 · NBBF</p>
        <p style="margin-top:8px;font-size:11px;opacity:0.5;">Edited &amp; built by <strong>Halima Abdul</strong></p>
      </div>
    </footer>`;
}

// ── Render ─────────────────────────────────────────────────
function render() {
  if (page === "home") document.getElementById("app").innerHTML = homeHTML();
  else if (page === "records") document.getElementById("app").innerHTML = recordsHTML();
  else if (page === "about") document.getElementById("app").innerHTML = aboutHTML();
  bindEvents();
}

function updateResults() {
  const visible = getVisible();
  const sorted = [...visible].sort((a, b) => b.year - a.year);
  const countEl = document.querySelector(".records-page__sub");
  if (countEl) countEl.textContent = `${visible.length} of ${yearRecords.length} years · click any year to expand`;
  const container = document.getElementById("yearBlocks");
  if (container) {
    container.innerHTML = sorted.length === 0
      ? '<div class="empty-state">No records match your search.</div>'
      : sorted.map(yr => yearBlockHTML(yr)).join('');
    bindToggles();
  }
}

// ── Toggles ────────────────────────────────────────────────
function bindToggles() {
  document.querySelectorAll(".year-block__header").forEach(header => {
    header.addEventListener("click", () => {
      const block = header.closest(".year-block");
      const body = block.querySelector(".year-block__body");
      const btn = block.querySelector(".yb__toggle");
      const isOpen = !body.hidden;
      body.hidden = isOpen;
      btn.classList.toggle("is-open", !isOpen);
      header.classList.toggle("is-open", !isOpen);
    });
  });
}

// ── Events ─────────────────────────────────────────────────
function bindEvents() {
  // Nav links
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", () => navigate(el.dataset.nav));
  });

  // Logo
  const logo = document.getElementById("navLogo");
  if (logo) logo.addEventListener("click", () => navigate("home"));

  // Home page buttons
  const browseBtn = document.getElementById("browseBtn");
  if (browseBtn) browseBtn.addEventListener("click", () => navigate("records"));
  const aboutBtn = document.getElementById("aboutBtn");
  if (aboutBtn) aboutBtn.addEventListener("click", () => navigate("about"));

  // Decade cards on home
  document.querySelectorAll(".decade-card").forEach(card => {
    card.addEventListener("click", () => navigate("records", { decade: card.dataset.decade }));
  });

  // Category cards on home
  document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => navigate("records", { category: card.dataset.category }));
  });

  // Search on records page
  const searchEl = document.getElementById("searchInput");
  if (searchEl) {
    searchEl.addEventListener("input", e => { state.search = e.target.value; updateResults(); });
  }

  // Decade filter pills on records page
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      state.decade = pill.dataset.decade;
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      updateResults();
    });
  });

  bindToggles();
}

render();