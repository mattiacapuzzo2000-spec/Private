## 3.1 Scope and method of the review

This chapter integrates eight stream reviews into one account of how agentic AI bears on the business models of creation-oriented productivity SaaS. The design is a multivocal literature review (Garousi et al., 2019): peer-reviewed work, books, conference papers, preprints and working papers are combined with grey literature from recognized organizations (analyst, consultancy and investor reports, company disclosures, quality trade press), and each source is labelled by type. The choice follows from the subject: the debate on whether agents will displace SaaS began in December 2024 and became a market event in February 2026, so the peer-reviewed record is thin and most of the substantive argument sits in grey sources. A review restricted to journals would miss the debate; one that treated investor claims as evidence of equal standing would overstate what is known. For each claim, the chapter therefore says what kind of source supports it.

The review answers four questions: L1, how AI and agentic AI threaten or reshape SaaS business models; L2, which theories explain incumbent adaptation to technological discontinuities; L3, what is known about each of the seven candidate strategies (S1 to S7) and the two rival hypotheses (outcome-based pricing and governance as a lever), and how the five cases (Figma, Canva, Adobe Express, Grammarly, with Gamma as AI-native benchmark) illustrate them; and L4, where the gaps lie. Eight streams were searched (AG, SP, BM, PL, PR, CR, ST, EN).

Searching took place on 14 November 2026 with web search, the Crossref REST API, arXiv, RePEc/IDEAS and publisher and company pages; Scopus and Web of Science were not used. SSRN, Gartner, McKinsey, Deloitte and OpenAI pages could not be opened by automated clients, so what is drawn from them rests on search summaries. The searches and first extraction were performed by AI research agents following a written protocol; every extracted claim carries a verification label, and the works listed in the verification notes must be read in full before submission. Inclusion covered 2015 to 2026 for empirical and recent conceptual work and any year for foundational theory (for example Teece, 1986); vendor marketing without data, listicles, anonymous blogs and unattributable items were excluded.

Each source received a type label and a verification label (full text or abstract opened, metadata only, search snippet only, or memory). The master register holds 543 unique sources: 265 (48.8%) peer-reviewed articles, 18 books and 11 conference papers (294, or 54.1%, in the conventional scholarly record together), 85 (15.7%) preprints or working papers, 127 (23.4%) grey literature (65 analytical, 62 essays or press) and 37 (6.8%) company documents. The corpus is recent: 222 sources (40.9%) date from 2025 or 2026 and 130 (23.9%) predate 2015, mostly foundational theory. AG is dominated by preprints (35 of 78 sources), SP by grey literature (only 4 of 58 are peer-reviewed), and BM and ST by journal articles.

Verification had two layers. First, two independent passes checked the registers against external records: DOIs against Crossref, arXiv identifiers against arXiv, books against Open Library, and grey items by opening the URL where the host allowed it. Across the master register, 445 entries are consistent with the external record, 19 were corrected (a year, volume or title variant), 8 are flagged for an unresolved disagreement, 2 books were not found in any catalogue, 10 remain unverified because the host blocked the check, and 59 are types to which a bibliographic check does not apply. No DOI failed to resolve; neither unfound book is cited here. Second, each entry received a citation status: 270 sources are cleared for citation, 253 may be cited only after reading, and 20 are not to be cited until checked. This chapter cites none of the last group and, for the middle group, reports only the general argument unless the stream review recorded a reading of the abstract or full text, so some well-known findings appear without figures. Metadata verification is not content verification: 266 entries are flagged for a content check.

Four limits qualify what follows. Evidence on agentic AI and SaaS rests on 2025 and 2026 preprints and on interested practitioners, so claims of absence ("no study exists") hold only within these searches and should be repeated in Scopus and Web of Science. The case evidence comes from the thesis's case files, not from the corpus. Many of the strongest numbers are produced by firms that sell the remedy. And evidence must be dated (Section 3.2).

## 3.2 Generative and agentic AI

### 3.2.1 Definitions and levels of agency

The technical literature agrees that the move from generative to agentic AI is a move from producing content to taking actions with tools. Sapkota et al. (2026) treat generative AI as the precursor, AI agents as modular, tool-using and task-specific systems, and agentic AI as systems with multi-agent collaboration, task decomposition and persistent memory. Kolt (2025) describes it in legal terms, and the standard surveys of language-model agents (Wang et al., 2024; Xi et al., 2025) rest on the older notion of an entity that senses, decides and acts (Wooldridge & Jennings, 1995). For builders the key distinction is Anthropic's (2024a): workflows run a model through predefined code paths, whereas agents direct their own process and tool use. By that standard many features sold as agents are workflows, which matters for coding the cases.

Autonomy is better treated as a graded design decision than as a property of a model: Parasuraman et al. (2000) classify automation by type and level, and Feng et al. (2025) define levels of autonomy by the role the user takes toward the agent. In information systems, Berente et al. (2021) frame AI autonomy as a managerial variable, and Baird and Maruping (2021) argue that agentic IS artifacts are no longer passive tools awaiting use, so that use becomes delegation to and from the artifact. This is why an external agent operating a product differs from a person operating it.

The concept remains contested. Abou Ali et al. (2025) warn against conceptual retrofitting, the equating of today's prompt-driven agents with the symbolic agents of the 1990s, and Gartner's warning of "agent washing" (Gartner, 2025) is the practitioner version, a prediction and not a measurement. No source operationalizes the generative/agentic boundary at the level of a vendor's product. This thesis therefore codes in-product agency on a 0 to 3 scale in the case files, with Feng et al. (2025) as the nearest external reference; none of the autonomy papers has been tested on commercial productivity software.

### 3.2.2 Generative and agentic effects compared

