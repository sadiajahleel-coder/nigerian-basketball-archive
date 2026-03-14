import "./style.css";
import { yearRecords, decades, categoryLabels } from "./data/records.js";

let state = { decade: "all", search: "" };

function getVisible() {
  return yearRecords.filter((yr) => {
    const decOk = state.decade === "all" || yr.decade === Number(state.decade);
    const q = state.search.toLowerCase();
    if (!q) return decOk;
    const adminText = (yr.administration.board + yr.administration.coaches + yr.administration.notes).toLowerCase();
    const eventsText = yr.events.map(e => e.title + e.detail).join(" ").toLowerCase();
    return decOk && (adminText.includes(q) || eventsText.includes(q) || String(yr.year).includes(q));
  });
}

function ballSVG() {
  return `<svg width="90" height="90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#b85500" stroke="#8c3e00" stroke-width="1.5"/>
    <path d="M50 4 Q66 22 66 50 Q66 78 50 96" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M50 4 Q34 22 34 50 Q34 78 50 96" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M4 50 Q22 34 50 34 Q78 34 96 50" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M4 50 Q22 66 50 66 Q78 66 96 50" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <circle cx="50" cy="50" r="46" fill="none" stroke="#8c3e00" stroke-width="1.5"/>
  </svg>`;
}

function catTag(cat) {
  const label = categoryLabels[cat] || cat;
  return `<span class="cat-tag cat--${cat}">${label}</span>`;
}

function yearBlockHTML(yr) {
  const hasEvents = yr.events && yr.events.length > 0;
  const hasNotes = yr.administration.notes && yr.administration.notes.trim();
  return `
    <div class="year-block" id="y${yr.year}">
      <div class="year-block__header" data-year="${yr.year}">
        <div class="yb__left">
          <span class="yb__num">${yr.year}</span>
          <div class="yb__pills">
            ${yr.administration.board ? '<span class="yb__pill">Administration</span>' : ''}
            ${hasEvents ? `<span class="yb__pill yb__pill--events">${yr.events.length} event${yr.events.length > 1 ? 's' : ''}</span>` : ''}
          </div>
        </div>
        <button class="yb__toggle" aria-expanded="false" aria-label="Expand ${yr.year}">
          <svg class="toggle-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="year-block__body" hidden>

        <div class="yb__section">
          <div class="yb__section-title">
            <span class="yb__icon">👤</span> Administration
          </div>
          <div class="yb__section-content">
            ${yr.administration.board ? `<div class="yb__field"><span class="yb__field-label">Board &amp; Leadership</span><p class="yb__field-value">${yr.administration.board}</p></div>` : ''}
            ${yr.administration.coaches ? `<div class="yb__field"><span class="yb__field-label">Coaches &amp; Staff</span><p class="yb__field-value">${yr.administration.coaches}</p></div>` : ''}
            ${hasNotes ? `<div class="yb__field"><span class="yb__field-label">Notes</span><p class="yb__field-value">${yr.administration.notes}</p></div>` : ''}
          </div>
        </div>

        ${hasEvents ? `
        <div class="yb__section yb__section--events">
          <div class="yb__section-title">
            <span class="yb__icon">🏀</span> Events &amp; Competitions
          </div>
          <div class="yb__events-list">
            ${yr.events.map(e => `
              <div class="yb__event">
                <div class="yb__event-head">
                  ${catTag(e.category)}
                  <span class="yb__event-title">${e.title}</span>
                </div>
                <p class="yb__event-detail">${e.detail}</p>
                ${e.source ? `<p class="yb__event-source">Source: ${e.source}</p>` : ''}
              </div>`).join('')}
          </div>
        </div>` : ''}

      </div>
    </div>`;
}

