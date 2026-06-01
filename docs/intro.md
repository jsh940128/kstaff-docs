---
id: intro
title: Introduction
sidebar_position: 0
---

# What is K-Staff?

K-Staff is a **privacy-first, operator-governed cross-border recruitment platform**
purpose-built for hiring foreign workers into Korea under E-9 and E-7-4 visa
programs. It connects four kinds of parties through a single, audited workflow,
and reveals sensitive candidate data only to the party that has earned access at
that step.

The platform is bilingual (English and Korean) and is operated by 한국부동산서비스
주식회사 (Korea Real Estate Service Co., Ltd.).

---

## The four roles

You will use a different part of K-Staff depending on what you do. Pick the
guide that matches your role.

| Role | Who they are | What they do |
|---|---|---|
| **Overseas Partner** | A recruitment agency abroad (for example in Vietnam) | Sources candidates, creates their profile, uploads documents |
| **Korea Partner** | A licensed Korean recruitment agency | Runs interviews, locks candidates, reports placements on the ground |
| **Employer** | A company in Korea that wants to hire | Signs the agreement, requests workers, hires |
| **Platform Manager** | K-Staff itself (the operator) | Curates supply, routes demand, grants access, runs the placement handshake |

If you are unsure which one you are, see the
[Role guides](/docs/overseas-partner) for a side-by-side comparison.

---

## The three data tiers

Candidate information is split into three tiers so the minimum is exposed by
default and the rest opens only after the right gate is passed. This is the
spine of the whole product.

| Tier | What is in it | When it is shown |
|---|---|---|
| **Tier-1: Public** | Country, target role, anonymized profile summary, a `public_code` | Visible to anyone browsing the platform. No PII. |
| **Tier-2: Resume** | Education, work experience, certifications | Employer: only after an explicit Tier-2 access grant. Korea Partner: only after **locking** the candidate. |
| **Tier-3: Documents** | Passport and other sensitive files | Korea Partner: only after locking. Platform Manager: full access. |

The `public_code` is the anonymized handle used everywhere before access is
granted. Real names, contact details, and passport data are never exposed at
Tier-1.

---

## How the platform governs itself

K-Staff is operator-governed: every sensitive transition (granting access,
approving an interview, confirming a placement) is brokered by the Platform
Manager and written to an audit log. **Direct off-platform communication
between parties is structurally forbidden** so that no candidate is moved
around K-Staff's audit boundary.

Three principles run through everything:

- **Tiered disclosure.** The minimum is exposed by default. More is revealed
  only when both compliance (agreement signed) and intent (request, access
  grant, or lock) are in place.
- **Time-bounded access.** Tier-2 grants expire (about 365 days) and are
  refreshed in place when re-granted. No silent permanent access.
- **Audit trail.** Every privileged action by the Platform is logged and is
  readable later for compliance review.

---

## Where to go next

- **[How K-Staff works](/docs/how-it-works)** is the full lifecycle on one
  page, with every hand-off between roles mapped out. Start here if you want
  the big picture in five minutes.
- **Role guides** give you step-by-step instructions for what you do, day to day:
  - [Overseas Partner](/docs/overseas-partner)
  - [Korea Partner](/docs/korea-partner)
  - [Employer](/docs/employer)
  - [Platform Manager](/docs/platform-manager)
