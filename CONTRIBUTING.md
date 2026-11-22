# Contributing to Developer's Paradise

Thank you for your interest in contributing! This guide will help you get started.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Deployment](#deployment)
- [Questions](#questions)

---

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10

### Setup

```bash
# Clone the repository
git clone https://github.com/prit-007/dev-paradise.git
cd dev-paradise

# Enter the app directory
cd pro

# Install dependencies
npm install

# Verify everything works
npm run dev        # should start at http://localhost:5173
npm run lint       # should pass with 0 errors, 0 warnings
npm test           # all 50 unit tests should pass
npm run build      # production build should succeed
```

---

## Development Workflow

1. **Create a feature branch** from `master`:
   ```bash
   git checkout master
   git pull origin master
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the `pro/` directory.

3. **Run the verification checklist** before committing:
   ```bash
   # Lint (must pass with zero errors and zero warnings)
   cd pro
   npm run lint

   # Unit tests (all 50 must pass)
   npm test

   # Production build (must succeed)
   npm run build

   # Preview the build locally (optional but recommended)
   npm run preview
   ```

4. **Commit your changes** following the [commit guidelines](#commit-guidelines).

5. **Push and open a PR**:
   ```bash
   git push origin feature/your-feature-name
   ```

---

## Coding Standards

### ESLint

The project uses ESLint with `eslint:recommended`, `plugin:react/recommended`, and `plugin:react-hooks/recommended`. The lint script enforces **zero warnings**:

```bash
npm run lint   # equivalent to: eslint src --ext .js,.jsx,.ts,.tsx --max-warnings 0
```

Key rules enforced:
- `react/prop-types` — all components must declare PropTypes
- `react/no-unescaped-entities` — use `&apos;`, `&quot;` etc. in JSX text
- `no-unused-vars` — remove unused variables and imports
- `react-hooks/exhaustive-deps` — correct dependency arrays
- `react/no-unknown-property` — use `fetchPriority` (camelCase), not `fetchpriority`

### PropTypes

Every component must declare PropTypes for its props:

```jsx
import PropTypes from 'prop-types';

function MyComponent({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>;
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

MyComponent.defaultProps = {
  // optional defaults
};
```

### JSX Text Entities

Escape special characters in JSX text:
- `'` → `&apos;` (e.g., `Developer&apos;s Paradise`)
- `"` → `&quot;`

### Component Structure

- Page components live in `pro/src/pages/`
- Shared components live in `pro/src/components/common/`
- Hero components live in `pro/src/components/heroes/`
- Layout components live in `pro/src/components/layout/`
- Data lives in `pro/src/data/`
- Utilities/hooks live in `pro/src/lib/`

---

## Testing

### Unit Tests (Vitest)

50 tests across 11 files. Run with:

```bash
cd pro
npm test           # vitest run
npm run test:watch # watch mode
```

Test setup (`tests/unit/setup.ts`) mocks:
- `IntersectionObserver`, `matchMedia`, `requestAnimationFrame`
- GSAP (`gsap`, `useGSAP`, `getEase`, `Flip`, etc.)

### End-to-End Tests (Playwright)

```bash
cd pro
npm run test:e2e
```

---

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]
[optional footer]
```

### Types

| Type | Use for |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, missing semicolons, etc. |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or correcting tests |
| `chore` | Build process, CI config, auxiliary tools |

### Examples

```
feat: add 10 new portfolio projects to data layer
fix: resolve move/leave/updateRect scope in AboutHero
docs: update README with deployment instructions
chore: regenerate package-lock.json to sync with package.json
```

---

## Pull Request Process

1. Ensure your branch is up to date with `master`.
2. Run the full verification checklist (lint, test, build).
3. Open a PR against `master` with a clear title and description.
4. The CI pipeline will automatically run lint, test, and build.
5. Address any review comments or CI failures.
6. A maintainer will review and merge your PR.

### PR Checklist

- [ ] Lint passes with `--max-warnings 0`
- [ ] All unit tests pass
- [ ] Production build succeeds
- [ ] Changes are tested manually in the browser
- [ ] Documentation is updated (if applicable)
- [ ] Commit messages follow Conventional Commits

---

## Deployment

### GitHub Pages (Automatic)

Pushes to `master` trigger the CI/CD pipeline. On success, the site deploys to GitHub Pages automatically via `actions/deploy-pages@v4`.

Site URL: `https://prit-007.github.io/dev-paradise/`

### Vercel (Alternative)

Configure in the Vercel dashboard:

| Setting | Value |
|---------|-------|
| Root Directory | `pro` |
| Build Command | `npm install && npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Development Command | `npm run dev` |
| Framework Preset | Vite |

---

## Questions

Open an issue on GitHub or contact the maintainer:

- **Prit Vasani** — [GitHub](https://github.com/prit-007) — pritvasani@example.com

---

Thank you for contributing to Developer's Paradise! 🚀
