# AGENTS.md

## Project Overview

DIVYAASTRA is a spiritual e-commerce marketing site built with TanStack Start. It replicates a reference design — a premium Hindu sacred products store with a gold/green color palette, serif typography (Cinzel/Cormorant Garamond), and a rich multi-section landing page.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Plain CSS custom properties (gold/green theme) + Tailwind CSS 4 |
| Fonts | Cinzel Decorative, Cinzel, Cormorant Garamond (Google Fonts) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  data/products.ts          # Full product catalog (38 products with images, prices, badges)
  routes/
    __root.tsx              # Root layout — Google Fonts link, HTML shell, page title
    index.tsx               # Home page — nav, hero, products grid, mission, food, vault, foundation, footer
    products/$productId.tsx # Product detail page
  styles.css                # All custom CSS — gold/green theme, animations, responsive grid
public/
  images/                   # Product photos (jpg) — paths referenced from products.ts
```

## Key Conventions

### Styling

All styling is in `src/styles.css` as plain CSS (not Tailwind utilities on the main pages). CSS custom properties define the color palette:

- `--gold: #C9A84C`, `--green: #1A5C2E` — primary brand colors
- `--obsidian: #06080A` — footer background
- `--off-white: #F8F4EC`, `--cream: #FAF6EE` — section backgrounds

The `.reveal` + `IntersectionObserver` scroll animation pattern is used throughout for fade-up entrance effects, initialized in a `useEffect` in `index.tsx`.

### Product Data

`src/data/products.ts` exports a typed `Product[]` array. Each product has:
- `image`: path relative to `/public` (e.g. `/images/shivling.jpg`)
- `badge` + `badgeColor`: optional overlay label on product card
- `originalPrice`: if set, renders a strikethrough price before the current price
- `unit`: display unit string (e.g. `"mala"`, `"set of 108"`)
- Prices in Indian Rupees (₹), formatted with `toLocaleString('en-IN')`

### Routing

File-based TanStack Router:
- `/` → `src/routes/index.tsx` — full single-page landing
- `/products/:id` → `src/routes/products/$productId.tsx` — product detail

### Non-Obvious Decisions

- The home page uses raw CSS classes (not Tailwind utilities) because the design was ported from a static HTML reference that used a custom CSS design system; mixing Tailwind on the same elements would cause specificity conflicts.
- Google Fonts are loaded via `<link>` tags in `__root.tsx`'s `head()` config — not `@import` in CSS — to avoid render-blocking in production builds.
- The hero section skips the original reference's large base64-embedded temple image (624KB raw HTML) and uses product imagery elsewhere on the page instead.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
netlify dev      # Full Netlify platform emulation (port 8888)
```