The empirical record on generative AI at work is the strongest part of the literature and is peer-reviewed. Support agents became more productive with an assistant, most of all novices (Brynjolfsson et al., 2025); professional writers worked faster and produced higher-rated text (Noy & Zhang, 2023); consultants gained inside, and lost outside, a "jagged" frontier (Dell'Acqua et al., 2026); and writers produced more creative individual stories but a more similar collective output (Doshi & Hauser, 2024). For software vendors the implication is that generative AI lowers the skill barrier, the supervisor's "anyone can do it". The only controlled evidence on a case product is a preprint on Figma Make, reporting roughly 20% shorter completion times among those who finished the tasks, with larger gains for product managers than for designers (Stewart et al., 2026), consistent with the novice-skewed gains elsewhere.

Conceptual work on the agentic phase is newer and unreviewed. Rothschild et al. (2025) argue that early generative gains are largely confined to predefined tasks in existing workflows, and that the deeper change comes when assistant agents and service agents transact with each other. Najmaei and Sadeghinejad (2026) distinguish three logics of AI-enabled business model innovation (AI as instrument, co-creator and delegated economic actor), and Bohnsack and de Wet (2025) argue that agentic AI can execute the core mechanisms of value creation, delivery and capture. These papers agree on direction and offer no test.

Evidence for a shift to delegation comes mostly from vendors. Anthropic's usage data report that directive conversations rose from 27% to 39% and that automated use overtook augmentative use (Anthropic, 2025), and a later study reports that the longest Claude Code sessions roughly doubled in three months (Anthropic, 2026). Both come from a model provider that competes with the cases, and both concern coding more than creative work. Dating matters: a randomized trial found that early-2025 tools made experienced developers 19% slower (Becker et al., 2025), while the lab's February 2026 update says selection effects now prevent a clean estimate, though a speedup is likely (Becker et al., 2026). No study compares the same firms before and after the agentic turn in business-model terms.

### 3.2.3 Agents as users and customers of software

If agents act, they become users of software. Yang et al. (2024) argued that language-model agents are a new category of end users and showed that an interface designed for them improved results on software-engineering tasks; Lù et al. (2025) extend the argument to the web. Biilmann (2025) named the practice agent experience (AX). AX is entirely practitioner writing, and no peer-reviewed definition or measure was found. Agents may also represent buyers, as in the Agentic Commerce Protocol released by OpenAI and Stripe, where the agent initiates checkout and the merchant stays seller of record (Stripe, 2025b). Academic work is conceptual. Shahidi et al. (2025) argue that agents lower search and contracting costs but can create congestion, and that outcomes depend on whether agents operate within or across platforms. Guimaraes Figueira (2026) names the supplier's risk "brand erasure": the agent may drop the brand at the moment of action. No study of an agent-initiated software purchase was found.

Access terms are where this becomes strategic. Pattison et al. (2026) document that platforms block or degrade agent access, often without notice, and argue for a normative infrastructure separating malicious bots from delegated agents. Two examples come from grey sources only: law-firm commentary on Salesforce's 2025 changes to Slack API terms, which tightened how third-party tools can access workspace data (Hunton Andrews Kurth LLP, 2025), and press coverage of Amazon's litigation against Perplexity's shopping agent (Bloomberg Law et al., 2026). The conceptual core of the headless argument is Hydari and Muzaffar (2026a): general-purpose agents unbundle applications, and ceding the interface and exposing expertise as callable services is correct for some firms and destructive for others. Their second paper names what can protect integrated firms, accountability assets that make AI output legitimate, auditable and assignable (Hydari & Muzaffar, 2026b), and Klotz (2026) concludes that the make-or-buy shift depends on application type. All three are 2026 preprints on enterprise or vertical software, and none addresses tools whose product is an editable artifact, where the agent generates and the human may still edit in the product (see Section 3.9). Salesforce's own statement, exposing capabilities as APIs or MCP tools (Salesforce, 2026), is a company claim without outcome data.

### 3.2.4 Protocols

Anthropic open-sourced the Model Context Protocol (MCP) in November 2024 as a standard for connecting assistants to data sources and tools (Anthropic, 2024b). Google launched the Agent2Agent protocol (A2A) in April 2025 as a complement to MCP (Surapaneni et al., 2025). OpenAI's Apps SDK lets third-party applications run inside ChatGPT and builds on MCP (OpenAI, 2025), which turns the assistant into a distribution channel. In December 2025 MCP was placed under the Agentic AI Foundation at the Linux Foundation (The Linux Foundation, 2025), a move toward neutral infrastructure.

Academic work on MCP is empirical and technical, and it qualifies the vendor narrative. A study of 1,899 open-source servers found general vulnerabilities in 7.2% and MCP-specific tool poisoning in 5.5% (Hasan et al., 2025), and a crawl of six marketplaces found more than half of listed projects invalid or of low value (Guo et al., 2025), a counterweight to vendor counts of active servers. Three strategic readings follow: neutral standards lower the lock-in risk of making a product callable; whoever runs the agent client controls discovery, so the within-or-across-platform question of Shahidi et al. (2025) applies to the choice of assistants to serve; and openness enlarges the security surface, which gives governance a rationale. No academic study of vendor strategy around MCP servers or apps in assistants was found.

### 3.2.5 Adoption evidence and its limits

Surveys show interest far ahead of scale. Consultancy surveys (McKinsey & Company, 2025; Deloitte, 2025) are generally read as showing experimentation well ahead of production use, although their figures were available only through summaries. The widely quoted claim that most generative AI pilots show no measurable return (MIT NANDA, 2025) concerns generative pilots and is known through press coverage; the AI Index reports adoption of AI generally, not of agents (Stanford HAI, 2026); and Gartner's headline forecast that over 40% of agentic AI projects will be cancelled by the end of 2027 (Gartner, 2025) has weak published method. I treat this as consistent with "interest far ahead of production", not as a measurement.

Benchmarks diverge by task type. On realistic business tasks agents remain weak: about 58% success on single-turn and 35% on multi-turn tasks in a CRM benchmark from Salesforce's research lab (Huang et al., 2025), under 50% task success with poor consistency in a tool-agent-user benchmark (Yao et al., 2024), and a best automation rate of 2.5% on real freelance projects (Mazeika et al., 2025). Against this, OpenAI's GDPval reports frontier models approaching industry experts in deliverable quality on tasks written by professionals (Patwardhan et al., 2025). The divergence is explained largely by task definition (a single deliverable versus an end-to-end project) and by who wrote the benchmark. Kapoor et al. (2024) add that agent evaluations neglect cost. The "agentic phase" of this thesis should therefore be defined by what vendors build and expose, not by what customers have scaled.

### 3.2.6 Implications for the thesis

The literature supports treating generative and agentic phases as different in kind, but only on conceptual and vendor evidence, and supplies a vocabulary (levels of autonomy, delegation, headless, accountability assets) for SQ1 and SQ2. It informs S1 through autonomy scales and the mixed productivity record, S2 and S3 through protocols, access terms and security, S4 through brand erasure and accountability assets, and S5 through the cost point (Kapoor et al., 2024; Section 3.7). The main gap is that the stream is silent on creation tools: no source measures how often users let an external agent produce an artifact instead of using the product.

## 3.3 The "SaaSpocalypse" debate

### 3.3.1 What was said, and by whom

The vocabulary of the debate rests on three episodes repeated more often than checked. First, Satya Nadella's remarks on a podcast in December 2024, widely quoted as saying that business applications are essentially databases with business logic, that the logic would move to agents, and that back ends would then be replaced (Fisher, 2024; OfficeChai, 2024). The claim concerns the back-end tier of business applications, and in the same answer he asked why Excel would be needed, the only explicit statement by a major CEO about a creation tool, posed as a thought experiment. Second, Klarna: its chief executive said in 2024 that the firm had shut down Salesforce, which became a founding anecdote; months later he clarified that Klarna had not replaced SaaS with a language model but consolidated data onto an internal stack (Bort, 2025b; diginomica, 2025), a build-versus-buy consolidation and not the substitution of a system of record. Third, the coinage: Bloomberg's report of 3 February 2026 quotes a trader on the Jefferies equity desk, "We call it the 'SaaSpocalypse'", after the software index had fallen 15% in January, its largest monthly decline since October 2008 (Bloomberg, 2026). The label describes a trading condition, not an analysis, and analysts later used it as a foil (Le Clair, 2026).

### 3.3.2 A typology of narratives

The positions in the corpus sort into six narratives and one cross-cutting thread (Table 3.1). They are not exclusive, since several actors hold two.

**Table 3.1. Narratives in the SaaSpocalypse debate**

| Code | Narrative and core claim | Examples of holders | Evidence |
|---|---|---|---|
| N1 | Replacement: applications are replaced by an agent logic tier or in-house builds | Fisher (2024); Bennett et al. (2025); Saha (2026) | Statements, conceptual papers, anecdotes; no measured replacement |
| N2 | Seat cannibalization: agents reduce paid users | Swain & Gross (2026); Maltiel & Sandberg (2025); Sarracino & Vickery (2026); EY (2026) | Forecasts, expectation surveys |
| N3 | Intermediation: agents become the front end and applications become APIs | Amble (2026); Leggett (2026); Klein & Wieczorek (2026) | Essays, one audit |
| N4 | Commoditization: cheap creation lets entrants flood the market | Ball (2026); Saha (2026) | Argument, expectations |
| N5 | Evolution: the core persists and incumbents embed agents | CRN Asia (2025); Swain (2026); Moshkovich (2026); Rothschild et al. (2026) | Earnings, buyer surveys |
| N6 | Rebundling: value migrates to finished work or outcomes | Chen & Gupta (2024); Tagliapietra Sanabria (2026) | Market-size arguments |
| Thread | Cost of AI: inference squeezes seat-priced vendors | Lipman et al. (2026b); Osmonbekov (2026); Zhang (2026) | Disclosure, one model |

The strong claims (N1) have the weakest evidence and are mostly held by actors who sell agents, platforms, compute or venture portfolios. The best-evidenced narrative about vendors' economics is the hybrid one. The typology says little about who benefits when a creation tool's output is produced by someone else's agent (Section 3.3.5).

### 3.3.3 What the evidence supports

The sell-off is an established event with contested magnitude and cause. Published tallies are not comparable: Forrester cites more than USD 1 trillion in seven days (Leggett, 2026), another account USD 300 billion in a single day (Schuler, 2026). The latter argues that margin compression, private-credit exposure and platform fatigue predate the Anthropic launches that triggered the move, and a trade analysis reports software forward multiples falling below the broad market's (Lemkin, 2026). Consultancy commentary describes much of the decline as since reversed (Pineda et al., 2026). No causal test exists; the only event study retrieved concerns generative AI announcements by AI leaders, not software vendors (Bhushan, 2026).

Fundamentals through mid-2026 favour evolution over collapse for enterprise vendors. ServiceNow reported rising subscription growth and high renewals, and SAP 24% cloud growth (Swain, 2026), and Bain reports that installed bases have largely held, with average gross retention around 90% or better (Lipman et al., 2026a). The counter-signals concern the quality of growth: Bain reports that growth has roughly halved and net revenue retention has fallen about nine points since 2021 (Lipman et al., 2026b), and Activant argues that seats fail to capture value, citing a vendor whose usage per user rose sharply while its growth slowed (Sarracino & Vickery, 2026). On pricing the sources converge on a hybrid interim state in which per-seat pricing is not dead and consumption or outcome elements are added (Maltiel & Sandberg, 2025; Pineda et al., 2026; ICONIQ Growth, 2026). Buyer evidence points two ways: a survey of North American buyers finds few expecting seat counts to fall faster than before (Eisenberg et al., 2026), while a survey of AI-investing executives finds most expecting per-seat pricing to matter less within five years (EY, 2026). The two are compatible if seat counts are stable while the pricing logic shifts. Bain's earlier technology report maps each SaaS workflow on two axes, the potential for AI to automate user tasks and to penetrate the workflow, and derives five scenarios from no AI to cannibalization (Crawford et al., 2025), which already implies uneven impact. The best-supported reading is repricing and slower growth before substitution.

### 3.3.4 Convergence, divergence and interest

Every major analyst and consultancy in the corpus rejects the simple death thesis and accepts pressure on seats. Bain calls "seats are dead" an overstatement (Maltiel & Sandberg, 2025), Forrester qualifies its alarming headline in the body text (Leggett, 2026), and Gartner's headline of USD 234 billion of enterprise SaaS spending at risk, as reported by trade press, falls short of total collapse (Swain & Gross, 2026). They diverge on which layer is safe: Bain says systems of record are protected by switching costs, criticality and compliance (Lipman et al., 2026a), whereas Bessemer and a16z argue that the moat of a system of record was the human interface and the cost of migration, both of which AI erodes (Bennett et al., 2025; Amble, 2026; Ahern et al., 2026). They diverge on timing (Gartner places the main impact toward 2030; Swain & Gross, 2026) and on who captures value: venture sources see the next large companies as sellers of work (Chen & Gupta, 2024), while Forrester warns that metering AI per action may backfire if customers build agents on platforms they already license (Forrester, 2026). No source is disinterested: consultancies sell transformation advice and venture firms hold AI-native stakes.

The academic contribution is thin, conceptual and unreviewed. Klein and Wieczorek (2026) model coordination cost and derive an "hourglass" firm, and Rothschild et al. (2026) argue that large effects need complementary investments in trust, machine-legible data and new workflows. Zhang (2026) models the mismatch between token-priced inputs and subscription-priced outputs, and Sahni (2026) audits B2B software homepages for agent readability. A business-school review (Li et al., 2026) and an analysis of public SaaS companies by task and data type, which finds the impact uneven (Stanton, 2026, known here through a summary page), come closest to reviewed work. The lenses of this chapter (complementary assets, business model innovation, disruption theory) have not been applied to the debate in any retrieved paper.

### 3.3.5 The blind spot on creation tools

The debate is overwhelmingly about systems of record: CRM, ERP, human-capital management, IT service management and support. Creation tools enter it in four ways. CEO remarks pose the agent as replacement of the tool or as its user (Nadella's question about Excel; OfficeChai, 2024). Lab products hit listed vendors: after Claude Design, trade coverage reports, Figma raised its full-year outlook weeks later (PYMNTS & The Next Web, 2026), the same gap between market reaction and fundamentals seen in enterprise names. Investors worry about seats, as in a business-press account linking Adobe's lower valuation, despite record revenue, to fear that agents could weaken seat-based demand (Umoh, 2026), without showing seat data. And an audit finds productivity software least agent-readable (Sahni, 2026). A disruption model does list creative services among the most disrupted markets, but these are labour markets such as agencies, not creation software (Le Clair, 2026).

Four inferences, to be tested and not taken as findings, follow from what is missing. The debate has no theory of the artifact. In a system of record the product is a record of truth that agents must read and write; in a creation tool the product is an artifact an agent can produce without the tool's interface, and value lies in the editor, collaboration, templates, brand assets and formats. The a16z argument that the interface was the product (Amble, 2026) therefore applies with more force to creation tools, and the data-gravity defence with less. Seat logic also differs: falling production cost may increase the number of creators and artifacts (Canva reports that users of its AI create three times as many designs; Osmonbekov, 2026), and no source weighs this against seat compression. Outcome pricing is hard to apply to artifacts of subjective quality, since its evidence comes from support, sales and IT tickets. And the cost-of-AI thread is strongest where generation is the product: Fortune links Canva's cut of its 2026 growth outlook by a third to heavy reliance on expensive frontier models (Osmonbekov, 2026), and Bain states that the compute behind every query pushes revenue models from seats toward usage and outcomes (Lipman et al., 2026b).

### 3.3.6 Implications for the thesis

The debate supports four propositions. AI has lowered the barrier to producing software and artifacts, and incumbents' accumulated assets are the defensible part (Ball, 2026; Moshkovich, 2026; Lipman et al., 2026a). Seat-only pricing is weakening, with hybrids as the interim state, which bears on S5. The cost of AI is a first-order variable for creation incumbents. And access terms and context are contested resources, which bears on S2 and S4. The strong replacement claim for creation tools is unsupported by any measurement, so the SaaSpocalypse is best read as a repricing of expectations. The debate never separates a change of pricing from a change of business model (SQ2).

## 3.4 Business models and their adaptation to technological discontinuities

### 3.4.1 The business model concept and the entrepreneurial formula

The literature agrees that the business model is a useful unit of analysis but not on its definition (Zott et al., 2011; Massa et al., 2017; Wirtz et al., 2016). Three families are visible: the architecture of value creation, delivery and capture (Teece, 2010; Chesbrough & Rosenbloom, 2002); an activity system (reviewed by Zott et al., 2011); and a set of managerial choices and their consequences (Casadesus-Masanell & Ricart, 2010), which matters here because pricing policy, asset ownership and governance terms are such choices. The course framework (WHO, WHAT, HOW and the ECONOMIC MODEL; Parolini, 2021) is closest to the first family. Through the entrepreneurial formula (Coda, 2012) and the business idea of Normann (1977), it adds an explicit requirement that the components be consistent with one another and with the environment.

Fit has been treated in three ways. Siggelkow (2002) models fit as a developmental process in which elements of an activity system are thickened, patched, coasted or trimmed. This serves SQ2, because the depth of a change can be coded as thickening (more of the same, such as an AI feature inside a seat model) or patching (an element the old model lacked, such as metered credits or a channel for third-party agents). Demil and Lecocq (2010) argue that consistency must be dynamic, with temporary inconsistency a normal part of evolution, and Casadesus-Masanell and Ricart (2010) add that choices feed back into the model. Missing is an empirical account of how consistency is restored when one component changes sharply, as marginal production cost does when inference replaces human effort.

### 3.4.2 Business model innovation and adaptation in incumbents

Foss and Saebi (2017) review the field and conclude that it lacks construct clarity and an account of antecedents, contingencies and outcomes, and Saebi et al. (2017) link adaptation to perceived opportunities and threats. Chesbrough (2010) names the central barrier, that a new model conflicts with the logic of the existing one, and Sosna et al. (2010) show that models emerge by trial and error, not by plan.

The incumbent-specific work is the most useful. Kim and Min (2015) find that incumbents adding a new business model perform better when the model is added early where assets are complementary and in an autonomous unit where assets conflict, which bears on S7. Markides and Charitou (2004) give the contingency logic for dual models. Khanagha et al. (2014), the closest analogue to SaaS facing agents because it follows a large ICT firm moving to a cloud model, find that simple structural separation does not work and that the firm oscillates between separated and integrated modes. Cozzolino et al. (2018) trace a publisher after the internet and show that adaptation ran through opening a closed model into an open, platform-based one. These are single cases or small samples, and none examines a discontinuity in which the technology performs the customer's own work.

### 3.4.3 Incumbent response to technological discontinuities

The classical results are established and contested at once. Tushman and Anderson (1986) distinguish competence-enhancing from competence-destroying discontinuities; Henderson and Clark (1990) show that incumbents fail at architectural innovation because their information filters follow the old architecture; Christensen and Bower (1996) add resource allocation and customer power. Tripsas (1997) shows that incumbents holding specialized complementary assets can survive, and Tripsas and Gavetti (2000) that managerial cognition can prevent their use. Hill and Rothaermel (2003), Gilbert (2005) and Eggers and Park (2018) refine the account. The disruption debate (Danneels, 2004; Christensen et al., 2018; Kumaraswamy et al., 2018) concludes that the theory is better at saying who is vulnerable than at predicting outcomes. Ansari et al. (2016) reverse the perspective: a disruptor may need incumbents' support, which produces coopetition. Dynamic capabilities (Teece, 2007) and ambidexterity (O'Reilly & Tushman, 2013; Raisch & Birkinshaw, 2008) supply the capability and structure side, and Teece (2018a) makes business model design itself a dynamic capability. Gawer and Cusumano (2014) and Cusumano (2010) add that a SaaS vendor becomes a platform by opening its infrastructure; owner-entry studies (Section 3.5) give mixed predictions for a vendor that hosts third parties while building its own agent.

Applied to agentic AI, the theory yields two readings that cannot yet be resolved. If agents destroy the skill barrier on which creation tools were built, the discontinuity is competence-destroying; if they need the editable file, the design system and the brand kit, it is competence-enhancing for those who hold these assets (Tushman & Anderson, 1986; Tripsas, 1997). On separation versus integration, Kim and Min (2015) recommend separation under asset conflict, while Khanagha et al. (2014) show it often fails for core technologies.

### 3.4.4 Business model innovation with AI and the SaaS literature

The AI business model literature is large but mostly conceptual, based on providers and industrial firms, and pre-agentic. Kanbach et al. (2023) and Jorzik et al. (2024) review generative and AI-driven business model innovation, and Verganti et al. (2020) argue that AI moves design decisions from humans to machines, which bears directly on creation tools. The one source that theorizes agentic AI as an economic actor in business model change is Najmaei and Sadeghinejad (2026), a preprint without a test, and Tagliapietra Sanabria (2026) argues from a single-author working paper that value migrates to whoever guarantees outcomes. The peer-reviewed evidence on outcome-based models comes from manufacturing and shows that success needs an agreed distribution of value and a measurable outcome (Sjödin et al., 2020), conditions creation SaaS rarely meets. This is a checkable reason why outcome-based pricing, the first rival hypothesis, may be rare among the cases.

Peer-reviewed work on the SaaS model is thinner than the practitioner discussion. Cusumano (2008) and Cusumano et al. (2015) describe the move from products to services, and Giessmann and Legner (2016) and Khanagha et al. (2014) study cloud transitions. Software pricing theory (Lehmann & Buxmann, 2009) and the freemium literature (Wagner et al., 2014; Holm & Günzel-Jensen, 2017) predate variable AI cost and assume a negligible marginal cost of the free tier. No source models inference cost, and product-led growth, seat expansion and net revenue retention are absent from the peer-reviewed sources found.

### 3.4.5 Implications for the thesis

SQ2 can be operationalized with the course framework and the thickening-versus-patching distinction (Siggelkow, 2002), with Demil and Lecocq (2010) predicting that the economic model changes first. The theory informs the strategies unevenly: S1 through architectural innovation and cognition (Henderson & Clark, 1990; Tripsas & Gavetti, 2000), S2 and S3 through opening a closed model (Cozzolino et al., 2018) and coopetition (Ansari et al., 2016), S4 through complementary assets (Tripsas, 1997), S5 through value capture and freemium logic (Teece, 2010; Holm & Günzel-Jensen, 2017), and S7 through the asset-conflict rule (Kim & Min, 2015). The gaps the thesis can claim are the absence of any empirical study of how creation-oriented SaaS incumbents change business models when agents produce the artifacts, of any treatment of the external agent as a customer-side actor, and of a theory of access terms for agents as a business model component.

## 3.5 Entry barriers, new entrants and the incumbent's complementary assets

### 3.5.1 What the theory of entry barriers says

The classical account starts with Bain (1956): incumbents earn rents when entrants face scale economies, product differentiation, absolute cost advantages and capital requirements. Porter (1980, 2008) folds entry into the five forces, and Karakaya and Stahl (1989) operationalize the barriers for entry decisions. Caves and Porter (1977) show that barriers also protect strategic groups and lock firms inside them as mobility barriers. The course adds complementors as a sixth force through the value net, in which one player can be both complementor and competitor (Brandenburger & Nalebuff, 1996), and through the idea that a player's share of value reflects its added value (Brandenburger & Stuart, 1996). First-mover advantages (Lieberman & Montgomery, 1988, 1998), switching costs and network effects (Klemperer, 1995; Farrell & Klemperer, 2007) explain why an installed base can protect a product against a better entrant.

Generative AI acts mainly on two barrier families. It lowers the capital and skill needed to build, and some switching costs, since an agent can convert files and learn an interface for the user. It acts weakly on differentiation, distribution, network effects and customer-specific assets. The digital-economics baseline holds that replication and distribution costs fall toward zero (Goldfarb & Tucker, 2019); generative AI adds a positive marginal cost per use, which the baseline does not cover. This mapping is the review's synthesis, not a finding of any single source.

### 3.5.2 Evidence on entry, and its limits

The newest empirical work agrees on direction. A preprint on new ventures reports that generative AI fuels solo entrepreneurship while teams still lead at the top (Kim et al., 2026), the supervisor's "anyone can do it" in data. Another examines how AI coding tools affect digital entrepreneurship depending on founders' software expertise (Cao & Bhatia, 2025), and two studies of entrepreneurship after ChatGPT (Marchesi & Tang, 2025; Cai et al., 2025) are reported to point the same way. All four are working papers or preprints, I had access to summaries only, and the populations differ, so the evidence is consistent with "more and smaller entrants" and not yet with "more successful entrants". Experiments supply the micro-mechanism, with the largest gains for less experienced workers (Noy & Zhang, 2023; Brynjolfsson et al., 2025; Cui et al., 2026). Practitioner data describe the revenue side: Stripe reports faster early revenue growth among its AI customers than among earlier SaaS cohorts (Stripe, 2025a), Bessemer stresses fragile retention and thin margins (Bennett et al., 2025), and Gamma's founder reported USD 100 million in annual recurring revenue (Bort, 2025a). These figures are self-reported or investor-sourced and cover survivors.

Three lines caution against reading lower barriers as free software. The developer trial and its follow-up (Becker et al., 2025, 2026) do not generalize, but they show that gains are not automatic. Vendor security reports warn about flaws in generated code (Veracode, 2025), though their commercial interest is plain. And demand-side logic holds that customer value, not supply cost, decides advantage (Adner & Zemsky, 2006). My synthesis is that the cost of a first working version has fallen sharply for small, well-specified artifacts, while the cost of running, securing and supporting a product at scale has fallen much less; the SaaSpocalypse argument needs the distinction between building and operating.

### 3.5.3 Disruption, AI-native entrants and incumbents

Christensen's theory holds that incumbents fail because dependence on current customers steers investment toward sustaining improvements (Christensen & Bower, 1996), while disruptors begin at the low end or in new markets (Christensen et al., 2015); Gans (2016) adds that incumbents lose when entrants attract their customers and they fear cannibalization. For AI, Agrawal et al. (2022) offer the most useful split: point solutions that fit inside an existing workflow favour incumbents, whereas system solutions that redesign decisions favour entrants, because incumbents resist system change. For this thesis the question is whether an agent is a point solution (an in-product agent, S1) or a system solution (an external agent that does the whole job and uses the incumbent as a tool, S2). Practitioner essays predate the 2026 model-lab launches and are known here only through summaries; Stuart (2024) and Barney and Reeves (2024) ask whether the technology can confer a lasting advantage at all.

The most careful academic statement argues that old moats, resting on complementary assets such as compute, data and distribution, persist in generative AI (Azoulay et al., 2025). On data the evidence is more sceptical than practitioners' slogans: data-enabled learning gives an advantage only under conditions (Hagiu & Wright, 2020, 2023), data network effects depend on how user value grows with the data (Gregory et al., 2021), and a widely read investor essay argues that most claimed data network effects are scale effects with falling marginal value (Casado & Lauten, 2019). What matters for the cases is therefore which assets are specialized, not merely voluminous.

### 3.5.4 Model labs entering applications: platform entry, envelopment and coopetition

Model labs are not classical entrants: they are upstream suppliers and owners of distribution through chat interfaces. Platform theory gives the closest guidance. Platform owners enter complementors' markets when these are important and attractive (Gawer & Henderson, 2007; Zhu & Liu, 2018), complementors respond by retreating from threatened categories (Wen & Zhu, 2019), Foerderer et al. (2018) test whether such entry crowds out complementary innovation, and a platform with an overlapping user base can bundle a rival's functions and absorb its market (Eisenmann et al., 2011). Zhu and Iansiti (2012) analyze how installed-base advantages interact with an entrant's quality. Economic analysis of scaling and market structure in AI points toward concentration and downstream integration (Korinek & Vipra, 2024). Investor commentary describes a "wrapper" problem, in which model providers move up the stack with first-party applications (Gupta & Garg, 2025).

The relations are not only hostile. When Anthropic launched Claude Design in April 2026 (VentureBeat, 2026), trade coverage presented Canva as the design layer inside it (Next Web, 2026), and another account describes a market of "frenemies" (Fast Company, 2026). Figma's quarterly filing adds a risk factor that model providers may offer competing products and intermediate end-user relationships (Figma, Inc., 2026). This is coopetition in the sense of Brandenburger and Nalebuff (1996): Canva is at once a complementor, as the editing layer behind the agent, and a possible substitute. The added-value logic of Brandenburger and Stuart (1996) suggests that the lab keeps a partner only while the partner adds value the lab cannot cheaply replicate, which turns attention to the incumbent's assets.

### 3.5.5 Which incumbent assets should resist

The foundational reference is Teece (1986): who captures the returns from an innovation depends on appropriability, the dominant design and complementary assets (generic, specialized or co-specialized). Tripsas (1997), the closest design-industry analogue, shows typesetter incumbents with specialized assets surviving discontinuities. Rothaermel (2001) shows incumbents exploiting complementary assets through cooperation with entrants, and Teece (2018b) and Helfat and Raubitschek (2018) extend the logic to platform ecosystems. Combining these theories with the barrier mapping gives the following ranking, which is the review's own inference; no item is established empirically for creation SaaS.

Collaboration and shared libraries should resist best where use is multi-user, since network effects are not lowered (Farrell & Klemperer, 2007). Distribution and installed base should resist moderately, but they also help suite owners against the incumbent (Eisenmann et al., 2011). File formats and editable structure give medium protection, since agents convert files but editable layers have value (Klemperer, 1995). Templates, brand kits and design systems are customer-specific complementary assets, strongly protective if served to agents on the incumbent's terms (S4) and weakly if a lab can rebuild them from code and files. Proprietary data protects less than assumed (Hagiu & Wright, 2023; Casado & Lauten, 2019), model quality is a commodity input (Barney & Reeves, 2024), and the pre-AI skill barrier is the weakest asset, since general assistants offer the same promise (Adner & Zemsky, 2006).

Two assets cut both ways. Brand kits and design systems are information that an agent can read and in principle reconstruct, which is why the terms on which incumbents serve context become the battleground; the central risk of "going headless" is that serving the asset outward erodes the lock-in it creates (Hydari & Muzaffar, 2026a). For the cases, the literature predicts relatively strong resistance for Figma, whose structured files and multi-user canvas bring network effects, exposure for Canva and Grammarly, whose original promise was the skill barrier that general assistants now erode, and better resistance for Adobe as a bundle owner than for a stand-alone tool.

### 3.5.6 Implications for the thesis

The entry literature supports three propositions: build cost and skill barriers have fallen for small artifacts; the durable assets of an incumbent are complementary and customer-specific, not technological; and model labs behave as platform owners entering complementors' markets, in a relationship of coopetition. It challenges the naive readings that data alone is a moat and that software is now cheap to build in general. For the strategies, S1 is a point solution that defends without by itself creating a moat, S2 carries coopetition and envelopment risk, S4 is the core of the defence but also leaks the asset, S5 breaks the near-zero marginal cost assumption of the digital-economics baseline, S6 meets mobility barriers (Caves & Porter, 1977), and S7 fits the absorption of disruptors (Ansari et al., 2016). The gaps this thesis can claim are the application of entry-barrier and platform-entry theory to creation SaaS facing model-lab products, with dated cases, and the specification of which assets are served to agents, on what terms, and with what effect on added value.

## References (part A)

Abou Ali, M., Dornaika, F., & Charafeddine, J. (2025). Agentic AI: A comprehensive survey of architectures, applications, and future directions. *Artificial Intelligence Review, 59*(1), Article 11. https://doi.org/10.1007/s10462-025-11422-4

Adner, R., & Zemsky, P. (2006). A demand-based perspective on sustainable competitive advantage. *Strategic Management Journal, 27*(3), 215–239. https://doi.org/10.1002/smj.513

Agrawal, A., Gans, J., & Goldfarb, A. (2022). *Power and prediction: The disruptive economics of artificial intelligence*. Harvard Business Review Press.

Ahern, G., Zhang, S., & Immerman, A. (2026). *From 'system of record' to 'system of intelligence'*. Andreessen Horowitz. https://a16z.com/from-system-of-record-to-system-of-intelligence/

Amble, S. (2026). *Is software losing its head?* Andreessen Horowitz. https://a16z.com/is-software-losing-its-head/

Ansari, S., Garud, R., & Kumaraswamy, A. (2016). The disruptor's dilemma: TiVo and the U.S. television ecosystem. *Strategic Management Journal, 37*(9), 1829–1853. https://doi.org/10.1002/smj.2442

Anthropic. (2024a). *Building effective agents*. https://www.anthropic.com/engineering/building-effective-agents

Anthropic. (2024b). *Introducing the Model Context Protocol*. https://www.anthropic.com/news/model-context-protocol

Anthropic. (2025). *Anthropic Economic Index: Understanding AI's effects on the economy (September 2025 report)*. https://www.anthropic.com/research/anthropic-economic-index-september-2025-report

Anthropic. (2026). *Measuring AI agent autonomy in practice*. https://anthropic.com/news/measuring-agent-autonomy

Azoulay, P., Krieger, J. L., & Nagaraj, A. (2025). Old moats for new models: Openness, control, and competition in generative artificial intelligence. *Entrepreneurship and Innovation Policy and the Economy, 4*, 7–46. https://doi.org/10.1086/732852

Bain, J. S. (1956). *Barriers to new competition: Their character and consequences in manufacturing industries*. Harvard University Press. https://doi.org/10.4159/harvard.9780674188037

Baird, A., & Maruping, L. M. (2021). The next generation of research on IS use: A theoretical framework of delegation to and from agentic IS artifacts. *MIS Quarterly, 45*(1), 315–341. https://doi.org/10.25300/MISQ/2021/15882

Ball, J. (2026, February 13). *Clouded Judgement 2.13.26: Build vs buy* [Newsletter]. Clouded Judgement. https://cloudedjudgement.substack.com/p/clouded-judgement-21326-build-vs

Barney, J. B., & Reeves, M. (2024). AI won't give you a new sustainable advantage. *Harvard Business Review*. https://www.bcg.com/publications/2024/ai-wont-give-you-a-new-sustainable-advantage

Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). *Measuring the impact of early-2025 AI on experienced open-source developer productivity* (arXiv:2507.09089). arXiv. https://arxiv.org/abs/2507.09089

