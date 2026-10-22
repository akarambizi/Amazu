---

description: "Roadmap-level progress tracker for 002-core-marketplace-features"
---

# Roadmap Tracker: Core Marketplace Features

This is **not** a task breakdown ready to implement — it's a checklist to
track which user story has been turned into its own focused spec (and then
completed). When you pick one up, run `/speckit-specify` to create a
dedicated `specs/00N-<name>/` with full acceptance criteria, then
`/speckit-plan` and `/speckit-tasks` as usual.

## Roadmap

- [ ] **US1 — Search** (P1, no auth dependency — can start anytime)
  - [ ] Dedicated spec created (`specs/003-search/spec.md`)
  - [ ] Implemented + tested
- [ ] **US2 — Bookings** (P1, depends on 001-authentication)
  - [ ] Dedicated spec created
  - [ ] Implemented + tested
- [ ] **US3 — Reviews** (P2, depends on US2)
  - [ ] Dedicated spec created
  - [ ] Implemented + tested
- [ ] **US4 — Payments** (P2, depends on US2)
  - [ ] Dedicated spec created
  - [ ] Implemented + tested
- [ ] **US5 — Admin** (P3, depends on 001-authentication)
  - [ ] Dedicated spec created
  - [ ] Implemented + tested

## Notes

- Update this file's checkboxes as each story moves forward — it's the
  single place to glance at overall project progress alongside
  `specs/001-authentication/tasks.md`.
