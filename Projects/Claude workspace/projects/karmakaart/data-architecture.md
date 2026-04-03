# KarmaKaart — Data Architecture & Entity Model

> Version 0.1 — March 2026
> Purpose: Map every entity that moves through the platform, what we store, how it flows, and what Dutch law requires us to do (and not do).

---

## Guiding Principles

1. **Data minimisation** (AVG Article 5) — only store what the platform needs to function. If we don't need it, we don't collect it.
2. **Purpose limitation** — every field must have a clear reason. "Might be useful later" is not a reason.
3. **Privacy by default** — social features off, pseudonyms allowed, no tracking outside check-ins.
4. **Municipality gets aggregates, never personal data** — they see "156 active volunteers in Wijk Zuid", never "Jan Jansen checked in at 14:32".
5. **Right to erasure** — delete account = delete everything. No soft-deletes on personal data.

---

## 1. USERS (Vrijwilligers)

The person who opens the app and does volunteer work.

### What we store

| Field | Why | Sensitive? | Notes |
|-------|-----|-----------|-------|
| user_id | Internal reference | No | UUID, never exposed |
| display_name | Shown in app | Low | Can be pseudonym ("Groene Duim") |
| email | Authentication + notifications | Yes | Required for account, hashed at rest |
| auth_provider | Login method | No | Email, Google, Apple — no passwords stored if OAuth |
| avatar | Optional profile image | Low | User-uploaded, can be generic |
| location_city | Filter activities by proximity | Medium | City-level only, NOT address |
| preferred_radius | Default map zoom | No | 500m / 1km / 5km / city |
| preferred_categories | Personalise feed | No | Array: green / social / educational |
| preferred_duration | Personalise feed | No | up_to_1h / 1_to_2h / half_day |
| vog_verified | Access to vulnerable-group activities | Medium | Boolean only — NO VOG document, NO details |
| vog_verified_date | Audit trail | Medium | When was verification confirmed |
| vog_verified_by | Audit trail | Medium | Which organisation verified (org_id) |
| created_at | Account age | No | |
| last_active | Platform health metric | No | |
| account_status | Active / suspended / deleted | No | |

### What we explicitly do NOT store

- Home address (city is enough for filtering)
- Date of birth (not needed — if under 16, parent consent flow instead)
- Phone number (unless user opts in for notifications)
- Medical information
- Financial information
- Location history (only GPS at moment of check-in, not tracking)
- VOG document or rejection details
- BSN (citizen service number) — never, under any circumstance

### Privacy settings (all opt-in, default OFF)

| Setting | Default | What it controls |
|---------|---------|-----------------|
| profile_visible | OFF | Can other users see your profile |
| activity_feed | OFF | Show "X did volunteer work" in community feed |
| share_with_organisation | OFF | Let the ketenpartner see your name (vs. pseudonym) |
| notifications_new_markers | OFF | Push notifications for new activities nearby |
| notifications_reminders | OFF | Reminders for upcoming check-ins |

### Consent records (GDPR Article 7)

Every consent toggle gets its own audit record:

| Field | Purpose |
|-------|---------|
| consent_id | Unique reference |
| user_id | Who gave consent |
| consent_type | Which permission (e.g., "share_with_organisation") |
| granted | Boolean |
| granted_at | Timestamp |
| withdrawn_at | Timestamp (null if still active) |
| terms_version | Which version of ToS was active |
| ip_address | Proof of consent (hashed) |

This is a legal requirement. If a municipality or the AP (Autoriteit Persoonsgegevens) asks "did this user consent?", we must be able to prove it.

---

## 2. MUNICIPALITY (Gemeente)

The buyer. They purchase the platform and roll it out.

### What we store

