# Security Spec

## 1. Data Invariants
- Projects can be read by anyone (public portfolio).
- Projects can only be created, updated, or deleted by an authenticated admin user.

## 2. The "Dirty Dozen" Payloads
- T1: Unauthenticated read list (Should pass)
- T2: Unauthenticated read single (Should pass)
- T3: Unauthenticated create (Fail)
- T4: Unauthenticated update (Fail)
- T5: Unauthenticated delete (Fail)
- T6: Authenticated non-admin create (Fail)
- T7: Authenticated admin create with missing required field (Fail)
- T8: Authenticated admin create with extra field (Fail)
- T9: Authenticated admin update immutable field like id/createdAt (Fail)
- T10: Authenticated admin update valid field (Pass)
- T11: Authenticated admin delete (Pass)
- T12: Authenticated admin create with invalid types (Fail)
