# Nigerian Basketball History — The Official Archive

56 years of Nigerian Basketball records, NBBF leadership, tournaments, and milestones.  
Compiled by **Coach OBJ** (Oliver B. Johnson) · 1964–2020.

---

## Tech Stack

- **Vite** — build tool & dev server (zero-framework, vanilla JS)
- **Vanilla JS + CSS** — no framework dependencies, fast and lightweight
- **Vercel** — deployment

---

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Build for production
```bash
npm run build
```
Output goes to `dist/`

### Preview production build
```bash
npm run preview
```

---

## Deploying to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects the Vite config.

### Option 2: GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**

The `vercel.json` file is already configured for you.

---

## Adding Records

All records are in `src/data/records.js`. Each record has this shape:

```js
{
  id: 36,                    // unique number
  year: 1996,                // year (number)
  decade: 1990,              // decade for nav filter (1960–2020)
  type: "tournament",        // "tournament" | "nbbf" | "intl" | "milestone" | "player"
  featured: false,           // true = orange left border accent
  title: "Record Title",
  body: "Full description of the record...",
  source: "Daily Times, 12/5/96",  // optional — leave "" if none
}
```

### Record types
| Type | Color | Use for |
|------|-------|---------|
| `nbbf` | Purple | NBBF/NABBA leadership & board composition |
| `tournament` | Blue | Domestic leagues, NSF, cups |
| `intl` | Red | International competitions, FIBA events |
| `milestone` | Green | Historic firsts, landmark moments |
| `player` | Amber | Player & coach profiles |

---

## Adding Photos

Photos can be added to individual cards. Place image files in `public/photos/` and reference them in the record:

```js
{
  id: 5,
  photo: "/photos/1968-emir-cup.jpg",   // add this field
  ...
}
```

Then in `src/main.js`, update the `cardHTML` function's photo section:
```js
const photo = r.photo
  ? `<div class="card__photo"><img src="${r.photo}" alt="${r.title}" /></div>`
  : "";
```

For the hero ball photo, place your image at `public/photos/hero-ball.jpg` and update `src/main.js`:
```js
// Replace the hero__ball-placeholder div with:
`<img src="/photos/hero-ball.jpg" alt="Basketball" />`
```

---

## Project Structure

```
nigerian-basketball-archive/
├── index.html              # Entry point
├── package.json
├── vite.config.js
├── vercel.json             # Vercel deployment config
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── photos/             # Add your photos here
└── src/
    ├── main.js             # App logic & rendering
    ├── style.css           # All styles
    └── data/
        └── records.js      # All historical records
```

---

*Nigerian Basketball @ 56 · Compiled by Coach OBJ · NBBF*
