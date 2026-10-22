# Project Audit — 2026-10-21

A point-in-time snapshot of what's actually built in Amazu vs. what's
stubbed or missing, done after ~21 months without activity (last commit:
2024-01-08). Written so you don't have to re-discover this by reading every
file again. Re-run/update this after major milestones if it's useful.

## What's actually working

**Backend**
- Express + TypeScript server (`server/src/app.ts`) with CORS, Morgan
  request logging, JSON/urlencoded body parsing, a 404 handler.
- `Property` is a fully-implemented Mongoose model + full CRUD controller +
  routes (`GET/POST/PATCH/DELETE /properties`, `GET /properties/:id`).
- Swagger/OpenAPI docs served at `/api-docs` (`server/swagger.json`).
- A real observability stack: Winston logging, OpenTelemetry metrics
  exported to Prometheus, Zipkin tracing — wired into every request via
  `metricsMiddlewares`. This is more mature than most personal projects
  ever get.
- Docker Compose brings up client, server, Zipkin, Prometheus, and Grafana
  together.

**Frontend**
- React 18 + TypeScript + styled-components, CRA-based.
- A real page set: Home, Rent, Buy, SearchResults, Property detail,
  SignIn, SignUp, Typography, NotFound — routed via `react-router-dom`.
- A reasonably complete component library: Card/CardSkeleton/CardsList,
  Filter, Header, Footer, Hero, ListProperty, Pagination, TopCities,
  Comment, Property detail subcomponents.
- `react-query` wired up for the properties API; a mock server
  (`json-server` + fixture JSON) so frontend work doesn't require the
  backend running.
- 6 component-level test specs (`*.spec.tsx`) using Testing Library.
- ESLint + Prettier + Husky pre-commit hook (`lint-staged`) already
  configured for the client.

## What's stubbed or missing (the actual gap to "finished")

**Backend**
- **No authentication at all.** `users.controller.ts` has one function,
  `createUser`, with an empty body. There is no `User` model, no password
  hashing, no session/token mechanism. See `specs/001-authentication/`.
- **`POST/PATCH/DELETE /properties` are completely open** — anyone can
  create, edit, or delete any listing with no login. This is the direct
  consequence of the above, not a separate bug.
- **A real response bug**: `getProperty`, `updateProperty`, and
  `deleteProperty` in `properties.controller.ts` call
  `res.status(404).send()` when a property isn't found, but don't
  `return` afterward — execution falls through to a second
  `res.send(property)` a few lines later. In Express this throws
  `Error: Cannot set headers after they are sent to the client` at
  runtime for every 404 case. Tracked as T047 in
  `specs/001-authentication/tasks.md` since it's touched while adding
  ownership checks, but it's independently worth fixing even sooner.
- **No `cities` route/controller/model**, even though the frontend's
  `client/src/api/services/cities.ts` calls `GET /cities` — today this
  only works against the mock server, not the real backend.
- **Zero backend tests.** No Jest/Mocha/anything configured in
  `server/package.json`.
- **No input validation library** (no Zod/Joi/express-validator) —
  Mongoose's `required` schema validators are the only defense, and they
  run *after* a request has already been accepted and parsed.
- **No `.env`/`.env.example` anywhere in the repo.** `server/src/docs/database.md`
  tells a new contributor to set `MONGO_URI` in "the project's `.env`
  file", but no example file exists to copy from, and the variable name
  expected by `getMongoUri()` (`server/src/utils/environment.ts`) isn't
  documented anywhere visible.
- **MongoDB isn't in `docker-compose.yml`.** The documented setup
  (`database.md`) assumes a MongoDB installed natively on your machine —
  inconsistent with "runs via Docker" for every other service.
- **Both `package-lock.json` and `yarn.lock` exist in `server/`.** Scripts
  assume Yarn (`client`'s `prepare`/`precommit` scripts, `docker-compose.yml`
  commands); the npm lockfile is almost certainly stale/unused and should
  be removed once confirmed.

**Frontend**
- **`SignIn.tsx` and `SignUp.tsx` are static markup.** The forms have
  `action="/"` and no `onSubmit` handler, no `useState`, no API call —
  they render a login/signup screen that does nothing when submitted.
- **No client-side auth state** — no logic anywhere for "is a user signed
  in", no token storage, no protected-route concept in `App.tsx`.
- **`document.title = 'new title'`** in `App.tsx` — a placeholder left in
  from scaffolding, never set to something real ("Amazu — Find your next
  rental", etc.).
- Only 6 of ~20 components have test coverage; none of the 9 pages do.

**Project-wide**
- **No root `README.md`.** The only README in the repo is the unedited
  default Create React App one inside `client/`. Nothing documents how to
  run the project, what Amazu even is, or links to the docs that do exist
  (`server/src/docs/database.md`, `monitoring.md`).
- **No CI.** No `.github/workflows/` existed before this change (only the
  `.specify`/`.github/skills` scaffolding added alongside this audit) — no
  automated lint/test/build on push or PR.
- **No issues or project board on GitHub** — all historical work tracking
  lived in `server/src/docs/toDo.md` (now superseded by `specs/`) and
  commit messages alone.

## Bottom line

You're further along than "haven't touched it in 2 years" usually implies:
the properties domain is genuinely production-shaped (typed, logged,
observable, documented via Swagger), and the frontend has real UI built
out, not just wireframes. The gap to a usable app is concentrated almost
entirely in **one missing feature — authentication** — plus the general
engineering hygiene a 3-year-old personal project accumulates (no CI, no
backend tests, stray lockfile, undocumented env setup). See
`IMPROVEMENTS.md` for the full list of hygiene/tooling items, and
`specs/001-authentication/` for the next feature to actually build.