| Field | Why | Notes |
|-------|-----|-------|
| municipality_id | Internal reference | UUID |
| name | Display | "Gemeente Veendam" |
| province | Grouping / reporting | |
| population_size | License tier calculation | small / medium / large |
| license_tier | Pricing | Based on population |
| license_start | Billing | |
| license_end | Billing | |
| primary_contact_name | Communication | Wethouder or programmamanager |
| primary_contact_email | Communication | |
| billing_contact | Invoicing | |
| branding | Optional white-label | Logo, accent colour |
| reporting_preferences | What reports they want | VNG format, frequency |
| wijken | Geographic subdivisions | Array of wijk names + boundaries (GeoJSON) |

### What the municipality can ACCESS (read-only aggregates)

| Data point | Granularity | Example |
|-----------|-------------|---------|
| Active volunteers | Per wijk, per month | "Wijk Zuid: 42 active this month" |
| Total hours | Per wijk, per month, per category | "156 hours in 'green' activities" |
| Check-ins | Count per marker, per period | "Noordplantsoen cleanup: 23 check-ins" |
| Societal value | Hours × €15 | "€6,345 this month" |
| Active ketenpartners | Count + status | "5 active, 1 pending approval" |
| Category breakdown | Green / social / educational | Percentages per period |
| Trend data | Month-over-month | "+12% active volunteers vs. last month" |
| Heatmap data | Geographic distribution | Which wijken are most/least active |

### What the municipality CANNOT access

- Individual user names or profiles
- Individual check-in records
- User email addresses
- Any personal data whatsoever

This is a hard architectural boundary, not just a policy. The API physically does not expose individual user data to the municipality dashboard. They get aggregated views only.

### VNG Reporting Format

Municipalities need to report to VNG (Vereniging Nederlandse Gemeenten) and the gemeenteraad. We generate:

| Report | Contents | Format |
|--------|----------|--------|
| Quarterly participation report | Active users, hours, categories, trends | PDF + CSV |
| Annual impact summary | Year totals, societal value calculation, wijk comparison | PDF |
| Wet Versterking Participatie compliance | Proof of participation tools, reach per demographic | Structured data |
| Custom exports | Whatever the municipality needs for their council | CSV / Excel |

---

## 3. ORGANISATION (Ketenpartner)

The organisation that creates volunteer activities (markers on the map). They come through the municipality — not direct customers.

### What we store

| Field | Why | Notes |
|-------|-----|-------|
| org_id | Internal reference | UUID |
| name | Display | "Humanitas Veendam" |
| kvk_number | Verification / legitimacy | Dutch Chamber of Commerce |
| municipality_id | Which gemeente they belong to | Foreign key |
| approval_status | Municipality must approve them | pending / approved / suspended |
| approved_by | Audit trail | Which municipality admin approved |
| approved_at | Audit trail | |
| contact_name | Primary contact | |
| contact_email | Communication | |
| can_verify_vog | Can this org process VOG requests? | Boolean — requires eHerkenning 2+ |
| eherkenning_level | Authentication level | Level 2+ required for VOG |
| logo | Branding on markers | |
| description | About the organisation | Shown to volunteers |
| categories | What types of work they offer | green / social / educational |
| created_at | | |

### What the organisation can ACCESS

| Data point | Scope | Example |
|-----------|-------|---------|
| Their own markers | Full CRUD | Create, edit, deactivate markers |
| Check-in stats per marker | Aggregated | "23 check-ins, 17 unique volunteers" |
| Volunteer interest list | Only for their VOG activities | "Jan showed interest in Ouderenbezoek" |
| QR codes | Generated per marker | For on-site check-in |
| Ratings | Per marker | "4.8/5 average" |

### What the organisation CANNOT access

- Volunteer personal data (unless volunteer opts in via consent)
- Other organisations' data
- Municipality-wide statistics
- Other volunteers' activity history

---

## 4. MARKER (Activity on the Map)

The core content unit. An activity that appears on the map for volunteers to find and join.

### What we store

