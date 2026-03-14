# Forest City 1 — Future Proof Technology Working Group  

## Phase 1 Report High Level Draft 

**Authors:** Rob Pickering (rob@pickering.org)

**Status:** Draft v0.0.1 (structure + long-form introduction and executive summary, variable depth of chapter contents)

---

## Executive summary

This report is the Phase 1 output of the Forest City 1 **Future Proof Technology Working Group**. It is intended to inform later phase masterplanning and the detailed business case by highlighting technology shifts that **may** materially affect the shape of the city, and by proposing low-regret "design-in now" provisions that **could** preserve optionality over decades.

Forest City will make a set of early choices—about civils, corridors, plant space, network ducting, access rights, standards and governance—that will be extremely difficult to unwind later. Those choices must remain robust not only under today's technologies, but under likely shifts in energy systems, construction methods, connectivity, sensing, and digital governance. This report is therefore being drafted to focus on **technology shifts that affect the shape of the city**, not short-lived product decisions. It is intended to be usable by other working groups as a practical input to masterplanning and to the business case: identifying what we think **may** change, how those changes **could** impact planning assumptions, and what low-regret provisions **might** preserve optionality.

The recommendations and priorities summarised here are **very draft**. At this stage, the report structure and early chapter text are being used to frame the problem, identify candidate requirements, and surface likely "no-regret" provisions. The executive summary therefore describes what the report **will** aim to recommend, rather than claiming the chapters already provide complete substantiation. As the chapters are expanded, each recommendation will need evidence, cost/benefit framing, and explicit ownership and delivery implications.

The report is organised into **six chapters**, each reflecting a technology domain where early infrastructure and standards decisions are likely to compound over time.

### Chapter 1 — Energy

This chapter examines the scale and architecture of the energy systems required to support a city of one million residents. It considers the implications of large-scale electrification, including preliminary modelling suggesting peak demand on the order of **~460 MVA**, and explores the constraints of relying on conventional grid connections, including limited nearby Grid Supply Point capacity and the potential need for multiple connections to the national transmission system.

The chapter then explores technologies that could materially reshape those assumptions, including distributed battery storage capable of smoothing peak demand, large-scale electrolysis producing hydrogen as a flexible energy sink, and potential local generation such as **Small Modular Reactors (SMRs) or other zero-carbon generation technologies**. It also treats **heat as a first-class energy resource**, examining opportunities for district heating based on data-centre heat recovery, large-scale underground thermal storage, and geothermal energy enabled by modern deep-drilling techniques.


### Chapter 2 — Building technology

This chapter will aim to challenge default construction assumptions by exploring emerging pathways for faster, lower-carbon, higher-quality building at city scale. It is expected to cover industrialised construction, engineered timber and hybrid approaches, advanced prefabrication, and increasing automation and robotics in construction and verification.

The chapter will likely focus on enabling conditions Forest City can specify—standards, tolerances, logistics staging, scan-as-built expectations, and data handover requirements—rather than advocating any single construction method.

### Chapter 3 — Data networking

This chapter will aim to treat connectivity as long-lived civic infrastructure, with a strong bias toward **neutral fibre ducting** and "build it right first time" physical provisions that avoid repeated disruption. It will likely explore the co-dependence between fibre and wireless networks (5G/6G, Wi-Fi evolution, private networks) and propose "design-in now" requirements such as copious ducting, comms spaces in multi-unit buildings, risers, roof access and mounting rights, and street-furniture power/backhaul readiness. The chapter will aim to frame these provisions as an option-preserving foundation for multiple future service models.

### Chapter 4 — Digital twins and the Open Source City

This chapter will aim to set out how Forest City could treat a **digital twin** as the programme's chain of custody for spatial truth, from baseline site surveying through design development, construction verification, and handover into operations. It will likely recommend that Forest City decide early whether to standardise on a single digital twin platform or a standards-led federation, while still mandating open, interoperable deliverables in either case. As a sub-theme, it will aim to make the "Open Source City" ambition practical by anchoring it in publishable layers, open interfaces, reference implementations where appropriate, and governance that balances openness with security and privacy. This chapter will likely emphasise data quality, provenance, GeoBIM handoffs, and the use of open tooling (e.g., QGIS) as a compliance test for portability.

### Chapter 5 — Federated smart home technology

This chapter will aim to explore tentative futures in which federated smart home ecosystems play a role in energy purchasing, demand management, and optional resident protection / health monitoring—without assuming the city will build such platforms itself. It will likely recommend that Forest City focus on enabling conditions: open city-level interfaces (particularly energy-related signals and events), sensor-readiness in the physical build (ducting, power availability, and retrofit paths), and procurement choices that favour interoperability and exportable data. The chapter will also aim to frame privacy, consent, and cybersecurity as design inputs rather than bolt-ons, recognising that trust is likely to determine adoption.

