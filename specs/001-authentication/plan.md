# Implementation Plan: User Authentication

**Branch**: `001-authentication` | **Date**: 2026-10-21 | **Spec**: `specs/001-authentication/spec.md`

**Input**: Feature specification from `specs/001-authentication/spec.md`

## Summary

Add a `User` model, password hashing, sign-up/sign-in/sign-out endpoints,
and an auth middleware applied to the existing (currently unauthenticated)
property-mutation routes. This is the first real feature built since the
project was paused — it unblocks everything else in
`server/src/docs/toDo.md` (bookings, reviews, payments, admin all need to
know who's calling).

## Technical Context

**Language/Version**: TypeScript (Node.js), matching the existing server

**Primary Dependencies to add**: `bcrypt` (password hashing), `jsonwebtoken`
(stateless session tokens), a validation library — `zod` recommended (no
validation library currently exists in the server's dependencies at all)

**Storage**: MongoDB via Mongoose, same as `Property` — add a `User`
collection

**Testing**: None currently exists for the server. This feature should
introduce the first ones — recommend Jest + Supertest + `mongodb-memory-server`
so tests don't require a real MongoDB instance to run in CI

**Target Platform**: Same Docker Compose stack already in the repo

**Project Type**: Web service (backend) + existing CRA frontend consuming it

**Decision — JWT vs. server-side sessions**: Use stateless JWTs (short-lived
access token). Rationale: no Redis/session store is currently provisioned
in `docker-compose.yml`, and adding one is out of scope for unblocking the
rest of the roadmap. Sign-out is handled by the client discarding the
token; a server-side revocation list can be added later if needed (track
as a follow-up, not a blocker for this feature).

**Constraints**: Passwords hashed with bcrypt (cost factor ≥ 10); JWT
secret from environment variable (`JWT_SECRET`), never hardcoded; auth
middleware must reuse the existing `logger` (`server/src/monitor/logger.ts`)
for warn/error logging, consistent with the rest of the codebase.

**Scale/Scope**: Personal project, low traffic — no need for refresh-token
rotation or multi-device session management in v1.

## Constitution Check

See `.specify/memory/constitution.md`. Principle III ("Auth and Ownership
Are Not Optional") is what this feature implements. Principle V ("Validate
Input, Don't Trust the Client") requires adding a validation library, which
this plan does. Principle IV ("Test-First for Business Logic") requires
this feature to ship with its own tests — see `tasks.md`.

## Project Structure

```
server/src/
├── models/
│   ├── user.model.ts          # NEW — User schema (email, passwordHash, name)
│   └── index.ts               # export User alongside Property
├── controllers/
│   └── users.controller.ts    # REPLACE stub — signUp, signIn, signOut, me
├── middleware/
│   ├── auth.ts                # NEW — verifies JWT, attaches req.userId
│   └── index.ts                # export requireAuth alongside metricsMiddlewares
├── routes/
│   ├── users.routes.ts        # NEW — POST /users/signup, /signin, /signout
│   ├── properties.routes.ts   # MODIFY — apply requireAuth to mutation routes
│   └── index.ts
├── utils/
│   └── validation.ts          # NEW — zod schemas for sign-up/sign-in bodies
└── types/
    └── users.types.ts         # NEW — IUser, sign-up/sign-in DTOs

server/
└── jest.config.json            # NEW — server has no test runner configured yet
```

## Open Questions for `/speckit-tasks` / implementation time

- Minimum password policy: this plan assumes "8+ characters" as a starting
  bar — revisit if you want a stronger rule (e.g. zxcvbn strength scoring).
- Token lifetime: assume 7 days for now (personal project, not a bank) —
  adjust in `auth.ts` if you want shorter-lived tokens + refresh flow later.