Becker, J., Rush, N., Cunningham, T., Rein, D., & Mahamud, K. (2026, February 24). *We are changing our developer productivity experiment design* [Blog post]. METR. https://metr.org/blog/2026-02-24-uplift-update/

Bennett, K., Goldberg, T., Teng Wade, J., Dholakia, S., et al. (2025). *The state of AI 2025*. Bessemer Venture Partners. https://www.bvp.com/atlas/the-state-of-ai-2025

Berente, N., Gu, B., Recker, J., & Santhanam, R. (2021). Managing artificial intelligence. *MIS Quarterly, 45*(3), 1433–1450. https://doi.org/10.25300/MISQ/2021/16274

Bhushan, K. (2026). Market reactions to generative AI announcements: An event study analysis of abnormal returns, 2022–2025. *Journal of Economic Research & Reviews*. https://doi.org/10.33140/jerr.06.01.02

Biilmann, M. (2025). *Introducing AX: Why agent experience matters* [Blog post]. https://biilmann.blog/articles/introducing-ax/

Bloomberg. (2026, February 3). *'Get me out': Traders dump software stocks as AI fears erupt*. Bloomberg News. https://www.bloomberg.com/news/articles/2026-02-03/-get-me-out-traders-dump-software-stocks-as-ai-fears-take-hold

