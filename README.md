# Amazu

Amazu is a property rental/listing marketplace (a smaller
Zillow/Airbnb-style app) — a personal project for practicing full-stack
development with a Node/Express/TypeScript backend and a React/TypeScript
frontend.

New here or picking this back up after a break? Start with
[`ROADMAP.md`](ROADMAP.md) — it links to the audit, the tooling backlog,
and the spec-kit feature specs that drive what gets built next.

## Stack

- **Client**: React 18, TypeScript, Vite, Vitest + Testing Library,
  styled-components, react-query, react-router-dom.
- **Server**: Express, TypeScript, MongoDB/Mongoose, Zod validation,
  Helmet + rate limiting, OpenTelemetry (metrics/tracing).
- **Tooling**: pnpm (both workspaces are independent pnpm projects, not a
  workspace — each has its own lockfile), a shared root ESLint/Prettier
  config, Husky + lint-staged, Docker Compose.
- **Observability**: Prometheus (metrics), Grafana (dashboards), Zipkin
  (tracing) — see [`server/src/docs/monitoring.md`](server/src/docs/monitoring.md).

## Prerequisites

- Node.js 20+
- pnpm 10 (`corepack enable` will pick up the pinned version automatically)
- Docker + Docker Compose (for the containerized path)

## Running locally

### Option A: Docker Compose (full stack, recommended)

```bash
docker compose up
```

This brings up `client` (http://localhost:3000), `server`
(http://localhost:5000), `mongo`, `zipkin` (http://localhost:9411),
`prometheus` (http://localhost:9090), and `grafana`
(http://localhost:4000). Source is bind-mounted into both `client` and
`server` containers, so edits on the host are picked up live.

> Note: port 5000 conflicts with macOS's AirPlay Receiver on some
> systems. Disable AirPlay Receiver (System Settings → General →
> AirDrop & Handoff) or remap the port in `docker-compose.yml` if needed.

### Option B: Run each workspace natively

You'll need a local or remote MongoDB instance — see
[`server/src/docs/database.md`](server/src/docs/database.md).

```bash
# install
pnpm install                 # root (shared lint/format tooling)
pnpm --dir server install
pnpm --dir client install

# run
pnpm --dir server run serve  # http://localhost:5000
pnpm --dir client run start  # http://localhost:3000
```

Or use the [Makefile](Makefile) shortcuts below.

## Common commands (Makefile)

```bash
make install   # install root + client + server deps
make dev       # run client + server natively, in parallel
make lint      # lint client + server
make test      # run client test suite
make build     # build client + server
make up        # docker compose up
make down      # docker compose down
make logs      # docker compose logs -f
```

## Repository layout

```
client/   React + Vite frontend
server/   Express + TypeScript backend
docs/     Audit, improvements backlog, architecture notes
specs/    spec-kit feature specs (spec.md -> plan.md -> tasks.md)
```
