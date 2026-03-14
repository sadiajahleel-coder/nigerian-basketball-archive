import "./style.css";
import { records, decades, categoryLabels } from "./data/records.js";
import { editorialNotes, underlyingIssues, nbbfConstitution } from "./pages.js";

let page = "home";
let state = { decade: "all", search: "" };

function totalEvents() {
  return records.reduce((s, yr) => s + yr.events.length, 0);
}
function decadeCount(val) {
  return records.filter(yr => yr.decade === val).length;
}
function navigate(p, s = {}) {
  page = p;
  if (s.decade !== undefined) state.decade = s.decade;
  state.search = "";
  window.scrollTo(0, 0);
  render();
}
function getVisible() {
  return records.filter(yr => {
    const decOk = state.decade === "all" || yr.decade === Number(state.decade);
    const q = state.search.toLowerCase();
    if (!q) return decOk;
    const txt = (yr.administration.board + yr.administration.coaches + yr.administration.notes + yr.events.map(e => e.title + e.detail).join(" ")).toLowerCase();
    return decOk && (txt.includes(q) || String(yr.year).includes(q));
  });
}

function nav() {
  return `<nav class="nav">
    <div class="nav__inner">
      <button class="nav__brand" data-nav="home">Nigeria Basketball Archive</button>
      <div class="nav__links">
        <button class="nav__link ${page==="home"?"active":""}" data-nav="home">Home</button>
        <button class="nav__link ${page==="records"?"active":""}" data-nav="records">Records</button>
        <button class="nav__link ${page==="analysis"?"active":""}" data-nav="analysis">Analysis</button>
        <button class="nav__link ${page==="constitution"?"active":""}" data-nav="constitution">Constitution</button>
        <button class="nav__link ${page==="about"?"active":""}" data-nav="about">About</button>
      </div>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">Nigeria Basketball Archive</div>
      <div class="footer__text">Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson · 1964–2020 · NBBF<br>Edited &amp; built by <strong>Halima Abdul</strong></div>
    </div>
  </footer>`;
}

function crumb(label) {
  return `<div class="rp-crumb">
    <button class="rp-crumb__link" data-nav="home">Home</button>
    <span class="rp-crumb__sep">›</span>
    <span class="rp-crumb__current">${label}</span>
  </div>`;
}

