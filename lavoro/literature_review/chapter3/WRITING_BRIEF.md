# Writing brief: Chapter 3, literature review (draft)

## Purpose
Turn the eight stream reviews into one integrated literature review for the thesis *Productivity SaaS in the age of agentic AI: strategic responses for business model evolution*. This is the "deep literature review" the supervisor asked for. It must read as one chapter written by one author, not as eight summaries glued together.

## Inputs (read before writing)
- `lavoro/literature_review/PROTOCOL.md` (thesis context, RQ, strategies S1-S7, review questions L1-L4)
- The stream reviews: `lavoro/literature_review/{SP,BM,AG,PL,PR,CR,ST,EN}/*_review.md`
- The master register: `lavoro/literature_review/_verification/master_register.csv` (543 unique sources; column `cite_status`: ok / read_before_citing / check_first)
- Verification reports: `lavoro/literature_review/_verification/verification_A.md`, `verification_B.md`
- Course framework notes: `lavoro/note_slide_corso.md`; case evidence: `lavoro/casi/*.md`
- Current synthesis of the thesis: `appunti/2026-10-30_perimetro_e_domanda_di_ricerca.md`

## Chapter outline (two writers)
Title: **Chapter 3. Literature review: agentic AI and the evolution of SaaS business models**

Writer A
- 3.1 Scope and method of the review: multivocal design (Garousi et al., 2019), eight streams, search sources, inclusion criteria, appraisal labels, verification (543 unique sources; peer-reviewed share; how metadata were verified). About 600-800 words.
- 3.2 Generative and agentic AI: definitions, levels of agency, agents as users and customers of software, interoperability protocols (MCP, A2A, Apps SDK), adoption evidence and limits. Source: AG.
- 3.3 The "SaaSpocalypse" debate: the typology of narratives, actors and evidence, what the evidence supports (repricing rather than collapse), and the blind spot on creation tools. Source: SP.
- 3.4 Business models and their adaptation to technological discontinuities: business model concept and components, the entrepreneurial formula (Normann; Coda; Parolini) and fit, business model innovation and adaptation, incumbent response to discontinuities, AI and business model innovation, SaaS business model literature. Source: BM.
- 3.5 Entry barriers, new entrants and the incumbent's complementary assets: theory of entry barriers, evidence that generative AI lowered entry costs and its limits, AI-native vs incumbents, model labs entering applications, which assets resist. Sources: EN, plus ST on complementary assets.
Target: 5,500-6,500 words.

Writer B
- 3.6 Platforms, openness and complementors in the age of AI assistants: openness vs control, boundary resources, complementors and envelopment, hosting third parties, generative AI platforms. Source: PL.
- 3.7 Pricing and the economics of AI in SaaS: information goods, inference cost and scalability (link to the course's cost-structure logic), seat, usage, credits, freemium, outcome-based pricing and its conditions. Source: PR.
- 3.8 Creation software and generative AI: taxonomies, the creative software industry and its business models, generative AI and creative work, governance and IP as strategic factors. Source: CR.
- 3.9 An integrative framework: the seven candidate strategies (S1-S7) and the two rival hypotheses, each with its theoretical grounding, the conditions the literature predicts, and first evidence from the cases. Include one summary table: strategy | core theory and key references | predicted conditions | evidence in the cases (Figma, Canva, Adobe Express, Grammarly, Gamma). Sources: ST plus all streams.
- 3.10 Research gaps and positioning of the thesis: the gaps that recur across streams (for example: no study of incumbents as complementors of AI assistants; no study of access terms for agents; generative vs agentic distinction never tested empirically; creation tools absent from analyst frameworks; the order "outward access before inward agent" unexplained), and how the thesis addresses them.
Target: 5,500-6,500 words.

## Rules
- English, formal but readable academic prose. Never use the em dash character.
- Organize by themes and arguments, not by source. Compare and contrast; show agreement, disagreement and evidence quality (peer-reviewed vs preprint vs practitioner).
- Cite in APA 7 author-date style: (Teece, 1986); (Hagiu & Wright, 2025); (Saebi et al., 2017). For organizations: (Bain & Company, 2025).
- Cite ONLY sources present in the master register. Prefer `cite_status = ok`. You may cite `read_before_citing` sources, but do not attribute specific findings, numbers or quotes to them unless the stream review gives them with a verification label of V-open; otherwise cite them only for their general argument. Do not cite `check_first` sources at all.
- Do not invent findings, numbers, quotes, pages or references. When a claim comes only from practitioners, say so.
- Link the literature to the thesis: end each section with 2-4 sentences on what it implies for the research question and the strategies S1-S7.
- Keep the voice of the student (first person plural is acceptable sparingly: "this thesis", "this review").

## Output (per writer)
- `lavoro/literature_review/chapter3/ch3_part_A.md` or `ch3_part_B.md`, with: the sections in markdown (`##` for 3.x, `###` for subsections), then `## References (part A|B)` listing in APA 7 every work cited in your part (from the register, using its verified metadata and DOI), then `## Verification notes (part A|B)` listing the cited works whose content must be checked against the full text before submission (ids and one line each).