### Chapter 6 — Miscellaneous technology recommendations (placeholder items)

This chapter will aim to capture pragmatic "no-brainer" requirements that have surfaced during Phase 1 but are not yet analysed in depth. Its role will be to ensure these items remain visible for later phases' consideration, and to prompt deeper analysis where needed. 

---

## Introduction

### Why this report exists

Forest City 1 is an unusually ambitious proposition: a new city built at scale and at speed, intended to remain permanently affordable while being genuinely beautiful and environmentally restorative.

The Future Proof Technology Working Group exists because the project's built-environment decisions will be made in the near term, but the city must continue to work well for decades. If we optimise only for "today's" technologies, we risk repeating familiar failures of long-lived infrastructure—where retrofitting becomes disruptive, expensive, or simply impossible at the scale a city demands.

Our Phase 1 task is therefore to identify a small set of technology shifts that it would be an oversight **not** to plan for as Forest City moves into later phases (detailed business case and masterplanning). The focus is on technology that changes assumptions, constraints, and required provisions, not on selecting products.

### The scope and intent

This report is not a catalogue of gadgets, nor a prescriptive manual telling domain specialists how to do their jobs. It is a future-facing risk-and-opportunity scan designed to help other working groups make robust decisions under uncertainty.

Specifically, we aim to:

- Make broad technology predictions that inform the way we build the city.
- Identify wildcard technologies that may plausibly emerge during the build-out and materially change cost, speed, labour availability, carbon performance, resilience, or quality of life.
- Translate those possibilities into practical "design-in now" requirements so future adoption is cheap and non-disruptive.
- Provide a transparent logic for prioritisation so that we can scrutinise, challenge, and improve it throughout the build process.

### How this group interacts with other specialisations

The Future Proof Technology Working Group is cross-domain. Our role is enabling and challenging. We support functional areas by:

- Highlighting developing technology-driven constraints and opportunities that alter planning assumptions.
- Identifying "design-in now" provisions that protect optionality.
- Recommending early standardisation approaches to avoid lock-in and enable competitive ecosystems.

We do not attempt to substitute for energy engineers, architects, transport planners, water specialists, environmental scientists, policy leads, or finance modellers. Instead, we aim to give those experts a shared forward-looking set of assumptions and practical provisions so that masterplanning remains robust under multiple plausible futures.

### Principles used throughout this report

- Evidence-led: separate "known", "likely", and "speculative".
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

## Electricity supply architecture

A city of one million residents will require electricity infrastructure at a scale rarely seen in recent UK developments. Preliminary modelling undertaken by the working group suggests a peak electrical demand on the order of **~460 MVA** if the city is fully electrified across heating, transport and buildings. This may prove conservative once the electrical demands of the transport system and any heavy commercial users (e.g. data centres) are fully modelled.

This figure should be treated as a **ballpark peak demand requirement**, but it provides a useful basis for evaluating the scale of infrastructure that may ultimately be required.

Two broad electricity supply architectures are currently being considered.

### Grid-supplied electricity model

In the conventional model, the city would rely primarily on the national transmission system for electricity supply.

Electricity would be delivered via **Grid Supply Points (GSPs)** — the substations where electricity from the national transmission network is transferred to regional distribution networks.

Initial investigations suggest that the **nearest primary GSP at Burwell** is already close to full capacity. As a result, it is unlikely that a development on the scale of Forest City could rely solely on this infrastructure.

In practice, the **National Energy System Operator (NESO)** may require that the city connects to **multiple GSPs**, both to provide sufficient capacity and to ensure system resilience. This could imply the construction of **new high-capacity transmission connections and potentially a second GSP-scale connection** serving the development.

Although a number of solar farms exist in the surrounding region, these installations cannot materially reduce the size of grid infrastructure that must be constructed. Transmission systems must be sized assuming **non-production from intermittent sources**, meaning the city must be capable of importing its full peak demand from the grid when renewable generation is unavailable.

Using conventional planning assumptions, providing electricity infrastructure at this scale could involve **capital expenditure in the region of £2.4 billion to £2.8 billion**, depending on the final connection architecture and delivery model.

### Load smoothing and distributed storage

One important factor that could significantly influence the final infrastructure requirement is the **ability to smooth peak demand**.

The headline **~460 MVA peak demand** reflects a conventional planning assumption in which buildings draw power from the grid in real time with limited buffering, storage or local generation capacity. However, emerging storage technologies and local generation (primarily solar) make it increasingly possible to shift and smooth electrical demand over time.

Modern **LiFePO₄ (lithium iron phosphate) battery systems** are sufficiently safe and cost-effective to be deployed at domestic scale. A battery pack roughly the size of a household refrigerator can store enough energy to supply a typical property for at least **24 hours of normal operation**, depending on system efficiency and heating configuration and whether other primary heat sources besides electricity are used (see below)

