## 3.6 Platforms, openness and complementors in the age of AI assistants

Two of the strategies studied here, being used by external agents (S2) and hosting third-party agents (S3), are in theoretical terms platform strategies. General assistants such as ChatGPT, Claude, Copilot and Gemini now sit between the user and the tool and accept third-party apps and connectors built on shared protocols (Section 3.2). The platform literature is large but was written before such assistants existed, so this section asks which of its mechanisms transfer and where it is silent.

### 3.6.1 Platforms, ecosystems and the incumbent's double position

Gawer and Cusumano (2014) separate internal platforms, from which a firm derives its own products, from external platforms that serve as a foundation for outside innovators. Ecosystems emerge where modularity lets interdependent firms coordinate without hierarchy and complementarities are non-generic (Jacobides et al., 2018), and are defined by activity structure and alignment (Adner, 2017). Up to 2020, platform competition was studied almost entirely in transaction, video game, mobile and software markets (Rietveld & Schilling, 2021); agent ecosystems were not yet an object of study.

For creation software these vocabularies give a diagnostic with two positions. In S2 the incumbent is a complementor on somebody else's external platform: the assistant owns the user relationship and the incumbent supplies a function or an artifact through it. In S3 the incumbent tries to be the platform owner for a small ecosystem of agents. One firm can hold both positions, as Grammarly does. Research on such dual positions is thin; the nearest tool separates upstream components, which the focal firm bundles, from downstream complements, which customers bundle (Adner & Kapoor, 2010). The foundation model is then an upstream component of the incumbent's own agent (S1), the assistant a downstream channel for its artifact (S2).

### 3.6.2 Openness and control as a calibrated choice

Openness is not a switch. Parker and Van Alstyne (2018) show formally that closing a platform raises the sponsor's ability to charge for access while opening it raises developers' incentive to build, so the optimum is interior. Boudreau (2010) separates two meanings of "open", granting access to outside developers and devolving control to them, and finds that access had a much larger effect on development activity than devolved control. Most of the benefit of opening therefore comes from access, and the sponsor can keep control of the core. Hagiu and Wright (2019) add a decision rule: control a decision when you can monitor and decide well, enable an agent when its investment is decisive and hard to observe. S1 is then control, S3 is enabling and suits cases where third-party domain knowledge is decisive, and in S2 the incumbent barely chooses, because the assistant holds the user relationship. All the incumbents here grant access to artifact operations (read, generate, edit) while keeping the editor, file format and account, the regime predicted to capture most of the value of opening.

### 3.6.3 Boundary resources and the terms of access

The boundary-resources model is the strongest lens for the 2024-2026 events. Boundary resources are the interfaces through which an owner enables third-party contribution (resourcing) while keeping control (securing) (Ghazawneh & Henfridsson, 2013); MCP servers, apps in assistants, write-to-canvas tools and generation APIs qualify. Three predictions follow. Securing accompanies resourcing from the start, so plan restrictions, rate limits, credits and sign-in are expected with the opening: Figma ties write access to the paid seat (Figma, 2026a), Adobe requires sign-in to unlock generation in assistants (Adobe Inc., 2026b), and Gamma meters generations arriving through MCP like API calls (Gamma, 2026). Boundary resources are retuned continuously (Eaton et al., 2015), so changing terms are normal, as in Figma's credit updates of December 2025 and Gamma's API keys for every plan in October 2026. And openness that is too wide invites exploitation (Karhu et al., 2018); in the agentic setting an agent can extract an artifact or a design system and rebuild it elsewhere. Complementors judge openness on several dimensions (Benlian et al., 2015), so closed or private-beta programmes predict a thin supply of third-party agents.

The closest published statement of the thesis puzzle holds that ceding the interface to general agents ("going headless") "is correct for some firms and destructive for others" (Hydari & Muzaffar, 2026a); it is a preprint on vertical AI firms and supplies a question rather than a test (Section 3.9).

Practitioner advice on the same question conflicts. Bain's quadrant model tells incumbents in "open door" workflows (low user automation, high AI penetration), where third-party agents "can hook into exposed APIs and siphon value", to "launch their own agents fast, deepen partner integrations to raise switching costs, and limit access to critical end points" (Crawford et al., 2025, p. 24). The same report tells incumbents in high-automation, high-penetration "battlegrounds" to "pick a lane: Either become the neutral agent platform or supply the unique data that powers it" (p. 27), and warns that failing to lead on standards risks "becoming a silent back end while the semantic gatekeepers harvest the margin" whereas winning makes the platform "a marketplace, earning revenue even when someone else's agent takes the action" (p. 28). The advice to restrict access is therefore specific to one quadrant, and the report gives creation tools, which sit toward high penetration, no single prescription. It is a consultancy report without a test, but it frames S1, S2 and S3 as alternatives that depend on the workflow.

### 3.6.4 Why open: growth, free access and leakage

Evidence that openness pays is limited. Public firms adopting public APIs grew faster, interpreted as an "inverted firm" capturing part of third-party surplus (Benzell et al., 2024), but the study predates language-model agents and its gains came from third-party applications adding users. Free access is rational when another side pays (Parker & Van Alstyne, 2005): free entry through an assistant makes sense where the assistant is a demand channel for a paying side, while generation, where the incumbent's own cost arises, is metered (Section 3.7).

Two results qualify this. Sellers discovered on a platform may transact off it to avoid fees (Hagiu & Wright, 2024); the hand-off from assistant to native editor, which incumbents call the "final mile", is leakage the incumbent wants and the assistant tolerates only while it charges no fee. And dependence on a dominant intermediary becomes a trap when the outside option worsens as others join (Hagiu & Wright, 2025, a working paper), the sharpest warning for incumbents whose growth now runs through free entry in assistants.

### 3.6.5 Complementors, owner entry and envelopment

If assistants are platforms, their owners can enter complementors' markets, and the evidence is mixed. Amazon enters product spaces that third-party sellers have proven successful and avoids those needing seller-specific investment (Zhu & Liu, 2018). Android developers facing a threat of Google's entry reduced innovation and raised prices (Wen & Zhu, 2019), whereas after Google Photos entered, affected apps raised major updates by 9.6% (Foerderer et al., 2018). First-party integration changes demand for third-party apps (Li & Agarwal, 2017), incumbents respond to cross-side entry by repricing and differentiating (Seamans & Zhu, 2014), and owners have reason to show restraint so that complementors keep investing (Gawer & Henderson, 2007).

Three conditional predictions follow: commodity, effort-light artifacts (simple slides, social graphics, drafts) are most exposed; artifacts tied to an editing surface, file format, library or collaboration graph are least exposed; and, given the ambiguous sign, responses should depend on the type of complement. Envelopment names the strategic threat: an envelopper in one platform market enters another by bundling the target's functionality with its own, exploiting shared users and foreclosing the incumbent's access to them (Eisenmann et al., 2011). A general assistant holds the user relationship across tasks and can bundle text, image, slide and code generation. The implied defences (own the user relationship, bundle, keep the artifact where work continues) correspond to S2 combined with S6 and S4, so S2 should never be analysed alone. Firms with strong downstream assets gain less from joining a platform and demand better terms (Huang et al., 2013), which ranks Gamma, with the fewest such assets, as the widest early opener; multihoming predicts lower complement quality where each host needs adaptation (Cennamo et al., 2018).

### 3.6.6 Hosting third parties and generative AI platforms

Hosting (S3) requires governance. Ecosystems must balance stability and evolvability (Wareham et al., 2014), high generativity raises variance in how complements serve users (Cennamo & Santaló, 2019), sponsors manage ecosystem value by promoting selected complements (Rietveld et al., 2019), and first-party content seeds a young platform (Hagiu & Spulber, 2013), which fits an agent store listing first-party agents beside partner ones. Hosting also needs an installed base outsiders want to reach, which may explain its rarity: Figma and Canva host plugins and apps, not agents.

Research on generative AI platforms is young. Studies of complementors in generative AI ecosystems and of generative AI as a boundary resource reshaping governance (Heimburg et al., 2025; Mayer et al., 2025) and an argument that control of complementary assets, rather than formal intellectual property, will shape competition (Azoulay et al., 2025) are cited here for their general arguments only. Their complementors are small builders, not incumbents, and they precede tool-calling agents. Upstream concentration (Jacobides et al., 2021) makes incumbents price-takers on model inputs and gives AI platforms a double role as supplier and channel. MCP is an open standard with a documented threat model (Hou et al., 2026), and more than half of listed marketplace projects are invalid or low-value (Guo et al., 2025), which raises the value of curated directories. Agents are described as a new intermediation layer (Rondina et al., 2026), and platforms whose asset is attention are said to need to resist them (Lin et al., 2025). The contrast is informative: attention platforms resist agents whereas artifact platforms welcome them, an asymmetry observed but not theorised.

### 3.6.7 Implications for the thesis

The platform literature supplies necessary conditions for S2 (benefit from access, retained control, relationship-specific assets) and S3 (a distribution surface outsiders lack, seeding, governance capacity), and predicts that access terms will be retuned. It does not predict which terms a firm chooses, nor does it address an incumbent that is both complementor of an assistant and host of agents (Sections 3.9 and 3.10).

## 3.7 Pricing and the economics of AI in SaaS

Strategy S5 (cost-driven hybrid monetization) and the rival hypothesis of outcome-based pricing rest on pricing research. Its academic core predates generative AI; the AI-era evidence is mostly practitioner material and a few preprints. This section keeps the two apart.

### 3.7.1 Information goods and the premise AI weakens

The economics of information goods starts from high first-copy cost and near-zero marginal cost (Shapiro & Varian, 1999; Goldfarb & Tucker, 2019). Cost-based pricing then makes little sense, and versioning and price discrimination become the main tools (Shapiro & Varian, 1999, general argument); bundling is profitable because aggregation makes valuations predictable, but only when marginal costs are very low (Bakos & Brynjolfsson, 1999, 2000); a fixed fee plus a usage schedule improves profit when metering is costly (Sundararajan, 2004); and consumers often prefer flat rates even when dearer (Lambrecht & Skiera, 2006). These results explain the pre-AI cost structure of SaaS and the persistence of the seat. The course framework expresses the same logic by distinguishing variable-cost, fixed-cost and "development-based" businesses, whose unit cost falls quickly with volume (Parolini, 2021; Section 3.4); classic SaaS is development-based, and inference adds a variable cost per use that pushes it back toward a less scalable structure.

