import "./style.css";
import { records, typeLabels, decades, filters } from "./data/records.js";

let state = { decade: "all", filter: "all", search: "" };

function getVisible() {
  return records.filter((r) => {
    const decOk = state.decade === "all" || r.decade === Number(state.decade);
    const filtOk = state.filter === "all" || r.type === state.filter;
    const q = state.search.toLowerCase();
    const srchOk = !q || r.title.toLowerCase().includes(q) || r.body.toLowerCase().includes(q) || String(r.year).includes(q);
    return decOk && filtOk && srchOk;
  });
}

function groupByYear(recs) {
  const map = {};
  recs.forEach((r) => {
    if (!map[r.year]) map[r.year] = [];
    map[r.year].push(r);
  });
  return Object.keys(map).map(Number).sort((a, b) => b - a).map((yr) => ({ year: yr, records: map[yr] }));
}

function tagHTML(type) {
  const label = typeLabels[type] || type;
  return `<span class="card__tag tag--${type}">${label}</span>`;
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

function yearGroupsHTML(grouped) {
  if (grouped.length === 0) return `<div class="empty-state">No records match your search.</div>`;
  return grouped.map(({ year, records: recs }) => `
    <div class="year-group">
      <div class="year-heading">
        <span class="year-num">${year}</span>
        <span class="year-count">${recs.length} record${recs.length > 1 ? "s" : ""}</span>
        <div class="year-line"></div>
      </div>
      <div class="year-records">
        ${recs.map((r) => recordRowHTML(r)).join("")}
      </div>
    </div>`).join("");
}

function recordRowHTML(r) {
  const featured = r.featured ? " row--featured" : "";
  return `
    <div class="record-row${featured}" data-id="${r.id}">
      <div class="row__header">
        <div class="row__left">
          ${tagHTML(r.type)}
          <span class="row__title">${r.title}</span>
        </div>
        <button class="row__toggle" aria-expanded="false" aria-label="Expand record">
          <svg class="toggle-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="row__body" hidden>
        <p class="row__text">${r.body}</p>
        ${r.source ? `<p class="row__source">Source: ${r.source}</p>` : ""}
      </div>
    </div>`;
}

function render() {
  const visible = getVisible();
  const grouped = groupByYear(visible);
  document.getElementById("app").innerHTML = `
    <header class="hero">
      <div class="hero__ring hero__ring--1"></div>
      <div class="hero__ring hero__ring--2"></div>
      <div class="hero__inner">
        <div class="hero__text">
          <p class="hero__eyebrow">The Official Archive · Compiled by Coach OBJ</p>
          <h1 class="hero__title">Nigerian<br><span class="t-orange">Basketball</span><br><span class="t-green">History</span></h1>
          <p class="hero__desc">56 years of records, NBBF leadership, tournaments, and personalities — the complete story of the game in Nigeria and the federation, 1964–2020.</p>
          <div class="hero__stats">
            <div><div class="hero__stat-num">56</div><div class="hero__stat-label">Years</div></div>
            <div><div class="hero__stat-num">${records.length}</div><div class="hero__stat-label">Records</div></div>
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
        ${decades.map((d) => `<button class="decade-btn ${state.decade === String(d.value) ? "is-active" : ""}" data-decade="${d.value}">${d.label}</button>`).join("")}
      </div>
    </nav>
    <div class="search-bar">
      <div class="search-bar__inner">
        <input class="search-input" type="search" placeholder="Search records, players, tournaments, years..." value="${state.search}" id="searchInput"/>
        <div class="filter-pills">
          ${filters.map((f) => `<button class="filter-pill ${state.filter === f.value ? "is-active" : ""}" data-filter="${f.value}">${f.label}</button>`).join("")}
        </div>
      </div>
    </div>
    <main class="main">
      <div class="section-header">
        <span class="section-label">Records by Year</span>
        <div class="section-line"></div>
      </div>
      <p class="record-count" id="recordCount">
        <strong>${visible.length}</strong> records across <strong>${grouped.length}</strong> years — click any record to expand
      </p>
      <div id="yearGroups">${yearGroupsHTML(grouped)}</div>
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
  const grouped = groupByYear(visible);
  const countEl = document.getElementById("recordCount");
  if (countEl) countEl.innerHTML = `<strong>${visible.length}</strong> records across <strong>${grouped.length}</strong> years — click any record to expand`;
  const container = document.getElementById("yearGroups");
  if (container) { container.innerHTML = yearGroupsHTML(grouped); bindRowToggles(); }
}

function bindRowToggles() {
  document.querySelectorAll(".record-row").forEach((row) => {
    const btn = row.querySelector(".row__toggle");
    const body = row.querySelector(".row__body");
    if (!btn || !body) return;
    btn.addEventListener("click", () => {
      const isOpen = !body.hidden;
      body.hidden = isOpen;
      btn.setAttribute("aria-expanded", String(!isOpen));
      btn.classList.toggle("is-open", !isOpen);
      row.classList.toggle("is-expanded", !isOpen);
    });
    row.querySelector(".row__header").addEventListener("click", (e) => {
      if (e.target.closest(".row__toggle")) return;
      btn.click();
    });
  });
}

function bindEvents() {
  document.querySelectorAll(".decade-btn").forEach((btn) => {
    btn.addEventListener("click", () => { state.decade = btn.dataset.decade; render(); });
  });
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => { state.filter = pill.dataset.filter; render(); });
  });
  const searchEl = document.getElementById("searchInput");
  if (searchEl) {
    searchEl.addEventListener("input", (e) => { state.search = e.target.value; updateResults(); });
  }
  bindRowToggles();
}

render();