function render() {
  const visible = getVisible();
  const sorted = [...visible].sort((a, b) => b.year - a.year);

  document.getElementById("app").innerHTML = `
    <header class="hero">
      <div class="hero__ring hero__ring--1"></div>
      <div class="hero__ring hero__ring--2"></div>
      <div class="hero__inner">
        <div class="hero__text">
          <p class="hero__eyebrow">The Official Archive · Compiled by Coach OBJ</p>
          <h1 class="hero__title">Nigerian<br><span class="t-orange">Basketball</span><br><span class="t-green">History</span></h1>
          <p class="hero__desc">56 years of records, NBBF leadership, tournaments, and personalities — the complete story of the game in Nigeria, 1964–2020.</p>
          <div class="hero__stats">
            <div><div class="hero__stat-num">56</div><div class="hero__stat-label">Years</div></div>
            <div><div class="hero__stat-num">${yearRecords.length}</div><div class="hero__stat-label">Year Records</div></div>
            <div><div class="hero__stat-num">1964</div><div class="hero__stat-label">Founded</div></div>
            <div><div class="hero__stat-num">NBBF</div><div class="hero__stat-label">Federation</div></div>
          </div>
        </div>
        <div class="hero__ball">
          <div class="hero__ball-placeholder">
            ${ballSVG()}
            <span>Photo<br>coming soon</span>
          </div>
        </div>
      </div>
    </header>

    <nav class="decade-nav">
      <div class="decade-nav__inner">
        ${decades.map(d => `<button class="decade-btn ${state.decade === String(d.value) ? 'is-active' : ''}" data-decade="${d.value}">${d.label}</button>`).join('')}
      </div>
    </nav>

    <div class="search-bar">
      <div class="search-bar__inner">
        <input class="search-input" type="search" placeholder="Search by year, name, team, event..." value="${state.search}" id="searchInput"/>
      </div>
    </div>

    <main class="main">
      <div class="section-header">
        <span class="section-label">Records by Year</span>
        <div class="section-line"></div>
      </div>
      <p class="record-count" id="recordCount">
        <strong>${visible.length}</strong> of <strong>${yearRecords.length}</strong> years shown — click any year to expand
      </p>
      <div id="yearBlocks">
        ${sorted.map(yr => yearBlockHTML(yr)).join('')}
      </div>
    </main>

    <footer class="footer">
      <div class="footer__logo">Nigerian Basketball History</div>
      <p>Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson</p>
      <p>56 Years of Nigerian Basketball · 1964–2020 · NBBF</p>
      <p style="margin-top:10px;font-size:11px;opacity:0.55;">Edited &amp; built by <strong>Halima Abdul</strong></p>
    </footer>`;

  bindEvents();
}

function updateResults() {
  const visible = getVisible();
  const sorted = [...visible].sort((a, b) => b.year - a.year);
  const countEl = document.getElementById("recordCount");
  if (countEl) countEl.innerHTML = `<strong>${visible.length}</strong> of <strong>${yearRecords.length}</strong> years shown — click any year to expand`;
  const container = document.getElementById("yearBlocks");
  if (container) { container.innerHTML = sorted.map(yr => yearBlockHTML(yr)).join(''); bindToggles(); }
}

function bindToggles() {
  document.querySelectorAll(".year-block__header").forEach(header => {
    header.addEventListener("click", () => {
      const block = header.closest(".year-block");
      const body = block.querySelector(".year-block__body");
      const btn = block.querySelector(".yb__toggle");
      const isOpen = !body.hidden;
      body.hidden = isOpen;
      btn.setAttribute("aria-expanded", String(!isOpen));
      btn.classList.toggle("is-open", !isOpen);
      header.classList.toggle("is-open", !isOpen);
    });
  });
}

function bindEvents() {
  document.querySelectorAll(".decade-btn").forEach(btn => {
    btn.addEventListener("click", () => { state.decade = btn.dataset.decade; render(); });
  });
  const searchEl = document.getElementById("searchInput");
  if (searchEl) {
    searchEl.addEventListener("input", e => { state.search = e.target.value; updateResults(); });
  }
  bindToggles();
}

render();