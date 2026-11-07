# Case study: Adobe Express (embedded case inside Adobe Inc.)

*Prepared by research agent "adobe-gamma", 7 November 2026. Unit of analysis: the product Adobe Express; Adobe Inc. is context, and company-level moves are recorded only when they touch Express. Data freeze for the thesis: 30 November 2026 (Adobe MAX, 10-12 November 2026, is not yet covered).*

**How to read the labels.** [V-open] = page opened and read on 2026-11-07; [V-snippet] = only a search snippet was seen; [M] = from memory, unverified. Source codes (S1, S2...) map to full URLs in the source list at the end of this file. helpx.adobe.com and www.adobe.com (pricing pages) could not be opened in this session (DNS block for WebFetch, HTTP 403 for curl), so help-center facts are [V-snippet]. news.adobe.com, blog.adobe.com, blog.developer.adobe.com, community.adobe.com and the investor-relations transcripts (PDF) were opened.

---

## A. Fact sheet

| Item | Value | Label |
|---|---|---|
| Product | Adobe Express: web and mobile, template-first content creation app (social posts, flyers, short videos, presentations, PDFs) for non-professionals | [V-open: S1, S5] |
| Owner | Adobe Inc. (Nasdaq: ADBE), San Jose. Express revenue is **not reported separately** | [V-open: S31, transcript searched] |
| Lineage | Adobe Spark (released 19 May 2016, unifying the mobile apps Adobe Post, Slate and Voice, plus web) > Creative Cloud Express (13 Dec 2021) > Adobe Express (name in use by 19 Jul 2022 at the latest; exact rename date not found) | [V-open: S2, S1]; rename bound [V-snippet: S39] |
| Plans (2026) | Free; Premium (USD 9.99/month, 250 generative credits/month per user per Adobe pricing page snippet); Teams; Enterprise; Education (free for K-12) | Premium price and credits [V-snippet: S35]; Teams price conflicting across trackers (USD 4.99 to 7.99/seat) [V-snippet] |
| Inclusion in bundles | Express Premium included in Creative Cloud All Apps and some single-app plans (2023 onward); included in Acrobat Studio (Aug 2025) | [V-open: S6, S23]; [V-snippet: S11] |
| Generative AI | Firefly-powered features since 2023; generative credits since 13 Sep 2023 | [V-open: S5, S6] |
| Own agent | AI Assistant in Express, **beta** since 28 Oct 2025; still beta (help page updated 22 Oct 2026): desktop web only, individual Premium and Free plans, not Teams/Enterprise/Education | [V-open: S12, S26]; [V-snippet: S34] |
| In external assistants | ChatGPT (Express GPT Apr 2024; Adobe apps Dec 2025; unified Adobe plugin Aug 2026), Microsoft 365 Copilot (Express agent, live Mar-Apr 2026), Claude (Apr 2026), Slack (Sep 2026), Gemini (Sep 2026) | [V-open: S8, S14, S19, S22, S28, S29, S32] |
| Developer platform | Embed SDK (Oct 2022, with Wix); add-ons marketplace open to all developers (MAX 2023); Dev MCP server for add-on developers (beta Sep 2025, stable Mar 2026) | [V-snippet: S4]; [V-open: S7, S18] |
| Express-specific KPIs disclosed | Q4 FY25: "significant Express MAU growth"; Q1 FY26: Express MAU tripled YoY, used in 99% of US Fortune 500; Q2 FY26: Express MAU +20% QoQ | [V-open: S13, S17, S25] (level B) |
| Adobe Q3 FY2026 (quarter to Aug 2026, call 10 Sep 2026) | Revenue USD 6.76 bn (+13%); ending ARR USD 27.5 bn (+11.2%); Business Professionals & Consumers subscription revenue USD 1.91 bn (+16% reported, +15% cc); Acrobat plus Express MAU > 900 M (+25%); creative freemium MAU (Firefly, Express, web/mobile Premiere, Photoshop, Lightroom) > 100 M (+70%); total MAU > 1 bn (+20%); AI-first ending ARR > USD 650 M (+150%); Firefly ending ARR (app and credit packs) +40% QoQ; FY26 ending ARR growth target 10.2% reiterated | [V-open: S31] |
| Leadership context | Narayen announced on 12 Mar 2026 he would step down as CEO; Anil Chakravarthy named President and CEO effective 1 Dec 2026 (announced 3 Sep 2026), Narayen Executive Chair. David Wadhwani (President, Creativity & Productivity) was thanked on the Q3 call and was not on it; his status not verified. Govind Balakrishnan is SVP and GM of Adobe Express (Oct 2025) | [V-open: S17, S31, S36, S12] |
| Adobe MAX 2026 | 10-12 November 2026, Miami Beach (after today, before the data freeze); Q3 call previews "agentic AI" across Creative Cloud, Firefly, Firefly Enterprise, Express not named | dates [V-snippet: S37]; "November in Miami Beach" [V-open: S31] |
| Company-level acquisitions (context, not Express) | Semrush (about USD 1.9 bn, announced Nov 2025, expected to close Q2 FY26); Topaz Labs (agreement announced in Q3 FY26; completion post dated 23 Sep 2026) | Semrush value [V-snippet: S44]; closing expectation [V-open: S17]; Topaz [V-open: S31], completion [V-snippet: link title in S32] |

---

## B. Brief history (about 220 words)

Adobe Express descends from Adobe Spark, launched on 19 May 2016, which unified three mobile apps (Adobe Post for social graphics, Slate for story pages, Voice for narrated videos) and added a web version [V-open: S2]. On 13 December 2021 Adobe relaunched Spark as Creative Cloud Express, a template-first web and mobile app that bundled simplified Photoshop, video and Acrobat functions with Adobe Stock and Adobe Fonts, with a free version and a USD 9.99/month paid edition, also included in Creative Cloud All Apps and flagship single-app plans [V-open: S1]. Adobe's Ashley Still described the target as "people who are focused on outcome and not process" [V-open: S1]. By July 2022 the product was called Adobe Express [V-snippet: S39]; in October 2022 Adobe reported over 43 million K-12 users of the free education version and launched the Embed SDK with Wix [V-open: S3; V-snippet: S4]. An enterprise edition followed in March 2023 [V-snippet: S43]. In 2023 Adobe rebuilt the product as the "all-new Adobe Express", AI-first and integrated with Firefly (public beta June, general availability on desktop web 16 August 2023) [V-open: S5]. From 2024 Adobe pushed Express outward into AI assistants (Express GPT in ChatGPT, April 2024; apps in ChatGPT, December 2025; Copilot, Claude, Slack and Gemini in 2026), while its own AI Assistant, announced at MAX in October 2025, was still in beta in October 2026 [V-open: S8, S14, S12; V-snippet: S34].