Bloomberg Law, Decrypt, MediaPost, & others. (2026). *Amazon v. Perplexity (Comet shopping agent): Preliminary injunction and appeal* [News coverage]. https://decrypt.co/360629/amazon-perplexity-comet-court-order-agentic-commerce

Bohnsack, R., & de Wet, M. (2025). *AI is the strategy: From agentic AI to autonomous business models onto strategy in the age of AI* (arXiv:2506.17339). arXiv. https://arxiv.org/abs/2506.17339

Bort, J. (2025a, November 10). *AI PowerPoint-killer Gamma hits $2.1B valuation, $100M ARR, founder says*. TechCrunch. https://techcrunch.com/2025/11/10/ai-powerpoint-killer-gamma-hits-2-1b-valuation-100m-arr-founder-says/

Bort, J. (2025b, March 4). *Klarna CEO doubts that other companies will replace Salesforce with AI*. TechCrunch. https://techcrunch.com/2025/03/04/klarna-ceo-doubts-that-other-companies-will-replace-salesforce-with-ai

Brandenburger, A. M., & Nalebuff, B. J. (1996). *Co-opetition*. Currency Doubleday.

Brandenburger, A. M., & Stuart, H. W. (1996). Value-based business strategy. *Journal of Economics & Management Strategy, 5*(1), 5–24. https://doi.org/10.1111/j.1430-9134.1996.00005.x

Brynjolfsson, E., Li, D., & Raymond, L. (2025). Generative AI at work. *Quarterly Journal of Economics, 140*(2), 889–942. https://doi.org/10.1093/qje/qjae044

Cai, J. J., Gu, X., et al. (2025). *AI as 'co-founder': GenAI for entrepreneurship* (arXiv:2512.06506). arXiv. https://arxiv.org/pdf/2512.06506

Cao, R., & Bhatia, A. (2025). *AI coding tools and digital entrepreneurship: The role of software expertise* (arXiv:2511.06545). arXiv. https://arxiv.org/abs/2511.06545

Casadesus-Masanell, R., & Ricart, J. E. (2010). From strategy to business models and onto tactics. *Long Range Planning, 43*(2–3), 195–215. https://doi.org/10.1016/j.lrp.2010.01.004

