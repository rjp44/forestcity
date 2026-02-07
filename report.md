# Forest City 1 — Future Proof Technology Working Group  

## Phase 1 Report High Level Draft 

**Authors:** Rob Pickering (Technology Group Lead)  
**Status:** Draft v0.0.1 (structure + long-form introduction and executive summary)

---

## Executive summary (draft, forward-looking placeholder, intentionally provisional at this stage)

This report is the Phase 1 output of the Forest City 1 **Future Proof Technology Working Group**. It is intended to inform later phase masterplanning and the detailed business case by highlighting technology shifts that *may* materially affect the shape of the city, and by proposing low-regret “design-in now” provisions that *could* preserve optionality over decades.

Forest City will make a set of early choices—about civils, corridors, plant space, network ducting, access rights, standards and governance—that will be extremely difficult to unwind later. Those choices must remain robust not only under today’s technologies, but under likely shifts in energy systems, construction methods, connectivity, sensing, and digital governance. This report is therefore being drafted to focus on **technology shifts that affect the shape of the city**, not short-lived product decisions. It is intended to be usable by other working groups as a practical input to masterplanning and to the business case: identifying what we think *may* change, how those changes *could* impact planning assumptions, and what low-regret provisions *might* preserve optionality.

The recommendations and priorities summarised here are **very draft**. At this stage, the report structure and early chapter text are being used to frame the problem, identify candidate requirements, and surface likely “no-regret” provisions. The executive summary therefore describes what the report **will** aim to recommend, rather than claiming the chapters already provide complete substantiation. As the chapters are expanded, each recommendation will need evidence, cost/benefit framing, and explicit ownership and delivery implications.

The report is organised into **six chapters**, each reflecting a technology domain where early infrastructure and standards decisions are likely to compound over time.

### Chapter 1 — Energy

This chapter will aim to describe plausible energy technology futures affecting affordability, resilience, and environmental performance, with particular attention to electrification, storage, and heat. It will likely frame **heat as a first-class resource**—including waste heat harvesting and the potential role of data centre / edge compute heat recovery where economics and siting constraints make it viable. The chapter will aim to propose design-in now provisions that preserve future flexibility, such as corridor and plant space for heat networks and multi-scale storage readiness, while remaining agnostic about specific technologies and vendors.

### Chapter 2 — Building technology

This chapter will aim to challenge default construction assumptions by exploring emerging pathways for faster, lower-carbon, higher-quality building at city scale. It is expected to cover industrialised construction, engineered timber and hybrid approaches, advanced prefabrication, and increasing automation/robotics in construction and verification. The chapter will likely focus on enabling conditions Forest City can specify—standards, tolerances, logistics staging, scan-as-built expectations, and data handover requirements—rather than advocating any single construction method.

### Chapter 3 — Data networking

This chapter will aim to treat connectivity as long-lived civic infrastructure, with a strong bias toward **neutral fibre ducting** and “build it right first time” physical provisions that avoid repeated disruption. It will likely explore the co-dependence between fibre and wireless networks (5G/6G, Wi-Fi evolution, private networks) and propose “design-in now” requirements such as copious ducting, comms spaces in multi-unit buildings, risers, roof access and mounting rights, and street-furniture power/backhaul readiness. The chapter will aim to frame these provisions as an option-preserving foundation for multiple future service models.

### Chapter 4 — Digital twins and the Open Source City

This chapter will aim to set out how Forest City could treat a **digital twin** as the programme’s chain of custody for spatial truth, from baseline site surveying through design development, construction verification, and handover into operations. It will likely recommend that Forest City decide early whether to standardise on a single digital twin platform or a standards-led federation, while still mandating open, interoperable deliverables in either case. As a sub-theme, it will aim to make the “Open Source City” ambition practical by anchoring it in publishable layers, open interfaces, reference implementations where appropriate, and governance that balances openness with security and privacy. This chapter will likely emphasise data quality, provenance, GeoBIM handoffs, and the use of open tooling (e.g., QGIS) as a compliance test for portability.

### Chapter 5 — Federated smart home technology

