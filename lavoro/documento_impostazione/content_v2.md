## About this document

As agreed in our call on 30 October, this document covers the 4 things you asked for: material and bibliography, the companies for the case studies, a first description of each case (history, business model before AI, strategies after) and the structure of the thesis. At the end I added a few first observations and the points where I would like your opinion.

The evidence was collected up to 7 November 2026 from public sources: filings and earnings calls where they exist, company announcements, pricing and help pages, interviews and the press. For the thesis I will freeze the data on 30 November 2026. Some details, like the 2022 list prices, I still have to check on archived web pages.

# 1. Topic and research question

## Context: AI lowered the barriers to entry

Since 2023 generative AI has made it much cheaper to build software. Deloitte writes that "the cost of producing code approaches zero" (Deloitte, 2025). IDC expects the old barriers to entry in application markets to be "increasingly challenged" by software built as agents (Newmark, 2025). Lovable shows how fast it can go: USD 400 million of annual recurring revenue (ARR) in February 2026, with 146 employees (TechCrunch, 2026a).

Creation tools get hit from 3 sides. 1) AI-native entrants: Gamma, a presentation tool, reported USD 100 million of ARR and 70 million users in November 2025, with about 50 employees (TechCrunch, 2025). 2) The model labs and big tech now build creation tools themselves. Anthropic launched Claude Design in April 2026 and Google launched Pics inside Workspace in September 2026 (Anthropic, 2026; Google, 2026). 3) General assistants make documents, slides and images directly from a chat (Anthropic, 2025; Microsoft, 2025). On top of this, agentic AI adds systems that plan, use tools and carry out tasks in several steps (Sapkota et al., 2026). They can also use other companies' software.

So the question for an incumbent that spent 10 years building a creation tool is the one you raised in our call. How do I defend what I built, and how do I change my business model to survive? What fell is the cost of making a first artifact. Distribution, the installed base, file formats, template libraries, brand kits and design systems are still hard to copy. These are complementary assets in Teece's (1986) sense, and a lot of what incumbents do can be read as a way to make users, and agents, stay with them because of these assets.

## The puzzle

Practitioners give incumbents contrasting advice. For workflows that agents can easily enter but not fully automate, Bain tells incumbents to "launch their own agents fast, deepen partner integrations to raise switching costs, and limit access to critical end points". Where agents can do both, Bain says to "pick a lane: either become the neutral agent platform or supply the unique data that powers it", and it warns about "becoming a silent back end while the semantic gatekeepers harvest the margin" (Crawford et al., 2025, pp. 24-28). IDC goes the other way: "if an agent cannot find your capability, your capability does not exist" (Newmark, 2026).

The creation incumbents did not wait. Between 2024 and 2026 all 4 of my cases opened their products to external agents (ChatGPT, Claude, Microsoft Copilot, Gemini, and coding agents through the Model Context Protocol, MCP). At the same time they built their own agents. So opening is not the real question. The terms are. If I ask ChatGPT for a poster and it opens Canva for me, who is Canva's customer in that moment, me or the agent? And who pays for the work? I want to understand what these companies opened, on which terms, what they kept for themselves, and how this is changing their business models.

## Research question

My research question is:

*How are creation-oriented productivity SaaS incumbents evolving their business models as agentic AI enables digital artifacts to be produced by AI agents, both inside their products and through external agents that use them?*

It has 3 sub-questions:

- SQ1. Which roles do these companies take toward AI agents (own agent inside the product, tool for external agents, host of other firms' agents), on which access terms, and when?
- SQ2. How do these roles change the who, what, how and economics of the business model between 2022 and 2026, how deep is the change, and what stays the same?
- SQ3. How do these companies capture value and pay for the AI when an agent, and not a person, makes the artifact?

It refines the question behind the deposited title ("How can productivity SaaS companies evolve their business models in response to the emergence of agentic AI?"). I moved from "how can" to "how are". I look at what the companies actually do, and the strategies come out of the cases. The "how can" comes back at the end, in the managerial implications. I also cover both phases, generative AI (2023-2024) and agentic AI (2025-2026), to see how much each one changed.

## Population

"Productivity SaaS" alone is too broad, because it includes Trello, Slack and CRMs. So I use a narrower working definition. Creation-oriented productivity SaaS are cloud software products (SaaS in the NIST sense; Mell & Grance, 2011). Their main job is to let users create, edit or transform a digital artifact, such as a graphic, a deck, a document, an interface design, a video or a website. The artifact keeps its value outside the software, and the product sells across industries. This is my definition for the thesis, not a category from the literature.

A product is in if 4 things are true. It is SaaS and used across industries. The company describes it with a creation verb (create, design, write, edit, build) applied to an artifact. The artifact can be exported or published. And it already had a commercial business model in mid-2022, before ChatGPT. Out are task tools (Trello, Asana, monday.com), systems of record (Salesforce, HubSpot), communication (Slack, Zoom), storage (Dropbox, Box) and suites where the creation product cannot be separated (Microsoft 365, Google Workspace, which I use only as context). Notion, Wix and Miro are borderline, so I discuss them but I don't use them as cases. In Chapter 1 I will test the definition on about 20 products taken from commercial software categories.

## Framework and method

I analyse the cases with the framework of the course: the entrepreneurial formula, with the target market (to whom?), the value proposition (what?) and the firm structure (how?), closed by the economics of the model (Parolini, 2021). It comes from Coda's *formula imprenditoriale* (Coda, 1984/2012), which builds on Normann's (1977) business idea, and it maps onto the Business Model Canvas (Osterwalder & Pigneur, 2010). The course says that what matters is the fit between the components, and I use this as my test. An AI feature that changes 1 component is a product change. Changes in 2 or more components that need a new fit are a business model change (Foss & Saebi, 2017).

The course idea on cost structure is central too. Classic SaaS is a development-based activity and very scalable: one more user costs almost nothing. Generative and agentic AI add a cost every time someone uses them (inference). So part of the model becomes less scalable (Shapiro & Varian, 1999). This explains a lot of what I see in the cases: AI credits, limits on free AI, prices going up and coming back down.

The method is a multiple-case study (Eisenhardt, 1989; Yin, 2018) based on documents (Bowen, 2009). I use pricing, help and developer pages (current and archived), company announcements, filings and earnings calls where available, interviews with executives and the press, plus academic and practitioner literature, combined following Garousi et al. (2019). For each case I look at 3 moments: mid-2022 (before ChatGPT), December 2024 (end of the generative phase) and 30 November 2026. Every move gets a date, a source, a status (announced, beta, available to all, paid) and a level of agency, and I also record what did not change. I don't plan interviews. If you think it is useful, I could add 3 to 5 with SaaS product or pricing managers to check the results.

# 2. Structure of the thesis

The thesis has 2 parts. Part I is the world before agentic AI: what these products are and how their business models worked. Part II is what changes with AI and how the companies respond, one strategy at a time, with the reasons inside each strategy.

Introduction (about 5 pages). Lower barriers to entry and the arrival of agentic AI, the puzzle of opening to agents, the research question and the contribution.

Part I. Productivity SaaS and their business models

Chapter 1. Defining productivity SaaS (about 12 pages). SaaS as a delivery model; how the literature and commercial taxonomies define productivity software, and why that is too broad; my definition; the boundary test.

Chapter 2. The cases and their business models before AI (about 15 pages). The entrepreneurial formula and the Business Model Canvas; why these cases; Figma, Canva, Adobe Express and Grammarly in 2022; what they had in common, like freemium, seats and a scalable cost structure.

Part II. AI and strategies for business model evolution

Chapter 3. Generative and agentic AI (about 12 pages). Definitions and levels of agency; business model innovation and adaptation; AI and business models in the literature; the 2026 "SaaSpocalypse" debate and what consultancies say; the 2 channels (agents inside the product, external agents using it); the theoretical lenses; 7 candidate strategies.

Chapter 4. Methodology (about 5 pages). Design, sources, coding at 3 points in time, limits.

Chapter 5. Strategies for business model evolution (about 25 pages). One section for each of the 7 strategies in Section 3: what it is, how each case uses it (or why not), why in that form, and what it changes in the business model.

Chapter 6. Comparing the cases (about 6 pages). The strategy-by-case matrix, why the profiles differ, the comparison with Gamma, and how much each phase changed.

Conclusions (about 5 pages). The answer to the research question, the contribution, implications for managers and the limits.

Planned figures: a timeline of each company's AI moves from 2022 to 2026, a before-and-after view of each business model, the strategy-by-case matrix, and Figma's margins over time.

<<<pagebreak>>>

# 3. The cases

## Selection and first profiles

The 4 cases cover the classic productivity artifacts (design, graphics, text) and they differ in position, customers and data. Gamma is a benchmark: an AI-native entrant with no business model before AI.

|Case|Artifact|Why it is in the sample|Main data source|
|---|---|---|---|
|Figma|Interface designs, prototypes|Listed company: the best data on AI costs and on the terms for agents|SEC filings, earnings releases, company blog and help center|
|Canva|Graphics, presentations, video|The typical case, with the largest freemium base|Company announcements, accounts reported by the press, shareholder updates|
|Adobe Express|Social graphics, flyers, short videos|Same product and users as Canva, opposite strategy; a challenger inside a bigger company|Adobe announcements and earnings calls|
|Grammarly|Text|The classic productivity artifact; works on top of other apps; the biggest repositioning|Company announcements, pricing and support pages|
|Gamma (benchmark)|Presentations, documents|AI-native new entrant|Company statements, press|

I use 7 candidate strategies, taken from the literature and from a first look at the cases. The table shows how strongly each case seems to use each one so far. The final profiles will come from the full coding.

|Strategy|Figma|Canva|Adobe Express|Grammarly|
|---|---|---|---|---|
|1. Own agent inside the product|Strong|Strong|Weak (beta)|Present|
|2. Being used by external agents|Strong (paid seat, metered later)|Strong (channel, paid features)|Strong (free entry, paid generation)|Weak (suite products only)|
|3. Hosting other firms' agents|Weak|Weak|Weak|Strong|
|4. Serving proprietary context|Strong|Strong|Weak|Present|
|5. Cost-driven pricing|Strong|Strong|Strong|Present|
|6. Expanding scope|Strong (toward code)|Strong (toward marketing)|Present (creation layer for other apps)|Strong (toward a suite)|
|7. Buying AI-native companies|Present|Present|Absent|Strong|
|Rival: outcome-based pricing|Absent|Absent|Absent|Absent|
|Rival: governance as a lever|Weak|Weak|Weak|Present|

## Figma

Dylan Field and Evan Wallace founded Figma in 2012 (Figma prospectus, 2025). Figma Design launched in 2016: an interface design tool in the browser, where many people can work on the same file at the same time (Figma blog, 2024). In September 2022 Adobe agreed to buy Figma for about USD 20 billion (Adobe, 2022). The deal was dropped in December 2023 because there was no path to regulatory approval (Figma blog, 2023). Figma listed on the New York Stock Exchange in July 2025 at USD 33 per share, and it passed USD 1 billion of annual revenue in 2025 (Figma prospectus, 2025; Figma press release, 2026). It is my pilot case because, as a listed company, it publishes the most detailed numbers on how AI changes revenue and costs.

In mid-2022 the business model looked like this. Who: product designers and the teams that build digital products with them (developers, product managers, writers), from students on free plans to large companies. What: one shared canvas in the browser to design and prototype interfaces, with design systems and libraries as the team's reference, plus FigJam and a community of files and plugins. How: web-first multiplayer software, product-led growth through self-service plus a sales team, and public APIs with more than 10,000 plugins and widgets (Figma prospectus, 2025). Economics: freemium, with a subscription per paid editor seat on the Professional, Organization and Enterprise plans, and free viewers (Figma blog, 2023). It was very scalable. Figma was expected to end 2022 above USD 400 million ARR, with net dollar retention above 150% and gross margins around 90% (Adobe, 2022).

In the generative phase Figma was careful. It bought the AI design start-up Diagram in June 2023, added AI to FigJam in November 2023 and launched Figma AI in June 2024 as a free beta on "third-party, out-of-the-box AI models". It also warned that usage limits could come once the costs were known (Figma blog, 2023, 2024).

The agentic phase was faster. In March 2025 seats were split into Full, Dev, Collab and View, with a higher price for the Full seat (Figma blog, 2024). Config 2025 brought Figma Make, which goes from a prompt to an app (Figma blog, 2025). In June 2025 Figma released an MCP server that gives coding agents like Claude Code and Cursor access to design context. In October 2025 it launched an app in ChatGPT and bought Weavy, now Figma Weave (Figma blog, 2025). March 2026 is the key month. Figma started selling AI credit add-ons, enforced the monthly credit limits of every seat, and opened its canvas to external agents, which can now create and edit designs with the team's components. Writing is free in beta, but it "will eventually be a usage-based paid feature" (Figma blog, 2026). Figma's own agent opened to all users in June 2026 and became generally available, using credits, on 6 October 2026 (Figma help center, 2026).

The costs show up in the filings. In Q2 2026 cost of revenue grew 117% while revenue grew 48%. Non-GAAP gross margin went from 92% in 2024 to 82% in Q3 2026, mostly because of AI infrastructure and hosting (Figma 10-Q, 2026; Figma press releases, 2025-2026). Use is broad, though. In October 2026, 65% of customers above USD 10,000 ARR used the Figma agent every week and more than 80% used AI credits (Figma press release, 2026).

So Figma combines 5 strategies strongly. 1) It is used by external agents, but on seat-based terms: writing needs a paid Full seat, access is limited by plan, and usage pricing is announced. Figma says that large customers using its MCP server grew Full seats about 70% faster (Figma press release, 2026). 2) It serves its customers' context to agents. Design systems, skills and the new Specs format make a team's design knowledge usable by agents, which is Teece's (1986) argument on complementary assets. 3) Its pricing follows costs. The seat is the anchor, credits cap the cost, and credit prices reflect "the model's cost to Figma" (Figma help center, 2026). 4) It builds its own agent, more and more on its own model, to stand out and to cut costs (Figma press release, 2026). 5) It expands toward code (Make, code layers) and marketing assets. Acquisitions are small and integrated (Diagram, Weavy, the Bud team). Hosting other firms' agents is weak. I found no outcome-based pricing, and governance is an Enterprise add-on with controls on AI hosting.