Casado, M., & Lauten, P. (2019, May 9). *The empty promise of data moats*. Andreessen Horowitz. https://a16z.com/the-empty-promise-of-data-moats/

Caves, R. E., & Porter, M. E. (1977). From entry barriers to mobility barriers: Conjectural decisions and contrived deterrence to new competition. *Quarterly Journal of Economics, 91*(2), 241–261. https://doi.org/10.2307/1885416

Chen, J., & Gupta, J. (2024, April 19). *AI leads a service as software paradigm shift*. Foundation Capital. https://foundationcapital.com/ai-service-as-software/

Chesbrough, H. (2010). Business model innovation: Opportunities and barriers. *Long Range Planning, 43*(2–3), 354–363. https://doi.org/10.1016/j.lrp.2009.07.010

Chesbrough, H., & Rosenbloom, R. S. (2002). The role of the business model in capturing value from innovation: Evidence from Xerox Corporation's technology spin-off companies. *Industrial and Corporate Change, 11*(3), 529–555. https://doi.org/10.1093/icc/11.3.529

Christensen, C. M., & Bower, J. L. (1996). Customer power, strategic investment, and the failure of leading firms. *Strategic Management Journal, 17*(3), 197–218. https://doi.org/10.1002/(sici)1097-0266(199603)17:3<197::aid-smj804>3.0.co;2-u

Christensen, C. M., McDonald, R., Altman, E., & Palmer, J. (2018). Disruptive innovation: An intellectual history and directions for future research. *Journal of Management Studies, 55*(7), 1043–1078. https://doi.org/10.1111/joms.12349

Christensen, C. M., Raynor, M. E., & McDonald, R. (2015). What is disruptive innovation? *Harvard Business Review, 93*(12), 44–53. https://hbr.org/2015/12/what-is-disruptive-innovation

Coda, V. (2012). The evaluation of the entrepreneurial formula. *European Management Review, 9*(2), 63–74. https://doi.org/10.1111/j.1740-4762.2012.01030.x

Cozzolino, A., Verona, G., & Rothaermel, F. T. (2018). Unpacking the disruption process: New technology, business models, and incumbent adaptation. *Journal of Management Studies, 55*(7), 1166–1202. https://doi.org/10.1111/joms.12352

Crawford, D., McLaughlin, C., Doddapaneni, P., & Fiore, G. (2025, September 23). *Will agentic AI disrupt SaaS?* (Technology Report 2025). Bain & Company. https://www.bain.com/insights/will-agentic-ai-disrupt-saas-technology-report-2025/

CRN Asia. (2025). *Salesforce Q3 earnings: CEO Benioff calls SaaS industry's death by AI a 'false narrative'*. https://www.crnasia.com/news-network/2025/salesforce-q3-earnings-ceo-benioff-calls-saas-industry-s-dea

Cui, K. Z., Demirer, M., Jaffe, S., Musolff, L., Peng, S., & Salz, T. (2026). The effects of generative AI on high-skilled work: Evidence from three field experiments with software developers. *Management Science, 72*(11), 9408–9420. https://doi.org/10.1287/mnsc.2025.00535

Cusumano, M. A. (2008). The changing software business: Moving from products to services. *Computer, 41*(1), 20–27. https://doi.org/10.1109/mc.2008.29

Cusumano, M. A. (2010). Cloud computing and SaaS as new computing platforms. *Communications of the ACM, 53*(4), 27–29. https://doi.org/10.1145/1721654.1721667

Cusumano, M. A., Kahl, S. J., & Suarez, F. F. (2015). Services, industry evolution, and the competitive strategies of product firms. *Strategic Management Journal, 36*(4), 559–575. https://doi.org/10.1002/smj.2235

Danneels, E. (2004). Disruptive technology reconsidered: A critique and research agenda. *Journal of Product Innovation Management, 21*(4), 246–258. https://doi.org/10.1111/j.0737-6782.2004.00076.x

Dell'Acqua, F., McFowland, E., III, Mollick, E., Lifshitz-Assaf, H., et al. (2026). Navigating the jagged technological frontier: Field experimental evidence of the effects of artificial intelligence on knowledge worker productivity and quality. *Organization Science, 37*(2), 403–423. https://doi.org/10.1287/orsc.2025.21838

Deloitte. (2025). *The agentic reality check: Preparing for a silicon-based workforce* (Tech Trends 2026). Deloitte Insights. https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/agentic-ai-strategy.html

Demil, B., & Lecocq, X. (2010). Business model evolution: In search of dynamic consistency. *Long Range Planning, 43*(2–3), 227–246. https://doi.org/10.1016/j.lrp.2010.02.004

diginomica. (2025). *Those shutting down Salesforce and Workday rumors from Klarna...no, we didn't replace SaaS with an LLM, admits CEO*. https://www.diginomica.com/those-shutting-down-salesforce-and-workday-rumors-klarna-no-we-didnt-replace-saas-llm-admits-ceo

Doshi, A. R., & Hauser, O. P. (2024). Generative AI enhances individual creativity but reduces the collective diversity of novel content. *Science Advances, 10*(28), Article eadn5290. https://doi.org/10.1126/sciadv.adn5290

Eggers, J. P., & Park, K. F. (2018). Incumbent adaptation to technological change: The past, present, and future of research on heterogeneous incumbent response. *Academy of Management Annals, 12*(1), 357–389. https://doi.org/10.5465/annals.2016.0051

Eisenberg, S., Corradi, G., & Srinivasan, P. (2026, October). *Managing the AI pricing transition: Seats versus usage*. Oliver Wyman. https://www.oliverwyman.com/our-expertise/insights/2026/oct/managing-ai-pricing-transition-beyond-seats.html

Eisenmann, T., Parker, G., & Van Alstyne, M. (2011). Platform envelopment. *Strategic Management Journal, 32*(12), 1270–1285. https://doi.org/10.1002/smj.935

EY. (2026, July 28). *EY survey: C-suites pivot from AI adoption to unlocking value as escalating token costs trigger fiscal scrutiny* [Press release]. Ernst & Young LLP. https://www.ey.com/en_us/newsroom/2026/07/ey-survey-c-suites-pivot-from-ai-adoption-to-unlocking-value-as-escalating-token-costs-trigger-fiscal-scrutiny

Farrell, J., & Klemperer, P. (2007). Coordination and lock-in: Competition with switching costs and network effects. In M. Armstrong & R. Porter (Eds.), *Handbook of industrial organization* (Vol. 3, pp. 1967–2072). Elsevier. https://doi.org/10.1016/S1573-448X(06)03031-7

Fast Company. (2026). *Design tech's hot mess: Claude Design vs. Adobe, Canva, and Figma (Design enters its frenemies era)*. https://www.fastcompany.com/91538439/design-enters-its-frenemies-era

Feng, K. J. K., McDonald, D. W., & Zhang, A. X. (2025). *Levels of autonomy for AI agents* (arXiv:2506.12469). arXiv. https://arxiv.org/abs/2506.12469

Figma, Inc. (2026). *Form 10-Q for the quarterly period ended March 31, 2026* (risk factor on model providers competing and intermediating; EDGAR file fig-20260331.htm). U.S. Securities and Exchange Commission.

Fisher, R. (2024). *Microsoft CEO: AI agents will transform SaaS as we know it*. CX Today. https://www.cxtoday.com/data-analytics/microsoft-ceo-ai-agents-will-transform-saas-as-we-know-it/

Foerderer, J., Kude, T., Mithas, S., & Heinzl, A. (2018). Does platform owner's entry crowd out innovation? Evidence from Google Photos. *Information Systems Research, 29*(2), 444–460. https://doi.org/10.1287/isre.2018.0787

Forrester. (2026, October 28). *Predictions 2027: The outcome economy hits enterprise software, and reality hits back* [Blog post]. https://www.forrester.com/blogs/predictions-2027-the-outcome-economy-hits-enterprise-software-and-reality-hits-back/

Foss, N. J., & Saebi, T. (2017). Fifteen years of research on business model innovation: How far have we come, and where should we go? *Journal of Management, 43*(1), 200–227. https://doi.org/10.1177/0149206316675927

Gans, J. S. (2016). *The disruption dilemma*. MIT Press.

Garousi, V., Felderer, M., & Mäntylä, M. V. (2019). Guidelines for including grey literature and conducting multivocal literature reviews in software engineering. *Information and Software Technology, 106*, 101–121. https://doi.org/10.1016/j.infsof.2018.09.006

Gartner. (2025, June 25). *Gartner predicts over 40% of agentic AI projects will be canceled by end of 2027* [Press release]. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027

Gawer, A., & Cusumano, M. A. (2014). Industry platforms and ecosystem innovation. *Journal of Product Innovation Management, 31*(3), 417–433. https://doi.org/10.1111/jpim.12105

Gawer, A., & Henderson, R. (2007). Platform owner entry and innovation in complementary markets: Evidence from Intel. *Journal of Economics & Management Strategy, 16*(1), 1–34. https://doi.org/10.1111/j.1530-9134.2007.00130.x

Giessmann, A., & Legner, C. (2016). Designing business models for cloud platforms. *Information Systems Journal, 26*(5), 551–579. https://doi.org/10.1111/isj.12107

Gilbert, C. G. (2005). Unbundling the structure of inertia: Resource versus routine rigidity. *Academy of Management Journal, 48*(5), 741–763. https://doi.org/10.5465/amj.2005.18803920

Goldfarb, A., & Tucker, C. (2019). Digital economics. *Journal of Economic Literature, 57*(1), 3–43. https://doi.org/10.1257/jel.20171452

Gregory, R. W., Henfridsson, O., Kaganer, E., & Kyriakou, H. (2021). The role of artificial intelligence and data network effects for creating user value. *Academy of Management Review, 46*(3), 534–551. https://doi.org/10.5465/amr.2019.0178

Guimaraes Figueira, M. (2026). *Brand erasure: A research agenda for brand theory in agentic AI markets* (SSRN Working Paper 6740079). https://doi.org/10.2139/ssrn.6740079

Guo, H., Hao, Y., Zhang, Y., Xu, M., Lv, P., Chen, J., & Cheng, X. (2025). *A measurement study of Model Context Protocol ecosystem* (arXiv:2509.25292). arXiv. https://arxiv.org/abs/2509.25292

Gupta, J., & Garg, A. (2025). *When model providers eat everything: A survival guide for service-as-software startups*. Foundation Capital. https://foundationcapital.com/when-model-providers-eat-everything-a-survival-guide-for-service-as-software-startups/

Hagiu, A., & Wright, J. (2020, January–February). When data creates competitive advantage... and when it doesn't. *Harvard Business Review*. https://hbr.org/2020/01/when-data-creates-competitive-advantage

Hagiu, A., & Wright, J. (2023). Data-enabled learning, network effects, and competitive advantage. *RAND Journal of Economics, 54*(4), 638–667. https://doi.org/10.1111/1756-2171.12453