This chapter will aim to explore tentative futures in which federated smart home ecosystems play a role in energy purchasing, demand management, and optional resident protection / health monitoring—without assuming the city will build such platforms itself. It will likely recommend that Forest City focus on enabling conditions: open city-level interfaces (particularly energy-related signals and events), sensor-readiness in the physical build (ducting, power availability, and retrofit paths), and procurement choices that favour interoperability and exportable data. The chapter will also aim to frame privacy, consent, and cybersecurity as design inputs rather than bolt-ons, recognising that trust is likely to determine adoption.

### Chapter 6 — Miscellaneous technology recommendations (placeholder items)

This chapter will aim to capture pragmatic “no-brainer” requirements that have surfaced during Phase 1 but are not yet analysed in depth. Its role will be to ensure these items remain visible for later phases consideration, and to prompt deeper analysis where needed. 

---

## Introduction

### Why this report exists

Forest City 1 is an unusually ambitious proposition: a new city built at scale and at speed, intended to remain permanently affordable while being genuinely beautiful and environmentally restorative.

The Future Proof Technology Working Group exists because the project’s built-environment decisions will be made in the near term, but the city must continue to work well for decades. If we optimise only for “today’s” technologies, we risk repeating familiar failures of long-lived infrastructure—where retrofitting becomes disruptive, expensive, or simply impossible at the scale a city demands.

Our Phase 1 task is therefore to identify a small set of technology shifts that it would be an oversight *not* to plan for as Forest City moves into later phases (detailed business case and masterplanning). The focus is on technology that changes assumptions, constraints, and required provisions, not on selecting products.

### The scope and intent

This report is not a catalogue of gadgets, nor a prescriptive manual telling domain specialists how to do their jobs. It is a future-facing risk-and-opportunity scan designed to help other working groups make robust decisions under uncertainty.

Specifically, we aim to:

- Make broad technology predictions that inform the way we build the city.
- Identify wildcard technologies that may plausibly emerge during the build-out and materially change cost, speed, labour availability, carbon performance, resilience, or quality of life.
- Translate those possibilities into practical “design-in now” requirements so future adoption is cheap and non-disruptive.
- Provide a transparent logic for prioritisation so that we can scrutinise, challenge, and improve it throughout then build process.

### How this group interacts with other specialisations

The Future Proof Technology Working Group is cross-domain. Our role is enabling and challenging. We support functional areas by:

- Highlightingdeveloping technology-driven constraints and opportunities that alter planning assumptions.
- Identifying “design-in now” provisions that protect optionality.
- Recommending early standardisation approaches to avoid lock-in and enable competitive ecosystems.

We do not attempt to substitute for energy engineers, architects, transport planners, water specialists, environmental scientists, policy leads, or finance modellers. Instead, we aim to give those experts a shared forward-looking set of assumptions and practical provisions so that masterplanning remains robust under multiple plausible futures.

### Principles used throughout this report

- Evidence-led: separate “known”, “likely”, and “speculative”.
- Time-to-impact: consider when a technology intersects the build/occupation timeline.
- Option value: prioritise things cheap to design-in now but expensive to retrofit later.
- Neutrality & interoperability: prefer open interfaces and standards over vendor lock-in.
- City-scale realism: focus on what can operate and be maintained at million-person scale.
- Resilience by default: design systems that fail safely and degrade gracefully.

### How to read this report

Chapters are organised into six technology domains most likely to influence masterplanning. Each chapter ends with:

- What to design-in now (physical + digital)
- What to standardise early (interfaces, data, governance)
- Wildcard watchlist (what to track, and triggers)
- Risks & mitigations (including second-order effects)

---

## Keeping it current

Technology is never static, this report will never be "finished". A process within Forest City will be developed to define:

- Update cadence (at Phase gates; then ongoing)
- Incorporating critique (including red-team challenge and external review)
- Where the living version is maintained and how changes are governed


## Methodology and selection criteria

This report combines structured horizon scanning with practical city-making constraints. Inputs include expert interviews, a literature scan, comparable project references, and adversarial review where available.

Each technology (or technology cluster) is assessed against a simple rubric:

- Potential impact on city form, capex, and opex
- Likelihood of maturation during the build-out
- Retrofit pain if ignored
- Standards readiness and interoperability potential
- Safety, resilience, and governance implications

