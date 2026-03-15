import "./style.css";
import { records, decades, categoryLabels } from "./data/records.js";
import { editorialNotes, underlyingIssues, nbbfConstitution } from "./pages.js";

let page = "home";
let state = { decade: "all", search: "" };
let hasAccess = false;

function checkAccess() {
  try {
    hasAccess = sessionStorage.getItem("nba_access") === "granted";
  } catch(e) {
    hasAccess = false;
  }
}
function grantAccess() {
  try { sessionStorage.setItem("nba_access", "granted"); } catch(e) {}
  hasAccess = true;
}
checkAccess();

// Browser history support
function pushHistory(p, s) {
  const params = new URLSearchParams();
  params.set("page", p);
  if (s.decade && s.decade !== "all") params.set("decade", s.decade);
  if (s.search) params.set("search", s.search);
  history.pushState({ page: p, state: s }, "", "?" + params.toString());
}

window.addEventListener("popstate", (e) => {
  if (e.state) {
    page = e.state.page;
    state = { decade: "all", search: "", ...e.state.state };
  } else {
    page = "home";
    state = { decade: "all", search: "" };
  }
  render();
  window.scrollTo(0, 0);
});

function totalEvents() {
  return records.reduce((s, yr) => s + yr.events.length, 0);
}
function decadeCount(val) {
  return records.filter(yr => yr.decade === val).length;
}
const protectedPages = ["records", "analysis", "constitution", "about", "contribute"];

