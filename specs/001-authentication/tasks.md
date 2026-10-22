---

description: "Task list for 001-authentication"
---

# Tasks: User Authentication

**Input**: `specs/001-authentication/spec.md`, `specs/001-authentication/plan.md`

**Organization**: Grouped by user story (matches spec.md priorities) so each
can be implemented and tested independently.

## Phase 1: Setup

- [ ] T001 Add dependencies to `server/package.json`: `bcrypt`,
      `jsonwebtoken`, `zod`, plus dev deps `jest`, `ts-jest`, `supertest`,
      `@types/jest`, `@types/supertest`, `@types/bcrypt`,
      `@types/jsonwebtoken`, `mongodb-memory-server`
- [ ] T002 Add `server/jest.config.json` and a `test`/`test:watch` script in
      `server/package.json` (no test runner exists yet)
- [ ] T003 Decide and document the lockfile situation before adding deps —
      `server/` currently has both `package-lock.json` and `yarn.lock`
      (pick one; repo scripts assume Yarn)
- [ ] T004 Add `JWT_SECRET` to a new `server/.env.example` (none exists
      today) alongside the already-used `MONGO_URI`

## Phase 2: Foundational (blocks all user stories)

- [ ] T010 `server/src/types/users.types.ts` — `IUser`, `SignUpInput`,
      `SignInInput` types
- [ ] T011 `server/src/models/user.model.ts` — Mongoose schema: `email`
      (unique, lowercase, required), `passwordHash` (required, never
      serialized in `toJSON`), `name` (required), timestamps
- [ ] T012 `server/src/utils/validation.ts` — zod schemas for sign-up and
      sign-in request bodies
- [ ] T013 `server/src/utils/password.ts` — `hashPassword` /
      `verifyPassword` wrapping bcrypt
- [ ] T014 `server/src/utils/token.ts` — `signToken` / `verifyToken`
      wrapping jsonwebtoken, reading `JWT_SECRET` from env (throw at
      startup if missing, matching the pattern used for other required
      env vars in `server/src/utils/environment.ts`)

## Phase 3: User Story 1 — Sign up (P1)

- [ ] T020 [US1] Implement `signUp` in `users.controller.ts`: validate body
      → check for existing email (case-insensitive) → hash password →
      create user → sign token → respond 201 with token + public user
      fields (no passwordHash)
- [ ] T021 [US1] `server/src/routes/users.routes.ts` — `POST /users/signup`
- [ ] T022 [US1] Register `usersRoutes` in `server/src/routes/index.ts`
      under `/users`
- [ ] T023 [US1] Integration test: duplicate email → 409/400 with a clear
      message, not a raw Mongo duplicate-key error
- [ ] T024 [US1] Integration test: password below minimum length → 400
      with field-level error, no DB write attempted
- [ ] T025 [US1] Integration test: happy path → 201, response contains a
      token, response body does NOT contain `passwordHash`

## Phase 4: User Story 2 — Sign in (P1)

- [ ] T030 [US2] Implement `signIn` in `users.controller.ts`: look up user
      by email → verify password → sign token → respond 200
- [ ] T031 [US2] `POST /users/signin` route
- [ ] T032 [US2] Integration test: wrong password and nonexistent email
      both return the same generic error/status (no user enumeration)
- [ ] T033 [US2] Integration test: valid sign-in token is accepted by a
      protected route (depends on T040 below)

## Phase 5: User Story 4 — Protect routes (P1)

(Implemented before US3/sign-out since sign-out has no effect to test
without protected routes existing first.)

- [ ] T040 [US4] `server/src/middleware/auth.ts` — `requireAuth`:
      verifies `Authorization: Bearer <token>`, attaches `req.userId`,
      responds 401 on missing/invalid/expired token
- [ ] T041 [US4] Export `requireAuth` from `server/src/middleware/index.ts`
- [ ] T042 [US4] Apply `requireAuth` to `POST/PATCH/DELETE /properties*` in
      `properties.routes.ts`
- [ ] T043 [US4] Update `createProperty` to set `owner` from `req.userId`,
      not from the request body
- [ ] T044 [US4] Update `updateProperty`/`deleteProperty` to check the
      property's owner matches `req.userId`; return 404 if not (not 403 —
      per spec, don't reveal the resource exists for another owner)
- [ ] T045 [US4] Integration test: unauthenticated `POST /properties` → 401
- [ ] T046 [US4] Integration test: user A cannot update/delete user B's
      property → 404
- [ ] T047 [US4] Fix the existing missing-`return` bug in
      `properties.controller.ts` (`getProperty`/`updateProperty`/
      `deleteProperty` call `res.status(404).send()` but fall through to
      another `res.send()` below it, which throws
      `ERR_HTTP_HEADERS_SENT` in practice) — tightly coupled to touching
      these controllers for ownership checks in T044

## Phase 6: User Story 3 — Sign out (P2)

- [ ] T050 [US3] Implement `signOut` (client-side token discard is enough
      for the stateless-JWT decision in plan.md; document this clearly in
      the endpoint's response/behavior rather than silently no-op'ing)
- [ ] T051 [US3] `POST /users/signout` route
- [ ] T052 [US3] Integration test covering the documented sign-out
      behavior

## Phase 7: Frontend wiring

- [ ] T060 `client/src/api/services/users.ts` — `signUp`/`signIn`/
      `signOut` calls (mirror the pattern in `properties.ts`)
- [ ] T061 Wire `client/src/pages/SignUp.tsx` form to call the real API
      instead of `action="/"` with no handler
- [ ] T062 Wire `client/src/pages/SignIn.tsx` form the same way
- [ ] T063 Store the returned token (localStorage, or an httpOnly cookie
      if the backend is changed to set one) and attach it to subsequent
      axios requests
- [ ] T064 Add a signed-in state to `Header.tsx` (show user name / sign-out
      vs. sign-in/sign-up links)

## Phase 8: Docs

- [ ] T070 Update `server/src/docs/toDo.md` — check off "User routes"
- [ ] T071 Update `server/swagger.json` with the new `/users/*` endpoints
- [ ] T072 Update root `specs/001-authentication/spec.md` status from
      Draft → Implemented once all of the above is done and merged

## Dependencies

- Phase 2 blocks all user stories.
- US4 (protect routes) depends on US1+US2 existing (needs a way to obtain
  a token to test against).
- US3 (sign-out) is intentionally last — lowest priority, and more
  meaningful to test once protected routes exist.
- Phase 7 (frontend) depends on all backend phases being done.