If large numbers of properties within the city were equipped with such storage, with or without local micro generation, and if these systems were orchestrated collectively, the city could effectively operate a **distributed battery fleet**.

Such an approach could allow:

- local buffering of electricity demand
- smoothing of short-term peaks
- coordinated charging during low-demand periods
- reduced peak import requirements from the national grid

If these technologies are deployed at scale, the **effective peak demand seen by the grid could be substantially lower than the raw demand of the city itself**. In that scenario the grid connections and upstream infrastructure required to support the city may be **materially smaller — and therefore less costly — than conventional planning assumptions suggest**.

### Energy-abundance model: SMR or other zero-carbon generation

An alternative architecture would treat electricity not as a constrained resource but as a **strategic abundance**.

In this model the city could host significant on-site generation capacity, potentially including **Small Modular Reactors (SMRs) or other forms of large-scale zero-carbon generation**.

Under this scenario the city could produce a substantial proportion of its electricity locally rather than relying primarily on grid imports.

The implications of this approach could include:

- large-scale electrification of heating and transport
- high-capacity computing and digital infrastructure
- hydrogen production and industrial processes
- long-term energy cost stability

If periods of electricity abundance arise, the city could also support **large-scale electrolysis facilities to produce hydrogen**. Electrolysers can act as flexible electrical loads, absorbing surplus electricity and converting it into storable fuel for transport, industry or long-term energy storage.

However, the SMR-based architecture is currently treated as a **strategic option rather than a dependency**. The development and its core infrastructure should not rely on the availability of SMR technology, given the regulatory, financing and programme uncertainties involved.

### Data centres, heat recovery and district heating

Large electricity connections also create opportunities to co-locate **high-capacity data centre infrastructure** near the primary grid connections serving the city.

Data centres convert almost all of the electricity they consume into heat. Rather than treating this heat as waste, the city could treat it as a **valuable thermal resource**.

Waste heat from data centres could be captured and distributed through **district heating networks**, significantly reducing the energy required to heat buildings across the city.

This approach could be strengthened further through the use of **large-scale underground thermal storage**, sometimes referred to as **seasonal thermal batteries**. These systems allow excess heat produced during periods of high data centre activity to be stored underground and recovered later when heating demand increases.

If implemented at sufficient scale, this combination of **data centre heat recovery, district heating and thermal storage** could materially reduce the amount of electricity required to heat the city.

### Geothermal energy

Alongside heat recovery, the city may also be able to draw on **geothermal energy systems**.

Conventional UK policy has tended to prioritise geothermal development only in locations where natural geothermal “hot spots” exist. However, the area between **Haverhill and Newmarket does not appear to have significant natural geothermal hotspots**, which might traditionally make geothermal development less likely.

This assumption may now need to be reconsidered. The UK possesses extensive deep drilling expertise developed through decades of **North Sea oil and gas exploration**, and advances in hard-rock and deep drilling technologies mean geothermal systems may now be technically feasible in locations that lack natural geothermal reservoirs.

Many modern geothermal designs use **closed-loop systems**, in which fluids circulate through sealed underground pipe networks rather than relying on natural aquifers. These systems significantly reduce environmental risks such as groundwater contamination and can operate without requiring naturally occurring geothermal water reservoirs.

Rough conceptual estimates suggest that **around twenty installations of this scale could theoretically supply the domestic energy needs of a city of one million residents**.

When combined with **district heating networks, underground thermal storage and heat recovery from data centres**, geothermal energy could dramatically reduce the amount of electricity required for heating across the city.

### Early infrastructure provisions

Regardless of the final electricity generation strategy, several provisions appear to be **low-regret design choices**:

- reserving land for **large primary substations**
- safeguarding corridors for **high-voltage transmission routes**
- reserving land near grid connections for **energy-intensive infrastructure such as data centres**
- enabling future expansion of grid connections and local generation

These provisions are relatively inexpensive to include during early planning but extremely difficult to retrofit once the city is built.

The technologies discussed in this chapter should not be viewed as independent options but as components of a **coherent energy system**. Grid imports, local generation, distributed batteries, hydrogen electrolysis, district heating, thermal storage, geothermal energy and data-centre heat recovery can reinforce one another when designed together. Forest City therefore has an opportunity to treat energy infrastructure as an integrated system rather than a collection of separate utilities, enabling greater resilience, lower long-term costs and increased flexibility as technologies evolve.


# Chapter 2 — Building technology

## Construction at city scale

Forest City represents an unusually large and sustained construction programme. Delivering housing, civic buildings and infrastructure for a city of one million residents will require construction methods capable of operating **reliably, quickly and repeatedly over decades**.