Hasan, M. M., Li, H., Fallahzadeh, E., Rajbahadur, G. K., Adams, B., & Hassan, A. E. (2025). *Model Context Protocol (MCP) at first glance: Studying the security and maintainability of MCP servers* (arXiv:2506.13538). arXiv. https://arxiv.org/abs/2506.13538

Helfat, C. E., & Raubitschek, R. S. (2018). Dynamic and integrative capabilities for profiting from innovation in digital platform-based ecosystems. *Research Policy, 47*(8), 1391–1399. https://doi.org/10.1016/j.respol.2018.01.019

Henderson, R. M., & Clark, K. B. (1990). Architectural innovation: The reconfiguration of existing product technologies and the failure of established firms. *Administrative Science Quarterly, 35*(1), 9–30. https://doi.org/10.2307/2393549

Hill, C. W. L., & Rothaermel, F. T. (2003). The performance of incumbent firms in the face of radical technological innovation. *Academy of Management Review, 28*(2), 257–274. https://doi.org/10.2307/30040712

Holm, A. B., & Günzel-Jensen, F. (2017). Succeeding with freemium: Strategies for implementation. *Journal of Business Strategy, 38*(2), 16–24. https://doi.org/10.1108/jbs-09-2016-0096

Huang, K.-H., Prabhakar, A., Thorat, O., et al. (2025). *CRMArena-Pro: Holistic assessment of LLM agents across diverse business scenarios and interactions* (arXiv:2505.18878). arXiv. https://arxiv.org/abs/2505.18878

Hunton Andrews Kurth LLP. (2025). *Salesforce locks down Slack data: Time to review your Slack API terms* [Blog post]. Hunton privacy and cybersecurity law blog. https://www.hunton.com/privacy-and-cybersecurity-law-blog/salesforce-locks-down-slack-data-time-to-review-your-slack-api-terms

Hydari, M. Z., & Muzaffar, F. (2026a). *Going headless? On the boundaries of vertical AI firms* (arXiv:2605.17812). arXiv. https://arxiv.org/abs/2605.17812

Hydari, M. Z., & Muzaffar, F. (2026b). *Redrawing the AI map: A theory of accountability boundaries in agentic ecosystems* (arXiv:2605.23179). arXiv. https://arxiv.org/abs/2605.23179

ICONIQ Growth. (2026). *2026 state of AI report: The builder's economy*. ICONIQ. https://www.iconiq.com/growth/reports/state-of-ai-2026

Jorzik, P., Klein, S., Kanbach, D., & Kraus, S. (2024). AI-driven business model innovation: A systematic review and research agenda. *Journal of Business Research, 182*, Article 114764. https://doi.org/10.1016/j.jbusres.2024.114764

Kanbach, D., Heiduk, L., Blueher, G., Schreiter, M., & Lahmann, A. (2023). The GenAI is out of the bottle: Generative artificial intelligence from a business model innovation perspective. *Review of Managerial Science, 18*(4), 1189–1220. https://doi.org/10.1007/s11846-023-00696-z

Kapoor, S., Stroebl, B., Siegel, Z. S., Nadgir, N., & Narayanan, A. (2024). *AI agents that matter* (arXiv:2407.01502). arXiv. https://arxiv.org/abs/2407.01502

Karakaya, F., & Stahl, M. J. (1989). Barriers to entry and market entry decisions in consumer and industrial goods markets. *Journal of Marketing, 53*(2), 80–91. https://doi.org/10.1177/002224298905300206

Khanagha, S., Volberda, H., & Oshri, I. (2014). Business model renewal and ambidexterity: Structural alteration and strategy formation process during transition to a cloud business model. *R&D Management, 44*(3), 322–340. https://doi.org/10.1111/radm.12070

Kim, H., Kang, H., & Song, J. (2026). *Generative AI fuels solo entrepreneurship, but teams still lead at the top* (arXiv:2605.10291). arXiv. https://arxiv.org/abs/2605.10291

Kim, S., & Min, S. (2015). Business model innovation performance: When does adding a new business model benefit an incumbent? *Strategic Entrepreneurship Journal, 9*(1), 34–57. https://doi.org/10.1002/sej.1193

Klein, T., & Wieczorek, S. (2026). *The headless firm: How AI reshapes enterprise boundaries* (arXiv:2602.21401). arXiv. https://arxiv.org/abs/2602.21401

Klemperer, P. (1995). Competition when consumers have switching costs: An overview with applications to industrial organization, macroeconomics, and international trade. *Review of Economic Studies, 62*(4), 515–539. https://doi.org/10.2307/2298075

Klotz, D. (2026). *The buy-or-build decision, revisited: How agentic AI changes the economics of enterprise software* (arXiv:2604.26482). arXiv. https://arxiv.org/abs/2604.26482

Kolt, N. (2025). *Governing AI agents* (arXiv:2501.07913). arXiv. https://arxiv.org/abs/2501.07913

Korinek, A., & Vipra, J. (2024). *Concentrating intelligence: Scaling and market structure in artificial intelligence* (NBER Working Paper No. 33139). National Bureau of Economic Research. https://doi.org/10.3386/w33139

Kumaraswamy, A., Garud, R., & Ansari, S. (2018). Perspectives on disruptive innovations. *Journal of Management Studies, 55*(7), 1025–1042. https://doi.org/10.1111/joms.12399

Lù, X. H., Kamath, G., Mosbach, M., & Reddy, S. (2025). *Build the web for agents, not agents for the web* (arXiv:2506.10953). arXiv. https://arxiv.org/abs/2506.10953

Le Clair, C. (2026, August 19). *Beyond the 'SaaSpocalypse': Introducing the Forrester AI disruption model* [Blog post]. Forrester. https://www.forrester.com/blogs/beyond-the-saaspocalypse-introducing-the-forrester-ai-disruption-model/

Leggett, K. (2026, February 11). *SaaS as we know it is dead: How to survive the SaaS-pocalypse!* [Blog post]. Forrester. https://www.forrester.com/blogs/saas-as-we-know-it-is-dead-how-to-survive-the-saas-pocalypse

Lehmann, S., & Buxmann, P. (2009). Pricing strategies of software vendors. *Business & Information Systems Engineering, 1*(6), 452–462. https://doi.org/10.1007/s12599-009-0075-y

Lemkin, J. (2026). *The SaaS rout of 2026 is even worse than you think. For the first time ever, software now trades at a discount to the S&P 500*. SaaStr. https://www.saastr.com/the-saas-rout-of-2026-is-even-worse-than-you-think-for-the-first-time-ever-software-now-trades-at-a-discount-to-the-sp-500

Li, S., Qu, X., & Divekar, R. (2026, August 21). How generative AI reshapes business models: A review through the business model canvas. *California Management Review Insight*. https://cmr.berkeley.edu/2026/08/how-generative-ai-reshapes-business-models-a-review-through-the-business-model-canvas/

Lieberman, M. B., & Montgomery, D. B. (1988). First-mover advantages. *Strategic Management Journal, 9*(S1), 41–58. https://doi.org/10.1002/smj.4250090706

Lieberman, M. B., & Montgomery, D. B. (1998). First-mover (dis)advantages: Retrospective and link with the resource-based view. *Strategic Management Journal, 19*(12), 1111–1125. https://doi.org/10.1002/(SICI)1097-0266(1998120)19:12<1111::AID-SMJ21>3.0.CO;2-W

Lipman, D., Callahan, G., Fiore, G., Kieffer, G., & Bosche, A. (2026a, February 9). *Why SaaS stocks have dropped, and what it signals for software's next chapter*. Bain & Company. https://www.bain.com/insights/why-saas-stocks-have-dropped-and-what-it-signals-for-softwares-next-chapter/

Lipman, D., Perry, C., Holliday, J., & Chabrelie, T. (2026b). *Software investing in the age of AI and slower growth* (Technology Report 2026). Bain & Company. https://www.bain.com/insights/software-investing-in-the-age-of-ai-and-slower-growth-technology-report-2026/

Maltiel, E., & Sandberg, J. (2025). *Per-seat software pricing isn't dead, but new models are gaining steam*. Bain & Company. https://www.bain.com/insights/per-seat-software-pricing-isnt-dead-but-new-models-are-gaining-steam/

Marchesi, E., & Tang, S. (2025). *When AI meets entrepreneurship: Evidence from the commercialization of ChatGPT* (SSRN Working Paper 5759264). https://doi.org/10.2139/ssrn.5759264

Massa, L., Tucci, C. L., & Afuah, A. (2017). A critical assessment of business model research. *Academy of Management Annals, 11*(1), 73–104. https://doi.org/10.5465/annals.2014.0072

Mazeika, M., Gatti, A., Menghini, C., et al. (2025). *Remote Labor Index: Measuring AI automation of remote work* (arXiv:2510.26787). arXiv. https://arxiv.org/abs/2510.26787

McKinsey & Company. (2025). *The state of AI in 2025: Agents, innovation, and transformation*. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai

MIT NANDA. (2025). *The GenAI divide: State of AI in business 2025* [Preliminary report; accessed through press coverage]. https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/

Moshkovich, J. (2026, March 10). *Software isn't dead. What's valuable is changing*. 8VC. https://8vc.com/resources/software-isnt-dead-whats-valuable-is-changing

Najmaei, A., & Sadeghinejad, Z. (2026). *From instrument to economic actor: Generative and agentic AI as a new logic of business model innovation* [Preprint]. Preprints.org. https://doi.org/10.20944/preprints202609.0835.v1

Next Web. (2026, April 17). *Canva and Anthropic: Canva Design Engine inside Claude Design* [headline: Canva becomes the design layer inside Claude with new Anthropic partnership]. The Next Web. https://thenextweb.com/news/canva-anthropic-claude-design-ai-powered-visual-suite

Normann, R. (1977). *Management for growth*. Wiley.

Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. *Science, 381*(6654), 187–192. https://doi.org/10.1126/science.adh2586

OfficeChai. (2024). *SaaS applications 'will collapse' in the AI agent era: Microsoft CEO Satya Nadella* [Transcript excerpt]. https://officechai.com/stories/saas-applications-will-collapse-in-the-ai-agent-era-microsoft-ceo-satya-nadella/

OpenAI. (2025, October 6). *Introducing apps in ChatGPT and the new Apps SDK*. https://openai.com/index/introducing-apps-in-chatgpt/

O'Reilly, C. A., III, & Tushman, M. L. (2013). Organizational ambidexterity: Past, present, and future. *Academy of Management Perspectives, 27*(4), 324–338. https://doi.org/10.5465/amp.2013.0025

Osmonbekov, M. (2026, August 12). *AI was supposed to power Canva's next act. It also exposed software's most expensive problem*. Fortune. https://www.fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/

Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics, Part A, 30*(3), 286–297. https://doi.org/10.1109/3468.844354

Parolini, C. (2021). *Business planning: Turning an idea into a reality*. Cinzia Parolini. https://iris.unimore.it/handle/11380/1295186

