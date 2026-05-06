# Curious Team Portfolio

Production portfolio for [curiousteam.github.io](https://curiousteam.github.io). Built as a static-exported Next.js site, deployed to GitHub Pages.

## Stack

- **Framework:** Next.js 16 (App Router, `output: "export"`)
- **Language:** TypeScript (strict, `noUncheckedIndexedAccess`)
- **Styling:** Tailwind CSS v4 + design tokens via CSS variables
- **Forms:** React Hook Form + Zod (`contactSchema`)
- **Server state:** TanStack Query
- **Theme:** `next-themes` with `data-theme` attribute (dark/light)
- **Tests:** Vitest (unit) + Playwright (e2e)
- **Lint/Format:** ESLint flat config + Prettier + Husky + lint-staged

## Getting started

```bash
pnpm install
cp .env.example .env.local   # set NEXT_PUBLIC_FORMSPREE_ID
pnpm dev                     # http://localhost:3000
```

## Scripts

| Command          | What it does           |
| ---------------- | ---------------------- |
| `pnpm dev`       | Local dev server       |
| `pnpm build`     | Static export → `out/` |
| `pnpm typecheck` | `tsc --noEmit`         |
| `pnpm lint`      | ESLint                 |
| `pnpm format`    | Prettier write         |
| `pnpm test`      | Vitest unit tests      |
| `pnpm test:e2e`  | Playwright e2e tests   |

## Architecture

```
Page (server component)
  → composes section components from src/components/portfolio/*
  → each section reads typed data from src/domains/portfolio/*.data.ts
  → contact form is the only interactive island
        ↓
        ContactForm (client) → contact.service.submitContact()
                                ↓
                                fetch → Formspree
```

Server components by default. Client components are limited to: `terminal-bg`, `custom-cursor`, `nav` (for scroll state), `section-index-rail`, `theme-toggle`, `theme-provider`, `query-provider`, `reveal` activator, `contact-form`.

### Where things live

- `src/app/(portfolio)/` — public routes. `layout.tsx` wires nav, footer, providers.
- `src/components/portfolio/<feature>/` — section components, one folder per feature.
- `src/components/shared/` — cross-cutting UI: nav, footer, cursor, rail, theme.
- `src/domains/portfolio/*.data.ts` — read-only typed content for the homepage.
- `src/domains/contact/` — Zod schema, service, types. Single seam to swap when a real backend lands.
- `src/lib/seo/metadata.ts` — `buildMetadata()` helper. Used by every page that exports `metadata`.
- `src/hooks/` — `use-reveal`, `use-scroll-nav`, `use-cursor`.
- `src/tests/{unit,e2e}/` — Vitest + Playwright.

## Deploy

GitHub Actions builds on push to `ai-portfolio` (or `master`) and deploys `out/` to GitHub Pages. Set `NEXT_PUBLIC_FORMSPREE_ID` as a repository secret (Settings → Secrets and variables → Actions).

## Why static export

GitHub Pages cannot run server actions, route handlers, or a database. The contact form posts directly to Formspree from the browser. The `domains/` layer is shaped so that when a real backend exists, the only change is `contact.service.ts` (and switching `output` off in `next.config.ts`). UI never moves.

See `docs/architecture.md` for the long version and `docs/adr/` for the recorded decisions.