Traditional UK construction approaches often struggle with cost predictability, labour availability, build speed and carbon intensity. As a result, it is plausible that the technologies and methods used to construct Forest City may differ significantly from those used in recent UK developments.

This chapter therefore examines emerging building technologies and construction approaches that could materially affect how the city is delivered, with particular attention to **industrialised construction, engineered timber systems, automation and robotics, and digital quality assurance**.

The objective is not to prescribe a single construction method, but to identify the **enabling conditions Forest City should design into the development** so that multiple construction approaches remain viable.

## Industrialised construction

One of the most significant shifts in construction globally is the gradual move toward **industrialised construction**.

Instead of constructing most building components on site, industrialised approaches manufacture large parts of buildings in controlled factory environments before transporting them to site for assembly. These approaches include:

- volumetric modular construction  
- panelised building systems  
- hybrid prefabricated structures combining factory and on-site work  

Industrialised construction can offer several advantages at the scale required for Forest City:

- faster build times  
- improved quality control  
- reduced waste  
- more predictable costs  
- reduced reliance on scarce on-site labour  

However, such approaches impose different logistical and design constraints. Transport limits, crane capacity, staging areas and supply chains become critical elements of the construction system.

For a development of Forest City's scale, the ability to support **high-throughput, factory-supported construction methods** could significantly accelerate delivery while improving build quality.

## Engineered timber and hybrid structures

Another technology likely to influence future construction is the increasing use of **engineered timber systems**, particularly cross-laminated timber (CLT) and related products.

Engineered timber offers several potential advantages:

- significantly reduced embodied carbon compared with conventional concrete structures  
- rapid assembly using prefabricated structural elements  
- high structural strength-to-weight ratios  
- opportunities for hybrid structures combining timber, steel and concrete  

Many European cities are already seeing mid-rise and high-rise buildings constructed using timber or hybrid structural systems.

For Forest City, engineered timber could play an important role in reducing the carbon footprint of the development while also supporting faster construction cycles.

However, widespread use of timber construction may require early coordination with regulators, insurers and supply chains, particularly in relation to fire regulations, acoustic performance and long-term durability.

## Automation and robotics in construction

Construction automation is also advancing rapidly.

Robotic systems are increasingly being used for tasks such as:

- automated earthworks and site preparation  
- robotic bricklaying and block placement  
- precision concrete finishing  
- automated surveying and inspection  

At the same time, **inspection drones and mobile scanning systems** are becoming routine tools for monitoring construction progress and verifying work.

While these technologies are unlikely to eliminate the need for skilled labour, they may significantly improve productivity and consistency over long construction programmes.

For a project as large as Forest City, designing sites and logistics systems that can accommodate **robotic equipment and automated construction workflows** could become increasingly valuable.

## Digital quality assurance and “scan-as-built” construction

Large developments often suffer from discrepancies between design drawings and what is actually built.

Emerging digital construction techniques aim to address this through **routine scanning and verification during construction**, producing accurate digital records of completed work.

These approaches may include:

- routine LiDAR scanning of structures during construction  
- automated comparison between design models and scanned reality  
- digital handover of verified “as-built” models to building operators  

This approach aligns closely with the **digital twin principles described in Chapter 4**, ensuring that the city’s digital model reflects the real built environment as accurately as possible.

At city scale, such practices could dramatically reduce long-term maintenance and operational risks.

## Local supply chains and advanced fabrication

Another opportunity for a development of Forest City’s scale is the creation of **local manufacturing and fabrication capacity**.

High demand for building components over a sustained period could support regional manufacturing of:

- modular building elements  
- engineered timber components  
- prefabricated façade systems  
- CNC-milled stone and architectural components  

Advanced fabrication technologies, including CNC machining and automated milling, increasingly make it possible to produce **high-quality architectural materials at scale while retaining design flexibility**.

Encouraging such supply chains could improve economic resilience while reducing transport and construction emissions.

## Early infrastructure provisions

As with energy infrastructure, the most important question for Forest City is not which technologies will ultimately dominate, but **what enabling conditions should be designed into the city from the start**.

Low-regret provisions that may support a wide range of construction approaches include:

- reserving logistics space for large-scale construction staging  
- ensuring road layouts and site access suitable for heavy modular transport  
- designing crane access and lifting zones into early masterplans  
- establishing standards for **scan-as-built verification and digital handover**  
- ensuring building data and models integrate cleanly into the city’s digital twin  

These provisions are relatively inexpensive to plan early but difficult to retrofit once large areas of the city have been built.

## Construction systems as long-term infrastructure

Construction methods are often treated as temporary decisions affecting only the building phase. However, for a development of Forest City’s scale and duration, construction systems themselves become a form of **long-term infrastructure**.

By designing the city to accommodate industrialised construction, automated building processes and advanced fabrication methods, Forest City could significantly improve build speed, reduce costs and lower the carbon footprint of the development.

