# ADR 0002 — Keep the domain layer despite a static-only build

**Status:** Accepted (2026-05-07)

## Context

With no backend, `domains/`, `services/`, and Zod schemas could collapse into the components that use them. That's tempting — fewer files, less indirection.

## Decision

Keep the domain layer. Each feature gets its own folder with `<feature>.types.ts`, `<feature>.data.ts` or `<feature>.schema.ts`, and (where applicable) `<feature>.service.ts`.

## Rationale

- **Static today is not static tomorrow.** The portfolio has explicit growth paths: contact submissions to a real database, blog posts from a CMS, a quote-request flow. Each of those needs the seam now.
- **Schemas pull double duty.** `contactSchema` validates the form on the client _and_ gives us a typed contract for whatever backend processes it later. Co-locating Zod with components couples validation to UI.
- **Data files are a CMS placeholder.** The portfolio data (`projects.data.ts`, `skills.data.ts`, …) ships as code today. When real CMS wiring lands, only the import path changes — components keep destructuring the same `Project[]` shape.

## Consequences

- A few extra files for what is, today, a static page. Acceptable.
- Junior contributors will sometimes ask "why doesn't this component just inline the data?" — the answer is in `docs/architecture.md`.