What did not change matters as much. Figma still sells seats on the same 4 plans, keeps a free plan and free viewers, and explains growth mainly with new paying customers and more seats (Figma 10-Q, 2026). Its filings name the risk that agents "could reduce the number of paid seats required for a given level of output". Since May 2026 they also say that AI model providers may "offer competing products" and "intermediate end-user relationships", a fear made concrete by Anthropic's Claude Design in April 2026 (Anthropic, 2026). Figma's answer so far is to keep the canvas at the centre: open to every agent, but on its own terms.

## Canva

Canva was founded in Australia in 2012 by Melanie Perkins, Cliff Obrecht and Cameron Adams, and it launched its editor in the browser in 2013 (Canva press release, 2025a). It grew by making design easy for people with no training: templates instead of a blank page, drag-and-drop instead of pixel editing. It reached large companies only in 2024, with a real Enterprise plan (TechCrunch, 2024a). It is private and based in Sydney. At the end of 2025 it reported more than 265 million monthly users, more than 31 million paying users and USD 4 billion of ARR (TechCrunch, 2026b). Its accounts filed in Australia show statutory revenue of USD 962 million in 2022 and USD 2.1 billion in 2024 (Startup Daily, 2026a).

In mid-2022 Canva served a mass of non-designers (individuals, small businesses, teachers, marketers), reached mostly through search and word of mouth. Small teams were the main paying segment and enterprises were still marginal (TechCrunch, 2024a). It passed 100 million monthly users in October 2022 (Canva press release, 2022). The offer was fast and easy design of social graphics, presentations, documents and print products, with no skills and at a low price. It ran on a web editor with real-time collaboration, a huge library of templates and stock content (Pixabay and Pexels were bought in 2019) and product-led growth. The model was freemium: Pro per person, and a Teams plan at a flat price for up to 5 people, a price Canva later said had been "unchanged for the last four years" (TechCrunch, 2024b). Serving a free user cost very little.