---

# Chapter 1 — Energy

## What this chapter will cover

- Demand shape: electrification, peak loads, seasonal heat, EV fleets, commercial/industrial demand
- Storage: household → block → district → city scale
- Heat as a first-class resource: waste heat harvesting and low-temperature heat networks
- Role of data centre and edge-compute heat recovery (where it works, where it doesn’t)

## Outline thoughts we will report on

- Battery trajectories: LiFePO₄ maturity, sodium-ion economics, solid-state prospects, thermal storage
- Heat pumps + thermal storage + tariffs as a system
- Waste heat sources: refrigeration, industry, transit systems, and data centres/edge compute
- Design-in now: heat network corridors, plant space, metering/control interfaces, retrofit pathways
- Long-intercept storage breakthroughs, concrete batteries, closed loop deep geothermal, industrial-scale heat pumps, grid architecture shifts

# Chapter 2 — Building technology

## What this chapter will cover

- Faster + lower-carbon construction pathways
- Industrialised construction and mass customisation
- Automation/robotics and quality assurance across a long build-out programme

## Outline thoughts we will report on

- Engineered timber (CLT and hybrids): carbon, speed, supply chain, and code pathways
- Prefab at scale: volumetric vs panelised vs hybrid approaches; implications for logistics
- Robotic systems: autonomous earthworks, robotic placement/finishing, inspection drones
- Custom stone milling / CNC “craft at scale” and local supply chain opportunities
- Design-in now: component tolerances/standards, logistics staging, scan-as-built QA, digital twins
- Wildcards: low-carbon cement scaling, automated compliance, circular materials marketplaces

# Chapter 3 — Data networking

## What this chapter will cover

- Neutral fibre ducting as foundational, long-lived infrastructure
- Data demand drivers over decades (home/work/health/education/industry)
- Particular focus on "future of life/work" in an AI driven world of abundance, data infrastructure supporting emerging new life patterns.
- Synergies and co-dependence between fibre and wireless (5G/6G, Wi-Fi, private networks)

## Outline thoughts we will report on

- A “build the hard stuff right first time” mindset: avoid re-digging and retrofit disruption
- Neutral host ducting: enable competition, resilience, and future services
- Co-design fibre and wireless: densification needs more backhaul, more mounting, and more power
- Design-in now: copious ducting, comms rooms in multi-unit buildings, risers, rooftop access,
  safe antenna mounting rights, street-furniture power/backhaul points
- Wildcards: 6G capabilities (including sensing/positioning), satellite back-up, dense edge compute

# Chapter 4 — Digital twins and the Open Source City

## What this chapter will cover

This chapter considers a range of plausible futures in which **digital twin** practices become central to how large developments are designed, delivered, verified, and operated, and where Forest City pursues “open source city” principles through **open data formats, open interfaces, and auditable foundations**.

The core question is not whether Forest City should build a single “master digital twin platform”, but what **minimum standards, capture practices, and interoperability requirements** Forest City should set so that:

1) we can quickly generate reliable *baseline* digital twins of the development site,  
2) we can maintain living digital twins as designs develop and construction progresses,  
3) data remains usable across multiple disciplines, contractors, and tools without being trapped in proprietary formats, and  
4) openness (where safe) becomes a compounding civic asset rather than a one-off publishing exercise.

The chapter should treat the digital twin as a **chain of custody for spatial truth**: from early feasibility to masterplanning, from design models to construction verification, and from “as-designed” to “as-built” to “as-operated”. At city scale, the failure modes are predictable: inconsistent coordinate systems, variable survey quality, incompatible file formats, and brittle handoffs between GIS and BIM. Our objective is to challenge developers to use best-available emerging technology and to define standards throughout the build process that demand **open data interoperability** and **maintained, high-quality digital twins**.

A key theme is that these technologies cross over with standard developer tool choices and incumbent building workflows. Forest City is unlikely to dictate every vendor choice, but it can—and will—challenge developers to adopt best practice by specifying outcomes and standards: **minimum capture quality, open deliverables, and a maintained digital twin through the build process**.

## Outline thoughts we will report on