Generative AI adds a computation cost to each use. An early investor argument held that AI businesses "look more like services", with gross margins often 50 to 60% against 60 to 80% or more for software (Casado & Bornstein, 2020); it is anecdotal and pre-dates language models, but its mechanism is the one now visible. Bessemer reports average gross margins of about 25% for AI-native "Supernovas" and about 60% for "Shooting Stars" (Bessemer Venture Partners, 2025), and ICONIQ's survey puts AI-product margins at 45% in 2025, with respondents projecting 59% by 2027 (ICONIQ Growth, 2026). Sources agree that AI margins are lower; they disagree on whether the gap is transitional. One preprint finds that the price for fixed benchmark performance falls five to ten times a year while the price of running frontier models rises (Gundlach et al., 2025), and Epoch AI reports declines of 9 to 900 times a year depending on the capability threshold (Cottier et al., 2025). The two reconcile if the unit cost of a given capability falls fast while vendors keep moving users to frontier and agentic capabilities, so cost per user can rise; agent runs are themselves costly and variable (Kapoor et al., 2024). Cost-plus pricing also erodes revenue as model costs fall unless usage grows (Boston Consulting Group, 2025). No peer-reviewed measurement of cost-to-serve for application-layer SaaS exists; the figures come from investors, consultancies and a preprint.

### 3.7.2 Tariff design: why the seat stays

Academic SaaS pricing research is pre-AI: it finds SaaS pricing under-managed (Saltan & Smolander, 2021) and models per-transaction charging (Ma & Seidmann, 2015). Pay-per-use beats selling for a monopolist only if the psychological "ticking meter" cost is low, while in a duopoly selling can earn more (Balasubramanian et al., 2015). With the flat-rate bias and the pain of paying (Prelec & Loewenstein, 1998), this predicts that in competitive markets the flat component stays and metering enters as allowance, cap or add-on. Allowances with alerts are a stable tariff for inattentive consumers (Grubb & Osborne, 2015), and shrouding is a known feature of competitive markets (Gabaix & Laibson, 2005, general argument).

Practitioner surveys show the same pattern. Hybrid pricing rose from 27% to 41% of surveyed firms in 2025 and stood at 37% in 2026 (Poyar, 2025, 2026). Among more than 30 incumbent SaaS vendors, about 35% raised seat prices and about 65% layered an AI meter on seats, and none had moved entirely to usage or outcome pricing (Bain & Company, 2025); a year later most "usage-based" pricing proved to be capacity-based pricing with overages (Bain & Company, 2026). For AI agents, seat pricing is still the largest category (41%), then fixed fee (30%), usage (23%) and outcome (7%) (Simon-Kucher, 2026). These samples come from AI builders, investor portfolios and newsletter readers, and several sponsors sell pricing services. Buyers rank per-seat pricing last for core software but first for separately billed AI functionality, wanting predictable budgets (Futurum Research, 2026). The "seats are dead" narrative (Section 3.3) is therefore contested; the evidence supports a narrower claim: the seat persists as anchor, and consumption is layered on.

### 3.7.3 Freemium when the free user costs money

Dominant firms can rationally give good products away under network externalities (Shi et al., 2019); feature-limited free versions can beat charging for everything (Niculescu & Wu, 2014); an extra premium version can lift sales of the existing one (Gu et al., 2018); and free allowances should vary dynamically (Lambrecht & Misra, 2017). None of these models has a free-user cost that grows with usage, which is the assumption generative AI breaks. How much AI to give free, and for how long, is a question the theory leaves open (Section 3.10). Over 80% of firms price mainly on cost or competition (Hinterhuber, 2008), which makes cost-based credits the expected default; practitioners call credits a "bridge" adopted because costs are known and value is not (Metronome, 2025).

### 3.7.4 Credits: cost control or value capture?

Sources assign credits four functions: capping cost by turning volatile usage into a prepaid quantity (Metronome, 2025; Erten & Wang, 2026), giving the buyer predictability (Futurum Research, 2026), opening an upsell path, and abstracting away tokens, though "a credit is a currency, not a value metric" (Erten & Wang, 2026). Other vendors run parallel designs (Salesforce, 2026; Microsoft, 2026; Notion Labs, 2026), Cursor's 2025 shift to usage at API rates shows the backlash risk (Zeff, 2025), and a single-author preprint finds subscription with a usage quota to be the dominant model among AI companies (Gupta, 2026).

Three tests separate cost control from value capture, and the case evidence can be coded against them: what the credit unit tracks (compute or a recognisable unit of work); whether credit rates move with model cost; and whether the allowance attaches to the seat or to the work. Figma fits the cost reading. Its non-GAAP gross margin fell from 92% in fiscal 2024 to 82% in the third quarter of 2026 and the share of revenue absorbed by non-GAAP cost of revenue rose from about 8% to about 18% (Figma, Inc., 2026b, 2026c), with filings naming AI inference as the driver (Figma, Inc., 2026a). Every seat received a capped credit allotment, enforced from March 2026, with add-ons and pay-as-you-go beyond it (Figma, 2025), and add-on credits were doubled at the same price in August 2026, citing token efficiency (Figma, 2026b): the unit follows compute, the rate follows cost, the allowance attaches to the seat. Its filing also anticipates customers demanding options that shift who bears AI cost, including bring-your-own-key arrangements (Figma, Inc., 2026a). Canva shows the logic in mass freemium: free AI uses fell from 200 standard or 20 premium to 20 in September 2026, and the 2026 growth target was cut from 30% to 20% because serving an AI task cost too much (PricingSaaS, 2026; Startup Daily, 2026; Osmonbekov, 2026). Adobe passed generative costs to Creative Cloud prices in 2023 but not to Express (Adobe Inc., 2023).

### 3.7.5 Outcome-based pricing: the rival hypothesis and its conditions

Outcome-based contracting is studied in servitization. A multiple-case study shows that moving to outcome-based models is a full business model innovation, requiring co-defined value, redesigned provision and delivery of value in use, and that four of six cases failed (Sjödin et al., 2020). The agreed conditions are measurable performance, risk the provider can bear, and trust with shared data; none of this research concerns software or generative AI.

Advocacy comes from vendors and consultants (Boston Consulting Group, 2025; Taylor, 2026); adoption concentrates where an outcome is countable, in customer support, where Zendesk, Intercom and HubSpot price resolved conversations (Zendesk, 2024; Intercom, 2026; HubSpot, 2026). Elsewhere it is rare: 7% of agent pricing in one study (Simon-Kucher, 2026) and about 10% of hybrid AI meters in Bain's (Bain & Company, 2026). Flagship examples blur the definition: one vendor counts an "assumed resolution" when the customer does not return, another bills outcomes through a credit ledger (Intercom, 2026; HubSpot, 2026). Bain sets three conditions, that the outcome is observable, uniquely attributable to the AI and contractible, and finds most workflows fail them (Bain & Company, 2026); Bain's typology of effort meters (tokens, compute), output meters (drafts, generations) and outcome meters (business results) is the most useful device for this thesis, the test being who carries the quality risk. Creation tools sell outputs whose value is subjective and realised downstream, so the literature predicts that outcome pricing will not appear in creation SaaS even if it spreads in support and sales. The case files agree: no price list or company statement in them prices on outcomes. Gamma's agent endpoints, "priced by the work the agent does" (Gamma, 2026), are an effort or output meter in Bain's terms.

### 3.7.6 Who pays when an external agent does the work?

No source examines this directly, so it is the most original element of S5 in the S2 setting. Three building blocks exist. On cost incidence, when a user's assistant drives a vendor's tool, the model provider bears the inference of the agent loop and the vendor only its own tool-side compute (rendering, generation, storage). On seat leakage, Figma warns in its filing that agents could reduce the number of paid seats needed for a given output (Figma, Inc., 2026a), and BCG reports seat reduction as buyers' main lever for cutting software spend (Boston Consulting Group, 2025). On the layer principle, a16z advises pricing at the highest layer of value a firm can measure, attribute and defend, and metering work done rather than tokens (Erten & Wang, 2026). The cases suggest a rule to test: read access is bundled with the seat or free, and the vendor charges where its own compute is used.

### 3.7.7 Implications for the thesis

Peer-reviewed work supplies mechanisms; grey literature supplies observations, mostly from AI builders. For S5 the literature supports three expectations: the seat remains the anchor with caps or credits added; credit design tracks inference cost rather than value; and free AI is rationed in proportion to the free base and the lack of cross-subsidy. It predicts the rival hypothesis to be absent in creation SaaS, and offers for S2 no more than a rule of incidence to be built from the cases.

## 3.8 Creation software and generative AI

The population of this thesis is defined by what the product does: help someone make an artifact such as a design, deck, document or text. The relevant literature is split across traditions that rarely meet.

### 3.8.1 Definitions and taxonomies

End-user software engineering studies people who build artifacts without being professional developers and notes that they face the same engineering problems (Ko et al., 2011). The creativity support tool tradition asks how technology can help more people be creative more often (Shneiderman, 2007); reviews find a technology-centred field with uneven definitions and evaluation (Frich et al., 2019; Cox et al., 2025). Neither defines "productivity SaaS": one measures creative outcome, the other time and throughput. The cases sit in the first by origin and are sold in the second's terms.

Taxonomies are fragmented. No analyst category called content creation was found, and the SaaSpocalypse debate concerns systems of record (Section 3.3). Competition authorities define markets by function: the UK CMA by all-in-one product design software for professional users, vector and raster editing (Competition and Markets Authority, 2023a), the European Commission by interactive product design software (European Commission, 2023a). Figma defines its addressable market by workforce, people engaged in software design (Figma, Inc., 2025). Function, artifact type and workforce are three logics; this thesis adopts a fourth, defined by the artifact and the job of the product, and notes that none of the existing definitions contemplates an agent as the producer of the artifact.

### 3.8.2 The industry and its business models

