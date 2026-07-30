/* ===========================================================
   Heritage+ Commercial Quoting Guide — content model
   Single source of truth for both the web app and (later) the PDF.
   =========================================================== */
window.WIKI_CONTENT = {

nav: [
  { group: "Get Started", items: [
    { id: "home", num: "", title: "Welcome" },
    { id: "roles-access", num: "", title: "Roles & Access" },
    { id: "lifecycle-map", num: "", title: "Where Heritage+ Fits" }
  ]},
  { group: "The Quote Lifecycle", items: [
    { id: "coupled-vs-decoupled", num: "1", title: "Coupled vs. Decoupled Quotes" },
    { id: "finding-a-quote", num: "2", title: "Finding a Quote" },
    { id: "reading-a-quote", num: "3", title: "Reading a Quote" },
    { id: "preparing-the-quote", num: "4", title: "Preparing the Quote" },
    { id: "sharing-with-customer", num: "5", title: "Sharing with the Customer" },
    { id: "one-project-many-customers", num: "6", title: "One Project, Many Customers" },
    { id: "negotiation", num: "7", title: "Negotiation" },
    { id: "receipt-and-award", num: "8", title: "Receipt and Award" },
    { id: "release-and-purchase", num: "9", title: "Release and Purchase" },
    { id: "expiration-and-extension", num: "10", title: "Expiration and Extension" },
    { id: "notifications", num: "11", title: "Notifications" }
  ]},
  { group: "Reference", items: [
    { id: "ref-field-mapping", num: "", title: "Heritage+ ↔ Agility Field Mapping" },
    { id: "ref-status-glossary", num: "", title: "Quote Status Glossary" },
    { id: "ref-terminology", num: "", title: "Terminology Glossary" },
    { id: "ref-branches", num: "", title: "Decoupled Branch List" },
    { id: "ref-permissions", num: "", title: "Permissions Matrix" }
  ]}
],

pages: {

home: {
  title: "Welcome to the Commercial Quoting Guide",
  kicker: "Internal Reference",
  dek: "Everything Commercial Services, Territory Managers, Inside Sales, Branch Managers, and Branch Employees need to run a commercial quote through Heritage+ — from the moment it lands in your queue to the final purchase.",
  body:
`This guide covers the Commercial Quoting workflow inside **Heritage+**, Heritage Landscape Supply Group's quoting application. It's built for the people who use Heritage+ every day and need a fast, reliable answer — not a system manual.

**How to use this guide**

- **Search** (top of the page, or press **/**) is the fastest way to find an answer to a specific question.
- The left-hand tree walks the quote lifecycle in order, Part 1 through Part 11, the same order a quote actually moves through in real life.
- The **Reference** section holds lookup material you'll come back to repeatedly — field mappings, glossaries, the current branch list, and the permissions matrix.

**What this guide does *not* cover in depth**

Heritage+ is one of five systems in the commercial project workflow — GRIDS, GiddyUp, and Procore all feed into it, and Agility sits behind it. This guide references those systems where they affect what you see in Heritage+, but it does not attempt to teach them. See <a href="#/lifecycle-map">Where Heritage+ Fits</a> for the big picture.

<div class="home-grid">
  <a class="home-card" href="#/roles-access">
    <span class="hc-num">Start here</span>
    <span class="hc-title">Roles &amp; Access</span>
    <p class="hc-dek">What your role lets you see and do in a quote.</p>
  </a>
  <a class="home-card" href="#/coupled-vs-decoupled">
    <span class="hc-num">Part 1</span>
    <span class="hc-title">Coupled vs. Decoupled Quotes</span>
    <p class="hc-dek">The single most important distinction in how a quote behaves.</p>
  </a>
  <a class="home-card" href="#/negotiation">
    <span class="hc-num">Part 7</span>
    <span class="hc-title">Negotiation</span>
    <p class="hc-dek">How customer change requests get approved, declined, and tracked.</p>
  </a>
  <a class="home-card" href="#/ref-permissions">
    <span class="hc-num">Reference</span>
    <span class="hc-title">Permissions Matrix</span>
    <p class="hc-dek">Who can do what, at a glance.</p>
  </a>
</div>`
},

"roles-access": {
  title: "Roles & Access",
  kicker: "Get Started",
  dek: "Every Heritage+ user is assigned a role for Commercial Quoting. That assignment determines what you see, which quotes you have access to, and what you're allowed to do.",
  body:
`This guide is written for five internal roles: **Commercial Services (CS)**, **Territory Manager (TM)**, **Inside Sales (IS)**, **Branch Manager**, and **Branch Employee**. The Customer role is described only where it helps you understand what your customers see.

In Heritage+ (built on Adobe Commerce/Magento), each of these business roles corresponds to a platform-level "GRIDS Assignment" field. You'll never need to say the platform name out loud to a customer or coworker — it's shown here only so the two vocabularies don't confuse you when you're troubleshooting.

| Business role | Platform field name |
|---|---|
| Commercial Services (CS) | GRIDS Admin |
| Territory Manager (TM) | GRIDS Employee |
| Inside Sales (IS) | Inside Sales |
| Branch Manager | Branch Manager |
| Branch Employee | Branch Employee |
| *(Customer)* | GRIDS Customer |
| *(No role configured)* | Not Assigned |

A user with **Not Assigned** has no Commercial Quotes access at all — the GRIDS logo and the Commercial Quotes navigation link simply don't appear for them.

## Commercial Services (CS)

CS users have view, access, and edit capability on **every quote in Heritage+, system-wide** — no assignment to a specific project or opportunity is required. This is the role Commercial Services works from day to day to assist Territory Managers and Inside Sales reps.

- **Quote access scope:** all quotes, no scoping by branch, territory, or individual assignment.
- **Functions:** the same full view, edit, and approval capabilities as a Territory Manager, applied across every quote with no limitations.
- **Planned:** CS will gain the exclusive ability to reassign the Territory Manager on a quote directly from Heritage+.

## Territory Manager (TM)

The Territory Manager owns the customer relationship. A TM is responsible for receiving a quote handed off by Commercial Services, adjusting it from a pricing and item standpoint, and formally sharing it with the customer via Approve & Share.

- **Quote access scope:** all quotes where the user is the assigned Territory Manager, matched by their Heritage+ registration email exactly matching their email in Commercial Quotes.
- **Functions:** no limitation on a quote's detail screen — full edit access to header values, items (add/delete/replace), quantity and unit of measure, price and GM%, cost visibility, full activity log across every status, print preview, Approve & Share, Manage Customer Access, and the Customer Insights panel.
- **Assignment:** a Territory Manager must currently be manually assigned the GRIDS Employee role in Magento. A planned enhancement will assign this automatically the first time a user is set as Territory Manager on a quote in GiddyUp/GRIDS.

## Inside Sales (IS)

Inside Sales has an **identical capability set to the Territory Manager** — full edit access, cost/GM% visibility, activity log, print preview, Approve & Share, customer access management, and the Customer Insights panel. The distinction between the two roles is purely about *which quotes they see*, not what they're allowed to do.

- **Quote access scope:** all quotes where the user is the assigned Inside Salesperson, mirroring the Territory Manager's matching logic — based on the Inside Sales assignment on the corresponding opportunity in GiddyUp/GRIDS.
- **Notification behavior:** wherever this guide says a notification goes to the "Assigned TM," it also goes to the Assigned IS, if one is assigned to the quote. This applies to every notification in <a href="#/notifications">Part 11 — Notifications</a>.
- **Assignment:** carries over automatically from the Inside Salesperson assignment on the opportunity in GiddyUp/GRIDS.

## Branch Manager

Branch Manager has the **same access rights as a Territory Manager** — the difference is what scopes their access.

- **Quote access scope:** all quotes where the quoting branch matches the user's default Heritage+ branch, regardless of who the assigned Territory Manager is.
- **Functions:** identical to Territory Manager — full edit access, cost/GM% visibility, activity log, print preview, Approve & Share, customer access management, and the Customer Insights panel.
- **Assignment:** manual toggle in Magento. "Default branch" is self-selected on the user's Heritage+ profile and can be changed at any time.

<div class="callout callout-info"><div class="co-icon">ℹ</div><div><p><strong>A note on email notifications:</strong> Branch Manager is currently paused business-wide from receiving Commercial Quoting email notifications, even where the underlying design includes them. If you're a Branch Manager relying on email for visibility into pending approvals or new quotes, check the quote directly in Heritage+ rather than waiting on an email.</p></div></div>

## Branch Employee

Branch Employee is a largely read-only role built to support **walk-in customers at a physical branch** — for example, someone who needs to purchase from a quote that may not yet exist in Agility. A Branch Employee can release items from a quote or approve a pending sales order, letting them start a walk-in purchase without involving a Territory Manager.

- **Quote access scope:** all quotes where the quoting branch matches the user's default Heritage+ branch (same model as Branch Manager), regardless of the assigned Territory Manager.
- **Visibility:** can see cost and GM% on a quote, but cannot adjust it.
- **Functions:** can view, print, and comment on a quote, and can release items / approve pending sales orders. Cannot modify header fields, quantities, pricing, or GM%; cannot add, replace, or delete items; cannot even *request* an item change (unlike a Customer, who can at least submit a request).
- **Note:** a separate, dedicated application is in development to serve this same walk-in release/purchase function for branch staff going forward.

## Quick-reference table

| Role | Quote access scope | Edit capability |
|---|---|---|
| Commercial Services | All quotes, system-wide | Full — no limitations |
| Territory Manager | Quotes where assigned as TM | Full — no limitations |
| Inside Sales | Quotes where assigned as IS | Full — identical to TM |
| Branch Manager | Quotes at their default branch | Full — identical to TM, scoped by branch |
| Branch Employee | Quotes at their default branch | Release / purchase only — cannot edit quote content |

For the full function-by-function breakdown, see the <a href="#/ref-permissions">Permissions Matrix</a>.`
},

"lifecycle-map": {
  title: "Where Heritage+ Fits in the Project Lifecycle",
  kicker: "Get Started",
  dek: "Heritage+ is one stop in a longer commercial project journey. Here's the full picture, and where this guide picks up.",
  body:
`A commercial project touches five systems before a customer ever sees a quote. This guide documents **Heritage+ only** — the other four are referenced here just enough to orient you.

| System | Used by | Purpose |
|---|---|---|
| GRIDS | TMs, Customers | Customer-facing front end. Project creation, sharing, and customer interest. |
| GiddyUp | Commercial Services | Back-end CRM. Project lifecycle management, workflows, task assignment, estimate creation. |
| Procore | Commercial Services | Material takeoff application. Generates the material list synced into GiddyUp. |
| Agility | — | The ERP a quote may ultimately be transacted through, depending on branch configuration. See <a href="#/coupled-vs-decoupled">Part 1</a>. |
| Heritage+ | Commercial Services, TMs, Customers | Proprietary quoting application. Receives estimates and manages customer-facing quotes. |

## Key concepts

| Term | Definition |
|---|---|
| Project | The parent record representing a bid opportunity. One project can have multiple opportunities. |
| Opportunity | A child record of a project — one per customer bidding on that project. A project with 10 bidding customers has 10 opportunities. |
| Material Takeoff | A list of materials, organized into sections, generated in Procore and synced into GiddyUp at the project level. |
| Estimate | Created in GiddyUp, at the project or opportunity level. The source document that gets pushed into Heritage+ as a quote. |
| Quote | An estimate that has been sent into Heritage+. Not customer-facing until it's been shared (Approve & Share). |

## The six-phase view

| Phase | What happens | Where |
|---|---|---|
| 1. Origination & Intake | Project identified and created, visibility routing set (public/private) | GRIDS / GiddyUp |
| 2. Design & Takeoff | Material takeoff completed against the project design | Procore / GiddyUp |
| 3. Quoting & Review | Estimate built, priced, pushed to Heritage+, reviewed and negotiated with the customer | GiddyUp → **Heritage+** |
| 4. Acceptance & Award | Quote received and awarded/committed by the customer | **Heritage+** |
| 5. Purchasing & Fulfillment | Items purchased off the quote, sourced, shipped | **Heritage+** → Agility |
| 6. Invoicing & Close | Invoicing, payment, project close-out | Downstream financial systems |

This guide picks up at Phase 3 and runs through Phase 5 — that's the full scope of Parts 1 through 11. Phases 1–2 (project intake and material takeoff) happen upstream in GRIDS, GiddyUp, and Procore, and Phase 6 (invoicing and close) happens downstream once purchasing is complete.

## How a quote gets to Heritage+

1. Commercial Services initiates a takeoff from the Project level in GiddyUp, completes it in Procore, and syncs the resulting material list back into GiddyUp.
2. Commercial Services creates an Estimate at the Project level in GiddyUp — this becomes the source for every opportunity-level quote on that project.
3. From the Opportunity level, Commercial Services pulls the estimate down from the parent Project, confirms branch/customer/ship-to, and sends it to Heritage+. That action creates the quote.
4. The assigned TM receives an email and can also reach the quote directly from GiddyUp via "View in Heritage+."

From here, everything that happens to the quote is covered starting at <a href="#/coupled-vs-decoupled">Part 1</a>.`
},

"coupled-vs-decoupled": {
  title: "Coupled vs. Decoupled Quotes",
  kicker: "Part 1",
  dek: "The single most important fact about any quote you open: is it connected to Agility, or not? That answer shapes almost everything else in this guide.",
  body:
`Every quote in Heritage+ is either **connected to Agility** or **decoupled from it**, and that distinction is set the moment the quote is created — it never changes for the life of that quote, even if the branch or ship-to is changed later.

| | Agility Quote (non-decoupled) | Direct Quote (decoupled) |
|---|---|---|
| Synced to Agility | Yes | No |
| Assigned when | Quote is created | Quote is created |
| Editable after Receipt? | No — locked; further changes must be made in Agility and sync back | Yes — remains editable by both TM and customer |
| Award terminology | "Commit" | "Award" |

**Same mechanic, different label.** "Committed" (Agility Quote) and "Awarded" (Direct Quote) refer to the exact same underlying action and behavior — the customer signaling the project is moving forward. You'll see one label or the other depending on which type of quote you're looking at. This guide uses whichever term matches the quote type being discussed, and calls out the equivalence wherever it matters.

## What decides quote type?

Whether a quote is decoupled is a **branch-level setting**, not something chosen per quote. A branch is either enrolled in decoupling or it isn't:

- **Decoupled branches**: a Received quote is *not* sent to Agility, and stays editable in Heritage+ after receipt.
- **Non-decoupled (Agility-connected) branches**: the previous workflow applies — the quote is sent to Agility on receipt, and becomes uneditable in Heritage+ from that point forward.

The current list of decoupled branches is maintained in the <a href="#/ref-branches">Decoupled Branch List</a> reference page — check there for the live list rather than assuming based on past experience, since branches are added to decoupling over time.

## Where this shows up later in this guide

The decoupled/non-decoupled distinction resurfaces at a few specific points — this section is the map:

- <a href="#/receipt-and-award">Part 8 — Receipt and Award</a>: Commit vs. Award terminology, and what triggers each quote type to move to Received automatically.
- <a href="#/release-and-purchase">Part 9 — Release and Purchase</a>: how purchasing differs — an Agility Quote releases against a live Agility quote object, while a Direct Quote creates its own sales order directly, with an in-page order-confirmation experience instead of a redirect to checkout.
- <a href="#/expiration-and-extension">Part 10 — Expiration and Extension</a>: once a quote has been received, a decoupled quote's expiration date is extended with a flexible date picker (up to 120 days out); a non-decoupled quote's extension is a single fixed-duration button that also pushes the new date to Agility.

Everything *before* receipt — creating, preparing, sharing, and negotiating a quote — works identically regardless of quote type.`
},

"finding-a-quote": {
  title: "Finding a Quote",
  kicker: "Part 2",
  dek: "Locating the quote you need to work on.",
  body:
`Open **Commercial Quotes** from the Heritage+ navigation menu to see the list of quotes you have access to (scoped according to your role — see <a href="#/roles-access">Roles & Access</a>). Click a quote's name to open its detail screen.

The quote list can be **filtered by quote status** so you can quickly narrow down to what you're looking for — for example, isolating quotes that are sitting in Customer Review versus ones you've already received. See the <a href="#/ref-status-glossary">Quote Status Glossary</a> for what each status means.

<div class="callout callout-info"><div class="co-icon">ℹ</div><div><p>This page intentionally stays high-level rather than walking through every filter and column on the list screen. If there's a specific lookup scenario (searching by customer, project, PO number, branch, etc.) that comes up often and deserves its own walkthrough here, flag it and this page can be expanded.</p></div></div>`
},

"reading-a-quote": {
  title: "Reading a Quote",
  kicker: "Part 3",
  dek: "Everything on the quote detail screen — the header, the toolbar, the line items, and what each icon and status actually does.",
  body:
`## The quote header

The header carries the fields that identify and route the quote. Most of these fields correspond to a specific field downstream in Agility — see the full <a href="#/ref-field-mapping">Heritage+ ↔ Agility Field Mapping</a> reference for the complete list. A few worth knowing up front:

- **Quote Title** writes to Agility's Job Number field, and is editable.
- **Quote Name** is also editable.
- **Quote ID** is received from Agility once an Agility Quote is received; for a quote still in progress it has no Agility-assigned ID yet.
- **PO Number** writes to Agility's Customer PO field.
- **Reference Number** writes to Agility's Reference field.
- **Expiration Date** writes to Agility's Close Date field.
- **Quoted By** always displays "Digital" on Agility-synced fields — this is intentional (it helps track digital revenue) and TMs are discouraged from trying to edit it.
- **Company Name** and **Territory Manager** are not passed to Agility.
- Branch and ship-to information stays on whichever sequence was selected at the time.
- **Expected Delivery Date** is set when the quote is committed.

### Editing the header

Clicking the pencil icon puts the header into edit mode. Editable fields include PO Number, Expected Delivery Date, Ship Via, and the full Ship-to Name/Address/City/State/Zip/Phone set. If any ship-to field is modified, header fields revert automatically to the values tied to whichever branch/ship-to sequence is actually selected — you can't hand-edit ship-to details independently of the sequence.

**Change Branch & Ship-To** is a separate action that launches its own modal. Branch is selected first, which filters the available ship-to options. Changing branch or ship-to can change cost, pricing, or item status on items already in the quote, and **removes any existing cost overrides** on the quote (see <a href="#/preparing-the-quote">Part 4</a>).

### Quote Totals (Agility Quotes only)

An Agility Quote's header shows a synced "Quote Totals" box — Subtotal, Shipping & Other Charges, Tax Total, and Total — pulled from Agility. This sync isn't instantaneous; expect roughly a minute, and a page refresh, before a change shows up.

### Notes

The header includes a notes box — "Project Notes" — that's curated in GiddyUp, not edited directly in Heritage+.

## Toolbar icons

| Icon | What it does |
|---|---|
| Customer Insights | Pulls up strategic customer information. |
| Auto-Approve Orders | Decoupled-branch setting; see <a href="#/release-and-purchase">Part 9</a>. |
| Quote Access (people icon) | Opens the customer access management modal — control which customers can see this quote. |
| Reject Quote | Terminal action — see below. |
| Reprice Quote ($) | Refreshes market cost from the ERP and recalculates pricing. Excludes items with an active cost override. |
| Print Preview | Preview the quote as it will print. |
| GRIDS link | Deep link to the project detail in GRIDS (login-gated). |

### Reject Quote

Rejecting a quote is **terminal** — it deletes the quote from Heritage+ entirely. The modal presents itself the first time an internal user opens a newly-created quote; clicking "Reject Quote" prompts for a mandatory reason before submitting.

- An email is sent to whoever created the quote in GiddyUp.
- The quote is removed from Heritage+ and routed back to Commercial Services in GiddyUp.
- The decision is visible to all internal (employee) user types.
- There's no undo — a rejected quote has to be recreated from scratch if it turns out to be needed.

## Item groups (sections)

Items on a quote are organized into groups, referred to as item groups or sections. These originate in Procore during the material takeoff, transmit into GiddyUp during the estimate process, and pass into Heritage+ and then Agility — where Agility calls the field "Detailed Group ID." Groups are used for totaling items by section, and **customers see the same grouping** you do.

### Pricing color legend

Items are color-coded green, yellow, or red based on how the item's price compares to the customer's default pricing at that ship-to.

## Kits

A kit's parent row is a **phantom placeholder** — it's never itself purchased or passed to Agility; only the child items pass through. Each child item has a quantity multiplier relative to the parent's quantity, so changing the parent's quantity scales all children proportionally. A kit's GM% is a weighted average of its children — editing the kit-level GM% redistributes it across the children. Items can be added to a kit after creation via "Add Item to Kit," but an item added post-creation won't automatically pick up the multiplier — that has to be maintained manually. There's currently no way to reorder items within a kit.

<div class="callout callout-info"><div class="co-icon">$</div><div><p><strong>$0.00 price warning:</strong> any item priced at $0 blocks release/share until it's priced — this applies to any item, not just kit items. Contact the pricing team to resolve it.</p></div></div>

## Item states

| State | Direct Quote | Agility Quote |
|---|---|---|
| Invalid | Flagged at the branch; cost/price still editable, no replace/misc-item option | Flagged at the branch; also offers "Replace Item" or "Create Miscellaneous Item" |
| Discontinued | Orange warning, informational only, item stays fully editable | Identical behavior — orange warning, informational only, item stays fully editable |

See <a href="#/preparing-the-quote">Part 4</a> for how TMs resolve invalid and misc items before sharing.

## Item History

Once an item has any post-creation update, a small clock icon appears on that row. Clicking it opens the **Item History** modal: Action, Change, Item, Date/Time/User, and Quote Status columns, plus a "Refresh Logs" link.

## Footer tabs

- **Message Board** — comments between the customer and the assigned TM/IS.
- **Orders** — sales orders associated with the quote.
- **Activities** — the broader activity log for the quote.

## Email Quote / Request Submittals

A quote can be emailed directly, and a submittal can be requested from within Heritage+ using the Submittal Builder. Any user type can request a submittal. There are no Heritage+ email notifications for this — GRIDS sends the relevant emails — but both the request step and the build step are logged separately in the Heritage+ Activity Log.`
},

"preparing-the-quote": {
  title: "Preparing the Quote",
  kicker: "Part 4",
  dek: "The TM/IS prep sequence — everything that should happen to a quote before it's ready to share with the customer.",
  body:
`Before sharing a quote, a TM or Inside Sales rep typically works through the same sequence:

1. Validate the branch and ship-to are correct.
2. Scan header and section notes for anything relevant from Commercial Services.
3. Resolve invalid items — replace them, or convert them to miscellaneous items.
4. Note any discontinued items.
5. Do a pricing pass — check margins, apply cost overrides where needed.
6. Configure quote settings — Auto-Approve Modifications (see note below), Auto-Approve Orders if the branch is decoupled.
7. Validate the correct customers have Quote Access.
8. Confirm no items are still priced at $0.00.
9. Share the quote (<a href="#/sharing-with-customer">Part 5</a>).

## Cost overrides

Cost overrides handle situations where a vendor has offered special pricing below Agility's market cost. Click the pencil icon next to an eligible item to open the **Adjust Item Cost** modal:

- Shows Original Cost, GM%, and Current Price.
- **New Item Cost*** (required) — entering a value automatically recalculates the Updated Price using the item's existing GM%.
- **Reason for Adjustment*** (required).
- **Special Cost Expiration Date*** (required).
- Optional vendor documentation upload (JPEG/PNG/PDF, max 10MB).
- **Update Cost** button saves the override.

Once saved, the item displays both the overridden and original cost, with a revert icon to undo it manually. If it's never manually reverted, the override **automatically reverts to market cost at its expiration date**. Cost overrides are excluded from Reprice Quote, and are **removed entirely if the branch or ship-to is changed**.

## Miscellaneous items

Because Agility won't allow overriding a standard catalog item's description, Heritage+ "stitches" a TM-entered description, size, and supplier together into an Agility item note, so the customer sees the TM's intended text even though the underlying Agility item record can't be changed.

Open **Create Miscellaneous Item** to set:

- **Item type*** — a radio choice between the item placeholders Agility uses for this purpose (typically the general miscellaneous-item placeholder; some regions also use a fittings-specific placeholder). Which one to use is at the TM's discretion — both are just Agility part-number placeholders.
- **Description***, Size, Supplier (dropdown), **Cost***, GM% (defaults to 30%), and **Price*** (auto-calculated from cost and GM%).

**Auto-conversion is Agility-Quote-specific.** Agility can't create a real quote with invalid items present, so on an Agility Quote, any invalid item still unresolved at share time is automatically converted to a miscellaneous item. Direct Quotes don't have that constraint, so this auto-conversion — and the miscellaneous-item option in general — only appears on Agility Quotes.

<div class="callout callout-info"><div class="co-icon">ℹ</div><div><p>Once an Agility Quote with a miscellaneous or previously-invalid item is <strong>received</strong> by the customer, you'll get a notification prompting you to manually enter that item's cost directly in Agility — the cost entered in Heritage+ for these items can't transmit electronically to override Agility's market cost. See <a href="#/notifications">Part 11 — Notifications</a>.</p></div></div>

## Configuring quote settings

Before sharing, think through:

- **Auto-Approve Modifications** — governs whether customer-requested item changes need TM approval. See <a href="#/negotiation">Part 7</a> for the full mechanic.
- **Auto-Approve Orders** — decoupled-branch setting governing whether customer purchases need TM approval before hitting Agility. See <a href="#/release-and-purchase">Part 9</a>.
- **Quote Access** — who can see this quote. Managed from the Quote Access (people) icon in the header toolbar, available to Territory Manager, Inside Sales, Commercial Services, and Branch Manager.

Section-level GM% works the same way as kit GM% (<a href="#/reading-a-quote">Part 3</a>) — it's a weighted average of the items in that section, and editing it cascades proportionally to those items.

**Inline editing** — adding a section/item note, adding an item, replacing an item, deleting an item, changing quantity, creating a cost override, changing price or GM%, and adding a section — is available to every internal role **except Branch Employee**.`
},

"sharing-with-customer": {
  title: "Sharing with the Customer",
  kicker: "Part 5",
  dek: "Approve & Share is the moment a quote becomes visible to the customer.",
  body:
`A quote isn't customer-facing until it's been shared. On a **New** quote, the header button reads **Approve & Share**; on a quote that's moved past New, the same action is available as **Copy Quote** — same underlying mechanism, different label based on quote status.

## The Share Quote modal

Clicking Approve & Share opens the **Share Quote** modal: it lists the current company the quote will be shared with (no selection checkboxes needed here — that list is controlled by whoever was already granted Quote Access). A **"+ Share Quote with Additional Customers"** link expands an **Existing Opportunities** panel, where eligible opportunities on the same project can be selected to receive their own copy of this quote. See <a href="#/one-project-many-customers">Part 6</a> for the full mechanics of sharing to multiple customers.

## What the customer receives

Once shared, the customer gets a **Quote Shared with Customer** email with a link into the quote. If the customer already has an active Heritage+ account matching their email in GRIDS, they get full edit access (requesting changes, receiving/awarding, purchasing). If they don't, they can still open the quote through the emailed link, authenticating with a one-time password — but their access is **view-only**; they cannot make any edits. Getting customers registered for a full Heritage+ account is the only way to unlock full interaction with the quote.

A guest (unregistered) customer's one permitted action, even without a registered account, is to **receive or award the quote** (see <a href="#/receipt-and-award">Part 8</a>).

Customers can also download the quote as a PDF from a format-choice landing page (a "New Style" or "Classic Style" option — both carry the same data disclaimer).

<div class="callout callout-info"><div class="co-icon">ℹ</div><div><p>Customers never see item cost, GM%, or specific item status flags (such as discontinued or inactive) — see <a href="#/roles-access">Roles &amp; Access</a>.</p></div></div>`
},

"one-project-many-customers": {
  title: "One Project, Many Customers",
  kicker: "Part 6",
  dek: "When multiple customers are bidding on the same project, here's how to get each of them their own quote — and how to keep them in sync.",
  body:
`## Getting a quote to additional customers

**"Share Quote with Additional Customers"** (the current production label; expect this to be renamed "Invite Companies" as new capability rolls out) does not directly share a quote with anyone. Instead, selecting existing opportunities, assigning a ship-to for each, and clicking Share sends a payload to GiddyUp, which creates an Estimate and pushes a **new, independent quote into Heritage+ in New status** for each opportunity — copying the source quote's items and pricing at the moment of creation.

That new quote is **not** auto-shared. The receiving TM still has to separately review, reprice, and Approve & Share it themselves. This is deliberate — it's what lets TMs differentiate pricing per competing bidder on the same project. **Copy Quote** is the identical underlying mechanism, just available and relabeled once a quote has moved past New status (Approve & Share only shows on a New quote).

**Opportunity eligibility** to receive a shared/copied quote requires all of the following:

- Same Parent Project ID as the source quote.
- Same assigned Territory Manager as the source quote.
- No existing Heritage+ quote already associated with that opportunity.

<div class="callout callout-planned"><div class="co-icon">→</div><div><p><strong>Coming soon — Invite Companies expansion:</strong> today, every customer receiving a duplicated quote needs an existing GRIDS opportunity first. The planned expansion lets a TM pull in a brand-new company with no existing opportunity at all — the system checks whether that company has a GRIDS account, and if not, the TM enters an email and the system creates the GRIDS account, opportunity, and estimate, then pushes the quote into Heritage+ automatically.</p></div></div>

## Keeping related quotes in sync — Update Related Quotes

Once several customers each have their own quote for the same project, **Update Related Quotes** lets a TM push a change made on one quote out to the others — typically used in competitive-bid scenarios, when a significant change on one bid needs to be reflected everywhere.

**Eligibility** for a quote to receive a bulk update:

- Same GRIDS Parent Project ID as the source quote.
- Same assigned Territory Manager as the source quote.
- Not in a terminal status. For a Direct Quote: New, Customer Review, Sales Review, or Received (Not Awarded) — or Expired, *if* it never previously reached a terminal status. For an Agility Quote: New, Customer Review, or Sales Review — or Expired under the same condition. A quote that has ever reached a terminal status is permanently excluded from receiving updates, even if it later shows as Expired.

The icon for this feature is available to **Territory Manager, Inside Sales, Branch Manager, and Commercial Services** — not Branch Employee.

**What you can push:**

| Selection | Effect |
|---|---|
| Quote checkbox only | Full item and section replacement — the receiving quote's items are entirely wiped and replaced with the source quote's items, repriced to the *receiving* customer's own default pricing. |
| "Copy Pricing" checkbox only | Price-only match by item code — no item or section changes. If the source has the same item code more than once, the first (topmost) instance's price wins, and every matching instance in the receiving quote gets that price. |
| Both checked | An exact copy of the source's items **and** pricing. |

This is all-or-nothing per receiving quote — you can't selectively apply it to individual items. Both the source and receiving quote log the action as "Bulk Pricing Update," visible to TM, Branch Employee, Branch Manager, Inside Sales, and Commercial Services — never to the customer.

<div class="callout callout-info"><div class="co-icon">⚠</div><div><p><strong>Item Changes are destructive.</strong> Any unique items already in the receiving quote that aren't in the source quote will be permanently lost when you push an item-level update.</p></div></div>`
},

negotiation: {
  title: "Negotiation",
  kicker: "Part 7",
  dek: "Once a quote is shared, the back-and-forth over items happens here — pending change requests, approvals, and the auto-approve alternative.",
  body:
`Once a quote is shared, its status is **Customer Review**. The back-and-forth from here on is mostly about item-level changes.

## Customer-requested changes

A customer can request: an item replacement, a quantity change, an item deletion, or an item addition. **Customers cannot request pricing changes.**

With **Auto-Approve Modifications** off (today's default — see below), each request shows inline on the affected item row with a type-specific label — "Delete Item Request Pending," "Replace Item Request Pending," "Quantity Change Pending," or "Add Item Request Pending" — along with who requested it and when (in CST). Multiple pending requests across different items can exist at the same time; they aren't limited to one at a time.

- The **customer's** view has a "Cancel Request" button, letting them withdraw their own pending request.
- The **TM's** view has "Decline" and "Approve" buttons instead. **Approve is a single click** with no extra input. **Decline requires a mandatory reason**, entered in a "Decline Request" modal.
- A **Pending Requests** toggle in the TM toolbar filters the item list down to just the items with a pending request.

While any pending request exists, the quote's status moves from **Customer Review to Sales Review**. Once every pending request has been resolved (approved or declined by the TM), the status reverts to Customer Review.

**One asymmetry worth knowing:** if the TM resolves all the pending requests, the quote's expiration date resets (see <a href="#/expiration-and-extension">Part 10</a>). If instead the customer cancels all of their own pending requests, the status still reverts to Customer Review — but the expiration date does **not** reset.

Customers are notified of updates to their requests via the **Change Request Updates** email.

## Auto-Approve Modifications

<div class="callout callout-planned"><div class="co-icon">→</div><div><p><strong>Not yet available in production.</strong> Today, every customer change request goes through the pending-approval flow described above. Auto-Approve Modifications is described here so you know what to expect once it ships.</p></div></div>

When turned on, customer changes (add, remove, or replace an item; update a quantity — never pricing) apply **immediately**, with no pending request created. The quote **stays in Customer Review the entire time** — it never moves to Sales Review. Each change is logged as a direct item action (Item Added / Deleted / Replaced / Qty Updated), attributed to the customer.

Notifications under this mode are **session-based**, not per-change: a "modifications session" opens on the customer's first change, stays open for 45 minutes after their most recent change (the timer resets with each new change), and closes either on 45 minutes of inactivity or immediately if the customer logs out, closes the app, or completes a purchase. Each quote tracks its own independent session. When a session closes, a consolidated **Customer Applied Changes** email goes to the Assigned TM, listing every customer who made changes and every item change with its old and new value.

The toggle for this setting is visible to Branch Manager, Inside Sales, Territory Manager, and Commercial Services — not Branch Employee — and is hidden once a quote reaches a terminal-ish status. Turning it on while pending requests already exist shows a warning that enabling it will automatically apply every pending change and cannot be undone; doing so retroactively clears the backlog, and if the quote was in Sales Review, it snaps back to Customer Review.`
},

"receipt-and-award": {
  title: "Receipt and Award",
  kicker: "Part 8",
  dek: "What 'Receive,' 'Commit,' and 'Award' actually mean, and what silently moves a quote to Received without anyone clicking a button.",
  body:
`## Receiving and committing/awarding

Clicking **Receive Quote** opens a single confirmation modal, with an optional **Commit Project** checkbox. Checking it reveals a required **Anticipated Start Date** field.

- **Received without committing:** status becomes **Received (Not Committed)** (Agility Quote) or **Received (Not Awarded)** (Direct Quote). The header button becomes **Commit Quote** / **Award Quote** — a separate action to take later, using the same modal pattern.
- **Received and committed/awarded in the same step:** status becomes **Received (Committed)** / **Received (Awarded)**. The header shows a clickable "Anticipated Order Date," which reopens the commit/award modal for editing later.

"Committed" (Agility Quote) and "Awarded" (Direct Quote) are the exact same mechanic — the customer signaling the project is genuinely moving forward — just labeled differently depending on quote type.

Every customer-facing quote carries a standard footer disclaimer about tariffs and market conditions affecting price past the quote's expiration, and states the quoted price is valid for a set number of days from the quote date. That day-count is an admin-configurable field, independent of anything shown in the receive/commit modals.

A **Customer Received Quote** email fires on receipt, and includes commitment details (who committed, and the anticipated start date) when the quote was committed at the same time. See <a href="#/notifications">Part 11</a> for the full recipient list.

## What silently moves a quote to Received

Some actions update a quote's status to Received as a side effect, without the customer or anyone else explicitly clicking "Receive Quote":

**Agility Quotes** — either of these:
- Printing the quote.
- Requesting a submittal.

**Direct Quotes** — the same two triggers apply, landing on Received (Awarded) or Received (Not Awarded) depending on whether the quote had already been awarded. Direct Quotes have one additional trigger, since they're purchasable immediately once shared:

- **Placing an order** jumps the quote straight to **Partial** — bypassing Received entirely — *unless* the customer purchases the full quoted quantity in one shot, in which case the status goes straight to **Completed** instead.`
},

"release-and-purchase": {
  title: "Release and Purchase",
  kicker: "Part 9",
  dek: "How items actually get purchased off a quote — for an Agility Quote, a Direct Quote, and when an internal user is placing the order on the customer's behalf.",
  body:
`## Agility Quote purchase flow

A global **"Populate Remaining Qty"** toolbar link fills every line's Purchase Qty with its Remaining Qty in one click. Otherwise, set a Purchase Qty per item — Heritage+ won't let it exceed the item's Remaining Qty — and click **Purchase Items**.

This hands off to the standard Heritage+ checkout flow (with a "back to quote" link), except the **header fields are locked** to whatever they were at the moment you clicked Purchase Items. On completion, a new Agility Sales Order is created, the purchased items and quantities are released from the Agility quote, and an **Order Confirmation** email goes out (see <a href="#/notifications">Part 11</a>).

Purchasing less than the full Remaining Qty leaves the quote in **Partial**. The quote only reaches **Completed** once every item across the *entire* quote has cumulatively reached its full quoted quantity — which can take several separate purchases over time.

## Direct Quote purchase flow

The entry mechanics are the same as an Agility Quote — Populate Remaining Qty, per-item Purchase Qty capped at Remaining Qty, then Purchase Items. What happens next is different: instead of redirecting to standard Heritage+ checkout, an **Order Details** modal opens directly on the Quote Detail screen.

- **Job Name, PO #, Ship-to, and Branch are locked.**
- **Expected Delivery Date, Ship Via, Ship-to Name, Company Address 1/2, State, City, Zip, Contact Phone, and Order/Shipping Notes are editable** — these overrides apply only to this specific order and never change the quote's own default header.
- The modal shows the line items being purchased (description, quantity, UOM, price, extended price) and a subtotal before you submit.
- Clicking **Place Order** shows an order confirmation screen. Closing it — or Cancel/X at any point — returns you to the Quote Detail screen.

Since a Direct Quote never has a live Agility quote object to sync Remaining Qty from, Heritage+ calculates it internally: quoted quantity minus the sum of everything already purchased against that item across every prior order on that quote. The same **Order Confirmation** email fires as on an Agility Quote purchase, and the same Partial/Completed logic applies — Completed only once every item across the whole quote has cumulatively reached its full quoted quantity.

## Purchasing on a customer's behalf

Territory Manager, Branch Employee, Inside Sales, and Branch Manager can all place an order directly for a customer, using the identical checkout experience described above.

Heritage+ also has a general **Remote Login** (impersonation) feature that lets an internal user log in as a specific customer. This capability sits outside the Commercial Quoting module and isn't documented in depth here — to use it: **Account menu → Remote Login ("Log in as a Customer") → select Company → select User → Log In as User.**

<div class="callout callout-planned"><div class="co-icon">→</div><div><p><strong>Coming soon:</strong> item and activity log entries created during an impersonated session will be attributed as "[date/time] CST by [impersonating user] on behalf of [impersonated user]," visible to both internal and customer users. Actions taken outside of an impersonated session will continue to show plain attribution with no "on behalf of" text.</p></div></div>

## Pending Sales Orders (decoupled branches, Auto-Approve Orders off)

On a decoupled branch with **Auto-Approve Orders** turned off, a customer completing checkout doesn't go straight to Agility. Instead, Heritage+ creates a **Pending Sales Order** — stored entirely in Heritage+, holding all the checkout data and items — and surfaces it in a **Pending Sales Orders** banner on the quote detail page, for both the customer and the TM.

- **Customer view:** *"These orders are currently under sales review. You'll receive a notification as soon as they're approved."* — with a "View Order" link into a read-only **Order Review** screen.
- **TM view:** *"The following orders require your approval. Review each order to confirm details or update the ship-to as needed, then approve the order to send it into Agility for processing."* — with "Review Order" and "Approve Order" links. Approving opens a confirmation modal; confirming transmits the order to Agility, closes the modal, and shows a toast confirming submission.

### Order Review screen

| | Customer | TM / Employee |
|---|---|---|
| Product details, Quote Qty, Purchase Qty, Price, UOM, Ext. Price | Read-only | Cost and GM% also shown |
| Purchase Qty | Not editable | **Editable** (cannot go below 1) |
| Delete Item | Not available | **Available** |
| Header fields (Expected Delivery Date, Ship Via, Ship-to Name/Address/City/State/Zip/Phone) | Not shown | **Editable directly from this screen** |
| Message board, item log, activity log, Print, View in GRIDS, Quote Status banner, Add/Replace/Delete item links, disclaimer text | Not shown | Not shown |
| Cancel Order | Available (requires a reason; cancels the order, redirects to the quote, sends a cancellation email with the reason) | Available (same behavior) |

Kit items are always listed individually on this screen, never grouped.

**Deleting a quote item that's also on a pending order** triggers a warning: *"This item is currently included in a pending sales order. If you delete it, it will be removed from that order as well. Would you like to proceed?"* Proceeding removes the item from the quote and from every linked pending order — or, if a customer initiates the delete, it becomes a normal pending modification request instead (<a href="#/negotiation">Part 7</a>). If a deleted item was the *only* item on a pending order, that order stays listed with zero items rather than auto-cancelling. If an item has no linked pending orders, deletion proceeds with no warning at all.

This workflow has its own set of email notifications — see <a href="#/notifications">Part 11</a>.`
},

"expiration-and-extension": {
  title: "Expiration and Extension",
  kicker: "Part 10",
  dek: "Quotes expire on purpose, to protect margin against stale item costs. Here's what sets and resets the date, and how to extend one.",
  body:
`Every quote is created with two duration settings, passed from GiddyUp at creation: an **Active Quote Duration** (used before the quote is received) and an **Accepted Quote Duration** (used once it's received).

## Setting and resetting the expiration date

| Event | New expiration date |
|---|---|
| Quote first lands in Heritage+ (status: New) | Creation Date + 30 days flat |
| Quote is shared with the customer (New → Customer Review) | Share Date + Active Quote Duration |
| TM resolves every pending change request (Sales Review → Customer Review) | Resolution Date + Active Quote Duration |
| Customer cancels their own pending requests instead (status still reverts to Customer Review) | **Not reset** — stays wherever it was |
| Received + committed/awarded, Accepted Quote Duration < 90 days | Anticipated Start Date + 90 days |
| Received + committed/awarded, Accepted Quote Duration ≥ 90 days | Anticipated Start Date + Accepted Quote Duration |
| Received, not committed/awarded | Date Received + Accepted Quote Duration |

Only a TM-driven resolution of pending requests resets the clock — a customer backing out of their own requests does not. Once a quote is received, its expiration date is passed along to Agility.

## What happens when a quote expires

Regardless of status, an expired quote locks: no item edits (add/replace/cost/price/quantity/delete), no header edits, no pencil icon — the message board stays open.

## Extending, before receipt (New / Customer Review / Sales Review)

Clicking **Extend Expiration** on an expired quote opens one of two modals, depending on how many times it's already been extended:

- **Attempts 1–2 — "Reprice Optional":** shows the attempt number, the quote's Current Price alongside a real-time-refreshed Updated Price, and two choices:
  - **Extend With Current Price** — keeps existing cost/GM%/price untouched, and restores the quote to whatever status it was in before it expired (including any pending requests).
  - **Extend & Reprice Quote** — refreshes item cost, keeps GM%, recalculates price, and **always resets the quote to New status**, whether this reprice was chosen voluntarily or forced — giving the TM a clean opportunity to re-review pricing before re-sharing.
- **Attempt 3 and beyond — "Reprice Mandatory":** same price comparison, but **Extend & Reprice Quote is the only option** (plus Cancel/X to back out without extending). There's no cap on how many times this can happen.

The suggested/applied date depends on whether the quote has ever been shared: **Today + 30 days flat** if it's still in New (never shared), or **Today + Active Quote Duration** once it has been shared at least once.

## Extending, after receipt (Received / Partial)

- **Agility Quote:** a single "Extend Expiration Date" modal, no reprice option. Sets the new date to Today + Accepted Quote Duration, pushes it to Agility via API, and restores the original status (Received or Partial).
- **Direct Quote:** a more flexible **date picker**, letting the TM choose a specific date in 30-day increments, **capped at 120 days out**. No Agility API call, since a decoupled quote has no live Agility quote object to keep in sync.

## Customer-requested extension

A customer can't extend a quote themselves. On an expired quote (Customer Review, Sales Review, Received, or Partial), they see a **Request Extension** button, which — after confirming in a modal — sends an **Extend Expiration Request** email to the TM and auto-dismisses with a brief on-screen confirmation.`
},

notifications: {
  title: "Notifications",
  kicker: "Part 11",
  dek: "Every email notification tied to the Commercial Quoting workflow — what triggers it, and who receives it.",
  body:
`**One rule applies across every notification below:** wherever "Assigned TM" appears as a recipient, the **Assigned Inside Sales rep also receives it**, if one is assigned to the quote.

<div class="callout callout-info"><div class="co-icon">ℹ</div><div><p><strong>Branch Manager</strong> is temporarily paused, business-wide, from receiving any Commercial Quoting email notification — even on notifications originally designed to include them. If you're a Branch Manager, check the quote directly in Heritage+ rather than relying on email for time-sensitive approvals.</p></div></div>

| Notification | Trigger | Recipients |
|---|---|---|
| New Quote Created | A quote is created in Heritage+ for the first time from GiddyUp | Assigned TM |
| Quote Rejected | A TM or CS user rejects the quote | The GiddyUp user who created the quote |
| Quote Shared with Customer | Approve & Share | Customer(s) on the quote |
| Change Request Updates | Customer submits an item change request | Customer |
| Customer Applied Changes | An Auto-Approve Modifications session closes | Assigned TM |
| Customer Received Quote | Customer receives (and optionally commits/awards) the quote | Assigned TM |
| Quote Received – Inactive/Misc Items | An Agility Quote is received while it still contains an invalid or miscellaneous item | Assigned TM |
| Order Confirmation | An order is placed (Agility Quote release, or Direct Quote checkout) | Customer, Assigned TM |
| Order Pending Approval (TM) | A Pending Sales Order is created (decoupled branch, Auto-Approve Orders off) | Assigned TM |
| Order Received – Pending Approval | Same trigger as above | Customer(s) on the quote |
| Order Approved | TM approves a pending sales order | Customer(s) on the quote |
| Order Cancelled | A pending order is cancelled, by either the customer or the TM | Customer(s) on the quote, Assigned TM |
| Extend Expiration Request | Customer requests an extension on an expired quote | Assigned TM |

For the **Customer Applied Changes** notification specifically: it's session-based rather than per-change — see <a href="#/negotiation">Part 7</a> for how a modifications session opens and closes. For the **Pending Sales Order** notifications, see <a href="#/release-and-purchase">Part 9</a> for the full workflow those emails are attached to.`
},

"ref-field-mapping": {
  title: "Heritage+ ↔ Agility Field Mapping",
  kicker: "Reference",
  dek: "Which Heritage+ header fields correspond to which field in Agility.",
  body:
`| Heritage+ field | Writes to Agility as | Notes |
|---|---|---|
| Quote Title | Job Number | Editable |
| Quote Name | — | Editable; not passed to Agility |
| Quote ID | — | Received *from* Agility once an Agility Quote is received; system-generated in Heritage+ until then |
| PO Number | Customer PO | |
| Reference Number | Reference | |
| Expiration Date | Close Date | See <a href="#/expiration-and-extension">Part 10</a> for how this date is calculated |
| Quoted By | Digital | Always shown as "Digital" — supports digital revenue tracking; not meant to be edited |
| Company Name | *(not passed)* | |
| Territory Manager | *(not passed)* | |
| Branch / Ship-to | Stays on selected sequence | |
| Expected Delivery Date | Expected Delivery Date | Set when the quote is committed/awarded |

See <a href="#/reading-a-quote">Part 3</a> for how these fields behave in the quote header, and <a href="#/coupled-vs-decoupled">Part 1</a> for how quote type affects whether any of this syncs at all.`
},

"ref-status-glossary": {
  title: "Quote Status Glossary",
  kicker: "Reference",
  dek: "What each quote status means.",
  body:
`| Status | Meaning |
|---|---|
| New | Quote has been created but not yet shared with the customer. |
| Customer Review | Quote has been shared and is with the customer; no unresolved change requests. |
| Sales Review | The customer has one or more pending change requests awaiting a TM decision. |
| Received (Not Committed / Not Awarded) | Customer has received the quote but has not yet committed/awarded it. |
| Received (Committed / Awarded) | Customer has received and committed/awarded the quote — signaling the project is moving forward. |
| Partial | Some, but not all, of the quoted items/quantities have been purchased. |
| Completed | Every item on the quote has been purchased in full. |
| Expired | The quote's expiration date has passed; locked until extended. See <a href="#/expiration-and-extension">Part 10</a>. |

"Committed" and "Awarded" are the same underlying status, labeled differently depending on whether the quote is an Agility Quote or a Direct Quote — see <a href="#/coupled-vs-decoupled">Part 1</a>.

The quote list can be filtered by status — see <a href="#/finding-a-quote">Part 2</a>.`
},

"ref-terminology": {
  title: "Terminology Glossary",
  kicker: "Reference",
  dek: "Shorthand and system-specific terms used throughout this guide.",
  body:
`| Term | Meaning |
|---|---|
| Agility Quote | A quote on a non-decoupled branch — stays synced to Agility, locks after receipt. |
| Direct Quote | A quote on a decoupled branch — never syncs to Agility, stays editable after receipt. |
| Decoupled / Non-decoupled | Branch-level setting that determines whether quotes on that branch sync to Agility. See <a href="#/coupled-vs-decoupled">Part 1</a> and the <a href="#/ref-branches">Decoupled Branch List</a>. |
| Committed / Awarded | The same action and status — the customer signaling a project is moving forward — labeled "Committed" on Agility Quotes and "Awarded" on Direct Quotes. |
| Project | The parent GRIDS/GiddyUp record for a bid opportunity. |
| Opportunity | A child record of a project, one per bidding customer. |
| Estimate | The GiddyUp document that becomes a Heritage+ quote once sent over. |
| Quote | An estimate that has been sent into Heritage+. |
| Kit | A parent/child item structure where the parent is a non-purchasable placeholder and only child items pass to Agility. |
| Misc / Miscellaneous Item | A placeholder item type used to represent a non-catalog item on an Agility Quote, with the intended description stitched into an Agility item note. |
| Pending Sales Order | An order placed on a decoupled-branch quote with Auto-Approve Orders off — held in Heritage+ for TM approval before it reaches Agility. |
| GRIDS Employee / GRIDS Admin | Platform role field names — see <a href="#/roles-access">Roles &amp; Access</a> for how these map to business role names. |`
},

"ref-branches": {
  title: "Decoupled Branch List",
  kicker: "Reference",
  dek: "Branches currently enrolled in Agility decoupling — meaning quotes at these branches stay editable in Heritage+ after receipt, and never sync to Agility. As of 7/29/2026.",
  body:
`<div class="callout callout-info"><div class="co-icon">ℹ</div><div><p>This list changes as more branches are enrolled in decoupling. It's snapshotted here with a date rather than promised to be perpetually live — if you need to confirm a branch not listed here, check with Commercial Services.</p></div></div>

| Branch | Branch Code |
|---|---|
| Heritage Landscape Supply Doraville | ATLDORA |
| Heritage Landscape Supply Apex | ATMAPEX |
| Heritage Landscape Supply Brunswick | FISBRUN |
| Heritage Landscape Supply Cumming | FISCUMM |
| Heritage Landscape Supply Greenville | FISGREE |
| Heritage Landscape Supply Huntsville | FISHUNT |
| Heritage Landscape Supply Matthews | FISMATT |
| Heritage Landscape Supply Pelham | FISPELH |
| Heritage Landscape Supply Pineville | FISPINE |
| Heritage Landscape Supply Pooler | FISPOOL |
| Frederick Block Brick & Stone Harrisonburg | FREHARR |
| Frederick Block Brick & Stone Loudoun | FRELOUD |
| Frederick Block Brick & Stone Ruckersville | FRERUCK |
| Frederick Block Brick & Stone Winchester | FREWINC |
| Heritage Landscape Supply Alpharetta | SILALPH |
| Heritage Landscape Supply Columbia | SILCOLU |
| Heritage Landscape Supply Gastonia | SILGAST |
| Heritage Landscape Supply Nashville | SILNASH |
| Heritage Landscape Supply Richmond VA | SILRICH |
| Heritage Landscape Supply Spring Hill | SILSPHI |
| Heritage Landscape Supply Woodstock | SILWOOD |
| Scott Stone Greensboro | SSSGREE |
| Scott Stone Mebane | SSSMEBA |
| Southern Stone Supply Raleigh | SSSRALE |
| Superior Irrigation and Landscape Supply Raleigh S | SSSRALS |
| Heritage Landscape Supply - Pharr | HLSPHAR |
| Heritage Landscape Supply Aubrey | IRRDENT |
| Heritage Landscape Supply McKinney | IRRMCKI |
| Heritage Landscape Supply Aledo | IRSALED |
| Heritage Landscape Supply Austin South | IRSATXS |
| Heritage Landscape Supply Conroe | IRSCONR |
| Heritage Landscape Supply Dallas | IRSDALL |
| Heritage Landscape Supply Houston | IRSHOUS |
| Heritage Landscape Supply Hutto | IRSHUTT |
| Heritage Landscape Supply Katy | IRSKATY |
| Heritage Landscape Supply Mansfield | IRSMANS |
| Heritage Landscape Supply Pearland | IRSPEAR |
| Heritage Landscape Supply Richland | IRSRIHI |
| Heritage Landscape Supply Rockwall | IRSROCK |
| Heritage Landscape Supply San Antonio North | IRSSANN |
| Stone Center of Texas Stafford | IRSSTAF |
| Heritage Landscape Supply Belton | ISIBELT |
| Heritage Landscape Supply Hewitt | ISIHEWI |
| Leaf Landscape Supply North Austin | LLSNAUS |
| Leaf Landscape Supply South Austin | LLSSAUS |
| Stone Center of Texas Conroe | SCTCONR |
| Stone Center of Texas San Antonio | SCTSANA |
| Heritage Landscape Supply Allentown | AQSALLE |
| Heritage Landscape Supply Chantilly | AQSCHAN |
| Heritage Landscape Supply Cincinnati | WCCCINC |
| Heritage Landscape Supply Cleveland | WCCCLEV |
| Heritage Landscape Supply Columbus | WCCCOLU |
| Heritage Landscape Supply Dayton | WCCDAYT |
| Heritage Landscape Supply Fredericksburg | AQSFRED |
| Heritage Landscape Supply Gaithersburg | HLSGAIT |
| Heritage Landscape Supply Harrisburg | AQSHARR |
| Heritage Landscape Supply Hawthorne | AQSHAWT |
| Heritage Landscape Supply Holtsville | NSSHOLT |
| Heritage Landscape Supply Joppa | WIRJOPP |
| Heritage Landscape Supply Lakewood NJ | AQSLAKE |
| Heritage Landscape Supply Lexington | WCCLEXI |
| Heritage Landscape Supply Louisville | WCCLOUI |
| Heritage Landscape Supply Millersville | AQSMILL |
| Heritage Landscape Supply New Castle | AQSNECA |
| Heritage Landscape Supply Norristown | AQSNORR |
| Heritage Landscape Supply North Canton | HLSNCAN |
| Heritage Landscape Supply Pittsburgh | WCCPITT |
| Heritage Landscape Supply Pleasantville | AQSPLEA |
| Heritage Landscape Supply Riverhead | NSSRIVH |
| Heritage Landscape Supply Sewell | AQSSEWE |
| Heritage Landscape Supply Stamford | AQSSTAM |
| Heritage Landscape Supply West Chester | AQSWECH |
| Heritage Landscape Supply Whippany | AQSWHIP |
| Heritage Landscape Supply White Marsh | WIRWHIT |`
},

"ref-permissions": {
  title: "Permissions Matrix",
  kicker: "Reference",
  dek: "Who can do what, function by function.",
  body:
`For role-by-role narrative descriptions, see <a href="#/roles-access">Roles &amp; Access</a>. This page is the flat function-by-function view.

## Quote-level functions

| Function | CS | TM | IS | Branch Manager | Branch Employee |
|---|---|---|---|---|---|
| View quote (cost/GM% visible) | Yes | Yes | Yes | Yes | Yes (view only) |
| Modify header values | Yes | Yes | Yes | Yes | No |
| Add / delete / replace items | Yes | Yes | Yes | Yes | No |
| Change quantity / UOM | Yes | Yes | Yes | Yes | No |
| Change price / GM% | Yes | Yes | Yes | Yes | No |
| Create cost override | Yes | Yes | Yes | Yes | No |
| Reprice Quote | Yes | Yes | Yes | Yes | No |
| Approve & Share / Copy Quote | Yes | Yes | Yes | Yes | No |
| Manage Customer Access | Yes | Yes | Yes | Yes | No |
| Update Related Quotes | Yes | Yes | Yes | Yes | No |
| Customer Insights panel | Yes | Yes | Yes | Yes | No |
| Print Preview | Yes | Yes | Yes | Yes | Yes |
| Activity Log (full, incl. pre-share events) | Yes | Yes | Yes | Yes | No (cannot view New-status events) |
| Message board | Yes | Yes | Yes | Yes | Yes |
| Release items / approve Pending Sales Orders | Yes | Yes | Yes | Yes | **Yes** |

## Customer functions, for comparison

| Function | GRIDS Customer |
|---|---|
| View quote | Yes — cost, GM%, and item status flags hidden |
| Request item add / replace / delete / quantity change | Yes |
| Request pricing change | No — not possible |
| Cancel own pending request | Yes |
| Receive / Award / Commit quote | Yes |
| Adjust Anticipated Start Date | Yes, once committed/awarded |
| Purchase from quote | Yes — cannot purchase miscellaneous or inactive items |
| Print quote | Yes — requires the quote to already be Received |

## Quote access scope by role

| Role | Sees which quotes? |
|---|---|
| Commercial Services | All quotes, system-wide |
| Territory Manager | Quotes where assigned as TM |
| Inside Sales | Quotes where assigned as IS |
| Branch Manager | Quotes at their default branch |
| Branch Employee | Quotes at their default branch |
| Customer | Quotes where assigned in GRIDS, or later granted access in Heritage+ |`
}

} // end pages
};