// ── HOME ──────────────────────────────────────────────────
function homePage() {
  const decadeList = [
    {v:1960,l:"1960s"},{v:1970,l:"1970s"},{v:1980,l:"1980s"},{v:1990,l:"1990s"},
    {v:2000,l:"2000s"},{v:2010,l:"2010s"},{v:2020,l:"2020s"}
  ];
  return `
  ${nav()}
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__left">
        <p class="hero__label">Nigerian Basketball Federation · Est. 1964</p>
        <h1 class="hero__title">56 Years of Nigerian Basketball, <em>Documented.</em></h1>
        <p class="hero__desc">The complete record of every chairman, coach, tournament, and international competition in Nigerian basketball history — from the founding of NABBA in 1964 to 2020.</p>
        <div class="hero__search">
          <input class="hero__search-input" id="heroSearch" type="search" placeholder="Search a year, name, team or event…" autocomplete="off"/>
          <button class="hero__search-btn" id="heroSearchBtn">Search</button>
        </div>
      </div>
      <div class="hero__right">
        <p class="hero__stats-title">Archive at a glance</p>
        <div class="hero__stat"><div class="hero__stat-num">56</div><div class="hero__stat-label">Years Covered</div></div>
        <div class="hero__stat"><div class="hero__stat-num">${records.length}</div><div class="hero__stat-label">Year Records</div></div>
        <div class="hero__stat"><div class="hero__stat-num">${totalEvents()}</div><div class="hero__stat-label">Events Recorded</div></div>
        <div class="hero__stat"><div class="hero__stat-num">NBBF</div><div class="hero__stat-label">Federation</div></div>
      </div>
    </div>
  </div>

  <div class="home-body">
    <div class="section-rule">
      <span class="section-rule__title">Browse by Era</span>
      <div class="section-rule__line"></div>
      <button class="section-rule__link" data-nav="records">View all records →</button>
    </div>
    <div class="decade-grid">
      ${decadeList.map(d => `
        <button class="decade-tile" data-decade="${d.v}">
          <span class="decade-tile__year">${d.l}</span>
          <span class="decade-tile__count">${decadeCount(d.v)} years</span>
        </button>`).join("")}
    </div>

    <div class="section-rule">
      <span class="section-rule__title">Browse by Category</span>
      <div class="section-rule__line"></div>
    </div>
    <div class="feature-strip">
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--green">👤</div>
        <div class="feature-item__title">NBBF Leadership</div>
        <div class="feature-item__desc">Every chairman, president, secretary and board member, year by year from 1964.</div>
        <div class="feature-item__count">56 years of boards →</div>
      </div>
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--orange">🏆</div>
        <div class="feature-item__title">Tournaments</div>
        <div class="feature-item__desc">National League, Sports Festival, Premier League, Cup competitions and more.</div>
        <div class="feature-item__count">Explore tournaments →</div>
      </div>
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--blue">🌍</div>
        <div class="feature-item__title">International</div>
        <div class="feature-item__desc">AfroBasket, Olympics, Commonwealth Games, FIBA — Nigeria on the world stage.</div>
        <div class="feature-item__count">Explore international →</div>
      </div>
      <div class="feature-item" data-nav="analysis">
        <div class="feature-item__icon feature-item__icon--red">📋</div>
        <div class="feature-item__title">Analysis & Notes</div>
        <div class="feature-item__desc">Editorial notes on governance, coaching tenure, and the underlying issues in Nigerian basketball.</div>
        <div class="feature-item__count">Read analysis →</div>
      </div>
    </div>

    <div class="section-rule">
      <span class="section-rule__title">More from the Archive</span>
      <div class="section-rule__line"></div>
    </div>
    <div class="feature-strip">
      <div class="feature-item" data-nav="analysis">
        <div class="feature-item__icon feature-item__icon--orange">📝</div>
        <div class="feature-item__title">The Underlying Issues</div>
        <div class="feature-item__desc">A frank account of the politics that shaped the NBBF — from U.K. Umar through Tijjani Umar to Musa Kida.</div>
        <div class="feature-item__count">Read the full account →</div>
      </div>
      <div class="feature-item" data-nav="constitution">
        <div class="feature-item__icon feature-item__icon--green">⚖️</div>
        <div class="feature-item__title">NBBF Constitution</div>
        <div class="feature-item__desc">The full constitution of the Nigeria Basketball Federation — all 18 articles.</div>
        <div class="feature-item__count">Read the constitution →</div>
      </div>
      <div class="feature-item" data-nav="about">
        <div class="feature-item__icon feature-item__icon--blue">ℹ️</div>
        <div class="feature-item__title">About This Archive</div>
        <div class="feature-item__desc">Compiled by Coach OBJ — Oliver B. Johnson — Nigeria's National Basketball Coach from 1971.</div>
        <div class="feature-item__count">Read about the archive →</div>
      </div>
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--red">📅</div>
        <div class="feature-item__title">Milestones</div>
        <div class="feature-item__desc">Historic firsts, landmark moments and the defining achievements of Nigerian basketball.</div>
        <div class="feature-item__count">Explore milestones →</div>
      </div>
    </div>

    <div class="about-strip">
      <div>
        <div class="about-strip__title">Compiled by Coach OBJ</div>
        <div class="about-strip__text">This archive was compiled by Oliver B. Johnson — Coach OBJ — Nigeria's National Basketball Coach from 1971. It documents the full 56-year history of the game in Nigeria, from the founding of NABBA to 2020. Edited and built by Halima Abdul.</div>
      </div>
      <button class="about-strip__btn" data-nav="about">Read More</button>
    </div>
  </div>
  ${footer()}`;
}

// ── RECORDS ───────────────────────────────────────────────
function badge(cat) {
  return `<span class="badge badge--${cat}">${categoryLabels[cat]||cat}</span>`;
}

function yearBlock(yr) {
  const hasEv = yr.events && yr.events.length > 0;
  const hasNotes = yr.administration.notes && yr.administration.notes.trim();
  return `
  <div class="yb">
    <div class="yb__head">
      <div class="yb__left">
        <span class="yb__year">${yr.year}</span>
        <div class="yb__tags">
          ${yr.administration.board ? '<span class="yb__tag yb__tag--admin">Administration</span>' : ""}
          ${hasEv ? `<span class="yb__tag yb__tag--events">${yr.events.length} event${yr.events.length>1?"s":""}</span>` : ""}
        </div>
      </div>
      <button class="yb__btn">
        <svg class="yb__chevron" width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="yb__body">
      <div class="yb__section">
        <div class="yb__section-label">Administration</div>
        ${yr.administration.board ? `<div class="yb__field"><span class="yb__field-label">Board &amp; Leadership</span><p class="yb__field-value">${yr.administration.board}</p></div>` : ""}
        ${yr.administration.coaches ? `<div class="yb__field"><span class="yb__field-label">Coaches &amp; Staff</span><p class="yb__field-value">${yr.administration.coaches}</p></div>` : ""}
        ${hasNotes ? `<div class="yb__field"><span class="yb__field-label">Notes</span><p class="yb__field-value">${yr.administration.notes}</p></div>` : ""}
      </div>
      ${hasEv ? `
      <div class="yb__section yb__section--events">
        <div class="yb__section-label">Events &amp; Competitions</div>
        <div class="yb__events">
          ${yr.events.map(e => `
            <div class="yb__event">
              <div class="yb__event-top">${badge(e.category)}<span class="yb__event-title">${e.title}</span></div>
              <p class="yb__event-detail">${e.detail}</p>
              ${e.source ? `<p class="yb__event-source">Source: ${e.source}</p>` : ""}
            </div>`).join("")}
        </div>
      </div>` : ""}
    </div>
  </div>`;
}