Pattison, C., Boulos, M., Kolt, N., Li, C., Piccardi, T., & Lazar, S. (2026). *The agentic web requires new normative infrastructure* (arXiv:2606.10711). arXiv. https://arxiv.org/abs/2606.10711

Patwardhan, T., Dias, R., Proehl, E., et al. (2025). *GDPval: Evaluating AI model performance on real-world economically valuable tasks* (arXiv:2510.04374). arXiv. https://arxiv.org/abs/2510.04374

Pineda, J., McClure, A., & Woody, S. (2026). *How SaaS pricing must change for agentic AI in 2026*. Boston Consulting Group. https://www.bcg.com/publications/2026/saas-pricing-must-change-agentic-ai

Porter, M. E. (1980). *Competitive strategy: Techniques for analyzing industries and competitors*. Free Press.

Porter, M. E. (2008). The five competitive forces that shape strategy. *Harvard Business Review, 86*(1), 78–93. https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy

PYMNTS & The Next Web. (2026, May 15). *After Claude Design launched, Figma raised its full-year outlook*. PYMNTS. https://www.pymnts.com/artificial-intelligence-2/2026/after-claude-design-launched-figma-raised-its-full-year-outlook/

Raisch, S., & Birkinshaw, J. (2008). Organizational ambidexterity: Antecedents, outcomes, and moderators. *Journal of Management, 34*(3), 375–409. https://doi.org/10.1177/0149206308316058

Rothaermel, F. T. (2001). Incumbent's advantage through exploiting complementary assets via interfirm cooperation. *Strategic Management Journal, 22*(6–7), 687–699. https://doi.org/10.1002/smj.180

Rothschild, D. M., Hofman, J. M., Mobius, M., Lucier, B., Dillon, E., Goldstein, D. G., Immorlica, N., & Slivkins, A. (2026). *From augmentation to reconstruction: Guiding the AI disruption to the good place* (arXiv:2605.29207). arXiv. https://arxiv.org/abs/2605.29207

Rothschild, D. M., Mobius, M., Hofman, J. M., et al. (2025). *The agentic economy* (arXiv:2505.15799). arXiv. https://arxiv.org/abs/2505.15799

Saebi, T., Lien, L., & Foss, N. J. (2017). What drives business model adaptation? The impact of opportunities, threats and strategic orientation. *Long Range Planning, 50*(5), 567–581. https://doi.org/10.1016/j.lrp.2016.06.006

Saha, E. (2026). *Decommissioning enterprise software: AI agents and the collapse of the replication moat* (SSRN Working Paper 7601279). https://doi.org/10.2139/ssrn.7601279

Sahni, S. (2026). *Are B2B software vendors readable by AI assistants? Evidence from 251 homepages* (SSRN Working Paper 7661203). https://doi.org/10.2139/ssrn.7661203

Salesforce. (2026, April). *Introducing Salesforce Headless 360: No browser required*. https://www.salesforce.com/news/stories/salesforce-headless-360-announcement/

Sapkota, R., Roumeliotis, K. I., & Karkee, M. (2026). AI agents vs. agentic AI: A conceptual taxonomy, applications and challenges. *Information Fusion, 126*, Article 103599. https://doi.org/10.1016/j.inffus.2025.103599

Sarracino, S., & Vickery, J. (2026, May). *Software is dead?! Death by a thousand cuts*. Activant Capital. https://www.activantcapital.com/pdfs/software-is-dead-1-of-2.pdf

Schuler, M. (2026, February 4). *Software lost $300 billion in a day. Anthropic was just the excuse*. Implicator.ai. https://www.implicator.ai/software-lost-300-billion-in-a-day-anthropic-was-just-the-excuse/

Shahidi, P., Rusak, G., Manning, B. S., Fradkin, A., & Horton, J. J. (2025). *The Coasean singularity? Demand, supply, and market design with AI agents* (NBER Working Paper No. 34468). National Bureau of Economic Research. https://doi.org/10.3386/w34468

Siggelkow, N. (2002). Evolution toward fit. *Administrative Science Quarterly, 47*(1), 125–159. https://doi.org/10.2307/3094893

Sjödin, D., Parida, V., Jovanovic, M., & Visnjic, I. (2020). Value creation and value capture alignment in business model innovation: A process view on outcome-based business models. *Journal of Product Innovation Management, 37*(2), 158–183. https://doi.org/10.1111/jpim.12516

Sosna, M., Trevinyo-Rodríguez, R. N., & Velamuri, S. R. (2010). Business model innovation through trial-and-error learning: The Naturhouse case. *Long Range Planning, 43*(2–3), 383–407. https://doi.org/10.1016/j.lrp.2010.02.003

Stanford HAI. (2026, April 13). *The 2026 AI Index report*. Stanford Institute for Human-Centered AI. https://hai.stanford.edu/ai-index/2026-ai-index-report

Stanton, C. (2026, May 27). AI's impact on SaaS will be uneven. Here's what leaders need to know. *Harvard Business Review*. https://hbr.org/2026/05/ais-impact-on-saas-will-be-uneven-heres-what-leaders-need-to-know

Stewart, R., Anise, O., Hogan, A., & Griffin, A. (2026). *Does AI save time on product design? A randomized controlled experiment of AI prompt-to-design workflows* (arXiv:2609.26725). arXiv. https://arxiv.org/abs/2609.26725

Stripe. (2025a). *Inside the growth of the top AI companies on Stripe*. https://stripe.com/at/blog/inside-the-growth-of-the-top-ai-companies-on-stripe

Stripe. (2025b, September 29). *Stripe powers Instant Checkout in ChatGPT and releases the Agentic Commerce Protocol co-developed with OpenAI* [Press release]. https://stripe.com/newsroom/news/stripe-openai-instant-checkout

Stuart, T. E. (2024, November 21). Could gen AI end incumbent firms' competitive advantage? *Harvard Business Review Digital Articles*. https://store.hbr.org/product/could-gen-ai-end-incumbent-firms-competitive-advantage/H08HL4

Surapaneni, R., Jha, M., Vakoc, M., & Segal, T. (2025, April 9). *Announcing the Agent2Agent Protocol (A2A)*. Google Developers Blog. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/

Swain, G. (2026). *Earnings from SAP, ServiceNow, and IBM challenge the SaaSpocalypse narrative*. CIO.com. https://www.cio.com/article/4202236/earnings-from-sap-servicenow-and-ibm-challenge-the-saaspocalypse-narrative.html

Swain, G., & Gross, P. (2026). *Agentic AI puts $234B in enterprise SaaS spending at risk, Gartner says*. CIO.com; CIO Dive. https://www.cio.com/article/4192242/agentic-ai-puts-234b-in-enterprise-saas-spending-at-risk-gartner-says.html

Tagliapietra Sanabria, G. (2026). *The outcome economy: A business model design framework for the post-SaaS era of autonomous AI agents* (SSRN Working Paper 6395799). https://doi.org/10.2139/ssrn.6395799

Teece, D. J. (1986). Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy. *Research Policy, 15*(6), 285–305. https://doi.org/10.1016/0048-7333(86)90027-2

Teece, D. J. (2007). Explicating dynamic capabilities: The nature and microfoundations of (sustainable) enterprise performance. *Strategic Management Journal, 28*(13), 1319–1350. https://doi.org/10.1002/smj.640

Teece, D. J. (2010). Business models, business strategy and innovation. *Long Range Planning, 43*(2–3), 172–194. https://doi.org/10.1016/j.lrp.2009.07.003

Teece, D. J. (2018a). Business models and dynamic capabilities. *Long Range Planning, 51*(1), 40–49. https://doi.org/10.1016/j.lrp.2017.06.007

Teece, D. J. (2018b). Profiting from innovation in the digital economy: Enabling technologies, standards, and licensing models in the wireless world. *Research Policy, 47*(8), 1367–1387. https://doi.org/10.1016/j.respol.2017.01.015

The Linux Foundation. (2025, December 9). *Linux Foundation announces the formation of the Agentic AI Foundation (AAIF) with MCP, goose and AGENTS.md* [Press release]. https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation

Tripsas, M. (1997). Unraveling the process of creative destruction: Complementary assets and incumbent survival in the typesetter industry. *Strategic Management Journal, 18*(S1), 119–142. https://doi.org/10.1002/(sici)1097-0266(199707)18:1+<119::aid-smj921>3.0.co;2-0

Tripsas, M., & Gavetti, G. (2000). Capabilities, cognition, and inertia: Evidence from digital imaging. *Strategic Management Journal, 21*(10–11), 1147–1161. https://doi.org/10.1002/1097-0266(200010/11)21:10/11<1147::aid-smj128>3.0.co;2-r

Tushman, M. L., & Anderson, P. (1986). Technological discontinuities and organizational environments. *Administrative Science Quarterly, 31*(3), 439–465. https://doi.org/10.2307/2392832

Umoh, R. (2026, April 1). *Adobe faces an AI-era test of whether the creative economy still needs it*. Fortune. https://www.fortune.com/article/adobe-ai-era-test-creative-economy-software

VentureBeat. (2026, April 17). *Anthropic just launched Claude Design, an AI tool that turns prompts into prototypes and challenges Figma*. https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma

Veracode. (2025). *2025 GenAI code security report*. https://www.veracode.com/resources/genai-code-security-report/

Verganti, R., Vendraminelli, L., & Iansiti, M. (2020). Innovation and design in the age of artificial intelligence. *Journal of Product Innovation Management, 37*(3), 212–227. https://doi.org/10.1111/jpim.12523

Wagner, T. M., Benlian, A., & Hess, T. (2014). Converting freemium customers from free to premium: The role of the perceived premium fit in the case of music as a service. *Electronic Markets, 24*(4), 259–268. https://doi.org/10.1007/s12525-014-0168-4

Wang, L., Ma, C., Feng, X., et al. (2024). A survey on large language model based autonomous agents. *Frontiers of Computer Science, 18*(6), Article 186345. https://doi.org/10.1007/s11704-024-40231-1

Wen, W., & Zhu, F. (2019). Threat of platform-owner entry and complementor responses: Evidence from the mobile app market. *Strategic Management Journal, 40*(9), 1336–1367. https://doi.org/10.1002/smj.3031

Wirtz, B. W., Pistoia, A., Ullrich, S., & Göttel, V. (2016). Business models: Origin, development and future research perspectives. *Long Range Planning, 49*(1), 36–54. https://doi.org/10.1016/j.lrp.2015.04.001

Wooldridge, M., & Jennings, N. R. (1995). Intelligent agents: Theory and practice. *The Knowledge Engineering Review, 10*(2), 115–152. https://doi.org/10.1017/S0269888900008122

Xi, Z., Chen, W., Guo, X., et al. (2025). The rise and potential of large language model based agents: A survey. *Science China Information Sciences, 68*(2), Article 121101. https://doi.org/10.1007/s11432-024-4222-0

