# Feature Specification: User Authentication

**Feature Branch**: `001-authentication`

**Created**: 2026-10-21

**Status**: Draft

**Input**: Resuming a paused project. `server/src/docs/toDo.md` lists "User
routes" first because every other unfinished area (bookings, reviews,
payments, admin) needs to know who the caller is. `users.controller.ts`
exists but is an empty stub (`createUser` does nothing); there is no
session/token mechanism, no password hashing, and the frontend's
`SignIn`/`SignUp` pages are static markup with no API calls.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Sign up with email and password (Priority: P1)

A new visitor creates an account with an email and password so they can
list a property or (later) book one.

**Why this priority**: Nothing else in the backlog (bookings, reviews,
listing ownership) is possible without a real user record and a way to
prove who's making a request.

**Independent Test**: POST valid email/password/name to the sign-up
endpoint, confirm a user document is created with a hashed (not plaintext)
password and a session token is returned.

**Acceptance Scenarios**:

1. **Given** no account exists for `jane@example.com`, **When** she submits
   the sign-up form with a valid email and a password meeting the minimum
   strength rule, **Then** a user is created and she's signed in
   immediately (session/token returned).
2. **Given** `jane@example.com` already has an account, **When** someone
   submits sign-up again with that email, **Then** the request is rejected
   with a clear "account already exists" error (not a generic 500).
3. **Given** a password shorter than the minimum length, **When** sign-up is
   submitted, **Then** the request is rejected with a field-level validation
   error before anything touches the database.

---

### User Story 2 - Sign in and stay signed in (Priority: P1)

A returning user signs in and the app remembers them across page
reloads/app restarts until they explicitly sign out or the session expires.

**Why this priority**: Equally foundational to sign-up — without this,
every subsequent "owner can edit their own listing" or "user can view their
bookings" feature has no identity to check against.

**Independent Test**: Sign in with correct credentials, receive a token;
use that token on a protected endpoint and confirm it's accepted; wait past
expiry (or use an intentionally-expired test token) and confirm it's
rejected.

**Acceptance Scenarios**:

1. **Given** valid credentials, **When** the user submits sign-in, **Then**
   they receive a token/session identifying their account.
2. **Given** an incorrect password, **When** sign-in is attempted, **Then**
   the response is a generic "invalid credentials" error — it must NOT
   reveal whether the email exists (avoids user enumeration).
3. **Given** a signed-in session, **When** the token is sent on a
   protected request, **Then** the request succeeds and the server can
   identify which user made it.

---

### User Story 3 - Sign out (Priority: P2)

A signed-in user ends their session from any device.

**Why this priority**: Lower urgency than sign-up/sign-in, but required for
a complete, testable auth loop and for shared/public computer safety.

**Independent Test**: Sign in, call sign-out, confirm the previously issued
token no longer works on a protected endpoint.

**Acceptance Scenarios**:

1. **Given** a signed-in session, **When** the user signs out, **Then**
   their token is invalidated and subsequent requests with it are rejected.

---

### User Story 4 - Protect existing and future routes (Priority: P1)

Routes that should require a signed-in user (initially: creating/updating/
deleting a property, since `properties.controller.ts` currently lets
anyone do this) are rejected for anonymous callers.

**Why this priority**: Without this, authentication exists but doesn't
actually protect anything — the current `POST/PATCH/DELETE /properties`
endpoints are open to any caller today, which is the concrete bug this
closes.

**Independent Test**: Call `POST /properties` with no token → 401. Call it
with a valid token → succeeds and the created property is associated with
that user as owner.

**Acceptance Scenarios**:

1. **Given** no auth token, **When** a request hits a protected route,
   **Then** the response is 401 Unauthorized, not a 500 or a silent pass.
2. **Given** a valid token for user A, **When** user A tries to update/
   delete a property owned by user B, **Then** the response is 404 (don't
   reveal that the resource exists for someone else — same pattern as
   other projects in this workspace) rather than 403.

### Edge Cases

- What happens when a sign-up request reuses an email that differs only by
  case (`Jane@Example.com` vs `jane@example.com`)? Should be treated as the
  same identity (normalize to lowercase before lookup/storage).
- How does the system handle a token that's well-formed but signed with an
  old/rotated secret?
- What happens if the database is unreachable during sign-up — does the
  user see a clear "try again" error, or a stack trace (current controllers
  leak `error` objects into some responses — see audit)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow creating an account with email, password,
  and display name.
- **FR-002**: System MUST hash passwords before storing them (never store
  plaintext) — e.g. bcrypt/argon2.
- **FR-003**: System MUST validate the request body (email format, password
  minimum length) before hitting the database, returning 400 with
  field-level errors on failure.
- **FR-004**: System MUST issue a session/token on successful sign-up and
  sign-in that can be presented on subsequent requests to identify the
  user.
- **FR-005**: System MUST reject sign-in with a generic error that doesn't
  distinguish "wrong password" from "no such account".
- **FR-006**: System MUST provide a way to invalidate a session (sign-out).
- **FR-007**: System MUST provide reusable middleware that protected routes
  can apply to require a valid session and expose the authenticated user's
  id to the controller.
- **FR-008**: System MUST apply that middleware to the existing
  property-mutation routes (create/update/delete) as part of this feature,
  since they are currently unauthenticated.
- **FR-009**: System MUST NOT accept a client-supplied user/owner id on
  property create — the owner is derived from the authenticated session.

### Key Entities

- **User**: email (unique, case-insensitive), hashed password, display
  name, created/updated timestamps. Does not yet exist as a Mongoose model
  — `users.controller.ts` has no corresponding model file.
- **Session/Token**: identifies which user a request is acting as; whether
  this is a signed JWT (stateless) or a DB-backed session (revocable table)
  is an implementation decision for `plan.md`, not this spec.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new user can go from the sign-up form to a signed-in,
  identified session in one request/response round trip.
- **SC-002**: 100% of password values reaching the database are hashed —
  verified by inspecting a test user document directly.
- **SC-003**: Every existing property-mutation endpoint (`POST`, `PATCH`,
  `DELETE /properties*`) returns 401 for unauthenticated requests —
  verified by an integration test per route.
- **SC-004**: No endpoint response body ever contains a raw password hash
  or a stack trace.

## Assumptions

- Email/password is the only sign-in method for v1 — social login (Google,
  etc.) is out of scope here and can be a follow-up spec.
- The frontend `SignIn`/`SignUp` pages' visual design is reused; this spec
  covers wiring them to real API calls, not a redesign.
- JWT vs. server-side session storage is left to `plan.md` to decide based
  on what's simplest to run alongside the existing stack (no Redis/session
  store currently provisioned).
- "Properties" is the only protected resource in scope for this spec;
  bookings/reviews/payments get their own specs once they exist, and will
  depend on this one.
