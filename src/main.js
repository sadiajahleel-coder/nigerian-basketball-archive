import "./style.css";
import { records, typeLabels, decades, filters } from "./data/records.js";

// ─── State ────────────────────────────────────────────────
let state = {
  decade: "all",
  filter: "all",
  search: "",
};

// ─── Helpers ──────────────────────────────────────────────
function getVisible() {
  return records.filter((r) => {
    const decOk =
      state.decade === "all" || r.decade === Number(state.decade);
    const filtOk = state.filter === "all" || r.type === state.filter;
    const q = state.search.toLowerCase();
    const srchOk =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.body.toLowerCase().includes(q) ||
      String(r.year).includes(q);
    return decOk && filtOk && srchOk;
  });
}

// ─── Basketball SVG ───────────────────────────────────────
function ballSVG() {
  return `<svg width="110" height="110" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="50" cy="50" r="46" fill="#b85500" stroke="#8c3e00" stroke-width="1.5"/>
    <path d="M50 4 Q66 22 66 50 Q66 78 50 96" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M50 4 Q34 22 34 50 Q34 78 50 96" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M4 50 Q22 34 50 34 Q78 34 96 50" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <path d="M4 50 Q22 66 50 66 Q78 66 96 50" fill="none" stroke="#7a3300" stroke-width="2.2"/>
    <circle cx="50" cy="50" r="46" fill="none" stroke="#8c3e00" stroke-width="1.5"/>
    <ellipse cx="37" cy="31" rx="6" ry="3.5" fill="rgba(255,255,255,0.1)" transform="rotate(-28 37 31)"/>
  </svg>`;
}

// ─── Render ───────────────────────────────────────────────
function render() {
  const visible = getVisible();

  document.getElementById("app").innerHTML = `
    <!-- HERO -->
    <header class="hero">
      <div class="hero__ring hero__ring--1"></div>
      <div class="hero__ring hero__ring--2"></div>
      <div class="hero__inner">
        <div class="hero__text">
          <p class="hero__eyebrow">The Official Archive · Compiled by Coach OBJ</p>
          <h1 class="hero__title">
            Nigerian<br>
            <span class="t-orange">Basketball</span><br>
            <span class="t-green">History</span>
          </h1>
          <p class="hero__desc">
            56 years of records, NBBF leadership, tournaments, and personalities — 
            the complete story of the game in Nigeria and the federation, 1964–2020.
          </p>
          <div class="hero__stats">
            <div>
              <div class="hero__stat-num">56</div>
              <div class="hero__stat-label">Years</div>
            </div>
            <div>
              <div class="hero__stat-num">${records.length}</div>
              <div class="hero__stat-label">Records</div>
            </div>
            <div>
              <div class="hero__stat-num">1964</div>
              <div class="hero__stat-label">Founded</div>
            </div>
            <div>
              <div class="hero__stat-num">NBBF</div>
              <div class="hero__stat-label">Federation</div>
            </div>
          </div>
        </div>
        <div class="hero__ball">
          <div class="hero__ball-placeholder" id="ballPlaceholder">
            ${ballSVG()}
            <span>Photo<br>coming soon</span>
          </div>
        </div>
      </div>
    </header>

    <!-- DECADE NAV -->
    <nav class="decade-nav" aria-label="Browse by decade">
      <div class="decade-nav__inner">
        ${decades
          .map(
            (d) =>
              `<button class="decade-btn ${state.decade === String(d.value) ? "is-active" : ""}"
                data-decade="${d.value}">${d.label}</button>`
          )
          .join("")}
      </div>
    </nav>

    <!-- SEARCH + FILTERS -->
    <div class="search-bar">
      <div class="search-bar__inner">
        <input
          class="search-input"
          type="search"
          placeholder="Search records, players, tournaments, years…"
          value="${state.search}"
          aria-label="Search records"
          id="searchInput"
        />
        <div class="filter-pills" role="group" aria-label="Filter by type">
          ${filters
            .map(
              (f) =>
                `<button class="filter-pill ${state.filter === f.value ? "is-active" : ""}"
                  data-filter="${f.value}">${f.label}</button>`
            )
            .join("")}
        </div>
      </div>
    </div>

    <!-- RECORDS -->
    <main class="main">
      <div class="section-header">
        <span class="section-label">Records</span>
        <div class="section-line"></div>
      </div>
      <p class="record-count">
        Showing <strong>${visible.length}</strong> of <strong>${records.length}</strong> records
      </p>
      <div class="card-grid" id="cardGrid">
        ${visible.length === 0
          ? `<div class="empty-state">No records match your search.</div>`
          : visible.map(cardHTML).join("")}
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer__logo">Nigerian Basketball History</div>
      <p>Compiled by <strong>Coach OBJ</strong> — Oliver B. Johnson</p>
      <p>56 Years of Nigerian Basketball · 1964–2020 · NBBF</p>
      <p style="margin-top: 10px; font-size: 11px; opacity: 0.6;">Edited &amp; built by <strong>Halima Abdul</strong></p>
    </footer>
  `;

  bindEvents();
}

function cardHTML(r) {
  const tag = typeLabels[r.type] || r.type;
  const featured = r.featured ? " record-card--featured" : "";
  const source = r.source
    ? `<p class="card__source">Source: ${r.source}</p>`
    : "";

  return `
    <article class="record-card${featured}">
      <div class="card__meta">
        <span class="card__year">${r.year}</span>
        <span class="card__tag tag--${r.type}">${tag}</span>
      </div>
      <h2 class="card__title">${r.title}</h2>
      <p class="card__body">${r.body}</p>
      ${source}
    </article>
  `;
}

// ─── Events ───────────────────────────────────────────────
function bindEvents() {
  // Decade buttons
  document.querySelectorAll(".decade-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.decade = btn.dataset.decade;
      render();
    });
  });

  // Filter pills
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.filter = pill.dataset.filter;
      render();
    });
  });

  // Search
  const searchEl = document.getElementById("searchInput");
  if (searchEl) {
    searchEl.addEventListener("input", (e) => {
      state.search = e.target.value;
      // Re-render just the grid + count, not the whole page (avoids losing focus)
      updateGrid();
    });
    // Keep focus after render
    searchEl.focus();
    searchEl.setSelectionRange(searchEl.value.length, searchEl.value.length);
  }
}

function updateGrid() {
  const visible = getVisible();
  document.querySelector(".record-count").innerHTML =
    `Showing <strong>${visible.length}</strong> of <strong>${records.length}</strong> records`;
  const grid = document.getElementById("cardGrid");
  if (grid) {
    grid.innerHTML =
      visible.length === 0
        ? `<div class="empty-state">No records match your search.</div>`
        : visible.map(cardHTML).join("");
  }
}

// ─── Init ─────────────────────────────────────────────────
render();