- **Digital twin baseline: “ground truth” as early infrastructure**  
  In some plausible futures, the speed and reliability with which the project can establish a baseline digital twin becomes a major determinant of schedule and risk. A high-quality baseline can reduce surprises, shorten design cycles, and improve coordination between disciplines. This includes terrain, vegetation, drainage, constraints, and a defensible model of existing assets—particularly underground unknowns.

- **Digital twin through design: “as-designed” models that remain portable**  
  As designs develop, developers will use a mix of BIM tools and workflows. Forest City’s interest is that outputs remain interoperable and consistently referenced. This is where “GeoBIM” matters: bridging building-scale BIM exchange with city/territory-scale geospatial models so that the city’s twin does not fracture into parallel truths.

- **Digital twin in construction: “as-built truth” that is measurable and updateable**  
  A likely direction of travel is that construction verification increasingly relies on routine scanning and evidence capture, not just manual inspection and drawings. The digital twin becomes a maintained record of what was actually built, with repeatable update cycles, quality metrics, and clear responsibility for handover.

- **A practical focus: quality, formats, and handoffs (GIS ⇄ BIM ⇄ reality capture)**  
  At scale, the difficult part is rarely “capturing some data”; it is maintaining quality and ensuring repeatable exchange across organisations and tools. The chapter should highlight:
  - coordinate reference systems and control networks as non-negotiable foundations  
  - survey accuracy classes and metadata requirements (how good is “good”?)  
  - versioning and provenance (who captured what, when, how, with what uncertainty)  
  - exchange formats that avoid lock-in and enable long-lived reuse  

### Concrete capture and data themes (keep and expand)

- **LiDAR (airborne + mobile + handheld): terrain mapping, vegetation, and as-built verification**  
  LiDAR is likely to remain a primary method for fast capture of topography, structure, and construction progress. The practical issue is less “can we collect LiDAR?” and more “how do we ensure consistent referencing, metadata, and quality so the data is re-usable across the programme?” The chapter should emphasise that point clouds must be delivered with clear provenance and defined accuracy, and must integrate cleanly into the project’s digital twin.

- **Mobile/handheld scanning and emerging “democratised capture”**  
  Some futures may see cheap scanning used routinely for progress capture and internal verification. This is promising, but also a quality risk if low-control capture is treated as equivalent to high-integrity baseline surveys. The chapter should separate “high-integrity truth capture” from “low-friction situational capture”, and define where each is acceptable.

- **Ground penetrating radar (GPR): utilities planning, archaeology/geotech risk reduction**  
  GPR can reduce uncertainty about what is underground, but only if it is captured, referenced, and stored in a way that can be re-used—especially when combined with known asset records and subsequent as-built updates.

- **Open mapping and GIS: what can be open, what must be protected**  
  There is a plausible future where open mapping accelerates planning, innovation, and accountability—yet it must be balanced against security and privacy risks. Regardless of what is public, the internal programme twin should treat underground asset truth and constraints mapping as critical dependencies.

- **Open tooling as an enabler (e.g., QGIS)**  
  We should explicitly consider open-source tooling such as QGIS as part of an interoperability strategy—not necessarily as the only tool, but as a practical test of portability. Mandating that key deliverables can be inspected and validated in open tooling is a concrete way to reduce lock-in risk and keep the twin maintainable for decades.

## “Open Source City”

Forest City’s “open source city” ambition can be made practical (and non-hype) by anchoring it in the digital twin and its surrounding ecosystem.

- **Open data by default where safe**  
  The city can publish carefully curated layers (and schemas) that enable a broad ecosystem—researchers, civic technologists, suppliers, startups, residents—without exposing sensitive details. This includes planning artefacts, environmental baselines, and high-level infrastructure descriptions, with strong security review and redaction norms.

- **Standard machine-readable formats and versioning**  
  The value of openness compounds when data is reliably structured and versioned. A core principle should be that anything released publicly (or shared programme-wide) should be reproducible, documented, and maintained as the city evolves—rather than posted once and forgotten.

- **Open interfaces and reference implementations**  
  Where Forest City defines city-level interfaces (e.g., data APIs, event streams, access patterns), publishing open specs—and, where sensible, reference implementations—reduces lock-in and increases auditability. This supports competition and long-term maintainability.