In the generative phase (2022-2024) Canva added one-step features: Magic Write (December 2022), then Magic Studio with the Canva Shield trust program and a USD 200 million fund for creators (October 2023). It bought Affinity (about USD 380 million) and the AI start-up Leonardo.ai, which kept running on its own (TechCrunch, 2024c). It also moved Teams from a flat price to a price per seat, citing the AI features, and partly backed down for old customers after complaints (TechCrunch, 2024b; MarTech, 2024).

From 2025 things sped up. Visual Suite 2.0 brought Canva AI as a chat assistant, Canva Code and Canva Sheets (Canva press release, 2025a). In June 2025 Canva became the "first design connector" for ChatGPT and launched an MCP server that lets AI assistants access a user's designs (Canva press release, 2025b). Claude followed in July 2025 (Engadget, 2025), and in October 2025 Canva was a launch partner of apps in ChatGPT. In October 2025 it added its own design model and Canva Grow for marketing (Canva press release, 2025c). In early 2026 Canva brought Brand Kits into Claude and ChatGPT and reported more than 12 million designs created or opened through AI assistants. In April 2026 it bought Simtheory and Ortto, launched Canva AI 2.0 (an agent with memory and scheduled tasks) as a research preview, and started selling an AI Pass add-on (Canva press release, 2026; PricingSaaS, 2026).

Then the cost of AI became visible. In its Q2 2026 shareholder update Canva cut its 2026 growth target from 30% to 20%. It called this "a deliberate decision to get the economics right", because it had been "relying too heavily on frontier models" (Startup Daily, 2026b; Fortune, 2026). It raised Pro from USD 144 to USD 180 a year and went back 6 weeks later, while it cut free AI from 200 to 20 uses (PricingSaaS, 2026). In October 2026 it released 2 in-house models, Craft for images and Brush for design editing, both presented as faster and cheaper (TechCrunch, 2026c; Startup Daily, 2026c). In November it cut 22% of its staff to "refound" the company (OfficeChai, 2026).

Canva also combines 5 strategies strongly. Its own agent runs on its own models, built for editing and for cost. External agents are a distribution channel: Canva sees AI assistants as the new search engine, and its editor as the "final mile" where AI drafts get finished (TechCrunch, 2026d). How big this channel really is, I can't say yet, because Canva's numbers on referral traffic don't match third-party traffic data. It serves its own context (Brand Kits, design history, memory) to its agent and to external ones, but keeps brand features off the free plan. Its pricing follows costs: the seat is the anchor, AI becomes a counted allowance, free AI is rationed, and the back-and-forth on prices shows the model is not stable yet. And it expands toward code, data and above all marketing, with Canva Grow and several acquisitions. Acquisitions are frequent but small: AI skills get integrated, while products with their own users stay separate. Hosting other firms' agents is weak, and I found no outcome-based pricing. The freemium core, the seat and the role of the editable design inside Canva did not change. My working reading, still to be tested, is this. Canva defends its assets (users, templates, brand kits, the editor) by opening them to agents. Meanwhile the cost of AI on a huge free base forces it to change its economics.

## Adobe Express

Adobe Express is Adobe's simple, template-based app for making content. It comes from Adobe Spark (2016), was relaunched in December 2021 as Creative Cloud Express, and took the name Adobe Express in 2022 (TechCrunch, 2021; Adobe blog, 2022a). I treat it as a product inside Adobe: I record company moves only when they touch Express. The price is data. Adobe doesn't report Express revenue, and it counts Express users together with Acrobat ones (Adobe earnings call, 2026c).

In 2022 Express was for non-professional creators, from students to small business owners, people Adobe described as "focused on outcome and not process", plus more than 43 million school users of the free education version (TechCrunch, 2021, 2022). It offered quick social posts, flyers, short videos and web pages from templates, with Adobe Stock, Adobe Fonts and simple Photoshop and PDF functions. "AI" meant suggestions of templates and fonts. It reused Adobe's technology and content, and it reached users through Creative Cloud, schools and partners like Wix (Adobe blog, 2022b). The model was freemium, with Premium at USD 9.99 a month and inclusion in Creative Cloud plans, and with no cost per use (TechCrunch, 2021). In this market Express is the challenger and Canva is the leader, even if Adobe never names Canva.

In the generative phase Adobe rebuilt Express as an "AI-first" editor with its Firefly models (generally available in August 2023), and it stressed that Firefly was "designed to be safe for commercial use" (Adobe press release, 2023). In September 2023 it introduced generative credits across Creative Cloud, Firefly and Express, free users included. It raised Creative Cloud prices citing "new costs associated with generative AI", but it left Express prices alone (Adobe blog, 2023). In April 2024 Express was one of the first creation tools inside an AI assistant, as a custom GPT in OpenAI's GPT Store that searched Express templates and sent the user back to the app (Adobe blog, 2024).

In the agentic phase the 2 channels moved at very different speeds. Inside the product, the AI Assistant announced in October 2025 lets users create and edit designs by chatting, using Adobe's models and other firms' ones. It works in several steps, but it asks the user to confirm. Adobe said that once generally available it would be offered to everyone through Firefly credits (Adobe press release, 2025b). But in October 2026 it was still in beta, only on desktop and not for Teams, Enterprise or Education plans (Adobe help center, 2026; Adobe Community, 2026b). Outside the product Express moved fast. It got an agent for Microsoft 365 Copilot (announced in March 2025, live in 2026) and apps in ChatGPT, "free to ChatGPT users globally" (December 2025). Then came Claude (April 2026), one Adobe plugin in ChatGPT (August 2026), and Slack and Gemini (September 2026) (Adobe press release, 2025a, 2025c; Adobe Community, 2026a; Adobe blog, 2026a, 2026b, 2026c, 2026d). The terms are precise. Anyone can start, often as a guest, but signing in with an Adobe account turns on generation, higher limits and saving across sessions. For finer edits, users are sent to Adobe Express.

