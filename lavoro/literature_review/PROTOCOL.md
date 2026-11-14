# Deep literature review: protocol (14 November 2026)

This protocol guides the research agents and documents the review for the methodology chapter. It follows a multivocal design (Garousi, Felderer & Mäntylä, 2019): peer-reviewed literature, preprints and high-quality grey literature (analyst, consultancy and investor reports, company disclosures), each appraised and labelled by type.

## 1. Thesis context (read before searching)
- Title: *Productivity SaaS in the age of agentic AI: strategic responses for business model evolution* (MSc ITEM, Università Cattolica; supervisor prof. J.-F. de Jaegher).
- RQ: *How are creation-oriented productivity SaaS incumbents evolving their business models as agentic AI enables digital artifacts to be produced by AI agents, both inside their products and through external agents that use them?*
- SQ1: roles toward agents (own agent, tool for external agents, host of third-party agents), access terms, timing. SQ2: changes in WHO / WHAT / HOW / ECONOMIC MODEL (Parolini 2021; Coda's entrepreneurial formula) and their depth (feature vs business model change requiring a new fit). SQ3: value capture and the cost of AI when agents do the work.
- Cases: Figma, Canva, Adobe Express, Grammarly (now part of Superhuman); Gamma as AI-native benchmark.
- Supervisor's framing: AI lowered entry barriers in software ("anyone can do it"); how do incumbents defend what they built, react, survive and evolve the business model?
- Seven candidate strategies: S1 own agent inside the product; S2 being used by external agents (MCP, apps in ChatGPT/Claude, APIs) under different terms; S3 hosting third-party agents (platform, agent store); S4 serving proprietary context to agents (complementary assets: brand kits, design systems, data); S5 cost-driven hybrid monetization (seat anchor plus credits, rationed free AI); S6 expanding scope (code, marketing, suites); S7 acquiring AI-native companies (integrated or in parallel). Rival hypotheses: outcome-based pricing; governance as a lever.
- Already collected (do NOT simply re-list; extend, deepen or correct): `lavoro/bibliografia/academic_register.csv` (67 entries), `lavoro/bibliografia/grey_register.csv` (40 entries), and their notes files. Read them first.
- Case evidence already collected: `lavoro/casi/*.md`. Use them to anchor literature to cases.

## 2. Review questions
- RQ-L1. What does the literature say about how AI, and agentic AI in particular, threatens or reshapes SaaS business models (the "SaaSpocalypse" debate)?
- RQ-L2. Which theories explain how incumbents adapt business models to technological discontinuities, and what do they predict for SaaS incumbents facing agentic AI?
- RQ-L3. What is known about each candidate strategy (S1-S7) and the rival hypotheses, and how do the five cases illustrate, contradict or extend that knowledge?
- RQ-L4. Where are the gaps that this thesis can fill?

## 3. Sources and search tools
- Web search (WebSearch) for all streams; WebFetch or curl to open pages.
- Crossref REST API (works reliably): `https://api.crossref.org/works?query.bibliographic=...&filter=from-pub-date:2015-01-01&rows=20&select=DOI,title,author,issued,container-title,abstract,type`.
- OpenAlex and Semantic Scholar APIs: reachable but rate-limited (HTTP 429). Use sparingly, wait 3-10 seconds between calls, back off on 429, never loop aggressively.
- RePEc/IDEAS (reachable), arxiv.org abstract pages, journal and publisher pages when they open (ScienceDirect and SSRN often block automated clients: then use Crossref metadata and abstracts, author repositories, or search snippets).
- Practitioner sources: hbr.org, consultancy and VC sites (Bain, McKinsey, BCG, Deloitte, Gartner, IDC, Forrester, a16z, Sequoia, Bessemer, ICONIQ, OpenView, Battery), quality financial and tech press, company investor relations.
- Wayback Machine content is NOT reachable from this session.
- Never send the student's name, email or any personal data. If a site or API asks for contact details, use a generic client name ("thesis-research-bot") or skip it.

## 4. Inclusion and exclusion
- Include: peer-reviewed articles, books and chapters, conference papers, preprints (labelled), working papers, and grey literature from recognized organizations, relevant to at least one review question.
- Time window: 2015-2026 for empirical and recent conceptual work; classic theory of any year when it is a foundation (for example Teece 1986, Christensen 1997, Tripsas 1997, Tushman & Anderson 1986, Henderson & Clark 1990).
- Exclude: vendor marketing without data, SEO listicles, anonymous blogs, content farms; sources you cannot attribute to an author or organization.
- Prioritize: top management and IS journals (SMJ, AMJ, AMR, Org Science, Research Policy, MISQ, ISR, JMIS, JAIS, Management Science, Long Range Planning, Technovation, JPIM, California Management Review, Journal of Business Research, Technological Forecasting and Social Change, Electronic Markets, BISE), then good field journals, then preprints and grey literature.

## 5. Appraisal labels (mandatory for every source)
- Type: PR (peer-reviewed), BOOK, CONF, PRE (preprint or working paper), GREY-A (analyst/consultancy/investor report with data or method), GREY-B (essay, opinion, press), COMP (company disclosure).
- Verification: [V-open: URL, accessed date] if you read the source or its full abstract; [V-meta: Crossref/OpenAlex] if only metadata was verified; [V-snippet: URL] if only a search snippet was seen; [M] if from memory. Never present a weaker label as a stronger one. Do not invent DOIs, pages, quotes or numbers.

## 6. Extraction (for each included source)
Write one row per source in your `sources.csv` with these columns, in this order:
`id,stream,authors,year,title,type,venue_or_publisher,doi_or_url,verification,method_and_data,key_findings,key_quote_with_page,theory_or_lens,review_question(L1-L4),strategies(S1-S7;R-outcome;R-governance),cases(Figma;Canva;AdobeExpress;Grammarly;Gamma;none),stance(supports/challenges/mixed/neutral + which claim),relevance(high/medium/low),notes`
Use proper CSV quoting. Use ids with your stream prefix (for example SP001).

## 7. Synthesis (for each stream)
Write `<stream>_review.md` with:
1. Scope and search log: date, tools, queries (exact strings), number of hits screened and included.
2. Thematic synthesis (2,500-4,000 words), organized by themes, not by source: what is established, what is contested, what is missing. Cite as (Author, year). Compare peer-reviewed findings with practitioner claims.
3. Anchoring to the cases: how the literature explains, or fails to explain, what Figma, Canva, Adobe Express, Grammarly and Gamma did (use `lavoro/casi/*.md`).
4. Implications for the thesis: which propositions the literature supports or challenges, which strategies (S1-S7) it informs, and the gaps the thesis can claim.
5. The 10-15 sources that must be read in full by the student, with one line each on why.

## 8. Style
English. Never use the em dash character. Plain, precise academic prose.