---

## C. Business model in 2022 (t0)

The framework follows the course's "entrepreneurial formula" (Parolini 2021): WHO = target market, WHAT = value proposition, HOW = firm structure and network, ECONOMIC MODEL = how value is captured and what the cost logic is.

**WHO (target market)**
- Non-professional creators who want an outcome quickly: "students to small business owners", people "focused on outcome and not process" (Adobe's Ashley Still, Dec 2021) [V-open: S1].
- Education as a large free segment: over 43 million K-12 students and teachers by October 2022, free version for schools [V-open: S3].
- Creative Cloud members (Express included in All Apps and flagship single-app plans) [V-open: S1].
- Businesses reached indirectly through partners embedding Express (Wix, October 2022) [V-snippet: S4].
- Positioning versus Canva: Adobe's own 2021-2026 materials and the four 2025-2026 transcripts opened do **not name Canva** [V-open: S1, S13, S17, S25, S31, searched]; the press frames Express as Adobe's response to Canva's growth [V-snippet: S42]. Express is the challenger in this segment, Adobe the incumbent in professional tools.

**WHAT (value proposition)**
- Template-first creation of social posts, posters, flyers, short videos, web pages; quick actions (remove background, convert to GIF or PDF); Creative Cloud Libraries integration [V-open: S1].
- Content as part of the offer: free users about 1 million Stock assets; Premium 175 million Adobe Stock photos, 20,000 Adobe Fonts, access to Photoshop Express and Premiere Rush [V-open: S1].
- Pre-generative "AI": context-aware template and font recommendations (Adobe Sensei), safe search for schools (Oct 2022) [V-open: S3].
- Non-monetary cost reduction: "Less is more", only the few functions non-professionals need [V-open: S1].

**HOW (firm structure and network)**
- Built on Adobe's core technologies (Photoshop imaging, video, Acrobat PDF) and asset libraries (Stock, Fonts): Express repackages assets Adobe already owned [V-open: S1].
- Channels: web app plus iOS, Android and Microsoft Store apps; distribution through the Creative Cloud base, the education channel and partners (Embed SDK, Wix) [V-open: S1, S3; V-snippet: S4].
- Product-led freemium acquisition, inside a portfolio company with large existing traffic.

**ECONOMIC MODEL**
- Freemium: free tier plus Premium at USD 9.99/month [V-open: S1] (USD 99.99/year [V-snippet: S35 and trackers]; verify on the t0 snapshot below).
- Bundling: Premium included in Creative Cloud subscriptions, so part of Express value is captured through Creative Cloud revenue [V-open: S1].
- Free for K-12 education (customer acquisition for the long run) [V-open: S3].
- Embed SDK: current docs say "no cost" to access, subject to business approval, "may change" [V-snippet: S41]; 2022 terms not verified.
- Cost logic: development-based and highly scalable (no per-use inference cost at t0); value capture by seat or bundle, no usage metering [inference from the above; no Adobe source].
- Express revenue not disclosed in 2022 or later [V-open: transcripts S13, S17, S25, S31 searched; earlier filings not opened].

**Wayback Machine snapshots (from the archive.org availability API, 7 Nov 2026; to open manually)**

| Page | t0 (~2022-06-01) | t1 (~2024-12-01) | t2 (latest before today) |
|---|---|---|---|
| Express pricing | http://web.archive.org/web/20220603085014/https://www.adobe.com/express/pricing | http://web.archive.org/web/20241211183139/https://www.adobe.com/express/pricing | http://web.archive.org/web/20261019233504/https://www.adobe.com/express/pricing |
| Express homepage | http://web.archive.org/web/20220602022347/https://www.adobe.com/express/ | http://web.archive.org/web/20241130190457/https://www.adobe.com/express/ | http://web.archive.org/web/20261027155206/https://www.adobe.com/express/ |
| Express for business | none before http://web.archive.org/web/20230321174136/https://www.adobe.com/express/business | http://web.archive.org/web/20241207213013/https://www.adobe.com/express/business | none returned |
| Firefly generative credits overview (helpx) | none (earliest returned 20240916) | http://web.archive.org/web/20241202164348/https://helpx.adobe.com/firefly/get-set-up/learn-the-basics/generative-credits-overview.html | http://web.archive.org/web/20250820183957/https://helpx.adobe.com/firefly/get-set-up/learn-the-basics/generative-credits-overview.html |

What to check in the snapshots: product name on 2022-06-02 (Creative Cloud Express or Adobe Express, to date the rename); Premium monthly and annual price; whether a Teams plan existed in 2022; credit allowances for Free and Premium at t1; whether free AI is described as monthly credits (t1) or daily generations (t2).

---

## D. Register of AI moves, 2023 to today

Type: G, A-in, A-out, ACQ, PRICE, WHO. Strategy 1-7 as in the brief. Agency 0-3 (n/a for pricing or channel moves). Source level A/B/C. All [V-open] pages accessed 2026-11-07.

| ID | Date | Move | Type | Strategy | BM dimension(s) | Status | Agency | Source URL | Source level | Verification label |
|---|---|---|---|---|---|---|---|---|---|---|
| AE-01 | 2023-03-21 | Adobe Express for Enterprise launched | WHO | none | WHO | GA | 0 | Cited in https://en.wikipedia.org/wiki/Adobe_Express (The Verge, 21 Mar 2023) | C | [V-snippet] (reference only) |
| AE-02 | 2023-06-08 | All-new Express public beta on desktop with Firefly Text to Image and Text Effects | G | none | WHAT | beta | 1 | https://www.businesswire.com/news/home/20230608005350/en | A | [V-snippet] |
| AE-03 | 2023-08-16 | All-new Express with Firefly GA on desktop web; "AI-first, all-in-one" editor; included in most CC plans; Express and Firefly enterprise offering available; Firefly "designed to be safe for commercial use" | G, WHO | none | WHAT, WHO | GA | 1 | https://news.adobe.com/assets/downloads/pdfs/2023/08/081623adobeexpressgenai.pdf | A | [V-open] |
| AE-04 | 2023-09-13 | Generative credits introduced across CC, Firefly and Express paid plans; free plans get monthly credits; extra credits from USD 4.99/month for 100 (from Nov 2023); CC prices raised citing "new costs associated with generative AI"; **"No changes to ... Adobe Express plans"** | PRICE | 5 | EM | monetized | n/a | https://blog.adobe.com/en/publish/2023/09/13/ai-creative-cloud-release-pricing-update | A | [V-open] |
| AE-05 | 2023 (MAX 2023) | Express add-ons: building open to all developers; marketplace with 40 add-ons | WHO (developers) | 3 | HOW | GA | 0 | https://blog.developer.adobe.com/en/publish/2023/09/max-2023-recap-everything-you-need-to-know-about-adobe-express-add-ons | A | [V-open] |
| AE-06 | 2024-03-07 | New Express mobile app with Firefly generative AI | G | none | WHAT | beta (as announced) | 1 | https://www.businesswire.com/news/home/20240307005588/en/New-Adobe-Express-Mobile-App-Brings-Firefly-Generative-AI-Models-Directly-into-Mobile-Workflows | A | [V-snippet] |
| AE-07 | 2024-04-01 | **Adobe Express GPT** in OpenAI's GPT Store (ChatGPT Plus, Team, Enterprise): searches 200,000+ templates, one click opens the template in Express | A-out | 2 | WHO, HOW | GA | 1 | https://blog.adobe.com/en/publish/2024/04/01/adobe-express-chatgpt-team-up-make-ai-content-ideation-creation-even-easier | A | [V-open] |
| AE-08 | 2024-12 to 2025-05-25 | Unbundling: Express removed from the Photography plan for new subscribers; complimentary Express Premium for Acrobat Pro/Standard plans ends 25 May 2025 (Adobe email quoted by users); Express Premium remains in CC All Apps | PRICE | none | EM | implemented | n/a | https://community.adobe.com/questions-329/adobe-express-premium-is-being-removed-from-creative-cloud-all-apps-plan-1223747 | C | [V-open] (user-quoted email) |
| AE-09 | 2025-03-18 | Adobe Express Agent for Microsoft 365 Copilot announced as "in development" (create images inside Copilot, PowerPoint, Word) | A-out | 2 | WHO, HOW | announced | 1 | https://news.adobe.com/news/downloads/pdfs/2025/03/03182025-summit-microsoft.pdf | A | [V-open] |
| AE-10 | 2025-08-19 | Acrobat Studio launched: Acrobat Pro, PDF Spaces, AI Assistant **and Express Premium** in one offer | PRICE, WHO | 6 | WHAT, EM | monetized | n/a | https://www.businesswire.com/news/home/20250819318466/en/Acrobat-Studio-Delivers-New-AI-Powered-Home-for-Productivity-and-Creativity-with-PDF-Spaces-Express-Creation-Tools-AI-Agents ; confirmed in https://news.adobe.com/news/2026/05/adobes-new-productivity-agent | A | [V-snippet] launch; [V-open] Express Premium inclusion |
| AE-11 | 2025-09 (beta), announced 2025-10-28 | Dev MCP Server for Express add-ons (AI coding assistants get Express add-on docs and typings) | WHO (developers) | 3 | HOW | beta | 0 | https://news.adobe.com/news/2025/10/adobe-max-2025-express-ai-assistant | A | [V-open] |
| AE-12 | 2025-10-28 | **AI Assistant (beta) in Express**: conversational creation and layer-level editing; orchestrates "first- and third-party models and agents"; beta for Premium on desktop; at GA "available to all Express customers through the Firefly generative credit system, with additional credit packs"; enterprise features (template locking, batch creation) "in the coming months" | A-in, PRICE (announced) | 1, 5 | WHAT, EM | beta | 2 | https://news.adobe.com/news/2025/10/adobe-max-2025-express-ai-assistant | A | [V-open] |
| AE-13 | 2025-10-28 / 2025-12-10 | "The Express platform that powers AI Assistant supports integrations across leading chatbot platforms"; Q4 call: Photoshop, Express and Acrobat capabilities "atomized" as MCP endpoints, "to deliver and monetize creative and PDF functionality in new surfaces" | A-out (intent) | 2 | HOW, EM | announced | n/a | https://news.adobe.com/news/2025/10/adobe-max-2025-express-ai-assistant ; https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q4fy25-transcript.pdf | A / B | [V-open] |
| AE-14 | 2025-12-10 | Q4 FY25: Express "generative presentations and designs, moving the industry into a post-template world"; 25,000+ businesses bought Express or Studio for the first time in Q4; 45+ new Express ecosystem partners (Bynder, Hootsuite, Sprout Social) | G, WHO | 3 | WHAT, WHO | GA (stated) | 1 | https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q4fy25-transcript.pdf | B | [V-open] |
| AE-15 | 2025-12-10 | **Photoshop, Express and Acrobat apps for ChatGPT**: "free to ChatGPT users globally"; Express on desktop, web, iOS and Android; connect via Settings > Apps & Connectors; browse Express templates, edit text and images, animate; "seamless" move to native apps | A-out | 2 | WHO, HOW | GA (free) | 2 | https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt ; https://blog.adobe.com/en/publish/2025/12/10/edit-photoshop-chatgpt | A | [V-open] |
| AE-16 | 2025-12 (help page) | Express for ChatGPT access terms: sign in with Adobe Express credentials when connecting; "Open in Adobe Express" for detailed edits; not available to users on Enterprise, Teams or Education plans | A-out (terms) | 2 | WHO | GA | 2 | https://helpx.adobe.com/express/web/create-with-templates/express-gpt.html | A | [V-snippet] (helpx blocked) |
| AE-17 | 2026-03-12 | Q1 FY26: Express MAU tripled YoY; "Acrobat and Express for ChatGPT" launched in Q1; integrations into "Copilot, Claude and Gemini" expected; Airtel (India) distribution partnership; freemium offerings "have a near-term impact on ARR" | WHO | 2 | WHO, EM | stated | n/a | https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q1fy26-transcript.pdf | B | [V-open] |
| AE-18 | 2026-03 | Adobe Express Developer MCP Server out of beta (npm @adobe/express-developer-mcp) for Cursor, Claude Desktop, VS Code | WHO (developers) | 3 | HOW | GA | 0 | https://blog.developer.adobe.com/en/publish/2026/03/build-faster-with-the-adobe-express-developer-mcp-server | A | [V-open] |
| AE-19 | 2026-03 (release notes) / 2026-04-24 (announcement) | **Express agent for Microsoft Copilot** live: create, edit, animate, download or "open it in Adobe Express"; installed from Copilot Agents, admin-controlled | A-out | 2 | WHO, HOW | GA | 2 | https://community.adobe.com/announcements-327/introducing-the-adobe-express-agent-for-microsoft-copilot-1558944 ; https://helpx.adobe.com/express/web/add-ons-and-integrations/adobe-express-agent-for-copilot.html | A | [V-open] announcement; [V-snippet] help page |
| AE-20 | 2026-04-28 | **Adobe for creativity connector in Claude**: 50+ tools incl. Express from launch; orchestrates multi-step workflows; "You'll need a Claude account"; Adobe sign-in optional, "unlocks higher usage limits, access to more tools, and the ability to save your work across sessions" | A-out | 2 | WHO, HOW | GA | 3 | https://blog.adobe.com/en/publish/2026/04/28/adobe-for-creativity-connector | A | [V-open] |
| AE-21 | 2026-05-06 | Acrobat productivity agent "draws on ... Adobe Express' AI-first creation capabilities"; new **Acrobat Express** offer; Acrobat Studio includes Express Premium | PRICE, A-in (Acrobat) | 6 | WHAT, EM | monetized | 2 | https://news.adobe.com/news/2026/05/adobes-new-productivity-agent | A | [V-open] |
| AE-22 | 2026-05-19 | Creativity connector "coming soon" to Google Gemini | A-out | 2 | WHO | announced | n/a | https://blog.adobe.com/en/publish/2026/05/19/adobe-creativity-connector-coming-google-gemini | A | [V-snippet] |
| AE-23 | 2026-06-11 | Q2 FY26: Adobe "rebalances" from direct-to-paid journeys to friction-free freemium onboarding "at the cost of short-term ARR" (Narayen, Wadhwani); agent monetization "is basically about credit consumption ... opportunity for upsell"; users journeyed to Firefly (Wadhwani) | PRICE, WHO | 5, 2 | WHO, EM | stated | n/a | https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q2fy26-transcript.pdf | B | [V-open] |
| AE-24 | 2026-06-18 | AI Assistant imaging update; still "beta on desktop only, available to personal Premium and Free plan accounts", Teams/Enterprise/Education not supported; editing actions do not consume free daily generations, generating new content does; Free = daily allotment, Premium = monthly credits | A-in, PRICE | 1, 5 | WHAT, EM | beta | 2 | https://community.adobe.com/announcements-85/the-express-ai-assistant-beta-just-got-better-1626041 | A | [V-open] |
| AE-25 | 2026-08-06 | **Adobe plugin in ChatGPT** unifies earlier Adobe apps: 70+ tools incl. Express, works across ChatGPT Work and Codex; guest use possible; sign-in "to unlock generative capabilities, access your Creative Cloud files, and save your work across sessions" | A-out, PRICE (terms) | 2, 5 | WHO, HOW, EM | GA | 3 | https://blog.adobe.com/en/publish/2026/08/06/introducing-adobe-chatgpt-create-edit-get-work-done-all-in-chatgpt | A | [V-open] |
| AE-26 | 2026-09-02 | Adobe for Slack (Business+ and Enterprise+ only): 70+ tools incl. Express; guest or sign-in (sign-in unlocks generative AI) | A-out | 2 | WHO | GA | 2 | https://blog.adobe.com/en/publish/2026/09/02/introducing-adobe-for-slack | A | [V-open] |
| AE-27 | 2026-09-09 | Acrobat "Stylize": applies "thousands of professionally designed Adobe Express templates" to plain PDFs | G | 6 | WHAT | announced (availability not checked) | 1 | https://blog.adobe.com/en/publish/2026/09/09/show-up-sharper-faster-with-new-acrobat-ai | A | [V-open] |
| AE-28 | 2026-09-10 | Saudi MCIT and HUMAIN partnership: access to Firefly and Express for 27 million citizens and residents; model "tuned to Saudi culture" | WHO | none | WHO | announced | 0 | https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q3fy26-transcript.pdf | B | [V-open] |
| AE-29 | 2026-09-24 | **Adobe in Gemini** (Photoshop, Lightroom, Express, Firefly) on all Gemini plans, sign in or create a free Adobe account; **Adobe for Claude plugin** expanded to 80+ tools incl. Acrobat, new layer-based interactive editor for Express designs, guest access | A-out | 2 | WHO, HOW | GA (rolling out) | 2 | https://blog.adobe.com/en/publish/2026/09/24/adobe-comes-to-gemini-expands-what-you-can-do-in-claude | A | [V-open] |
| AE-30 | 2026-09-29 | Interactive image and design editors "powered by Photoshop and Adobe Express" inside the ChatGPT plugin (side panels, edits flow back as context) | A-out | 2 | WHAT, HOW | GA | 2 | https://blog.adobe.com/en/publish/2026/09/29/openai-devday-2026-introducing-hands-on-editing-adobe-plugin-chatgpt | A | [V-open] |
| AE-31 | 2026-10-22 (page update) | AI Assistant help page still says beta; individual Premium and Free; not Teams, Enterprise, Education; desktop web only | A-in (status) | 1 | WHAT | beta | 2 | https://helpx.adobe.com/express/web/ai-assistant/adobe-express-ai-assistant-faq.html | A | [V-snippet] |

**Context moves at Adobe level (not coded for Express):** Firefly AI Assistant public beta, 27 Apr 2026, for Creative Cloud Pro and paid Firefly plans, with complimentary daily credits during beta, orchestrating Photoshop, Lightroom, Premiere, Firefly (Express not named) [V-open: S21]; creative agent extended to Premiere, Photoshop, Illustrator, InDesign, Frame.io, 18 Jun 2026 (Express not named) [V-open: S27]; Semrush and Topaz Labs acquisitions (see fact sheet).

---

## E. Strategy mapping

Scale: ●●● main, ●● present, ● weak or announced only, – absent.

| # | Strategy | Strength | Evidence IDs |
|---|---|---|---|
| 1 | Own agent inside the product | ●● (beta only) | AE-12, AE-24, AE-31, AE-21 |
| 2 | Being used by external agents | ●●● | AE-07, AE-09, AE-13, AE-15, AE-16, AE-19, AE-20, AE-25, AE-26, AE-29, AE-30 |
| 3 | Hosting third parties (platform) | ● (extensions, not agents) | AE-05, AE-11, AE-14, AE-18 |
| 4 | Proprietary context for agents | ● | AE-12, AE-29, AE-15 |
| 5 | Cost-driven hybrid monetization | ●●● | AE-04, AE-12, AE-23, AE-24, AE-25 |
| 6 | Expanding scope | ● (Express becomes a component of Acrobat) | AE-10, AE-14, AE-21, AE-27 |
| 7 | Acquiring AI-natives | – at Express level | none (Semrush, Topaz are Adobe-level) |

**1. Own agent (●●).** Evidence: AI Assistant announced 28 Oct 2025 with agency 2 (multi-step, contextual follow-up questions, orchestration of first- and third-party models) [V-open: S12]; still beta after June 2026 and, per the help page, on 22 Oct 2026 [V-open: S26; V-snippet: S34]. Why in this form: Express must match Canva's in-editor AI to remain credible as a challenger, but Adobe's agent investment is concentrated in the company-wide "creative agent" (Firefly AI Assistant, Creative Cloud apps) and the Acrobat productivity agent [V-open: S21, S27, S23]; the free base is huge, so a GA agent for everyone means large inference costs, hence the beta gated by credits. Counter-evidence: no GA in 12+ months; Teams, Enterprise and Education excluded; promised enterprise features (template locking, batch creation) not verified as shipped. Note the sequence: Express went **outside first** (GPT store April 2024, ChatGPT apps December 2025 GA) and its own agent is still beta.

**2. External agents (●●●).** Evidence: the earliest and broadest presence among the cases: Express GPT (Apr 2024), Copilot agent (announced Mar 2025, live 2026), ChatGPT apps (Dec 2025), Claude (Apr 2026), unified ChatGPT plugin (Aug 2026), Slack (Sep 2026), Gemini (Sep 2026). Access terms: entry is free (ChatGPT apps "free to ChatGPT users"; guest use in the ChatGPT plugin, Claude and Slack; Gemini on all plans), but sign-in "unlocks generative capabilities", higher limits, Creative Cloud files and saving across sessions [V-open: S14, S22, S25, S28, S29, S32]. So the terms are "free entry, metered generation", not simply "free". Why: (a) challenger position: for Express the scarce resource is distribution, not a paid seat base to protect, so being where intent starts (ChatGPT's 800 million weekly users, Gemini's "more than one billion" monthly users) has little cannibalization risk; (b) portfolio company that monetizes elsewhere: management says the goal is to "journey" users to Firefly and Creative Cloud and that agent monetization "is basically about credit consumption" [V-open: S25]; MAU, not Express revenue, is the declared KPI [V-open: S17]; (c) templates, Stock and Photoshop-grade tools are complementary assets (Teece 1986) that Adobe exports into assistants rather than keeping behind its own interface. Counter-evidence: ChatGPT app not available to Teams, Enterprise or Education users [V-snippet: S16]; Slack only for paid Slack tiers [V-open: S29]; no usage or revenue numbers per channel; "free" was reshaped in August 2026 (guest tier versus signed-in generative tier).

**3. Hosting third parties (●).** Evidence: add-ons marketplace open to all developers (2023), Embed SDK (2022, pre-AI), 45+ ecosystem partners in Q4 FY25, Dev MCP server for add-on developers (beta 2025, stable 2026) [V-open: S7, S13, S18; V-snippet: S4]. Why: classic platform logic of a challenger that needs integrations (Google Drive, Hootsuite, Sprout Social) to match Canva's apps ecosystem. Counter-evidence: no third-party **agents** hosted inside Express, no agent store; the MCP server serves developers' coding assistants, not end-user agents. Code it as a platform move with agency 0.

**4. Proprietary context (●).** Evidence: AI Assistant designs "that reflects their personal or brand style" [V-open: S12]; in Gemini, "preserving your branding and messaging" when adapting designs [V-open: S32]; brand kits in Premium [V-snippet: S35]; Firefly's "Create Brand Kit" skill (Q3 FY26) [V-open: S31]. Counter-evidence: no documented serving of Express brand kits or templates as context to external agents via MCP; enterprise governance features only announced. Brand context is more developed at Adobe level (Firefly Foundry, Brand Intelligence) than in Express.

**5. Cost-driven hybrid monetization (●●●).** Evidence: Adobe introduced generative credits in September 2023 across Express free and paid plans and justified Creative Cloud price increases with "new costs associated with generative AI" [V-open: S6]; AI Assistant GA terms tie the agent to Firefly credits plus credit packs [V-open: S12]; free users have a daily allotment, Premium monthly credits, and editing actions do not consume free generations while generating new content does [V-open: S26]; Q2 FY26: agent monetization through credit consumption and upsell [V-open: S25]. Why: inference adds a variable cost to a development-based, scalable model (course slides, L02); a free base of hundreds of millions makes rationing unavoidable; credits let Adobe keep the USD 9.99 seat as anchor. Counter-evidence: Express list price apparently unchanged since 2021 (USD 9.99 in TechCrunch 2021 and on the 2026 pricing page snippet) [V-open: S1; V-snippet: S35]; Adobe raised Creative Cloud prices but explicitly not Express prices in 2023 [V-open: S6]. The meter is on **generation**, not on the agent's work: the opposite emphasis to Gamma, where agent work is the metered unit.

**6. Expanding scope (●).** Evidence: Express extends from social graphics to "generative presentations", PDFs and video [V-open: S13, S5]; its creation capabilities are packaged into Acrobat Studio and Acrobat Express and power the Acrobat productivity agent and Acrobat "Stylize" [V-open: S23, S30; V-snippet: S11]. Interpretation: rather than Express expanding its own scope, Express is being **atomized into a creation layer** reused by Acrobat, by Adobe's agents and by external assistants (Q4 FY25: capabilities as MCP endpoints) [V-open: S13]. Counter-evidence: no move toward code or apps; the suite logic belongs to Adobe, not to Express.

**7. Acquisitions (–).** No acquisition targeted at Express found. Semrush (brand visibility, marketing) and Topaz Labs (enhancement models for Firefly and Creative Cloud) are Adobe-level [V-open: S17, S31].

**Rival hypotheses.**
- *Outcome-based pricing:* not observed. Pricing remains seat plus credits per generation [V-open: S6, S26].
- *Governance as a lever:* partially observed. Firefly in Express "designed to be safe for commercial use" and trained on licensed content [V-open: S5, S8]; template locking and approval workflows announced for enterprise [V-open: S12]. Governance differentiates Adobe at company level; for Express it is announced more than shipped.
- *Freemium funnel as the real strategy:* strongly supported. Q2 FY26 explicitly trades short-term ARR for MAU [V-open: S25]; this may explain both strategy 2 (free distribution) and strategy 5 (credits) better than an "AI strategy" per se.

**Unexpected moves to note.** (1) Unbundling and rebundling: complimentary Express Premium withdrawn from Acrobat Pro/Standard and from new Photography plans in 2025 [V-open: S10, level C], then included in the paid Acrobat Studio bundle (Aug 2025) [V-snippet: S11]. (2) Deliberate acceptance of lower short-term ARR to grow freemium MAU (June 2026) [V-open: S25].

**What has NOT changed (2022 to 2026).**
- Freemium structure (Free, Premium, Teams/Enterprise, free K-12) and the Premium list price of USD 9.99/month [V-open: S1; V-snippet: S35].
- Inclusion of Express Premium in Creative Cloud All Apps [V-open: S6, S10].
- Template-first logic: every external assistant integration surfaces Express templates and hands off to the Express app ("Open in Adobe Express") [V-open: S8, S15, S19, S32].
- No separate financial reporting for Express; KPIs mix Express with Acrobat (Business Professionals & Consumers) and with Firefly and mobile apps (creative freemium MAU) [V-open: S31].
- Target segment of non-professionals and education.

---

## F. Draft section for the setup document (English, about 950 words)

### Adobe Express

**Background.** Adobe Express is Adobe's entry-level, template-first content creation app. It descends from Adobe Spark (2016), was relaunched in December 2021 as Creative Cloud Express and was renamed Adobe Express during 2022 [S1, S2]. It is analysed as an embedded case: the unit of analysis is the product, while Adobe is context and company-level moves are recorded only when they touch Express. This choice has a cost: Adobe does not report Express revenue, and its indicators mix Express with Acrobat ("Acrobat plus Express MAU", over 900 million in Q3 FY2026) and with Firefly and mobile apps ("creative freemium MAU", over 100 million) [S31].

**Business model in 2022.** *Who:* non-professional creators, from students to small business owners, described by Adobe as people "focused on outcome and not process", plus over 43 million K-12 users of the free education version and Creative Cloud members [S1, S3]. *What:* quick creation of social posts, flyers, short videos and web pages from templates, with Adobe Stock images, Adobe Fonts and simplified Photoshop and PDF functions; "AI" meant template and font recommendations [S1, S3]. *How:* the product repackaged technologies and content libraries Adobe already owned, and was distributed through the web, mobile app stores, the Creative Cloud base, schools and partners embedding it (Wix, October 2022) [S1, S4]. *Economic model:* freemium, with Premium at USD 9.99 per month and inclusion in Creative Cloud plans; a development-based, highly scalable cost structure without per-use costs [S1]. In this segment Express is the challenger: Canva is the leader, even if Adobe's own communication never names it.

**Generative phase (2023-2024).** Adobe rebuilt the product as an "AI-first" editor integrated with its Firefly models (general availability in August 2023), stressing that Firefly was "designed to be safe for commercial use" [S5]. In September 2023 Adobe introduced generative credits across Creative Cloud, Firefly and Express, including monthly credits for free users, and raised Creative Cloud prices citing "new costs associated with generative AI", while leaving Express prices unchanged [S6]. In April 2024 Express became one of the first creation tools inside an AI assistant, as a custom GPT in OpenAI's GPT Store that searched Express templates and sent the user back to the Express app [S8].

**Agentic phase (2025-2026).** Two channels developed at very different speeds. Inside the product, the AI Assistant announced at Adobe MAX in October 2025 lets users create and edit designs through conversation, orchestrating first- and third-party models; its agency is multi-step with user confirmation (level 2). Adobe announced that at general availability it would be offered to all users through Firefly credits and credit packs [S12], but in October 2026 it was still in beta, on desktop only and not for Teams, Enterprise or Education plans [S26, S34]. Outside the product, Express moved fast: an Express agent for Microsoft 365 Copilot (announced March 2025, live in 2026), apps in ChatGPT declared "free to ChatGPT users globally" (December 2025), a connector in Claude (April 2026), a unified Adobe plugin in ChatGPT (August 2026), Slack (September 2026) and Gemini on all plans (September 2026) [S9, S14, S19, S22, S28, S29, S32]. The access terms are precise: anyone can start, often as a guest, but signing in with an Adobe account "unlocks generative capabilities", higher usage limits and saving across sessions [S22, S28, S32]. Users are invited to continue "in Adobe Express" for finer edits.

**Economic model today.** Management describes this as a freemium funnel. In June 2026 Adobe said it would shift visitors from direct-to-paid journeys to friction-free onboarding "at the cost of short-term ARR", and that the monetization model for its agents "is basically about credit consumption", with upsell toward Firefly and Creative Cloud [S25]. The seat price of Premium has not moved since 2021; the meter sits on generation: free users get a daily allotment, Premium users monthly credits, and editing actions in the assistant do not consume free generations [S26]. Packaging, not price, is where Express changed: complimentary Premium was withdrawn from some Acrobat and Photography plans in 2025 and Express Premium was folded into the paid Acrobat Studio bundle [S10, S11, S23].

**Strategies identified (first version).** The dominant strategy is being used by external agents (strategy 2), under "free entry, metered generation" terms, combined with cost-driven hybrid monetization (strategy 5): seat as anchor, credits as cost cap, rationed free AI. The own agent (strategy 1) is present but still in beta. Hosting third parties (strategy 3) exists only as a pre-agentic platform (add-ons, Embed SDK, an MCP server for developers), with no third-party agents inside Express. Proprietary context (strategy 4) is weak: brand styles are mentioned, but no brand kit served to external agents was found. Scope expansion (strategy 6) takes an unusual form: rather than growing, Express is being "atomized" into a creation layer that Acrobat, Adobe's own agents and external assistants call [S13, S23, S30]. No acquisition targeted Express (strategy 7).

**Why this profile.** Three drivers explain it. First, the challenger position: Express has no large paid seat base to protect, so distribution inside assistants costs little in cannibalization and reaches users where intent starts. Second, Express belongs to a portfolio that monetizes elsewhere: Adobe measures it by monthly active users and converts usage into credits, Firefly plans and Creative Cloud or Acrobat Studio upgrades [S17, S25]. Third, cost structure: a free base of this size makes inference a real variable cost, which explains credits from 2023 and the slow general availability of the in-product agent. In Teece's terms, Adobe brings its complementary assets (templates, Stock, Photoshop-grade tools, a "commercially safe" model) into other companies' assistants instead of protecting them behind its own interface.

**What has not changed, and limits.** The freemium structure, the USD 9.99 Premium price, the inclusion in Creative Cloud, the template-first logic and the target segment are the same as in 2022. Evidence on results is weak: Express-specific numbers are qualitative or growth rates from earnings calls (for example, Express MAU tripled year on year in Q1 FY2026) [S17], and Adobe MAX (10-12 November 2026) may change the picture before the data freeze.

---

## G. Gaps and open issues

1. **helpx.adobe.com and www.adobe.com not readable** in this session: plan-level credit allowances (Free daily allotment, Premium 250/month), Teams price, ChatGPT app plan exclusions and the AI Assistant status page are [V-snippet]. The student should open: S16, S20, S34, S35 and the Wayback snapshots in section C.
2. **Exact rename date** (Creative Cloud Express > Adobe Express): bounded between 13 Dec 2021 and 19 Jul 2022; check the 2022-06-02 homepage snapshot.
3. **Express Premium annual price at t0** (USD 99.99) and whether a Teams plan existed in 2022: open the 2022-06-03 pricing snapshot.
4. **Free AI allowance history**: monthly credits for free users (Sep 2023) versus "daily allotment" (2026). When did it change? Compare t1 and t2 pricing snapshots.
5. **AI Assistant GA**: no GA found as of 22 Oct 2026; check Adobe MAX 2026 announcements (10-12 Nov) before the 30 Nov freeze.
6. **Enterprise AI Assistant features** (template locking, batch creation, approval) announced Oct 2025: shipped or not?
7. **Sign-in and credits in assistants**: do generations in ChatGPT, Claude or Gemini draw down the user's Express or Firefly credits? Adobe says sign-in "unlocks generative capabilities" but does not state the meter. Help pages S16 and the Adobe for Claude help page (https://helpx.adobe.com/creative-cloud/apps/integration-with-other-apps/adobe-connectors/adobe-for-claude.html) should be checked.
8. **Express MAU absolute numbers**: never disclosed; only growth rates and combined figures. State as a limitation.
9. **Q3 FY26 Express-specific announcement**: the Q3 call refers to innovations "announced yesterday in Acrobat and Express" (9 Sep 2026); only the Acrobat post (Stylize with Express templates) was found.
10. **Unbundling evidence (AE-08)** comes from user-quoted emails in Adobe Community (level C); look for an Adobe help notice.
11. **2022 Adobe filings** (10-K FY2022) not opened (sec.gov blocked); the 10-K description of Express would strengthen the t0 baseline.
12. **Contradictions with the current synthesis (30 Oct 2026):** (a) Express was in ChatGPT already in April 2024 (GPT Store, paid ChatGPT tiers only), so December 2025 was not the first entry; (b) "free in ChatGPT" is accurate for December 2025, but from August 2026 the terms are "guest use free, sign-in unlocks generative capabilities"; (c) the Claude connector included Express **from launch** (28 Apr 2026), not "added later"; (d) the AI Assistant is open to Free accounts too (not only Premium) since at least June 2026, and was still beta in October 2026, not only July; (e) strategy 6 is not simply absent: Express is bundled into Acrobat Studio and used as a creation layer by Acrobat.

---

## Source list (all [V-open] accessed 2026-11-07 unless marked)

- S1 TechCrunch, 13 Dec 2021: https://techcrunch.com/2021/12/13/adobe-launches-creative-cloud-express/ [V-open] (C)
- S2 Wikipedia, Adobe Express: https://en.wikipedia.org/wiki/Adobe_Express [V-open] (C)
- S3 TechCrunch, 17 Oct 2022: https://techcrunch.com/2022/10/17/with-over-43m-k-12-users-adobe-express-for-education-gets-new-ai-and-safe-search-tools/ [V-open] (C)
- S4 Adobe blog, 18 Oct 2022 (Wix, Embed SDK): https://blog.adobe.com/en/publish/2022/10/18/teaming-with-wix-introducing-adobe-express-embed-sdk [V-snippet] (A)
- S5 Adobe press release, 16 Aug 2023: https://news.adobe.com/assets/downloads/pdfs/2023/08/081623adobeexpressgenai.pdf [V-open] (A)
- S6 Adobe blog, 13 Sep 2023: https://blog.adobe.com/en/publish/2023/09/13/ai-creative-cloud-release-pricing-update [V-open] (A)
- S7 Adobe developer blog, MAX 2023 recap: https://blog.developer.adobe.com/en/publish/2023/09/max-2023-recap-everything-you-need-to-know-about-adobe-express-add-ons [V-open] (A)
- S8 Adobe blog, 1 Apr 2024 (Express GPT): https://blog.adobe.com/en/publish/2024/04/01/adobe-express-chatgpt-team-up-make-ai-content-ideation-creation-even-easier [V-open] (A)
- S9 Adobe press release, 18 Mar 2025 (Microsoft 365 Copilot): https://news.adobe.com/news/downloads/pdfs/2025/03/03182025-summit-microsoft.pdf [V-open] (A)
- S10 Adobe Community thread, Apr 2025: https://community.adobe.com/questions-329/adobe-express-premium-is-being-removed-from-creative-cloud-all-apps-plan-1223747 [V-open] (C)
- S11 BusinessWire, 19 Aug 2025 (Acrobat Studio): https://www.businesswire.com/news/home/20250819318466/en/Acrobat-Studio-Delivers-New-AI-Powered-Home-for-Productivity-and-Creativity-with-PDF-Spaces-Express-Creation-Tools-AI-Agents [V-snippet] (A)
- S12 Adobe press release, 28 Oct 2025 (AI Assistant): https://news.adobe.com/news/2025/10/adobe-max-2025-express-ai-assistant [V-open] (A)
- S13 Adobe Q4 FY2025 earnings call transcript, 10 Dec 2025: https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q4fy25-transcript.pdf [V-open] (B)
- S14 Adobe press release, 10 Dec 2025 (ChatGPT): https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt [V-open] (A)
- S15 Adobe blog, 10 Dec 2025: https://blog.adobe.com/en/publish/2025/12/10/edit-photoshop-chatgpt [V-open] (A)
- S16 Adobe help, Express for ChatGPT: https://helpx.adobe.com/express/web/create-with-templates/express-gpt.html [V-snippet] (A)
- S17 Adobe Q1 FY2026 transcript, 12 Mar 2026: https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q1fy26-transcript.pdf [V-open] (B)
- S18 Adobe developer blog, Mar 2026 (Dev MCP server stable): https://blog.developer.adobe.com/en/publish/2026/03/build-faster-with-the-adobe-express-developer-mcp-server [V-open] (A)
- S19 Adobe Community announcement, 24 Apr 2026 (Copilot agent): https://community.adobe.com/announcements-327/introducing-the-adobe-express-agent-for-microsoft-copilot-1558944 [V-open] (A)
- S20 Adobe help, Express agent for Copilot: https://helpx.adobe.com/express/web/add-ons-and-integrations/adobe-express-agent-for-copilot.html [V-snippet] (A)
- S21 Adobe blog, 27 Apr 2026 (Firefly AI Assistant beta): https://blog.adobe.com/en/publish/2026/04/27/firefly-ai-assistant-public-beta [V-open] (A)
- S22 Adobe blog, 28 Apr 2026 (Claude connector): https://blog.adobe.com/en/publish/2026/04/28/adobe-for-creativity-connector [V-open] (A)
- S23 Adobe press release, 6 May 2026 (productivity agent, Acrobat Express): https://news.adobe.com/news/2026/05/adobes-new-productivity-agent [V-open] (A)
- S24 Adobe blog, 19 May 2026 (Gemini coming soon): https://blog.adobe.com/en/publish/2026/05/19/adobe-creativity-connector-coming-google-gemini [V-snippet] (A)
- S25 Adobe Q2 FY2026 transcript, 11 Jun 2026: https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q2fy26-transcript.pdf [V-open] (B)
- S26 Adobe Community announcement, 18 Jun 2026 (AI Assistant beta update): https://community.adobe.com/announcements-85/the-express-ai-assistant-beta-just-got-better-1626041 [V-open] (A)
- S27 Adobe press release, 18 Jun 2026 (creative agent): https://news.adobe.com/news/2026/06/adobe-unveils-major-expansion [V-open] (A)
- S28 Adobe blog, 6 Aug 2026 (Adobe plugin in ChatGPT): https://blog.adobe.com/en/publish/2026/08/06/introducing-adobe-chatgpt-create-edit-get-work-done-all-in-chatgpt [V-open] (A)
- S29 Adobe blog, 2 Sep 2026 (Slack): https://blog.adobe.com/en/publish/2026/09/02/introducing-adobe-for-slack [V-open] (A)
- S30 Adobe blog, 9 Sep 2026 (Acrobat AI, Stylize): https://blog.adobe.com/en/publish/2026/09/09/show-up-sharper-faster-with-new-acrobat-ai [V-open] (A)
- S31 Adobe Q3 FY2026 transcript, 10 Sep 2026: https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q3fy26-transcript.pdf [V-open] (B; financial figures are CFO prepared remarks)
- S32 Adobe blog, 24 Sep 2026 (Gemini, Claude): https://blog.adobe.com/en/publish/2026/09/24/adobe-comes-to-gemini-expands-what-you-can-do-in-claude [V-open] (A)
- S33 Adobe blog, 29 Sep 2026 (ChatGPT interactive editing): https://blog.adobe.com/en/publish/2026/09/29/openai-devday-2026-introducing-hands-on-editing-adobe-plugin-chatgpt [V-open] (A)
- S34 Adobe help, AI Assistant overview/FAQ (updated 22 Oct 2026): https://helpx.adobe.com/express/web/ai-assistant/adobe-express-ai-assistant-faq.html [V-snippet] (A)
- S35 Adobe Express pricing page: https://www.adobe.com/express/pricing [V-snippet] (A; HTTP 403 to curl)
- S36 Adobe newsroom homepage (headline of 3 Sep 2026 CEO announcement): https://news.adobe.com/ [V-open] (A)
- S37 Adobe MAX 2026 dates: https://www.opencurious.com/tech-events/adobe-max-2026 [V-snippet] (C)
- S38 Newsshooter, 24 Sep 2026: https://www.newsshooter.com/2026/09/24/adobe-expands-what-you-can-do-in-gemini-claude/ [V-open] (C, corroborates S32)
- S39 Adobe blog, 19 Jul 2022 (name "Adobe Express"): https://blog.adobe.com/en/publish/2022/07/19/adobe-express-for-education-gives-classrooms-what-they-need-tell-their-stories [V-snippet] (A)
- S40 BusinessWire, 7 Mar 2024 (mobile app with Firefly): https://www.businesswire.com/news/home/20240307005588/en/New-Adobe-Express-Mobile-App-Brings-Firefly-Generative-AI-Models-Directly-into-Mobile-Workflows [V-snippet] (A)
- S41 Adobe developer docs, Embed SDK: https://developer.adobe.com/express/embed-sdk [V-snippet] (A)
- S42 Analytics India Magazine (Canva versus Adobe framing): https://analyticsindiamag.com/canva-cant-keep-up-with-adobe-anymore/ [V-snippet] (C)
- S43 The Verge, 21 Mar 2023 (Express for Enterprise), seen only as a reference in S2 [V-snippet] (C)
- S44 Bloomberg, 19 Nov 2025 (Semrush): https://www.bloomberg.com/news/articles/2025-11-19/adobe-nearing-1-9-billion-deal-to-buy-semrush-wsj-reports [V-snippet, from round 1 notes] (C)