function recordsPage() {
  const visible = getVisible();
  const sorted = [...visible].sort((a,b) => b.year - a.year);
  const label = decades.find(d => String(d.value) === String(state.decade))?.label || "All Records";
  return `
  ${nav()}
  <div class="rp-header">
    <div class="rp-header__inner">
      ${crumb("Records")}
      <h1 class="rp-header__title">${state.decade !== "all" ? label : "All Records"}</h1>
    </div>
  </div>
  <div class="rp-controls">
    <div class="rp-controls__inner">
      <input class="rp-search" id="rpSearch" type="search" placeholder="Search by year, name, team or event…" value="${state.search}" autocomplete="off"/>
      <div class="rp-filters">
        ${decades.map(d => `<button class="rp-pill ${state.decade===String(d.value)?"active":""}" data-decade="${d.value}">${d.label}</button>`).join("")}
      </div>
    </div>
  </div>
  <div class="rp-main">
    <p class="rp-count" id="rpCount">Showing <strong>${visible.length}</strong> of <strong>${records.length}</strong> years — click any row to expand</p>
    <div id="ybContainer">
      ${sorted.length === 0 ? '<div class="empty-state">No records match your search.</div>' : sorted.map(yearBlock).join("")}
    </div>
  </div>
  ${footer()}`;
}

