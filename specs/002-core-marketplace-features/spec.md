# Feature Specification: Core Marketplace Features (Bookings, Search, Reviews, Payments, Admin)

**Feature Branch**: `002-core-marketplace-features`

**Created**: 2026-10-21

**Status**: Draft — intentionally high-level; expand into dedicated specs
(`003-bookings`, `004-search`, etc.) with `/speckit-specify` when each is
picked up

**Input**: Carried forward from `server/src/docs/toDo.md`, written before
the project was paused. All five areas below depend on
`specs/001-authentication` landing first — "who is this request from" is a
prerequisite for bookings, reviews, and admin actions.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Search for properties (Priority: P1)

A visitor searches by location, price range, bedroom count, and available
dates to find listings matching their needs.

**Why this priority**: The frontend already has `SearchResults.tsx`,
`Filter.tsx`, and a `Pagination` component expecting this — it's the
highest-value gap between what the UI promises and what the API delivers.
Doesn't require auth, so it can actually ship before 001 if desired.

**Independent Test**: `GET /properties?city=X&minPrice=Y&bedRooms=Z` returns
only matching, paginated results.

---

### User Story 2 - Book a property (Priority: P1)

A signed-in user requests to book a property for a date range; the owner
(or system) can confirm/reject it.

**Why this priority**: The core transaction the whole app exists for.
Depends on 001-authentication (needs to know who's booking) and on
`availableDate`/calendar logic on `Property`.

**Independent Test**: Signed-in user creates a booking for an available
date range → booking record created, property availability reflects the
new booking on subsequent reads.

---

### User Story 3 - Review a property after a stay (Priority: P2)

A user who completed a booking leaves a rating + comment on the property.

**Why this priority**: Builds trust/discovery (feeds the existing `rating`
field on `Property` and the frontend's `Comment` component), but has no
value until bookings exist to review.

**Independent Test**: A user with a completed booking posts a review;
users without a completed booking for that property are rejected.

---

### User Story 4 - Pay for a booking (Priority: P2)

A user pays for a confirmed booking through a payment provider.

**Why this priority**: Required for a real transaction to complete, but
intentionally sequenced after bookings/reviews — introduces a third-party
integration (Stripe or similar) and PCI-adjacent concerns that deserve
their own focused spec rather than being rushed.

**Independent Test**: A confirmed booking can be paid; the payment
provider's webhook/callback updates the booking's payment status.

---

### User Story 5 - Admin manages listings, users, bookings (Priority: P3)

An administrator can view/moderate properties, users, and bookings.

**Why this priority**: Lowest priority — valuable for operating the
platform, but not needed for the core user-facing loop (search → book →
review) to work end to end.

**Independent Test**: A user with an `admin` role can list/deactivate any
property or user; a non-admin hitting the same endpoint gets 403.

### Edge Cases

- Double-booking: two users attempt to book overlapping dates for the same
  property simultaneously — needs a concurrency-safe check, not just an
  application-level read-then-write.
- A review submitted for a booking that was later cancelled/refunded.
- A payment webhook arriving before the booking record finishes being
  created (ordering/race condition).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST support filtering properties by at least city,
  price range, bedroom count, and listing type (rent/buy) — matching the
  fields already on `IProperty`.
- **FR-002**: System MUST paginate search results (the frontend
  `Pagination` component already assumes this).
- **FR-003**: System MUST let an authenticated user create a booking
  request for a property and date range.
- **FR-004**: System MUST prevent two confirmed bookings from overlapping
  for the same property.
- **FR-005**: System MUST let a user who completed a booking leave exactly
  one review per booking.
- **FR-006**: System MUST integrate a third-party payment provider rather
  than handling raw card data directly (PCI scope reduction).
- **FR-007**: System MUST restrict admin endpoints to users with an admin
  role/flag.

### Key Entities

- **Booking**: property, user (renter), date range, status (pending/
  confirmed/cancelled/completed), payment status.
- **Review**: booking reference, property, user, rating, comment,
  createdAt.
- **Payment**: booking reference, provider transaction id, amount, status.
- **Role**: extend the `User` model from 001-authentication with a role
  field (`user` | `admin`) rather than a separate entity.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Search returns correct, paginated results for every filter
  combination exposed in the existing `Filter.tsx` UI.
- **SC-002**: Zero double-bookings possible under concurrent requests
  (verified by a concurrency test, not just manual testing).
- **SC-003**: A review can only be created by a user with a completed
  booking for that property.

## Assumptions

- This spec intentionally stays at a roadmap level of detail. Before
  starting any one user story, run `/speckit-specify` to produce a focused
  spec (its own `specs/00N-*` folder) with full acceptance criteria —
  don't implement straight from this document.
- Payment provider choice (Stripe vs. alternatives) is deferred to that
  feature's own spec/plan.
- All five stories assume `001-authentication` is complete.
