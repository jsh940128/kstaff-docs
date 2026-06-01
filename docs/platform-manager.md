---
id: platform-manager
title: Platform Manager Guide
sidebar_position: 4
---

# Platform Manager Overview

Welcome to K-Staff. As a **Platform Manager**, you operate K-Staff itself. You
are the trusted broker for every sensitive transition in the system: granting
candidate access to employers, routing demand to the right Korea Partner,
approving interviews, running the placement fee handshake, generating
contracts, and overseeing compliance.

Where the other roles each see one slice of the pipeline, you see the whole
thing. Your job is to keep the supply and demand sides healthy, ensure no
sensitive data moves outside of a properly governed step, and make sure every
privileged action is written to the audit log.

---

## Your Role and Access

The Platform Manager is the only role with **full read-through** to all three
data tiers across all organizations:

- **Tier-1 / Tier-2 / Tier-3 across all candidates.** You can review a
  candidate's full profile (public + resume + documents) for QA, audit, or
  dispute resolution. Every read of Tier-3 documents goes through a download
  URL that is logged.
- **All employer and partner records.** You can list and manage every
  organization on the platform.
- **The audit log.** Every privileged action by a Platform Manager (grant
  issuance, trust changes, routing, fee proposals, placement confirmations) is
  recorded and queryable.

Because that access is wide, every action you take is logged. Treat the audit
trail as part of your job, not an afterthought.

---

## Platform Walkthrough

Your day-to-day work runs through a few well-defined gates. The flow below
matches the order most cases move through the platform.

### 1. Compliance setup (one time, with periodic updates)

Before any employer can reach Tier-2 data, the Master Services Agreement (MSA)
must exist on the platform. You publish the agreement **definition** (the
durable slug) and a **content version** (the actual text). Re-publishing the
agreement bumps the version and resets the signature requirement: every
employer must re-sign after a material content change.

### 2. Provision a new employer

When a new employer is onboarded, you provision their account and first user.
The system sends them a one-time setup email **after** their account record is
durably written, so a failed signup never produces a ghost account or a stale
invite.

### 3. Manage trust levels

Each employer has a **trust level** that scales with how well K-Staff knows
them:

- `restricted` is the default for new employers.
- `verified` indicates basic compliance is on file.
- `trusted` is granted after a track record of compliant hiring.
- `partner` is the highest tier, for strategic partners.

Trust gates parts of the experience, but it does **not** unlock candidate
resumes by itself. Even a fully `trusted` employer still needs an explicit
Tier-2 access grant for each specific candidate. This is intentional, to
prevent bulk resume scraping.

### 4. Grant Tier-2 access

When an employer requests access to a resume, you review the request and mint
an **AccessGrant** for the `(employer, candidate, tier-2)` triple. Grants are
**time-bounded at about 365 days** and are **refresh-in-place** on re-grant, so
a mid-hire does not silently lose access if the request is reissued.

If you ever see an employer get re-asked to "request access" for a candidate
they already had, that means their existing grant has expired or been revoked.
Issuing a new grant refreshes the window.

### 5. Triage and route a request

When an employer submits a request, you:

1. Review it and move the status to `reviewing` while you decide.
2. **Route** the request to a Korea Partner. Routing creates a **demand list**
   that lands in the partner's dashboard. The partner cannot act on the
   demand until they accept it.

You can also look at the request's progress timeline, which shows the request,
all linked candidates, and the stage each one is currently in.

### 6. Approve or reject interviews

Korea Partners do not schedule interviews unilaterally. They request an
interview with a preferred time and a note; you approve it (with a scheduled
date) or reject it (with a required reason). The platform keeps the active
interview queue visible so nothing sits idle.

### 7. Run the placement fee handshake

When a Korea Partner reports that a worker has been hired, a `placement_case`
is opened. From there, the placement requires three explicit steps:

1. **You propose** the final fee.
2. **The Korea Partner acknowledges** the fee.
3. **You confirm** the placement.

Only after step 3 does the candidate move to `placed`. This two-step
acknowledgement prevents accidental confirmations and gives you a moment to
catch any fee disputes before the case closes.

### 8. Generate and finalize the contract

After confirmation you generate a **bilingual (Korean and English) contract
draft** for the case. Drafts can be regenerated (each iteration bumps the
version) so you can iterate on the wording. Crucially, **the employer never
sees a draft**: only a contract that you explicitly **finalize** becomes
visible to them.

Finalization is idempotent. Re-finalizing the same contract is a no-op.

### 9. Oversee E-7-4 scoring

E-7-4 visa upgrade eligibility is scored from fields on the candidate's public
profile (TOPIK level, EPS-TOPIK, education level, vocational certificates, and
similar). You can:

- View the **whole E-7-4 pipeline** across all employers, filtered by
  eligibility bucket.
- Directly edit any candidate's E-7-4 profile when you have authoritative
  information that the partner has not yet entered. The score recomputes
  automatically.

### 10. Compliance reminders

The platform fires email reminders automatically:

- **Deadline reminders** at D-7 and D-1 before any item in
  `compliance_deadlines` falls due.
- **Milestone reminders** at 30 days, 1 year, and 3 years after a contract
  start date (mandatory insurance enrollment, contract anniversary, and
  renewal/departure deadline).

These run on a server-side cron. You can also trigger them manually for
testing, with a **dry run** mode that returns what would be sent without
emailing anyone.

---

### What you should not need to do

- **Hand candidate data to anyone off-platform.** Every legitimate handoff has
  a structured endpoint. If you ever feel like you need to email a resume or
  copy a passport out of the system, stop: the structured path exists and
  preserves the audit trail.
- **Bypass the lock.** The Korea Partner's lock is the system's strongest
  privacy gate. Do not work around it.

If something legitimate is not possible through the existing endpoints, that
is a product gap, not an exception to the rules. Flag it.