Adobe runs all this as a freemium funnel. In June 2026 it said it would move visitors from direct-to-paid journeys to easy onboarding "at the cost of short-term ARR". It also said that the way it makes money from its agents "is basically about credit consumption", with upsell to Firefly and Creative Cloud (Adobe earnings call, 2026b). Premium still costs the same as in 2021. The meter is on generation: free users get a daily amount of credits, Premium users a monthly one, and editing in the assistant doesn't use free generations (Adobe Community, 2026b). What changed is the packaging: in 2025 Express Premium left some Acrobat and Photography plans and went into the paid Acrobat Studio bundle (Adobe Community, 2025; Business Wire, 2025).

So the main strategy is being used by external agents, with free entry and paid generation, together with cost-driven pricing. The own agent exists but is still in beta. Hosting third parties exists only in the old form (add-ons, an embed SDK), with no third-party agents inside Express. Context is weak: brand styles are mentioned, but I found no brand kit served to external agents. Scope changes in an odd way. Express is not growing into a bigger product, it is becoming a creation layer that Acrobat, Adobe's own agents and external assistants call (Adobe press release, 2026; Adobe earnings call, 2025). No acquisition was about Express.

Why this profile? I see 3 reasons. Express is the challenger, so it has no big paid seat base to protect, and it loses little by being free inside the assistants, where users start. Express also belongs to a company that makes money elsewhere: Adobe measures it by monthly users and converts use into credits and into Firefly, Creative Cloud or Acrobat Studio plans (Adobe earnings call, 2026a, 2026b). And the free base is so big that inference is a real cost, which explains credits since 2023 and the slow launch of the agent. In Teece's (1986) terms, Adobe takes its assets (templates, Stock, Photoshop-grade tools, a "commercially safe" model) into other companies' assistants. The freemium model, the USD 9.99 price, the inclusion in Creative Cloud, the template-first logic and the target users did not change. Results are hard to measure. Adobe gives only statements and growth rates, for example Express monthly users tripled year on year in Q1 FY2026 (Adobe earnings call, 2026a). And Adobe MAX (10-12 November 2026) may change the picture before my data freeze.

## Grammarly (now part of Superhuman)

Grammarly was founded in 2009 by 3 Ukrainian entrepreneurs, Max Lytvyn, Alex Shevchenko and Dmytro Lider, as a grammar checker for students (Grammarly, 2026). Its key choice was to work on top of other apps and not to build its own editor. By November 2021 it served 30 million people a day in more than 500,000 apps and websites, it was profitable, and it raised more than USD 200 million at a USD 13 billion valuation (Grammarly, 2021; TechCrunch, 2025b). Since 2023 it has changed more than any other case. In December 2024 it agreed to buy the document platform Coda, whose co-founder Shishir Mehrotra became CEO (Grammarly, 2024). In 2025 it raised USD 1 billion of revenue-based financing from General Catalyst and bought the email client Superhuman. On 29 October 2025 it renamed the whole company Superhuman, with Grammarly as 1 of 4 products (Grammarly, 2025a, 2025b, 2025c).

In 2022 Grammarly served people who write in English, from students to professionals and non-native speakers, through a large free tier. Teams came through Grammarly Business, schools through Grammarly for Education and, from 2021, developers through a text editor SDK (Grammarly, 2021, 2022). The offer was real-time feedback on correctness, clarity, tone and consistency, inside the user's own apps, with style controls for teams. It ran on its own language models and on browser extensions, desktop apps, mobile keyboards and integrations. Grammarly changes the text but does not host it: the email stays in Gmail, the document in Word. The model was a freemium subscription, with individual Premium, Business seats and contracts with institutions. In Grammarly's words, "we make money from subscriptions, not from selling data or ads" (Grammarly, 2021). Before large language models a suggestion cost almost nothing to produce. The 2022 prices I still have to check on archived pages.

In the generative phase Grammarly launched GrammarlyGO (March 2023), which writes, rewrites and drafts replies in any app. It rationed it right away with monthly prompt limits: 100 for Free users and 500 for Premium at launch (Grammarly, 2023; 9to5Google, 2023). In July 2023 it announced it would close its developer SDK in January 2024, to focus on the core product, AI and enterprise customers (TechCrunch, 2023). In 2024 it merged Premium and Business into one Pro plan at USD 12 per member per month billed yearly, with 2,000 prompts. It also launched Authorship, which shows which parts of a text a person wrote and which an AI wrote (Grammarly support, 2026).

Then came the agentic phase. In August 2025 Grammarly launched specialized "agents" (for proofreading, citations, AI detection and more) at no extra cost (Grammarly, 2025d). With the October 2025 rebrand it launched Superhuman Go, an assistant inside the Grammarly extension that coordinates its own agents and other firms' agents across apps, plus an Agent Store and an Agents SDK in closed beta (Grammarly, 2025c). In 2026 the company bought Rows, GPTZero and Fathom. It turned Coda into Superhuman Docs, with an MCP server that lets ChatGPT and Claude read and write documents on paid plans. And it released Go 1.0, where users build their own agents that run on schedules or events (Superhuman, 2026a, 2026b, 2026c, 2026d, 2026e). Since May 2026 Grammarly Enterprise is sold only "through Superhuman Go" (Grammarly enterprise page, 2026). One feature, "Expert Review", which attributed AI feedback to real writers without their consent, was withdrawn after a class action (TechCrunch, 2026e).

