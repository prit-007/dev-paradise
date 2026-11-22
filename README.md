# Developer's Paradise 🌐

Production-ready portfolio site showcasing innovative web and mobile application development.

**Live site:** https://prit-007.github.io/dev-paradise/  
**CI/CD:** [![GitHub Actions](https://github.com/prit-007/dev-paradise/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/prit-007/dev-paradise/actions/workflows/ci-cd.yml)

---

## 📂 Repository Layout

```
dev-paradise/
├── pro/                          # Application source (Vite + React 18 + Tailwind CSS v4)
│   ├── README.md                 # Detailed developer documentation (start here)
│   ├── package.json              # Dependencies & scripts
│   ├── vite.config.js            # Vite configuration
│   ├── index.html                # Vite entry HTML
│   ├── input.css                 # Tailwind source CSS
│   ├── src/                      # React source code
│   ├── tests/                    # Vitest unit + Playwright e2e tests
│   └── ...
├── .github/
│   └── workflows/
│       └── ci-cd.yml             # CI/CD pipeline (lint → test → build → deploy)
├── vercel.json                   # Vercel build settings
├── .gitignore                    # Root Git ignore rules
└── README.md                     # This file
```

> 👉 **All development happens in the `pro/` directory.** See [`pro/README.md`](./pro/README.md) for complete setup, architecture, testing, and deployment documentation.

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/prit-007/dev-paradise.git
cd dev-paradise

# Enter the app directory
cd pro

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18.3.1 |
| Build Tool | Vite 5.4.x |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion, GSAP |
| Icons | Lucide React, React Icons, Heroicons |
| Routing | React Router DOM 7.x |
| Unit Tests | Vitest 4.1.x |
| E2E Tests | Playwright 1.65.x |
| Linting | ESLint 8.x |

---

## 📖 Documentation

| Document | Location | Description |
|----------|----------|-------------|
| Developer Guide | `pro/README.md` | Full setup, architecture, API, scripts |
| Contributing | `CONTRIBUTING.md` | How to contribute to this project |
| CI/CD Pipeline | `.github/workflows/ci-cd.yml` | Lint → test → build → deploy workflow |

---

## 🔄 CI/CD Pipeline

Pushes to `master` trigger the GitHub Actions workflow:

1. **lint** — ESLint with `--max-warnings 0`
2. **test** — Vitest unit tests (50 tests)
3. **build** — Vite production build → `pro/dist/`
4. **deploy** — GitHub Pages via `actions/deploy-pages@v4`

---

## 👨‍💻 About the Developer

**Prit Vasani** — Software Engineer  
- GitHub: [@prit-007](https://github.com/prit-007)  
- Email: pritvasani@example.com  
- LinkedIn: [Prit Vasani](https://linkedin.com/in/pritvasani)

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

Thank you for exploring **Developer's Paradise**! 🌟