Adobe is the archetype of the move from licence to subscription: subscription is 96% of fiscal 2025 revenue and Digital Media annualised recurring revenue is USD 19.20 billion, up 11.5%, while its filing lists AI or cloud-native companies among competitors (Adobe Inc., 2026a). Figma is a web tool with a free tier and paid tiers (European Commission, 2023b) that describes its growth as product-led and bottoms-up (Figma, Inc., 2025). No scholarly analysis was found of Adobe's transition, of Canva's template and creator marketplace, or of AI credits in creative tools: these business models are documented in filings and trade press, which is itself a finding.

The abandoned Adobe and Figma merger is the richest primary source on market structure. The Commission's Statement of Objections of November 2023 set out two theories of harm: Figma as clear leader in interactive product design, and Figma as a likely entrant into vector and raster editing (European Commission, 2023a). The CMA's provisional findings were parallel, and its press release recorded that Figma's threat had driven Adobe to build web versions of its flagship tools (Competition and Markets Authority, 2023a, 2023b). The deal ended in December 2023 with a USD 1.0 billion termination fee to Figma (Figma, Inc., 2025). Three points follow: regulators treated web-native collaborative tools as innovation pressure on the suite incumbent, the "lower entry barriers" logic one technology generation earlier; S7 is constrained by competition law when the target is a leading or potential rival; and the decisions assume professional human users, which may not describe markets where agents produce the artifact.

### 3.8.3 Generative AI and creative work