Grammarly's profile is different from the others. Its strongest strategies are hosting other firms' agents, expanding into a work suite and buying companies, with its own agent growing from one-step generation to custom agents on triggers. There is one logic behind this. What general assistants can't easily copy is not Grammarly's text generation. It is its place at the user's cursor in a million apps. So the company turns that position into a platform where its own agents, partners' agents and acquired products run. In Teece's (1986) terms, it defends what it built (distribution and daily habit) and not the feature that AI made cheap. The financing matters too. Money repaid through a share of revenue, raised explicitly for sales, marketing and acquisitions, pushes toward bundles and upsell.

Being used by external agents is weak for Grammarly itself. I found no official Grammarly connector for ChatGPT or Claude, and the SDK was closed. Only the suite products that hold documents (Docs, Mail) are open, on paid plans. Cost-driven pricing is light: the seat price didn't move, AI use is capped by prompts and soft limits, and usage pricing for agents is announced (Superhuman, 2026d). Context comes from style guides, brand tones and the documents, emails and meetings of the acquired products. There is no outcome-based pricing. Governance looks like a real lever, with Authorship, AI detection and GPTZero, especially in education. And one thing did not change: Grammarly is still sold on its own, with the same free tier and the same USD 144 a year as Premium in 2022.

## Benchmark: Gamma, an AI-native entrant

Gamma shows what a new entrant looks like when barriers fall. It was founded in late 2020 and launched a card-based presentation tool in 2022. The turning point was March 2023, when "Gamma AI" started generating whole decks from a prompt with GPT-4 (TechCrunch, 2025). It uses other firms' models. With about USD 90 million raised and around 50 employees, it reported USD 100 million of ARR, profits and 70 million users at its Series B in November 2025, at a USD 2.1 billion valuation. By October 2026 it claimed "more than 100 million" users. These are founder claims, not audited figures (TechCrunch, 2025, 2026f).

Its model was built around AI from the start. It is freemium with AI credits. It has an API (available to all from November 2025), connectors in Claude, ChatGPT and Slack (2026), and since Gamma 5 (October 2026) a full agent (Gamma developer changelog, 2026). Incumbents charge for generation. Gamma charges more and more for the agent's work, while connectors, MCP and API keys are open on every plan, Free included (Gamma developer documentation, 2026). With Gamma Imagine (March 2026) it moved into marketing graphics "to better compete with the likes of Canva and Adobe" (TechCrunch, 2026f). It is the clearest example of your point in our call. AI makes a creation tool cheap to build, so incumbents have to defend themselves with assets that an entrant can't copy quickly.

# 4. First observations

These are first impressions. I will test them in the full analysis.

- Opening to agents is universal, the terms are not. All 4 incumbents opened to external agents between 2024 and 2026. Adobe Express gives free entry and charges for generation. Canva keeps features for paid plans. Figma ties writing to a paid seat and has announced usage pricing. Grammarly opens only the suite products that hold documents.
- The economics changed most, and cost drives it. Figma's non-GAAP gross margin fell from 92% (2024) to 82% (Q3 2026), mostly for AI infrastructure. Canva cut its 2026 growth target from 30% to 20% "to get the economics right". Prices follow costs: credits cap use and the seat stays the anchor. I found no outcome-based pricing, even if several consultancies recommend it.
- Own agents arrive late. The Figma agent became generally available in October 2026, Canva AI 2.0 is a research preview and the Adobe Express assistant is still in beta. So for now the agentic phase shows up in moves and terms more than in results.
- Complementary assets explain much of the defence: design systems for Figma, templates and brand kits for Canva, stock content and professional tools inside a bigger company for Adobe, the place at the user's cursor for Grammarly.
- The old core is still there. Freemium and seats survive in all 4 cases, and the changes sit on top of them.

# 5. Questions for you

There are 5 points where I would like your opinion.

1) Research question. Is the "how are ... evolving" version, with the 2 channels, ok? I would keep the deposited title, maybe with a subtitle like "Evidence from creation-oriented SaaS incumbents".

2) Cases. Are Figma, Canva, Adobe Express and Grammarly ok, with Adobe Express and Grammarly studied as products inside bigger companies and Gamma as a benchmark?

3) Sources. Is a study based on public documents enough, or would you like 3 to 5 validation interviews?

4) Framework. Can I cite the course framework as Parolini (2021), with its roots in Coda and Normann?

5) Next steps. I would send you Part I, Chapters 3 and 4 and one strategy section by 11 December, and the full draft by 15 January 2027. Does this work for you, and how much time would you need to read the full draft?

# 6. Initial bibliography

A selection. My working registers have about 500 works, each with a note on how it was checked. The sources I cite in Section 3 and don't list here are in the case registers, with links and access dates.

## 6.1 Academic literature

