FounderLens AI — complete Figma design specification with 5 screens, design tokens, components, and copy-ready prompt
FounderLens AI — Figma design spec
B2B SaaS dashboard
5 screens
Desktop-first · 1440px
Dark sidebar + white canvas
Copy full prompt
Copied!
BRAND IDENTITY & TONE
Voice
Institutional. Analytical. Authoritative. Feels like Bloomberg Terminal meets modern SaaS — serious, not playful. Data is the hero. No decorative illustrations.
Product name & tagline
FounderLens AI
"Turn founder dependency into investable clarity"
DESIGN TOKENS
Colors
Brand primary
#085041
Sidebar, logo bg
Brand accent
#1D9E75
CTAs, positive scores
Brand light
#9FE1CB
Icon tint on dark bg
Risk critical
#E24B4A
Score <40, critical badge
Risk moderate
#EF9F27
Score 40–65, high badge
Risk low
#639922
Score >65, acceptable
Sidebar bg
#1A1A18
Left nav, dark contrast
Typography
Display / headings
DM Sans — 500 weight
H1: 28px · H2: 20px · H3: 16px
Body / UI labels
Plus Jakarta Sans — 400/500
Body: 14px · Labels: 12px · Micro: 11px
Scores / data
JetBrains Mono — 500
Score numbers: 28–36px
SCREEN 1 OF 5 — LOGIN
1
Login page
Centered card · clean · institutional
Full-bleed background: very dark near-black (#111110). Subtle grid texture overlay at 3% opacity.
Center card: 440px wide, white bg, 16px radius, 48px padding. No shadow — just a 0.5px border.
Top of card: FounderLens logo mark (green square #085041 with white lens/graph icon) + wordmark "FounderLens" in DM Sans 500.
Tagline below logo: "Turn founder dependency into investable clarity" — 13px, muted, centered.
Email input + password input, each 44px tall, 1px border, 8px radius.
Primary CTA: "Sign in" — full-width, 44px, #085041 background, white text.
Below button: two secondary links side by side — "Join an existing fund" and "Request access".
Bottom of page: small text "Trusted by PE firms in Tunisia, Morocco, and the GCC".
SCREEN 2 OF 5 — DEAL UPLOAD
2
Deal upload page
File ingestion · 4 input categories
Top bar: FounderLens logo left, deal name input center ("New deal: Samir Industries"), user avatar right.
Page title: "Upload company documents" — H2, left-aligned under nav.
Four upload zones in a 2×2 grid. Each zone: dashed 1px border, 8px radius, 160px tall, centered icon + label.
Zone 1 — "Contracts & PDFs" (ti-file-text icon). Zone 2 — "Excel & financial files" (ti-table icon).
Zone 3 — "Interviews (audio/video)" (ti-microphone icon). Zone 4 — "Org chart" (ti-hierarchy-2 icon).
Below the grid: an uploaded files list. Each file row shows: file icon, filename, size, a green checkmark when processed, and an X to remove.
Sticky bottom bar: "14 files uploaded · Ready to analyze" + "Start analysis →" button in #085041.
SCREEN 3 OF 5 — AI PROCESSING
3
AI processing page
Loading state · animated status feed
Background: very light gray (#F7F6F2). Center-stage layout — everything lives in a 560px column centered on the page.
Top: company name "Samir Industries" in H2. Below: "Analyzing 14 documents…" in muted 14px.
Animated network graph placeholder (abstract nodes + edges, subtle pulse animation) — 280px tall, centered.
Below graph: vertical status feed. Each step shows an icon, label, and state. Three states: completed (green check), active (pulsing teal dot + bold text), pending (muted gray).
Step labels: "Transcribing interviews" → "Extracting entities and relationships" → "Building dependency graph" → "Scoring succession readiness" → "Generating investment memo".
Progress bar below steps: thin 4px bar, teal fill, animates from 0→100%.
Estimated time remaining: "~2 min remaining" — 12px, muted, centered below bar.
SCREEN 4 OF 5 — MAIN DASHBOARD (HERO SCREEN)
4
Main dashboard
Core product · data-dense · 3-panel layout
Left sidebar (220px, dark #1A1A18):
Logo top. Section "Active deals" with 3 deal rows (icon + company name). Section "Team" with Associates and Settings links. Active deal highlighted with teal left border.
Top bar (full width, white):
Deal name "Samir Industries" + company metadata (industry, city, employees, files). Right: "Export report" button.
Score strip (5 cards in a row):
Overall (39, red), Founder dep. (25, red), Mgmt depth (45, amber), Process docs (30, red), Customer conc. (60, green). Each card: number in JetBrains Mono 36px + color, label 11px muted above, thin progress bar below.
Left panel — Founder dependency map:
Force-directed network graph. Founder node at center (dark green circle). Arrows radiating to: 5 supplier nodes (red), 3 client nodes (amber), decision nodes (gray). Arrow thickness = dependency weight. Hoverable nodes show tooltip.
Right panel — Risk table:
5 rows: risk name, why it matters for PE, severity badge (Critical/High/Low). Each row has a colored dot indicator. Bottom of panel: "Generate 100-day plan →" CTA.
AI insight bar (bottom strip):
Teal-tinted strip across full width. AI-generated one-liner: "Company is attractive but founder-dependent. Recommend: appoint CFO, delegate discount approval below 10%, formalize top-3 supplier contacts." Truncated with "Read full memo →".
SCREEN 5 OF 5 — REPORT EXPORT
5
Report export page
Three downloadable deliverables
Page title: "Download reports — Samir Industries". Subtitle: "Generated May 15, 2026 · 14 documents analyzed · 3 interviews transcribed".
Three export cards side by side. Each: white bg, 1px border, 16px radius, 24px padding.
Card 1 — PE Investment Memo: ti-file-text icon (teal), title, "12 pages · Succession risk analysis, dependency map, governance gaps, investment recommendation". "Download PDF" button.
Card 2 — Succession Risk Report: ti-alert-triangle icon (amber), title, "8 pages · Scored risk categories, key-person analysis, what breaks if founder exits". Featured card (2px teal border). "Download PDF" button.
Card 3 — 100-Day Governance Plan: ti-calendar icon (green), title, "6 pages · Role transfer checklist, SOP drafts, hiring recommendations, decision delegation plan". "Download PDF" button.
Below cards: "Share with team" — a row of team member avatars + "Copy link" button.
REUSABLE COMPONENTS TO BUILD IN FIGMA
Score card
Number (mono, colored by risk), label (11px muted), progress bar (4px, colored). Auto-layout, 3 variants: critical / moderate / acceptable.
Risk row
Colored dot + risk name + PE rationale text + severity badge. Used in dashboard right panel and export cards.
Severity badge
3 variants: Critical (red), High (amber), Acceptable (green). Pill shape, 11px mono, colored background + dark text from same ramp.
Upload zone
Dashed border, centered icon + label, 3 states: idle / hover (teal dashed border) / uploaded (solid border + file count badge).
Deal row (sidebar)
Company icon + name + deal status dot. 2 states: default and active (teal left border + slightly lighter bg).
Processing step
Icon + label + state indicator. 3 states: pending (gray), active (pulsing dot, bold text), completed (green check). Stack vertically with 16px gap.
FIGMA AI — ONE-SHOT PROMPT (COPY AND PASTE)
Paste this into Figma AI or share with your designer:
Design a B2B SaaS web platform called "FounderLens AI" — a due diligence tool for private equity firms analyzing founder-dependent SMEs in Tunisia and the MENA region. The product category is: Founder Dependency Intelligence Platform for Private Equity.

Design system: Dark sidebar (#1A1A18) with white main canvas. Primary brand color: deep forest green (#085041) with teal accent (#1D9E75). Risk colors: red (#E24B4A) for critical, amber (#EF9F27) for moderate, green (#639922) for acceptable. Typography: DM Sans (headings, 500 weight) + Plus Jakarta Sans (body, 400/500) + JetBrains Mono (score numbers). No gradients. No drop shadows. 0.5px borders. 12px corner radius on cards.

Build 5 screens at 1440px desktop width:

1. Login page: dark background (#111110), centered white card (440px), logo + tagline "Turn founder dependency into investable clarity", email + password inputs, "Sign in" CTA in #085041, links to join a fund or request access.

2. Deal upload page: top bar with deal name, 2×2 grid of dashed upload zones (Contracts/PDFs, Excel files, Interviews, Org chart), uploaded files list below, sticky bottom bar with file count + "Start analysis" CTA.

3. AI processing page: light gray background, centered layout, animated abstract network graph (280px), vertical status feed with 5 steps showing pending/active/completed states, thin teal progress bar, estimated time remaining.

4. Main dashboard (hero): left dark sidebar (220px) with active deals list, top metadata bar, row of 5 score metric cards (Overall 39/red, Founder dep 25/red, Mgmt depth 45/amber, Process docs 30/red, Customer conc 60/green) each with mono number + progress bar, two-panel main area: left panel is a force-directed founder dependency network graph, right panel is a 5-row risk table with colored dots and severity badges, full-width teal AI insight strip at the bottom.

5. Report export page: three side-by-side export cards (PE Investment Memo, Succession Risk Report, 100-Day Governance Plan) each with icon, description, and Download PDF button. Middle card featured with 2px teal border. Team share row below.
Copy prompt
Copied!