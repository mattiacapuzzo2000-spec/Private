# Grey literature and market context: notes (agent "grey")

Prepared 7 November 2026. Companion file: `grey_register.csv` (IDs G01-G40).

**Conventions**
- Verification labels follow the shared brief: [V-open: URL, accessed 2026-11-07] = page opened and read in this session; [V-snippet: URL] = search snippet only; [M] = memory, unverified.
- Quotations are verbatim. Where the original uses an em dash, it is rendered here as " - " (spaced hyphen) to respect the no-em-dash rule; nothing else is altered. Ellipses "..." mark omissions.
- Bain page references: "p." = printed page number of the *Technology Report 2025* PDF; the PDF file page is given in brackets (printed page + 2).
- Network notes: bcg.com, gartner.com, nasdaq.com, openai.com, aimagazine.com, androidheadlines.com, streetinsider.com returned 403 or bot pages; WebFetch could not resolve external hosts in this session. Gartner was read through verbatim reposts.

---

## Part A. Source notes

### G01. Bain & Company, "Will Agentic AI Disrupt SaaS?" (Technology Report 2025)
Crawford, McLaughlin, Doddapaneni, Fiore. Published 23 September 2025. Subtitle: "Disruption is mandatory. Obsolescence is optional."
[V-open: https://www.bain.com/insights/will-agentic-ai-disrupt-saas-technology-report-2025/, accessed 2026-11-07]; [V-open: https://www.bain.com/globalassets/noindex/2025/bain_report_technology_report_2025.pdf, accessed 2026-11-07] (chapter pp. 22-30 [PDF 24-32]; the PDF file was re-exported on 18 Feb 2026, content unchanged as far as compared with the web page).

**At a Glance (p. 22 [24])**
- "To stay ahead, they must own the data, lead on standards, and price for outcomes, not log-ons, in an AI-first world."
- "With the right playbook that includes deep AI integration, strong data moats, and leadership on standards, incumbents can shape, not just survive, the next wave of SaaS."

**Framing (p. 23 [25])**
- "In three years, any routine, rules-based digital task could move from "human plus app" to "AI agent plus application programming interface (API).""
- "In our work with clients, we see five broad possibilities for any given SaaS workflow: No AI, AI enhances SaaS, spending compresses, AI outshines SaaS, and AI cannibalizes SaaS (see Figure 1)."
- Figure 1 ("Five broad scenarios illustrate how AI will affect software as a service (SaaS)") numbers them differently from the text: Scenario 1 No AI ("Value proposition of AI is significantly limited in this market"; "Unlikely for most software companies"); Scenario 2 AI enhances SaaS ("AI features exist as add-ons to underlying SaaS"); Scenario 3 AI outshines SaaS ("Highly valued AI agents sit on top of SaaS system of record"); Scenario 4 AI cannibalizes SaaS ("Vast majority of value accrues to AI, diluting SaaS value proposition"); Scenario 5 Spending compresses ("AI and platform companies negate the need for SaaS").

**The two axes (p. 24 [26])**
- "executives should evaluate workflows according to two independent characteristics: the potential for AI to automate SaaS user tasks and the potential for AI to penetrate SaaS workflows."
- Six automation indicators: "task structure and repetition, risk of error, contextual knowledge dependency, data availability and structure, process variability and exceptions, and human workflow and user interface dependency."
- Six penetration indicators: "external observability, industry standardization, proprietary data depth, switching and network friction, regulatory/certification barriers, and agent protocol maturity. The higher a workflow's AI penetration potential, the easier it is for a clever AI wrapper to siphon usage and margin."
- Figure 4 (p. 27 [29]): vertical axis "Potential for AI to automate an SaaS user task", from "AI assists human" to "AI replaces human"; horizontal axis "Potential for AI to penetrate the SaaS workflow", from "Low AI penetration" to "High AI penetration". High-automation markers: "High-volume, repetitive tasks; Low contextual knowledge; Low process variability; Multistep human workflow; High data availability; Low risk of error[y]" (typo in original). High-penetration markers: "High external visibility of SaaS; Robust industry standards; Limited proprietary data depth; Low switching/network costs; Fewer regulatory certifications; High agent-protocol maturity".

**The four quadrants, exact wording (pp. 24 and 27 [26, 29])**

| Quadrant label (Figure 4) | Position | Prescription (verbatim) |
|---|---|---|
| AI enhances SaaS: **Core strongholds** | low user automation, low AI penetration | "Incumbents should use AI to boost productivity while protecting the unique data that sets them apart. Price the time savings at a premium." |
| Spending compresses: **Open doors** | low user automation, high AI penetration | "These workflows are like open doors that expose incumbents to new risks. People still play a role, but third-party agents can hook into exposed APIs and siphon value. Examples include HubSpot's list building or the task boards on Monday.com. To defend and salvage value and customer influence, incumbents must launch their own agents fast, deepen partner integrations to raise switching costs, and limit access to critical end points." |
| AI outshines SaaS: **Gold mines** | high user automation, low AI penetration | "Leaders should build solutions with end-to-end agents, shift pricing from seat-based to outcome-based, and train sales teams to sell business results, not just features." |
| AI cannibalizes SaaS: **Battlegrounds** | high user automation, high AI penetration | "Incumbents should have the advantage, but to keep it they will need to proactively replace SaaS activity with AI. ... Winners will be the organizations that scale agent orchestration best. Most companies must pick a lane: Either become the neutral agent platform or supply the unique data that powers it. Only a few giants (Salesforce, for example) can realistically do both." |

**Three-layer stack (pp. 27-28 [29-30])**
- "Agentic AI is now rebundling control on a three-layer stack (bottom to top): systems of record, agent operating systems, and outcome interfaces."
- Outcome interfaces "translate plain language requests ... into agent actions and share updates back through tools such as Teams, Slack, or custom mobile apps."
- MCP and A2A "standardize the way agents package tool calls, security tokens, and results ... But they don't provide a shared vocabulary".

**"Silent back end" (p. 28 [30]), exact wording**
- "SaaS incumbents are well-positioned to lead - if they move fast. This will require high-stakes strategic bets - such as selective open-sourcing or a shift in the monetization model - and will yield a unique, durable industry influence position. Win here, and your platform becomes a marketplace, earning revenue even when someone else's agent takes the action. Miss it, and you risk exposing your IP and becoming a silent back end while the semantic gatekeepers harvest the margin (see Figure 5)."

**Strategic priorities (pp. 29-30 [31-32])**
- "Turn your product into a "do it for me" experience".
- Data: "Your data is your moat. ... And protect it. If you connect with other AI platforms, make sure your terms stop them from learning from your data and cutting you out."
- Semantic gap: "Open source early, selectively ... Doing nothing cedes definition power to others; giving away too much puts competitors on a fast track." "Make it hard to copy ... Any external agent should have to validate through your system of record."
- Pricing: "Seat-based pricing may not fit when AI is doing the work. If an agent replaces a human task, customers will expect to pay based on outcomes, not log-ons. Start experimenting with pricing tied to results: tasks completed, tickets resolved, AI outputs generated. ... The fundamental shift is to stop charging for access and start charging for work done."
- Figure 5 (p. 29 [31]): "AI-native company growth outpaces comparable software-as-a-service (SaaS) providers" (years to USD 100M ARR after launch; companies plotted: Cursor, Wiz, Deel, EliseAI, Twilio, ServiceNow, Shopify, Coupa, with Decagon and Sierra below USD 100M). Read the figure itself before citing any value.

**Implication for the thesis (important).** The advice to "limit access to critical end points" is quadrant-specific (open doors), not general. Elsewhere Bain recommends becoming a marketplace that earns "even when someone else's agent takes the action", choosing between "neutral agent platform" and data supplier (battlegrounds), and contractual protection when connecting to AI platforms. Creation SaaS plausibly sit toward high penetration (high agent-protocol maturity, externally visible and exportable outputs, low switching costs), so Bain gives them *conflicting* prescriptions depending on how automatable their users' tasks are. The opening puzzle should be rewritten as: "Bain prescribes either closing critical endpoints or becoming the platform other agents act through; creation incumbents opened early. What did they open, on which terms, and what did they keep?" See Part D.

### G02. Bain, "From Pilots to Payoff: Generative AI in Software Development" (same report)
Doddapaneni, Radzevych, Breeden, Bansal, Rao. pp. 62-67 [64-69]. [V-open: PDF above, accessed 2026-11-07]
- p. 62: "Software coding was one of the first areas to deploy generative AI, but the savings have been unremarkable." "Teams using AI assistants see 10% to 15% productivity boosts, but often the time saved isn't redirected toward higher-value work."
- p. 63: "writing and testing code only accounts for about 25% to 35% of the time from initial idea to product launch".
- p. 67: "some companies report 25% to 30% productivity boosts by pairing generative AI with end-to-end process transformation - far above the 10% gains from basic code assistants."
- Use: nuance for the entry-barrier argument.

### G03-G04. Bain, "The $100-Billion SaaS Opportunity Hiding in Cross-System Labor" (Technology Report 2026) and press release
Crawford, McLaughlin, Fiore. Brief and press release both dated 7 May 2026. [V-open: https://www.bain.com/insights/100-billion-saas-opportunity-hiding-in-cross-system-labor/, accessed 2026-11-07]; [V-open: https://www.bain.com/about/media-center/press-releases/2026/saas-next-$100-billion-opportunity-could-come-from-agentic-ai--bain--co-research/, accessed 2026-11-07]
- At a Glance: "Agentic AI's big opportunity isn't replacing software as a service (SaaS); it's converting labor costs into software spending by automating coordination work." "Bain estimates the potential market could be $100 billion in the US, and more than 90% remains uncaptured."
- "Vendors are already capturing about $4 billion to $6 billion"; outside the US "the opportunity ... is about the same, doubling the total opportunity to about $200 billion."
- "For two decades, SaaS companies built competitive moats around systems of record. ... Agentic AI reopens this contest. The new competitive advantage is what we call cross-workflow decision context".
- Pricing: "the natural pricing unit shifts from seats and logins to outcomes and usage."
- Two paths: "automating core or adjacent workflows"; on core: "While there's some risk of cannibalizing seat-based revenue by eliminating seats, the overall economics can be better".
- Playbook phase three: "close capability gaps by building, buying, or partnering"; "redesign data and product foundations to be agent ready".
- Press release framing: "The core finding of the report dispels industry fears that agentic AI could cause the demise of SaaS." Automation potential: customer support and R&D 40-60%; finance and HR 35-45%; sales and IT 30-40%; legal 20-30%.
- Crawford: "The strategic imperative for SaaS companies is measured in quarters, not years, as AI-native startups compound their data advantages with every deployment."

### G05. IDC, "SaaSpocalypse: Catchy Title, Flawed Premise"
**Author: Eric Newmark**, Group Vice President and General Manager of IDC's SaaS, Enterprise Software, CX and Workplace Solutions Division (byline box and page metadata). Published 23 September 2026, "9 min". [V-open: https://www.idc.com/resource-center/blog/saaspocalypse-catchy-title-flawed-premise/, accessed 2026-11-07]
- Context data: "The worldwide enterprise application market is approaching $700 billion, and blended growth has held near 13% through the first half of 2026".
- Thesis: "The problem is that it is analytically wrong in almost every important way." "Enterprise SaaS applications are not primarily task executors. They are systems of record, workflow orchestrators, and data governance frameworks." "AI is augmenting the system of record, not circumventing it."
- Survey data (IDC 2026 SaaS & Agent Path and CX Path): "32.8% of companies say they will pay at least 10% more for AI agents embedded directly into their applications, and 18% will pay a premium of 30% or more." AI capability is the top vendor-evaluation attribute "at 34%, ahead of ease of integration at 29% and data security at 28%"; "24.7% of companies say they plan to switch vendors outright if the next release fails to ship adequate agentic features."
- Framework: "The Agentic Evolution of Enterprise Applications Framework - September 2026 Update, details the expected phased progression of apps in 18 individual markets", adding "a new phase called Cross-Application Agents". Table note: "Figures represent the share of each market projected to be Agent-Enhanced, Agent-Led, Agents as Apps, or Cross-Application Agents in the given year." Four bands: Agentic Leaders, Fast Accelerators, Steady Movers, Structural Laggards. Examples: Contact Center 50% (2026), 80% (2030), 97% (2038); Marketing 14%, 53%, 92%; Enterprise Collaboration 8%, 63%, 94%; Advertising Technologies 19%, 76%, 100%; ERP 22%, 39%, 80%; Digital Commerce 4%, 14%, 58%. **No creative or design software market is among the 18.**
- Key sentence for the thesis: "The vendor whose data model, APIs, and integration fabric are ready to be discovered and orchestrated by an agent gains ground, and the vendor who is not becomes invisible. Put simply, if an agent cannot find your capability, your capability does not exist."
- Pricing: "The share of enterprise application pricing tied to consumption or outcomes, just 13% today, is projected to reach 63% over the next ten years".
- Advice is addressed to buyers: use the leverage at renewal so that pricing is "predictable, transparent".

### G06. IDC, "The Agentic Evolution of Enterprise Applications" (Newmark, 4 April 2025)
[V-open: https://www.idc.com/resource-center/blog/the-agentic-evolution-of-enterprise-applications/, accessed 2026-11-07]
- "IDC estimates more than 50% of the enterprise application market is already AI assistant or AI advisor-enhanced ... approximately 20% of the market is also now further supplementing their applications with complete AI agents."
- Phases in prose: agent-enhanced or supplemented, then "agent-led, where agents replace entire functional areas within the application", then agents "replacing entire applications, with this phase likely starting to ramp up more significantly by the early 2030s." (The framework figure is an image: the student should view it.)
- **Entry barriers:** "Traditional barriers to entry into enterprise application markets will be increasingly challenged by a new era of software solutions that are designed as agents and are quicker, easier, more effective, and more intuitive to use than conventional software." "Dozens of agentic startups will aim to compete ... "agents as apps" will open the door for a new generation of enterprise application competition."
- FERS survey (Feb 2025, nearly 900 firms): over 80% agree "AI agents are the new enterprise apps, triggering reconsidering of our investments in packaged apps"; 83% "AI agents create a new intelligence layer over apps, eliminating barriers to switching between suppliers"; 76% "more likely to consolidate our enterprise app suppliers".

### G07. IDC, "The Dawn of Just-in-Time Software" (Newmark, 18 June 2026)
[V-open: https://www.idc.com/resource-center/blog/the-dawn-of-just-in-time-software/, accessed 2026-11-07]
- Phase list: "from AI assistant-enhanced applications, to agent-supplemented, to agent-led, and ultimately to agents-as-apps. Now, the next phase is emerging, which IDC refers to as Cross-Application Agents."
- "Distribution, in the agent era, no longer runs through a UI. It runs through agent marketplaces, connectors, and open protocols. If an agent can't find your capability, your capability doesn't exist."
- "APIs must be clean, connectors must be built, and packaging needs to be redesigned around outcomes and consumption, not seats."
- Note: phase names vary across IDC posts (agent-supplemented vs Agent-Enhanced). Cite the September 2026 naming and flag the variation.

### G08. Deloitte, "SaaS meets AI agents" (TMT Predictions 2026)
Jarvis, Mazumder, Krishnamurthy, Srinivasan, Widener, Crossan (Deloitte Center for Technology, Media & Telecommunications). Dated 18 November 2025. [V-open: https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/saas-ai-agents.html, accessed 2026-11-07]
- Lead: "Subscriptions and seat-based licensing could give way to hybrid approaches that blend usage- and outcome-based pricing."
- Timing: replacement of applications by agents "won't be in 2026. It will likely take at least five years or more".
- Seats: "AI agents could conceivably give one user the power of many users and reduce the need for the number of seats".
- Outcome pricing "can be much harder to measure ... There's likely still a long way to go before there's widespread use of this model".
- Interaction layer: SaaS providers "will increasingly provide access to not only their own suite of agents, but agents from other providers as well"; "agent marketplaces"; "This interaction, or attention, layer has the potential to provide significant value".
- **Entry barriers (section "Considerations for SaaS vendors"):** "Prepare for greater competition: As it becomes easier and easier for anyone to write code through generative AI tools, the cost of producing code approaches zero. This is going to create greater competition with AI-native companies and even customers themselves - requiring greater product differentiation."
- Secondary Gartner citations (Gartner, "AI agents are disrupting SaaS pricing: What must CIOs do?", 16 July 2025, G00834627): "By 2030, 35% of point-product SaaS tools will be replaced by AI agents or absorbed within larger agent ecosystems of major SaaS providers"; "by 2030, at least 40% of enterprise SaaS spend will shift toward usage-, agent-, or outcome-based pricing." Also Maxio: 83% of AI-native SaaS offer usage-based pricing.

### G09-G10. BCG pricing pieces (2025, 2026)
Not opened (403). [V-snippet: https://www.bcg.com/publications/2025/rethinking-b2b-software-pricing-in-the-era-of-ai]; [V-snippet: https://www.bcg.com/publications/2026/saas-pricing-must-change-agentic-ai]
- 2025: snippet gives title "Rethinking B2B Software Pricing in the Agentic AI Era", 13 August 2025, authors Dharani, Pineda, Andeyro, Hamming, Kim, Misra, Bhatia; vendors "must not only determine which types of agentic AI capabilities to offer but also make two critical pricing-related decisions", the first being how to package agents. PDF at web-assets.bcg.com also 403.
- 2026: fragments mention winning customers "all over again" and "pivot-ready" pricing. Do not quote until opened in a browser.

### G11. Gartner press release, 25 June 2025 (agentic projects canceled; agent washing)
Read through verbatim repost: [V-open: https://outsourcing-today.ro/?p=13473, accessed 2026-11-07]. Original: https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 (bot-protected).
- "Over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls".
- Anushree Verma (Senior Director Analyst): "Most agentic AI projects right now are early stage experiments or proof of concepts that are mostly driven by hype and are often misapplied".
- "Many vendors are contributing to the hype by engaging in "agent washing" - the rebranding of existing products, such as AI assistants, robotic process automation (RPA) and chatbots, without substantial agentic capabilities. Gartner estimates only about 130 of the thousands of agentic AI vendors are real."
- "Many use cases positioned as agentic today don't require agentic implementations."
- "at least 15% of day-to-day work decisions will be made autonomously through agentic AI by 2028, up from 0% in 2024. In addition, 33% of enterprise software applications will include agentic AI by 2028, up from less than 1% in 2024."
- Poll: January 2025, 3,412 webinar attendees: 19% significant investment, 42% conservative, 8% none, 31% wait and see or unsure.

### G12. Gartner press release, 16 March 2023 (machine customers)
Read through verbatim repost dated 23 March 2023: [V-open: https://mail.eyeofriyadh.com/news/details/gartner-says-machine-customers-represent-one-of-the-biggest-new-growth-opportunities-of-the-decade, accessed 2026-11-07]. Date from original URL.
- "Machine customers represent one of the biggest new growth opportunities of the decade ... a business megatrend that will eventually be more significant than the arrival of digital commerce".
- Definition: "A machine customer is a non-human economic actor who obtains goods and/or services in exchange for payment."
- Book: *When Machines Become Customers*, Don Scheibenreif and Mark Raskino. Three phases: "bound customers" (people set the rules, e.g. HP Instant Ink), "adaptable customers" (AI "can choose and act on behalf of a human with minimal intervention for select tasks"), "autonomous customers".
- Scheibenreif: "Gartner predicts that by 2027 50% of people in advanced economies will have AI personal assistants working for them every day."

### G13. Sequoia Capital, Julien Bek, "Services: The New Software" (5 March 2026)
[V-open: https://sequoiacap.com/article/services-the-new-software/, accessed 2026-11-07]
- "The next $1T company will be a software company masquerading as a services firm."
- "Every founder building an AI tool is asking the same question: what happens when the next version of Claude makes my product a feature? They're right to worry. If you sell the tool, you're in a race against the model. But if you sell the work, every improvement in the model makes your service faster, cheaper, and harder to compete with."
- "A copilot sells the tool. An autopilot sells the work." "The work budget in any profession dwarfs the tool budget".
- "For every dollar spent on software, six are spent on services."
- "Software engineering accounts for over half of all AI tool usage across professions." (no source given in the essay)
- Earlier notes dated this only via Fortune (21 April 2026); the essay itself is 5 March 2026.

### G14. a16z, Yoko Li, "A Deep Dive Into MCP and the Future of AI Tooling" (20 March 2025)
[V-open: https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/, accessed 2026-11-07]
- "With the right set of MCP servers, users can turn every MCP client into an "everything app.""
- "Soon, we will likely see specialized MCP clients emerge for business-centric tasks such as customer support, marketing copywriting, design, and image editing".
- Blender example: "amateur users who barely know Blender can use natural language to describe the model they want to build."
- "multi-tenant architectures (e.g., SaaS products) need to support many users accessing a shared MCP server at once."
- "A new pricing model may emerge if every app becomes a MCP client and every API becomes a MCP server: Agents may pick the tools more dynamically, based on a combination of speed, cost, and relevance."
- "The competitive advantage of dev-first companies will evolve from shipping the best API design to also shipping the best collection of tools for agents to use."

### G15-G17. a16z, "Big Ideas 2026" (Part 1, 10 Dec 2025; Part 2, 11 Dec 2025) and podcast "The Agentic Interface" (22 Dec 2025)
[V-open: https://a16z.com/newsletter/big-ideas-2026-part-1/, accessed 2026-11-07]; [V-open: https://a16z.com/newsletter/big-ideas-2026-part-2/, accessed 2026-11-07]; [V-open: https://a16z.com/podcast/big-ideas-2026-the-agentic-interface/, accessed 2026-11-07] (podcast page only).
- Stephenie Zhang, "Creating for agents, not humans" (Part 1): "Apps were designed for human eyes and clicks, and optimization meant good UI and intuitive flows. As agents take over retrieval and interpretation, visual design becomes less central to comprehension." "We're no longer designing for humans, but for agents. The new optimization isn't for visual hierarchy, but for machine legibility - and that will change the way we create and the tools we use to do it."
- Sarah Wang, "Systems of record lose ground" (Part 1): "The interface becomes a dynamic agent layer, while the traditional system of record slips into the background as a commodity persistence tier - its strategic leverage ceded to whoever controls the intelligent execution environment employees actually use."
- Justine Moore, "Creative tools go multimodal" (Part 1): "Content creation is one of the killer use cases of AI".
- Marc Andrusko, "Prompt-free and proactive applications arrive" (Part 2): "2026 marks the death of the prompt box for mainstream users. ... Your design tool generates variations as you work. The chat interface was training wheels."
- Podcast page summary: "Marc Andrusko on the move from prompting to execution, Stephanie Zhang on building machine-legible systems, and Sarah Wang on agent layers that turn intent into outcomes." Quote from the written pieces, not from transcripts.

### G18. Satya Nadella on BG2 (episode 12 December 2024)
Episode date [V-snippet: https://podwise.ai/episodes/2502881]. Video: https://www.youtube.com/watch?v=9NtsnzRFJ_o (YouTube refused automated access). Transcript excerpt as published by Windows Central (article dated 9 May 2025): [V-open: https://www.windowscentral.com/microsoft/hey-why-do-i-need-excel-microsoft-ceo-satya-nadella-foresees-a-disruptive-agentic-ai-era-that-could-aggressively-collapse-saas-apps, accessed 2026-11-07]
- "Yeah, I mean, it's a it's a very, very, very important question, the SaaS applications, or biz apps. So let me just speak of our own dynamics. The approach at least we're taking is, I think, the notion that business applications exist, that's probably where they'll all collapse, right in the agent era, because if you think about it, right, they are essentially CRUD databases with a bunch of business logic. The business logic is all going to these agents, and these agents are going to be multi repo CRUD, right? So they're not going to discriminate between what the back end is. They're going to update multiple databases, and all the logic will be in the AI tier, so to speak. And once the AI tier becomes the place where all the logic is, then people will start replacing the back ends, right?"
- Do NOT use the short quote "We are going to go pretty aggressively and try and collapse it all... RIP to all software related jobs": in the same article it is a Reddit post, not Nadella's words.
- Student: confirm wording and timestamp on the video before quoting.

### G19, G39. Anthropic, Cowork (January 2026) and Cowork plugins (30 January 2026)
[V-open: https://claude.com/resources/articles/cowork-plugins, accessed 2026-11-07]; Cowork launch 12 January 2026 [V-snippet: https://ppc.land/anthropic-opens-claude-codes-automation-power-to-everyone-with-cowork/].
- "We built Cowork to bring the power of Claude Code to everyone. Today, we're adding support for plugins, which let you bundle any skills, connectors, slash commands, and sub-agents together to turn Claude into a specialist for your role, team, and company."
- "we're open-sourcing 11 plugins built and used by our own team": Productivity, Enterprise search, Plugin Create/Customize, Sales, Finance, Data, Legal ("Review documents, flag risks, and track compliance"), Marketing, Customer support, Product management, Biology research.
- "Plugin support in Cowork is available today as a research preview for all paid Claude users."

### G20-G25. Market coverage of the sell-off and rebound
See timeline (Part B). Opened: Reuters via Yahoo (G20), Morningstar (G21), ITPro (G22), 24/7 Wall St. (G24). Snippet only: Bloomberg column (G23), Forbes (G25), term origin (G40).

### G26. Anthropic, "Introducing Claude Design by Anthropic Labs" (17 April 2026)
[V-open: https://www.anthropic.com/news/claude-design-anthropic-labs, accessed 2026-11-07]
- "Today, we're launching Claude Design, a new Anthropic Labs product that lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more."
- "powered by our most capable vision model, Claude Opus 4.7, and is available in research preview for Claude Pro, Max, Team, and Enterprise subscribers."
- "Claude Design gives designers room to explore widely and everyone else a way to produce visual work."
- "During onboarding, Claude builds a design system for your team by reading your codebase and design files. Every project after that uses your colors, typography, and components automatically."
- "Export anywhere. Share designs as an internal URL within your organization, save as a folder, or export to Canva, PDF, PPTX, or standalone HTML files." Pitch decks: "export as a PPTX or send to Canva."
- Melanie Perkins (Canva): "We're excited to build on our collaboration with Claude, making it seamless for people to bring ideas and drafts from Claude Design into Canva, where they instantly become fully editable and collaborative designs ready to refine, share, and publish."
- Pricing: "Access is included with your plan and uses your subscription limits, with the option to continue beyond those limits by enabling extra usage."

### G27. Figma's April 2026 drop (The Motley Fool via Yahoo Finance, 3 May 2026)
[V-open: https://finance.yahoo.com/markets/stocks/articles/why-figma-stock-fell-16-210704568.html, accessed 2026-11-07]
- "According to data from S&P Global Market Intelligence, Figma finished the month down 16%."
- "The trouble started on April 8 after Anthropic announced its new Mythos AI model ... The stock fell 14% over a three-day span after the Mythos news came out."
- "Figma fell 7% after Anthropic launched Claude Design".
- "Anthropic's Chief Product Officer, Mike Krieger, stepped down from Figma's board soon before it announced that." (Exit date 14 April 2026 only [V-snippet: https://news.designrush.com/anthropic-claude-design-launch-figma].)
- Caution: the April drop has two Anthropic-related causes (Mythos, Claude Design); attributing all of it to Claude Design is wrong.

### G28-G29. Google Pics (1 September 2026)
[V-open: https://blog.google/products-and-platforms/products/workspace/google-pics/, accessed 2026-11-07]; [V-open: https://www.businesstoday.in/technology/news/story/google-pics-google-launches-ai-design-tool-to-take-on-canva-and-adobe-express-552795-2026-09-02, accessed 2026-11-07]
- "Google Pics - our image creation and editing tool from Google Workspace - is rolling out over the coming weeks to all Google AI Pro and Ultra subscribers and most Workspace business customers."
- "Built on our Nano Banana image generation and editing model, Pics gives you the control you need to create whatever you're imagining, whether you're designing a poster, producing social media posts, or editing digital illustrations."
- "Google Pics will be both a standalone product and integrated into Workspace apps, starting with Slides, Docs, and Drive". "This integration starts today with Docs and Slides, and will roll out to Drive in the coming weeks." Features: object segmentation, in-image text editing and translation, collaboration, multiple generations.
- Google does not name Canva or Adobe; Business Today does: Pics "puts Google in competition with platforms such as Canva and Adobe Express".

### G30-G31. Gamma
[V-open: https://techcrunch.com/2025/11/10/ai-powerpoint-killer-gamma-hits-2-1b-valuation-100m-arr-founder-says/, accessed 2026-11-07] (Julie Bort, 10 Nov 2025)
- "announced on Monday a $68 million Series B round at a $2.1 billion valuation led by Andreessen Horowitz."
- "Co-founder and CEO Grant Lee posted on X that the company has profitably hit $100 million in ARR, with 70 million users. The startup hit $50 million profitably in its first two years".
- "founded in late 2020 ... with its product first launching in 2022"; "total fundraising of about $90 million"; "only about 50 employees"; "$20 million secondary offering".
- 2026 figures (over 100M users; "Gamma 5"; Gamma Imagine in March 2026) only [V-snippet: https://aimagazine.com/news/gamma-ai-presentations-for-100m-users-us-100m-arr-and-prof]. No 2026 ARR above USD 100M found.

### G32-G34. Vibe-coding platforms
- Lovable [V-open: https://techcrunch.com/2026/03/11/lovable-says-it-added-100m-in-revenue-last-month-alone-with-just-146-employees/, accessed 2026-11-07] (Anna Heim, 11 Mar 2026): "Lovable crossed $400 million in annual recurring revenue in February, the Stockholm company confirmed to TechCrunch." "It had previously reported $100 million ARR last July, $200 million last November, and $300 million in January". "some 8 million users"; valuation "$6.6 billion"; "only 146 full-time employees"; "over 500,000 projects were built or updated on Lovable that day (compared to a typical daily average of [approximately] 200,000)". Later 2026 figures only from aggregators (not used).
- Bolt.new: about USD 4M ARR in four weeks [V-snippet: https://www.anthropic.com/customers/stackblitz]; about USD 40M ARR in about five months [V-snippet: https://rosetta.to/u/lennyspodcast/inside-bolt-from-near-death-to-one-of-the-fastest-growing-products-in-history-er]. No 2026 figure.
- Base44 / Wix [V-open: https://www.ynetnews.com/business/article/bkqk6tylzg, accessed 2026-11-07] (4 Aug 2026): "Base44 has emerged as one of Wix's biggest strategic bets"; "Base44's gross margin is expected to improve significantly, reaching around 60% in the second half of 2026, compared with nearly zero at the beginning of the year." "Wix launched Base 1, its own large language model designed specifically for software creation." Non-GAAP gross margin "declined to 67% from 70%". Base44 ARR milestones remain [V-snippet] in earlier notes: cite Wix 6-K filings.

### G35-G36. General assistants producing artifacts
- Anthropic, 9 Sep 2025 [V-open: https://claude.com/resources/articles/create-files, accessed 2026-11-07]: "Claude can now create and edit Excel spreadsheets, documents, PowerPoint slide decks, and PDFs directly in Claude.ai and the desktop app." "Upload a PDF report and get PowerPoint slides." GA for paid plans 21 Oct 2025.
- Microsoft, 29 Sep 2025 [V-open: https://www.microsoft.com/en-us/copilot/blog/2025/09/29/vibe-working-introducing-agent-mode-and-office-agent-in-microsoft-365-copilot/, accessed 2026-11-07]: "In the same way vibe coding has transformed software development, the latest reasoning models in Copilot unlock agentic productivity for Office artifacts." "Office Agent in Copilot, powered by Anthropic models, allows you to create PowerPoint presentations and Word documents in a chat-first experience."
- OpenAI ChatGPT agent (July 2025, slides and spreadsheets): page returned 403; not verified [M].

### G37-G38. Development cost evidence
- METR, 10 July 2025 [V-open: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/, accessed 2026-11-07]: "when developers use AI tools, they take 19% longer than without - AI makes them slower." "developers expected AI to speed them up by 24%, and even after experiencing the slowdown, they still believed AI had sped them up by 20%." 16 developers, 246 issues.
- TechCrunch, 6 Mar 2025 [V-open: https://techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated/, accessed 2026-11-07]: "A quarter of the W25 startup batch have 95% of their codebases generated by AI, YC managing partner Jared Friedman said". "It's not like we funded a bunch of non-technical founders."

---

## Part B. SaaSpocalypse timeline

| Date | Event | Source (label) |
|---|---|---|
| 23 Sep 2025 | Bain, "Will Agentic AI Disrupt SaaS?": four quadrants, "silent back end" warning. | G01 [V-open] |
| 18 Nov 2025 | Deloitte TMT Predictions 2026: gradual restructuring; "cost of producing code approaches zero". | G08 [V-open] |
| 12 Jan 2026 | Anthropic launches Cowork (research preview, Claude Max, macOS). | G39 [V-snippet]; G22 [V-open] confirms "last month" |
| 30 Jan 2026 (Fri) | Anthropic adds plugins to Cowork and open-sources 11, including Legal, Sales, Finance, Marketing, Data. | G19 [V-open] |
| 3 Feb 2026 (Tue) | Sell-off in data, professional services and software: Thomson Reuters nearly -18% intraday (on track for biggest daily loss on record), -16% close; RELX -14% (biggest drop since 1988); Wolters Kluwer about -13%; LegalZoom -19.7%; FactSet -10.5%; Nasdaq -1.43%. Morningstar notes the legal plug-in "has nothing to do with legal research". | G20 [V-open]; G21 [V-open] |
| 3-4 Feb 2026 | "SaaSpocalypse" label attributed to Jefferies trader Jeffrey Favuzza quoted by Bloomberg. | G40 [V-snippet] |
| 4 Feb 2026 | Bloomberg Opinion (Dave Lee): "Wall Street's doom-mongering on software is bizarre". | G23 [V-snippet] |
| week to 5 Feb 2026 | Per Reuters, S&P 500 software and services index down nearly 5% in the week, about USD 830 billion of market value lost, six straight losing days. | G22 [V-open] |
| Feb 2026 | A USD 285 billion figure circulates (legal and data names, five days): a different aggregate; do not combine with the USD 830 billion figure. | [V-snippet: https://www.lawgazette.co.uk/features/saaspocalypse-now/5126044.article] |
| 8 Apr 2026 | Anthropic's Mythos model announcement hits software stocks again (Figma -14% over three days). | G27 [V-open] |
| 13 Apr 2026 | Trough of IGV (software ETF) used as base of the later rally; "In April, the same group traded under the "SaaS apocalypse" label". | G24 [V-open] |
| 17 Apr 2026 | Claude Design launched; Figma about -7%; Figma -16% for April overall. | G26, G27 [V-open] |
| 7 May 2026 | Bain Technology Report 2026 brief: USD 100B cross-system labor opportunity; "dispels industry fears". | G03, G04 [V-open] |
| 18 Jun 2026 | IDC "The Dawn of Just-in-Time Software". | G07 [V-open] |
| 30 Jun 2026 | Forbes: "The SaaSpocalypse maybe ending, but SaaS will never be the same again". | G25 [V-snippet] |
| 1 Sep 2026 | Google Pics rolls out (AI Pro/Ultra, most Workspace business customers). | G28 [V-open] |
| 23 Sep 2026 | IDC (Newmark), "SaaSpocalypse: Catchy Title, Flawed Premise". | G05 [V-open] |
| 12-13 Oct 2026 | IGV +41.46% from 13 April to 12 October (close USD 111.31) vs QQQ +20.84%, SPY +13.41%; IGV -0.68% over one year, +5.34% year to date; author reads it as multiple expansion. | G24 [V-open] |

Reading: the episode was triggered by a general-purpose agent with role plugins (not by a creation tool), hit data and legal providers hardest, and was framed by investors as a threat to per-seat pricing (Schroders analyst in G20; G24). Analysts and consultants then reframed it as reconfiguration (Bain May 2026, IDC September 2026). Creation SaaS entered the story mainly through lab products (Claude Design and Figma, April 2026).

---

## Part C. Context note: falling entry barriers and new entrants

*(About one page; English prose that can be adapted for the introduction. Labels refer to `grey_register.csv`.)*

Between 2023 and 2026 the cost of building a first version of a software product fell sharply. Deloitte's TMT Predictions 2026 advises SaaS vendors to "prepare for greater competition" because, as "it becomes easier and easier for anyone to write code through generative AI tools, the cost of producing code approaches zero", which will bring competition "with AI-native companies and even customers themselves" [G08]. IDC had made the same point a year earlier for enterprise applications: "traditional barriers to entry ... will be increasingly challenged" by software "designed as agents" [G06]. Indicators of this shift are easy to find. A quarter of Y Combinator's Winter 2025 startups had 95% of their code generated by AI [G38]. Vibe-coding platforms that let non-developers build applications in natural language scaled at unprecedented speed: Lovable reported USD 100 million of ARR in July 2025 and USD 400 million in February 2026 with 146 employees [G32]; Bolt.new reportedly reached about USD 40 million in roughly five months [G33]; Wix bought Base44 in 2025 and by mid-2026 described it as one of its "biggest strategic bets" [G34].

The same dynamic reached creation tools, from three directions. First, AI-native entrants: Gamma, a presentation, document and website tool launched in 2022, reported USD 100 million of ARR, 70 million users and about 50 employees in November 2025, profitably, at a USD 2.1 billion valuation [G30]. Second, the model labs and big-tech suites themselves: Anthropic launched Claude Design in April 2026 to create "designs, prototypes, slides, one-pagers, and more", building a team's design system from its code and design files [G26], and Figma's shares fell about 7% that day and 16% over April, partly for other Anthropic-related news [G27]; in September 2026 Google rolled out Pics, a prompt-first image and design tool inside Docs and Slides that the press framed as a rival to Canva and Adobe Express [G28, G29]. Third, general assistants now produce the artifacts directly: Claude creates spreadsheets, documents, slide decks and PDFs [G35], and Microsoft's Office Agent, "powered by Anthropic models", builds PowerPoint decks from a chat [G36].

Two qualifications keep this argument honest. Cheaper code is not the same as a cheaper product: Bain finds that coding assistants yield 10-15% productivity gains and that writing and testing code is only 25-35% of the time from idea to launch [G02], and a randomized trial found experienced developers 19% slower with early-2025 AI tools [G37]. What fell most is the barrier to producing a first artifact or prototype, not the barriers of distribution, installed base, collaboration, file formats, template and asset libraries, brand kits and design systems. These are the complementary assets (Teece, 1986) that incumbents built over a decade. Moreover, new entrants are often complementors as well as substitutes: Claude Design exports to Canva, and Canva's CEO welcomed the handoff in Anthropic's own announcement [G26]. Investors and analysts draw opposite conclusions from this: a16z argues that software must now be built for "machine legibility" rather than "visual hierarchy" [G15], Sequoia warns that "if you sell the tool, you're in a race against the model" [G13], while IDC concludes that "if an agent cannot find your capability, your capability does not exist" [G05]. The strategic question for incumbents is therefore not only how to keep entrants out, but which of their accumulated assets to expose to agents, on what terms, and how to turn them into reasons to stay in the loop.

---

## Part D. Corrections and contradictions with the current synthesis

1. **Bain puzzle wording (critical).** "Limit access to critical end points" is the prescription for the *Spending compresses / Open doors* quadrant only (low user automation, high AI penetration), together with "launch their own agents fast" and "deepen partner integrations" (p. 24). It is not a general recommendation. The "silent back end" sentence concerns failing to lead the semantic-layer standard, and the same passage praises becoming "a marketplace, earning revenue even when someone else's agent takes the action" (p. 28). For high-automation, high-penetration workflows (battlegrounds) Bain says "pick a lane: Either become the neutral agent platform or supply the unique data that powers it" (p. 27). So "creation SaaS did the opposite of Bain" overstates; "Bain's prescriptions conflict for high-penetration workflows, and creation incumbents chose openness with conditions" is defensible.
2. **Scenario count and names.** Five scenarios in Figure 1 (No AI plus four), four strategic quadrants in Figure 4: Core strongholds (AI enhances SaaS), Open doors (Spending compresses), Gold mines (AI outshines SaaS), Battlegrounds (AI cannibalizes SaaS). The mapping in round1_D is confirmed.
3. **IDC author confirmed:** Eric Newmark. IDC also supports opening ("if an agent cannot find your capability..."), so IDC is not only the "data gravity keeps SaaS alive" argument. None of IDC's 18 markets is creative or design software.
4. **IGV figures:** year to date at 12 Oct 2026 is +5.34%, not about -1%; -0.68% is the one-year figure. The trough used is 13 April 2026. The "Q1 2026 -24%" claim was not found in the article opened.
5. **Dates:** Deloitte piece 18 Nov 2025; Sequoia essay 5 Mar 2026 (not April); Cowork plugins 30 Jan 2026 (Friday), sell-off 3 Feb 2026; a16z "machine legibility" is Stephenie Zhang's written Big Idea of 10 Dec 2025.
6. **Figma April drop** had two Anthropic-related causes (Mythos on 8 April, Claude Design on 17 April).
7. **Nadella:** the "collapse it all... RIP to all software related jobs" line is a Reddit post, not a quote.

## Part E. Gaps
- BCG 2025 and 2026 not opened (403); Gartner originals read only through verbatim reposts; Nadella wording from a secondary transcript; Gamma 2026 metrics, Bolt ARR, Base44 ARR, Krieger exit date and the "SaaSpocalypse" coinage are snippet-level.
- No grey-literature source found that analyses creation SaaS specifically: the gap claim holds.
