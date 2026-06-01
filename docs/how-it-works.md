---
id: how-it-works
title: How K-Staff works
sidebar_position: 1
---

# How K-Staff works

This is the entire K-Staff lifecycle in one page. It shows what each of the four
roles does, in order, and where the hand-offs happen. Each step is brief on
purpose; the [role guides](/docs/overseas-partner) have the screens and the
detail.

---

## The hand-off map

```
OVERSEAS PARTNER      PLATFORM MANAGER         EMPLOYER                 KOREA PARTNER
-----------------     ----------------         --------                 -------------
create candidate
  (Tier-1/2/3) .....> supply is now visible
upload documents

                      publish MSA agreement
                      provision employer .....> account created
                                                sign MSA
                      raise trust level <...... compliance dashboard
                                                request resume access
                      grant Tier-2 access ....> view Tier-2 resume
                                                create demand request
                      triage: reviewing
                      route to Korea Partner ........................................> demand list received
                                                                                       accept the list
                                                                                       review Tier-1 only
                                                                                       (resume/docs locked)
                                                                                       decline unfit
                                                                                       request interview
                      approve interview <........................................... (waits)
                                                                                       LOCK candidate
                                                                                       (agree fee; Tier-2 +
                                                                                        Tier-3 now unlocked)
                                                                                       report placement
                      propose fee ...............................................> acknowledge fee
                      confirm placement
                      generate contract draft
                      finalize contract ........> employer sees finalized
candidate shows
 "Placed" (sanitized) E-7-4 scoring + deadlines <................................. feed E-7-4 profile data
```

After confirmation the relationship becomes ongoing: E-7-4 visa-upgrade scoring,
compliance deadline reminders (D-7 / D-1), milestone reminders at 30 days, 1
year, and 3 years, and rehire tracking as contracts approach their end.

---

## The lifecycle, in order

### 1. Supply: the candidate enters the system

The **Overseas Partner** creates a candidate. A single submission carries all
three tiers at once:

- **Tier-1 (public):** country, target role family, profile summary.
- **Tier-2 (resume):** education, work history, certifications.
- **Tier-3 (documents):** passport and other sensitive files (uploaded to
  Cloudflare R2 storage).

The candidate now exists, with an anonymized `public_code` that every other role
will use to refer to them before access is granted.

### 2. Compliance: the employer comes online

The **Platform Manager** publishes the active **Master Services Agreement
(MSA)** and provisions an Employer account. The employer signs in and is met
with the compliance dashboard. Until they sign the MSA, **all Tier-2 endpoints
return 403**. There is no resume browsing without an agreement on file.

### 3. Trust and intent: unlocking Tier-2

After signing the MSA, the employer can browse Tier-1 candidates. To open a
specific resume they must:

1. Be at a sufficient **trust level** (the Platform Manager raises trust from
   `restricted` to `verified` / `trusted` / `partner` based on the relationship).
2. **Request resume access** for that specific candidate.
3. Wait for the Platform Manager to grant Tier-2 access for the
   `(employer, candidate)` pair.

The grant lasts about **365 days** and is refreshed in place if re-issued, so
access never silently disappears mid-hire. Even a fully `trusted` employer still
needs an explicit grant per candidate.

### 4. Demand: the employer creates a request

The employer submits a **demand request** with the role needed, headcount, any
requirements, and the `public_code`s of the candidates of interest. The request
enters the platform with status `open`.

### 5. Triage and routing

The Platform Manager reviews the request (`status = reviewing`) and **routes**
it to a Korea Partner whose specialty fits. Routing creates a **demand list**
that the Korea Partner can see and act on. The Platform Manager has full
visibility (any candidate, full profile, all documents) for review.

### 6. Korea Partner execution (the firewall)

The Korea Partner accepts the demand list. Critically, **before locking a
candidate the partner sees only Tier-1 information**. Trying to open the resume
or documents returns `403`. They can:

- Decline candidates that do not fit.
- Request an interview (which the Platform Manager must approve).

When they decide to commit, they **lock** the candidate. The lock is the most
important gate in the system: it simultaneously **(a)** opens Tier-2 (resume)
and Tier-3 (documents) for that partner, and **(b)** commits the partner to the
fee. After the lock they have everything they need to actually hire.

### 7. Placement

The Korea Partner hires the worker and reports the placement with a contract
start date. The Platform then runs a **two-step fee handshake**:

1. Platform Manager **proposes** the final fee.
2. Korea Partner **acknowledges** the fee.
3. Platform Manager **confirms** the placement.

The candidate's status is now `placed` and the case shows up in employer-side
dashboards. The Overseas Partner sees only a sanitized stage label
(`Placed`), never the employer name or the fee.

### 8. Contract

The Platform Manager generates a bilingual (Korean and English) contract draft.
Drafts can be regenerated (each iteration bumps the version) and reviewed
internally. The **employer never sees a draft**: only a contract that has been
explicitly **finalized** by the Platform Manager becomes visible to them.

### 9. Post-placement: ongoing compliance

After confirmation, K-Staff keeps watching the case:

- **Deadlines.** Items in `compliance_deadlines` (per-placement obligations)
  fire D-7 and D-1 email reminders to the employer.
- **Milestones.** Each placement has automatic 30-day, 1-year, and 3-year
  milestone reminders tied to the contract start date.
- **E-7-4 eligibility scoring.** Korea Partner and Platform Manager both feed
  TOPIK, education, and certification data; the score recomputes automatically.
- **Rehire tracking.** As a contract approaches its end, the worker appears in
  the employer's `rehire-eligible` list.

---

## What makes K-Staff different

Three things, all visible in the flow above:

1. **The lock is a real boundary, not a checkbox.** The Korea Partner cannot
   see resume or documents until they commit. This is the strongest gate in
   the system.
2. **Tier-2 access is per candidate, time-bounded, and operator-issued.** Even
   a trusted employer cannot bulk-scrape resumes; the Platform Manager mints
   each grant for a specific candidate, and it expires.
3. **Every sensitive transition is operator-brokered and audited.** Interview
   approvals, fee proposals, placement confirmations, and contract finalization
   all pass through the Platform Manager and are written to the audit log.

If you want screen-by-screen detail of what you actually click, head to your
[role guide](/docs/overseas-partner).
