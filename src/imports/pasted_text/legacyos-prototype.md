Design a high-fidelity desktop web app prototype called LegacyOS.

Core concept

LegacyOS is an AI-powered due diligence platform for private equity investors assessing founder-led SMEs, often family-owned. Its purpose is to detect founder dependency, measure how transferable the company really is, and convert hidden operational dependency into structured investment intelligence.

The platform helps answer this core question:

Are we buying a real company, or the founder’s personal operating system?

The design should feel:

premium
credible
institutional
modern
analytical
visually engaging
easy to understand for judges and investors

This is a business hackathon prototype, so the UI should look realistic, polished, and investor-grade, while remaining intuitive.

Product type

Create a desktop SaaS dashboard for PE analysts / investment teams.

Canvas / layout
Desktop-first
Use 1440px wide artboards
Clean SaaS layout
Left vertical navigation
Top header with company name, search, notifications, export button, user avatar
Main content area with cards, analytics panels, charts, forms, and workflow modules
Brand / visual direction

Use a strong and attractive color scheme that feels like AI + private equity.

Suggested palette
Deep navy: #0F172A
Slate blue / charcoal: #1E293B
Teal accent: #14B8A6
Emerald success: #10B981
Amber warning: #F59E0B
Red risk: #DC2626
Soft background: #F8FAFC
White cards
Muted gray text: #64748B
Visual style
Professional and premium
Slightly futuristic but not flashy
Use soft shadows, rounded cards, high legibility
Strong hierarchy
Elegant typography
Use icons for data, governance, founder, company, documents, risks, AI, and workflows
Typography

Use a clean modern sans serif similar to:

Inter
SF Pro
IBM Plex Sans
Prototype goal

The prototype must clearly show:

what LegacyOS is
how a PE analyst uploads and enters company data
how AI analyzes founder dependency
what outputs are generated
how the system creates investment value
how the 100-day professionalization plan works
Main user
PE analyst
investment associate
SICAR analyst
family office analyst
due diligence advisor
Primary workflow

The prototype should simulate this journey:

Create project
→ upload company documents
→ enter company profile manually
→ AI ingestion and analysis
→ founder dependency dashboard
→ visual analytics
→ risk findings
→ 100-day action plan
→ export PE memo
Required screens

Create the following screens in a coherent flow.

Screen 1 — Welcome / Landing Dashboard

Purpose: show what LegacyOS is and let the user start a new analysis.

Include:

Title: LegacyOS
Subtitle: AI-powered founder dependency due diligence for private equity
CTA buttons:
New Analysis
Upload Company Data
Enter Company Information
Summary cards:
Companies analyzed
Average Founder Dependency Risk
Average Succession Readiness
Open analyses
A short value statement:
“Turn hidden founder dependency into measurable investment risk.”
Screen 2 — Upload Data Interface

This must be the first real operating interface.

Purpose: upload company files.

Include:

Large drag-and-drop upload area
Button: Upload Files
File categories with icons:
Founder interview transcript
Audio/video interviews
Org chart
Customer list
Supplier list
Contracts
Invoices
Financial statements
Bank statements
Internal policies
Emails / meeting notes
Accepted formats displayed clearly:
PDF
DOCX
TXT
XLSX
CSV
MP3
WAV
PNG / JPG
A file queue with upload progress bars
Small note:
“LegacyOS extracts relationships, decision rights, and operational dependencies from structured and unstructured data.”
Screen 3 — Company Information Form

Purpose: allow manual input of core company data.

Include a structured form with these sections:

Company profile
Company name
Sector
Headquarters / city
Year founded
Revenue
EBITDA
EBITDA margin
Employees
Export share %
Ownership type
Founder age
Founder role
Target deal type (minority, majority, buyout, growth capital)
Governance / management
Number of family members involved
Number of direct reports to founder
Exists CFO? yes/no
Exists COO? yes/no
Exists formal board? yes/no
Has succession plan? yes/no
Are SOPs documented? yes/no/partial
Customer / supplier concentration
Top 3 customers share of revenue
Top 5 suppliers share of purchases
Founder manages top customers? yes/no/partial
Founder manages top suppliers? yes/no/partial

Buttons:

Save Company Profile
Run AI Analysis
Screen 4 — Ingestion / AI Processing Screen

Purpose: show the system working.

Include a polished progress interface with stages:

Transcribing interviews
Extracting entities
Mapping relationships
Detecting founder-controlled decisions
Scoring dependency risk
Generating recommendations
Building 100-day action plan

Show animated or staged progress bars.

Also include small “AI insights detected” cards such as:

“Founder personally manages 2 largest customers”
“No documented discount approval matrix”
“Supplier negotiation centralized in founder”
“Successor not clearly identified”
Screen 5 — Executive Dashboard

Purpose: give the main PE summary.

Include large KPI cards:

Founder Dependency Score
Succession Readiness Score
Governance Maturity Score
Management Depth Score
Transferability Score

Include a risk heatmap using red / amber / green.

Add a short PE interpretation panel:

“The company is profitable but highly founder-dependent.”
“Main risks: customer relationship concentration, undocumented pricing decisions, weak second-line management.”
“Recommendation: invest only with governance and transition conditions.”

Include a clear CTA:

View Full Dependency Map
View Action Plan
Export IC Memo
Screen 6 — Dependency Map / Relationship Intelligence

Purpose: visualize who controls what.

Show a polished network graph / node map:

Founder in center
Connected nodes:
customers
suppliers
pricing approvals
hiring
operations
finance
family influence
Use thickness / color intensity to show concentration of dependency

Also show a side panel:

Top founder-controlled functions
Top key-person risks
Transferability blockers
Screen 7 — Advanced Visual Analytics

This screen is very important.

Create a visually strong analytics page containing these three visualizations:

1. Dendrogram

Purpose: cluster dependencies and business functions.
Example clusters:

Customer dependence
Supplier dependence
Pricing control
Operational know-how
Management dependency
Governance weakness
2. Chord Diagram

Purpose: show the strength of relationships between:

Founder
Customers
Suppliers
Sales
Finance
Operations
HR
Family members

Use color-coded arcs and connectors.

3. Treemap

Purpose: show relative risk weight by category.
Example blocks:

Customer dependency
Supplier dependency
Decision concentration
Undocumented processes
Successor weakness
Governance gaps

Also include a short note:

“These visualizations help investors understand where intangible control and operational value are concentrated.”

Design these as polished dashboard visualizations, even if the underlying data is sample/demo data.

Screen 8 — Intangible Value & Hidden Risk

Purpose: explain what financials miss.

Show a section titled:

What financial statements miss

Use cards or concise blocks for:

Customer trust
Supplier trust
Informal authority
Operational know-how
Decision power
Relationship-based value

Then show:

How LegacyOS measures it
Interviews
Contracts
Invoices
Supplier/customer lists
Org chart
Internal notes

Then final outputs:

Founder Dependency Score
Risk classification
Transfer plan
Governance recommendations

This screen should make the concept extremely understandable.

Screen 9 — Findings & Deal Implications

Purpose: connect analysis to PE decisions.

Create a table with:

Detected issue
Evidence
Risk level
Deal implication

Example rows:

Founder approves 82% of discounts → High → Pricing dependency → lower multiple
Top 2 clients managed personally by founder → High → retention risk → transition clause
No CFO / no monthly reporting owner → Medium/High → finance risk → hire CFO in 100 days
Supplier terms relationship-based → High → supply risk → formal contracts needed

Also add a valuation example card:

Initial valuation
Adjusted valuation
Avoided overpayment
Screen 10 — 100-Day Action Plan

This must be strong and step-by-step, not vague.

Design a highly visual timeline / roadmap.

Break into stages:

Days 1–15: Stabilize and map
confirm founder-controlled decisions
identify top 10 critical relationships
map key-person dependencies
create immediate risk register
Days 16–30: Protect revenue and supply
joint meetings with top 5 customers
joint meetings with top 5 suppliers
document pricing and discount logic
assign interim relationship owners
Days 31–45: Formalize decision rights
create approval matrix
define authority levels
formalize escalation paths
reduce founder-only approvals
Days 46–60: Build management autonomy
empower managers with decision rights
define ownership for sales, finance, ops, HR
identify leadership gaps
start recruiting critical missing roles (ex: CFO/controller, operations lead)
Days 61–75: Document critical know-how
write SOPs for purchasing, pricing, customer complaints, hiring, cash control
record founder know-how interviews
centralize process documents
Days 76–90: Install governance and reporting
launch monthly reporting cadence
define KPIs
install management meeting rhythm
track dependency reduction
Days 91–100: Review transferability
reassess dependency scores
validate customer/supplier transition
finalize post-founder operating model
prepare investment committee update

For each step show:

Owner
Priority
KPI
expected risk reduction

Make this screen highly visual and impressive.

Screen 11 — Exportable PE Memo

Purpose: show final output.

Design a PE-ready memo preview with sections:

Company summary
Key findings
Founder dependency score
Main risks
Deal implications
Valuation considerations
100-day plan
recommendation summary

