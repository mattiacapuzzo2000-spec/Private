# Chapter 3. Literature review: agentic AI and the evolution of SaaS business models

## 3.0 Purpose and structure of the chapter

This chapter reviews the literature needed to answer the research question of the thesis: how are creation-oriented productivity SaaS incumbents evolving their business models as agentic AI enables digital artifacts to be produced by AI agents, both inside their products and through external agents that use them? The question has three parts. SQ1 asks which roles incumbents take toward agents, on which access terms and when. SQ2 asks what changes in the business model (who is served, what is offered, how it is delivered and the economic model) and how deep the change is. SQ3 asks how value is captured, and at what cost of AI, when agents do the work. "Creation-oriented productivity SaaS" (creation SaaS below) denotes cloud-delivered software (SaaS in the sense of Mell & Grance, 2011, whatever its pricing) whose core job is to help a user produce an editable artifact such as a design, a deck, a document or a text; its products are called creation tools. The empirical cases are Figma, Canva, Adobe Express and Grammarly, with Gamma as an AI-native benchmark. The review is current to 14 November 2026.

The chapter proceeds in five steps. Sections 3.2 and 3.3 establish what agentic AI is and what the debate on the so-called SaaSpocalypse says about creation tools. Sections 3.4 and 3.5 supply the theories of business model adaptation, entry barriers and complementary assets. Sections 3.6 to 3.8 treat platforms and access terms, pricing and the cost of AI, and creation software. Section 3.9 integrates these into seven candidate strategies and two rival hypotheses, defined in Table 3.0 and each tied to one proposition (P1 to P9), and Section 3.10 states the gaps.

**Table 3.0. Candidate strategies and rival hypotheses**

| Label | Short name | Meaning |
|---|---|---|
| S1 | In-product agent | The incumbent builds its own agent inside the product |
| S2 | Access for external agents | The product is used by external agents (MCP servers, apps in assistants, APIs), on terms set by the incumbent |
| S3 | Hosting third-party agents | The incumbent runs a platform or agent store for other firms' agents |
| S4 | Context as asset | The incumbent serves proprietary context (brand kits, design systems, data) to agents |
| S5 | Hybrid monetisation | Cost-driven pricing: a seat anchor plus credits, with rationed free AI |
| S6 | Scope expansion | The incumbent widens its scope (code, marketing, suites) |
| S7 | AI-native acquisitions | The incumbent acquires AI-native companies, integrated or run in parallel |
| R-outcome | Outcome-based pricing | Rival hypothesis: charging for results rather than seats or effort |
| R-governance | Governance as a lever | Rival hypothesis: trust, provenance and responsible-AI positioning differentiate and can be monetised |

## 3.1 Scope and method of the review

The design is a multivocal literature review (Garousi et al., 2019). Peer-reviewed work, books, conference papers, preprints and working papers are combined with grey literature from recognised organisations (analyst, consultancy and investor reports, company disclosures and quality trade press), and each source is labelled by type. The choice follows from the subject. The debate on whether agents will displace SaaS began in December 2024 and became a market event in February 2026, so the peer-reviewed record is thin and much of the substantive argument sits in grey sources.

The review answers four questions. L1 asks how AI and agentic AI threaten or reshape SaaS business models (Sections 3.2 and 3.3). L2 asks which theories explain incumbent adaptation to technological discontinuities (Sections 3.4 and 3.5). L3 asks what is known about each strategy and rival hypothesis in Table 3.0 and how the five cases illustrate them (Sections 3.6 to 3.9). L4 asks where the gaps lie (Section 3.10). The searches were run in November 2026 with web search, the Crossref REST API, arXiv, RePEc and publisher and company pages; Scopus and Web of Science were not searched. Inclusion covered 2015 to 2026, plus foundational theory of any year (for example Teece, 1986); vendor marketing without data and unattributable items were excluded.

The retrieved corpus has 543 records. After de-duplication by DOI and normalised title it contains 503 distinct works: 234 peer-reviewed articles (46.5%), 18 books and 11 conference papers (together with the articles, 263 or 52.3% in the conventional scholarly record), 81 preprints or working papers (16.1%), 122 practitioner reports and essays (24.3%) and 37 company documents (7.4%). A few preprint and journal versions of the same study were merged where identified.

Three limits qualify what follows. First, evidence on agentic AI and SaaS rests largely on 2025 and 2026 preprints and on interested practitioners, so claims of absence in this chapter hold only within these searches and should be repeated in Scopus and Web of Science. Second, many of the strongest numbers are produced by firms that sell the remedy. Third, the case evidence comes from the thesis's case files, which record company documents (filings, help centres, press releases and blog posts) and are cited here as company sources. Verification caveats are collected in the Note on sources.

## 3.2 Generative and agentic AI

### 3.2.1 Definitions and levels of agency

The technical literature agrees that the move from generative to agentic AI is a move from producing content to taking actions with tools. Sapkota et al. (2026) treat generative AI as the precursor, AI agents as modular, tool-using and task-specific systems, and agentic AI as systems with multi-agent collaboration, task decomposition and persistent memory. For builders the working distinction is Anthropic's (2024a): workflows run a model through predefined code paths, whereas agents direct their own process and tool use.

Autonomy is better treated as a graded design decision than as a property of a model. Feng et al. (2025) define levels of autonomy by the role the user takes toward the agent. In information systems, Baird and Maruping (2021) argue that agentic IS artifacts are no longer passive tools awaiting use, so that use becomes delegation to and from the artifact, which is why an external agent operating a product differs from a person operating it. The concept remains contested. Abou Ali et al. (2025) warn against equating today's prompt-driven agents with the symbolic agents of the 1990s. No source operationalises the generative/agentic boundary at the level of a vendor's product. The thesis therefore codes in-product agency on a 0 to 3 scale, with Feng et al. (2025) as the nearest external reference; none of the autonomy papers has been tested on commercial productivity software.

### 3.2.2 Generative and agentic effects compared

