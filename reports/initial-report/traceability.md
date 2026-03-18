# Traceability table (by chapter) — key assertions → supporting references

Notes:

- **Type**: Fact = externally checkable claim; Estimate = internal modelling/assumption; Recommendation = normative.
- Where a statement in `report.md` is *speculative* (“believed”, “possible”), the supporting reference typically backs the **underlying capability / context**, not the specific speculation.
- For **internal estimates**, I explicitly tag them as such (so you can keep them in the report without pretending they are externally sourced).

---

## Chapter 1 — Energy

| Assertion in report.md | Type | Suggested supporting references |
|---|---:|---|
| Preliminary modelling suggests peak electrical demand ~**460 MVA** if fully electrified | Estimate (internal) | Mark explicitly as working-group modelling; keep under “Internal modelling assumptions” (L1) |
| Indicative capex **£2.4–£2.8bn** depending on architecture/delivery model | Estimate (internal) | Mark explicitly as working-group modelling; keep under “Internal modelling assumptions” (L2); for general context on high-voltage connection/reinforcement costs: IET transmission costing study (F—Transmission / reinforcement cost framing), National Grid connections cost framing (F—Transmission / reinforcement cost framing) |
| NESO may require connection to multiple GSPs for capacity/resilience | Fact + inference | NESO “What we do / Connections” (NESO overview: turn3search0); Institute for Government explainer on NESO role (turn3search2); Ofgem “NESO roles guidance” (turn3search6) |
| Co-locating data centres near primary energy connections creates opportunity for heat recovery into district heating | Fact (general) | UK gov press release on data-centre waste heat to homes (F—Data centre waste heat); IRENA data-centre waste heat note (E23); review literature on DC waste heat for DH (E22) |
| “Waste heat from data centres could be captured and distributed through district heating networks” | Fact (general) | UK gov press release (F—Data centre waste heat); IRENA note (E23); review paper (E22) |
| Large-scale underground thermal storage (“seasonal thermal batteries”) can strengthen heat networks | Fact (general) | Review on seasonal/large-scale thermal energy storage for district heating (F—Seasonal thermal storage) |
| Electrolysers can act as flexible loads absorbing surplus electricity (power→hydrogen) | Fact (general) | IEA electrolysers overview (F—Electrolysers); EU Parliament study on flexible electrolysis/system flexibility (F—Electrolysers); peer-reviewed paper on flexible demand via electrolysis (F—Electrolysers) |
| SMRs are a plausible “abundant electricity” future but treated as an option not a dependency | Fact (policy signal) + scenario | UK government announcement on SMR selection (F—SMR plausibility); specialist independent coverage (F—SMR plausibility) |
| “Haverhill and Newmarket do not appear to have significant natural geothermal hotspots” | Fact (needs careful phrasing) | Prefer to rephrase as “regional heat-flow/prospectivity appears modest compared with UK hotspots” and cite: BGS Heat Flow V1 dataset & guide (turn0search1, turn0search5); Busby “Geothermal Prospects in the UK” (turn0search16); UK Geothermal Platform (turn0search11). If you keep the specific towns, note it is a qualitative read from these datasets. |
| Next-generation geothermal / deeper drilling / closed-loop geothermal expands feasibility beyond hotspots | Fact (general) | IEA commentary on next-gen geothermal (G—IEA); BGS geothermal technologies overview (turn0search3); WRI overview (G—WRI); Eavor evidence/description (G—Eavor) |
| (If present) “Nearly all electricity used by data centres becomes heat” | Fact (general physics) | Peer-reviewed thermodynamics framing for DC heat conversion (F—data-centre heat article); plus general energy conservation principle (no citation usually required) |

---

## Chapter 2 — Building technology

| Assertion in report.md | Type | Suggested supporting references |
|---|---:|---|
| Engineered timber / mass timber can reduce embodied carbon compared with concrete/steel (contextual rationale) | Fact (general) | UK Government “Timber in construction roadmap 2025” (turn1search1); CCC/BioComposites Centre report “Wood in Construction in the UK” (turn1search14); peer-reviewed comparisons (turn1search9, turn1search3) |
| Offsite / modular / volumetric approaches can improve productivity and reduce time/waste (contextual rationale) | Fact (general) | UK government “Volumetric modular construction research” (turn1search12); McKinsey modular report (turn1search8); KPMG Smart Construction report (turn1search5) |
| Construction robotics (e.g., robotic bricklaying) can affect productivity/quality (contextual rationale) | Fact (general) | ScienceDirect review on robotics adoption & productivity (turn1search19); Cal Poly / SAM100 productivity context (turn1search15) |
| Routine LiDAR scanning + automated comparison between design and reality supports “as-built truth” and digital twin continuity | Fact (practice trend) | Digital twin/GeoBIM continuity drivers: buildingSMART+OGC roadmap (B11); QGIS/open data processing (B13); (optionally add reality capture construction QA references later if you want hard evidence) |

*(Most of Chapter 2 is recommendations and “challenge developers”; those don’t need strict citations unless you quote quantitative performance improvements.)*

