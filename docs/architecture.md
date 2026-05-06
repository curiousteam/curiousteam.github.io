# Architecture

This document explains _why_ the codebase is shaped the way it is — the constraints, the seams, and what changes when those constraints change.

## Constraints

1. **Static hosting (GitHub Pages).** No Node runtime, no server actions, no route handlers, no database connections. All HTML/CSS/JS must be pre-built and served as static files.
2. **Single-page-first design.** The portfolio's primary surface is one long scrollable page (`/`). Sub-pages exist for SEO and direct-link entry, but they reuse the same section components.
3. **Long-lived.** Built to be maintained for 5+ years. The domain layer is shaped so a future backend can plug in without touching the UI.

## Layered architecture

```
┌─────────────────────────────────────────────────────────────┐
│  src/app/(portfolio)/                                       │
│  Page (server component)                                    │
│   → composes section components                             │
│   → exports `metadata` via buildMetadata()                  │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  src/components/portfolio/<feature>/                        │
│  Section components (server by default)                     │
│   → import data from src/domains/portfolio/*.data.ts        │
│   → no business logic, no fetch calls                       │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  src/domains/<feature>/                                     │
│  Pure data, schemas, services                               │
│   • portfolio: typed read-only data (skills, projects, …)   │
│   • contact:   Zod schema + submit service                  │
│   • blog:      MDX frontmatter types (placeholder)          │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  External services (browser → network)                      │
│   • Formspree for contact submissions                       │
└─────────────────────────────────────────────────────────────┘
```

## Server vs client components

Server is the default. Client islands are limited to surfaces that need browser APIs or local state:

| Component                        | Why client                             |
| -------------------------------- | -------------------------------------- |
| `nav`, `section-index-rail`      | Read scroll position, observe sections |
| `theme-toggle`, `theme-provider` | Mount-only DOM attribute updates       |
| `custom-cursor`                  | Pointer-tracking RAF loop              |
| `terminal-bg`                    | Per-character typing animation         |
| `reveal` activator               | IntersectionObserver                   |
| `contact-form`, `query-provider` | Form state + mutation handling         |

Everything else — sections, project cards, service rows, testimonials — is pre-rendered server-side.

## The contact-service seam

`src/domains/contact/contact.service.ts` is the single point of change for the form's transport. Today it POSTs to Formspree. Tomorrow it could POST to a Next.js Route Handler that writes to Postgres via Prisma. The form component never changes; only the service body and `next.config.ts` (`output: "export"` becomes `undefined`).

```
contact-form.tsx
  ↓
useMutation(submitContact)
  ↓
contact.service.ts ← swap me
  ↓
fetch(Formspree)   ← or fetch("/api/contact"), or supabase.from(...).insert()
```

This is why `domains/` exists despite no backend today.

## Design tokens

The design ships as raw CSS in `src/app/globals.css` (ported from the design bundle's `styles.css`). Tokens are exposed as CSS custom properties on `:root` and overridden under `[data-theme="light"]`. Tailwind v4's `@theme inline` block re-exports the tokens as utilities (`bg-bg`, `text-ink`, `font-serif`, etc.) for components that prefer utility classes.

The design uses a lot of bespoke pixel-specific layouts (bento grids, marquee, terminal background). For these, plain CSS classes are kept verbatim from the design source — utility-first wouldn't shorten them, only obscure them.

## Testing strategy

- **Unit (Vitest, jsdom):** schema validity (`contact-schema.test.ts`), SEO helper output (`seo-metadata.test.ts`), data-integrity invariants (`portfolio-data.test.ts`).
- **E2E (Playwright):** the renderable critical path — hero loads, section rail visible, contact form validates.

Component-level rendering tests are deliberately skipped: the components are mostly pass-through view layers over typed data. Re-asserting that JSX renders props doesn't catch real regressions.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`):

1. `pnpm install --frozen-lockfile`
2. `pnpm typecheck && pnpm lint && pnpm test`
3. `pnpm build` → produces `out/` static export
4. `touch out/.nojekyll` (so GitHub Pages doesn't strip `_next/`)
5. Upload artifact, deploy via `actions/deploy-pages@v4`

Set `NEXT_PUBLIC_FORMSPREE_ID` as a repo secret. The workflow reads it at build time and inlines it into the static bundle.