The empirical record on generative AI at work is the strongest part of the literature and is peer-reviewed. Support agents became more productive with an assistant, most of all novices (Brynjolfsson et al., 2025); professional writers worked faster and produced higher-rated text (Noy & Zhang, 2023); and consultants gained inside, and lost outside, a "jagged" frontier (Dell'Acqua et al., 2026). For software vendors the implication is that generative AI lowers the skill barrier, so that the premise "anyone can now produce what used to require expertise" gains empirical support. These studies concern writing, support and consulting tasks, not creation software.

Conceptual work on the agentic phase is newer and unreviewed. Rothschild et al. (2025) argue that the deeper change comes when assistant agents and service agents transact with each other, and Bohnsack and de Wet (2025) that agentic AI can execute the core mechanisms of value creation, delivery and capture; neither offers a test.

Evidence for a shift to delegation comes mostly from model providers. Anthropic's usage data report that directive conversations rose from 27% to 39% and that automated use overtook augmentative use (Anthropic, 2025); this comes from a firm that competes with the cases and concerns coding more than creative work. Dating matters: a randomised trial found that early-2025 tools made experienced developers 19% slower (Becker et al., 2025), while the same lab's February 2026 update says that selection effects now prevent a clean estimate, though a speed-up is likely (Becker et al., 2026). No study compares the same firms before and after the agentic turn in business-model terms.

### 3.2.3 Agents as users, access terms and protocols

If agents act, they become users of software. Yang et al. (2024) argued that language-model agents are a new category of end users and showed that an interface designed for them improved results on software-engineering tasks.

Access terms are where this becomes strategic. Pattison et al. (2026) document that platforms block or degrade agent access, often without notice, and argue for a normative infrastructure that separates malicious bots from delegated agents. Two examples come from grey sources: law-firm commentary on Salesforce's 2025 changes to Slack API terms, which tightened how third-party tools can access workspace data (Hunton Andrews Kurth LLP, 2025), and press coverage of Amazon's litigation against Perplexity's shopping agent, in which a March 2026 injunction (Decrypt, 2026) was later reported as reversed on appeal on the reasoning that the users, not Perplexity, accessed the platform. The conceptual core of the "headless" argument, discussed in Section 3.6.3, comes from Hydari and Muzaffar (2026a, 2026b) and Klotz (2026). All three are 2026 preprints on enterprise or vertical software, and none addresses tools whose product is an editable artifact that the agent generates and the human may still edit in the product.

Protocols standardise this access. Anthropic open-sourced the Model Context Protocol (MCP) in November 2024 (Anthropic, 2024b), OpenAI's Apps SDK lets third-party applications run inside ChatGPT and builds on MCP (OpenAI, 2025), which positions the assistant as a distribution channel. Academic work on MCP is empirical and technical and qualifies the vendor narrative: a study of 1,899 open-source servers found general vulnerabilities in 7.2% and MCP-specific tool poisoning in 5.5% (Hasan et al., 2025), and a crawl of six marketplaces found more than half of listed projects invalid or of low value (Guo et al., 2025). Neutral standards lower the lock-in risk of making a product callable, whoever runs the agent client controls discovery, and openness enlarges the security surface, which gives governance a rationale. No academic study of vendor strategy around MCP servers or apps in assistants was found.

### 3.2.4 Adoption evidence and its limits

Surveys show interest well ahead of scale (McKinsey & Company, 2025; Deloitte, 2025; Stanford HAI, 2026), and Gartner's (2025) forecast that over 40% of agentic AI projects will be cancelled by the end of 2027 has a thinly documented method.

Benchmarks diverge by task type. On realistic business tasks agents remain weak: about 58% success on single-turn and 35% on multi-turn tasks in a CRM benchmark from Salesforce's research lab (Huang et al., 2025) and a best automation rate of 2.5% on real freelance projects (Mazeika et al., 2025), whereas GDPval reports frontier models approaching industry experts in deliverable quality on tasks written by professionals (Patwardhan et al., 2025). The divergence is explained largely by task definition (a single deliverable versus an end-to-end project), and agent evaluations neglect cost (Kapoor et al., 2024). The agentic phase should therefore be defined by what vendors build and expose, not by what customers have scaled.

### 3.2.5 Implications for the thesis

The literature supports treating generative and agentic phases as different in kind, but on conceptual and vendor evidence, and supplies a vocabulary (levels of autonomy, delegation, headless, accountability assets) for SQ1 and SQ2. It informs the in-product agent (S1, P1) through autonomy scales and the mixed productivity record, access and hosting (S2 and S3, P2 and P3) through protocols, access terms and security, context as asset (S4, P4) through accountability assets, and hybrid monetisation (S5, P5) through the cost point. The main gap is that the literature is silent on creation tools: no independent source measures how often users let an external agent produce an artifact instead of using the product.

## 3.3 The "SaaSpocalypse" debate

### 3.3.1 What was said, and by whom

The vocabulary of the debate rests on three episodes repeated more often than checked. First, Satya Nadella's remarks on a podcast in December 2024, widely quoted as saying that business applications are essentially databases with business logic, that the logic would move to agents, and that back ends would then be replaced (Fisher, 2024; OfficeChai, 2024). In the same answer he asked why Excel would be needed, the only explicit CEO remark about a creation tool found in the corpus. Second, Klarna: its chief executive was reported to have shut down Salesforce and later clarified that the firm had consolidated data onto an internal stack and had not replaced SaaS with a language model (Bort, 2025; diginomica, 2025). Third, the coinage: Bloomberg's report of 3 February 2026 quotes a trader on the Jefferies equity desk, "We call it the 'SaaSpocalypse'", after the software index had fallen 15% in January, its largest monthly decline since October 2008 (Bloomberg, 2026). The label describes a trading condition, not an analysis.

### 3.3.2 A typology of narratives

The positions in the corpus sort into six narratives (Table 3.1). They are not exclusive, since several actors hold two.

**Table 3.1. Narratives in the SaaSpocalypse debate**

| Code | Narrative and core claim | Examples of holders | Evidence |
|---|---|---|---|
| N1 | Replacement: applications are replaced by an agent logic tier or in-house builds | Fisher (2024); Bessemer Venture Partners (2025); Saha (2026) | Statements, conceptual papers, anecdotes; no measured replacement |
| N2 | Seat cannibalisation: agents reduce paid users | Swain & Gross (2026); Maltiel & Sandberg (2025); Sarracino & Vickery (2026); EY (2026) | Forecasts, expectation surveys |
| N3 | Intermediation: agents become the front end and applications become APIs | Amble (2026); Leggett (2026); Klein & Wieczorek (2026) | Essays, one audit |
| N4 | Commoditisation: cheap creation lets entrants flood the market | Ball (2026); Saha (2026) | Argument, expectations |
| N5 | Evolution: the core persists and incumbents embed agents | CRN Asia (2025); Swain (2026); Moshkovich (2026); Rothschild et al. (2026) | Earnings, buyer surveys |
| N6 | Rebundling: value migrates to finished work or outcomes | Chen & Gupta (2024); Tagliapietra Sanabria (2026) | Market-size arguments |

The strong claims (N1) have the weakest evidence and are mostly held by actors who sell agents, platforms, compute or venture portfolios.

### 3.3.3 What the evidence supports

The sell-off is an established event with contested magnitude and cause. Tallies are not comparable (more than USD 1 trillion in seven days, Leggett, 2026; USD 300 billion in a single day, Schuler, 2026), the latter arguing that margin compression and platform fatigue predate the Anthropic launches that triggered the move, and consultancy commentary describes much of the decline as since reversed (Pineda et al., 2026). No causal test was found.

Fundamentals through mid-2026 favour evolution over collapse for enterprise vendors. Bain reports that installed bases have largely held, with average gross retention around 90% or better (Lipman et al., 2026a), and SAP and ServiceNow reported rising cloud and subscription growth (Swain, 2026). The counter-signals concern the quality of growth: Bain reports that growth has roughly halved and net revenue retention has fallen about nine points since 2021 (Lipman et al., 2026b). On pricing the sources converge on a hybrid interim state in which per-seat pricing is not dead and consumption or outcome elements are added (Maltiel & Sandberg, 2025; Pineda et al., 2026; ICONIQ Growth, 2026; Section 3.7.2). Buyer evidence points two ways: few buyers expect seat counts to fall faster than before (Eisenberg et al., 2026), yet 82% of AI-investing executives expect per-seat pricing to become less relevant in their industry (EY, 2026), which is compatible with stable seat counts and a shifting pricing logic. The best-supported reading is repricing and slower growth before substitution.

### 3.3.4 Convergence, divergence and interest

Every major analyst and consultancy in the corpus rejects the simple death thesis and accepts pressure on seats. Bain calls "seats are dead" an overstatement (Maltiel & Sandberg, 2025), Forrester qualifies its alarming headline in the body text (Leggett, 2026), and Gartner's headline of USD 234 billion of enterprise SaaS spending at risk falls short of total collapse (Swain & Gross, 2026). They diverge on which layer is safe: Bain says systems of record are protected by switching costs, criticality and compliance (Lipman et al., 2026a), whereas Bessemer and a16z argue that the moat of a system of record was the human interface and the cost of migration, both of which AI erodes (Bessemer Venture Partners, 2025; Amble, 2026; Ahern et al., 2026). They diverge on who captures value: venture sources see the next large companies as sellers of work (Chen & Gupta, 2024), while Forrester warns that consumption pricing of AI may backfire if customers build agents on platforms they already license (Forrester, 2026). No source is disinterested: consultancies sell transformation advice and venture firms hold AI-native stakes.

The academic contribution is thin, conceptual and largely unreviewed. Rothschild et al. (2026) argue that large effects need complementary investments in trust, machine-legible data and new workflows, and Sahni (2026) audits the homepages of B2B software vendors for readability by AI assistants (llms.txt, crawler rules), not for integrations. A general review of generative AI and business models (Li et al., 2026, a California Management Review Insight) is the only business-school review found, but it does not address SaaS. The lenses of this chapter (complementary assets, business model innovation, disruption theory) have not been applied to the debate in any paper retrieved.

### 3.3.5 The blind spot on creation tools

The debate is overwhelmingly about systems of record: CRM, ERP, human-capital management, IT service management and support. Creation tools enter it in three ways. CEO remarks pose the agent as replacement of the tool or as its user (Nadella's question about Excel; OfficeChai, 2024). Lab products hit listed vendors: Figma's shares fell by about 7% on the day Anthropic launched Claude Design (trade reports recorded in the case files), yet trade coverage reports that the company raised its full-year outlook weeks later (PYMNTS & The Next Web, 2026), so market reaction and reported fundamentals diverged, as in enterprise names. And an audit finds productivity software least readable by agents (Sahni, 2026).

Three inferences, to be tested and not taken as findings, follow from what is missing. First, the debate has no theory of the artifact. In a system of record the product is a record of truth that agents must read and write; in a creation tool the product is an artifact that an agent can produce without the tool's interface, and value lies in the editor, collaboration, templates, brand assets and formats. The a16z argument that the interface was the product (Amble, 2026) therefore applies with more force to creation tools, and the data-gravity defence with less. Second, seat logic differs: falling production cost may increase the number of creators and artifacts (Canva reports that users of its AI create three times as many designs, a company claim; Osmonbekov, 2026), and no source weighs this against seat compression. Third, the cost-of-AI thread is strongest where generation is the product: Fortune links Canva's cut of its 2026 growth outlook by a third to heavy reliance on expensive frontier models (Osmonbekov, 2026), and Bain states that the compute behind every query pushes revenue models from seats toward usage and outcomes (Lipman et al., 2026b).

### 3.3.6 Implications for the thesis

The debate supports four propositions. AI has lowered the barrier to producing software and artifacts, and incumbents' accumulated assets are the defensible part (Ball, 2026; Moshkovich, 2026; P4). Seat-only pricing is weakening, with hybrids as the interim state (S5, P5). The cost of AI is a first-order variable for creation SaaS. And access terms and context are contested resources (S2 and S4, P2 and P4). The strong replacement claim for creation tools is unsupported by any measurement, so the debate is best read as a repricing of expectations; it never separates a change of pricing from a change of business model (SQ2).

## 3.4 Business models and their adaptation to technological discontinuities

### 3.4.1 The business model concept and the entrepreneurial formula

The literature agrees that the business model is a useful unit of analysis but not on its definition (Zott et al., 2011; Massa et al., 2017; Wirtz et al., 2016). Three families are visible: the architecture of value creation, delivery and capture (Teece, 2010; Chesbrough & Rosenbloom, 2002); an activity system (reviewed by Zott et al., 2011); and a set of managerial choices and their consequences (Casadesus-Masanell & Ricart, 2010). The course framework (WHO, WHAT, HOW and the ECONOMIC MODEL; Parolini, 2021) belongs to the first family. Through the entrepreneurial formula (Coda, 2012) and the business idea of Normann (1977), it adds an explicit requirement that the components be consistent with one another and with the environment.

Fit has been treated in three ways. Siggelkow (2002) models fit as a developmental process in which elements of an activity system are thickened, patched, coasted or trimmed. This serves SQ2, because the depth of a change can be coded as thickening (more of the same, such as an AI feature inside a seat model) or patching (an element the old model lacked, such as metered credits or a channel for third-party agents). Demil and Lecocq (2010) argue that consistency must be dynamic, with temporary inconsistency a normal part of evolution, which suggests that one component, probably the economic model, moves first and the others follow. What is missing is an empirical account of how consistency is restored when one component changes sharply, as marginal production cost does when inference replaces human effort.

### 3.4.2 Business model innovation and adaptation in incumbents

Foss and Saebi (2017) review the field and conclude that it lacks construct clarity and an account of antecedents, contingencies and outcomes.

The incumbent-specific work is the most useful, and it conflicts on the question of separation. Kim and Min (2015) find that incumbents adding a new business model perform better when the model is added early where assets are complementary and in an autonomous unit where assets conflict, which bears on acquisitions (S7). Khanagha et al. (2014) follow a large ICT firm moving to a cloud model, the closest analogue to SaaS facing agents, and find that simple structural separation does not work and that the firm oscillates between separated and integrated modes. The two may be reconciled by the nature of the target: separation suits a target whose model conflicts with the seat model, and fails where its technology is the incumbent's core, which for AI-native targets is doubtful. Cozzolino et al. (2018) show a further route, opening a closed model into an open, platform-based one (S2 and S3). All are single cases or small samples, and none examines a discontinuity in which the technology performs the customer's own work.

### 3.4.3 Incumbent response to technological discontinuities

The classical results are established and contested at once. Tushman and Anderson (1986) distinguish competence-enhancing from competence-destroying discontinuities, and Henderson and Clark (1990) show that incumbents fail at architectural innovation because their information filters follow the old architecture. Tripsas (1997) shows that incumbents holding specialised complementary assets can survive, in the typesetter industry, the closest design-industry analogue, and Tripsas and Gavetti (2000) that managerial cognition can prevent their use. Ansari et al. (2016) reverse the perspective: a disruptor may need incumbents' support, which produces coopetition.

Applied to agentic AI, the theory yields two readings that the literature cannot resolve and the case evidence in Section 3.9 can partly discriminate. If agents destroy the skill barrier on which creation tools were built, the discontinuity is competence-destroying. If agents need the editable file, the design system and the brand kit, it is competence-enhancing for those who hold these assets (Tushman & Anderson, 1986; Tripsas, 1997). Evidence that incumbents serve context to agents on their own terms (S4) would favour the second reading.

### 3.4.4 Business model innovation with AI and the SaaS literature

The AI business model literature is large but mostly conceptual, based on providers and industrial firms, and pre-agentic. Kanbach et al. (2024) and Jorzik et al. (2024) review generative and AI-driven business model innovation, and Verganti et al. (2020) argue that AI moves design decisions from humans to machines, which bears directly on creation tools. The one source that theorises agentic AI as an economic actor in business model change is Najmaei and Sadeghinejad (2026), a preprint without a test, and Tagliapietra Sanabria (2026) argues from a single-author working paper that value migrates to whoever guarantees outcomes. The peer-reviewed evidence on outcome-based models comes from manufacturing and shows that success needs an agreed distribution of value and a measurable outcome (Sjödin et al., 2020; Section 3.7.5), conditions creation SaaS rarely meets.

The freemium literature (Holm & Günzel-Jensen, 2017) predates variable AI cost and assumes a negligible marginal cost of the free tier. No source models inference cost, and product-led growth, seat expansion and net revenue retention are absent from the peer-reviewed sources found.

### 3.4.5 Implications for the thesis

The business model literature gives the thesis its unit of analysis and its test of depth. SQ2 can be operationalised with the course framework and the thickening-versus-patching distinction (Siggelkow, 2002): a change counts as a business model change when it patches or re-fits at least two components, and as a feature change when it thickens one. Demil and Lecocq (2010) predict that the economic model changes first. The theory informs the strategies unevenly: architectural innovation and managerial cognition bear on the in-product agent (S1, P1; Henderson & Clark, 1990; Tripsas & Gavetti, 2000), the opening of a closed model and coopetition on access and hosting (S2 and S3, P2 and P3; Cozzolino et al., 2018; Ansari et al., 2016), and the asset-conflict rule on acquisitions (S7, P7; Kim & Min, 2015). No empirical study was found of how creation SaaS incumbents change business models when agents produce the artifacts, nor of the external agent as a customer-side actor or of access terms as a business model component (Section 3.10).

## 3.5 Entry barriers, new entrants and the incumbent's complementary assets

### 3.5.1 What the theory of entry barriers says

The classical account starts with Bain (1956): incumbents earn rents when entrants face scale economies, product differentiation, absolute cost advantages and capital requirements. Caves and Porter (1977) show that barriers also protect strategic groups as mobility barriers. The course adds complementors as a sixth force through the value net, in which one player can be both complementor and competitor (Brandenburger & Nalebuff, 1996), and through the idea that a player's share of value reflects its added value (Brandenburger & Stuart, 1996). Switching costs and network effects (Klemperer, 1995; Farrell & Klemperer, 2007) explain why an installed base can protect a product against a better entrant.

Generative AI acts mainly on two barrier families. It lowers the capital and skill needed to build, and some switching costs, since an agent can convert files and learn an interface for the user. It acts weakly on differentiation, distribution, network effects and customer-specific assets. The digital-economics baseline holds that replication and distribution costs fall toward zero (Goldfarb & Tucker, 2019); generative AI adds a positive marginal cost per use, which the baseline does not cover. This mapping is the review's synthesis, not a finding of any single source.

### 3.5.2 Evidence on entry, and its limits

The newest empirical work is not yet peer-reviewed. A preprint on Product Hunt launches reports that generative AI fuels solo entrepreneurship while teams still lead at the top (Kim et al., 2026). Such evidence is consistent with "more and smaller entrants" and not yet with "more successful entrants". Practitioner data describe the revenue side but are self-reported or investor-sourced and cover survivors: Bessemer stresses fragile retention and thin margins (Bessemer Venture Partners, 2025).

Demand-side logic holds that customer value, not supply cost, decides advantage (Adner & Zemsky, 2006). The review's synthesis is that the cost of a first working version has fallen sharply for small, well-specified artifacts, while the cost of running, securing and supporting a product at scale has fallen much less. The SaaSpocalypse argument needs the distinction between building and operating.

### 3.5.3 Disruption, AI-native entrants and incumbents

For AI, Agrawal et al. (2022) offer the most useful split: point solutions that fit inside an existing workflow favour incumbents, whereas system solutions that redesign decisions favour entrants, because incumbents resist system change. For this thesis the question is whether an agent is a point solution (an in-product agent, S1) or a system solution (an external agent that does the whole job and uses the incumbent as a tool, S2).

The most careful academic statement argues that old moats, resting on complementary assets such as compute, data and distribution, persist in generative AI (Azoulay et al., 2025). Data advantage holds only under conditions (Hagiu & Wright, 2023), and a widely read investor essay argues that most claimed data network effects are scale effects with falling marginal value (Casado & Lauten, 2019). What matters for the cases is therefore which assets are specialised, not merely voluminous.

### 3.5.4 Model labs entering applications

Model labs are not classical entrants: they are upstream suppliers and owners of distribution through chat interfaces. Investor commentary describes a "wrapper" problem in which model providers move up the stack with first-party applications (Gupta & Garg, 2025). The theory of platform-owner entry and envelopment is reviewed in Section 3.6.5; here only the relations in the cases matter. These are not only hostile. When Anthropic launched Claude Design in April 2026 (VentureBeat, 2026), trade coverage presented Canva as the design layer inside it (The Next Web, 2026). Figma's quarterly filing adds a risk factor that model providers may offer competing products and intermediate end-user relationships (Figma, Inc., 2026b). This is coopetition in the sense of Brandenburger and Nalebuff (1996): Canva is at once a complementor, as the editing layer behind the agent, and a possible substitute. The added-value logic of Brandenburger and Stuart (1996) suggests that the lab keeps a partner only while the partner adds value the lab cannot cheaply replicate, which turns attention to the incumbent's assets.

### 3.5.5 Which incumbent assets should resist

The foundational reference is Teece (1986): who captures the returns from an innovation depends on appropriability, the dominant design and complementary assets (generic, specialised or co-specialised). Rothaermel (2001) shows incumbents exploiting complementary assets through cooperation with entrants. Combining these theories with the barrier mapping gives the following ranking, which is the review's own inference; no item is established empirically for creation SaaS.

Collaboration and shared libraries should resist best where use is multi-user, since network effects are not lowered (Farrell & Klemperer, 2007). Distribution and installed base should resist moderately, since they also help suite owners (Eisenmann et al., 2011). File formats and editable structure give medium protection, since agents convert files but editable layers have value (Klemperer, 1995). Templates, brand kits and design systems are customer-specific complementary assets, strongly protective if served to agents on the incumbent's terms (S4) and weakly if a lab can rebuild them from code and files. Model quality is a commodity input (Barney & Reeves, 2024), and the pre-AI skill barrier is the weakest asset, since general assistants offer the same promise (Adner & Zemsky, 2006).

Brand kits and design systems cut both ways: an agent can read and in principle reconstruct them, so the terms on which incumbents serve context become the battleground, and the central risk of going headless is that serving the asset outward erodes the lock-in it creates (Hydari & Muzaffar, 2026a). The mapping implies relatively strong resistance for Figma, whose structured files and multi-user canvas bring network effects, exposure for Canva and Grammarly, whose original promise was the skill barrier, and better resistance for Adobe as a bundle owner.

### 3.5.6 Implications for the thesis

The entry literature supports three propositions: build cost and skill barriers have fallen for small artifacts; the durable assets of an incumbent are complementary and customer-specific, not technological; and model labs behave as platform owners entering complementors' markets, in a relationship of coopetition. It challenges the naive readings that data alone is a moat and that software is now cheap to build in general. For the strategies, it implies that an in-product agent defends without by itself creating a moat (S1, P1), that access for external agents carries coopetition and envelopment risk (S2, P2), that context is the core of the defence but also leaks the asset (S4, P4), that hybrid monetisation breaks the near-zero marginal cost assumption (S5, P5), that scope expansion meets mobility barriers (S6, P6; Caves & Porter, 1977) and that acquisitions fit the absorption of disruptors (S7, P7; Ansari et al., 2016).

## 3.6 Platforms, openness and complementors in the age of AI assistants

Access for external agents (S2) and hosting third-party agents (S3) are, in theoretical terms, platform strategies. General assistants such as ChatGPT, Claude, Copilot and Gemini now sit between the user and the tool and accept third-party apps and connectors built on shared protocols (Section 3.2.3). The platform literature predates such assistants, so this section asks which of its mechanisms transfer.

### 3.6.1 Platforms, ecosystems and the incumbent's double position

Gawer and Cusumano (2014) separate internal platforms, from which a firm derives its own products, from external platforms that serve as a foundation for outside innovators; ecosystems emerge where modularity lets interdependent firms coordinate without hierarchy (Jacobides et al., 2018).

For creation software these vocabularies give a diagnostic with two positions. In S2 the incumbent is a complementor on somebody else's external platform: the assistant owns the user relationship and the incumbent supplies a function or an artifact through it. In S3 the incumbent tries to be the platform owner for a small ecosystem of agents. One firm can hold both positions, as Grammarly does. Research on such dual positions is thin.

### 3.6.2 Openness and control as a calibrated choice

Openness is not a switch. Parker and Van Alstyne (2018) show formally that closing a platform raises the sponsor's ability to charge for access while opening it raises developers' incentive to build, so the optimum is interior. Boudreau (2010) separates two meanings of "open", granting access to outside developers and devolving control to them, and finds that access had a much larger effect on development activity than devolved control. Most of the benefit of opening therefore comes from access, and the sponsor can keep control of the core. Hagiu and Wright (2019) add a decision rule: control a decision when you can monitor and decide well, enable an agent when its investment is decisive and hard to observe. The in-product agent (S1) is then control, hosting (S3) is enabling and suits cases where third-party domain knowledge is decisive, and in S2 the incumbent barely chooses, because the assistant holds the user relationship. Figma, Canva, Adobe Express and Gamma grant access to artifact operations (read, generate, edit) while keeping the editor, file format and account, and Grammarly does so only through Docs and Mail (Superhuman, 2026a, 2026b); this is the regime predicted to capture most of the value of opening.

### 3.6.3 Boundary resources and the terms of access

The boundary-resources model is the strongest lens for the 2024 to 2026 events. Boundary resources are the interfaces through which an owner enables third-party contribution (resourcing) while keeping control (securing) (Ghazawneh & Henfridsson, 2013); MCP servers, apps in assistants, write-to-canvas tools and generation APIs qualify. Three predictions follow. Securing accompanies resourcing from the start, so plan restrictions, rate limits, credits and sign-in are expected with the opening: Figma ties write access to the paid seat (Figma Help Center, 2026b), Adobe requires sign-in to unlock generation in assistants (Adobe Inc., 2026b), and Gamma meters generations arriving through MCP like API calls (Gamma, 2026). Boundary resources are tuned in a distributed way by owner and complementors (Eaton et al., 2015), so changing terms are to be expected, as in Figma's credit updates of December 2025 and Gamma's API keys for every plan in October 2026.

The closest published statement of the thesis puzzle holds that ceding the interface to general agents ("going headless") "is correct for some firms and destructive for others" (Hydari & Muzaffar, 2026a). It is a preprint on vertical AI firms and supplies a question rather than a test (Section 3.9.2).

Practitioner advice on the same question conflicts. Bain's quadrant model tells incumbents in "open door" workflows (low user automation, high AI penetration), where third-party agents "can hook into exposed APIs and siphon value", to "launch their own agents fast, deepen partner integrations to raise switching costs, and limit access to critical end points" (Crawford et al., 2025, p. 24). The same report tells incumbents in "battlegrounds" to "pick a lane: Either become the neutral agent platform or supply the unique data that powers it" (p. 27). The advice to restrict access is therefore specific to one quadrant, and the report gives creation tools, which sit toward high penetration, no single prescription. It is a consultancy report without a test, but it frames S1 to S3 as alternatives that depend on the workflow.

### 3.6.4 Why open: growth, free access and leakage

Evidence that openness pays is limited. Public firms adopting public APIs grew faster, interpreted as an "inverted firm" capturing part of third-party surplus (Benzell et al., 2024), but the study predates language-model agents. Free access is rational when another side pays (Parker & Van Alstyne, 2005): free entry through an assistant makes sense where the assistant is a demand channel for a paying side, while generation, where the incumbent's own cost arises, is metered (Section 3.7). Leakage qualifies this. Sellers discovered on a platform may transact off it to avoid fees (Hagiu & Wright, 2024), and the hand-off from assistant to native editor, which Canva calls the "final mile", is leakage the incumbent wants and the assistant tolerates only while it charges no fee.

### 3.6.5 Complementors, owner entry and envelopment

If assistants are platforms, their owners can enter complementors' markets, and the evidence is mixed. Platform owners enter when complementors' markets are important and attractive, and show restraint so that complementors keep investing (Gawer & Henderson, 2007). Amazon enters product spaces that third-party sellers have proven successful and avoids those needing seller-specific investment (Zhu & Liu, 2018). Android developers facing a threat of Google's entry reduced innovation and raised prices (Wen & Zhu, 2019), whereas after Google Photos entered, affected apps raised major updates by 9.6% (Foerderer et al., 2018). The sign depends on the type of complement, which gives two conditional predictions: commodity, effort-light artifacts (simple slides, social graphics, drafts) are most exposed, and artifacts tied to an editing surface, file format, library or collaboration graph are least exposed.

Envelopment names the strategic threat: an envelopper in one platform market enters another by bundling the target's functionality with its own, exploiting shared users and foreclosing the incumbent's access to them (Eisenmann et al., 2011). A general assistant holds the user relationship across tasks and can bundle text, image, slide and code generation. The implied defences (own the user relationship, bundle, keep the artifact where work continues) correspond to S2 combined with S6 and S4, so S2 should never be analysed alone. Firms with strong downstream assets gain less from joining a platform and demand better terms (Huang et al., 2013). This is consistent with Gamma's wide opening, and it would also predict the highest terms for Grammarly, whose assets are embedded in other applications, which fits its choice to host rather than to be hosted.

### 3.6.6 Hosting third parties and generative AI platforms

Hosting (S3) requires governance. High generativity raises variance in how complements serve users (Cennamo & Santaló, 2019), and first-party content seeds a young platform (Hagiu & Spulber, 2013), which fits an agent store listing first-party agents beside partner ones. Hosting also needs an installed base outsiders want to reach, which may explain its rarity: Figma and Canva host plugins and apps, not agents.

Research on generative AI platforms is young. Studies of complementors in generative AI ecosystems and of generative AI as a boundary resource reshaping governance (Heimburg et al., 2025; Mayer et al., 2025) concern small builders, not incumbents, and precede tool-calling agents. Platforms whose asset is attention are said to need to resist agents (Lin et al., 2025), whereas artifact platforms welcome them, an asymmetry observed but not theorised.

### 3.6.7 Implications for the thesis

The platform literature supplies necessary conditions for access for external agents (S2, P2: benefit from access, retained control, relationship-specific assets) and for hosting (S3, P3: a distribution surface outsiders lack, seeding, governance capacity). It does not predict which terms a firm chooses, nor does it address an incumbent that is both complementor of an assistant and host of agents (Section 3.10).

## 3.7 Pricing and the economics of AI in SaaS

Hybrid monetisation (S5) and the rival hypothesis of outcome-based pricing (R-outcome) rest on pricing research. Its academic core predates generative AI; the AI-era evidence is mostly practitioner material and a few preprints. This section keeps the two apart.

### 3.7.1 Information goods and the premise AI weakens

The economics of information goods starts from high first-copy cost and near-zero marginal cost (Shapiro & Varian, 1999; Goldfarb & Tucker, 2019). Each model below can be read with one test: does it assume zero marginal cost per user? Bundling is profitable because aggregation makes valuations predictable, but only when marginal costs are very low (Bakos & Brynjolfsson, 1999, 2000); a fixed fee plus a usage schedule improves profit when metering is costly (Sundararajan, 2004); and consumers often prefer flat rates even when dearer (Lambrecht & Skiera, 2006). All three assume that serving one more user costs almost nothing, which inference breaks. In the course framework, classic SaaS is a development-based business, whose unit cost falls quickly with volume (Parolini, 2021; Section 3.4.1), and inference adds a variable cost per use that pushes it toward a less scalable structure.

Bessemer reports average gross margins of about 25% for AI-native "Supernovas" and about 60% for "Shooting Stars", archetypes drawn from its own self-selected sample of fast-growing AI firms (Bessemer Venture Partners, 2025), and ICONIQ's survey projects AI-product margins rising from 45% in 2025 to 59% in 2027 (ICONIQ Growth, 2026). Sources disagree on whether the gap is transitional. The cost of a given capability falls fast (Gundlach et al., 2025; Cottier et al., 2025), but vendors keep moving users to frontier and agentic capabilities, so cost per user can rise, and agent runs are costly and variable (Kapoor et al., 2024). No peer-reviewed measurement of cost-to-serve for application-layer SaaS was found; the figures come from investors, consultancies and a preprint.

### 3.7.2 Tariff design: why the seat stays

Academic SaaS pricing research is pre-AI and finds SaaS pricing under-managed (Saltan & Smolander, 2021). Pay-per-use beats selling for a monopolist only if the psychological "ticking meter" cost is low, while in a duopoly selling can earn more (Balasubramanian et al., 2015). With the flat-rate bias (Lambrecht & Skiera, 2006), this predicts that in competitive markets the flat component stays and metering enters as allowance, cap or add-on.

Practitioner surveys show the same pattern. Among more than 30 incumbent SaaS vendors, about 35% raised seat prices and about 65% layered an AI meter on seats, and none had moved entirely to usage or outcome pricing (Maltiel & Sandberg, 2025); a year later most "usage-based" pricing proved to be capacity-based pricing with overages (Maltiel & Sandberg, 2026). For AI agents, seat pricing is still the largest category (41%), with outcome pricing at 7% (Simon-Kucher, 2026). These samples come from AI builders, investor portfolios and newsletter readers, and several sponsors sell pricing services. The "seats are dead" narrative (Section 3.3) is therefore contested; the evidence supports a narrower claim: the seat persists as anchor, and consumption is layered on.

### 3.7.3 Freemium when the free user costs money

Dominant firms can rationally give good products away under network externalities (Shi et al., 2019); free allowances should vary dynamically (Lambrecht & Misra, 2017). None of these models has a free-user cost that grows with usage, which is the assumption generative AI breaks. How much AI to give free, and for how long, is a question the theory leaves open.

### 3.7.4 Credits: cost control or value capture?

Sources assign credits four functions: capping cost by turning volatile usage into a prepaid quantity (Metronome, 2025; Erten & Wang, 2026), giving the buyer predictability (Futurum Research, 2026), opening an upsell path, and abstracting away tokens, though "a credit is a currency, not a value metric" (Erten & Wang, 2026).

Three tests separate cost control from value capture, and the case evidence can be coded against them: what the credit unit tracks (compute or a recognisable unit of work); whether credit rates move with model cost; and whether the allowance attaches to the seat or to the work. Practitioner estimates and company documents suggest that Figma fits the cost reading. Its non-GAAP gross margin fell from 92% in the third quarter of 2024 to 82% in the third quarter of 2026, and the share of revenue absorbed by non-GAAP cost of revenue rose from about 8% to about 18% (Figma, Inc., 2026d), with filings naming AI inference as the driver (Figma, Inc., 2026a, 2026c). Every seat received a capped credit allotment, enforced from March 2026, with add-ons and pay-as-you-go beyond it (Figma, 2025). In August 2026 add-on credits per dollar rose by 100% on the Professional plan and by 60% on the Organization and Enterprise plans at unchanged prices, which Figma attributes to token efficiency and improved first-party models (Figma Help Center, 2026a). The unit follows compute, the rate follows cost, and the allowance attaches to the seat. Canva shows the logic in mass freemium: its 2026 growth target was cut from 30% to 20% because serving an AI task cost too much (Osmonbekov, 2026), and its free allowance fell in September 2026 from up to 200 standard or 20 premium AI uses to up to 20 (Canva, 2026). Adobe passed generative costs to Creative Cloud prices in 2023 but not to Express (Adobe Inc., 2023).

### 3.7.5 Outcome-based pricing: the rival hypothesis and its conditions

Outcome-based contracting is studied in servitisation. A multiple-case study shows that moving to outcome-based models is a full business model innovation, requiring co-defined value, redesigned provision and delivery of value in use, and that four of six cases failed (Sjödin et al., 2020). The conditions are measurable performance, risk the provider can bear, and trust with shared data; none of this research concerns software or generative AI.

Advocacy comes from vendors and consultants (Boston Consulting Group, 2025), and adoption concentrates where an outcome is countable, in customer support, where Zendesk, Intercom and HubSpot price resolved conversations (Zendesk, 2024; Intercom, 2026; HubSpot, 2026). Elsewhere it is rare: 7% of agent pricing in one study (Simon-Kucher, 2026) and about 10% of hybrid AI meters in Bain's (Maltiel & Sandberg, 2026). Bain sets three conditions, that the outcome is observable, uniquely attributable to the AI and contractible, and finds that most workflows fail them (Maltiel & Sandberg, 2026). Its typology of effort meters (tokens, compute), output meters (drafts, generations) and outcome meters (business results) is the most useful device for this thesis, the test being who carries the quality risk. Creation tools sell outputs whose value is subjective and realised downstream, so the literature predicts that outcome pricing will not appear in creation SaaS even if it spreads in support and sales. No outcome-based price list or company statement was found in the case files.

### 3.7.6 Who pays when an external agent does the work?

No source examines this directly. Three building blocks exist. On cost incidence, when a user's assistant drives a vendor's tool, the model provider bears the inference of the agent loop and the vendor only its own tool-side compute (rendering, generation, storage). On seat leakage, Figma warns in its filing that agents could reduce the number of paid seats needed for a given output (Figma, Inc., 2026a). The cases suggest a rule to test: read access is bundled with the seat or free, and the vendor charges where its own compute is used.

### 3.7.7 Implications for the thesis

Peer-reviewed work supplies mechanisms and grey literature supplies observations, mostly from AI builders. For S5 the literature supports three expectations (P5): the seat remains the anchor with caps or credits added, credit design tracks inference cost rather than value, and free AI is rationed in proportion to the free base. It predicts that outcome pricing will be absent in creation SaaS (P8), and for S2 it offers only a rule of incidence to be built from the cases (P2).

## 3.8 Creation software and generative AI

### 3.8.1 Definitions and taxonomies

The population of this thesis is defined by what the product does: it helps someone make an editable artifact such as a design, a deck, a document or a text. The relevant literature is split across traditions that rarely meet. The creativity support tool tradition asks how technology can help more people be creative more often (Shneiderman, 2007), and reviews find a technology-centred field with uneven definitions and evaluation (Frich et al., 2019; Cox et al., 2025). Neither defines productivity SaaS: one measures creative outcome, the other time and throughput.

Taxonomies are fragmented. No analyst category defined by the artifact produced was found: IDC's functional list contains "creative applications" and Gartner's categories follow work management, while the SaaSpocalypse debate concerns systems of record (Section 3.3). Competition authorities define markets by function: the UK CMA by all-in-one product design software for professional users and by vector and raster editing (Competition and Markets Authority, 2023), the European Commission by interactive product design software (European Commission, 2023). Function, artifact type and workforce are three logics; this thesis adopts a fourth, defined by the artifact and the job of the product, and notes that none of the existing definitions contemplates an agent as the producer of the artifact.

What distinguishes artifacts from the records of enterprise systems follows from this definition, and it is the review's own analysis. The output persists beyond the session and is edited, shared and reused. Its quality is judged by an audience and not checked against a source of truth. Its production cost is incurred per artifact, so generation is the metered unit. And it is bound by brand and format constraints that can be supplied as context. Each property bears on a strategy: persistence and editing on access for agents (S2), brand and format on context as asset (S4), per-artifact cost on hybrid monetisation (S5), and subjective quality on outcome pricing (R-outcome).

### 3.8.2 The industry and its business models

The five cases differ in how they earn from these properties. Adobe is the archetype of the move from licence to subscription: subscription is 96% of fiscal 2025 revenue and Digital Media annualised recurring revenue is USD 19.20 billion, up 11.5%, while its filing lists AI or cloud-native companies among competitors (Adobe Inc., 2026a). Figma is a web tool with a free tier and paid tiers that describes its growth as product-led and bottoms-up (Figma, Inc., 2025) and sells role-based seats (full, developer, collaborator and viewer). Canva combines a mass free base with paid plans, templates and a creator ecosystem, Grammarly sells a freemium writing assistant now bundled within the Superhuman suite (Superhuman, 2025), and Gamma is an AI-native presentation tool with a free tier and credits (Gamma, 2026). The comparison shows two distinct revenue logics. Seat-anchored models (Figma, Adobe) bill the producer, with the viewer free, whereas freemium models (Canva, Grammarly, Gamma) fund a large free base from a minority of payers. The second logic is the more exposed to the per-artifact cost of generation (Section 3.7.3). No scholarly analysis of these business models was found; they are documented in filings and trade press.

The abandoned Adobe and Figma merger is the richest primary source on market structure. The Commission's Statement of Objections of November 2023 set out two theories of harm: Figma as clear leader in interactive product design, and Figma as a likely entrant into vector and raster editing (European Commission, 2023). The CMA's provisional findings were parallel (Competition and Markets Authority, 2023). The deal ended in December 2023 (Figma, Inc., 2025). Three points follow. Regulators treated web-native collaborative tools as innovation pressure on the suite incumbent, the "lower entry barriers" logic one technology generation earlier. Acquisitions (S7) are constrained by competition law when the target is a leading or potential rival. And the decisions assume professional human users, which may not describe markets where agents produce the artifact.

### 3.8.3 Generative AI and creative work

The peer-reviewed evidence on generative AI and creative work comes from tasks (writing, support, art) far from SaaS creation tools, which should be borne in mind before the effect sizes. It converges on three points. Gains are larger for weaker performers: 40% less time and 18% higher quality in professional writing (Noy & Zhang, 2023) and 15% more issues resolved in support (Brynjolfsson et al., 2025); separately, text-to-image tools raised creative productivity by 25% and the value of output (favourites per view) by 50% on an art platform (Zhou & Lee, 2024). Output homogenises: AI-assisted stories were individually more creative but more similar to one another (Doshi & Hauser, 2024), favouring firms that supply differentiators such as brand kits, design systems and templates over firms that only generate. And the frontier is uneven (Dell'Acqua et al., 2026), which bears on when an agent-made artifact can be trusted.

The studies share a limit: nearly all use writing, illustration or ideation tasks. The one controlled study of a product in this thesis found that Figma's generative tool cut task time by about 20% among those who completed the tasks, with larger gains for product managers than designers (Stewart et al., 2026, a small preprint). None examines business artifacts made by non-specialists with AI-native tools, agents operating inside a SaaS product, or credit consumption.

### 3.8.4 Governance and intellectual property as strategic factors

The rival hypothesis R-governance asks whether trust, provenance and responsible-AI positioning differentiate a product and can be monetised. Adobe presents Firefly as commercially safe, trained on licensed content, with content credentials and indemnification for some enterprise offers (Adobe Inc., 2026a; Gold, 2023; Coalition for Content Provenance and Authenticity, 2025). Canva announced a USD 200 million fund for creators who opt in to AI training (Sharwood, 2023). Grammarly turned the question of who wrote a text into a product, Authorship (McCloskey, 2025), supported by evidence that detectors are biased against non-native writers (Liang et al., 2023) and unreliable (Sadasivan et al., 2023). The three choices (licensed data and indemnity; creator remuneration; process transparency) are the variation a comparative study needs.

Governance is also a cost and a risk. Figma suspended its Make Designs feature in 2024 after it reproduced Apple's weather app (Mann, 2024). Law cuts both ways. The US Copyright Office states that training on large, diverse datasets will often be transformative, while leaving room for market-dilution harm (U.S. Copyright Office, 2025); the copyright literature treats output similarity and training as separate risks (Samuelson, 2023). Transparency duties such as Article 50 of the EU AI Act (European Union, 2024) may make provenance a baseline expectation, turning a differentiator into a compliance cost. Organisational AI governance has a vocabulary (Mäntymäki et al., 2022), but how governance becomes an asset rather than a constraint is only starting to be theorised (Hydari & Muzaffar, 2026b). The supportable position is that governance is a transitional lever whose value depends on an accountable buyer, and that its monetisation is unshown.

### 3.8.5 Implications for the thesis

The creation literature supports the premise that AI widens the population of artifact producers (P4) and supports context as asset (S4) through homogenisation. It offers the Adobe and Figma record as precedent for entry pressure and for the limits of acquisitions (S7, P7), and shows that the metered unit in creation tools is the artifact, which sharpens hybrid monetisation (S5, P5) and the case against outcome pricing (P8). It does not study creation SaaS under agentic AI, agents as users of creation tools, or governance as comparative strategy (P9; Section 3.10).

## 3.9 An integrative framework: seven strategies and two rival hypotheses

This section gives each strategy and rival hypothesis in Table 3.0 a theoretical grounding, the conditions the literature implies and first evidence from the cases. The conditions are propositions derived by this review from the theories cited; none has been tested on creation SaaS, and theory transferred from another setting is marked as an analogy. The case evidence is descriptive and dated to 7 November 2026; it illustrates the propositions and does not test them. Company documents are cited from the case files.

### 3.9.1 Theory and propositions

**Table 3.2. Strategies, theory base and propositions**

| Strategy | Core theory and key references | Proposition: conditions implied | Grade |
|---|---|---|---|
| S1 In-product agent | Automation-augmentation (Raisch & Krakowski, 2021); delegation (Fügener et al., 2022); architectural innovation (Henderson & Clark, 1990); make, borrow or buy (Capron & Mitchell, 2009); servitisation (by analogy, manufacturing: Fang et al., 2008; Baines et al., 2009) | P1. An own agent is built where the artifact is structured enough for multi-step edits, a general assistant threatens the core task, and the firm can bear a flat or negative return phase | B |
| S2 Access for external agents | Boundary resources (Ghazawneh & Henfridsson, 2013); access versus control (Boudreau, 2010; Parker & Van Alstyne, 2018); appropriability (Huang et al., 2013); envelopment (Eisenmann et al., 2011) | P2. Incumbents open where they gain from access, keep control through account, seat or plan, meter generation, and open wider when downstream assets are weaker | A, B |
| S3 Hosting third-party agents | Controlling versus enabling (Hagiu & Wright, 2019); seeding (Hagiu & Spulber, 2013); generativity (Cennamo & Santaló, 2019) | P3. Hosting appears only where an installed base outsiders want, decisive third-party know-how and curation capacity coincide | A, B |
| S4 Context as asset | Complementary assets (Teece, 1986; Tripsas, 1997; Rothaermel, 2001); data advantage only under conditions (Hagiu & Wright, 2023); switching costs (Klemperer, 1995) | P4. Incumbents serve specialised, customer-specific assets that agents need and cannot generate, and ration them where serving erodes lock-in faster than it builds distribution | A, C |
| S5 Hybrid monetisation | Marginal-cost premise (Goldfarb & Tucker, 2019; Bakos & Brynjolfsson, 1999); flat-rate bias (Lambrecht & Skiera, 2006); ticking meter (Balasubramanian et al., 2015); freemium (Shi et al., 2019) | P5. With variable, heavy-tailed AI cost the seat stays as anchor, credit rates track cost, and free AI is rationed earlier where the free base is large and unsubsidised | A, C |
| S6 Scope expansion | Bundling (Bakos & Brynjolfsson, 1999; Nalebuff, 2004); envelopment (Eisenmann et al., 2011); mobility barriers (Caves & Porter, 1977) | P6. Scope expands where users and assets are shared and value moves to the adjacent layer, and is weakened by per-use inference cost | A, B |
| S7 AI-native acquisitions | Integration versus autonomy (Puranam & Srikanth, 2007; Puranam et al., 2006); adding a model (Kim & Min, 2015); acqui-hires (Coyle & Polsky, 2013); killer acquisitions (by analogy, pharmaceuticals: Cunningham et al., 2021) | P7. Incumbents buy small, early targets for talent and speed, integrate teams, and run targets with their own users and a distinct model in parallel | B |
| R-outcome | Outcome models as business model innovation (Sjödin et al., 2020); effort, output and outcome meters (Maltiel & Sandberg, 2026) | P8. Outcome pricing is absent in creation SaaS because outcomes are subjective, not attributable and not contractible | A, C |
| R-governance | Organisational AI governance (Mäntymäki et al., 2022); accountability assets (Hydari & Muzaffar, 2026b); copyright risk (Samuelson, 2023) | P9. Governance is a transitional lever, strongest where the buyer is accountable and provenance is not yet a regulatory baseline | B |

*Note.* Grade of the evidence base: A, peer-reviewed and empirical; B, conceptual, preprint or analogical; C, practitioner or company claim. Two letters give the grade for the theory and for its AI-era application.

### 3.9.2 First evidence from the cases

**Table 3.3. Case matrix, as of 7 November 2026**

| | Figma | Canva | Adobe Express | Grammarly | Gamma |
|---|---|---|---|---|---|
| S1 | ● Agent generally available, credit-consuming (October 2026); own model | ● Design Model, AI 2.0 | ◐ Assistant in beta since October 2025 | ◐ Go 1.0 (August 2026) | ● Native; agent priced by work |
| S2 | ● MCP tied to paid seat, plan limits, metered generation | ● First design connector in ChatGPT (June 2025); terms by plan not yet coded | ● Free in ChatGPT from December 2025; sign-in to unlock generation from August 2026 | ○ Docs and Mail MCP, paid plans only | ● API keys on all plans (October 2026) |
| S3 | ○ Plugins, not agents | ○ Apps, not agents | ○ Partner ecosystem | ● Agent store; SDK in closed beta | ○ Partner agent elsewhere |
| S4 | ● Design systems, Specs | ● Brand Kits in assistants, rationed on free plan | ○ | ◐ Mainly for own agents | ○ |
| S5 | ● Capped credits per seat (March 2026); margin 92% to 82% | ● Free AI cut, growth target cut, price reversal | ● Credits since 2023 at parent level | ◐ Prompt caps, soft limits | ● Credits since September 2025 |
| S6 | ● Code, sites, media | ● Marketing, code | ◐ Bundled in Acrobat Studio | ● Suite with Coda, Mail | ◐ Graphics |
| S7 | ◐ Small, integrated | ● Frequent, mixed modes | ○ None at Express level | ● Five deals in 21 months | ◐ One reported |
| R-outcome | ○ | ○ | ○ | ○ Charges per seat | ○ Output meter |
| R-governance | ◐ Enterprise add-on | ◐ Shield, creator fund | ● Commercially safe Firefly | ● Authorship, GPTZero | ○ |

*Note.* ● strong, ◐ present, ○ weak or absent. Codings are the case files' codings of prominence and not performance judgments. Counter-evidence: Figma's Make Designs was withdrawn in 2024 and a lab reads the same design assets (Claude Design); Grammarly's Expert Review was withdrawn in 2026. The case base is grade C throughout (company documents and trade press).

Four readings follow from the matrix. First, no firm uses one strategy. Figma combines five strategies (S1, S2, S4, S5, S6) around a paid seat, Canva the same five plus frequent acquisitions (S7) around a free base, and Grammarly S3, S6 and S7 as a suite. Complementary assets (S4) make a broader bundle valuable (S6) and are what a partner or acquirer wants (S7), and the agent (S1) needs context (S4) to differ from a general assistant.

Second, the sequencing puzzle. Adobe Express reached the GPT store in April 2024, open to paid ChatGPT tiers only, and became free in ChatGPT in December 2025, while its own assistant has been in beta since October 2025. Figma exposed MCP in June 2025, before its agent became generally available in October 2026. Envelopment (Eisenmann et al., 2011) and appropriability (Huang et al., 2013) suggest reasons to go outward first, but neither explains the order. A cost account is a hypothesis of this thesis: an own agent for a large free base is expensive (Section 3.7), so metered outward access is the cheaper route to intent.

Third, terms differ and the literature does not say why. Free entry with metered generation (Adobe Express, Gamma) contrasts with paid-plan or seat-anchored access (Grammarly, Figma). Platform theory gives necessary conditions, not a model of terms; a hypothesis consistent with the cases is that terms track an installed paid base the incumbent wants to protect from cannibalisation.

The depth of change is the fourth reading. The course framework links target market (who), value proposition (what), firm structure (how) and economic model, and what matters is their fit (Parolini, 2021; Normann, 1977). A change in one component is a patch, whereas a business model change is a set of linked changes that must re-fit (Siggelkow, 2002; Demil & Lecocq, 2010; Sjödin et al., 2020). The in-product agent (S1) mainly changes what, access and hosting (S2, S3) change who and how, and hybrid monetisation (S5) changes the economic model. The cases suggest that the economic model moved first, while the more consequential shifts in who and how are only beginning (Cozzolino et al., 2018).

### 3.9.3 The rival hypotheses and what would test the propositions

Outcome-based pricing should fail in creation SaaS (P8; Section 3.7): outputs are subjective, the three conditions are unmet, and outcome models are business model innovation, not price tags. The cases show its absence, and a falsifier would be an agent product that sells finished campaigns or a measured result; the coding must record the meter type, because "outcome" is used loosely. Governance as a lever (P9) is more defensible as a transitional lever, strongest where the buyer is accountable and exposed to the weakness of detection and to regulation that may make provenance a baseline (Section 3.8).

The propositions can be confronted with the case record. P1 fails if agents appear at firms with unstructured artifacts and no distinctive context; P2 if access is granted without any seat, plan or metering control; P3 if hosting appears without an installed base; P4 if context is given away free to all agents; P5 if credit rates move with perceived value and not with model cost; P6 if scope expansion occurs in firms without shared users; P7 if acquired products are neither integrated nor run in parallel according to size; P8 if one agent product is priced on a measured result; and P9 if provenance features bring no differentiation in accountable segments.

## 3.10 Research gaps and positioning of the thesis

### 3.10.1 The gaps

Every claim of absence below rests on the searches described in Section 3.1 and should be repeated in those databases before it is asserted without qualification. Each gap is stated as: this review found no study that [specific]; the nearest work is [X]. The gaps are ordered by sub-question.

**SQ1: roles, access terms, timing**

*Gap 1, incumbents as complementors of assistants.* No study was found of a firm that, with its own installed base, is at once a complementor of a general AI assistant and a competitor in producing the same artifact, or that also hosts third-party agents. The nearest work studies small builders in generative AI ecosystems (Heimburg et al., 2025; Mayer et al., 2025) and owner entry in app stores and marketplaces (Zhu & Liu, 2018; Wen & Zhu, 2019; Foerderer et al., 2018).

*Gap 2, terms of access for agents.* No study was found of what vendors offer agents (free, plan-gated, metered, seat-anchored), how it changes and why. The nearest work documents that platforms block agent access (Pattison et al., 2026) and offers the vocabulary of securing and resourcing (Ghazawneh & Henfridsson, 2013); consultancy advice splits between restricting "critical end points" and becoming "the neutral agent platform" (Crawford et al., 2025, pp. 24, 27).

*Gap 3, outward access before the inward agent.* No theory reviewed explains the order observed in several cases (Section 3.9.2). The thesis states the cost and funnel explanations as propositions.

**SQ2: what changes and how deeply**

*Gap 4, creation SaaS under agentic AI at the business model level.* No dated study was found of what creation incumbents changed. The nearest work concerns providers and industrial firms (Kanbach et al., 2024; Åström et al., 2022), conceptual agentic papers (Najmaei & Sadeghinejad, 2026; Bohnsack & de Wet, 2025) and systems of record (Section 3.3). No analyst category defined by the artifact produced was found either.

*Gap 5, generative versus agentic.* No operational definition applicable to vendor moves was found; the distinction is conceptual (Rothschild et al., 2025). The thesis codes the agency level of each move.

*Gap 6, a theory of the artifact.* No study was found testing whether the editable file acts as a complementary asset that keeps the interface alive when agents generate content. The nearest work is the headless argument (Hydari & Muzaffar, 2026a) and complementary-asset theory (Teece, 1986).

*Gap 7, depth of change and governance.* The line between a feature and a business model change is not operationalised in the work reviewed (Sections 3.4 and 3.9), and governance is analysed as law and ethics, not as comparative strategy (Section 3.8).

**SQ3: value capture and the cost of AI**

*Gap 8, cost economics of AI in free tiers and credits.* No peer-reviewed study was found of credits as a pricing instrument in AI-enabled software. The nearest work is a single-author preprint that codes the pricing pages of AI-native firms (Gupta, 2026), which covers neither creation incumbents nor changes over time. Who pays when an external agent does the work is unexamined (Section 3.7.6), and the only usage figures for external-agent production of artifacts are company statements.

**Table 3.4. Gaps, sub-questions and where the thesis answers them**

| Gap | Sections | SQ | Where the thesis answers |
|---|---|---|---|
| 1 | 3.6.5 | SQ1 | Role coding of the cases |
| 2 | 3.2.3, 3.6.3 | SQ1 | Typology of access terms |
| 3 | 3.9.2 | SQ1 | Timing analysis |
| 4 | 3.3, 3.4 | SQ2 | Case record of changes |
| 5 | 3.2 | SQ2 | Agency coding of moves |
| 6 | 3.3.5, 3.5.5 | SQ2 | Context-as-asset analysis |
| 7 | 3.4.5, 3.8.4 | SQ2 | Feature versus business model test |
| 8 | 3.7 | SQ3 | Meter-type coding of credits |

### 3.10.2 Positioning of the thesis

The thesis is empirical and dated where most agentic work is conceptual: the case files record what Figma, Canva, Adobe Express, Grammarly and Gamma changed from their first generative AI moves (2023 to 2025) to November 2026. It organises the evidence by strategy, transferring theory from platforms, pricing, servitisation, complementary assets and acquisitions, and it uses the course framework to separate feature changes from business model changes. The contribution is a first structured description and a set of propositions, not a causal test; its limits are public and partly self-reported case material, no separate AI revenue in disclosures, and a purposive set of five firms.

## Note on sources

This chapter combines peer-reviewed, preprint, practitioner and company sources, and their reliability differs. Three points qualify the evidence. First, a number of sources, mainly 2025 and 2026 preprints, consultancy and investor reports, trade-press articles and some publisher and vendor pages, were assessed from abstracts, executive summaries or accessible excerpts and not from full texts. The claims drawn from them are stated at the level of their general argument and, for figures, are attributed to the source and described as estimates or claims. Second, the case evidence cites company documents (filings, help-centre pages, press releases, blog posts and pricing pages) as recorded in the case files; some were read in syndicated copies or archived snapshots, and company statements are claims, not independent measurement. Third, metadata (DOIs, arXiv identifiers, volumes and years) were checked against external records, but a few details may still differ from publisher pages, notably page numbers of quotations from web-based reports. Searching and first-pass extraction followed a written protocol and were assisted by AI research tools; the methodology chapter should state this in the wording required by the university. The works whose specific content should be confirmed against full texts before final submission are listed, in order of priority, in a separate checklist.

## References

Abou Ali, M., Dornaika, F., & Charafeddine, J. (2025). Agentic AI: A comprehensive survey of architectures, applications, and future directions. *Artificial Intelligence Review, 59*(1), Article 11. https://doi.org/10.1007/s10462-025-11422-4

Adner, R., & Zemsky, P. (2006). A demand-based perspective on sustainable competitive advantage. *Strategic Management Journal, 27*(3), 215–239. https://doi.org/10.1002/smj.513

Adobe Inc. (2023, September 13). *All new, AI-powered Creative Cloud release and pricing update*. Adobe Blog. https://blog.adobe.com/en/publish/2023/09/13/ai-creative-cloud-release-pricing-update

Adobe Inc. (2026a). *Form 10-K for the fiscal year ended 28 November 2025*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/796343/000079634326000003/adbe-20251128.htm

Adobe Inc. (2026b, August 6). *Introducing Adobe in ChatGPT: Create, edit, get work done, all in ChatGPT*. Adobe Blog. https://blog.adobe.com/en/publish/2026/08/06/introducing-adobe-chatgpt-create-edit-get-work-done-all-in-chatgpt

Agrawal, A., Gans, J., & Goldfarb, A. (2022). *Power and prediction: The disruptive economics of artificial intelligence*. Harvard Business Review Press.

Ahern, G., Zhang, S., & Immerman, A. (2026). *From 'system of record' to 'system of intelligence'*. Andreessen Horowitz. https://a16z.com/from-system-of-record-to-system-of-intelligence/

Amble, S. (2026). *Is software losing its head?* Andreessen Horowitz. https://a16z.com/is-software-losing-its-head/

Ansari, S., Garud, R., & Kumaraswamy, A. (2016). The disruptor's dilemma: TiVo and the U.S. television ecosystem. *Strategic Management Journal, 37*(9), 1829–1853. https://doi.org/10.1002/smj.2442

Anthropic. (2024a). *Building effective agents*. https://www.anthropic.com/engineering/building-effective-agents

Anthropic. (2024b). *Introducing the Model Context Protocol*. https://www.anthropic.com/news/model-context-protocol

Anthropic. (2025). *Anthropic Economic Index: Understanding AI's effects on the economy (September 2025 report)*. https://www.anthropic.com/research/anthropic-economic-index-september-2025-report

Azoulay, P., Krieger, J. L., & Nagaraj, A. (2025). Old moats for new models: Openness, control, and competition in generative artificial intelligence. *Entrepreneurship and Innovation Policy and the Economy, 4*, 7–46. https://doi.org/10.1086/732852

Baines, T. S., Lightfoot, H. W., Benedettini, O., & Kay, J. M. (2009). The servitization of manufacturing: A review of literature and reflection on future challenges. *Journal of Manufacturing Technology Management, 20*(5), 547–567. https://doi.org/10.1108/17410380910960984

Bain, J. S. (1956). *Barriers to new competition: Their character and consequences in manufacturing industries*. Harvard University Press. https://doi.org/10.4159/harvard.9780674188037

Baird, A., & Maruping, L. M. (2021). The next generation of research on IS use: A theoretical framework of delegation to and from agentic IS artifacts. *MIS Quarterly, 45*(1), 315–341. https://doi.org/10.25300/MISQ/2021/15882

Bakos, Y., & Brynjolfsson, E. (1999). Bundling information goods: Pricing, profits, and efficiency. *Management Science, 45*(12), 1613–1630. https://doi.org/10.1287/mnsc.45.12.1613

Bakos, Y., & Brynjolfsson, E. (2000). Bundling and competition on the Internet. *Marketing Science, 19*(1), 63–82. https://doi.org/10.1287/mksc.19.1.63.15182

Balasubramanian, S., Bhattacharya, S., & Krishnan, V. V. (2015). Pricing information goods: A strategic analysis of the selling and pay-per-use mechanisms. *Marketing Science, 34*(2), 218–234. https://doi.org/10.1287/mksc.2014.0894

Ball, J. (2026, February 13). *Clouded Judgement 2.13.26: Build vs buy* [Newsletter]. Clouded Judgement. https://cloudedjudgement.substack.com/p/clouded-judgement-21326-build-vs

Barney, J. B., & Reeves, M. (2024). AI won't give you a new sustainable advantage. *Harvard Business Review*. https://www.bcg.com/publications/2024/ai-wont-give-you-a-new-sustainable-advantage

Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). *Measuring the impact of early-2025 AI on experienced open-source developer productivity* (arXiv:2507.09089). arXiv. https://arxiv.org/abs/2507.09089

Becker, J., Rush, N., Cunningham, T., Rein, D., & Mahamud, K. (2026, February 24). *We are changing our developer productivity experiment design* [Blog post]. METR. https://metr.org/blog/2026-02-24-uplift-update/

Benzell, S. G., Hersh, J., & Van Alstyne, M. (2024). How APIs create growth by inverting the firm. *Management Science, 70*(10), 7120–7141. https://doi.org/10.1287/mnsc.2023.4968

Bessemer Venture Partners. (2025). *The state of AI 2025*. BVP Atlas. https://www.bvp.com/atlas/the-state-of-ai-2025

Bloomberg. (2026, February 3). *'Get me out': Traders dump software stocks as AI fears erupt*. Bloomberg News. https://www.bloomberg.com/news/articles/2026-02-03/-get-me-out-traders-dump-software-stocks-as-ai-fears-take-hold

Bohnsack, R., & de Wet, M. (2025). *AI is the strategy: From agentic AI to autonomous business models onto strategy in the age of AI* (arXiv:2506.17339). arXiv. https://arxiv.org/abs/2506.17339

Bort, J. (2025, March 4). *Klarna CEO doubts that other companies will replace Salesforce with AI*. TechCrunch. https://techcrunch.com/2025/03/04/klarna-ceo-doubts-that-other-companies-will-replace-salesforce-with-ai

Boston Consulting Group. (2025, August 13). *Rethinking B2B software pricing in the agentic AI era*. https://www.bcg.com/publications/2025/rethinking-b2b-software-pricing-in-the-era-of-ai

Boudreau, K. J. (2010). Open platform strategies and innovation: Granting access vs. devolving control. *Management Science, 56*(10), 1849–1872. https://doi.org/10.1287/mnsc.1100.1215

Brandenburger, A. M., & Nalebuff, B. J. (1996). *Co-opetition*. Currency Doubleday.

Brandenburger, A. M., & Stuart, H. W. (1996). Value-based business strategy. *Journal of Economics & Management Strategy, 5*(1), 5–24. https://doi.org/10.1111/j.1430-9134.1996.00005.x

Brynjolfsson, E., Li, D., & Raymond, L. (2025). Generative AI at work. *Quarterly Journal of Economics, 140*(2), 889–942. https://doi.org/10.1093/qje/qjae044

Canva. (2026). *Canva pricing* [Web page]. https://www.canva.com/pricing/

Capron, L., & Mitchell, W. (2009). Selection capability: How capability gaps and internal social frictions affect internal and external strategic renewal. *Organization Science, 20*(2), 294–312. https://doi.org/10.1287/orsc.1070.0328

Casadesus-Masanell, R., & Ricart, J. E. (2010). From strategy to business models and onto tactics. *Long Range Planning, 43*(2–3), 195–215. https://doi.org/10.1016/j.lrp.2010.01.004

Casado, M., & Lauten, P. (2019, May 9). *The empty promise of data moats*. Andreessen Horowitz. https://a16z.com/the-empty-promise-of-data-moats/

Caves, R. E., & Porter, M. E. (1977). From entry barriers to mobility barriers: Conjectural decisions and contrived deterrence to new competition. *Quarterly Journal of Economics, 91*(2), 241–261. https://doi.org/10.2307/1885416

Cennamo, C., & Santaló, J. (2019). Generativity tension and value creation in platform ecosystems. *Organization Science, 30*(3), 617–641. https://doi.org/10.1287/orsc.2018.1270

Chen, J., & Gupta, J. (2024, April 19). *AI leads a service as software paradigm shift*. Foundation Capital. https://foundationcapital.com/ai-service-as-software/

Chesbrough, H., & Rosenbloom, R. S. (2002). The role of the business model in capturing value from innovation: Evidence from Xerox Corporation's technology spin-off companies. *Industrial and Corporate Change, 11*(3), 529–555. https://doi.org/10.1093/icc/11.3.529

Coalition for Content Provenance and Authenticity. (2025). *C2PA Content Credentials explained: Addressing common questions and updates* [White paper]. https://c2pa.org/wp-content/uploads/sites/33/2025/10/content_credentials_wp_0925.pdf

Coda, V. (2012). The evaluation of the entrepreneurial formula. *European Management Review, 9*(2), 63–74. https://doi.org/10.1111/j.1740-4762.2012.01030.x

Competition and Markets Authority. (2023, November 28). *Notice of provisional findings made under Rule 11.3: Anticipated acquisition by Adobe Inc. of Figma, Inc.* https://assets.publishing.service.gov.uk/media/6565c1c3888c06000dfa7df6/Notice_of_Provisional_Findings_pdfa1.pdf

Cottier, B., Snodin, B., Owen, D., & Adamczewski, T. (2025, March 12). *LLM inference prices have fallen rapidly but unequally across tasks* [Data insight]. Epoch AI. https://epoch.ai/data-insights/ai-inference-price-trends

Cox, S. R., Djernaes, H. B., & van Berkel, N. (2025). *Beyond productivity: Rethinking the impact of creativity support tools* (arXiv:2505.01601). arXiv. https://arxiv.org/abs/2505.01601

Coyle, J. F., & Polsky, G. D. (2013). Acqui-hiring. *Duke Law Journal, 63*(2), 281–346. https://doi.org/10.2139/ssrn.2040924

Cozzolino, A., Verona, G., & Rothaermel, F. T. (2018). Unpacking the disruption process: New technology, business models, and incumbent adaptation. *Journal of Management Studies, 55*(7), 1166–1202. https://doi.org/10.1111/joms.12352

Crawford, D., McLaughlin, C., Doddapaneni, P., & Fiore, G. (2025, September 23). *Will agentic AI disrupt SaaS?* (Technology Report 2025). Bain & Company. https://www.bain.com/insights/will-agentic-ai-disrupt-saas-technology-report-2025/

CRN Asia. (2025). *Salesforce Q3 earnings: CEO Benioff calls SaaS industry's death by AI a 'false narrative'*. https://www.crnasia.com/news-network/2025/salesforce-q3-earnings-ceo-benioff-calls-saas-industry-s-dea

Cunningham, C., Ederer, F., & Ma, S. (2021). Killer acquisitions. *Journal of Political Economy, 129*(3), 649–702. https://doi.org/10.1086/712506

Decrypt. (2026, March 10). *Amazon wins court order blocking Perplexity AI shopping agent*. https://decrypt.co/360629/amazon-perplexity-comet-court-order-agentic-commerce

Dell'Acqua, F., McFowland, E., III, Mollick, E. R., Lifshitz-Assaf, H., Kellogg, K., Rajendran, S., Krayer, L., Candelon, F., & Lakhani, K. R. (2026). Navigating the jagged technological frontier: Field experimental evidence of the effects of artificial intelligence on knowledge worker productivity and quality. *Organization Science, 37*(2), 403–423. https://doi.org/10.1287/orsc.2025.21838

Deloitte. (2025). *The agentic reality check: Preparing for a silicon-based workforce* (Tech Trends 2026). Deloitte Insights. https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/agentic-ai-strategy.html

Demil, B., & Lecocq, X. (2010). Business model evolution: In search of dynamic consistency. *Long Range Planning, 43*(2–3), 227–246. https://doi.org/10.1016/j.lrp.2010.02.004

diginomica. (2025). *Those shutting down Salesforce and Workday rumors from Klarna...no, we didn't replace SaaS with an LLM, admits CEO*. https://www.diginomica.com/those-shutting-down-salesforce-and-workday-rumors-klarna-no-we-didnt-replace-saas-llm-admits-ceo

Doshi, A. R., & Hauser, O. P. (2024). Generative AI enhances individual creativity but reduces the collective diversity of novel content. *Science Advances, 10*(28), Article eadn5290. https://doi.org/10.1126/sciadv.adn5290

Eaton, B., Elaluf-Calderwood, S., Sørensen, C., & Yoo, Y. (2015). Distributed tuning of boundary resources: The case of Apple's iOS service system. *MIS Quarterly, 39*(1), 217–243. https://doi.org/10.25300/misq/2015/39.1.10

Eisenberg, S., Corradi, G., & Srinivasan, P. (2026, October). *Managing the AI pricing transition: Seats versus usage*. Oliver Wyman. https://www.oliverwyman.com/our-expertise/insights/2026/oct/managing-ai-pricing-transition-beyond-seats.html

Eisenmann, T., Parker, G., & Van Alstyne, M. (2011). Platform envelopment. *Strategic Management Journal, 32*(12), 1270–1285. https://doi.org/10.1002/smj.935

Erten, T., & Wang, S. (2026, August 27). *You are not a model. Don't price per token.* Andreessen Horowitz. https://a16z.com/you-are-not-a-model-dont-price-per-token/

European Commission. (2023, November 17). *Commission sends Adobe Statement of Objections over proposed acquisition of Figma* (Press release IP/23/5778; Case M.11033). https://ec.europa.eu/commission/presscorner/api/files/document/print/en/ip_23_5778/IP_23_5778_EN.pdf

European Union. (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *Official Journal of the European Union*, L 2024/1689. https://eur-lex.europa.eu/eli/reg/2024/1689/oj

EY. (2026, July 28). *EY survey: C-suites pivot from AI adoption to unlocking value as escalating token costs trigger fiscal scrutiny* [Press release]. Ernst & Young LLP. https://www.ey.com/en_us/newsroom/2026/07/ey-survey-c-suites-pivot-from-ai-adoption-to-unlocking-value-as-escalating-token-costs-trigger-fiscal-scrutiny

Fang, E., Palmatier, R. W., & Steenkamp, J.-B. E. M. (2008). Effect of service transition strategies on firm value. *Journal of Marketing, 72*(5), 1–14. https://doi.org/10.1509/jmkg.72.5.001

Farrell, J., & Klemperer, P. (2007). Coordination and lock-in: Competition with switching costs and network effects. In M. Armstrong & R. Porter (Eds.), *Handbook of industrial organization* (Vol. 3, pp. 1967–2072). Elsevier. https://doi.org/10.1016/S1573-448X(06)03031-7

Feng, K. J. K., McDonald, D. W., & Zhang, A. X. (2025). *Levels of autonomy for AI agents* (arXiv:2506.12469). arXiv. https://arxiv.org/abs/2506.12469

Fügener, A., Grahl, J., Gupta, A., & Ketter, W. (2022). Cognitive challenges in human-artificial intelligence collaboration: Investigating the path toward productive delegation. *Information Systems Research, 33*(2), 678–696. https://doi.org/10.1287/isre.2021.1079

Figma. (2025, December 9). *Updates to AI credits in Figma* [Blog post]. Figma Blog. https://www.figma.com/blog/updates-to-ai-credits-in-figma/

Figma Help Center. (2026a). *AI credit updates FAQ* [Help center article]. https://help.figma.com/hc/en-us/articles/42614902212887-AI-credit-updates-FAQ

Figma Help Center. (2026b). *Write to canvas* [Help center article]. https://help.figma.com/hc/en-us/articles/42495251338775-Write-to-canvas

Figma, Inc. (2025). *Final prospectus (Form 424B4), initial public offering of Class A common stock*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm

Figma, Inc. (2026a). *Form 10-K for the fiscal year ended December 31, 2025*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm

Figma, Inc. (2026b). *Form 10-Q for the quarterly period ended March 31, 2026*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828026035209/fig-20260331.htm

Figma, Inc. (2026c). *Form 10-Q for the quarterly period ended September 30, 2026*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828026070272/fig-20260930.htm

Figma, Inc. (2026d, November 4). *Third quarter 2026 results* [Press release, Exhibit to Form 8-K]. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828026070133/q326pressrelease.htm

Fisher, R. (2024). *Microsoft CEO: AI agents will transform SaaS as we know it*. CX Today. https://www.cxtoday.com/data-analytics/microsoft-ceo-ai-agents-will-transform-saas-as-we-know-it/

Foerderer, J., Kude, T., Mithas, S., & Heinzl, A. (2018). Does platform owner's entry crowd out innovation? Evidence from Google Photos. *Information Systems Research, 29*(2), 444–460. https://doi.org/10.1287/isre.2018.0787

Forrester. (2026, October 28). *Predictions 2027: The outcome economy hits enterprise software, and reality hits back* [Blog post]. https://www.forrester.com/blogs/predictions-2027-the-outcome-economy-hits-enterprise-software-and-reality-hits-back/

Foss, N. J., & Saebi, T. (2017). Fifteen years of research on business model innovation: How far have we come, and where should we go? *Journal of Management, 43*(1), 200–227. https://doi.org/10.1177/0149206316675927

Frich, J., MacDonald Vermeulen, L., Remy, C., Biskjaer, M. M., & Dalsgaard, P. (2019). Mapping the landscape of creativity support tools in HCI. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (Paper 389, pp. 1–18). ACM. https://doi.org/10.1145/3290605.3300619

Futurum Research. (2026, August 17). *The pricing split: Why core software and AI can't share one commercial model* (Document AIOKK202608). https://futurumgroup.com/wp-content/uploads/2026/08/The-Pricing-Split-Why-Core-Software-and-AI-Cant-Share-One-Commercial-Model_AIOKK202608.pdf

Gamma. (2026). *Gamma developer changelog*. https://developers.gamma.app/reference/changelog

Garousi, V., Felderer, M., & Mäntylä, M. V. (2019). Guidelines for including grey literature and conducting multivocal literature reviews in software engineering. *Information and Software Technology, 106*, 101–121. https://doi.org/10.1016/j.infsof.2018.09.006

Gartner. (2025, June 25). *Gartner predicts over 40% of agentic AI projects will be canceled by end of 2027* [Press release]. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027

Gawer, A., & Cusumano, M. A. (2014). Industry platforms and ecosystem innovation. *Journal of Product Innovation Management, 31*(3), 417–433. https://doi.org/10.1111/jpim.12105

Gawer, A., & Henderson, R. (2007). Platform owner entry and innovation in complementary markets: Evidence from Intel. *Journal of Economics & Management Strategy, 16*(1), 1–34. https://doi.org/10.1111/j.1530-9134.2007.00130.x

Ghazawneh, A., & Henfridsson, O. (2013). Balancing platform control and external contribution in third-party development: The boundary resources model. *Information Systems Journal, 23*(2), 173–192. https://doi.org/10.1111/j.1365-2575.2012.00406.x

Goldfarb, A., & Tucker, C. (2019). Digital economics. *Journal of Economic Literature, 57*(1), 3–43. https://doi.org/10.1257/jel.20171452

Gold, J. (2023, June 8). Adobe offers copyright indemnification for Firefly AI-based image app users. *Computerworld*. https://www.computerworld.com/article/1628682/adobe-offers-copyright-indemnification-for-firefly-ai-based-image-app-users.html

Gundlach, H., Lynch, J., Mertens, M., & Thompson, N. (2025). *The price of progress: Price performance and the future of AI* (arXiv:2511.23455). arXiv. https://arxiv.org/abs/2511.23455

Guo, H., Hao, Y., Zhang, Y., Xu, M., Lv, P., Chen, J., & Cheng, X. (2025). *A measurement study of Model Context Protocol ecosystem* (arXiv:2509.25292). arXiv. https://arxiv.org/abs/2509.25292

Gupta, J., & Garg, A. (2025). *When model providers eat everything: A survival guide for service-as-software startups*. Foundation Capital. https://foundationcapital.com/when-model-providers-eat-everything-a-survival-guide-for-service-as-software-startups/

Gupta, P. (2026). *From tokens to credits to outcomes: Pricing AI across models, applications, and cloud platforms* (arXiv:2610.30701). arXiv. https://arxiv.org/abs/2610.30701

Hagiu, A., & Spulber, D. (2013). First-party content and coordination in two-sided markets. *Management Science, 59*(4), 933–949. https://doi.org/10.1287/mnsc.1120.1577

Hagiu, A., & Wright, J. (2019). Controlling vs. enabling. *Management Science, 65*(2), 577–595. https://doi.org/10.1287/mnsc.2017.2956

Hagiu, A., & Wright, J. (2023). Data-enabled learning, network effects, and competitive advantage. *RAND Journal of Economics, 54*(4), 638–667. https://doi.org/10.1111/1756-2171.12453

Hagiu, A., & Wright, J. (2024). Marketplace leakage. *Management Science, 70*(3), 1529–1553. https://doi.org/10.1287/mnsc.2023.4757

Hasan, M. M., Li, H., Fallahzadeh, E., Rajbahadur, G. K., Adams, B., & Hassan, A. E. (2025). *Model Context Protocol (MCP) at first glance: Studying the security and maintainability of MCP servers* (arXiv:2506.13538). arXiv. https://arxiv.org/abs/2506.13538

Heimburg, V., Schreieck, M., & Wiesche, M. (2025). Complementor value co-creation in generative AI platform ecosystems. *Journal of Management Information Systems, 42*(2), 491–528. https://doi.org/10.1080/07421222.2025.2487310

Henderson, R. M., & Clark, K. B. (1990). Architectural innovation: The reconfiguration of existing product technologies and the failure of established firms. *Administrative Science Quarterly, 35*(1), 9–30. https://doi.org/10.2307/2393549

Holm, A. B., & Günzel-Jensen, F. (2017). Succeeding with freemium: Strategies for implementation. *Journal of Business Strategy, 38*(2), 16–24. https://doi.org/10.1108/jbs-09-2016-0096

Huang, K.-H., Prabhakar, A., Thorat, O., Agarwal, D., Choubey, P. K., Mao, Y., Savarese, S., Xiong, C., & Wu, C.-S. (2025). *CRMArena-Pro: Holistic assessment of LLM agents across diverse business scenarios and interactions* (arXiv:2505.18878). arXiv. https://arxiv.org/abs/2505.18878

Huang, P., Ceccagnoli, M., Forman, C., & Wu, D. J. (2013). Appropriability mechanisms and the platform partnership decision: Evidence from enterprise software. *Management Science, 59*(1), 102–121. https://doi.org/10.1287/mnsc.1120.1618

HubSpot. (2026). *HubSpot's Customer Agent and Prospecting Agent: Now you pay when the task is complete* [Newsroom, updated 13 April 2026]. https://www.hubspot.com/company-news/hubspots-customer-agent-and-prospecting-agent-now-you

Hunton Andrews Kurth LLP. (2025). *Salesforce locks down Slack data: Time to review your Slack API terms* [Blog post]. Hunton privacy and cybersecurity law blog. https://www.hunton.com/privacy-and-cybersecurity-law-blog/salesforce-locks-down-slack-data-time-to-review-your-slack-api-terms

Hydari, M. Z., & Muzaffar, F. (2026a). *Going headless? On the boundaries of vertical AI firms* (arXiv:2605.17812). arXiv. https://arxiv.org/abs/2605.17812

Hydari, M. Z., & Muzaffar, F. (2026b). *Redrawing the AI map: A theory of accountability boundaries in agentic ecosystems* (arXiv:2605.23179). arXiv. https://arxiv.org/abs/2605.23179

ICONIQ Growth. (2026). *2026 state of AI report: The builder's economy*. ICONIQ. https://www.iconiq.com/growth/reports/state-of-ai-2026

Intercom. (2026). *Fin AI Agent overview and pricing* [Help article 8205718]. https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-overview

Jacobides, M. G., Cennamo, C., & Gawer, A. (2018). Towards a theory of ecosystems. *Strategic Management Journal, 39*(8), 2255–2276. https://doi.org/10.1002/smj.2904

Jorzik, P., Klein, S., Kanbach, D., & Kraus, S. (2024). AI-driven business model innovation: A systematic review and research agenda. *Journal of Business Research, 182*, Article 114764. https://doi.org/10.1016/j.jbusres.2024.114764

Kanbach, D., Heiduk, L., Blueher, G., Schreiter, M., & Lahmann, A. (2024). The GenAI is out of the bottle: Generative artificial intelligence from a business model innovation perspective. *Review of Managerial Science, 18*(4), 1189–1220. https://doi.org/10.1007/s11846-023-00696-z

Kapoor, S., Stroebl, B., Siegel, Z. S., Nadgir, N., & Narayanan, A. (2024). *AI agents that matter* (arXiv:2407.01502). arXiv. https://arxiv.org/abs/2407.01502

Khanagha, S., Volberda, H., & Oshri, I. (2014). Business model renewal and ambidexterity: Structural alteration and strategy formation process during transition to a cloud business model. *R&D Management, 44*(3), 322–340. https://doi.org/10.1111/radm.12070

Kim, H., Kang, H., & Song, J. (2026). *Generative AI fuels solo entrepreneurship, but teams still lead at the top* (arXiv:2605.10291). arXiv. https://arxiv.org/abs/2605.10291

Kim, S., & Min, S. (2015). Business model innovation performance: When does adding a new business model benefit an incumbent? *Strategic Entrepreneurship Journal, 9*(1), 34–57. https://doi.org/10.1002/sej.1193

Klein, T., & Wieczorek, S. (2026). *The headless firm: How AI reshapes enterprise boundaries* (arXiv:2602.21401). arXiv. https://arxiv.org/abs/2602.21401

Klemperer, P. (1995). Competition when consumers have switching costs: An overview with applications to industrial organization, macroeconomics, and international trade. *Review of Economic Studies, 62*(4), 515–539. https://doi.org/10.2307/2298075

Klotz, D. (2026). *The buy-or-build decision, revisited: How agentic AI changes the economics of enterprise software* (arXiv:2604.26482). arXiv. https://arxiv.org/abs/2604.26482

Lambrecht, A., & Misra, K. (2017). Fee or free: When should firms charge for online content? *Management Science, 63*(4), 1150–1165. https://doi.org/10.1287/mnsc.2015.2383

Lambrecht, A., & Skiera, B. (2006). Paying too much and being happy about it: Existence, causes, and consequences of tariff-choice biases. *Journal of Marketing Research, 43*(2), 212–223. https://doi.org/10.1509/jmkr.43.2.212

Leggett, K. (2026, February 11). *SaaS as we know it is dead: How to survive the SaaS-pocalypse!* [Blog post]. Forrester. https://www.forrester.com/blogs/saas-as-we-know-it-is-dead-how-to-survive-the-saas-pocalypse

Liang, W., Yuksekgonul, M., Mao, Y., Wu, E., & Zou, J. (2023). GPT detectors are biased against non-native English writers. *Patterns, 4*(7), Article 100779. https://doi.org/10.1016/j.patter.2023.100779

Lin, J., Zhu, J., Zhou, Z., Xi, Y., Liu, W., Yu, Y., & Zhang, W. (2025). *Superplatforms have to attack AI agents* (arXiv:2505.17861). arXiv. https://arxiv.org/abs/2505.17861

Lipman, D., Callahan, G., Fiore, G., Kieffer, G., & Bosche, A. (2026a, February 9). *Why SaaS stocks have dropped, and what it signals for software's next chapter*. Bain & Company. https://www.bain.com/insights/why-saas-stocks-have-dropped-and-what-it-signals-for-softwares-next-chapter/

Lipman, D., Perry, C., Holliday, J., & Chabrelie, T. (2026b). *Software investing in the age of AI and slower growth* (Technology Report 2026). Bain & Company. https://www.bain.com/insights/software-investing-in-the-age-of-ai-and-slower-growth-technology-report-2026/

Li, S., Qu, X., & Divekar, R. (2026, August 21). How generative AI reshapes business models: A review through the business model canvas. *California Management Review Insight*. https://cmr.berkeley.edu/2026/08/how-generative-ai-reshapes-business-models-a-review-through-the-business-model-canvas/

Maltiel, E., & Sandberg, J. (2025, October 9). *Per-seat software pricing isn't dead, but new models are gaining steam* [Brief]. Bain & Company. https://www.bain.com/insights/per-seat-software-pricing-isnt-dead-but-new-models-are-gaining-steam/

Maltiel, E., & Sandberg, J. (2026, August 10). *AI pricing: A reality check on effort, usage, and outcomes* [Brief]. Bain & Company. https://www.bain.com/insights/ai-pricing-a-reality-check-on-effort-usage-and-outcomes/

Mann, T. (2024, July 3). Figma pulls AI design tool for seemingly plagiarizing Apple's Weather app. *The Register*. https://www.theregister.com/2024/07/03/figma_plagiarizes_apple/

Massa, L., Tucci, C. L., & Afuah, A. (2017). A critical assessment of business model research. *Academy of Management Annals, 11*(1), 73–104. https://doi.org/10.5465/annals.2014.0072

Mayer, A.-S., Kostis, A., Strich, F., & Holmström, J. (2025). Shifting dynamics: How generative AI as a boundary resource reshapes digital platform governance. *Journal of Management Information Systems, 42*(2), 400–430. https://doi.org/10.1080/07421222.2025.2487312

Mazeika, M., Gatti, A., Menghini, C., Sehwag, U. M., Singhal, S., Orlovskiy, Y., Basart, S., Sharma, M., Peskoff, D., Lau, E., Lim, J., Carroll, L., Blair, A., Sivakumar, V., Basu, S., Kenstler, B., Ma, Y., Michael, J., Li, X., . . . Hendrycks, D. (2025). *Remote Labor Index: Measuring AI automation of remote work* (arXiv:2510.26787). arXiv. https://arxiv.org/abs/2510.26787

McCloskey, T. (2025, September 16). *Grammarly Authorship is now available in Canvas LMS*. Grammarly Blog. https://www.grammarly.com/blog/writing/grammarly-authorship-is-now-available-in-canvas-lms

McKinsey & Company. (2025). *The state of AI in 2025: Agents, innovation, and transformation*. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai

Mell, P., & Grance, T. (2011). *The NIST definition of cloud computing* (NIST Special Publication 800-145). National Institute of Standards and Technology. https://doi.org/10.6028/NIST.SP.800-145

Metronome. (2025, September 22). *The rise of AI credits: Why cost-plus credit models work (until they don't)* [Blog post]. https://metronome.com/blog/the-rise-of-ai-credits-why-cost-plus-credit-models-work-until-t

Mäntymäki, M., Minkkinen, M., Birkstedt, T., & Viljanen, M. (2022). Defining organizational AI governance. *AI and Ethics, 2*(4), 603–609. https://doi.org/10.1007/s43681-022-00143-x

Moshkovich, J. (2026, March 10). *Software isn't dead. What's valuable is changing*. 8VC. https://8vc.com/resources/software-isnt-dead-whats-valuable-is-changing

Najmaei, A., & Sadeghinejad, Z. (2026). *From instrument to economic actor: Generative and agentic AI as a new logic of business model innovation* [Preprint]. Preprints.org. https://doi.org/10.20944/preprints202609.0835.v1

Nalebuff, B. (2004). Bundling as an entry barrier. *Quarterly Journal of Economics, 119*(1), 159–187. https://doi.org/10.1162/003355304772839551

Normann, R. (1977). *Management for growth*. Wiley.

Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. *Science, 381*(6654), 187–192. https://doi.org/10.1126/science.adh2586

OfficeChai. (2024). *SaaS applications 'will collapse' in the AI agent era: Microsoft CEO Satya Nadella* [Transcript excerpt]. https://officechai.com/stories/saas-applications-will-collapse-in-the-ai-agent-era-microsoft-ceo-satya-nadella/

OpenAI. (2025, October 6). *Introducing apps in ChatGPT and the new Apps SDK*. https://openai.com/index/introducing-apps-in-chatgpt/

Osmonbekov, M. (2026, August 12). AI was supposed to power Canva's next act. It also exposed software's most expensive problem. *Fortune*. https://www.fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/

Parker, G., & Van Alstyne, M. (2005). Two-sided network effects: A theory of information product design. *Management Science, 51*(10), 1494–1504. https://doi.org/10.1287/mnsc.1050.0400

Parker, G., & Van Alstyne, M. (2018). Innovation, openness, and platform control. *Management Science, 64*(7), 3015–3032. https://doi.org/10.1287/mnsc.2017.2757

Parolini, C. (2021). *Business planning: Turning an idea into a reality*. Cinzia Parolini. https://iris.unimore.it/handle/11380/1295186

Pattison, C., Boulos, M., Kolt, N., Li, C., Piccardi, T., & Lazar, S. (2026). *The agentic web requires new normative infrastructure* (arXiv:2606.10711). arXiv. https://arxiv.org/abs/2606.10711

Patwardhan, T., Dias, R., Proehl, E., Kim, G., Wang, M., Watkins, O., Fishman, S. P., Aljubeh, M., Thacker, P., Fauconnet, L., Kim, N. S., Chao, P., Miserendino, S., Chabot, G., Li, D., Sharman, M., Barr, A., Glaese, A., & Tworek, J. (2025). *GDPval: Evaluating AI model performance on real-world economically valuable tasks* (arXiv:2510.04374). arXiv. https://arxiv.org/abs/2510.04374

Pineda, J., McClure, A., & Woody, S. (2026). *How SaaS pricing must change for agentic AI in 2026*. Boston Consulting Group. https://www.bcg.com/publications/2026/saas-pricing-must-change-agentic-ai

Puranam, P., Singh, H., & Zollo, M. (2006). Organizing for innovation: Managing the coordination-autonomy dilemma in technology acquisitions. *Academy of Management Journal, 49*(2), 263–280. https://doi.org/10.5465/amj.2006.20786062

Puranam, P., & Srikanth, K. (2007). What they know vs. what they do: How acquirers leverage technology acquisitions. *Strategic Management Journal, 28*(8), 805–825. https://doi.org/10.1002/smj.608

PYMNTS & The Next Web. (2026, May 15). *After Claude Design launched, Figma raised its full-year outlook*. PYMNTS. https://www.pymnts.com/artificial-intelligence-2/2026/after-claude-design-launched-figma-raised-its-full-year-outlook/

Raisch, S., & Krakowski, S. (2021). Artificial intelligence and management: The automation-augmentation paradox. *Academy of Management Review, 46*(1), 192–210. https://doi.org/10.5465/2018.0072

Rothaermel, F. T. (2001). Incumbent's advantage through exploiting complementary assets via interfirm cooperation. *Strategic Management Journal, 22*(6–7), 687–699. https://doi.org/10.1002/smj.180

Rothschild, D. M., Hofman, J. M., Mobius, M., Lucier, B., Dillon, E., Goldstein, D. G., Immorlica, N., & Slivkins, A. (2026). *From augmentation to reconstruction: Guiding the AI disruption to the good place* (arXiv:2605.29207). arXiv. https://arxiv.org/abs/2605.29207

Rothschild, D. M., Mobius, M., Hofman, J. M., Dillon, E. W., Goldstein, D. G., Immorlica, N., Jaffe, S., Lucier, B., Slivkins, A., & Vogel, M. (2025). *The agentic economy* (arXiv:2505.15799). arXiv. https://arxiv.org/abs/2505.15799

Sadasivan, V. S., Kumar, A., Balasubramanian, S., Wang, W., & Feizi, S. (2023). *Can AI-generated text be reliably detected?* (arXiv:2303.11156). arXiv. https://arxiv.org/abs/2303.11156

Saha, E. (2026). *Decommissioning enterprise software: AI agents and the collapse of the replication moat* (SSRN Working Paper 7601279). https://doi.org/10.2139/ssrn.7601279

Sahni, S. (2026). *Are B2B software vendors readable by AI assistants? Evidence from 251 homepages* (SSRN Working Paper 7661203). https://doi.org/10.2139/ssrn.7661203

Saltan, A., & Smolander, K. (2021). Bridging the state-of-the-art and the state-of-the-practice of SaaS pricing: A multivocal literature review. *Information and Software Technology, 133*, Article 106510. https://doi.org/10.1016/j.infsof.2021.106510

Samuelson, P. (2023). Generative AI meets copyright. *Science, 381*(6654), 158–161. https://doi.org/10.1126/science.adi0656

Sapkota, R., Roumeliotis, K. I., & Karkee, M. (2026). AI agents vs. agentic AI: A conceptual taxonomy, applications and challenges. *Information Fusion, 126*, Article 103599. https://doi.org/10.1016/j.inffus.2025.103599

Sarracino, S., & Vickery, J. (2026, May). *Software is dead?! Death by a thousand cuts*. Activant Capital. https://www.activantcapital.com/pdfs/software-is-dead-1-of-2.pdf

Schuler, M. (2026, February 4). *Software lost $300 billion in a day. Anthropic was just the excuse*. Implicator.ai. https://www.implicator.ai/software-lost-300-billion-in-a-day-anthropic-was-just-the-excuse/

Shapiro, C., & Varian, H. R. (1999). *Information rules: A strategic guide to the network economy*. Harvard Business School Press.

Sharwood, S. (2023, October 5). Canva creates $200M kitty to pay creators for stuff they feed its design-bot. *The Register*. https://www.theregister.com/2023/10/05/canva_ai_fund/

Shi, Z., Zhang, K., & Srinivasan, K. (2019). Freemium as an optimal strategy for market dominant firms. *Marketing Science, 38*(1), 150–169. https://doi.org/10.1287/mksc.2018.1109

Shneiderman, B. (2007). Creativity support tools: Accelerating discovery and innovation. *Communications of the ACM, 50*(12), 20–32. https://doi.org/10.1145/1323688.1323689

Siggelkow, N. (2002). Evolution toward fit. *Administrative Science Quarterly, 47*(1), 125–159. https://doi.org/10.2307/3094893

Simon-Kucher. (2026). *A how-to guide to monetizing GenAI and AI agents* [White paper]. https://www.simon-kucher.com/sites/default/files/perspectives-files/2026_WP_Monetizing%20GenAI%20and%20AI%20Agents_Simon-Kucher.pdf

Sjödin, D., Parida, V., Jovanovic, M., & Visnjic, I. (2020). Value creation and value capture alignment in business model innovation: A process view on outcome-based business models. *Journal of Product Innovation Management, 37*(2), 158–183. https://doi.org/10.1111/jpim.12516

Stanford HAI. (2026, April 13). *The 2026 AI Index report*. Stanford Institute for Human-Centered AI. https://hai.stanford.edu/ai-index/2026-ai-index-report

Stewart, R., Anise, O., Hogan, A., & Griffin, A. (2026). *Does AI save time on product design? A randomized controlled experiment of AI prompt-to-design workflows* (arXiv:2609.26725). arXiv. https://arxiv.org/abs/2609.26725

Åström, J., Reim, W., & Parida, V. (2022). Value creation and value capture for AI business model innovation: A three-phase process framework. *Review of Managerial Science, 16*(7), 2111–2133. https://doi.org/10.1007/s11846-022-00521-z

Sundararajan, A. (2004). Nonlinear pricing of information goods. *Management Science, 50*(12), 1660–1673. https://doi.org/10.1287/mnsc.1040.0291

Superhuman. (2025, October 29). *Announcing our company rebrand to Superhuman* [Blog post]. Grammarly Blog. https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman/

Superhuman. (2026a, July 8). *Superhuman launches Superhuman Docs* [Blog post]. https://blog.superhuman.com/superhuman-launches-superhuman-docs/

Superhuman. (2026b, April 29). *Superhuman Mail MCP* [Blog post]. https://blog.superhuman.com/superhuman-mail-mcp/

Swain, G. (2026). *Earnings from SAP, ServiceNow, and IBM challenge the SaaSpocalypse narrative*. CIO.com. https://www.cio.com/article/4202236/earnings-from-sap-servicenow-and-ibm-challenge-the-saaspocalypse-narrative.html

Swain, G., & Gross, P. (2026). *Agentic AI puts $234B in enterprise SaaS spending at risk, Gartner says*. CIO.com; CIO Dive. https://www.cio.com/article/4192242/agentic-ai-puts-234b-in-enterprise-saas-spending-at-risk-gartner-says.html

Tagliapietra Sanabria, G. (2026). *The outcome economy: A business model design framework for the post-SaaS era of autonomous AI agents* (SSRN Working Paper 6395799). https://doi.org/10.2139/ssrn.6395799

Teece, D. J. (1986). Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy. *Research Policy, 15*(6), 285–305. https://doi.org/10.1016/0048-7333(86)90027-2

Teece, D. J. (2010). Business models, business strategy and innovation. *Long Range Planning, 43*(2–3), 172–194. https://doi.org/10.1016/j.lrp.2009.07.003

The Next Web. (2026, April 17). *Canva becomes the design layer inside Claude with new Anthropic partnership*. https://thenextweb.com/news/canva-anthropic-claude-design-ai-powered-visual-suite

Tripsas, M. (1997). Unraveling the process of creative destruction: Complementary assets and incumbent survival in the typesetter industry. *Strategic Management Journal, 18*(S1), 119–142. https://doi.org/10.1002/(sici)1097-0266(199707)18:1+<119::aid-smj921>3.0.co;2-0

Tripsas, M., & Gavetti, G. (2000). Capabilities, cognition, and inertia: Evidence from digital imaging. *Strategic Management Journal, 21*(10–11), 1147–1161. https://doi.org/10.1002/1097-0266(200010/11)21:10/11<1147::aid-smj128>3.0.co;2-r

Tushman, M. L., & Anderson, P. (1986). Technological discontinuities and organizational environments. *Administrative Science Quarterly, 31*(3), 439–465. https://doi.org/10.2307/2392832

U.S. Copyright Office. (2025). *Copyright and artificial intelligence, Part 3: Generative AI training* (Pre-publication version). https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf

VentureBeat. (2026, April 17). *Anthropic just launched Claude Design, an AI tool that turns prompts into prototypes and challenges Figma*. https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma

Verganti, R., Vendraminelli, L., & Iansiti, M. (2020). Innovation and design in the age of artificial intelligence. *Journal of Product Innovation Management, 37*(3), 212–227. https://doi.org/10.1111/jpim.12523

Wen, W., & Zhu, F. (2019). Threat of platform-owner entry and complementor responses: Evidence from the mobile app market. *Strategic Management Journal, 40*(9), 1336–1367. https://doi.org/10.1002/smj.3031

Wirtz, B. W., Pistoia, A., Ullrich, S., & Göttel, V. (2016). Business models: Origin, development and future research perspectives. *Long Range Planning, 49*(1), 36–54. https://doi.org/10.1016/j.lrp.2015.04.001

Yang, J., Jimenez, C. E., Wettig, A., Lieret, K., Yao, S., Narasimhan, K., & Press, O. (2024). SWE-agent: Agent-computer interfaces enable automated software engineering. In *Advances in Neural Information Processing Systems 37* (NeurIPS 2024). https://doi.org/10.52202/079017-1601

Zendesk. (2024, August 28). *Zendesk first in CX industry to offer outcome-based pricing for AI agents* [Newsroom]. https://www.zendesk.com/newsroom/articles/zendesk-outcome-based-pricing/

Zhou, E., & Lee, D. (2024). Generative artificial intelligence, human creativity, and art. *PNAS Nexus, 3*(3), Article pgae052. https://doi.org/10.1093/pnasnexus/pgae052

Zhu, F., & Liu, Q. (2018). Competing with complementors: An empirical look at Amazon.com. *Strategic Management Journal, 39*(10), 2618–2642. https://doi.org/10.1002/smj.2932

Zott, C., Amit, R., & Massa, L. (2011). The business model: Recent developments and future research. *Journal of Management, 37*(4), 1019–1042. https://doi.org/10.1177/0149206311406265
