# Amazu Constitution

## Core Principles

### I. Spec-Driven Development
Every non-trivial feature gets a spec (`specs/NNN-name/spec.md`) before a
plan (`plan.md`) before tasks (`tasks.md`) before code. Use the `/speckit-*`
Copilot skills for new features. Resuming unfinished work (users, bookings,
search, reviews, payments, admin — see `server/src/docs/toDo.md`) goes
through the same process rather than being bolted on ad hoc.

### II. No Unfinished Work on `master`
Features land via a feature branch + PR, reviewed before merge — never a
direct commit to `master`. A stub controller (e.g. an empty function) is not
"done"; it either ships behind a route that's fully implemented and tested,
or it doesn't get routed/merged yet.

### III. Auth and Ownership Are Not Optional
Any endpoint that reads or writes a user's own data (bookings, reviews,
listed properties) must authenticate the caller and derive identity from a
verified token/session — never from a client-supplied `userId` in the body
or query string. There is currently no authentication system; this
principle governs the one being built next, not a retrofit of best-effort
checks.

### IV. Test-First for Business Logic
Every controller that touches the database gets at least an integration
test (Jest/Supertest + an in-memory or test MongoDB instance) before being
considered complete. This repo currently has zero backend tests — new work
does not get to repeat that gap.

### V. Validate Input, Don't Trust the Client
Request bodies are validated against a schema (e.g. Zod or Joi) before
touching Mongoose. Mongoose's own `required` validators are a last line of
defense, not the input-validation layer.

### VI. Observability Already Exists — Use It, Don't Rebuild It
Winston logging, OpenTelemetry/Prometheus metrics, and Zipkin tracing are
already wired up (`server/src/monitor/`). New routes and controllers use the
existing `logger` and `metricsMiddlewares` rather than introducing a second
logging/metrics approach.

## Technology Constraints

- **Backend**: Node.js + Express + TypeScript + Mongoose (MongoDB), package
  manager is Yarn (drop `package-lock.json` once confirmed — see audit).
- **Frontend**: React (Create React App) + TypeScript + styled-components +
  react-query + react-router-dom.
- **API contract**: documented in `server/swagger.json`, served at
  `/api-docs`. Keep it in sync with routes as they're added.
- **Local infra**: Docker Compose (client, server, Zipkin, Prometheus,
  Grafana). MongoDB itself currently runs outside Docker (see audit) —
  containerize it rather than requiring a native install, once revisited.
- **Monitoring stack**: OpenTelemetry → Prometheus (metrics) + Zipkin
  (traces), visualized in Grafana. Don't add a second observability vendor.

## Development Workflow

1. New feature → `/speckit-specify` → `/speckit-plan` → `/speckit-tasks` →
   implement tasks → `/speckit-implement` for agent-assisted pairing on
   specific tasks as needed.
2. Before committing: `yarn lint` (both `client/` and `server/`) must pass;
   once a test suite exists for `server/`, `yarn test` must also pass in
   both workspaces.
3. Keep PRs scoped to one feature/user story at a time — this repo's own
   history (PRs #1–#6) already follows this; keep doing it.

## Governance

This constitution guides how Amazu is built, including resuming work after
a long pause. Amend it as the project's needs evolve; note the change and
date below.

**Version**: 1.0.0 | **Ratified**: 2026-10-21 | **Last Amended**: 2026-10-21