- **Governance: openness without naivety**  
  “Open” should never mean “everything is public” or “security is optional”. The chapter should explicitly cover licensing, contribution models, responsible disclosure, and the boundary between open civic layers and protected operational/security layers.

## How Forest City should respond

It remains an open question whether Forest City should commission and operate a single “end-to-end” digital twin platform as part of the project, or whether the city should rely on a federation of widely used third-party tools and platforms connected by standards. A unified platform could offer strong benefits (consistency, simplified governance, reduced friction in handovers), but it also carries risks (lock-in, procurement complexity, long-term operational burden, and the challenge of keeping pace with a fast-moving vendor landscape).

Regardless of which delivery model ultimately prevails, the later phases decision is the same: **Forest City should make the digital twin a single source of spatial truth**, and ensure that surveying, design development, construction verification, and handover data can all be ingested into a coherent, maintained twin without bespoke rework.

Forest City should therefore consider the following minimum responses:

1. **Decide early whether to standardise on a single digital twin platform, or a standards-led federation**  
   Forest City should explicitly choose an approach rather than allowing multiple incompatible “partial twins” to emerge by default. Two viable models are:
   - **Single platform standardisation:** choose a primary digital twin platform and require that all suppliers deliver in forms that can be ingested and maintained within it.  
   - **Federation via open standards:** allow multiple platforms, but require a rigorous set of open deliverables, shared referencing, and a defined “authoritative truth layer” that remains consistent across systems.  
   The common failure mode at city scale is not lack of tools, but fragmented, inconsistent models. A deliberate choice early reduces that risk.

2. **Mandate open, interoperable deliverables at each lifecycle stage (even if a single platform is chosen)**  
   Even if Forest City standardises on one platform, it should still require exportable open deliverables to avoid long-term dependency and to keep data reusable. In practice, this means requiring baseline surveys, design models, and as-built captures to be delivered in open or widely interoperable forms as a minimum “public truth layer”.

3. **Define “digital twin quality” as measurable requirements**  
   “We have a digital twin” should be testable. Forest City should define minimum expectations for:
   - coordinate systems and control networks  
   - accuracy classes and error bounds  
   - metadata completeness (capture method, time, calibration, uncertainty)  
   - validation and QA procedures  
   This is how Forest City challenges developers constructively: by requiring outcomes that can be audited.

4. **Require a maintained digital twin through construction, not a one-off model**  
   Forest City should set expectations that the twin is updated at defined milestones (and potentially on a cadence during heavy construction). The deliverable should be a living record supporting coordination, reducing disputes, and improving handover into operations.

5. **Insist on robust GIS ⇄ BIM handoffs (“GeoBIM”)**  
   If Forest City does not plan for GIS/BIM integration early, the project risks parallel universes: one city-scale model and one building-scale model that do not align. Forest City should therefore require consistent referencing, clear transformations, and unambiguous ownership of the “authoritative” layers of truth.

6. **Use open-source tooling as a compliance test, not an ideology**  
   A practical enforcement mechanism is to require that key deliverables can be loaded, inspected, and processed in open tooling (e.g., QGIS for GIS layers and point clouds). This is a check that the programme is not trapped in a single proprietary ecosystem—even if one primary platform is chosen.

7. **Treat underground asset truth as a first-class dependency**  
   Given the safety and cost impacts of underground unknowns, Forest City should explicitly incorporate underground asset data quality and integration as part of the twin requirements, and require that underground data is maintained and updated throughout construction as “as-built truth”.

8. **Make “open source city” tangible via publishable layers, specs, and governance**  
   Forest City should define which layers should be publishable (and when), the standard schemas and versioning expectations, and the governance boundary between open civic data and protected operational/security data. This ensures openness becomes a maintained asset rather than an aspirational label.

**Summary recommendation:** Forest City should treat the digital twin (and its open ecosystem) as a foundational programme asset and decide early whether to standardise on a single platform or a standards-led federation. In both cases, it should require open deliverables, measurable quality, and a maintained twin through the full build lifecycle—so the city avoids fragmented partial models and retains long-term optionality.