| Field | Why | Notes |
|-------|-----|-------|
| marker_id | Internal reference | UUID |
| org_id | Who created it | Foreign key to organisation |
| municipality_id | Which gemeente | For filtering + reporting |
| type | Event or Location | **Event** = one-time with date/time, **Location** = ongoing |
| title | Display | "Noordplantsoen opruimen" |
| description | Details for volunteer | What to expect, what to bring |
| location_lat | Map pin | Latitude |
| location_lng | Map pin | Longitude |
| location_address | Human-readable | "Noordplantsoen, Groningen" |
| wijk | Geographic grouping | For municipality reporting per neighbourhood |
| category | Filtering + reporting | green / social / educational |
| estimated_duration | Filtering | up_to_1h / 1_to_2h / half_day |
| vog_required | Access control | Boolean — if true, only VOG-verified users can check in |
| schedule_start | For Events: when | DateTime |
| schedule_end | For Events: until when | DateTime |
| recurring_schedule | For Locations: opening hours | e.g., "Mon-Fri 09:00-17:00" |
| capacity | Optional max volunteers | null = unlimited |
| qr_code_ref | Check-in method | Generated QR code identifier |
| gps_radius | Check-in validation | Default 100m — how close must you be |
| status | Visibility | draft / active / completed / cancelled |
| photo | Optional cover image | Uploaded by organisation |
| created_at | | |
| updated_at | | |

### Marker lifecycle

```
DRAFT → ACTIVE → COMPLETED (for Events) or stays ACTIVE (for Locations)
                → CANCELLED (if organisation cancels)
```

For Events: automatically moves to COMPLETED after schedule_end.
For Locations: stays ACTIVE until organisation deactivates.

---

## 5. CHECK-IN (The Core Transaction)

This is the heartbeat of the platform. Every time a volunteer does work, a check-in is created.

### What we store

| Field | Why | Notes |
|-------|-----|-------|
| checkin_id | Internal reference | UUID |
| user_id | Who checked in | Foreign key |
| marker_id | Where | Foreign key |
| checkin_time | When they started | Timestamp |
| checkout_time | When they finished | Timestamp (null until checkout) |
| duration_minutes | Calculated hours | checkout_time - checkin_time |
| method | How they verified | qr_code / gps |
| gps_lat | Proof of presence | Only at check-in moment, NOT tracking |
| gps_lng | Proof of presence | Only at check-in moment |
| photo_url | Optional proof / sharing | Only if volunteer chooses to add one |
| photo_consent_level | Who can see the photo | private / organisation / public |
| rating | Optional feedback | 1-5 stars, given at checkout |
| rating_comment | Optional text feedback | Free text, max 280 chars |
| status | State | active / completed / cancelled |

### What we explicitly do NOT store in check-ins

- Continuous GPS tracking during the activity
- Device information (phone model, OS)
- Other app activity or screen time
- Photos without explicit consent choice

### Data flow from check-in

A single check-in generates data for multiple consumers:

```
CHECK-IN created
  │
  ├─→ User dashboard: +1 activity, +X hours, badge progress
  │
  ├─→ Organisation dashboard: +1 check-in on their marker (anonymised unless consent)
  │
  ├─→ Municipality aggregate: +1 check-in in Wijk X, +X hours in category Y
  │
  └─→ (If photo shared) Community feed (only if user opted in)
```

**Critical privacy boundary:** The municipality never sees the user_id. They receive: `{ wijk: "Zuid", category: "green", hours: 2, date: "2026-03-15" }`. That's it.

---

## 6. BADGES & ACHIEVEMENTS

Gamification layer. Lightweight, meaningful, not competitive.

### What we store

| Field | Why | Notes |
|-------|-----|-------|
| achievement_id | Internal reference | UUID |
| user_id | Who earned it | Foreign key |
| badge_type | Which badge | See badge definitions below |
| earned_at | When | Timestamp |
| related_checkin_id | What triggered it | Optional — for audit trail |

### MVP Badge definitions