The objective of this chapter is therefore not to select a single construction technology, but to ensure that Forest City’s design and governance frameworks allow the **most effective construction methods available at any point during the build-out to be deployed efficiently**.

# Chapter 3 — Data networking

## What this chapter will cover

- Neutral fibre ducting as foundational, long-lived infrastructure
- Data demand drivers over decades (home/work/health/education/industry)
- Particular focus on "future of life/work" in an AI driven world of abundance, data infrastructure supporting emerging new life patterns.
- Synergies and co-dependence between fibre and wireless (5G/6G, Wi-Fi, private networks)
- Where we connect up to very high capacity network routes: research local fibre routes, not aware of any major routes through the Forest City footprint but there is currently high capacity (GBN/LBF) University owned ducting and fibre network which goes as far as Babraham/Hinxton/Fulbourn, possibly Linton now. Also a commercial provider (Xayo) in Haverhill and on a northerly route through Newmarket to a cable landing point at Lowestoft and major providers in the M11/London to Ely rail line corridor.


## Outline thoughts we will report on

- A "build the hard stuff right first time" mindset: avoid re-digging and retrofit disruption
- Neutral host ducting: enable competition, resilience, and future services
- Co-design fibre and wireless: densification needs more backhaul, more mounting, and more power
- Design-in now: copious ducting, comms rooms in multi-unit buildings, risers, rooftop access,
  safe antenna mounting rights, street-furniture power/backhaul points
- Strategy for extending and POPing interconnect points between major networks and FC carrier neutral facilities as a minimum.
- Networking vision to attract anchor carriers and routes to make and maintain FC as a major (=high capacity + low cost) UK redundant network backbone location
- Wildcards: 6G capabilities (including sensing/positioning), dense edge compute

# Chapter 4 — Digital twins and the Open Source City

## What this chapter will cover

This chapter considers a range of plausible futures in which **digital twin** practices become central to how large developments are designed, delivered, verified, and operated, and where Forest City pursues "open source city" principles through **open data formats, open interfaces, and auditable foundations**.

The core question is not whether Forest City should build a single "master digital twin platform", but what **minimum standards, capture practices, and interoperability requirements** Forest City should set so that:

1) we can quickly generate reliable **baseline** digital twins of the development site,  
2) we can maintain living digital twins as designs develop and construction progresses,  
3) data remains usable across multiple disciplines, contractors, and tools without being trapped in proprietary formats, and  
4) openness (where safe) becomes a compounding civic asset rather than a one-off publishing exercise.

The chapter should treat the digital twin as a **chain of custody for spatial truth**: from early feasibility to masterplanning, from design models to construction verification, and from "as-designed" to "as-built" to "as-operated". At city scale, the failure modes are predictable: inconsistent coordinate systems, variable survey quality, incompatible file formats, and brittle handoffs between GIS and BIM. Our objective is to challenge developers to use best-available emerging technology and to define standards throughout the build process that demand **open data interoperability** and **maintained, high-quality digital twins**.

A key theme is that these technologies cross over with standard developer tool choices and incumbent building workflows. Forest City is unlikely to dictate every vendor choice, but it can—and will—challenge developers to adopt best practice by specifying outcomes and standards: **minimum capture quality, open deliverables, and a maintained digital twin through the build process**.

## Outline thoughts we will report on

- **Digital twin baseline: "ground truth" as early infrastructure**  
  In some plausible futures, the speed and reliability with which the project can establish a baseline digital twin becomes a major determinant of schedule and risk. A high-quality baseline can reduce surprises, shorten design cycles, and improve coordination between disciplines. This includes terrain, vegetation, drainage, constraints, and a defensible model of existing assets—particularly underground unknowns.

- **Digital twin through design: "as-designed" models that remain portable**  
  As designs develop, developers will use a mix of BIM tools and workflows. Forest City's interest is that outputs remain interoperable and consistently referenced. This is where "GeoBIM" matters: bridging building-scale BIM exchange with city/territory-scale geospatial models so that the city's twin does not fracture into parallel truths.

- **Digital twin in construction: "as-built truth" that is measurable and updateable**  
  A likely direction of travel is that construction verification increasingly relies on routine scanning and evidence capture, not just manual inspection and drawings. The digital twin becomes a maintained record of what was actually built, with repeatable update cycles, quality metrics, and clear responsibility for handover.

- **A practical focus: quality, formats, and handoffs (GIS ⇄ BIM ⇄ reality capture)**  
  At scale, the difficult part is rarely "capturing some data"; it is maintaining quality and ensuring repeatable exchange across organisations and tools. The chapter should highlight:
  - coordinate reference systems and control networks as non-negotiable foundations  
  - survey accuracy classes and metadata requirements (how good is "good"?)  
  - versioning and provenance (who captured what, when, how, with what uncertainty)  
  - exchange formats that avoid lock-in and enable long-lived reuse  