= Annushkina, O. (2011). The Italian "Entrepreneurial Formula": A systemic approach to strategy. *European Journal of International Management, 5*(3), 301. https://doi.org/10.1504/EJIM.2011.039944
= Azoulay, P., Krieger, J., & Nagaraj, A. (2025). Old moats for new models: Openness, control, and competition in generative artificial intelligence. *Entrepreneurship and Innovation Policy and the Economy, 4*, 7-46. https://doi.org/10.1086/732852
= Bowen, G. A. (2009). Document analysis as a qualitative research method. *Qualitative Research Journal, 9*(2), 27-40. https://doi.org/10.3316/QRJ0902027
= Chesbrough, H. (2010). Business model innovation: Opportunities and barriers. *Long Range Planning, 43*(2-3), 354-363. https://doi.org/10.1016/j.lrp.2009.07.010
= Coda, V. (2012). The evaluation of the entrepreneurial formula. *European Management Review, 9*(2), 63-74. https://doi.org/10.1111/j.1740-4762.2012.01030.x (original work published 1984)
= Eisenhardt, K. M. (1989). Building theories from case study research. *Academy of Management Review, 14*(4), 532-550. https://doi.org/10.5465/amr.1989.4308385
= Foss, N. J., & Saebi, T. (2017). Fifteen years of research on business model innovation: How far have we come, and where should we go? *Journal of Management, 43*(1), 200-227. https://doi.org/10.1177/0149206316675927
= Garousi, V., Felderer, M., & Mäntylä, M. V. (2019). Guidelines for including grey literature and conducting multivocal literature reviews in software engineering. *Information and Software Technology, 106*, 101-121. https://doi.org/10.1016/j.infsof.2018.09.006
= Gawer, A., & Cusumano, M. A. (2014). Industry platforms and ecosystem innovation. *Journal of Product Innovation Management, 31*(3), 417-433. https://doi.org/10.1111/jpim.12105
= Gibbert, M., Ruigrok, W., & Wicki, B. (2008). What passes as a rigorous case study? *Strategic Management Journal, 29*(13), 1465-1474. https://doi.org/10.1002/smj.722
= Heimburg, V., Schreieck, M., & Wiesche, M. (2025). Complementor value co-creation in generative AI platform ecosystems. *Journal of Management Information Systems, 42*(2), 491-528. https://doi.org/10.1080/07421222.2025.2487310
= Hydari, M. Z., & Muzaffar, F. (2026). *Going headless? On the boundaries of vertical AI firms* (arXiv:2605.17812) [Preprint]. arXiv. https://arxiv.org/abs/2605.17812
= Jorzik, P., Klein, S. P., Kanbach, D. K., & Kraus, S. (2024). AI-driven business model innovation: A systematic review and research agenda. *Journal of Business Research, 182*, Article 114764. https://doi.org/10.1016/j.jbusres.2024.114764
= Kanbach, D. K., Heiduk, L., Blueher, G., Schreiter, M., & Lahmann, A. (2024). The GenAI is out of the bottle: Generative artificial intelligence from a business model innovation perspective. *Review of Managerial Science, 18*(4), 1189-1220. https://doi.org/10.1007/s11846-023-00696-z
= Kim, H., Kang, H., & Song, J. (2026). *Generative AI fuels solo entrepreneurship, but teams still lead at the top* [Preprint]. arXiv. https://arxiv.org/abs/2605.10291
= Lehmann, S., & Buxmann, P. (2009). Pricing strategies of software vendors. *Business & Information Systems Engineering, 1*(6), 452-462. https://doi.org/10.1007/s12599-009-0075-y
= Mayer, A.-S., Kostis, A., Strich, F., & Holmström, J. (2025). Shifting dynamics: How generative AI as a boundary resource reshapes digital platform governance. *Journal of Management Information Systems, 42*(2), 400-430. https://doi.org/10.1080/07421222.2025.2487312
= Mell, P., & Grance, T. (2011). *The NIST definition of cloud computing* (NIST Special Publication 800-145). National Institute of Standards and Technology. https://doi.org/10.6028/NIST.SP.800-145
= Normann, R. (1977). *Management for growth*. Wiley.
= Osterwalder, A., & Pigneur, Y. (2010). *Business model generation: A handbook for visionaries, game changers, and challengers*. Wiley.
= Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics, Part A: Systems and Humans, 30*(3), 286-297. https://doi.org/10.1109/3468.844354
= Parolini, C. (2020). *Business planning: Dall'idea al progetto imprenditoriale* (3rd ed.). Pearson Italia.
= Parolini, C. (2021). *Business planning: Turning an idea into a reality*. Cinzia Parolini. ISBN 9791220083751
= Pettersson, M. O., Björkdahl, J., & Holgersson, M. (2025). Profiting from AI: Evidence from Ericsson's pursuit to capture value. *California Management Review, 67*(4), 5-20. https://doi.org/10.1177/00081256251349140
= Saebi, T., Lien, L., & Foss, N. J. (2017). What drives business model adaptation? The impact of opportunities, threats and strategic orientation. *Long Range Planning, 50*(5), 567-581. https://doi.org/10.1016/j.lrp.2016.06.006
= Saltan, A., & Smolander, K. (2021). Bridging the state-of-the-art and the state-of-the-practice of SaaS pricing: A multivocal literature review. *Information and Software Technology, 133*, Article 106510. https://doi.org/10.1016/j.infsof.2021.106510
= Sapkota, R., Roumeliotis, K. I., & Karkee, M. (2026). AI agents vs. agentic AI: A conceptual taxonomy, applications and challenges. *Information Fusion, 126*, Article 103599. https://doi.org/10.1016/j.inffus.2025.103599
= Shapiro, C., & Varian, H. R. (1999). *Information rules: A strategic guide to the network economy*. Harvard Business School Press.
= Teece, D. J. (1986). Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy. *Research Policy, 15*(6), 285-305. https://doi.org/10.1016/0048-7333(86)90027-2
= Teece, D. J. (2010). Business models, business strategy and innovation. *Long Range Planning, 43*(2-3), 172-194. https://doi.org/10.1016/j.lrp.2009.07.003
= Teng, D., Ye, C., & Martinez, V. (2025). Gen-AI's effects on new value propositions in business model innovation: Evidence from information technology industry. *Technovation, 143*, Article 103191. https://doi.org/10.1016/j.technovation.2025.103191
= Tripsas, M. (1997). Unraveling the process of creative destruction: Complementary assets and incumbent survival in the typesetter industry. *Strategic Management Journal, 18*(S1), 119-142. https://doi.org/10.1002/(SICI)1097-0266(199707)18:1+<119::AID-SMJ921>3.0.CO;2-0
= Yin, R. K. (2018). *Case study research and applications: Design and methods* (6th ed.). SAGE.