| Badge | Trigger | Stored as |
|-------|---------|-----------|
| eerste_stap | First completed check-in | badge_type = "eerste_stap" |
| tien_uur | Cumulative 10 hours | badge_type = "tien_uur" |
| maand_actief | ≥1 activity per week for 4 consecutive weeks | badge_type = "maand_actief" |

### Phase 2 additions

| Badge | Trigger |
|-------|---------|
| groene_duim | 10 activities in category "green" |
| sociale_vlinder | 10 activities in category "social" |
| levenslang_leerling | 10 activities in category "educational" |
| level_starter | 0-10 cumulative hours |
| level_helper | 10-50 cumulative hours |
| level_held | 50+ cumulative hours |

### User stats (calculated, cached)

| Field | Calculation | Updated when |
|-------|-------------|-------------|
| total_hours | SUM(duration_minutes) / 60 | On each checkout |
| total_activities | COUNT(completed check-ins) | On each checkout |
| category_breakdown | COUNT per category | On each checkout |
| current_streak_weeks | Consecutive weeks with ≥1 activity | Weekly recalculation |
| current_level | Based on total_hours thresholds | On each checkout |

These are cached/materialised values, not stored as separate entities. Source of truth is always the check-in records.

---

## 7. VOG VERIFICATION

Not a flow we own — we only record the outcome.

### What we store

| Field | Why | Notes |
|-------|-----|-------|
| vog_verification_id | Internal reference | UUID |
| user_id | Who was verified | Foreign key |
| org_id | Which organisation verified | They processed it via gratisvog.nl |
| status | Current state | interest_shown / pending / verified / expired |
| interest_shown_at | When user clicked "I'm interested" | |
| verified_at | When organisation confirmed | |
| expires_at | Recommended re-verification | 3-5 years from verified_at |

### What we absolutely do NOT store

