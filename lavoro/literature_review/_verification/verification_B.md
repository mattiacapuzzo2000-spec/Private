# Verification B: source registers AG, EN, CR, SP

Date of checks: 14 November 2026. Method: Crossref REST API (all DOIs, one request per second, User-Agent "thesis-research-bot"), arXiv API (all arXiv identifiers), Crossref bibliographic search and Open Library for items without DOI, direct URL fetch (title, date, status) for every GREY and COMP row, `pdftotext` on the PDF primary documents, and web search where sites blocked the bot (Gartner, OpenAI, McKinsey, Cloudflare-protected pages, SSRN). The stream files were not modified.

Status values: `ok` (identifiers and metadata consistent with the registry or page), `corrected` (a verifiable error or gap in the row, see list), `not_found` (identifier or item does not exist: none found), `unverified` (extra value added by this check: item could not be confirmed because the site blocked the bot and no independent source confirmed it; this is NOT evidence of fabrication), `not_applicable` (not used).

## 1. Counts by stream and status

| Stream | Rows | ok | corrected | not_found | unverified | not_applicable | content check needed |
|---|---|---|---|---|---|---|---|
| AG | 78 | 72 | 6 | 0 | 0 | 0 | 32 |
| EN | 78 | 70 | 3 | 0 | 5 | 0 | 78 |
| CR | 49 | 46 | 2 | 0 | 1 | 0 | 21 |
| SP | 58 | 53 | 1 | 0 | 4 | 0 | 23 |
| Total | 263 | 241 | 12 | 0 | 10 | 0 | 154 |

Checks by method: 92 rows have a DOI confirmed in Crossref (title, first authors, year, venue, volume, issue, pages compared automatically and then by hand for every deviation); 41 rows have an arXiv identifier confirmed through the arXiv API (title and authors compared); the remaining rows are grey literature, company documents, books without DOI, or practitioner pieces checked through the URL or web search.

## 2. Headline result on possible hallucinations

- **No DOI returned "not found" and no arXiv identifier was missing.** All Crossref DOIs resolved to a record with the same title and a matching first author (EN009 and EN015 returned 404 only because my first lookup cut the DOI at ";"; with the full DOI both resolve and match). All 2026 arXiv identifiers (for example 2606.10711, 2605.17812, 2609.26725, 2604.26482) exist in the arXiv API with the title and first author stated in the rows; the same holds for the 2026 SSRN DOIs in AG, EN and SP.
- Titles of all peer-reviewed rows matched Crossref (similarity 0.93 to 1.00; the lower values are subtitle or "AI" versus "Artificial Intelligence" variants).
- Problems found are of other kinds: wrong or loose years (AG002, EN055, CR043), missing authors in the author field (CR020, EN041), imprecise titles (AG060, AG049), venue gaps now filled (AG007, AG059, EN044), a book with unverified publisher now confirmed (AG076), and URLs that do not point to the cited document (EN073, EN051, EN062, CR033, SP027). Six rows (SP009, SP013, SP015, SP028, EN059, CR033) could not be confirmed at all; SP015 (McKinsey PDF with a very long URL) is the one most worth checking by hand.

## 3. Corrections and flags (full list)

### 3.1 Status `corrected`

