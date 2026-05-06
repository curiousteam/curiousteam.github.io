# ADR 0001 — Static export over server runtime

**Status:** Accepted (2026-05-07)

## Context

Original spec called for Prisma + PostgreSQL/Supabase + Next.js Server Actions. Deployment target is GitHub Pages — a static-only host. None of the requested server primitives can run there.

## Decision

Use Next.js `output: "export"`. Drop Prisma, PostgreSQL, and server actions. Contact form submits to Formspree from the browser.

## Consequences

**Good:**

- Free hosting at `curiousteam.github.io`. No server costs.
- Build is reproducible from git alone.
- Lighthouse scores effectively capped at "fast" by default.

**Bad:**

- Cannot do server-side data fetching at request time (ISR, revalidation, fresh CMS reads).
- Cannot persist contact submissions to our own database.
- Any future feature requiring a backend forces a host migration.

## Mitigation

The `src/domains/` layer is structured so that adding a real backend later is mechanical:

1. Remove `output: "export"` from `next.config.ts`.
2. Replace the body of `contact.service.ts` with a `fetch("/api/contact")` call.
3. Add a Route Handler at `src/app/api/contact/route.ts`.
4. Migrate to Vercel/Netlify/Railway.

UI components, schemas, and types stay untouched.
