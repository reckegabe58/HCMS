# HCMS Website — Design Guidelines

Reference for any future updates or new components on the Henry Coaster Memorial School site. This is the source of truth for visual/design decisions — read this before styling anything new.

---

## 1. Brand Colors

The palette below is implemented in `assets/css/main.css` (`:root`) under different variable names than this guideline originally used. **Always use the actual CSS custom properties in the right-hand column** — don't introduce new color variables.

| Guideline color | Hex | Actual CSS variable in `main.css` |
|---|---|---|
| `--primary-blue` (dominant: nav, headings, buttons) | `#0753AF` | `--primary-100` |
| `--secondary-blue` (accents, hover states) | `#498AB9` | `--secondary-200` |
| `--accent-red` (sparing emphasis only) | `#9A332D` | `--accent-100` |
| `--sage-green` | `#8BA888` | `--sage-300` (also `--sage-100/200/400` for the layered scale) |
| `--earth-brown` | `#5D4037` | `--earth-200` |
| `--dark-navy` (body text, footer — never pure black) | `#262839` | `--navy-200` |
| `--background` (main background — not pure white) | `#F5F7F8` | `--bg-300` (also `--bg-100/200/400` for the layered scale) |
| `--light-gray` (borders/separators) | `#AEB1C5` | *(no direct match yet — use `--bg-100`/`--border-light` for now if a border color is needed)* |

**Confirmed 2026-09-08:** these hexes matched the live site almost exactly when checked — no color rework needed, just use the real variable names above.

**Usage rules**
- Primary Blue is dominant (navigation, headings, buttons).
- Secondary Blue for accents and hover states.
- Accent Red used sparingly — only for emphasis, never as a base color.
- Dark Navy replaces black for all text and the footer.
- Light Gray for borders/separators, not black.
- Keep sufficient contrast — this is a school site, accessibility matters.
- All colors defined as CSS variables so the theme is easy to update later.

## 2. Typography

- **Display font:** Manrope (already loaded via `--font-display` / `--font-body` in `main.css`, pulled from Google Fonts).
- **Serif font:** Noto Serif (already loaded via `--font-serif`) — used selectively for a "classic school" feel (e.g. section headings).
- Base body size: 16–18px, line height 1.6–1.8.
- Never use system default fonts (Arial, Helvetica, SF).
- Minimum 3 hierarchy levels; don't use more than 2–3 sizes per screen.
- Text color is Dark Navy (`--navy-200` / `--text-primary` / `--text-secondary`), never pure black.

## 3. Color Layering & Depth

- Build 3–4 shades of the base color (increase lightness ~0.1 at a time). Darker = background/deeper, lighter = elevated/important. `main.css` already has these scales (`--primary-100..400`, `--sage-100..400`, `--bg-100..400`, etc.) — reuse them rather than inventing new shades.
- Stack lighter shades onto darker ones to create elevation — you don't need borders once layering is right; contrast alone separates elements.
- Two-layer shadow system: light comes from above, so elevated elements get a subtle light top-edge highlight + a deeper bottom shadow. `main.css` already defines `--shadow-sm`, `--shadow-md`, `--shadow-md-hover` — use these instead of writing new `box-shadow` values.
  - Small shadow tier → cards
  - Medium tier → buttons
  - Large tier → modals
- Never pure white (#FFFFFF as a foreground surface) or pure black anywhere.

## 4. Layout & Responsiveness

- Treat every layout as a system of boxes with clear relationships — get the structure right before making it responsive.
- Responsive = rearranging with purpose, not just shrinking everything uniformly.
- Use an 8px spacing grid: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 — matches the `--space-*` custom properties already in `main.css`.
- One clear focal point per screen; avoid perfectly symmetrical, lifeless layouts.
- Mobile responsive is required (site is built on Jekyll / GitHub Pages).
- **Watch for unscoped class-name collisions.** `main.css` is one large file with several components that historically reused generic class names (e.g. two different "schedule" components both used `.schedule-day`/`.schedule-date`). This caused a real mobile bug (Sept 2026) where an unused component's CSS bled into the live one. When adding a new component, scope its selectors under a unique parent class rather than bare/generic class names.
- **Flex items and long text:** a flex item with `flex-shrink: 0` will never shrink below its full single-line content width — this caused a header bug (Sept 2026) where a long tagline pushed the hamburger menu off-screen instead of wrapping. If a flex child contains text that should be allowed to wrap/shrink, give it `min-width: 0` rather than blanket `flex-shrink: 0`.

## 5. Component Patterns (from the homepage rebuild)

- **"This Week's Activities" card:** calendar icon, top border accent, event list with square date boxes, "Full School Calendar" button. Live implementation: `.widget-activities` in `index.html` + matching CSS in `main.css`.
- **"Quick Resources" card:** light-blue tinted background, list of links with external-link icons, each link styled as a mini card.
- **"Our Sacred Lands" image card:** photo with gradient overlay, text anchored at bottom, hover zoom effect.
- **Map section:** gray background, two columns (text + map image), address with icons, large shadow on the map image.
- **Footer:** Dark Navy (`--navy-200`) background, 4 columns (About / Quick Links / Contact / Newsletter), school logo + description, newsletter signup form, copyright line at the bottom.
- **Banners** (e.g. homepage "Welcome Back" banner): top accent border, icon + badge + heading + paragraph + CTA button, reused as `.welcome-back-banner` / `.welcome-banner-*` classes — follow this pattern for any future homepage announcement banner rather than inventing a new one.

## 6. Buttons, Radius & Icons

- One consistent border-radius scale across the whole site (`--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-full` already defined) — don't introduce arbitrary radius values.
- Buttons: gradient background, subtle 1px top highlight, drop shadow colored to match the button's hue (not grey), bold text, generous padding, and defined hover/pressed/disabled states.
- Icons: consistent stroke width (this site uses 1.5–2px stroke SVGs throughout — match the existing inline SVG icon style rather than pulling in an icon font/library), no default system icons, small icons (<24px) filled rather than outlined, larger icons can be outlined, always leave padding around icons inside their containers.

## 7. Animation

- Prefer spring/physics-based motion over linear easing.
- Micro-interactions: 100–200ms. Transitions: 300–400ms. Entrances: 400–600ms.
- Stagger list/entrance animations by 50–100ms. Nothing should animate at 0ms (instant).

## 8. Common Mistakes to Avoid (the "AI slop" checklist)

- Pure white backgrounds or pure black text
- Generic grey shadows on colored elements
- Inconsistent border radius across components
- System default fonts
- Flat single-color fills with no depth
- No visual hierarchy — everything the same weight
- Cramped spacing
- Linear (non-physical) animations
- Perfectly symmetrical, lifeless layouts
- Generic blue/purple gradient as the "default AI" palette
- Missing hover/press states
- Borders used instead of color contrast to separate sections
- Too many font sizes/weights with no system
- Reusing generic/unscoped class names across unrelated components (see Layout & Responsiveness above)

## 9. Implementation Notes

- Site is built with **Jekyll**, hosted on **GitHub Pages** (custom domain: henrycoastermemorialschool.ca) — keep that structure.
- Key files: `_layouts/default.html`, `index.html`, `assets/css/main.css`.
- Keep existing functional features (photo carousel, after-school schedule) when redesigning — this is a visual/structural update, not a rebuild from scratch.
- Workflow: edit files → test locally with `bundle exec jekyll serve` → commit → push → check the live site after ~2 minutes.

---

*Goal for every update: it should look like a human who cared made every decision — not a generic AI-generated template.*