### Concrete capture and data themes (keep and expand)

- **LiDAR (airborne + mobile + handheld): terrain mapping, vegetation, and as-built verification**  
  LiDAR is likely to remain a primary method for fast capture of topography, structure, and construction progress. The practical issue is less "can we collect LiDAR?" and more "how do we ensure consistent referencing, metadata, and quality so the data is re-usable across the programme?" The chapter should emphasise that point clouds must be delivered with clear provenance and defined accuracy, and must integrate cleanly into the project's digital twin.

- **Mobile/handheld scanning and emerging "democratised capture"**  
  Some futures may see cheap scanning used routinely for progress capture and internal verification. This is promising, but also a quality risk if low-control capture is treated as equivalent to high-integrity baseline surveys. The chapter should separate "high-integrity truth capture" from "low-friction situational capture", and define where each is acceptable.

- **Ground penetrating radar (GPR): utilities planning, archaeology/geotech risk reduction**  
  GPR can reduce uncertainty about what is underground, but only if it is captured, referenced, and stored in a way that can be re-used—especially when combined with known asset records and subsequent as-built updates.

- **Open mapping and GIS: what can be open, what must be protected**  
  There is a plausible future where open mapping accelerates planning, innovation, and accountability—yet it must be balanced against security and privacy risks. Regardless of what is public, the internal programme twin should treat underground asset truth and constraints mapping as critical dependencies.

- **Open tooling as an enabler (e.g., QGIS)**  
  We should explicitly consider open-source tooling such as QGIS as part of an interoperability strategy—not necessarily as the only tool, but as a practical test of portability. Mandating that key deliverables can be inspected and validated in open tooling is a concrete way to reduce lock-in risk and keep the twin maintainable for decades.

## "Open Source City"

Forest City's "open source city" ambition can be made practical (and non-hype) by anchoring it in the digital twin and its surrounding ecosystem.

- **Open data by default where safe**  
  The city can publish carefully curated layers (and schemas) that enable a broad ecosystem—researchers, civic technologists, suppliers, startups, residents—without exposing sensitive details. This includes planning artefacts, environmental baselines, and high-level infrastructure descriptions, with strong security review and redaction norms.

- **Standard machine-readable formats and versioning**  
  The value of openness compounds when data is reliably structured and versioned. A core principle should be that anything released publicly (or shared programme-wide) should be reproducible, documented, and maintained as the city evolves—rather than posted once and forgotten.

- **Open interfaces and reference implementations**  
  Where Forest City defines city-level interfaces (e.g., data APIs, event streams, access patterns), publishing open specs—and, where sensible, reference implementations—reduces lock-in and increases auditability. This supports competition and long-term maintainability.

- **Governance: openness without naivety**  
  "Open" should never mean "everything is public" or "security is optional". The chapter should explicitly cover licensing, contribution models, responsible disclosure, and the boundary between open civic layers and protected operational/security layers.

## How Forest City should respond

It remains an open question whether Forest City should commission and operate a single "end-to-end" digital twin platform as part of the project, or whether the city should rely on a federation of widely used third-party tools and platforms connected by standards. A unified platform could offer strong benefits (consistency, simplified governance, reduced friction in handovers), but it also carries risks (lock-in, procurement complexity, long-term operational burden, and the challenge of keeping pace with a fast-moving vendor landscape).

Regardless of which delivery model ultimately prevails, the later-phase decision is the same: **Forest City should make the digital twin a single source of spatial truth**, and ensure that surveying, design development, construction verification, and handover data can all be ingested into a coherent, maintained twin without bespoke rework.

Forest City should therefore consider the following minimum responses:

1. **Decide early whether to standardise on a single digital twin platform, or a standards-led federation**  
   Forest City should explicitly choose an approach rather than allowing multiple incompatible "partial twins" to emerge by default. Two viable models are:
   - **Single platform standardisation:** choose a primary digital twin platform and require that all suppliers deliver in forms that can be ingested and maintained within it.  
   - **Federation via open standards:** allow multiple platforms, but require a rigorous set of open deliverables, shared referencing, and a defined "authoritative truth layer" that remains consistent across systems.  
   The common failure mode at city scale is not lack of tools, but fragmented, inconsistent models. A deliberate choice early reduces that risk.

2. **Mandate open, interoperable deliverables at each lifecycle stage (even if a single platform is chosen)**  
   Even if Forest City standardises on one platform, it should still require exportable open deliverables to avoid long-term dependency and to keep data reusable. In practice, this means requiring baseline surveys, design models, and as-built captures to be delivered in open or widely interoperable forms as a minimum "public truth layer".