## 6.2 Reports and practitioner sources

= Andreessen Horowitz. (2025, December 10). *Big ideas 2026: Part 1*. a16z. https://a16z.com/newsletter/big-ideas-2026-part-1/
= Anthropic. (2025, September 9). *Claude can now create and edit files*. https://claude.com/resources/articles/create-files
= Anthropic. (2026, April 17). *Introducing Claude Design by Anthropic Labs*. https://www.anthropic.com/news/claude-design-anthropic-labs
= Bek, J. (2026, March 5). *Services: The new software*. Sequoia Capital. https://sequoiacap.com/article/services-the-new-software/
= Crawford, D., McLaughlin, C., Doddapaneni, P., & Fiore, G. (2025, September 23). *Will agentic AI disrupt SaaS?* Technology Report 2025. Bain & Company. https://www.bain.com/insights/will-agentic-ai-disrupt-saas-technology-report-2025/
= Deloitte. (2025, November 18). *SaaS meets AI agents: Transforming budgets, customer experience, and workforce dynamics* (TMT Predictions 2026). Deloitte Insights. https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/saas-ai-agents.html
= Gartner. (2023, March 16). *Gartner says machine customers represent one of the biggest new growth opportunities of the decade* [Press release].
= Gartner. (2025, June 25). *Gartner predicts over 40% of agentic AI projects will be canceled by end of 2027* [Press release]. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
= Google. (2026, September 1). *Try Google Pics: Easy image creation and editing in Google Workspace*. https://blog.google/products-and-platforms/products/workspace/google-pics/
= Li, Y. (2025, March 20). *A deep dive into MCP and the future of AI tooling*. Andreessen Horowitz. https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/
= Microsoft. (2025, September 29). *Vibe working: Introducing Agent Mode and Office Agent in Microsoft 365 Copilot*. https://www.microsoft.com/en-us/copilot/blog/2025/09/29/vibe-working-introducing-agent-mode-and-office-agent-in-microsoft-365-copilot/
= Newmark, E. (2025, April 4). *The agentic evolution of enterprise applications*. IDC. https://www.idc.com/resource-center/blog/the-agentic-evolution-of-enterprise-applications/
= Newmark, E. (2026, September 23). *SaaSpocalypse: Catchy title, flawed premise*. IDC. https://www.idc.com/resource-center/blog/saaspocalypse-catchy-title-flawed-premise/
= TechCrunch. (2025, November 10). *AI PowerPoint-killer Gamma hits $2.1B valuation, $100M ARR, founder says*. https://techcrunch.com/2025/11/10/ai-powerpoint-killer-gamma-hits-2-1b-valuation-100m-arr-founder-says/
= TechCrunch. (2026a, March 11). *Lovable says it added $100M in revenue last month alone, with just 146 employees*. https://techcrunch.com/2026/03/11/lovable-says-it-added-100m-in-revenue-last-month-alone-with-just-146-employees/

## 6.3 Company and primary sources (selection)

= Adobe. (2025, December 10). *Adobe brings Photoshop, Express and Acrobat to ChatGPT* [Press release]. https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt
= Adobe. (2026, June 11). *Q2 FY2026 earnings call transcript*. https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q2fy26-transcript.pdf
= Canva. (2025, June 26). *Canva breaks ground as first design connector for OpenAI's ChatGPT* [Press release]. Business Wire. https://www.businesswire.com/news/home/20250626279168/en/Canva-Breaks-Ground-as-First-Design-Connector-for-OpenAIs-ChatGPT
= Canva. (2026, April 16). *Canva AI 2.0* [Press release]. https://canva.com/newsroom/news/canva-create-2026-ai
= Figma. (2025). *Prospectus (Form 424B4)*. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm
= Figma. (2026a, March). *The Figma canvas is now open to agents*. https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/
= Figma. (2026b, November 4). *Third quarter 2026 financial results* [Press release]. https://www.sec.gov/Archives/edgar/data/1579878/000162828026070133/q326pressrelease.htm
= Fortune. (2026, August 12). *Canva cuts its growth forecast by a third as AI costs bite*. https://fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/
= Grammarly. (2025a, May 29). *Grammarly announces $1 billion growth financing with General Catalyst* [Press release]. Business Wire. https://www.businesswire.com/news/home/20250529436291/en/Grammarly-Announces-%241-Billion-Growth-Financing-With-General-Catalyst
= Grammarly. (2025c, October 29). *Grammarly becomes Superhuman* [Press release]. Business Wire. https://www.businesswire.com/news/home/20251029236844/en
= Superhuman. (2026d, August 12). *Go 1.0*. https://blog.superhuman.com/go-1-0/
= Superhuman. (2026e, September 14). *Superhuman acquires Fathom*. https://blog.superhuman.com/superhuman-acquires-fathom/