// ── ANALYSIS ─────────────────────────────────────────────
function analysisPage() {
  return `
  ${nav()}
  <div class="rp-header">
    <div class="rp-header__inner">
      ${crumb("Analysis & Notes")}
      <h1 class="rp-header__title">Analysis &amp; Editorial Notes</h1>
    </div>
  </div>
  <div class="long-form">

    <div class="lf-note">
      <h2 class="lf-note__title">${editorialNotes.governanceNote.title}</h2>
      <div class="lf-note__body">${editorialNotes.governanceNote.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
    </div>

    <div class="lf-note">
      <h2 class="lf-note__title">${editorialNotes.coachesNote.title}</h2>
      <div class="lf-note__body"><p>${editorialNotes.coachesNote.content}</p></div>
    </div>

    <div class="lf-note">
      <h2 class="lf-note__title">${editorialNotes.internationalOrgs.title}</h2>
      <ul class="lf-list">
        ${editorialNotes.internationalOrgs.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>

    <div class="lf-divider"></div>

    <div class="lf-essay">
      <h2 class="lf-essay__title">${underlyingIssues.title}</h2>
      ${underlyingIssues.sections.map(s => `
        <div class="lf-essay__section">
          <h3 class="lf-essay__heading">${s.heading}</h3>
          ${s.text.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>`).join('')}
    </div>

  </div>
  ${footer()}`;
}

// ── CONSTITUTION ─────────────────────────────────────────
function constitutionPage() {
  return `
  ${nav()}
  <div class="rp-header">
    <div class="rp-header__inner">
      ${crumb("Constitution")}
      <h1 class="rp-header__title">NBBF Constitution</h1>
    </div>
  </div>
  <div class="long-form">
    <div class="lf-note">
      <h2 class="lf-note__title">Preamble</h2>
      <div class="lf-note__body"><p>${nbbfConstitution.preamble}</p></div>
    </div>
    ${nbbfConstitution.articles.map(a => `
      <div class="lf-article">
        <div class="lf-article__num">${a.number}</div>
        <div class="lf-article__body">
          <h3 class="lf-article__title">${a.title}</h3>
          ${a.content.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
        </div>
      </div>`).join('')}
  </div>
  ${footer()}`;
}

// ── ABOUT ────────────────────────────────────────────────
function aboutPage() {
  return `
  ${nav()}
  <div class="about-page">
    <div class="about-crumb">
      <button class="about-crumb__link" data-nav="home">Home</button>
      <span class="about-crumb__sep">›</span>
      <span style="font-size:12px;color:var(--ink-light)">About</span>
    </div>
    <h1 class="about-page__title">About This Archive</h1>
    <p>This archive was compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson — who served as Nigeria's National Basketball Coach from 1971, making him one of the longest-serving and most influential figures in Nigerian basketball history.</p>
    <p>It is an upgrade of his original book, <em>"25 Years of Basketball in Nigeria 1964–1989"</em>, extended to cover the full period 1964 to 2020.</p>
    <h2>What the Archive Contains</h2>
    <p>For every year from 1964 to 2020:</p>
    <ul>
      <li>Complete NBBF/NABBA board — every chairman, president, secretary and member</li>
      <li>National coaching staff and technical personnel</li>
      <li>Domestic tournament results — National League, Sports Festival, Cup competitions</li>
      <li>International results — AfroBasket, Olympics, Commonwealth Games, FIBA events</li>
      <li>Youth and university competitions — NUGA, NICEGA, Nestlé-Milo Schools Championship</li>
      <li>Historic milestones and landmark moments</li>
    </ul>
    <h2>Analysis & Commentary</h2>
    <p>The archive also includes editorial notes on how NABBA/NBBF leadership was constituted from 1964 to the present, a frank account of the underlying political issues that shaped the federation over the decades, and the full NBBF Constitution.</p>
    <h2>The Federation</h2>
    <p>The Nigeria Basketball Federation (NBBF), originally the Nigeria Amateur Basketball Association (NABBA), was founded in 1964. It governs basketball at all levels in Nigeria and is affiliated to FIBA and Africa Zone 3.</p>
    <h2>Digital Archive</h2>
    <p>This digital version was edited and built by <strong>Halima Abdul</strong>, making 56 years of Nigerian basketball history publicly accessible.</p>
    <button class="about-page__btn" data-nav="records">Explore the Records</button>
  </div>
  ${footer()}`;
}

// ── RENDER ───────────────────────────────────────────────
function render() {
  const app = document.getElementById("app");
  if (page === "home") app.innerHTML = homePage();
  else if (page === "records") app.innerHTML = recordsPage();
  else if (page === "analysis") app.innerHTML = analysisPage();
  else if (page === "constitution") app.innerHTML = constitutionPage();
  else if (page === "about") app.innerHTML = aboutPage();
  bindEvents();
}

function rebuildRecords() {
  const visible = getVisible();
  const sorted = [...visible].sort((a,b) => b.year - a.year);
  const count = document.getElementById("rpCount");
  if (count) count.innerHTML = `Showing <strong>${visible.length}</strong> of <strong>${records.length}</strong> years — click any row to expand`;
  const container = document.getElementById("ybContainer");
  if (container) {
    container.innerHTML = sorted.length === 0
      ? '<div class="empty-state">No records match your search.</div>'
      : sorted.map(yearBlock).join("");
    bindToggles();
  }
}

function bindToggles() {
  document.querySelectorAll(".yb__head").forEach(head => {
    head.addEventListener("click", () => {
      const yb = head.closest(".yb");
      const body = yb.querySelector(".yb__body");
      const btn = yb.querySelector(".yb__btn");
      const isOpen = body.classList.contains("open");
      body.classList.toggle("open", !isOpen);
      btn.classList.toggle("open", !isOpen);
      head.classList.toggle("open", !isOpen);
    });
  });
}

function bindEvents() {
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", () => navigate(el.dataset.nav));
  });
  document.querySelectorAll(".decade-tile").forEach(t => {
    t.addEventListener("click", () => navigate("records", { decade: t.dataset.decade }));
  });
  const heroSearch = document.getElementById("heroSearch");
  const heroBtn = document.getElementById("heroSearchBtn");
  if (heroBtn && heroSearch) {
    heroBtn.addEventListener("click", () => { state.search = heroSearch.value; navigate("records"); });
    heroSearch.addEventListener("keydown", e => { if (e.key === "Enter") { state.search = heroSearch.value; navigate("records"); } });
  }
  const rpSearch = document.getElementById("rpSearch");
  if (rpSearch) {
    rpSearch.addEventListener("input", e => { state.search = e.target.value; rebuildRecords(); });
  }
  document.querySelectorAll(".rp-pill").forEach(p => {
    p.addEventListener("click", () => {
      state.decade = p.dataset.decade;
      document.querySelectorAll(".rp-pill").forEach(x => x.classList.remove("active"));
      p.classList.add("active");
      rebuildRecords();
    });
  });
  bindToggles();
}

render();