function navigate(p, s = {}) {
  if (protectedPages.includes(p) && !hasAccess) {
    page = "signup";
    pushHistory("signup", {});
    window.scrollTo(0, 0);
    render();
    return;
  }
  page = p;
  if (s.decade !== undefined) state.decade = s.decade;
  if (s.search !== undefined) state.search = s.search;
  else state.search = "";
  pushHistory(p, { decade: state.decade, search: state.search });
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
        <button class="nav__link ${page==="contribute"?"active":""}" data-nav="contribute">Contribute</button>
        <button class="nav__link ${page==="contribute"?"active":""}" data-nav="contribute">Contribute</button>
        <button class="nav__link nav__link--cta ${page==="signup"?"active":""}" data-nav="signup">Request Access</button>
      </div>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">Nigeria Basketball Archive</div>
      <div class="footer__text">Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson · 1964–2020 · NBBF</div>
      <div class="footer__credit">Edited &amp; Built by <strong>Halima Abdul</strong></div>
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
        <p class="hero__label">NBBF — Nigeria Basketball Federation · Est. 1964</p>
        <h1 class="hero__title">56 Years of Nigerian Basketball, <em>Documented.</em></h1>
        <p class="hero__desc">The complete record of every chairman, coach, tournament, and international competition in Nigerian basketball history — from the founding of NABBA in 1964 to 2020.</p>
        <div class="hero__search">
          <input class="hero__search-input" id="heroSearch" type="search" placeholder="Search a year, name, team or event…" autocomplete="off"/>
          <button class="hero__search-btn" id="heroSearchBtn">Search</button>
        </div>
      </div>
      <div class="hero__right">
        <p class="hero__stats-title">Nigeria Basketball Federation (NBBF)</p>
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

    <div class="section-rule">
      <span class="section-rule__title">Contribute to the Archive</span>
      <div class="section-rule__line"></div>
    </div>
    <div class="contribute-section">
      <div class="contribute-section__left">
        <p class="contribute-section__intro">This archive is a living document. If you were part of Nigerian basketball — as a player, coach, official, journalist or fan — your records, photographs and stories belong here. Every contribution is reviewed, verified and credited by name.</p>
        <div class="contribute-ways">
          <div class="contribute-way">
            <div class="contribute-way__icon">📄</div>
            <div>
              <div class="contribute-way__title">Missing Records</div>
              <div class="contribute-way__desc">Fill gaps in years with incomplete data — board members, coaches, tournament results.</div>
            </div>
          </div>
          <div class="contribute-way">
            <div class="contribute-way__icon">✏️</div>
            <div>
              <div class="contribute-way__title">Corrections</div>
              <div class="contribute-way__desc">Flag errors in existing records and provide the correct information with a source.</div>
            </div>
          </div>
          <div class="contribute-way">
            <div class="contribute-way__icon">📷</div>
            <div>
              <div class="contribute-way__title">Photos & Documents</div>
              <div class="contribute-way__desc">Newspaper clippings, match photographs, official documents and programmes.</div>
            </div>
          </div>
          <div class="contribute-way">
            <div class="contribute-way__icon">🎙️</div>
            <div>
              <div class="contribute-way__title">Personal Testimony</div>
              <div class="contribute-way__desc">Your own story in Nigerian basketball — first-hand accounts from those who were there.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contribute-section__right">
        <div class="contribute-cta-card">
          <h3 class="contribute-cta-card__title">What We Need Most</h3>
          <ul class="contribute-cta-card__list">
            <li>Records from the early years — 1964 to 1979</li>
            <li>State-level tournament results</li>
            <li>Newspaper clippings and match photos</li>
            <li>First-hand accounts from players and coaches</li>
            <li>Photos of NBBF board meetings and ceremonies</li>
          </ul>
          <button class="contribute-cta-card__btn" data-nav="contribute">Submit a Contribution</button>
          <p class="contribute-cta-card__note">All contributors are credited by name in the archive.</p>
        </div>
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

function formatBoardText(text) {
  if (!text) return "";
  // Split on patterns like "Label: value." or "Label: value then value."
  // Matches things like "President:", "Zonal Representatives:", etc.
  const lines = text.split(/(?=[A-Z][A-Za-z\s\/\-&()]+:\s)/);
  const items = lines.map(line => line.trim()).filter(Boolean);
  if (items.length <= 1) {
    return `<p class="yb__field-value">${text}</p>`;
  }
  return `<ul class="board-list">${items.map(item => {
    const colonIdx = item.indexOf(":");
    if (colonIdx === -1) return `<li class="board-list__item"><span class="board-list__val">${item}</span></li>`;
    const label = item.slice(0, colonIdx).trim();
    const val = item.slice(colonIdx + 1).trim().replace(/\.\s*$/, "");
    return `<li class="board-list__item"><span class="board-list__label">${label}:</span> <span class="board-list__val">${val}</span></li>`;
  }).join("")}</ul>`;
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
        ${yr.administration.board ? `<div class="yb__field"><span class="yb__field-label">Board &amp; Leadership</span>${formatBoardText(yr.administration.board)}</div>` : ""}
        ${yr.administration.coaches ? `<div class="yb__field"><span class="yb__field-label">Coaches &amp; Staff</span>${formatBoardText(yr.administration.coaches)}</div>` : ""}
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

// ── LANDING (no access) ──────────────────────────────────
function landingPage() {
  return `
  <div class="landing">
    <div class="landing__hero">
      <div class="landing__hero-inner">
        <p class="landing__eyebrow">NBBF — Nigeria Basketball Federation · Est. 1964</p>
        <h1 class="landing__title">Nigeria Basketball Archive</h1>
        <p class="landing__subtitle">56 Years of Records. <em>Documented.</em></p>
        <p class="landing__desc">The complete record of every chairman, coach, tournament result, and international competition in Nigerian basketball history — from the founding of NABBA in 1964 to 2020. Compiled by Coach OBJ — Oliver B. Johnson. Edited and built by Halima Abdul.</p>
        <div class="landing__cta-group">
          <button class="landing__cta" id="landingCta">Request Access</button>
          <button class="landing__cta landing__cta--outline" id="landingContribute">Contribute to the Archive</button>
        </div>
        <p class="landing__credit">Edited &amp; Built by <strong>Halima Abdul</strong></p>
      </div>
      <div class="landing__stats">
        <div class="landing__stat"><span class="landing__stat-num">56</span><span class="landing__stat-label">Years Documented</span></div>
        <div class="landing__stat"><span class="landing__stat-num">57</span><span class="landing__stat-label">Year Records</span></div>
        <div class="landing__stat"><span class="landing__stat-num">340+</span><span class="landing__stat-label">Events Recorded</span></div>
        <div class="landing__stat"><span class="landing__stat-num">1964</span><span class="landing__stat-label">Founded</span></div>
      </div>
    </div>
    <div class="landing__teaser">
      <div class="landing__teaser-inner">
        <h2 class="landing__teaser-title">What the Archive Contains</h2>
        <div class="landing__teaser-grid">
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">👤</div>
            <div class="landing__teaser-label">NBBF Leadership</div>
            <div class="landing__teaser-desc">Every chairman, president, secretary and board member — year by year from 1964.</div>
          </div>
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">🏆</div>
            <div class="landing__teaser-label">Tournaments</div>
            <div class="landing__teaser-desc">National League, Sports Festival, Premier League and all Cup competitions.</div>
          </div>
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">🌍</div>
            <div class="landing__teaser-label">International</div>
            <div class="landing__teaser-desc">AfroBasket, Olympics, Commonwealth Games and all FIBA events.</div>
          </div>
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">📋</div>
            <div class="landing__teaser-label">Analysis</div>
            <div class="landing__teaser-desc">Editorial notes and a frank account of the politics that shaped Nigerian basketball.</div>
          </div>
        </div>
        <div class="landing__teaser-cta">
          <p>Access is free. Submit your details to get in.</p>
          <button class="landing__cta landing__cta--dark" id="landingCta2">Request Access Now</button>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">Nigeria Basketball Archive</div>
        <div class="footer__text">Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson · 1964–2020 · NBBF</div>
        <div class="footer__credit">Edited &amp; Built by <strong>Halima Abdul</strong></div>
      </div>
    </footer>
  </div>`;
}

// ── SIGNUP ───────────────────────────────────────────────
const FORM_URL = "https://script.google.com/macros/s/AKfycbxDj3PDbK6nLQkK0HnoTaFv8H7cVSqMmwe16eb3nY3UoKj8BJq9A2mR-cz2z73DHTNd/exec";
const CONTRIB_URL = "https://script.google.com/macros/s/AKfycbxDj3PDbK6nLQkK0HnoTaFv8H7cVSqMmwe16eb3nY3UoKj8BJq9A2mR-cz2z73DHTNd/exec";

function signupPage() {
  return `
  ${nav()}
  <div class="signup-page">
    <div class="signup-page__inner">
      ${crumb("Request Access")}
      <h1 class="signup-page__title">Request Access to the Archive</h1>
      <p class="signup-page__sub">The Nigeria Basketball Archive contains 56 years of records documenting every chairman, coach, tournament and international competition of the NBBF. Complete the form below to request full access.</p>

      <div class="signup-form-wrap">
        <form class="signup-form" id="signupForm" novalidate>
          <div class="sf-group">
            <label class="sf-label" for="sf-name">Full Name <span class="sf-required">*</span></label>
            <input class="sf-input" id="sf-name" type="text" placeholder="e.g. Emeka Okafor" autocomplete="name" required/>
            <span class="sf-error" id="err-name">Please enter your full name.</span>
          </div>
          <div class="sf-group">
            <label class="sf-label" for="sf-email">Email Address <span class="sf-required">*</span></label>
            <input class="sf-input" id="sf-email" type="email" placeholder="e.g. emeka@example.com" autocomplete="email" required/>
            <span class="sf-error" id="err-email">Please enter a valid email address.</span>
          </div>
          <div class="sf-group">
            <label class="sf-label" for="sf-org">Organisation / Club <span class="sf-required">*</span></label>
            <input class="sf-input" id="sf-org" type="text" placeholder="e.g. Kano Pillars, NBBF, University of Lagos" required/>
            <span class="sf-error" id="err-org">Please enter your organisation or club.</span>
          </div>
          <div class="sf-group">
            <label class="sf-label" for="sf-role">Role in Basketball <span class="sf-required">*</span></label>
            <select class="sf-input sf-select" id="sf-role" required>
              <option value="">— Select your role —</option>
              <option value="Player">Player</option>
              <option value="Coach">Coach</option>
              <option value="Referee / Official">Referee / Official</option>
              <option value="Administrator / Federation Official">Administrator / Federation Official</option>
              <option value="Journalist / Media">Journalist / Media</option>
              <option value="Researcher / Academic">Researcher / Academic</option>
              <option value="Fan / Supporter">Fan / Supporter</option>
              <option value="Other">Other</option>
            </select>
            <span class="sf-error" id="err-role">Please select your role.</span>
          </div>

          <div class="sf-submit-row">
            <button class="sf-submit" type="submit" id="sf-submit-btn">
              <span id="sf-btn-text">Submit Request</span>
              <span id="sf-btn-loading" style="display:none">Submitting…</span>
            </button>
          </div>

          <div class="sf-success" id="sf-success" style="display:none">
            <div class="sf-success__icon">✓</div>
            <h3 class="sf-success__title">Request Received</h3>
            <p class="sf-success__msg">Thank you for your interest in the Nigeria Basketball Archive. Your request has been recorded and you will be contacted shortly.</p>
            <button class="sf-success__back" data-nav="home">Back to Home</button>
          </div>

          <div class="sf-error-general" id="sf-error-general" style="display:none">
            Something went wrong. Please try again or contact us directly.
          </div>
        </form>

        <div class="signup-info">
          <div class="signup-info__block">
            <h3 class="signup-info__title">What you get access to</h3>
            <ul class="signup-info__list">
              <li>Complete NBBF/NABBA board records 1964–2020</li>
              <li>National coaching staff every year</li>
              <li>All domestic tournament results</li>
              <li>Full international competition records</li>
              <li>The Underlying Issues — political analysis</li>
              <li>Full NBBF Constitution</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Compiled by</h3>
            <p class="signup-info__text"><strong>Coach OBJ</strong> — Oliver B. Johnson, Nigeria's National Basketball Coach from 1971. This archive is an upgrade of his original book <em>"25 Years of Basketball in Nigeria 1964–1989"</em>.</p>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Edited &amp; Built by</h3>
            <p class="signup-info__text"><strong>Halima Abdul</strong> — digitised and built this archive for public access, making 56 years of Nigerian basketball history available online for the first time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}`;
}


// ── CONTRIBUTE ────────────────────────────────────────────
function contributePage() {
  return `
  ${nav()}
  <div class="signup-page">
    <div class="signup-page__inner">
      ${crumb("Contribute")}
      <h1 class="signup-page__title">Contribute to the Archive</h1>
      <p class="signup-page__sub">This archive is a living document. If you have records, photographs, corrections or a personal story from Nigerian basketball history, we want to hear from you. All contributions are reviewed by the editorial team before being added.</p>

      <div class="signup-form-wrap">
        <form class="signup-form" id="contribForm" novalidate>

          <div class="sf-group">
            <label class="sf-label" for="cf-name">Your Name <span class="sf-required">*</span></label>
            <input class="sf-input" id="cf-name" type="text" placeholder="e.g. Emeka Okafor" required/>
            <span class="sf-error" id="cerr-name">Please enter your name.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-email">Email Address <span class="sf-required">*</span></label>
            <input class="sf-input" id="cf-email" type="email" placeholder="e.g. emeka@example.com" required/>
            <span class="sf-error" id="cerr-email">Please enter a valid email address.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-type">Type of Contribution <span class="sf-required">*</span></label>
            <select class="sf-input sf-select" id="cf-type" required>
              <option value="">— Select contribution type —</option>
              <option value="Missing Record">Missing Record — fill a gap in the archive</option>
              <option value="Correction">Correction — fix an error in existing records</option>
              <option value="Photo / Document">Photo or Document — newspaper clipping, match photo, official document</option>
              <option value="Personal Testimony">Personal Testimony — your own story in Nigerian basketball</option>
            </select>
            <span class="sf-error" id="cerr-type">Please select a contribution type.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-year">Year (if applicable)</label>
            <input class="sf-input" id="cf-year" type="text" placeholder="e.g. 1995 or 1990–1995"/>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-details">Details <span class="sf-required">*</span></label>
            <textarea class="sf-input sf-textarea" id="cf-details" rows="6" placeholder="Describe your contribution in as much detail as possible. For missing records, include names, dates, results and sources where available. For corrections, describe what is wrong and what the correct information is." required></textarea>
            <span class="sf-error" id="cerr-details">Please provide details of your contribution.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-link">Photo / File Link (if applicable)</label>
            <input class="sf-input" id="cf-link" type="url" placeholder="Google Drive, Dropbox or any public link to your file"/>
            <p class="sf-hint">Upload your photo or document to Google Drive, set sharing to "Anyone with the link", then paste the link here.</p>
          </div>

          <div class="sf-submit-row">
            <button class="sf-submit" type="submit" id="cf-submit-btn">
              <span id="cf-btn-text">Submit Contribution</span>
              <span id="cf-btn-loading" style="display:none">Submitting…</span>
            </button>
          </div>

          <div class="sf-success" id="cf-success" style="display:none">
            <div class="sf-success__icon">✓</div>
            <h3 class="sf-success__title">Contribution Received</h3>
            <p class="sf-success__msg">Thank you for contributing to the Nigeria Basketball Archive. Your submission has been recorded and will be reviewed by the editorial team. You will be acknowledged in the archive if your contribution is included.</p>
            <button class="sf-success__back" data-nav="records">Back to Records</button>
          </div>

          <div class="sf-error-general" id="cf-error-general" style="display:none">
            Something went wrong. Please try again.
          </div>

        </form>

        <div class="signup-info">
          <div class="signup-info__block">
            <h3 class="signup-info__title">What we need</h3>
            <ul class="signup-info__list">
              <li>Board compositions for years with gaps</li>
              <li>Tournament results not in the archive</li>
              <li>Newspaper clippings or match programmes</li>
              <li>Team photographs from any era</li>
              <li>Official NBBF documents</li>
              <li>Personal accounts and testimonies</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Years with gaps</h3>
            <ul class="signup-info__list">
              <li>1970 — no events recorded</li>
              <li>1972 — no events recorded</li>
              <li>1974 — no events recorded</li>
              <li>1976 — no events recorded</li>
              <li>1978 — no events recorded</li>
              <li>1984 — no events recorded</li>
              <li>1985 — no events recorded</li>
              <li>1987 — no events recorded</li>
              <li>1993 — no events recorded</li>
              <li>2003 — no events recorded</li>
              <li>2015 — no events recorded</li>
              <li>2018 — no events recorded</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Acknowledgement</h3>
            <p class="signup-info__text">All contributors whose submissions are included in the archive will be acknowledged by name. This archive exists because of people who care about Nigerian basketball history.</p>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Edited &amp; Built by</h3>
            <p class="signup-info__text"><strong>Halima Abdul</strong> — digitised and built this archive for public access, making 56 years of Nigerian basketball history available online for the first time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}`;
}

// ── CONTRIBUTE ───────────────────────────────────────────
function contributePage() {
  return `
  ${nav()}
  <div class="signup-page">
    <div class="signup-page__inner">
      ${crumb("Contribute")}
      <h1 class="signup-page__title">Contribute to the Archive</h1>
      <p class="signup-page__sub">This archive is a living document. If you have missing records, corrections, photographs, newspaper clippings, or a personal story from Nigerian basketball, we want to hear from you. Every contribution is reviewed and credited.</p>

      <div class="signup-form-wrap">
        <form class="signup-form" id="contributeForm" novalidate>

          <div class="sf-group">
            <label class="sf-label" for="cf-type">Type of Contribution <span class="sf-required">*</span></label>
            <select class="sf-input sf-select" id="cf-type" required>
              <option value="">— Select contribution type —</option>
              <option value="Missing Record">Missing Record — fill a gap in the archive</option>
              <option value="Correction">Correction — fix an error in existing records</option>
              <option value="Photo / Document">Photo / Document — newspaper clipping, match photo, official document</option>
              <option value="Personal Testimony">Personal Testimony — your own story in Nigerian basketball</option>
            </select>
            <span class="sf-error" id="cerr-type">Please select a contribution type.</span>
          </div>

          <div class="sf-group" id="cf-year-group">
            <label class="sf-label" for="cf-year">Year (if applicable)</label>
            <input class="sf-input" id="cf-year" type="number" placeholder="e.g. 1987" min="1964" max="2020"/>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-details">Details <span class="sf-required">*</span></label>
            <textarea class="sf-input sf-textarea" id="cf-details" rows="6" placeholder="Describe your contribution in as much detail as possible. For missing records include names, dates, results. For corrections describe what is wrong and what the correct information is. For personal testimony write your story." required></textarea>
            <span class="sf-error" id="cerr-details">Please provide details about your contribution.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-file">Photo / Document Link (optional)</label>
            <input class="sf-input" id="cf-file" type="url" placeholder="Link to Google Drive, Dropbox or any file sharing link"/>
            <p class="sf-hint">If you have photos or documents, upload them to Google Drive, set sharing to "Anyone with the link", and paste the link here.</p>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-name">Your Name <span class="sf-required">*</span></label>
            <input class="sf-input" id="cf-name" type="text" placeholder="Full name" required/>
            <span class="sf-error" id="cerr-name">Please enter your name.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-email">Your Email <span class="sf-required">*</span></label>
            <input class="sf-input" id="cf-email" type="email" placeholder="So we can follow up with you" required/>
            <span class="sf-error" id="cerr-email">Please enter a valid email address.</span>
          </div>

          <div class="sf-submit-row">
            <button class="sf-submit" type="submit" id="cf-submit-btn">
              <span id="cf-btn-text">Submit Contribution</span>
              <span id="cf-btn-loading" style="display:none">Submitting…</span>
            </button>
          </div>

          <div class="sf-success" id="cf-success" style="display:none">
            <div class="sf-success__icon">✓</div>
            <h3 class="sf-success__title">Contribution Received</h3>
            <p class="sf-success__msg">Thank you for contributing to the Nigeria Basketball Archive. Your submission has been recorded and will be reviewed. You will be credited when your contribution is added to the archive.</p>
            <button class="sf-success__back" data-nav="records">Back to Records</button>
          </div>

          <div class="sf-error-general" id="cf-error-general" style="display:none">
            Something went wrong. Please try again.
          </div>
        </form>

        <div class="signup-info">
          <div class="signup-info__block">
            <h3 class="signup-info__title">Why Contribute?</h3>
            <ul class="signup-info__list">
              <li>Help complete 56 years of Nigerian basketball history</li>
              <li>Your name will be credited in the archive</li>
              <li>Preserve records before they are lost</li>
              <li>Connect your story to the official record</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">What We Need Most</h3>
            <ul class="signup-info__list">
              <li>Records from 1964–1979 (early years)</li>
              <li>Newspaper clippings and match photos</li>
              <li>State-level tournament results</li>
              <li>Personal stories from players and coaches</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Review Process</h3>
            <p class="signup-info__text">All contributions are reviewed by the archive team before being added. We may follow up with you for more detail. Contributors are always credited by name.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}`;
}

// ── RENDER ───────────────────────────────────────────────
function render() {
  const app = document.getElementById("app");
  if (!hasAccess && page !== "signup") {
    app.innerHTML = landingPage();
  } else if (page === "home") app.innerHTML = homePage();
  else if (page === "records") app.innerHTML = recordsPage();
  else if (page === "analysis") app.innerHTML = analysisPage();
  else if (page === "constitution") app.innerHTML = constitutionPage();
  else if (page === "about") app.innerHTML = aboutPage();
  else if (page === "signup") app.innerHTML = signupPage();
  else if (page === "contribute") app.innerHTML = contributePage();
  else if (page === "contribute") app.innerHTML = contributePage();
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
    heroBtn.addEventListener("click", () => { const q = heroSearch.value.trim(); if (q) navigate("records", { search: q }); else navigate("records"); });
    heroSearch.addEventListener("keydown", e => { if (e.key === "Enter") { const q = heroSearch.value.trim(); if (q) navigate("records", { search: q }); else navigate("records"); } });
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

  // Landing page CTAs
  const landingCta = document.getElementById("landingCta");
  const landingCta2 = document.getElementById("landingCta2");
  if (landingCta) landingCta.addEventListener("click", () => { page = "signup"; pushHistory("signup", {}); render(); window.scrollTo(0,0); });
  if (landingCta2) landingCta2.addEventListener("click", () => { page = "signup"; pushHistory("signup", {}); render(); window.scrollTo(0,0); });
  const landingContribute = document.getElementById("landingContribute");
  if (landingContribute) landingContribute.addEventListener("click", () => { page = "contribute"; pushHistory("contribute", {}); render(); window.scrollTo(0,0); });

  // Contribution form
  const contribForm = document.getElementById("contribForm");
  if (contribForm) {
    contribForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const type = document.getElementById("cf-type").value;
      const year = document.getElementById("cf-year").value.trim();
      const details = document.getElementById("cf-details").value.trim();
      const fileLink = document.getElementById("cf-link").value.trim();

      let valid = true;
      const showErr = (id, show) => { document.getElementById(id).style.display = show ? "block" : "none"; };
      if (!name) { showErr("cerr-name", true); valid = false; } else showErr("cerr-name", false);
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr("cerr-email", true); valid = false; } else showErr("cerr-email", false);
      if (!type) { showErr("cerr-type", true); valid = false; } else showErr("cerr-type", false);
      if (!details) { showErr("cerr-details", true); valid = false; } else showErr("cerr-details", false);
      if (!valid) return;

      const btn = document.getElementById("cf-submit-btn");
      document.getElementById("cf-btn-text").style.display = "none";
      document.getElementById("cf-btn-loading").style.display = "inline";
      btn.disabled = true;

      try {
        await fetch(CONTRIB_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formType: "contribution", contributorName: name, email, type, year, details, fileLink }),
          mode: "no-cors"
        });
        contribForm.style.display = "none";
        document.getElementById("cf-success").style.display = "flex";
      } catch (err) {
        document.getElementById("cf-error-general").style.display = "block";
        document.getElementById("cf-btn-text").style.display = "inline";
        document.getElementById("cf-btn-loading").style.display = "none";
        btn.disabled = false;
      }
    });
  }

  // Signup form
  const form = document.getElementById("signupForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("sf-name").value.trim();
      const email = document.getElementById("sf-email").value.trim();
      const org = document.getElementById("sf-org").value.trim();
      const role = document.getElementById("sf-role").value;

      // Validate
      let valid = true;
      const showErr = (id, show) => { document.getElementById(id).style.display = show ? "block" : "none"; };
      if (!name) { showErr("err-name", true); valid = false; } else showErr("err-name", false);
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr("err-email", true); valid = false; } else showErr("err-email", false);
      if (!org) { showErr("err-org", true); valid = false; } else showErr("err-org", false);
      if (!role) { showErr("err-role", true); valid = false; } else showErr("err-role", false);
      if (!valid) return;

      // Submit
      const btn = document.getElementById("sf-submit-btn");
      document.getElementById("sf-btn-text").style.display = "none";
      document.getElementById("sf-btn-loading").style.display = "inline";
      btn.disabled = true;

      try {
        await fetch(FORM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, organisation: org, role }),
          mode: "no-cors"
        });
        grantAccess();
        form.style.display = "none";
        document.getElementById("sf-success").style.display = "flex";
        setTimeout(() => { navigate("home"); }, 2500);
      } catch (err) {
        document.getElementById("sf-error-general").style.display = "block";
        document.getElementById("sf-btn-text").style.display = "inline";
        document.getElementById("sf-btn-loading").style.display = "none";
        btn.disabled = false;
      }
    });
  }
}

render();