Yang, J., Jimenez, C. E., Wettig, A., et al. (2024). SWE-agent: Agent-computer interfaces enable automated software engineering. In *Advances in Neural Information Processing Systems 37* (NeurIPS 2024). https://doi.org/10.52202/079017-1601

Yao, S., Shinn, N., Razavi, P., & Narasimhan, K. (2024). *τ-bench: A benchmark for tool-agent-user interaction in real-world domains* (arXiv:2406.12045). arXiv. https://arxiv.org/abs/2406.12045

Zhang, Z. (2026). *Pricing and competition in generative AI ecosystems* (SSRN Working Paper 7494418). https://doi.org/10.2139/ssrn.7494418

Zhu, F., & Iansiti, M. (2012). Entry into platform-based markets. *Strategic Management Journal, 33*(1), 88–106. https://doi.org/10.1002/smj.941

Zhu, F., & Liu, Q. (2018). Competing with complementors: An empirical look at Amazon.com. *Strategic Management Journal, 39*(10), 2618–2642. https://doi.org/10.1002/smj.2932

Zott, C., Amit, R., & Massa, L. (2011). The business model: Recent developments and future research. *Journal of Management, 37*(4), 1019–1042. https://doi.org/10.1177/0149206311406265

## Verification notes (part A)

**Items outside the master register or with special handling**
- Garousi, Felderer & Mäntylä (2019): not in the master register; named in the protocol and the writing brief. Reference metadata written from memory of the published article; verify DOI and pages before submission.
- Parolini (2021) (BM092/FR01) and Bain & Company / Crawford et al. (2025) (G01): taken from the earlier registers, as the coordinator allowed; Parolini is flagged check_first in the master register (book not in Crossref or Open Library; IRIS handle only). Check the handle. G01 was read in full per grey_notes; the sentence on its two axes and five scenarios should be checked against pp. 22-30.
- Chesbrough & Rosenbloom (2002) (BM009): the register lists Chesbrough as sole author; the article is co-authored with R. S. Rosenbloom. Confirm in Crossref.
- Najmaei & Sadeghinejad (2026): cited from the preprint record BM059 (Preprints.org). The duplicate AG028 (read_before_citing) may be the journal version; check which to cite.
- Page ranges completed from memory where the register gave only a first page: Henderson & Clark (1990) 9-30, Tushman & Anderson (1986) 439-465, Hill & Rothaermel (2003) 257-274. Verify. Initials of several authors (for example Sjödin, Jorzik, Kanbach, Eggers & Park, Gilbert, Cusumano) were completed from memory; verify.
- Author lists truncated in the register ("et al.") must be completed from the DOI or arXiv record: Wang, Xi, Yang (SWE-agent), Huang, Mazeika, Patwardhan, Rothschild et al. (2025), Dell'Acqua et al. (2026), Bennett et al. (2025), Cai et al. (2025; the register lists two of six authors).
- Year choices: Abou Ali et al. cited as 2025 (Crossref correction); Anthropic (2025) title is the register's, the page H1 differs ("Uneven geographic and enterprise AI adoption"); Anthropic (2024a) page now titled "Building effective AI agents"; Kanbach et al. kept as 2023 (online year) although the volume is 2024; Gartner (2025) and Stripe (2025a, 2025b) suffixes follow APA ordering by title.
- MIT NANDA (2025): the register URL is Fortune coverage; the report itself was not located. Cite the report only after finding it.
- Figma, Inc. (2026): the register points to casi/figma.md for the URL; add the EDGAR URL. Next Web (2026), Bort (2025a) and VentureBeat (2026) likewise rest on press pages recorded in the case files.
- Statements drawn from the stream reviews without a full-text reading of the source: the Siggelkow thickening/patching vocabulary, Eggers & Park's awareness-motivation-ability frame (removed), Henderson & Clark on information filters, Teece (1986) on generic/specialized/co-specialized assets, Brandenburger & Stuart on added value, Caves & Porter on mobility barriers. These are standard readings but were verified at metadata level only.
- Figures taken from grey sources that should be checked against the originals: 27% to 39% directive share (Anthropic, 2025), 15% January index fall (Bloomberg, 2026), 24% SAP cloud growth (Swain, 2026), gross retention around 90% and net revenue retention down about nine points (Lipman et al., 2026a, 2026b), Canva growth outlook cut by a third and three times as many designs (Osmonbekov, 2026), Figma Make 20% time reduction (Stewart et al., 2026), 58% and 35% (Huang et al., 2025), 2.5% (Mazeika et al., 2025), 7.2% and 5.5% (Hasan et al., 2025), 19% slowdown (Becker et al., 2025).

**Cited works with content_check_needed = yes or cite_status other than ok** (one line each; all must be checked against the full text before submission)
- EN019, Adner (2006): cited for its general argument only; read before submission.
- EN028, Agrawal (2022): cited for its general argument only; read before submission; verification label M.
- EN029, Azoulay (2025): cited for its general argument only; read before submission.
- EN001, Bain (1956): cited for its general argument only; read before submission.
- AG011, Baird (2021): cited for its general argument only; read before submission.
- EN038, Barney (2024): cited for its general argument only; read before submission; verification label V-snippet.
- AG012, Berente (2021): cited for its general argument only; read before submission.
- SP051, Bhushan (2026): cited for its general argument only; read before submission.
- SP006, Bloomberg. (2026): cited for its general argument only; read before submission.
- AG073, Bloomberg Law, Decrypt, MediaPost, & others. (2026): cited for its general argument only; read before submission; verification label V-snippet.
- EN078, Bort (2025): cited for its general argument only; read before submission.
- EN006, Brandenburger (1996): cited for its general argument only; read before submission; verification label M.
- EN007, Brandenburger (1996): cited for its general argument only; read before submission.
- EN041, Cai (2025): cited for its general argument only; read before submission; verification label V-snippet.
- EN040, Cao (2025): cited for its general argument only; read before submission; verification label V-snippet.
- BM007, Casadesus-Masanell (2010): cited for its general argument only; read before submission.
- EN004, Caves (1977): cited for its general argument only; read before submission.
- SP035, Chen (2024): cited for its general argument only; read before submission.
- BM013, Chesbrough (2010): cited for its general argument only; read before submission.
- BM009, Chesbrough (2002): cited for its general argument only; read before submission.
- BM039, Christensen (1996): cited for its general argument only; read before submission.
- EN016, Christensen (2015): cited for its general argument only; read before submission; verification label M.
- BM085, Coda (2012): cited for its general argument only; read before submission.
- BM069, Cusumano (2008): cited for its general argument only; read before submission.
- EN044, Dell'Acqua (2026): cited for its general argument only; read before submission.
- AG049, Deloitte. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- BM005, Demil (2010): cited for its general argument only; read before submission.
- SP005, diginomica. (2025): cited for its general argument only; read before submission.
- BM035, Eggers (2018): cited for its general argument only; read before submission.
- EN011, Farrell (2007): cited for its general argument only; read before submission.
- EN074, Fast Company. (2026): cited for its general argument only; read before submission; verification label V-snippet.
- EN024, Foerderer (2018): cited for its general argument only; read before submission.
- EN017, Gans (2016): cited for its general argument only; read before submission; verification label M.
- AG046, Gartner. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- ST041, Gawer (2007): cited for its general argument only; read before submission.
- BM041, Gilbert (2005): cited for its general argument only; read before submission.
- EN012, Goldfarb (2019): cited for its general argument only; read before submission.
- ST024, Gregory (2021): cited for its general argument only; read before submission.
- AG031, Guimaraes Figueira (2026): cited for its general argument only; read before submission.
- EN068, Gupta (2025): cited for its general argument only; read before submission; verification label V-snippet.
- BM028, Henderson (1990): cited for its general argument only; read before submission.
- BM031, Hill (2003): cited for its general argument only; read before submission.
- AG072, Hunton Andrews Kurth LLP. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- BM047, Jorzik (2024): cited for its general argument only; read before submission.
- EN005, Karakaya (1989): cited for its general argument only; read before submission.
- EN039, Kim (2026): cited for its general argument only; read before submission; verification label V-snippet.
- ST030, Klemperer (1995): cited for its general argument only; read before submission.
- ST007, Korinek (2024): cited for its general argument only; read before submission.
- BM067, Lehmann (2009): cited for its general argument only; read before submission.
- EN008, Lieberman (1988): cited for its general argument only; read before submission.
- EN009, Lieberman (1998): cited for its general argument only; read before submission.
- EN042, Marchesi (2025): cited for its general argument only; read before submission.
- BM003, Massa (2017): cited for its general argument only; read before submission.
- AG064, Mazeika (2025): cited for its general argument only; read before submission.
- AG048, McKinsey & Company. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- AG050, MIT NANDA. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- EN077, Next Web. (2026): cited for its general argument only; read before submission.
- AG040, OpenAI. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- BM038, O'Reilly (2013): cited for its general argument only; read before submission.
- AG078, Parasuraman (2000): cited for its general argument only; read before submission.
- BM092, Parolini (2021): metadata verified, content not checked.
- EN002, Porter (1980): cited for its general argument only; read before submission; verification label M.
- EN003, Porter (2008): cited for its general argument only; read before submission; verification label M.
- SP055, PYMNTS & The Next Web. (2026): cited for its general argument only; read before submission; verification label V-snippet.
- BM012, Saebi (2017): cited for its general argument only; read before submission.
- SP046, Saha (2026): cited for its general argument only; read before submission.
- SP047, Sahni (2026): cited for its general argument only; read before submission.
- BM015, Sosna (2010): cited for its general argument only; read before submission.
- AG051, Stanford HAI. (2026): cited for its general argument only; read before submission.
- SP041, Stanton (2026): cited for its general argument only; read before submission.
- EN056, Stripe. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- EN037, Stuart (2024): cited for its general argument only; read before submission; verification label V-snippet.
- SP011, Swain (2026): cited for its general argument only; read before submission.
- ST018, Teece (1986): cited for its general argument only; read before submission.
- BM001, Teece (2010): cited for its general argument only; read before submission.
- BM037, Teece (2018): cited for its general argument only; read before submission.
- ST019, Teece (2018): cited for its general argument only; read before submission.
- BM029, Tripsas (1997): cited for its general argument only; read before submission.
- BM030, Tripsas (2000): cited for its general argument only; read before submission.
- BM027, Tushman (1986): cited for its general argument only; read before submission.
- EN075, VentureBeat. (2026): cited for its general argument only; read before submission; verification label V-snippet.
- EN050, Veracode. (2025): cited for its general argument only; read before submission; verification label V-snippet.
- PR013, Wagner (2014): cited for its general argument only; read before submission.
- BM004, Wirtz (2016): cited for its general argument only; read before submission.
- AG005, Wooldridge (1995): cited for its general argument only; read before submission.
- AG016, Yang (2024): cited for its general argument only; read before submission.
- SP049, Zhang (2026): cited for its general argument only; read before submission.
- EN022, Zhu (2012): cited for its general argument only; read before submission.
- EN026, Zhu (2018): cited for its general argument only; read before submission.