---

## Chapter 3 — Data networking

| Assertion in report.md | Type | Suggested supporting references |
|---|---:|---|
| Communications infrastructure can be treated as long-lived civic infrastructure (like roads/water/power) | Recommendation / framing | Neutral host ducting planning guides and new-build guidance support the “design-in now” premise: Manchester digital infrastructure guide (D—Carrier-neutral ducting), Openreach new sites handbook (D—Openreach), Approved Document R (D—Part R) |
| “A major transnational fibre route linking London and Amsterdam passes close to the site” | Fact (route existence) | EXA Infrastructure / euNetworks route announcements and maps (D—London–Amsterdam / European backbone routes). If “passes close to the site” is not publicly documented, soften wording to “regional proximity in East of England” and cite route maps only. |
| “Believed to include a possible breakout site within or near the development boundary” | Speculative | Keep as speculative (“early investigations suggest…”) and avoid presenting as fact. Cite only the existence of nearby long-haul routes (D—London–Amsterdam routes) and treat breakout as a later Phase 2 due diligence item. |
| Cambridge City Council + University of Cambridge operate fibre ducting extending toward Linton near the boundary | Fact | Greater Cambridge Partnership / Light Blue Fibre / Cambridge JV sources (D—Cambridge ‘Dig Once’ / Light Blue Fibre) |
| Forest City could obtain dark fibre access toward Cambridge, London and Amsterdam | Inference | Cambridge ducting (D—Light Blue Fibre etc) + long-haul route existence (D—London–Amsterdam routes) |
| Modern optical transport supports multi-Tbps per fibre pair; city exchange fabrics could be Tbps-scale | Fact (order-of-magnitude) | DWDM capacity explainers (D—Optical capacity claims) and/or more formal sources (if you want, we can add ITU-T / vendor datasheets later) |
| Carrier-neutral ducting is a viable model for greenfield optionality | Fact (practice) | Royal Docks Digital Connectivity Study (D—Royal Docks); Manchester digital infrastructure design guide (D—Manchester guide); Openreach new sites handbook (D—Openreach) |
| UK policy pushes developers toward gigabit-ready physical infrastructure in new dwellings | Fact | Approved Document R Volume 1 (turn0search2 / D—Part R), GOV.UK Approved Document R page (turn0search12) |

---

## Chapter 4 — Digital twins and the Open Source City

| Assertion in report.md | Type | Suggested supporting references |
|---|---:|---|
| Digital twin should be treated as chain-of-custody for spatial truth (baseline → as-designed → as-built → as-operated) | Recommendation / best practice | Standards convergence supporting lifecycle interoperability: buildingSMART+OGC roadmap (B11), OGC GeoBIM explainer (B12) |
| Need for open, interoperable deliverables to avoid lock-in (even if a single platform is chosen) | Recommendation | Open standards references: IFC (B9/B10), CityGML (B5/B6), CityJSON (B7/B8), QGIS as portability test (B13) |
| GeoBIM handoffs (GIS ⇄ BIM) are a known hard problem; standards bodies are addressing it | Fact | buildingSMART+OGC roadmap (B11); OGC GeoBIM explainer (B12) |
| Open source city ambition can be anchored in publishable layers, open interfaces, reference implementations, and governance | Recommendation / framing | City model standards (B5–B8); QGIS as open tooling compliance test (B13) |
| Underground asset truth should be first-class dependency in digital twin | Fact (direction of travel) + recommendation | NUAR guidance and related UK policy context (C14–C17) |
| Using open tooling (QGIS) as a compliance test for deliverables | Fact (tool capability) | QGIS point cloud / point-cloud conversion docs (B13) |

---

## Chapter 5 — Federated Smart Home Technology

| Assertion in report.md | Type | Suggested supporting references |
|---|---:|---|
| Smart homes could participate in demand flexibility / peak reduction programmes | Fact (programme existence) + scenario | NESO Demand Flexibility Service (turn3search1 / turn3search3); Energy UK DFS explainer (turn2search10); Energy Saving Trust DFS explainer (turn3search7) |
| Smart meters enable near real-time usage visibility and access to some smart tariffs | Fact | Ofgem “Get a smart meter” benefits page (turn2search3); Ofgem smart meter rules press release (turn2search7); GOV.UK smart meter guide (turn2search15) |
| Interoperability standards (e.g., Matter) exist and aim to unify smart home device ecosystems | Fact | Connectivity Standards Alliance “Matter” overview (turn2search1); peer-reviewed overview of Matter standard (turn2search9) |
| Open automated demand response standards (e.g., OpenADR) exist for DR signalling | Fact | OpenADR primer / specs (turn2search0, turn2search12); LBNL OpenADR background (turn2search8) |
| The city’s role should be enabling interfaces + sensor readiness + privacy/security by design (not building the platform) | Recommendation | Supported by existence of open standards above (Matter/OpenADR), and by DFS programme showing value of flexible demand (turn3search3) |

---