- VOG document itself
- Reason for VOG (always "kwetsbare groepen")
- Whether VOG was rejected (that's between user and Justis)
- Criminal record information
- BSN used in VOG process

### VOG data flow

```
1. Volunteer sees marker with VOG requirement → clicks "I'm interested"
2. Organisation gets notification: "Someone is interested in [Activity]"
   - Organisation sees: display_name (or pseudonym) + contact preference
3. Organisation processes VOG via their own gratisvog.nl account (OUTSIDE our platform)
4. Organisation marks user as "verified" in our system
5. User gets access to all VOG-required activities across ALL organisations
```

The platform is a signalling tool, not a VOG processor. This keeps us out of the legal complexity of handling VOG data.

---

## 8. NOTIFICATIONS

### What we store

| Field | Why | Notes |
|-------|-----|-------|
| notification_id | Internal reference | UUID |
| recipient_id | Who receives it | user_id or org_id |
| recipient_type | User or Organisation | |
| type | What kind | See types below |
| title | Display | |
| body | Display | |
| read | Has it been seen | Boolean |
| created_at | | |
| action_url | Deep link | Where to go when tapped |

### Notification types

| Type | Recipient | Trigger |
|------|----------|---------|
| new_marker_nearby | User (opt-in only) | New marker within preferred_radius |
| vog_interest | Organisation | User showed interest in VOG activity |
| badge_earned | User | Achievement unlocked |
| checkin_reminder | User (opt-in only) | Upcoming event they signed up for |
| org_approved | Organisation | Municipality approved their account |
| report_ready | Municipality admin | Quarterly report generated |

---

## 9. AUDIT LOG

For security, compliance, and debugging. NOT user-facing.

### What we store

| Field | Purpose |
|-------|---------|
| log_id | UUID |
| actor_id | Who performed the action (user, org, admin) |
| actor_type | user / org_admin / municipality_admin / system |
| action | What happened (e.g., "marker_created", "user_deleted", "vog_verified") |
| target_type | What was affected (user, marker, org, etc.) |
| target_id | ID of affected entity |
| metadata | Additional context (JSON) — NO personal data |
| ip_address | Security (hashed) |
| timestamp | When |

### Retention: 2 years, then auto-deleted. Compliant with AVG storage limitation principle.

---

## 10. PLATFORM ADMIN

KarmaKaart's own team. Separate from municipality admins.

### What we store

| Field | Why |
|-------|-----|
| admin_id | UUID |
| name | |
| email | |
| role | super_admin / support / billing |
| last_login | Security |
| mfa_enabled | Must be true for all admins |

### Access levels

| Role | Can do |
|------|--------|
| super_admin | Everything — manage municipalities, deploy updates, access audit logs |
| support | View (not edit) user issues, respond to tickets, no personal data access |
| billing | Manage licences, invoices, no user data access |

**No admin can see individual user data without a documented legal basis.** This must be enforced technically, not just by policy.

---

## Dutch Regulatory Compliance Matrix

### AVG / GDPR

| Requirement | How we comply |
|-------------|--------------|
| **Lawful basis** (Art. 6) | Contract (user signs up to use platform) + Consent (optional features) + Legitimate interest (aggregated analytics for municipality) |
| **Data minimisation** (Art. 5) | No address, no BSN, no medical data, no financial data, no continuous tracking |
| **Purpose limitation** (Art. 5) | Every field documented with purpose (this document) |
| **Storage limitation** (Art. 5) | Check-ins: retained while account active + 1 year. Audit logs: 2 years. Deleted accounts: immediate erasure |
| **Right to access** (Art. 15) | User can export all their data from dashboard |
| **Right to erasure** (Art. 17) | Account deletion = all personal data removed. Aggregated anonymous stats remain |
| **Right to portability** (Art. 20) | Data export in machine-readable format (JSON/CSV) |
| **Data Protection by Design** (Art. 25) | Privacy settings default OFF, pseudonyms allowed, municipality gets aggregates only |
| **DPIA** (Art. 35) | Required before launch — we process data of potentially vulnerable groups |
| **Data Processing Agreement** | Verwerkersovereenkomst with every municipality (we are "verwerker", they are "verwerkingsverantwoordelijke") |
| **Data breach notification** | 72-hour notification to AP + affected users |
| **DPO** | Required once we reach scale — appoint Data Protection Officer |

### Children under 16

If a user is under 16, Dutch law (UAVG Article 8) requires parental consent for processing personal data. Options:

1. **Don't ask for age** — we don't need it for the service to function
2. **If we do add age verification later**: implement parent consent flow (email to parent, parent confirms)
3. **For now**: Terms of Service state "minimum age 16 or parental consent required" — standard approach

### Wet Versterking Participatie

This is why municipalities buy us. What they need from our platform:

| Requirement | What we provide |
|-------------|----------------|
| Proof of participation tools | Platform existence + usage data |
| Reach metrics | Active users per wijk, per demographic (age band, anonymised) |
| Accessibility | App available to all residents, no mandatory barriers |
| Reporting to gemeenteraad | Quarterly PDF + CSV exports in VNG format |
| Budget accountability | Hours × €15 societal value calculation |

### VNG Vrijwilligersverzekering

99% of municipalities have the VNG insurance policy for volunteers. Our platform should:

- Display per marker: "Verzekerd via [gemeente] vrijwilligersverzekering"
- Link to the municipality's insurance policy page
- Consider: platform-level overkoepelende polis as fallback

### Verwerkersovereenkomst (Data Processing Agreement)

Required with every municipality. Key elements:

| Element | Our position |
|---------|-------------|
| We are | Verwerker (processor) |
| Municipality is | Verwerkingsverantwoordelijke (controller) |
| What we process | Check-in data, user accounts within their municipality |
| Where data is stored | EU (Netherlands or Germany) — NO US cloud without adequacy |
| Sub-processors | Hosting provider, email service — all EU-based or with SCC |
| Breach procedure | We notify municipality within 24 hours, they notify AP within 72 |
| Data return/deletion | On contract end: export all data, then delete within 30 days |
| Audit rights | Municipality can request audit of our data practices |

---

## Data Flow Diagram (Text)

```
┌─────────────────────────────────────────────────────────────────┐
│                        VOLUNTEER (User)                         │
│  Creates account → browses map → checks in → checks out        │
│  Stores: profile, preferences, consent records                  │
└───────────┬─────────────────────────────────────┬───────────────┘
            │ check-in                            │ interest (VOG)
            ▼                                     ▼
┌───────────────────────┐              ┌─────────────────────────┐
│      CHECK-IN         │              │   VOG VERIFICATION      │
│  timestamp, duration, │              │   status only            │
│  method, optional     │              │   no document stored     │
│  photo + rating       │              └─────────┬───────────────┘
└───────────┬───────────┘                        │
            │                                     │ verifies
            │ aggregated                          ▼
            ▼                          ┌─────────────────────────┐
┌───────────────────────┐              │    ORGANISATION         │
│   MUNICIPALITY        │              │    (Ketenpartner)       │
│   DASHBOARD           │◄─────────────│  Creates markers        │
│                       │  approved by │  Sees own stats          │
│  aggregates only:     │              │  Manages VOG status      │
│  - hours per wijk     │              └─────────────────────────┘
│  - active users count │                        │
│  - societal value €   │                        │ creates
│  - trend data         │                        ▼
│                       │              ┌─────────────────────────┐
│  NEVER sees:          │              │       MARKER            │
│  - user names         │              │  title, location, type  │
│  - individual data    │              │  category, duration     │
│  - check-in details   │              │  VOG requirement        │
└───────────────────────┘              │  QR code, schedule      │
                                       └─────────────────────────┘
```

---

## Data Retention Policy

| Data type | Retention | After deletion |
|-----------|-----------|---------------|
| User account data | While account is active | Hard delete on account deletion |
| Check-in records | While account active + 1 year after deletion | Anonymised aggregates remain |
| Consent records | 5 years after last action (legal proof) | Hard delete |
| Audit logs | 2 years | Hard delete |
| Municipality reports | Indefinite (they own this data) | Remain even if we stop service |
| Organisation data | While approved + 1 year after removal | Hard delete |
| Photos | While account active | Hard delete on account deletion or photo removal |
| Notifications | 90 days | Auto-delete |

---

## Technical Constraints for Johannes & Roban

1. **EU hosting only** — server in NL or DE. No US cloud unless there's an adequacy decision + SCC in place.
2. **Encryption at rest** — all personal data fields encrypted in database.
3. **Encryption in transit** — HTTPS everywhere, no exceptions.
4. **No analytics that track users** — if we use analytics, it must be privacy-friendly (Plausible, not Google Analytics).
5. **API design**: Municipality endpoints MUST return aggregates only. Build the wall architecturally.
6. **Right to erasure**: cascading delete must work perfectly. Test this early.
7. **Consent before data**: never collect optional data before getting consent toggle.
8. **Photo storage**: separate from core data, deletable independently.
9. **QR codes**: generated per marker, not per user. No user tracking via QR.
10. **GPS**: captured ONCE at check-in moment, then discarded from device. Server stores only the point for verification.

---

## Open Questions (To Discuss)

1. **Do we need age verification?** Current approach: don't ask. But if municipalities require demographic reporting, we might need age bands (without storing exact DOB).
2. **Photo moderation**: if users share photos, do we need content moderation? For MVP, keep photos private by default.
3. **Data portability between municipalities**: if a user moves from Veendam to Almere, do their hours transfer? Probably yes — it's one platform.
4. **Organisation self-signup vs. municipality-only invite**: current spec says municipality invites. Should orgs be able to request access?
5. **Offline check-in**: what if there's no signal at the volkstuincomplex? Need to think about offline-first for GPS check-ins.
6. **Multi-municipality users**: a user in the Groningen region might volunteer in both Groningen and Veendam. One account, multiple municipality views?