3. **Define "digital twin quality" as measurable requirements**  
   "We have a digital twin" should be testable. Forest City should define minimum expectations for:
   - coordinate systems and control networks  
   - accuracy classes and error bounds  
   - metadata completeness (capture method, time, calibration, uncertainty)  
   - validation and QA procedures  
   This is how Forest City challenges developers constructively: by requiring outcomes that can be audited.

4. **Require a maintained digital twin through construction, not a one-off model**  
   Forest City should set expectations that the twin is updated at defined milestones (and potentially on a cadence during heavy construction). The deliverable should be a living record supporting coordination, reducing disputes, and improving handover into operations.

5. **Insist on robust GIS ⇄ BIM handoffs ("GeoBIM")**  
   If Forest City does not plan for GIS/BIM integration early, the project risks parallel universes: one city-scale model and one building-scale model that do not align. Forest City should therefore require consistent referencing, clear transformations, and unambiguous ownership of the "authoritative" layers of truth.

6. **Use open-source tooling as a compliance test, not an ideology**  
   A practical enforcement mechanism is to require that key deliverables can be loaded, inspected, and processed in open tooling (e.g., QGIS for GIS layers and point clouds). This is a check that the programme is not trapped in a single proprietary ecosystem—even if one primary platform is chosen.

7. **Treat underground asset truth as a first-class dependency**  
   Given the safety and cost impacts of underground unknowns, Forest City should explicitly incorporate underground asset data quality and integration as part of the twin requirements, and require that underground data is maintained and updated throughout construction as "as-built truth".

8. **Make "open source city" tangible via publishable layers, specs, and governance**  
   Forest City should define which layers should be publishable (and when), the standard schemas and versioning expectations, and the governance boundary between open civic data and protected operational/security data. This ensures openness becomes a maintained asset rather than an aspirational label.

**Summary recommendation:** Forest City should treat the digital twin (and its open ecosystem) as a foundational programme asset and decide early whether to standardise on a single platform or a standards-led federation. In both cases, it should require open deliverables, measurable quality, and a maintained twin through the full build lifecycle—so the city avoids fragmented partial models and retains long-term optionality.

## Wildcards to track

- Wider adoption of routine reality capture as a contractual norm (scan-to-verify, not just draw-to-build)
- Increasing convergence of GeoBIM workflows and standards (reducing bespoke GIS/BIM integration)
- Low-cost scanning improvements (useful for progress capture, but with quality pitfalls if misapplied)
- Component-level semantic models that enable richer "as-built" truth (beyond geometry)
- Evolving norms or regulation about public sharing of city-scale twin data (balancing openness and security)

# Chapter 5 — Federated Smart Home Technology

## What this chapter will cover

This chapter explores potential futures in which federated, open smart home technology plays a role in energy coordination, security and resident well-being. We consider scenarios where homes and buildings coordinate in ways that **could** support improved energy efficiency, demand management, and resident protection. While elements of these systems may mature over the development cycle, the direction, pace, and social acceptability of adoption are uncertain. The emphasis here is therefore on **optionality**: what Forest City should do now to avoid blocking beneficial futures, without assuming any single technical outcome.

## Outline thoughts we will report on

- **Energy purchasing and demand management**  
  In some plausible futures, federated smart home systems could allow residents (or resident cooperatives) to participate in collective energy purchasing, coordinated load shifting, or flexible demand response. These approaches might reduce peak electricity usage, lower costs, and reduce strain on local infrastructure. However, their viability will depend on evolving market structures, regulation, device interoperability, and resident trust—any of which could develop in different directions.

- **Smart home monitoring and resident protection**  
  Some futures may see optional, privacy-preserving in-home sensing support improved safety and wellbeing—ranging from environmental monitoring (air quality, humidity, temperature) to safety detection (falls, smoke, unusual inactivity) and limited health monitoring (patterns that may indicate risk). Adoption is likely to be uneven and culturally sensitive. The chapter should therefore frame these capabilities as possibilities that may emerge, alongside risks such as overreach, surveillance concerns, misuse, and cybersecurity exposure.

- **Integration with wider city systems**  
  It is possible that future city systems—particularly energy systems—will increasingly expose interfaces for demand response, dynamic tariffs, and resilience measures (e.g., islanding modes, local constraints). Federated smart home systems could integrate with these city interfaces, but only if designed around open standards and clear governance. This section should explore what "good" integration might look like, without committing to a specific platform.

## How Forest City should respond

Forest City is unlikely to build federated smart home platforms itself. The key decision is therefore what minimum enabling conditions the city **should** create so that residents, landlords, innovators, and service providers can adopt mature systems later without costly or disruptive retrofits. This can be framed as a set of practical recommendations:

1. **Provide clean, open interface points at the city layer**  
   City-managed systems (especially energy-related systems) should expose well-defined, standards-based interfaces that future smart home/federation platforms **could** connect to—covering areas such as tariff signals, demand response events, local capacity constraints, and (where appropriate) aggregated reporting. These interfaces should be designed to avoid lock-in, minimise data collection, and support multiple competing ecosystems.

2. **Design in physical "sensor readiness" as a low-regret provision**  
   The built environment should make future sensing and device deployment straightforward. This **could** be as simple as:  
   - providing ducting/conduit routes that reach key rooms and likely sensor locations  
   - ensuring convenient power availability for low-voltage devices (or clear upgrade paths)  
   - making maintenance/retrofit access non-disruptive (service voids, accessible risers, sensible mounting options)  
   - documenting "as-built" routes so that future installations do not require exploratory work  
   The intent is not to overfit to today's devices, but to make unknown future devices easy to deploy safely and neatly.

3. **Prefer interoperability-friendly choices in any baseline provision**  
   Where Forest City or its delivery partners provide baseline smart-home-adjacent infrastructure (e.g., metering, building management in multi-unit buildings, shared sensors), selection criteria should explicitly include interoperability, exportable data, and the ability to integrate with multiple third-party systems. This should reduce the risk that early choices create a long-term constraint.

4. **Support emerging standards and open ecosystems without owning them**  
   Forest City should treat certain standards and open-source reference implementations as strategic enablers—tracking them, engaging early, and using procurement and partnership approaches that make adoption easier. This might include relationships with suppliers who demonstrate credible standards alignment, participation in relevant industry groups, and a bias toward widely used open formats and protocols.

5. **Make governance, privacy, and security "design inputs", not afterthoughts**  
   Because trust is likely to determine whether federated smart home systems are adopted at all, Forest City should treat privacy-by-design patterns, consent models, and cybersecurity expectations as core requirements for any city interface and any baseline provision. The goal is to enable beneficial futures while avoiding a brittle or surveillance-prone outcome.

**Summary recommendation:** Forest City should not attempt to predict or build "the" federated smart home system. Instead, it should design-in optionality through open city-level interfaces, sensor-ready physical infrastructure, and interoperability-friendly procurement—while actively supporting emerging open standards so that future adoption can be low-friction, competitive, and trusted.

# Chapter 6 — Miscellaneous technology recommendations (placeholder items)

## Purpose of this chapter

During Phase 1 discussions, a number of additional "no-brainer" technology requirements tend to surface that do not neatly belong in a single domain chapter, or which we have not analysed in sufficient depth to justify a full treatment yet. This chapter is intentionally a holding area: a set of pragmatic recommendations and placeholders that appear low-regret, are cheap to design-in early, and would be painful to retrofit later.

The intention is not to claim these are fully proven or optimised. Instead, it is to ensure they remain visible as later phase plans and specifications are developed, and to prompt deeper analysis where needed. These items should be revisited and either promoted into fuller chapters, adopted as baseline requirements, or explicitly rejected with rationale.

## Planning for near term energy conservation and medium/long term energy abundance

Much of the near-term UK commercial environment encourages energy minimisation: electricity is expensive, grid upgrades are constrained, and many sensible design choices are about reducing demand and shifting load. That remains a rational default.

However, one plausible longer-term future is the opposite: a world of abundant electricity, driven by a combination of new nuclear (including SMR programmes), grid-scale renewables, storage, and other developments that materially reduce marginal cost and increase supply. In such a world, the binding constraint for homes and businesses may move from "energy scarcity" to "how do we take advantage of cheap, plentiful power safely and flexibly?"

If that future materialises, households and local businesses could adopt technologies with far higher electrical demand than current norms—examples might include robotics (potentially including humanoid robots), more intensive local automation, high-capacity charging, and substantially increased local or regional compute footprints. Even if these outcomes arrive unevenly, the retrofit cost of upgrading end-consumer electrical supply and local distribution capacity could be extremely high relative to the modest incremental cost of designing-in headroom during initial construction.

### End-consumer supply: three-phase, high-current service provision (design-in now)

Forest City should strongly recommend that every end-consumer's premises are provided with **three-phase supply capability** and service equipment/tails sized to **at least 100 amps**, even if initial loads do not require it.

- This recommendation should be framed as optionality rather than immediate necessity.
- The incremental physical cost of installing two additional conductors and appropriately rated service heads during initial construction is expected to be small compared to the cost and disruption of retrofitting later.
- A three-phase baseline also improves flexibility for future electrification and load-balancing, even in an energy-constrained world.

**Important caveat:** The local Distribution Network Operator (DNO) will ultimately decide network design and service criteria using their standard commercial and engineering processes. The recommendation here is not to override DNO authority, but to ensure Forest City's masterplan, building standards, and developer requirements do not inadvertently lock premises into a low-capacity single-phase future that becomes a long-term constraint.

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
