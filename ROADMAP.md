# Amazu Roadmap

Amazu is a property rental/listing marketplace (think a smaller
Zillow/Airbnb hybrid) — the original purpose was to practice full-stack
development (Node/Express/TypeScript backend, React/TypeScript frontend).
This file is the entry point after a long pause on the project
(last commit before this audit: 2024-01-08).

**Start here**:

1. [`docs/AUDIT.md`](docs/AUDIT.md) — what's actually built vs. stubbed,
   as of 2026-10-21. Read this first; it's more reliable than trying to
   remember where you left off.
2. [`docs/IMPROVEMENTS.md`](docs/IMPROVEMENTS.md) — tooling/hygiene
   backlog (CI, tests, env setup, security, dependency updates) separate
   from feature work. Not implemented — this is your list to work
   through.
3. [`specs/`](specs/) — spec-kit feature specs, the source of truth for
   what to build next and in what order:
   - [`specs/001-authentication/`](specs/001-authentication/spec.md) —
     the next feature to build. Nothing else in the roadmap works without
     it (properties can currently be created/edited/deleted by anyone,
     with no login at all). Has a full `spec.md` → `plan.md` → `tasks.md`
     breakdown ready to implement.
   - [`specs/002-core-marketplace-features/`](specs/002-core-marketplace-features/spec.md) —
     bookings, search, reviews, payments, admin. Written at roadmap level
     of detail; expand each into its own dedicated spec with
     `/speckit-specify` when you pick it up.

## How to track progress going forward

- `specs/001-authentication/tasks.md` has checkbox-level tasks — check them
  off as you go, same as any other spec-kit feature in your other
  projects (FitTrack, Slotwise).
- `specs/002-core-marketplace-features/tasks.md` tracks at the
  "has this story been turned into its own spec yet" level, since those
  are further out.
- When you finish a feature, update its `spec.md` status from `Draft` to
  `Implemented`, and update `docs/AUDIT.md`'s "what's stubbed or missing"
  section so it doesn't go stale again.

## Working process (matches your other projects)

Feature branch → PR → review → merge. No direct commits to `master`. Use
`/speckit-specify` → `/speckit-plan` → `/speckit-tasks` →
`/speckit-implement` for any new feature beyond what's already scaffolded
in `specs/`.