## Wildcards to track

- Wider adoption of routine reality capture as a contractual norm (scan-to-verify, not just draw-to-build)
- Increasing convergence of GeoBIM workflows and standards (reducing bespoke GIS/BIM integration)
- Low-cost scanning improvements (useful for progress capture, but with quality pitfalls if misapplied)
- Component-level semantic models that enable richer “as-built” truth (beyond geometry)
- Evolving norms or regulation about public sharing of city-scale twin data (balancing openness and security)

# Chapter 5 — Federated Smart Home Technology

## What this chapter will cover

This chapter explores potential futures in which federated, open smart home technology plays a role in energy coordination, security and resident well-being. We consider scenarios where homes and buildings coordinate in ways that *could* support improved energy efficiency, demand management, and resident protection. While elements of these systems may mature over the development cycle, the direction, pace, and social acceptability of adoption are uncertain. The emphasis here is therefore on *optionality*: what Forest City should do now to avoid blocking beneficial futures, without assuming any single technical outcome.

## Outline thoughts we will report on

- **Energy purchasing and demand management**  
  In some plausible futures, federated smart home systems could allow residents (or resident cooperatives) to participate in collective energy purchasing, coordinated load shifting, or flexible demand response. These approaches might reduce peak electricity usage, lower costs, and reduce strain on local infrastructure. However, their viability will depend on evolving market structures, regulation, device interoperability, and resident trust—any of which could develop in different directions.

- **Smart home monitoring and resident protection**  
  Some futures may see optional, privacy-preserving in-home sensing support improved safety and wellbeing—ranging from environmental monitoring (air quality, humidity, temperature) to safety detection (falls, smoke, unusual inactivity) and limited health monitoring (patterns that may indicate risk). Adoption is likely to be uneven and culturally sensitive. The chapter should therefore frame these capabilities as possibilities that may emerge, alongside risks such as overreach, surveillance concerns, misuse, and cybersecurity exposure.

- **Integration with wider city systems**  
  It is possible that future city systems—particularly energy systems—will increasingly expose interfaces for demand response, dynamic tariffs, and resilience measures (e.g., islanding modes, local constraints). Federated smart home systems could integrate with these city interfaces, but only if designed around open standards and clear governance. This section should explore what “good” integration might look like, without committing to a specific platform.

## How Forest City should respond

Forest City is unlikely to build federated smart home platforms itself. The key decision is therefore what minimum enabling conditions the city *should* create so that residents, landlords, innovators, and service providers can adopt mature systems later without costly or disruptive retrofits. This can be framed as a set of practical recommendations:

1. **Provide clean, open interface points at the city layer**  
   City-managed systems (especially energy-related systems) should expose well-defined, standards-based interfaces that future smart home/federation platforms *could* connect to—covering areas such as tariff signals, demand response events, local capacity constraints, and (where appropriate) aggregated reporting. These interfaces should be designed to avoid lock-in, minimise data collection, and support multiple competing ecosystems.

2. **Design in physical “sensor readiness” as a low-regret provision**  
   The built environment should make future sensing and device deployment straightforward. This *could* be as simple as:  
   - providing ducting/conduit routes that reach key rooms and likely sensor locations  
   - ensuring convenient power availability for low-voltage devices (or clear upgrade paths)  
   - making maintenance/retrofit access non-disruptive (service voids, accessible risers, sensible mounting options)  
   - documenting “as-built” routes so that future installations do not require exploratory work  
   The intent is not to overfit to today’s devices, but to make unknown future devices easy to deploy safely and neatly.

3. **Prefer interoperability-friendly choices in any baseline provision**  
   Where Forest City or its delivery partners provide baseline smart-home-adjacent infrastructure (e.g., metering, building management in multi-unit buildings, shared sensors), selection criteria should explicitly include interoperability, exportable data, and the ability to integrate with multiple third-party systems. This should reduce the risk that early choices create a long-term constraint.

4. **Support emerging standards and open ecosystems without owning them**  
   Forest City should treat certain standards and open-source reference implementations as strategic enablers—tracking them, engaging early, and using procurement and partnership approaches that make adoption easier. This might include relationships with suppliers who demonstrate credible standards alignment, participation in relevant industry groups, and a bias toward widely used open formats and protocols.