Peer-reviewed evidence converges on five points. Gains are larger for weaker performers: 40% less time and 18% higher quality in professional writing (Noy & Zhang, 2023), 15% more issues resolved in support (Brynjolfsson et al., 2025), and a 25% rise in creative productivity and 50% rise in output value on an art platform (Zhou & Lee, 2024). Output homogenises: AI-assisted stories were individually more creative but more similar to one another (Doshi & Hauser, 2024), favouring firms that supply differentiators such as brand kits, design systems and templates over firms that only generate. Freelance creative labour is displaced in exposed occupations (Hui et al., 2024). Experienced designers see AI as assistive and juniors as at risk (Li et al., 2024; Khan et al., 2025), while artists raise consent and competition concerns (Jiang et al., 2023, general argument). And the frontier is uneven (Dell'Acqua et al., 2023, general argument), which bears on when an agent-made artifact can be trusted.

The studies share a limit: nearly all use writing, illustration or ideation tasks. The one controlled study of a product in this thesis found that Figma's generative tool cut task time by about 20% among completers, with larger gains for product managers than designers (Stewart et al., 2026, a small preprint). None examines business artifacts made by non-specialists with AI-native tools, agents operating inside a SaaS product, or credit consumption. Before the boom, AI tools mostly supported idea generation and execution rather than early co-creation (Hwang, 2022); agentic tools move into that gap, a testable claim about how the tool's role changes (SQ1).

### 3.8.4 Governance and intellectual property as strategic factors

The rival hypothesis R-governance asks whether trust, provenance and responsible-AI positioning differentiate a product and can be monetised. Adobe presents Firefly as commercially safe, trained on licensed content, with content credentials and indemnification for some enterprise offers (Adobe Inc., 2026; Gold, 2023; Miller, 2023; Coalition for Content Provenance and Authenticity, 2025). Canva announced a USD 200 million fund for creators who opt in to AI training (Sharwood, 2023). Grammarly turned the question of who wrote a text into a product, Authorship (McCloskey, 2025), whose rationale is strengthened by evidence that detectors are biased against non-native writers (Liang et al., 2023, cited from its title) and unreliable (Sadasivan et al., 2023). The three choices (licensed data and indemnity; creator remuneration; process transparency) are the variation a comparative study needs.

Governance is also a cost and a risk. Figma suspended its Make Design feature in 2024 after it reproduced Apple's weather app, and Adobe faced an artist backlash over its terms of use (Mann, 2024; Thacker, 2024). Law cuts both ways. The US Copyright Office states that training on large, diverse datasets will often be transformative, while leaving room for market-dilution harm (U.S. Copyright Office, 2025); the copyright literature treats output similarity and training as separate risks (Henderson et al., 2023; Samuelson, 2023). Transparency duties such as Article 50 of the EU AI Act (European Union, 2024) may make provenance a baseline expectation, turning a differentiator into a compliance cost. Organisational AI governance has a vocabulary (Mäntymäki et al., 2022), but how governance becomes an asset rather than a constraint is only starting to be theorised (Hydari & Muzaffar, 2026b). The supportable position is that governance is a transitional lever whose value depends on an accountable buyer, and that its monetisation is unshown.

### 3.8.5 Implications for the thesis

The creation literature supports the premise that AI widens the population of artifact producers, supports S4 through homogenisation, and offers the Adobe and Figma record as precedent for entry pressure and the limits of S7. It does not study creation incumbents under agentic AI, agents as users of creation tools, or governance as comparative strategy (Section 3.10).

## 3.9 An integrative framework: seven strategies and two rival hypotheses

This section gives each of the seven strategies and two rival hypotheses a theoretical grounding, the conditions the literature predicts and first case evidence. The evidence is descriptive and dated (case files to November 2026); it illustrates predictions and does not test them. Abbreviations: F Figma, C Canva, AE Adobe Express, Gr Grammarly (within Superhuman), Ga Gamma (AI-native benchmark); case-file identifiers are in brackets and refer to the dated registers of moves in the case files, which list their primary sources. "Strong" and "weak" are case-file codings of prominence, not performance judgments.

### 3.9.1 The strategies in one table

| Strategy | Core theory and key references | Predicted conditions | Evidence in the cases |
|---|---|---|---|
| **S1 Own agent in the product** | Servitization: value flat or negative until services are a substantial share of sales (Fang et al., 2008; Baines et al., 2009; Oliva & Kallenberg, 2003). Automation-augmentation paradox (Raisch & Krakowski, 2021, general); delegation (Fügener et al., 2022); design as decision making (Verganti et al., 2020); make, borrow or buy (Capron & Mitchell, 2009) | Structured artifact allowing multi-step edits; general assistant threatens the core task (Noy & Zhang, 2023); resources to bear a flat phase; supplier dependence and inference cost favour first-party models | F strong, recent: agent GA and credit-consuming 6 Oct 2026, own post-trained model [F32, F35]. C strong, late agency: Design Model, AI 2.0, drafts for review [CV-17, CV-27]. AE beta since Oct 2025 [AE-12, AE-31]. Gr rising agency, Go 1.0 [GR-29]. Ga native, priced by work [GA-15, GA-16]. Counter: Make Designs withdrawn [F05] |
| **S2 Used by external agents** | Boundary resources and securing (Ghazawneh & Henfridsson, 2013; Eaton et al., 2015); access versus control (Boudreau, 2010; Parker & Van Alstyne, 2018); appropriability (Huang et al., 2013); owner entry and envelopment (Zhu & Liu, 2018; Eisenmann et al., 2011); API growth (Benzell et al., 2024) | Gain from access; control kept through account, seat or plan; artifact-specific assets; weaker downstream assets mean wider opening; free entry only with a paying follow-on | F strong: MCP tied to paid seat, plan rate limits, metered generation [F10, F25, F39]. C strong: first design connector, plan-dependent access [CV-14, CV-22]. AE broadest: free entry, metered generation [AE-07, AE-15]. Gr weak: Docs and Mail MCP on paid plans [GR-25, GR-28]. Ga strong: all plans from Oct 2026 [GA-08, GA-17] |
| **S3 Hosting third-party agents** | Controlling versus enabling (Hagiu & Wright, 2019); first-party seeding (Hagiu & Spulber, 2013); governance and generativity (Wareham et al., 2014; Cennamo & Santaló, 2019) | Installed base and surface outsiders lack; third-party know-how decisive; curation capacity | Gr strong: agent store with first-party agents, SDK in private beta [GR-19, GR-33]. F, C, AE weak: plugins and add-ons, not agents [F17, CV-02, AE-14]. Ga partner agent in another store [GA-09] |
| **S4 Serving proprietary context** | Complementary assets (Teece, 1986; Tripsas, 1997; Rothaermel, 2001; Teece, 2018; all general except Rothaermel); data advantage only under conditions (Hagiu & Wright, 2023; Casado & Lauten, 2019); switching costs (Klemperer, 1995, general) | Assets agents need but cannot generate; specialised; imitable core feature; serving does not erase lock-in faster than it builds distribution | F strong: design systems, Specs and Guidelines [F25, F34]. C strong, rationed: Brand Kits in assistants, capacity cut [CV-21, CV-23]. AE weak [AE-12]. Gr present, mainly for own agents [GR-08, GR-11]. Ga weak [GA-15]. Counter: a lab reads the same assets [F27] |
| **S5 Cost-driven hybrid monetization** | Marginal-cost premise (Goldfarb & Tucker, 2019; Bakos & Brynjolfsson, 1999); three-part tariffs and flat-rate bias (Sundararajan, 2004; Lambrecht & Skiera, 2006); ticking meter (Balasubramanian et al., 2015); freemium (Shi et al., 2019; Lambrecht & Misra, 2017) | Variable, heavy-tailed AI cost; seat kept as anchor; large unsubsidised free base rations earlier; credit rates track cost | F strong: capped credits per seat, margin 92% to 82% [F23, F31]. C strong: free AI cut, growth target cut, price reversal [CV-31, CV-35]. AE strong at parent: credits since 2023 [AE-04, AE-23]. Gr prompt caps, soft limits [GR-02, GR-29]. Ga credits from the start [GA-04] |
| **S6 Expanding scope** | Bundling (Bakos & Brynjolfsson, 1999; Nalebuff, 2004, general); envelopment (Eisenmann et al., 2011); scope economies (Teece, 1980, general; Tanriverdi & Venkatraman, 2005); feature fatigue (Thompson et al., 2005) | Low marginal cost (weakened by inference); shared users and assets; value moving to the adjacent layer; envelopment threat | F strong: code, sites, media [F08, F09, F30]. C strong: Grow, Code, then restructuring [CV-18, CV-40]. AE bundled into Acrobat Studio, unstable [AE-10]. Gr suite via Coda, Mail [GR-11, GR-17]. Ga graphics [GA-11] |
| **S7 Acquiring AI-native firms** | Technology acquisitions (Ahuja & Katila, 2001); integration versus autonomy (Puranam & Srikanth, 2007; Puranam et al., 2006, general); dual business models (Markides & Charitou, 2004, general); acqui-hires (Coyle & Polsky, 2013); killer acquisitions (Cunningham et al., 2021); adding a business model (Kim & Min, 2015) | Wide capability gap, speed, cash; small early targets; distinct target model calls for separation; talent the aim | F small, integrated, two products closed [F07, F30]. C frequent, mixed modes [CV-08, CV-26]. AE none at Express level. Gr five deals in 21 months, many targets pre-AI [GR-11, GR-27]. Ga reported only [GA-13]. Pre-AI precedent: Adobe and Figma |
| **R-outcome** | Outcome models as business model innovation (Sjödin et al., 2020); effort, output, outcome typology (Bain & Company, 2026) | Observable, attributable, contractible outcome; bearable risk; shared data | Absent in all five. Gr measures outcomes but charges per seat [GR-10]. Ga prices by work done [GA-15] |
| **R-governance** | Organisational AI governance (Mäntymäki et al., 2022); accountability assets (Hydari & Muzaffar, 2026b); copyright risk (Samuelson, 2023) | Accountable buyer (enterprise, education); credible provenance; not yet a regulatory baseline | Gr strongest: Authorship, GPTZero [GR-09, GR-27]. AE: commercially safe Firefly [AE-03]. C: Shield, creator fund [CV-03]. F: enterprise add-on [F37]. Ga none. Counter: Expert Review withdrawn [GR-23] |

### 3.9.2 Reading across the strategies

*A portfolio, not a menu.* Complementary assets (S4) make a broader bundle valuable (S6) and are what a partner or acquirer wants (S7); the agent (S1) needs context (S4) to differ from a general assistant; first-party models turn on make, borrow or buy, as Canva's mix of acquisition, in-house models and a frontier-lab partnership shows; governance protects the asset base and the enterprise segment. No firm uses one strategy: Figma combines S2 and S4 around a paid seat, Canva four strategies around a free base, Grammarly S3, S6 and S7 as a suite.

*The sequencing puzzle.* Adobe Express reached the GPT store in April 2024 while its own assistant is still in beta, and Figma exposed MCP in 2025 before its agent became generally available in 2026. Existing theory treats own agent and external access as separate lines of business. Envelopment suggests a reason to go outward first, since a vendor absent from the assistant risks being bypassed (Eisenmann et al., 2011), and appropriability suggests firms without large downstream assets gain most from access (Huang et al., 2013), but neither explains the order. A cost account is a hypothesis of this thesis: an own agent for a large free base is expensive (Section 3.7), so metered outward access is the cheaper route to intent.

*Terms differ and the literature does not say why.* Incumbents opened within two years on different terms: free entry with metered generation (Canva, Adobe Express, Gamma) against paid-plan or seat-anchored access (Grammarly, Figma). Platform theory gives necessary conditions, not a model of terms. A hypothesis consistent with the cases is that terms track an installed paid base the incumbent wants to protect from cannibalisation.

*Depth of change.* The course framework links target market (who), value proposition (what), firm structure (how) and economic model, and what matters is their fit (Parolini, 2021; Normann, 1977; Coda, 2012, general; Section 3.4). Fit theory implies that a change in one component is a patch and a business model change is a set of linked changes that must re-fit (Siggelkow, 2002; Demil & Lecocq, 2010, general), which servitization research also finds for outcome models (Sjödin et al., 2020). S1 mainly changes what, S2 and S3 change who and how, and S5 changes the economic model. The cases suggest the economic model moved first, through credits and caps, while the more consequential shifts in who and how are only beginning, consistent with incumbents' attachment to the existing model (Chesbrough, 2010, general; Cozzolino et al., 2018).

### 3.9.3 The rival hypotheses

*Outcome-based pricing* should fail in creation SaaS (Section 3.7): outputs are subjective, the three conditions are unmet, and outcome models are business model innovation, not price tags. The cases confirm its absence. A falsifier would be an agent product that sells finished campaigns or a measured result; the coding must record the meter type, because "outcome" is used loosely.

*Governance as a lever* is more defensible as a transitional lever, strongest where the buyer is accountable and exposed to the weakness of detection and to regulation that may make provenance a baseline (Section 3.8). It can also be a constraint, and no filing reports revenue from a governance feature.

### 3.9.4 What the framework asks of the cases

The framework yields testable expectations. S2 should coexist with S4 and S6 as a defence against envelopment, with terms that secure the seat or paid plan; S5 should follow cost; S3 should appear only where a distribution surface exists; S7 should split between integration and parallel operation by the target's maturity and user base; outcome pricing should stay absent; and governance should be strongest where the buyer is accountable.

## 3.10 Research gaps and positioning of the thesis

The same gaps recur across the stream reviews, which supports the claim that they are real. Every claim of absence rests on the search limits stated in Section 3.1 and should be repeated in Scopus or Web of Science before the thesis asserts it without qualification.

### 3.10.1 The recurring gaps

*Gap 1: creation incumbents under agentic AI, at the business model level.* Research on AI and business model innovation concerns providers, industrial firms and generative AI in general (Kanbach et al., 2023; Åström et al., 2022); the agentic papers are conceptual and mostly preprints (Najmaei & Sadeghinejad, 2026; Bohnsack & de Wet, 2025); the SaaSpocalypse debate concerns systems of record (Section 3.3); creativity research studies the individual user and competition decisions the pre-AI market (Section 3.8). A dated study of what creation incumbents actually changed is missing. This is the core gap.

*Gap 2: incumbents as complementors of AI assistants.* Studies of complementors in generative AI concern small builders (Heimburg et al., 2025, general), and owner-entry research concerns app stores, marketplaces and hardware (Zhu & Liu, 2018; Wen & Zhu, 2019; Foerderer et al., 2018). No work treats a firm with its own installed base that is both complement to an assistant and rival in producing the artifact, still less one that also hosts third-party agents.

*Gap 3: terms of access for agents.* Platforms block or degrade agent access, sometimes without disclosure (Pattison et al., 2026), and analyst commentary names contract terms for third-party agents as a risk (Swain & Gross, 2026, reporting Gartner). Platform theory offers the vocabulary of securing and resourcing (Ghazawneh & Henfridsson, 2013), but no source studies what vendors offer agents (free, plan-gated, metered, seat-anchored), how it changes and why, or who pays when an external agent does the work (Section 3.7.6). Consultancy advice is split: restrict "critical end points" in open-door workflows but "become the neutral agent platform" in battlegrounds (Crawford et al., 2025, pp. 24, 27). No study tests which creation incumbents followed which advice, and with what terms. A dated typology from primary documents is a contribution the cases make possible.

*Gap 4: generative versus agentic is untested.* The distinction is conceptual (Rothschild et al., 2025; Najmaei & Sadeghinejad, 2026), with no operational definition applicable to vendor moves (Section 3.2). The thesis codes the agency level of each move; whether agentic moves differ in business model consequences from generative ones is an empirical question the case record can inform.

*Gap 5: no theory of the artifact.* In a system of record the product is the record; in a creation tool it is an artifact an agent can make without the tool's interface (Section 3.3). Nothing tests whether the editable file acts as a complementary asset that keeps the interface alive when agents generate content. Complementary-asset theory (Teece, 1986) also does not address assets simultaneously served to rivals' agents and rationed to users, a tension that the headless argument sharpens (Hydari & Muzaffar, 2026a).

*Gap 6: outward access before the inward agent.* The order is observed in several cases (Section 3.9.2) and explained by none of the theories reviewed. The thesis can state and examine the cost and funnel explanations as propositions.

*Gap 7: the cost economics of AI in free tiers and credits.* Freemium theory assumes cheap free users (Section 3.7.3). No peer-reviewed study treats credits as an instrument, how rates are adjusted, or AI-era pricing at creation incumbents. A dated record of meter changes, coded by meter type, would be new.

*Gap 8: depth of change and governance.* Practitioner sources treat pricing change as the whole business model, and the line between a feature and a business model change is never operationalised (Sections 3.4 and 3.9). Governance is analysed as law and ethics rather than strategy, and variation across firms is uncompared.

### 3.10.2 Positioning of the thesis

The thesis answers these gaps in three ways. It is empirical and dated where most agentic work is conceptual: the case files record what Figma, Canva, Adobe Express, Grammarly and Gamma changed from 2022 to November 2026, with source levels and verification labels. It uses the course framework to distinguish a feature change from a business model change (linked changes in at least two components). And it organises the evidence by strategy, transferring theory from platforms, pricing, servitization, complementary assets and acquisitions, since no theory built for this setting exists. The contribution is a first structured description and a set of propositions, not a causal test.

Its limits are those of the evidence: public and partly self-reported case material, no separate AI revenue in disclosures, and a purposive set of five firms. It does not claim that strategies cause survival or growth; it shows which combinations incumbents choose, under which conditions and with which fit.

### 3.10.3 What the chapter implies for the research question

Creation incumbents face lower entry barriers for artifact production (Section 3.5), a new class of actors that use or replace their tools (Sections 3.2 and 3.6), and a cost structure no longer near zero at the margin (Section 3.7). Theory predicts responses along S1 to S7, with outcome pricing absent and governance a transitional lever. It cannot predict the combination, the terms of access or the order of moves, which the empirical chapters take up.

---

## References (part B)

Adner, R. (2017). Ecosystem as structure: An actionable construct for strategy. *Journal of Management, 43*(1), 39-58. https://doi.org/10.1177/0149206316678451

Adner, R., & Kapoor, R. (2010). Value creation in innovation ecosystems: How the structure of technological interdependence affects firm performance in new technology generations. *Strategic Management Journal, 31*(3), 306-333. https://doi.org/10.1002/smj.821

Adobe Inc. (2023, September 13). *All new, AI-powered Creative Cloud release and pricing update*. Adobe Blog. https://blog.adobe.com/en/publish/2023/09/13/ai-creative-cloud-release-pricing-update

Adobe Inc. (2026a). *Form 10-K for the fiscal year ended 28 November 2025*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/796343/000079634326000003/adbe-20251128.htm

Adobe Inc. (2026b, August 6). *Introducing Adobe in ChatGPT: Create, edit, get work done, all in ChatGPT*. Adobe Blog. https://blog.adobe.com/en/publish/2026/08/06/introducing-adobe-chatgpt-create-edit-get-work-done-all-in-chatgpt

Ahuja, G., & Katila, R. (2001). Technological acquisitions and the innovation performance of acquiring firms: A longitudinal study. *Strategic Management Journal, 22*(3), 197-220. https://doi.org/10.1002/smj.157

Åström, J., Reim, W., & Parida, V. (2022). Value creation and value capture for AI business model innovation: A three-phase process framework. *Review of Managerial Science, 16*(7), 2111-2133. https://doi.org/10.1007/s11846-022-00521-z

Azoulay, P., Krieger, J. L., & Nagaraj, A. (2025). Old moats for new models: Openness, control, and competition in generative artificial intelligence. *Entrepreneurship and Innovation Policy and the Economy, 4*, 7-46. https://doi.org/10.1086/732852

Bain & Company. (2025). *Per-seat software pricing isn't dead, but new models are gaining steam* [Bain Brief, 9 October 2025]. https://www.bain.com/insights/per-seat-software-pricing-isnt-dead-but-new-models-are-gaining-steam/

Bain & Company. (2026). *AI pricing: A reality check on effort, usage, and outcomes* [Bain Brief, 10 August 2026]. https://www.bain.com/insights/ai-pricing-a-reality-check-on-effort-usage-and-outcomes/

Baines, T. S., Lightfoot, H. W., Benedettini, O., & Kay, J. M. (2009). The servitization of manufacturing: A review of literature and reflection on future challenges. *Journal of Manufacturing Technology Management, 20*(5), 547-567. https://doi.org/10.1108/17410380910960984

Bakos, Y., & Brynjolfsson, E. (1999). Bundling information goods: Pricing, profits, and efficiency. *Management Science, 45*(12), 1613-1630. https://doi.org/10.1287/mnsc.45.12.1613

Bakos, Y., & Brynjolfsson, E. (2000). Bundling and competition on the Internet. *Marketing Science, 19*(1), 63-82. https://doi.org/10.1287/mksc.19.1.63.15182

Balasubramanian, S., Bhattacharya, S., & Krishnan, V. V. (2015). Pricing information goods: A strategic analysis of the selling and pay-per-use mechanisms. *Marketing Science, 34*(2), 218-234. https://doi.org/10.1287/mksc.2014.0894

Benlian, A., Hilkert, D., & Hess, T. (2015). How open is this platform? The meaning and measurement of platform openness from the complementors' perspective. *Journal of Information Technology, 30*(3), 209-228. https://doi.org/10.1057/jit.2015.6

Benzell, S. G., Hersh, J., & Van Alstyne, M. (2024). How APIs create growth by inverting the firm. *Management Science, 70*(10), 7120-7141. https://doi.org/10.1287/mnsc.2023.4968

Bessemer Venture Partners. (2025). *The state of AI 2025*. BVP Atlas. https://www.bvp.com/atlas/the-state-of-ai-2025

Bohnsack, R., & de Wet, M. (2025). *AI is the strategy: From agentic AI to autonomous business models onto strategy in the age of AI* (arXiv:2506.17339). arXiv. https://arxiv.org/abs/2506.17339

Boston Consulting Group. (2025, August 13). *Rethinking B2B software pricing in the agentic AI era*. https://www.bcg.com/publications/2025/rethinking-b2b-software-pricing-in-the-era-of-ai

Boudreau, K. J. (2010). Open platform strategies and innovation: Granting access vs. devolving control. *Management Science, 56*(10), 1849-1872. https://doi.org/10.1287/mnsc.1100.1215

Brynjolfsson, E., Li, D., & Raymond, L. (2025). Generative AI at work. *Quarterly Journal of Economics, 140*(2), 889-942. https://doi.org/10.1093/qje/qjae044

Capron, L., & Mitchell, W. (2009). Selection capability: How capability gaps and internal social frictions affect internal and external strategic renewal. *Organization Science, 20*(2), 294-312. https://doi.org/10.1287/orsc.1070.0328

Casado, M., & Bornstein, M. (2020, February 16). *The new business of AI (and how it's different from traditional software)*. Andreessen Horowitz. https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/

Casado, M., & Lauten, P. (2019, May 9). *The empty promise of data moats*. Andreessen Horowitz. https://a16z.com/the-empty-promise-of-data-moats/

Cennamo, C., Ozalp, H., & Kretschmer, T. (2018). Platform architecture and quality trade-offs of multihoming complements. *Information Systems Research, 29*(2), 461-478. https://doi.org/10.1287/isre.2018.0779

Cennamo, C., & Santaló, J. (2019). Generativity tension and value creation in platform ecosystems. *Organization Science, 30*(3), 617-641. https://doi.org/10.1287/orsc.2018.1270

Chesbrough, H. (2010). Business model innovation: Opportunities and barriers. *Long Range Planning, 43*(2-3), 354-363. https://doi.org/10.1016/j.lrp.2009.07.010

Coalition for Content Provenance and Authenticity. (2025). *C2PA Content Credentials explained: Addressing common questions and updates* [White paper]. https://c2pa.org/wp-content/uploads/sites/33/2025/10/content_credentials_wp_0925.pdf

Coda, V. (2012). The evaluation of the entrepreneurial formula. *European Management Review, 9*(2), 63-74. https://doi.org/10.1111/j.1740-4762.2012.01030.x

Competition and Markets Authority. (2023a, November 28). *Notice of provisional findings made under Rule 11.3: Anticipated acquisition by Adobe Inc. of Figma, Inc.* https://assets.publishing.service.gov.uk/media/6565c1c3888c06000dfa7df6/Notice_of_Provisional_Findings_pdfa1.pdf

Competition and Markets Authority. (2023b, November 28). *Adobe / Figma deal could harm UK digital design sector* [Press release]. GOV.UK. https://www.gov.uk/government/news/adobe-figma-deal-could-harm-uk-digital-design-sector

Cottier, B., Snodin, B., Owen, D., & Adamczewski, T. (2025, March 12). *LLM inference prices have fallen rapidly but unequally across tasks* [Data insight]. Epoch AI. https://epoch.ai/data-insights/ai-inference-price-trends

Cox, S. R., Djernaes, H. B., & van Berkel, N. (2025). *Beyond productivity: Rethinking the impact of creativity support tools* (arXiv:2505.01601). arXiv. https://arxiv.org/abs/2505.01601

Coyle, J. F., & Polsky, G. D. (2013). Acqui-hiring. *Duke Law Journal, 63*(2), 281-346. https://doi.org/10.2139/ssrn.2040924

Cozzolino, A., Verona, G., & Rothaermel, F. (2018). Unpacking the disruption process: New technology, business models, and incumbent adaptation. *Journal of Management Studies, 55*(7), 1166-1202. https://doi.org/10.1111/joms.12352

Cunningham, C., Ederer, F., & Ma, S. (2021). Killer acquisitions. *Journal of Political Economy, 129*(3), 649-702. https://doi.org/10.1086/712506

Crawford, D., McLaughlin, C., Doddapaneni, P., & Fiore, G. (2025). *Will agentic AI disrupt SaaS?* In *Technology report 2025*. Bain & Company. https://www.bain.com/insights/will-agentic-ai-disrupt-saas-technology-report-2025/

Dell'Acqua, F., McFowland, E., III, Mollick, E. R., Lifshitz-Assaf, H., Kellogg, K., Rajendran, S., Krayer, L., Candelon, F., & Lakhani, K. R. (2023). *Navigating the jagged technological frontier: Field experimental evidence of the effects of AI on knowledge worker productivity and quality* (Harvard Business School Working Paper). SSRN. https://doi.org/10.2139/ssrn.4573321

Demil, B., & Lecocq, X. (2010). Business model evolution: In search of dynamic consistency. *Long Range Planning, 43*(2-3), 227-246. https://doi.org/10.1016/j.lrp.2010.02.004

Doshi, A. R., & Hauser, O. P. (2024). Generative AI enhances individual creativity but reduces the collective diversity of novel content. *Science Advances, 10*(28), Article eadn5290. https://doi.org/10.1126/sciadv.adn5290

Eaton, B., Elaluf-Calderwood, S., Sørensen, C., & Yoo, Y. (2015). Distributed tuning of boundary resources: The case of Apple's iOS service system. *MIS Quarterly, 39*(1), 217-243. https://doi.org/10.25300/misq/2015/39.1.10

Eisenmann, T., Parker, G., & Van Alstyne, M. (2011). Platform envelopment. *Strategic Management Journal, 32*(12), 1270-1285. https://doi.org/10.1002/smj.935

Erten, T., & Wang, S. (2026, August 27). *You are not a model. Don't price per token.* Andreessen Horowitz. https://a16z.com/you-are-not-a-model-dont-price-per-token/

European Commission. (2023a, November 17). *Commission sends Adobe Statement of Objections over proposed acquisition of Figma* (Press release IP/23/5778; Case M.11033). https://ec.europa.eu/commission/presscorner/api/files/document/print/en/ip_23_5778/IP_23_5778_EN.pdf

European Commission, DG Competition. (2023b, February 14). *Case M.11033 Adobe / Figma: Decision accepting an Article 22 referral request* (C(2023) 1198 final, public version). https://ec.europa.eu/competition/mergers/cases1/202410/M_11033_9944328_7654_3.pdf

European Union. (2024). Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (AI Act), Article 50.

Fang, E., Palmatier, R. W., & Steenkamp, J.-B. E. M. (2008). Effect of service transition strategies on firm value. *Journal of Marketing, 72*(5), 1-14. https://doi.org/10.1509/jmkg.72.5.001

Figma. (2025, December 9). *Updates to AI credits in Figma*. Figma Blog. https://www.figma.com/blog/updates-to-ai-credits-in-figma/

Figma. (2026a). *Write to canvas* [Help center article, created 5 August 2026]. https://help.figma.com/hc/en-us/articles/42495251338775-Write-to-canvas

Figma. (2026b). *AI credit updates FAQ* [Help center article, created 10 August 2026]. https://help.figma.com/hc/en-us/articles/42614902212887-AI-credit-updates-FAQ

Figma, Inc. (2025). *Final prospectus (Form 424B4), initial public offering of Class A common stock*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm

Figma, Inc. (2026a). *Form 10-K for the fiscal year ended 31 December 2025*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm

Figma, Inc. (2026b). *Q3 2026 results press release* [Exhibit to Form 8-K, 4 November 2026]. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828026070133/q326pressrelease.htm

Figma, Inc. (2026c). *Form 10-Q for the quarterly period ended 30 September 2026*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828026070272/fig-20260930.htm

Foerderer, J., Kude, T., Mithas, S., & Heinzl, A. (2018). Does platform owner's entry crowd out innovation? Evidence from Google Photos. *Information Systems Research, 29*(2), 444-460. https://doi.org/10.1287/isre.2018.0787

Frich, J., MacDonald Vermeulen, L., Remy, C., Biskjaer, M. M., & Dalsgaard, P. (2019). Mapping the landscape of creativity support tools in HCI. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (Paper 389, pp. 1-18). ACM. https://doi.org/10.1145/3290605.3300619

Fügener, A., Grahl, J., Gupta, A., & Ketter, W. (2022). Cognitive challenges in human-artificial intelligence collaboration: Investigating the path toward productive delegation. *Information Systems Research, 33*(2), 678-696. https://doi.org/10.1287/isre.2021.1079

Futurum Research. (2026, August 17). *The pricing split: Why core software and AI can't share one commercial model* (Document AIOKK202608). https://futurumgroup.com/wp-content/uploads/2026/08/The-Pricing-Split-Why-Core-Software-and-AI-Cant-Share-One-Commercial-Model_AIOKK202608.pdf

Gabaix, X., & Laibson, D. (2005). *Shrouded attributes, consumer myopia, and information suppression in competitive markets* (NBER Working Paper No. 11755). National Bureau of Economic Research. https://doi.org/10.3386/w11755

Gamma. (2026). *Gamma developer changelog*. https://developers.gamma.app/reference/changelog

Gawer, A., & Cusumano, M. A. (2014). Industry platforms and ecosystem innovation. *Journal of Product Innovation Management, 31*(3), 417-433. https://doi.org/10.1111/jpim.12105

Gawer, A., & Henderson, R. (2007). Platform owner entry and innovation in complementary markets: Evidence from Intel. *Journal of Economics & Management Strategy, 16*(1), 1-34. https://doi.org/10.1111/j.1530-9134.2007.00130.x

Ghazawneh, A., & Henfridsson, O. (2013). Balancing platform control and external contribution in third-party development: The boundary resources model. *Information Systems Journal, 23*(2), 173-192. https://doi.org/10.1111/j.1365-2575.2012.00406.x

Gold, J. (2023, June 8). Adobe offers copyright indemnification for Firefly AI-based image app users. *Computerworld*. https://www.computerworld.com/article/1628682/adobe-offers-copyright-indemnification-for-firefly-ai-based-image-app-users.html

Goldfarb, A., & Tucker, C. (2019). Digital economics. *Journal of Economic Literature, 57*(1), 3-43. https://doi.org/10.1257/jel.20171452

Grubb, M. D., & Osborne, M. (2015). Cellular service demand: Biased beliefs, learning, and bill shock. *American Economic Review, 105*(1), 234-271. https://doi.org/10.1257/aer.20120283

Gu, X., Kannan, P. K., & Ma, L. (2018). Selling the premium in freemium. *Journal of Marketing, 82*(6), 10-27. https://doi.org/10.1177/0022242918807170

Gundlach, H., Lynch, J., Mertens, M., & Thompson, N. (2025). *The price of progress: Price performance and the future of AI* (arXiv:2511.23455). arXiv. https://arxiv.org/abs/2511.23455

Guo, H., Hao, Y., Zhang, Y., Xu, M., Lv, P., Chen, J., & Cheng, X. (2025). *A measurement study of Model Context Protocol ecosystem* (arXiv:2509.25292). arXiv. https://arxiv.org/abs/2509.25292

Gupta, P. (2026). *From tokens to credits to outcomes: Pricing AI across models, applications, and cloud platforms* (arXiv:2610.30701). arXiv. https://arxiv.org/abs/2610.30701

Hagiu, A., & Spulber, D. (2013). First-party content and coordination in two-sided markets. *Management Science, 59*(4), 933-949. https://doi.org/10.1287/mnsc.1120.1577

Hagiu, A., & Wright, J. (2019). Controlling vs. enabling. *Management Science, 65*(2), 577-595. https://doi.org/10.1287/mnsc.2017.2956

Hagiu, A., & Wright, J. (2023). Data-enabled learning, network effects, and competitive advantage. *RAND Journal of Economics, 54*(4), 638-667. https://doi.org/10.1111/1756-2171.12453

Hagiu, A., & Wright, J. (2024). Marketplace leakage. *Management Science, 70*(3), 1529-1553. https://doi.org/10.1287/mnsc.2023.4757

Hagiu, A., & Wright, J. (2025). *Platform traps* (SSRN working paper). https://doi.org/10.2139/ssrn.5203113

Heimburg, V., Schreieck, M., & Wiesche, M. (2025). Complementor value co-creation in generative AI platform ecosystems. *Journal of Management Information Systems, 42*(2), 491-528. https://doi.org/10.1080/07421222.2025.2487310

Henderson, P., Li, X., Jurafsky, D., Hashimoto, T., Lemley, M. A., & Liang, P. (2023). *Foundation models and fair use* (SSRN 4404340). https://doi.org/10.2139/ssrn.4404340

Hinterhuber, A. (2008). Customer value-based pricing strategies: Why companies resist. *Journal of Business Strategy, 29*(4), 41-50. https://doi.org/10.1108/02756660810887079

Hou, X., Zhao, Y., Wang, S., & Wang, H. (2026). Model Context Protocol (MCP): Landscape, security threats, and future research directions. *ACM Transactions on Software Engineering and Methodology, 35*(10), 1-37. https://doi.org/10.1145/3796519

HubSpot. (2026). *HubSpot's Customer Agent and Prospecting Agent: Now you pay when the task is complete* [Newsroom, updated 13 April 2026]. https://www.hubspot.com/company-news/hubspots-customer-agent-and-prospecting-agent-now-you

Huang, P., Ceccagnoli, M., Forman, C., & Wu, D. J. (2013). Appropriability mechanisms and the platform partnership decision: Evidence from enterprise software. *Management Science, 59*(1), 102-121. https://doi.org/10.1287/mnsc.1120.1618

Hui, X., Reshef, O., & Zhou, L. (2024). The short-term effects of generative artificial intelligence on employment: Evidence from an online labor market. *Organization Science, 35*(6), 1977-1989. https://doi.org/10.1287/orsc.2023.18441

Hwang, A. H.-C. (2022). Too late to be creative? AI-empowered tools in creative processes. In *CHI Conference on Human Factors in Computing Systems Extended Abstracts (CHI EA '22)* (pp. 1-9). ACM. https://doi.org/10.1145/3491101.3503549

Hydari, M. Z., & Muzaffar, F. (2026a). *Going headless? On the boundaries of vertical AI firms* (arXiv:2605.17812). arXiv. https://arxiv.org/abs/2605.17812

Hydari, M. Z., & Muzaffar, F. (2026b). *Redrawing the AI map: A theory of accountability boundaries in agentic ecosystems* (arXiv:2605.23179). arXiv. https://arxiv.org/abs/2605.23179

ICONIQ Growth. (2026). *2026 State of AI report: The builder's economy*. https://iconiq.com/growth/reports/state-of-ai-2026

Intercom. (2026). *Fin AI Agent overview and pricing* [Help article 8205718]. https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-overview

Jacobides, M. G., Brusoni, S., & Candelon, F. (2021). The evolutionary dynamics of the artificial intelligence ecosystem. *Strategy Science, 6*(4), 412-435. https://doi.org/10.1287/stsc.2021.0148

Jacobides, M. G., Cennamo, C., & Gawer, A. (2018). Towards a theory of ecosystems. *Strategic Management Journal, 39*(8), 2255-2276. https://doi.org/10.1002/smj.2904

Jiang, H. H., Brown, L., Cheng, J., Khan, M., Gupta, A., Workman, D., Hanna, A., Flowers, J., & Gebru, T. (2023). AI art and its impact on artists. In *Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society (AIES '23)* (pp. 363-374). ACM. https://doi.org/10.1145/3600211.3604681

Kanbach, D., Heiduk, L., Blueher, G., Schreiter, M., & Lahmann, A. (2023). The GenAI is out of the bottle: Generative artificial intelligence from a business model innovation perspective. *Review of Managerial Science, 18*(4), 1189-1220. https://doi.org/10.1007/s11846-023-00696-z

Kapoor, S., Stroebl, B., Siegel, Z. S., Nadgir, N., & Narayanan, A. (2024). *AI agents that matter* (arXiv:2407.01502). arXiv. https://arxiv.org/abs/2407.01502

Karhu, K., Gustafsson, R., & Lyytinen, K. (2018). Exploiting and defending open digital platforms with boundary resources: Android's five platform forks. *Information Systems Research, 29*(2), 479-497. https://doi.org/10.1287/isre.2018.0786

Khan, A., Shokrizadeh, A., & Cheng, J. (2025). *Beyond automation: How UI/UX designers perceive AI as a creative partner in the divergent thinking stages* (arXiv:2501.18778). arXiv. https://arxiv.org/abs/2501.18778

Kim, S., & Min, S. (2015). Business model innovation performance: When does adding a new business model benefit an incumbent? *Strategic Entrepreneurship Journal, 9*(1), 34-57. https://doi.org/10.1002/sej.1193

Klemperer, P. (1995). Competition when consumers have switching costs: An overview with applications to industrial organization, macroeconomics, and international trade. *Review of Economic Studies, 62*(4), 515-539. https://doi.org/10.2307/2298075

Ko, A. J., Abraham, R., Beckwith, L., Blackwell, A., Burnett, M., Erwig, M., Scaffidi, C., Lawrance, J., Lieberman, H., Myers, B., Rosson, M. B., Rothermel, G., Shaw, M., & Wiedenbeck, S. (2011). The state of the art in end-user software engineering. *ACM Computing Surveys, 43*(3), Article 21. https://doi.org/10.1145/1922649.1922658

Lambrecht, A., & Misra, K. (2017). Fee or free: When should firms charge for online content? *Management Science, 63*(4), 1150-1165. https://doi.org/10.1287/mnsc.2015.2383

Lambrecht, A., & Skiera, B. (2006). Paying too much and being happy about it: Existence, causes, and consequences of tariff-choice biases. *Journal of Marketing Research, 43*(2), 212-223. https://doi.org/10.1509/jmkr.43.2.212

Li, J., Cao, H., Lin, L., Hou, Y., Zhu, R., & El Ali, A. (2024). User experience design professionals' perceptions of generative artificial intelligence. In *Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems*. ACM. https://doi.org/10.1145/3613904.3642114

Li, Z., & Agarwal, A. (2017). Platform integration and demand spillovers in complementary markets: Evidence from Facebook's integration of Instagram. *Management Science, 63*(10), 3438-3458. https://doi.org/10.1287/mnsc.2016.2502

Liang, W., Yuksekgonul, M., Mao, Y., Wu, E., & Zou, J. (2023). GPT detectors are biased against non-native English writers. *Patterns, 4*(7), Article 100779. https://doi.org/10.1016/j.patter.2023.100779

Lin, J., Zhu, J., Zhou, Z., Xi, Y., Liu, W., Yu, Y., & Zhang, W. (2025). *Superplatforms have to attack AI agents* (arXiv:2505.17861). arXiv. https://arxiv.org/abs/2505.17861

Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., & Petroni, F. (2024). Lost in the middle: How language models use long contexts. *Transactions of the Association for Computational Linguistics, 12*, 157-173. https://doi.org/10.1162/tacl_a_00638

Ma, D., & Seidmann, A. (2015). Analyzing software as a service with per-transaction charges. *Information Systems Research, 26*(2), 360-378. https://doi.org/10.1287/isre.2015.0571

Mann, T. (2024, July 3). Figma pulls AI design tool for seemingly plagiarizing Apple's Weather app. *The Register*. https://www.theregister.com/2024/07/03/figma_plagiarizes_apple/

Mäntymäki, M., Minkkinen, M., Birkstedt, T., & Viljanen, M. (2022). Defining organizational AI governance. *AI and Ethics, 2*(4), 603-609. https://doi.org/10.1007/s43681-022-00143-x

Markides, C., & Charitou, C. D. (2004). Competing with dual business models: A contingency approach. *Academy of Management Perspectives, 18*(3), 22-36. https://doi.org/10.5465/ame.2004.14776164

Mayer, A.-S., Kostis, A., Strich, F., & Holmström, J. (2025). Shifting dynamics: How generative AI as a boundary resource reshapes digital platform governance. *Journal of Management Information Systems, 42*(2), 400-430. https://doi.org/10.1080/07421222.2025.2487312

McCloskey, T. (2025, September 16). *Grammarly Authorship is now available in Canvas LMS*. Grammarly Blog. https://www.grammarly.com/blog/writing/grammarly-authorship-is-now-available-in-canvas-lms

Metronome. (2025, September 22). *The rise of AI credits: Why cost-plus credit models work (until they don't)* [Blog post]. https://metronome.com/blog/the-rise-of-ai-credits-why-cost-plus-credit-models-work-until-t

Metronome. (2026). *2026 trends from cataloging 50 AI pricing models* [Blog post]. https://metronome.com/blog/2026-trends-from-cataloging-50-ai-pricing-models

Microsoft. (2026). *Usage-based billing and cost management for Copilot Credits*. Microsoft Learn. https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-credits-overview

Miller, R. (2023, June 26). Adobe indemnity clause designed to ease enterprise fears about AI-generated art. *TechCrunch*. https://techcrunch.com/2023/06/26/adobe-indemnity-clause-designed-to-ease-enterprise-fears-about-ai-generated-art/

Najmaei, A., & Sadeghinejad, Z. (2026). *From instrument to economic actor: Generative and agentic AI as a new logic of business model innovation* [Preprint]. Preprints.org. https://doi.org/10.20944/preprints202609.0835.v1

Nalebuff, B. (2004). Bundling as an entry barrier. *Quarterly Journal of Economics, 119*(1), 159-187. https://doi.org/10.1162/003355304772839551

Niculescu, M. F., & Wu, D. J. (2014). Economics of free under perpetual licensing: Implications for the software industry. *Information Systems Research, 25*(1), 173-199. https://doi.org/10.1287/isre.2013.0508

Normann, R. (1977). *Management for growth*. Wiley.

Notion Labs. (2026). *Notion credits* [Help center]. https://www.notion.com/help/custom-agent-pricing

Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. *Science, 381*(6654), 187-192. https://doi.org/10.1126/science.adh2586

Oliva, R., & Kallenberg, R. (2003). Managing the transition from products to services. *International Journal of Service Industry Management, 14*(2), 160-172. https://doi.org/10.1108/09564230310474138

Osmonbekov, M. (2026, August 12). AI was supposed to power Canva's next act. It also exposed software's most expensive problem. *Fortune*. https://www.fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/

Parker, G., & Van Alstyne, M. (2005). Two-sided network effects: A theory of information product design. *Management Science, 51*(10), 1494-1504. https://doi.org/10.1287/mnsc.1050.0400

Parker, G., & Van Alstyne, M. (2018). Innovation, openness, and platform control. *Management Science, 64*(7), 3015-3032. https://doi.org/10.1287/mnsc.2017.2757

Parolini, C. (2021). *Business planning: Turning an idea into a reality*. Cinzia Parolini. ISBN 9791220083751. https://iris.unimore.it/handle/11380/1295186

Pattison, C., Boulos, M., Kolt, N., Li, C., Piccardi, T., & Lazar, S. (2026). *The agentic web requires new normative infrastructure* (arXiv:2606.10711). arXiv. https://arxiv.org/abs/2606.10711

PricingSaaS. (2026). *Canva pricing page changes, September to November 2026* [Pricing tracker]. https://pricingsaas.com/companies/canva

Poyar, K. (2025). *2025 state of B2B monetization* [Survey report]. Growth Unhinged. https://www.growthunhinged.com/p/2025-state-of-b2b-monetization

Poyar, K. (2026). *The state of B2B monetization in 2026* [Survey report]. Growth Unhinged. https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026

Prelec, D., & Loewenstein, G. (1998). The red and the black: Mental accounting of savings and debt. *Marketing Science, 17*(1), 4-28. https://doi.org/10.1287/mksc.17.1.4

Puranam, P., Singh, H., & Zollo, M. (2006). Organizing for innovation: Managing the coordination-autonomy dilemma in technology acquisitions. *Academy of Management Journal, 49*(2), 263-280. https://doi.org/10.5465/amj.2006.20786062

Puranam, P., & Srikanth, K. (2007). What they know vs. what they do: How acquirers leverage technology acquisitions. *Strategic Management Journal, 28*(8), 805-825. https://doi.org/10.1002/smj.608

Raisch, S., & Krakowski, S. (2021). Artificial intelligence and management: The automation-augmentation paradox. *Academy of Management Review, 46*(1). https://doi.org/10.5465/2018.0072

Rietveld, J., & Schilling, M. A. (2021). Platform competition: A systematic and interdisciplinary review of the literature. *Journal of Management, 47*(6), 1528-1563. https://doi.org/10.1177/0149206320969791

Rietveld, J., Schilling, M. A., & Bellavitis, C. (2019). Platform strategy: Managing ecosystem value through selective promotion of complements. *Organization Science, 30*(6), 1232-1251. https://doi.org/10.1287/orsc.2019.1290

Rondina, M., Vetrò, A., De Martin, J. C., & Bargis, M. (2026). AI agents and the progressive intermediation between users and online services: A critical review. *Future Internet, 18*(8), Article 419. https://doi.org/10.3390/fi18080419

Rothaermel, F. T. (2001). Incumbent's advantage through exploiting complementary assets via interfirm cooperation. *Strategic Management Journal, 22*(6-7), 687-699. https://doi.org/10.1002/smj.180

Rothschild, D. M., Mobius, M., Hofman, J. M., Dillon, E. W., Goldstein, D. G., Immorlica, N., Jaffe, S., Lucier, B., Slivkins, A., & Vogel, M. (2025). *The agentic economy* (arXiv:2505.15799). arXiv. https://arxiv.org/abs/2505.15799

Sadasivan, V. S., Kumar, A., Balasubramanian, S., Wang, W., & Feizi, S. (2023). *Can AI-generated text be reliably detected?* (arXiv:2303.11156). arXiv. https://arxiv.org/abs/2303.11156

Salesforce. (2026). *Agentforce pricing*. https://www.salesforce.com/agentforce/pricing/

Saltan, A., & Smolander, K. (2021). Bridging the state-of-the-art and the state-of-the-practice of SaaS pricing: A multivocal literature review. *Information and Software Technology, 133*, Article 106510. https://doi.org/10.1016/j.infsof.2021.106510

Samuelson, P. (2023). Generative AI meets copyright. *Science, 381*(6654), 158-161. https://doi.org/10.1126/science.adi0656

Seamans, R., & Zhu, F. (2014). Responses to entry in multi-sided markets: The impact of Craigslist on local newspapers. *Management Science, 60*(2), 476-493. https://doi.org/10.1287/mnsc.2013.1785

Sharwood, S. (2023, October 5). Canva creates $200M kitty to pay creators for stuff they feed its design-bot. *The Register*. https://www.theregister.com/2023/10/05/canva_ai_fund/

Shi, Z., Zhang, K., & Srinivasan, K. (2019). Freemium as an optimal strategy for market dominant firms. *Marketing Science, 38*(1), 150-169. https://doi.org/10.1287/mksc.2018.1109

Shapiro, C., & Varian, H. R. (1999). *Information rules: A strategic guide to the network economy*. Harvard Business School Press.

Shneiderman, B. (2007). Creativity support tools: Accelerating discovery and innovation. *Communications of the ACM, 50*(12), 20-32. https://doi.org/10.1145/1323688.1323689

Siggelkow, N. (2002). Evolution toward fit. *Administrative Science Quarterly, 47*(1), 125-159. https://doi.org/10.2307/3094893

Simon-Kucher. (2026). *A how-to guide to monetizing GenAI and AI agents* [White paper]. https://www.simon-kucher.com/sites/default/files/perspectives-files/2026_WP_Monetizing%20GenAI%20and%20AI%20Agents_Simon-Kucher.pdf

Sjödin, D., Parida, V., Jovanovic, M., & Visnjic, I. (2020). Value creation and value capture alignment in business model innovation: A process view on outcome-based business models. *Journal of Product Innovation Management, 37*(2), 158-183. https://doi.org/10.1111/jpim.12516

Startup Daily. (2026, August 5). *[Report on Canva's Q2 2026 shareholder update]*. https://www.startupdaily.net/?p=139035

Stewart, R., Anise, O., Hogan, A., & Griffin, A. (2026). *Does AI save time on product design? A randomized controlled experiment of AI prompt-to-design workflows* (arXiv:2609.26725). arXiv. https://arxiv.org/abs/2609.26725

Sundararajan, A. (2004). Nonlinear pricing of information goods. *Management Science, 50*(12), 1660-1673. https://doi.org/10.1287/mnsc.1040.0291

Swain, G., & Gross, P. (2026). Agentic AI puts $234B in enterprise SaaS spending at risk, Gartner says. *CIO.com*; *CIO Dive*. https://www.cio.com/article/4192242/agentic-ai-puts-234b-in-enterprise-saas-spending-at-risk-gartner-says.html

Tanriverdi, H., & Venkatraman, N. (2005). Knowledge relatedness and the performance of multibusiness firms. *Strategic Management Journal, 26*(2), 97-119. https://doi.org/10.1002/smj.435

Taylor, B. (2026, March 10). *Bret Taylor of Sierra on AI agents, outcome-based pricing, and the OpenAI board* [Podcast episode]. Cheeky Pint. https://sierra.ai/resources/podcasts/bret-taylor-of-sierra-on-ai-agents-outcome-based-pricing-and-the-openai-board

Teece, D. J. (1980). Economies of scope and the scope of the enterprise. *Journal of Economic Behavior & Organization, 1*(3), 223-247. https://doi.org/10.1016/0167-2681(80)90002-5

Teece, D. J. (1986). Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy. *Research Policy, 15*(6), 285-305. https://doi.org/10.1016/0048-7333(86)90027-2

Teece, D. J. (2018). Profiting from innovation in the digital economy: Enabling technologies, standards, and licensing models in the wireless world. *Research Policy, 47*(8), 1367-1387. https://doi.org/10.1016/j.respol.2017.01.015

Thacker, J. (2024, June 20). Adobe updates its Terms of Use following artist backlash. *CG Channel*. https://www.cgchannel.com/2024/06/adobe-updates-its-terms-of-use-following-artist-backlash

Thompson, D. V., Hamilton, R. W., & Rust, R. T. (2005). Feature fatigue: When product capabilities become too much of a good thing. *Journal of Marketing Research, 42*(4), 431-442. https://doi.org/10.1509/jmkr.2005.42.4.431

Tripsas, M. (1997). Unraveling the process of creative destruction: Complementary assets and incumbent survival in the typesetter industry. *Strategic Management Journal, 18*(S1), 119-142. https://doi.org/10.1002/(SICI)1097-0266(199707)18:1+<119::AID-SMJ921>3.3.CO;2-S

U.S. Copyright Office. (2025). *Copyright and artificial intelligence, Part 3: Generative AI training* (Pre-publication version). https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf

Verganti, R., Vendraminelli, L., & Iansiti, M. (2020). Innovation and design in the age of artificial intelligence. *Journal of Product Innovation Management, 37*(3), 212-227. https://doi.org/10.1111/jpim.12523

Wareham, J., Fox, P. B., & Cano Giner, J. L. (2014). Technology ecosystem governance. *Organization Science, 25*(4), 1195-1215. https://doi.org/10.1287/orsc.2014.0895

Wen, W., & Zhu, F. (2019). Threat of platform-owner entry and complementor responses: Evidence from the mobile app market. *Strategic Management Journal, 40*(9), 1336-1367. https://doi.org/10.1002/smj.3031

Zendesk. (2024, August 28). *Zendesk first in CX industry to offer outcome-based pricing for AI agents* [Newsroom]. https://www.zendesk.com/newsroom/articles/zendesk-outcome-based-pricing/

Zeff, M. (2025, July 7). Cursor apologizes for unclear pricing changes that upset users. *TechCrunch*. https://techcrunch.com/2025/07/07/cursor-apologizes-for-unclear-pricing-changes-that-upset-users/

Zhou, E., & Lee, D. (2024). Generative artificial intelligence, human creativity, and art. *PNAS Nexus, 3*(3), Article pgae052. https://doi.org/10.1093/pnasnexus/pgae052

Zhu, F., & Liu, Q. (2018). Competing with complementors: An empirical look at Amazon.com. *Strategic Management Journal, 39*(10), 2618-2642. https://doi.org/10.1002/smj.2932

---

## Verification notes (part B)

Works cited only for their general argument (register `cite_status = read_before_citing`, no V-open on the specific content): ST005 Raisch & Krakowski (2021); ST018 Teece (1986); ST019 Teece (2018); ST020 Tripsas (1997); ST030 Klemperer (1995); ST037 Nalebuff (2004); ST039 Teece (1980); ST041 Gawer & Henderson (2007); ST052 Puranam, Singh & Zollo (2006); ST071 Markides & Charitou (2004); PL034 Heimburg et al. (2025); PL035 Mayer et al. (2025); PL036 Azoulay et al. (2025); PL055 Lin et al. (2025); PR010 Gabaix & Laibson (2005); PR019 Saltan & Smolander (2021); CR021 Jiang et al. (2023); CR017 Dell'Acqua et al. (2023); CR045 Liang et al. (2023); BM005 Demil & Lecocq (2010); BM013 Chesbrough (2010); BM085 Coda (2012); SP011 (Swain & Gross, 2026; Gartner report itself not opened). Check each against the full text before submission.

Works with metadata-only verification that carry a specific finding in the text (ok status, but read the abstract or full text): PL026 Benzell et al. (2024, difference-in-differences result); PL019 Foerderer et al. (2018, 9.6%); PL017 Zhu & Liu (2018); ST043 Wen & Zhu (2019); PL009 Boudreau (2010, relative size of the access and control effects); PL031 Hagiu & Wright (2025, working paper, "platform traps"); CR014 Zhou & Lee (2024, 25% and 50%); CR011 Noy & Zhang (2023); CR016 Brynjolfsson et al. (2025); CR018 Hui et al. (2024); CR008 Li et al. (2024, interview sample); AG070 Stewart et al. (2026, about 20%; small preprint); PR032 Gundlach et al. (2025) and PR033 Cottier et al. (2025, ranges).

Grey and company sources whose figures come from the stream reviews or case files and must be re-opened in the primary page before being quoted: PR048 Bain (2025) and PR049 Bain (2026) (shares, three conditions, typology); PR050 BCG (2025) (relayed a16z buyer survey); PR051 Simon-Kucher (2026) (41/30/23/7%); PR052 Futurum (2026); PR044/PR045 Poyar; PR043 ICONIQ (2026) (margins; the 2025 ICONIQ figures reached the stream only through a SaaStr summary and are not used); PR040 Bessemer (2025); PR039 Casado & Bornstein (2020); PR046/PR047 Metronome; PR053 Erten & Wang (2026) ("currency, not a value metric"); PR054-PR056 Zendesk, Intercom, HubSpot (definitions of resolution); PR063 Taylor (2026) (episode summary page only).

Sources added from the earlier registers (revision): Shapiro & Varian (1999, LENS07; summary [M], cited for the general argument); Crawford et al. (2025, G01; quotes and pages 24, 27, 28 taken from grey_notes.md, to be rechecked against the PDF, whose printed pagination differs from the PDF pagination by two); Parolini (2021, FR01; content of the framework chapter not verified, cited for the course framework and cost-structure logic). Case facts now cite primary sources listed in the case files: Figma help center and 10-Q/press release (Figma, 2026a, 2026b; Figma, Inc., 2026b, 2026c; the 8% to 18% cost-of-revenue share is computed from the Q3 2024 and Q3 2026 figures in the case file and must be recomputed from the filings), Adobe blog (2026b), Startup Daily and PricingSaaS for Canva (secondary level C; titles are not given in the case file, so the reference entries carry bracketed descriptions and must be completed). The Canva shareholder letter itself was not seen. Strategy-by-case codings and identifiers in the table (F, CV, AE, GR, GA) refer to the dated move registers in `lavoro/casi/`; each row there lists its primary source.

Specific checks: (1) CR029 and CR031 were flagged as near-identical titles but are two different filings (Adobe 10-K, Figma 10-K) and are kept separate. (2) The Figma termination fee (USD 1.0 billion) is taken from the Figma prospectus entry (CR030) as recorded in the CR review; confirm the page. (3) Long URLs in the reference list were taken from the register; re-open them to confirm they still resolve. (4) The Cursor, Gold and Miller entries are press items with no DOI. (5) Frich et al. (2019), Ko et al. (2011), Jiang et al. (2023), Dell'Acqua et al. (2023) and Rothschild et al. (2025) are listed in the register with "et al."; the author lists in the reference list were completed from Crossref (Frich et al., Ko et al., Jiang et al., Dell'Acqua et al.) or left as "et al." (Lin et al., Rothschild et al.); complete the latter two from the arXiv pages. The initial of Kellogg in Dell'Acqua et al. is not given by Crossref. (6) Raisch & Krakowski (2021): volume and issue 46(1) are marked [M] in the register and pages are missing; verify. (7) Demil & Lecocq (2010) is confirmed by Crossref (Long Range Planning 43(2-3), 227-246) but the content check is still due. (8) Najmaei & Sadeghinejad (2026) is cited as the Preprints.org version (BM059, ok); the journal version (AG028, Big Data and Cognitive Computing 10(11), 360) is read_before_citing and should replace it once read. (9) Gupta (2026), arXiv:2610.30701: confirm the identifier. (10) EU AI Act Article 50 is cited only as a regulatory source of transparency obligations; the application date reached the stream only through law-firm summaries and is therefore not stated. (11) Hydari & Muzaffar (2026a, 2026b) and Pattison et al. (2026) are 2026 preprints; the quoted phrase from 2026a comes from the AG review and should be checked in the arXiv text.