- **AG002** (Abou Ali, M.; Dornaika, F.; Charafeddine, 2026): Year: Crossref gives 2025 (Artif Intell Rev 59(1), art. 11, published 2025), row says 2026. Cite 2025 unless the issue is dated 2026 on the publisher page.
- **AG007** (Wang, L.; Ma, C.; Feng, X.; et al., 2024): Completed: Crossref gives Frontiers of Computer Science 18(6), article 186345 (row said article number to be checked).
- **AG049** (Deloitte, 2025): Title: Deloitte page title is "The agentic reality check: Preparing for a silicon-based workforce" (chapter of Tech Trends 2026, 10 Dec 2025); row title prefix "Tech Trends 2026:" is the report name, not the chapter title.
- **AG059** (Eloundou, T.; Manning, S.; Mishkin, P.; , 2024): Completed: Crossref gives Science 384(6702), 1306-1308 (row said issue to be checked).
- **AG060** (Anthropic, 2025): Title: Anthropic page H1 is "Anthropic Economic Index report: Uneven geographic and enterprise AI adoption" (15 Sep 2025; later arXiv 2511.15080). Row title "Understanding AI's effects on the economy (September 2025 report)" is not the page title.
- **AG076** (Choudary, S. P., 2025): Open Library: publisher is Independently Published (self-published), first published 2025, ISBN 9798294817015. Row had publisher "to be checked". Book metadata only; content not opened.
- **EN041** (Cai, J. J., & Gu, X., 2025): Authors: arXiv lists six authors (Cai, Gu, plus Sheng, Xia, Zhao and one more); row lists only "Cai, J. J., & Gu, X." without "et al.".
- **EN044** (Dell'Acqua, F., McFowland III, E., Molli, 2026): Title: Crossref has "...Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality" (row abbreviates to "AI"). Venue: Organization Science 37(2), 403-423 (row gives only the journal). Same study as AG056/CR017 (SSRN working paper).
- **EN055** (Demirci, O., Hannane, J., & Zhu, X., 2024): Year: Crossref posted-content date is 2023 (SSRN 4602944); row says 2024. Journal version exists (Management Science 2025, see CR019).
- **CR020** (Boussioux, L., Lane, J. N., Zhang, M., &, 2024): Authors: Crossref lists five authors (Boussioux, Lane, Zhang, Jacimovic, Lakhani); row lists four and omits Lakhani, K. R., without "et al.".
- **CR043** (Bloomberg Law / Jurist (reporting on Bar, 2025): Year: final approval of the settlement was granted 20 Jul 2026 (Jurist URL 2026/07; Bloomberg Law), so the dated news item is 2026, not 2025 (the case itself was filed 2024, preliminary approval Sep 2025). Final approval by Judge Martinez-Olguin, not Alsup. Bot blocked (403); confirmed by web search.
- **SP027** (Goldman Sachs Research (Gabriela Borges;, 2026): Row describes Goldman Sachs Research but the URL is a Yahoo Finance article "Goldman Sachs drops a bombshell on software stocks" (11 Apr 2026): secondary coverage, not the research note. The title and the "USD 780 billion" claim in the row title are not the page headline.

### 3.2 Status `ok` with a remark worth knowing (title variants, dates, type labels, inherited verification)

- **AG006**: Pearson page (web search) confirms 4th ed., Pearson, 2021 (global ed. May 2021; US print ISBN 9780134610993, listed Dec 2021, (c) 2022). Row ISBN field said not verified; ISBN added here from the publisher listing. Edition/chapter content still [M].
- **AG015**: arXiv 2210.03629 first posted 2022; ICLR 2023 is the conference venue (venue not machine-checked). Cite as ICLR 2023 only after checking the proceedings.
- **AG016**: arXiv 2405.15793 matches; Crossref also lists the NeurIPS 2024 proceedings entry (Yang, Jimenez, Wettig et al.) under 10.52202/079017-1601.
- **AG035**: arXiv title is longer: "A survey of agent interoperability protocols: Model Context Protocol (MCP), Agent Communication Protocol (ACP), Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP)". Row title is an abbreviation.
- **AG038**: Linux Foundation press release opened (9 Dec 2025), title matches.
- **AG039**: Page H1 matches row; HTML title tag is shorter ("Donating MCP to the Agentic AI Foundation"). Date 9 Dec 2025 consistent.
- **AG040**: Bot blocked (403) but web search confirms the OpenAI post "Introducing apps in ChatGPT and the new Apps SDK", 6 Oct 2025.
- **AG045**: Page now titled "Building effective AI agents" (dated 19 Dec 2024 on page); row title "Building effective agents" is the original title. Cite as published, note rename.
- **AG046**: Bot blocked (403) but web search confirms the Gartner press release of 25 Jun 2025 with the same title.
- **AG047**: Bot blocked (403) but web search confirms the Gartner press release of 21 Oct 2025 with the same title.
- **AG048**: mckinsey.com not reachable by the bot; web search confirms the report title (Nov 2025). Figures not checked.
- **AG050**: Row title is the report name; the URL is Fortune coverage ("MIT report: 95% of generative AI pilots at companies are failing", page dated 2025-12-16 in metadata; original piece was 18 Aug 2025 per URL). The MIT NANDA report itself was not located; attribute carefully.
- **AG073**: Decrypt article opened (10 Mar 2026: "Amazon Wins Court Order Blocking Perplexity AI Shopping Agent"); row title is a composite description of the case and its later appeal. Appeal outcome not checked.
- **AG074**: Report PDF opened: "7th Annual 2025 State of the API Report" (Postman), released 8 Oct 2025 per Business Wire. Row type GREY-A (vendor survey, n>5,700).
- **EN001**: Crossref title is the short "Barriers to New Competition"; row adds the subtitle (Harvard University Press, 1956). Subtitle not confirmed in Crossref; the original book carries it.
- **EN002**: Web search: Free Press, New York, 1980 (ISBN 0-02-925360-8); matches. Book content [M].
- **EN003**: Web search confirms HBR 86(1), Jan 2008, 78-93; page opened (dated 2008-01-01). Type flag: HBR is an editorially reviewed practitioner journal, not peer reviewed in the academic sense; PR label is generous (suggest GREY-B or keep PR with a note).
- **EN006**: Open Library: Co-Opetition, Brandenburger & Nalebuff, first published 1996, Currency/Doubleday. Matches. Crossref has only a 1997 review-type entry (JMR/Long Range Planning), not the book.
- **EN016**: Web search confirms HBR Dec 2015 (93(12)); page opened (2015-12-01). Same type flag as EN003 (HBR not peer-reviewed).
- **EN017**: Open Library: Gans, The Disruption Dilemma, MIT Press, 2016 (ISBN 9780262034487). Matches.
- **EN028**: Open Library: Agrawal, Gans, Goldfarb, Power and Prediction, Harvard Business Review Press, 2022 (ISBN 9781647824198). Matches.
- **EN035**: Crossref confirms 10.2139/ssrn.7276625: title and authors (Indika, Faheem) match, year 2026. DOI derived from the SSRN abstract id, not given in the row.
- **EN037**: HBR store listing page opened; title matches. Date/author not machine-checked.
- **EN040**: arXiv 2511.06545 and authors match, but the current arXiv title (v3) is "AI Coding Tools and Digital Entrepreneurship: The Role of Software Expertise". The row's claims about the v1/v2 titles ("Vibecoding and Digital Entrepreneurship") were not confirmed; check version history before citing a title.
- **EN049**: Bain page opened (23 Sep 2025), title matches. Duplicate of grey_register G02.
- **EN050**: Veracode page "Insights from 2025 GenAI Code Security Report" (30 Jul 2025); row title is the report name.
- **EN056**: Stripe page opened (30 Jun 2025), title matches first half; "/ Stripe annual letter 2024" in the row title is a separate document not checked.
- **EN058**: Carta data page exists (web search; Carta LinkedIn-style post by P. Walker, c. 16 Aug 2025); bot blocked by Cloudflare. Short post, data credited to Bessemer.
- **EN060**: a16z page opened: 7th edition dated 5 Oct 2026; the 6th edition (Mar 2026) was not separately opened.
- **EN066**: Elad Gil page opened; dated 25 Oct 2022 (row year 2023): year differs, check.
- **EN069**: Tunguz page "When AI Favors the Incumbents" (2 Feb 2023); row title lacks the plural s.
- **EN070**: NFX page opened; title matches; page date 18 Jan 2024 (row year 2023): check the year.
- **EN071**: Lightspeed page opened (3 Aug 2023), title matches with typographic variants.
- **EN074**: Bot blocked, web search confirms Fast Company "Design enters its frenemies era" (article 91538439).
- **EN075**: Bot got a Vercel challenge (429); web search confirms the VentureBeat article and title; Claude Design launch dated 17 Apr 2026.
- **EN076**: Figma Q1 2026 10-Q (EDGAR fig-20260331.htm) opened by this check; the quoted risk-factor language ("intermediate end-user relationships directly"; "user identity, authentication, tool selection, billing relationships, discovery, or workflow routing") is present. Row URL field holds only a pointer to casi/figma.md; actual URL is in that file.
- **EN077**: TNW page opened, dated 17 Apr 2026; headline "Canva becomes the design layer inside Claude with new Anthropic partnership"; row title is a paraphrase.
- **EN078**: TechCrunch page opened, 10 Nov 2025, title matches.
- **CR008**: arXiv 2309.15237 matches (posted 2023). Crossref search finds the CHI 2024 proceedings version, DOI 10.1145/3613904.3642114 (Li, Cao, Lin et al.); row cites the arXiv URL only. Consider citing the DOI.
- **CR025**: CMA PDF opened (pdftotext): "Notice of provisional findings made under Rule 11.3", reference of 13 Jul 2023, matches. Press release on gov.uk dated 28 Nov 2023.
- **CR027**: EC press release IP/23/5778 opened (17 Nov 2023), matches.
- **CR028**: EC DG COMP letter C(2023) 1198 final of 14 Feb 2023 (Article 22 referral) opened, matches.
- **CR029**: SEC EDGAR filing adbe-20251128.htm reachable; title not machine-compared beyond the file name (Form 10-K, FY ended 28 Nov 2025).
- **CR030**: SEC EDGAR "Figma 424B4" reachable and consistent.
- **CR031**: SEC EDGAR fig-20251231 reachable and consistent.
- **CR032**: UC Today article opened (13 Jan 2025): "Gartner Collaborative Work Management Magic Quadrant 2024"; secondary coverage of a Gartner paywalled report.
- **CR034**: Figma report landing page opened ("Figma's 2025 AI report"); row title adds the subtitle. Findings are second-hand (landing page only, per row).
- **CR036**: Anthropic page "Introducing the Anthropic Economic Index" (10 Feb 2025) opened; the "follow-up on Claude 3.7 Sonnet" part of the row title was not checked.
- **CR037**: US Copyright Office Part 3 report (pre-publication, May 2025, 101 pages) opened, matches.
- **CR041**: C2PA PDF opened: "C2PA Content Credentials Explained: Addressing Common Questions and Updates", September 2025 (row year 2025 ok).
- **CR042**: Mishcon de Reya page opened (6 Nov 2025): "Getty Images v Stability AI: Unpacking the High Court's judgment"; row title is a descriptive label.
- **CR044**: Jones Day page opened (26 Jun 2026): "European Commission Publishes Final Code of Practice on AI Labelling and Transparency"; row title is a descriptive label.
- **SP008**: Page H1 matches; HTML title tag differs ("Salesforce CEO declared victory over flagging software sales").
- **SP012**: Gartner document abstract confirmed by web search (16 Jul 2025, "AI Agents Are Disrupting SaaS Pricing: What Must CIOs Do?"); Gartner site blocks bots, so only abstract-level confirmation.
- **SP014**: Title confirmed by web search on mckinsey.com (and regional mirrors); page not opened by the bot (000/blocked). Date and authors not confirmed.
- **SP018**: Forrester page opened (28 Oct 2026); H1 matches the row title; HTML title tag differs.
- **SP023**: Oliver Wyman page opened; title matches (dash variant).
- **SP024**: Page H1 matches the row title; HTML title tag is "How AI is reshaping SaaS valuations: a guide for investors". Authors not verified (as stated in row).
- **SP026**: URL opened; page title only partly matches the row title (see page: "Goldman Sachs just ran some ugly numbers on the SaaSPocalypse, and identified a major shift").
- **SP030**: ICONIQ page opened; H1 matches the row title.
- **SP034**: URL opened; page title only partly matches the row title (see page: "").
- **SP036**: Sequoia page opened; title and date (20 Jun 2024) consistent.
- **SP039**: Page H1 matches; HTML title tag differs ("Software Stocks Lose $300 Billion After Anthropic Plugin Launch").
- **SP041**: HBR summary page opened (27 May 2026).
- **SP042**: CMR page opened: title and authors (Li, Qu, Divekar) consistent; no DOI found in Crossref for the CMR Insight (Crossref hits are SSRN versions 10.2139/ssrn.5179535 / 5148653 of a related 2025 working paper, same authors). Date 21 Aug 2026 not machine-checked. Type PR is generous for a CMR Insight piece.
- **SP046**: Both DOIs resolve in Crossref (SSRN 7601279; Preprints.org 10.20944/preprints202610.1182.v1), same title and author (Elliot Saha).
- **SP052**: og:title matches the row title; page date 2026-08-12 consistent. (Fetched page <title> is a different Fortune headline.)
- **SP053**: Fortune og:title is "Do creators still need Adobe in the AI era?" (1 Apr 2026); row title is the longer article headline from the slug. Plausible headline variant.
- **SP054**: UC Today article opened; headline "Microsoft 365 Copilot Passes 30 Million Paid Seats as Cloud and AI Growth Power Record Quarter" (30 Jul 2026). The "per-user plus consumption model" part of the row title is the row author's gloss.
- **SP055**: PYMNTS article opened; title matches; dated 15 May 2026.
- **SP056**: Cheeky Pint episode page opened; title matches. Podcast, not a text source.

### 3.3 Status `unverified` (could not be confirmed; check by hand before citing)

- **EN047** (Becker, J., Rush, N., Barnes, E., & Rein, 2025, relevance high): No DOI/URL check possible.
- **EN051** (GitClear, 2025, relevance medium): URL gitclear.com/media is the "GitClear in the Press" page, not the report. Report title in the row was from memory per the row verification; not located.
- **EN059** (Carta, 2026, relevance medium): Carta page blocked (403) and not confirmed in search; row title bundles two editions (Q1 and Q3 2026). Check manually.
- **EN062** (RevenueCat (secondary coverage), 2025, relevance low): Source is a Ground News aggregation of a TechCrunch-style story ("AI-powered apps can make money, but struggle with long-term retention, new data shows"); the row title ("State of Subscription Apps") is the RevenueCat report name, not this page. Primary RevenueCat report not located.
- **EN073** (Thompson, B., 2026, relevance high): URL is the Stratechery homepage, not the article. Web search finds only third-party digests (teahose, prismix) and an index entry for "Apps, Agents, and Aggregation" dated 28 Sep 2026; article text and stable URL not located. Row verification already V-snippet via digests.
- **CR033** (IDC (via vendor listing), 2025, relevance medium): URL returns 404 for the bot (giiresearch.com id2021802). Web search shows that GII lists "IDC's Worldwide Software Taxonomy" (2026 edition, USD 7,500) and that the latest collaborative applications share study found is the 2023 edition; a 2025 collaborative-applications share report was not found. Paywalled vendor listing, not usable as evidence.
- **SP009** (CNBC interview (relayed by Invezz and ot, 2026, relevance medium): Invezz page blocked by Cloudflare (HTTP 403) and not otherwise confirmed; the CNBC original was not found. Treat the quote as unverified.
- **SP013** (Gartner, Inc. (via SaaStr and Gartner ne, 2026, relevance medium): Gartner newsroom page blocked (bot challenge) and not confirmed by independent search in this check. URL date pattern 2026-02-03 is plausible but unchecked.
- **SP015** (McKinsey & Company (authors not verified, 2025, relevance medium): mckinsey.com PDF URL not reachable by the bot and not found by search in this check; title/date/authors unconfirmed. Possible broken or invented URL: check manually.
- **SP028** (Morgan Stanley Research (Keith Weiss) vi, 2026, relevance low): Invezz page blocked (403); Morgan Stanley research itself not located. Row notes already say dates are inconsistent across aggregators.

### 3.4 `not_found` items (possible hallucinations)

None. No row has an identifier or document that does not exist. The `unverified` rows above are the closest to the category and are listed in order of concern: SP015, SP013, SP028, SP009 (all V-snippet only, URL not reachable), CR033, EN073, EN051, EN062, EN059.

## 4. Duplicates

### 4.1 Between the four streams

- Same DOI 10.1126/science.adh2586 (Noy & Zhang, Science 2023): AG055, CR011, EN045
- Same DOI 10.1093/qje/qjae044 (Brynjolfsson, Li, Raymond, QJE 2025); EN046 is the NBER working paper of the same study (10.3386/w31161, "Generative AI at Work"): AG054, CR016, EN046
- Same DOI 10.2139/ssrn.4573321 (Dell'Acqua et al., SSRN 2023); EN044 is the Organization Science 2026 journal version of the same study: AG056, CR017, EN044
- Same DOI 10.1126/sciadv.adn5290 (Doshi & Hauser, Science Advances 2024): AG058, CR012
- Same DOI 10.1126/science.adj0998 (Eloundou et al., Science 2024): AG059, CR013
- Same title, METR study: AG052 is the arXiv preprint, EN047 the METR blog post (both also register G37): AG052, EN047
- Same document, Bessemer "The State of AI 2025" (same URL): EN057, SP029
- Preprint and journal version of the same study: Hui, Reshef, Zhou (SSRN 2023 vs journal row CR018): EN054, CR018
- Preprint and journal version of the same study: Demirci, Hannane, Zhu (SSRN vs Management Science 2025, CR019): EN055, CR019
- Near-identical titles, different documents (Adobe 10-K FY2025 vs Figma 10-K FY2025): CR029, CR031

Recommendation: keep one canonical row per DOI (the one with the best verification label) and cross-reference the others; do not count the same study three times in the synthesis. Preprint and journal versions should be cited once, with the journal version, mentioning the working paper only for priority.

### 4.2 Against the existing registers (academic_register.csv, grey_register.csv)

- AG001 : AG01 (already in existing register)
- AG002 : AG02 (already in existing register)
- AG003 : AG03 (already in existing register)
- AG024 : NEW02 (already in existing register)
- AG025 : NEW03 (already in existing register)
- AG026 : NEW04 (already in existing register)
- AG027 : AI11 (already in existing register)
- AG028 : AI09 (already in existing register)
- AG046 : G11 (already in existing register)
- AG052 : G37 (already in existing register)
- AG078 : AG05 (already in existing register)
- EN029 : LENS08 (already in existing register)
- EN039 : NEW06 (already in existing register)
- EN040 : NEW07 (already in existing register)
- EN047 : G37 (already in existing register)
- EN049 : G02 (already in existing register)
- EN078 : G30 (already in existing register)
- SP022 : G10 (already in existing register)

Note: the register IDs are already cited in the notes of most of these rows (for example AG001 = AG01), so these are declared overlaps, not hidden duplicates. AG028 corresponds to AI09, AG027 to AI11, EN029 to LENS08, EN039/EN040 to NEW06/NEW07, AG024-026 to NEW02-04, AG046 to G11, EN049 to G02, SP022 to G10, EN078 to G30, AG078 to AG05.

## 5. Rows to check against the full text before citing

Rule used: `content_check_needed = yes` when the findings in the row rest on [M] (memory), [V-meta] or [V-snippet] only, or the row itself says the source was not opened or only an abstract, landing page or summary page was read. 154 of 263 rows are flagged. Highest priority are high-relevance rows, listed here; the full flag is in the CSV.

| Stream | High-relevance rows to read in full | Count flagged (all relevance) |
|---|---|---|
| AG | AG011, AG016, AG028, AG040, AG046, AG048, AG064, AG072 | 32 |
| EN | EN001, EN002, EN006, EN011, EN012, EN016, EN017, EN018, EN021, EN022, EN023, EN028, EN029, EN039, EN040, EN041, EN042, EN047, EN049, EN056, EN057, EN068, EN073, EN074, EN076, EN077, EN078 | 78 |
| CR | CR001, CR045 | 21 |
| SP | SP011, SP014, SP035, SP054, SP055 | 23 |

Special attention:
- **EN stream** is the weakest: every row is flagged (most PR/BOOK rows say "content M": metadata verified in Crossref, content from memory). Cite the classics (EN001-EN028) for the concept only, and open the source before quoting or attributing specific numbers.
- **EN practitioner years**: the years of EN066 (page dated 25 Oct 2022, row 2023) and EN070 (page dated 18 Jan 2024, row 2023) disagree with the pages; EN064 (2019), EN065 (2023), EN069 (2023) and EN071 (2023) match their pages.
- **Books** AG006 (Russell & Norvig), AG076 (Choudary), EN002, EN006, EN017, EN028: metadata now confirmed, content still from memory or snippets.
- **Quotes**: no quotes were re-checked against the sources except where noted (EN076 risk-factor language confirmed in the 10-Q). Every `key_quote_with_page` of a row flagged `yes` needs a check.
- **Labels**: rows with "[V-open: Crossref ...]" or "[V-open: ... abstract]" mean the abstract only; findings that go beyond the abstract are not verified.

## 6. Limits of this check

- SSRN, Gartner, OpenAI, McKinsey, Carta, Cloudflare-protected pages and some publisher pages blocked the bot; for those, metadata comes from Crossref or from web search, and I say so in the `corrections` column.
- Open Library and the Pearson listing were used for books; ISBNs added in `verified_doi` are for convenience, not an original claim of the rows.
- Crossref confirms bibliographic data, not that the study says what the row says: that is the content check in section 5.
- SP was processed last; the SP file had 58 rows at the time of the check (SP001-SP058). If rows were added later, they are not covered.