5. **Make governance, privacy, and security “design inputs”, not afterthoughts**  
   Because trust is likely to determine whether federated smart home systems are adopted at all, Forest City should treat privacy-by-design patterns, consent models, and cybersecurity expectations as core requirements for any city interface and any baseline provision. The goal is to enable beneficial futures while avoiding a brittle or surveillance-prone outcome.

**Summary recommendation:** Forest City should not attempt to predict or build “the” federated smart home system. Instead, it should design-in optionality through open city-level interfaces, sensor-ready physical infrastructure, and interoperability-friendly procurement—while actively supporting emerging open standards so that future adoption can be low-friction, competitive, and trusted.

# Chapter 6 — Miscellaneous technology recommendations (placeholder items)

## Purpose of this chapter

During Phase 1 discussions, a number of additional “no-brainer” technology requirements tend to surface that do not neatly belong in a single domain chapter, or which we have not analysed in sufficient depth to justify a full treatment yet. This chapter is intentionally a holding area: a set of pragmatic recommendations and placeholders that appear low-regret, are cheap to design-in early, and would be painful to retrofit later.

The intention is not to claim these are fully proven or optimised. Instead, it is to ensure they remain visible as later phase plans and specifications are developed, and to prompt deeper analysis where needed. These items should be revisited and either promoted into fuller chapters, adopted as baseline requirements, or explicitly rejected with rationale.

## Planning for near term energy conservation and medium/long term energy abundance

Much of the near-term UK commercial environment encourages energy minimisation: electricity is expensive, grid upgrades are constrained, and many sensible design choices are about reducing demand and shifting load. That remains a rational default.

However, one plausible longer-term future is the opposite: a world of abundant electricity, driven by a combination of new nuclear (including SMR programmes), grid-scale renewables, storage, and other developments that materially reduce marginal cost and increase supply. In such a world, the binding constraint for homes and businesses may move from “energy scarcity” to “how do we take advantage of cheap, plentiful power safely and flexibly?”

If that future materialises, households and local businesses could adopt technologies with far higher electrical demand than current norms—examples might include robotics (potentially including humanoid robots), more intensive local automation, high-capacity charging, and substantially increased local or regional compute footprints. Even if these outcomes arrive unevenly, the retrofit cost of upgrading end-consumer electrical supply and local distribution capacity could be extremely high relative to the modest incremental cost of designing-in headroom during initial construction.

### End-consumer supply: three-phase, high-current service provision (design-in now)

Forest City should strongly recommend that every end-consumer premise is provided with **three-phase supply capability** and service equipment/tails sized to **at least 100 amps**, even if initial loads do not require it.

- This recommendation should be framed as optionality rather than immediate necessity.
- The incremental physical cost of installing two additional conductors and appropriately rated service heads during initial construction is expected to be small compared to the cost and disruption of retrofitting later.
- A three-phase baseline also improves flexibility for future electrification and load-balancing, even in an energy-constrained world.

**Important caveat:** The local Distribution Network Operator (DNO) will ultimately decide network design and service criteria using their standard commercial and engineering processes. The recommendation here is not to override DNO authority, but to ensure Forest City’s masterplan, building standards, and developer requirements do not inadvertently lock premises into a low-capacity single-phase future that becomes a long-term constraint.

### Local distribution: over-provisioning HV capacity or building for expansion

Forest City should recommend that the physical distribution build is planned around easy expansion, either via:

- Over-provisioned **11 kV and 33 kV** capability (where justified and feasible), and/or
- **Ducting-first construction** that makes additional conductors simple to add later without re-digging.

In practical terms, the guiding principle should be:

- Prefer ducting used exclusively (or as the dominant approach) for distribution routes where future growth is plausible.
- Target low initial utilisation (e.g., designing routes so that early deployments run at ~10–30% of eventual capacity), leaving space for additional conductors and upgrades with minimal disruption.
- Ensure route planning, easements, and access rights anticipate future cable additions, jointing access, and substation expansion.


---

## Appendices

- C. Glossary
- D. Sources / further reading