Include buttons:

Export PDF
Share with IC
Download board pack
Prototype interactions

Add clickable prototype flows between main screens:

New Analysis → Upload Data
Upload Data → Company Info Form
Company Info Form → AI Processing
AI Processing → Executive Dashboard
Dashboard → Dependency Map / Analytics / Action Plan
Findings → Export Memo
Content tone

Use concise professional language:

clear
investor-focused
analytical
direct
not overly technical

Avoid generic AI buzzwords.

Demo content

Use a realistic demo company:

Tunisian founder-led SME
for example food distribution / packaging / export company
around 40–60 employees
positive EBITDA
founder manages top customers and supplier negotiations
weak second-line management
limited documented processes

Example company name:
NourPack Tunisia

Design priority

The prototype should make judges immediately understand:

the problem
the hidden founder-dependency risk
why PE needs this
what AI does
what the outputs are
how the platform creates decision value

The visualizations should be beautiful, clear, and investor-grade.

2) How LegacyOS works — easy explanation

LegacyOS helps a PE investor figure out whether a company is truly a transferable business or whether it only works because the founder personally holds everything together. The investor uploads company documents and interviews, then fills in key company information. LegacyOS uses AI to analyze who really controls customers, suppliers, pricing, operations, approvals, and know-how. It then turns that into a Founder Dependency Score, risk maps, visual analytics, and a practical 100-day action plan so the investor knows the risks before buying and how to reduce them after the deal.

3) What inputs to give, and in which format
A. Documents to upload

These can be real or demo/synthetic for the prototype.

Input	Best format
Founder interview transcript	DOCX, PDF, TXT
Audio interview	MP3, WAV
Management interview transcript	DOCX, PDF, TXT
Org chart	PDF, PNG, PPT, DOCX
Customer list	CSV, XLSX
Supplier list	CSV, XLSX
Financial statements	PDF, XLSX
Bank statements	PDF
Contracts	PDF, DOCX
Invoices	PDF
Internal policies / SOPs	PDF, DOCX
Meeting notes / emails	PDF, DOCX, TXT
B. Manual company information form

These should be entered in structured form fields:

company name
sector
location
revenue
EBITDA
EBITDA margin
number of employees
founder age
founder role
ownership type
family involvement
export share %
top 3 customers share %
top 5 suppliers share %
has CFO / no CFO
has board / no board
documented SOPs: yes / partial / no
succession plan: yes / partial / no
4) Improved 100-day action plan — step by step

This is the stronger logic behind that screen.

Goal

Reduce founder dependency and make the business more transferable.

Days 1–15 — Diagnose critical dependencies
list all founder-controlled decisions
identify top 10 customer and supplier relationships
identify roles with no backup
identify undocumented critical processes
build first risk register

Output: dependency map + priority list

Days 16–30 — Secure revenue and supplier continuity
conduct joint founder-manager meetings with top customers
conduct joint founder-manager meetings with top suppliers
assign provisional relationship owners
document current pricing / negotiation logic
flag relationships at highest churn risk

Output: relationship transition list

Days 31–45 — Formalize who decides what
create approval thresholds
define who approves discounts, purchases, hiring, payments
create authority matrix
reduce founder-only decision bottlenecks
create escalation rules

Output: decision-rights matrix

Days 46–60 — Strengthen management layer
identify missing leadership roles
assign accountable owners for sales, finance, operations, HR
start hiring or appointing missing key roles
give managers controlled decision authority
set manager accountability KPIs

Output: management ownership structure

Days 61–75 — Capture tacit know-how
record founder knowledge interviews
document purchasing rules
document customer handling procedures
document supply exception handling
document hiring and cash-control logic
centralize SOPs

Output: operating knowledge library

Days 76–90 — Install reporting and governance
launch monthly operating review
install KPI dashboard
set recurring management meetings
track transition progress
track dependency reduction by function
confirm role handovers are happening

Output: live governance rhythm

Days 91–100 — Reassess transferability
rerun dependency scoring
compare day 0 vs day 100
validate whether customer and supplier transitions are working
identify remaining founder bottlenecks
finalize next 6-month plan

Output: day-100 investment readiness review

5) Best visual direction for the prototype

To make it more engaging, the interface should combine:

institutional credibility (PE feel)
clear AI intelligence feel
strong charts
structured workflow
premium modern cards
interactive visual storytelling
Recommended visual emphasis
big KPI cards
strong left navigation
rich chart panels
founder-dependency node map
chord diagrams
dendrogram clustering
treemap risk weights
timeline roadmap
exportable memo preview