# Improvements & Tooling To Add

A list of things worth adding beyond the feature roadmap in `specs/`, since
this project is meant to be practiced like a real production codebase.
**Nothing here has been implemented** — it's a backlog for you to work
through at your own pace, roughly ordered by how much it unblocks
everything else.

## 1. CI/CD (highest leverage, do this early)

- [ ] `.github/workflows/ci.yml` — on every push/PR: install deps, lint
  both `client/` and `server/`, build both, run tests once they exist.
  Use a matrix or separate jobs per workspace so a client failure doesn't
  block a server-only PR from showing its own status.
- [ ] Branch protection on `master` — require the CI workflow (and
  eventually a review) to pass before merging. You already follow a
  PR-based workflow by habit; this makes it enforced, not just convention.
- [ ] Dependabot (or Renovate) config for both `client/package.json` and
  `server/package.json` — dependencies are ~2 years stale (React
  Testing Library v13, CRA 5, TypeScript 5.2, etc.) and some likely have
  known CVEs by now.
- [ ] A PR template (`.github/pull_request_template.md`) and basic issue
  templates — you're already in the habit of one-PR-per-feature; a
  template just standardizes what you write each time (what changed, how
  it was tested).

## 2. Testing

- [ ] Add a server test runner (Jest + ts-jest + Supertest +
  `mongodb-memory-server` — already scoped into
  `specs/001-authentication/tasks.md` since auth is the first feature
  that should land with tests).
- [ ] Backfill at least one integration test for the existing `Property`
  CRUD controller before/while building auth on top of it — right now
  it has zero coverage despite being the most complete part of the app.
- [ ] Add page-level tests on the client (currently only components have
  `*.spec.tsx`; none of the 9 pages do).
- [ ] Consider an E2E layer once auth + one more feature exist (Playwright
  or Cypress) — not worth it yet for a single CRUD resource with static
  auth pages, but worth planning for once there's a real user flow to
  click through (sign up → list a property → search → book).

## 3. Security & input handling

- [x] Add a validation library (Zod recommended, matches TypeScript well)
  for all request bodies — currently Mongoose schema validation is the
  only defense, and it runs after a request is already accepted.
- [x] Add `helmet` to `server/src/app.ts` for standard security headers —
  currently absent.
- [x] Add rate limiting (`express-rate-limit`) at least on the future
  sign-in endpoint, to blunt brute-force attempts once auth exists.
  (Applied globally via env-configurable middleware in `app.ts`; narrow
  further once the sign-in endpoint exists.)
- [x] Restrict CORS to known origins in production — `cors()` with no
  options currently allows any origin. (Now reads `CORS_ORIGINS` from
  env, see `server/.env.example`.)
- [ ] `npm audit` / `yarn audit` on both workspaces once dependencies are
  updated — likely several known vulnerabilities given the dependency age.
  (Deferred: run once on `main` after this PR merges, as its own
  follow-up — fixing audit findings is a distinct piece of work from the
  tooling migration itself.)

## 4. Developer experience / environment

- [x] Add `server/.env.example` (referenced as a prerequisite in
  `specs/001-authentication/plan.md` for `JWT_SECRET`, and already
  overdue for the existing `MONGO_URI`).
- [x] Add MongoDB to `docker-compose.yml` as its own service so the whole
  stack — not just client/server/observability — comes up with one
  command, instead of requiring a natively-installed MongoDB
  (`server/src/docs/database.md`'s current instructions).
- [x] Resolve the dual lockfile in `server/` (`package-lock.json` +
  `yarn.lock>` — pick one, delete the other, document the choice).
  (Both workspaces migrated to pnpm; `pnpm-lock.yaml` is now the single
  lockfile in `client/`, `server/`, and the repo root.)
- [x] Write a root `README.md` — there currently isn't one at all (only
  the default, unedited CRA README inside `client/`). Should cover: what
  Amazu is, how to run it locally (Docker and non-Docker paths), links to
  `docs/AUDIT.md`, `specs/`, and the existing `server/src/docs/*.md`
  files, and the monitoring stack (Grafana/Prometheus/Zipkin URLs once
  running).
- [x] Consider a `Makefile` (or npm/yarn workspace scripts at the repo
  root) so `make up` / `make test` work across both `client/` and
  `server/` without `cd`-ing into each — similar to the pattern already
  used in your FitTrack project.

## 5. Dependency / platform modernization

- [x] CRA (`react-scripts`) is in maintenance mode upstream — consider a
  migration path to Vite once the app is otherwise stable (not urgent,
  but worth knowing CRA won't get meaningful updates going forward).
  (Migrated: `client/` now runs on Vite + Vitest, see `vite.config.ts`.)
- [x] React 18 → latest, TypeScript 5.2 → latest, and the rest of both
  dependency trees — do this as its own PR (or a few, grouped logically)
  before building heavily on top of 2-years-stale packages, rather than
  mixing dependency bumps into feature PRs.
  (Bumped within the same majors on both workspaces. Deliberately
  deferred riskier majors: Express 5, ESLint 9 flat config, TypeScript 7,
  Mongoose 9, React 19, react-router-dom 7, styled-components 6, and
  `react-query` v3 → `@tanstack/react-query` v4/v5 — each is its own
  breaking-change PR.)
- [x] Remove `@types/axios` from `client/package.json` — axios ships its
  own types natively since v0.14+; this devDependency is dead weight that
  can actually conflict with the real types.

## 6. Product/feature ideas beyond the original `toDo.md` scope

These weren't in your original plan but are natural fits for a rentals
marketplace, if you want to keep leveling up beyond the core loop in
`specs/002-core-marketplace-features/`:

- [ ] Image upload for listings (currently `images: string[]` on
  `Property` — presumably URLs; consider S3/Cloudinary + a real upload
  flow instead of expecting pre-hosted URLs).
- [ ] Saved/favorited listings per user.
- [ ] Email notifications (booking confirmed, review reminder) — a good
  excuse to learn a queue (BullMQ + Redis) since Redis isn't yet in the
  stack at all.
- [ ] Map-based search (Mapbox/Google Maps) using the existing
  `location.address`/city/state fields.
- [ ] Rate the observability setup you already have: you have metrics +
  tracing but (as far as this audit found) no Grafana dashboards saved to
  the repo (`grafana` service has no provisioned dashboards/datasources
  config) — currently whatever's in Grafana only exists in that
  container's volume, not version-controlled.
