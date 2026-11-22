# Developer's Paradise

Production-ready portfolio site built with **Vite + React 18 + Tailwind CSS v4**.

[![CI/CD Pipeline](https://github.com/prit-007/dev-paradise/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/prit-007/dev-paradise/actions/workflows/ci-cd.yml)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Data Model](#data-model)
- [Testing](#testing)
- [CI/CD Pipeline](#ci-cd-pipeline)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Developer's Paradise is a modern, responsive portfolio showcasing engineering projects, team members, services, and testimonials. It was migrated from a legacy Create React App setup to a lean **Vite + React 18 + Tailwind CSS v4** stack, featuring:

- A shared **hero engine** (`HeroShell` + `heroKit`) used consistently across all 9 pages
- **18 portfolio projects** with categorized filtering and flip animations
- Reusable shared components (Navbar, Footer, Layout, ContactForm, ErrorBoundary, ThemeContext, etc.)
- Dark/light theme persistence via `localStorage`
- SEO-ready structured data (JSON-LD)
- 50 unit tests (Vitest) + e2e tests (Playwright)
- GitHub Actions CI/CD: lint → test → build → deploy to GitHub Pages

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 18.3.1 |
| Build Tool | Vite | 5.4.x |
| Styling | Tailwind CSS | v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion | 11.x |
| Icons | Lucide React, React Icons, Heroicons | latest |
| Routing | React Router DOM | 7.x |
| Unit Testing | Vitest | 4.1.x |
| E2E Testing | Playwright | 1.65.x |
| Linting | ESLint | 8.x (+ React plugin) |
| Package Manager | npm | latest |

---

## Project Structure

```
dev-paradise/
├── .github/
│   └── workflows/
│       └── ci-cd.yml            # GitHub Actions CI/CD pipeline
├── vercel.json                  # Vercel build settings
├── .gitignore                   # Git ignore rules
├── pro/                         # Application source (Vite + React)
│   ├── index.html               # Vite entry HTML
│   ├── vite.config.js           # Vite config + path aliases (@ → ./src)
│   ├── package.json             # Dependencies & scripts
│   ├── package-lock.json        # Locked dependency tree
│   ├── input.css                # Tailwind source CSS (@tailwind directives)
│   ├── index.css                # Base CSS reset
│   ├── App.css                  # Component-scoped styles
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Route definitions + ScrollToTop
│   ├── .eslintrc.cjs            # ESLint configuration
│   ├── vite.config.test.ts      # Vitest config
│   ├── public/                  # Static assets
│   │   ├── images/              # Avatars, project screenshots, raw assets
│   │   ├── sitemap.xml          # SEO sitemap
│   │   └── robots.txt           # Robots exclusion
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          # Shared, page-agnostic components
│   │   │   │   ├── ContactForm.jsx
│   │   │   │   ├── ErrorBoundary.jsx
│   │   │   │   ├── JsonLd.jsx
│   │   │   │   ├── SafeLink.jsx
│   │   │   │   ├── ScrollToTop.jsx
│   │   │   │   └── ThemeContext.jsx
│   │   │   ├── heroes/          # Hero section engine + page-specific heroes
│   │   │   │   ├── HeroShell.jsx        # Layout primitive for hero sections
│   │   │   │   ├── heroKit.jsx          # Composable hero helpers (text, badge, CTA, stats)
│   │   │   │   ├── hero.css             # Shared hero animations & utilities
│   │   │   │   ├── HomeHero.jsx
│   │   │   │   ├── AboutHero.jsx
│   │   │   │   ├── ServicesHero.jsx
│   │   │   │   ├── TeamHero.jsx
│   │   │   │   ├── PortfolioHero.jsx
│   │   │   │   ├── ContactHero.jsx
│   │   │   │   ├── TestimonialsHero.jsx
│   │   │   │   ├── ProjectDetailHero.jsx
│   │   │   │   └── TeamProfileHero.jsx
│   │   │   ├── layout/          # Shell components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Layout.jsx
│   │   │   ├── NoResults.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── SEO.jsx
│   │   ├── context/             # React context providers
│   │   │   └── ThemeContext.jsx
│   │   ├── data/                # Static data (projects, team members)
│   │   │   ├── projects.jsx     # 18 project objects
│   │   │   └── teamMembers.js   # Team member profiles
│   │   ├── lib/                 # Utilities & hooks
│   │   │   ├── gsap.js          # GSAP easing & animation helpers
│   │   │   └── useShowcase.js   # Showcase/interaction hook
│   │   ├── pages/               # Route page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── ProjectDetail.jsx
│   │   │   └── TeamProfile.jsx
│   │   └── styles/              # Additional stylesheets
│   │       └── showcase.css
│   └── tests/
│       ├── unit/                # Vitest unit tests (50 tests, 11 files)
│       │   ├── setup.ts         # jsdom + GSAP mocks
│       │   ├── App.test.tsx
│       │   ├── components/layout/
│       │   └── pages/
│       └── e2e/                 # Playwright e2e tests
│           └── app.spec.ts
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10 (comes with Node 20)

### Installation

```bash
# Clone the repository
git clone https://github.com/prit-007/dev-paradise.git
cd dev-paradise

# Navigate to the app directory
cd pro

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server (Vite with HMR)
npm run dev

# Open http://localhost:5173 in your browser
```

The dev server uses Vite's Hot Module Replacement (HMR). Changes reflect instantly without full page reloads.

---

## Available Scripts

All scripts run from the `pro/` directory.

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR at `http://localhost:5173` |
| `npm run build` | Production build → outputs to `pro/dist/` |
| `npm run preview` | Serve the production build locally for verification |
| `npm run lint` | Run ESLint with `--max-warnings 0` (zero-tolerance) |
| `npm test` | Run Vitest unit tests (`vitest run`) |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:e2e` | Run Playwright end-to-end tests |

---

## Architecture

### Hero Engine

All page hero sections share a common engine for consistent layout and animation:

- **`HeroShell.jsx`** — Layout primitive providing overlay, background media container, and content wrapper. Accepts `eyebrow`, `title`, `sub`, `actions`, and a `build` render-prop for GSAP animations.
- **`heroKit.jsx`** — Composable helpers: `Split` (gradient text), badge, CTA button, stats row.
- **`hero.css`** — Shared hero animations and utility classes.

Page-specific heroes (`HomeHero`, `AboutHero`, `ServicesHero`, etc.) import `HeroShell` and pass their own content + animation `build` function.

### Shared Components (`src/components/common/`)

| Component | Purpose |
|-----------|---------|
| `Navbar.jsx` | Responsive navigation with mobile drawer, theme toggle, active-link highlighting |
| `Footer.jsx` | Site footer with social links, newsletter form, copyright |
| `Layout.jsx` | Wrapper providing Navbar + Footer + scroll behavior |
| `SafeLink.jsx` | External link wrapper with `rel="noopener noreferrer"` |
| `JsonLd.jsx` | Structured data (Organization, WebSite, BreadcrumbList) for SEO |
| `ContactForm.jsx` | Form with honeypot, validation, shake animation, submit status states |
| `ErrorBoundary.jsx` | React error boundary with fallback UI |
| `ThemeContext.jsx` | Dark/light theme provider with `localStorage` persistence |
| `ScrollToTop.jsx` | Auto-scrolls to top on route change |

### Data Layer (`src/data/`)

- **`projects.jsx`** — 18 project objects with `id`, `title`, `description`, `image`, `tags`, `category`, `liveUrl`, `sourceUrl`.
- **`teamMembers.js`** — Team member profiles with name, role, bio, image, social links.

---

## Data Model

### Project Object (`projects.jsx`)

```jsx
{
  id: 18,
  title: "ApertureX",
  description: "Photography portfolio & client gallery",
  image: "/images/projects/aperturex.jpg",
  tags: ["React", "Tailwind", "Framer Motion"],
  category: "photography",
  liveUrl: "https://aperturex.example.com",
  sourceUrl: "https://github.com/prit-007/aperturex"
}
```

### Team Member Object (`teamMembers.js`)

```js
{
  name: "Prit Vasani",
  role: "Lead Engineer",
  bio: "Passionate software engineer...",
  image: "/images/avatars/prit-vasani-md.jpg",
  social: { github, linkedin, email }
}
```

---

## Testing

### Unit Tests (Vitest)

50 tests across 11 files cover all pages, layout components, and Navbar/Footer.

Run locally:
```bash
cd pro
npm test           # vitest run
npm run test:watch # watch mode
```

**Test setup** (`tests/unit/setup.ts`) mocks:
- `IntersectionObserver`, `matchMedia`, `requestAnimationFrame` for jsdom
- GSAP (`gsap`, `useGSAP`, `getEase`, `Flip`, `ScrollTrigger`, etc.)
- `@/lib/gsap` alias

### End-to-End Tests (Playwright)

Critical user journeys (navigation, form submission, project filtering).

Run locally:
```bash
cd pro
npm run test:e2e
```

---

## CI/CD Pipeline

`.github/workflows/ci-cd.yml` — four sequential jobs:

| Job | Trigger | Description |
|-----|---------|-------------|
| **lint** | push/PR to `main`/`master` | ESLint (`--max-warnings 0`) |
| **test** | push/PR to `main`/`master` | Vitest unit tests |
| **build** | push/PR (needs lint + test) | Vite production build → `pro/dist/` |
| **deploy** | push only to `main`/`master` | GitHub Pages via `actions/deploy-pages@v4` |

- Deployment is **restricted to push events** (not PRs) due to GitHub Pages environment protection rules.
- Build artifacts (`pro/dist/`) are uploaded and deployed to the `gh-pages` branch.
- Site URL: `https://prit-007.github.io/dev-paradise/`

---

## Deployment

### GitHub Pages (Automatic)

Pushes to `master` trigger the CI/CD pipeline. On success, the site deploys to GitHub Pages automatically.

### Vercel (Alternative)

A `vercel.json` is included at the repo root. Configure in the Vercel dashboard:

| Setting | Value |
|---------|-------|
| Root Directory | `pro` |
| Build Command | `npm install && npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Development Command | `npm run dev` |
| Framework Preset | Vite |

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full contributor guide.

Quick checklist before opening a PR:

1. Fork the repo and create a feature branch from `master`
2. Make changes in the `pro/` directory
3. Run `npm run lint` — must pass with **0 errors, 0 warnings**
4. Run `npm test` — all 50 unit tests must pass
5. Run `npm run build` — production build must succeed
6. Open a PR against `master`

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

**Prit Vasani** — Software Engineer  
- GitHub: [@prit-007](https://github.com/prit-007)  
- Email: pritvasani@example.com  

---

*Built with Vite + React 18 + Tailwind CSS v4*
