# ROUND 1 | RUOLO C: ESPLORATORE DEI CASI

*Data di lavoro: 30 ottobre 2026. Obiettivi dello studente coperti: 4 (esempi analizzabili di business model) e 5 (aziende che danno spunti sulle strategie).*

---

## 0. Nota sul metodo e sui livelli di verifica (leggere prima)

**Come è stata fatta la ricerca.** Circa 70 ricerche web mirate (WebSearch), con priorità agli sviluppi luglio-ottobre 2026. **WebFetch non ha funzionato per nessun host** (canva.com, techcrunch.com, sec.gov risultano bloccati dalla rete della sessione): quindi nessuna pagina è stata letta integralmente. Ogni fatto qui sotto proviene dagli estratti dei risultati di ricerca relativi all'URL citato. Prima di usarli in tesi, lo studente deve aprire l'URL.

**Etichette di affidabilità della fonte** (accanto a ogni URL):

- **[P]** fonte primaria: newsroom/blog/help center/changelog aziendale, comunicato su BusinessWire/GlobeNewswire, filing SEC, transcript ufficiale.
- **[S]** stampa o analisti di qualità (TechCrunch, Fortune, Bloomberg, The Next Web, Computerworld, Globes).
- **[T]** tracker o aggregatori (pricingsaas, usagepricing, Sacra, Dealroom, blog di terzi): **solo come pista**, da confermare.
- **[M]** da memoria, da verificare (nessuna fonte trovata in questa sessione).

**Legenda delle mosse:** [G] feature generativa nell'editor; [A-in] agente dentro il prodotto (pianifica ed esegue compiti multi-step); [A-out] prodotto accessibile ad agenti esterni (API, MCP, app in ChatGPT/Claude, connettori); [ACQ] acquisizione; [PRICE] cambio di pricing/packaging; [WHO] nuovi segmenti.

**Strategie dell'handoff usate per la mappatura:** S1 AI-native product transformation; S2 agent-accessible platform; S3 from artifact to end-to-end outcomes; S4 contextual intelligence and proprietary assets; S5 monetization redesign; S6 trusted production and governance; **S7 acquisizione di AI-native** (aggiunta proposta dal brief).

**Baseline pre-AI generativa (WHO/WHAT/HOW/EM al 2022):** è ricostruita per lo più **[M]**. È un punto debole da sanare con fonti d'archivio (Wayback Machine dei listini 2022, S-1 di Figma, comunicati 2021-2022).

---

## 1. Cosa è successo tra luglio e ottobre 2026 (sintesi delle novità trovate)

| Azienda | Novità lug-ott 2026 | Fonte |
|---|---|---|
| Canva | Update agli azionisti Q2: crescita 2026 attesa tagliata da circa 30% a circa 20% per i costi dell'AI, rollout rallentato, costo per task "ridotto di quasi il 90%" da aprile, avvio di Canva AI 2.1 (12/08/2026) | https://fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/ [S] |
| Canva | Pro annuale portato da 144 a 180 USD ad agosto e riportato a 144 USD il 10-11/09/2026; free AI ridotta da "fino a 200 usi Standard" a 20 usi | https://pricingsaas.com/news/article/canva-pro-reverses-course-cuts-annual-price-20-back-to-144-six-weeks-after-raising-it [T] |
| Canva | Craft, primo modello di immagini proprietario, disponibile anche via Connect API (preview); previsto uso via MCP in ChatGPT e Gemini (22/10/2026) | https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model [S]; https://www.canva.com/newsroom/news/canva-craft/ [P] |
| Figma | Q2 2026: ricavi 370,1 M USD (+48%), NDR 136%, costo del venduto +117% per infrastruttura AI, titolo circa -15% il giorno dopo (05-06/08/2026) | https://www.businesswire.com/news/home/20260805158853/en/Figma-Announces-Second-Quarter-2026-Financial-Results [P]; https://thenextweb.com/news/figma-q2-2026-earnings-ai-costs-margin-stock-drop [S] |
| Figma | Acqui-hire del team di Orchids/Bud (vibe coding e agenti), 07/07/2026 | https://dealroom.co/news/137540-figma-acquires-bud-team-to-push-deeper-into-ai-coding [T] |
| Figma | Agente in Figma Design e strumenti Weave escono dalla beta e iniziano a consumare crediti AI (06/10/2026) | https://help.figma.com/hc/en-us/articles/42614902212887 [P]; https://fourweekmba.com/ai-figma-design-agent-leaves-beta-now-draws-ai-credits/ [T] |
| Superhuman (ex Grammarly) | Coda diventa Superhuman Docs con Docs MCP verso ChatGPT e Claude (08/07/2026); acquisizione di Fathom (14/09/2026) | https://blog.superhuman.com/introducing-superhuman-docs [P]; https://blog.superhuman.com/superhuman-acquires-fathom/ [P] |
| Notion | Workers a consumo di crediti dall'11/08/2026; acquisizione ZeroEntropy (fine luglio); chiusura di Notion Mail il 22/09/2026 perché oltre metà degli utenti gestiva la posta tramite agenti; Notion 3.8 "Context for your agents" (13/10/2026) | https://notion.com/releases/2026-05-13 [P]; https://dealroom.co/news/142411-notion-acquires-ai-retrieval-startup-zeroentropy/ [T]; https://www.gigazine.net/gsc_news/en/20260626-notion-mail-is-going-away [S] |
| Wix | Q2 2026: ricavi 563,1 M USD (+15%); Base44 verso circa 60% di margine lordo non-GAAP nel 2H (04/08/2026); Base44 a circa 200 M USD di ARR ad agosto | https://www.ynetnews.com/business/article/bkqk6tylzg [S]; https://sacra.com/c/base44/ [T] |
| Miro | Bending Spoons acquisisce Miro: enterprise value 1,355 mld USD, ARR circa 600 M USD, quasi 90% da clienti business/enterprise (10/09/2026) | https://www.goodwinlaw.com/en/news-and-events/news/2026/09/announcements-technology-goodwin-advises-miro-acquisition-agreement-bending-spoons [P, consulente legale]; https://thenextweb.com/news/bending-spoons-miro-acquisition-1-355bn [S] |
| Adobe | Q3 FY2026: ricavi 6,76 mld USD (+13%), ARR totale 27,5 mld, "AI-first ARR" +150%, 1 mld di MAU; Narayen lascia, Chakravarthy CEO dal 01/12/2026 (10/09/2026). Adobe MAX 2026 è il 10-12/11, dopo il cut-off | https://www.constellationr.com/insights/news/adobe-reports-solid-q3-tops-1-billion-monthly-active-users [S] |
| Gamma | Settembre 2026: crediti numerici sostituiti da "unlimited AI creations" con fair use; Agent e API restano a crediti | https://pricingsaas.com/news/article/gamma-markets-unlimited-ai-creations-while-quietly-cutting-plus-s-slide-cap-back-to-75 [T] |
| Microsoft 365 | Aumento listini commerciali dal 01/07/2026 (E3 da 36 a 39 USD, E5 da 57 a 60 USD) | https://windowslatest.com/2026/07/05/microsoft-365-just-got-a-price-hike-over-continuous-innovation-but-copilot-is-the-ai-tax-on-businesses [S] |

**Eventi imminenti che spostano il bersaglio:** risultati Q3 di Figma (attesi il 04/11/2026, non confermato), risultati Q3 di Wix (novembre), Adobe MAX (10-12/11), closing Miro-Bending Spoons (Q4), possibile IPO Canva (slittata verso il 2027 secondo Fortune). **Serve un cut-off esplicito per le evidenze** (proposta: 30 novembre 2026).

---

## 2. Schede dei casi

### 2.1 Canva

- **Artefatto:** grafiche, presentazioni, documenti visivi, video brevi, siti e mini-app (Canva Code), fogli (Canva Sheets).
- **Azienda:** privata (Sydney). Circa 265 M di MAU, oltre 31 M di utenti paganti, ARR circa 4 mld USD a fine 2025, business B2B raddoppiato a circa 500 M di ARR (https://techcrunch.com/2026/02/18/canva-gets-to-4b-in-revenue-as-llm-referral-traffic-rises/ [S]). Ricavi Q2 2026 921,9 M USD, +25,2% (https://cryptobriefing.com/canva-cuts-revenue-forecast-ai-costs/ [T], da confermare).
- **BM di partenza (2022) [M]:**
  - WHO: non designer, PMI, scuole, team marketing; adozione individuale e poi team.
  - WHAT: design "facile" con template, senza competenze professionali.
  - HOW: editor web drag-and-drop, enorme libreria di template e asset (anche da contributor), crescita product-led.
  - EM: freemium; Pro per utente; Teams a forfait per piccoli team; Enterprise.

**Mosse AI e agentic**

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| mar 2024 | ACQ | Affinity (Serif), circa 380 M USD; reso gratuito il 30/10/2025 | https://businesswire.com/news/home/20251030695119/en/Canva-Launches-Creative-Operating-System [P] |
| 29/07/2024 | ACQ | Leonardo.ai (modelli generativi; resta disponibile come prodotto separato) | https://techcrunch.com/2024/07/29/canva-acquires-leonardo-ai-to-boost-its-generative-ai-efforts [S] |
| set 2024 | PRICE | Teams passa da forfait (5 utenti) a prezzo per seat, aumenti fino a circa 300%, giustificati con le feature AI; poi "Pricing Promise" e grandfathering | https://www.fortune.com/2024/09/03/canva-hiking-teams-subscription-prices-ai-features [S] |
| 10/04/2025 | G, (A-in) | Visual Suite 2.0: Canva AI conversazionale, Canva Code (con Anthropic), Canva Sheets | https://www.businesswire.com/news/home/20250410082173/en [P] |
| 2025 (giugno circa) | ACQ, WHO | MagicBrief (analytics delle inserzioni) | https://www.nbcmiami.com/news/business/money-report/canva-expands-from-design-into-analytics-with-acquisition-of-magicbrief/3639402/ [S] |
| 26/06/2025 | A-out | Connettore deep research in ChatGPT e server MCP di Canva | https://www.businesswire.com/news/home/20250626279168/en/Canva-Breaks-Ground-as-First-Design-Connector-for-OpenAIs-ChatGPT [P] |
| lug 2025 | A-out | Connettore Claude (creare/modificare design dalla chat) | https://engadget.com/ai/claude-ai-now-integrates-with-canva-201808571.html [S] |
| 06/10/2025 | A-out | Partner di lancio delle app in ChatGPT | https://openai.com/blog/introducing-apps-in-chatgpt [P] |
| 30/10/2025 | G, PRICE | "Creative Operating System": Canva Design Model proprietario, Video 2.0, Forms, Affinity gratis | https://businesswire.com/news/home/20251030695119/en/Canva-Launches-Creative-Operating-System [P] |
| 18/02/2026 | (evidenza A-out) | Traffico da LLM pari a percentuali "a doppia cifra" dell'inbound; oltre 26 M di conversazioni con l'app Canva in ChatGPT entro ottobre 2025 | https://techcrunch.com/2026/02/18/canva-gets-to-4b-in-revenue-as-llm-referral-traffic-rises/ [S] |
| inizio apr 2026 | PRICE | AI Pass: add-on da 100 USD/persona/mese, fino a 40x l'allowance di Pro; consumo a tier Standard/Premium/Ultra | https://www.canva.com/help/ai-pass/ [P]; https://pricingsaas.com/companies/canva/diffs/2026W15 [T] |
| 08/04/2026 | ACQ, WHO | Simtheory (gestione agenti, multi-modello) e Ortto (customer data e marketing automation, per Canva Grow) | https://www.businesswire.com/news/home/20260408469702/en [P] |
| 16/04/2026 | A-in | Canva AI 2.0: memoria persistente, connettori (Gmail, Drive, Slack, Calendar), campagne multi-step come un unico workflow, Scheduling di compiti ricorrenti; "research preview" | https://canva.com/newsroom/news/canva-create-2026-ai [P]; https://www.cmswire.com/digital-experience/canva-ai-20-adds-agentic-design-tools/ [S] |
| 12/08/2026 | PRICE/EM | Crescita 2026 attesa tagliata a circa 20%; rollout rallentato "per sistemare l'economia"; AI 2.1 costruita su "un modello economico compatibile con il freemium" | https://fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/ [S] |
| ago-set 2026 | PRICE | Pro annuale 144 -> 180 -> 144 USD in sei settimane; free AI da 200 a 20 usi | https://pricingsaas.com/companies/canva/diffs/2026W38 [T] |
| 22/10/2026 | G, A-out | Craft (modello immagini in-house, con ricercatori ex Leonardo), in Dream Lab e via Connect API; consumo a carico dei crediti AI dell'utente; prezzo API non pubblicato | https://www.canva.com/newsroom/news/canva-craft/ [P]; https://www.creativeainews.com/articles/canva-craft-image-model-cost-limits-2026/ [T] |

- **Dimensioni cambiate con evidenza:**
  - **EM: sì, fortemente.** Da seat/forfait a seat + allowance AI a tier + add-on (AI Pass) + top-up; tagli alla free AI; volatilità di prezzo; ammissione esplicita che il costo dell'AI ha cambiato la traiettoria di crescita.
  - **HOW: sì.** Modelli proprietari (Design Model, Craft), acquisizioni di team AI, routing multi-modello per abbattere i costi.
  - **WHO: parziale ma documentato.** Spinta B2B (500 M di ARR), ingresso in marketing automation (Ortto, Grow, MagicBrief); nuovo canale di acquisizione via chatbot (LLM referral).
  - **WHAT: annunciato più che dimostrato.** Da "editor con template" a "AI platform con design al centro" (citazione COO su Simtheory), ma AI 2.0 era in research preview.
- **Dati pubblici:** nessun filing; metriche dichiarate (ARR, MAU, paganti, B2B) in interviste e conferenze; shareholder update riportati da Fortune/Startup Daily; listini storici ricostruibili (tracker + Wayback).
- **Strategie illuminate:** S1, S2, S3 (campagne e marketing), S4 (memoria, brand kit, connettori), S5 (forte), S7 (Leonardo, Simtheory). S6 debole.
- **Fattibilità: 5/5.** Lacune: assenza di bilanci; shareholder letter non accessibili direttamente; distinguere annuncio (AI 2.0) da disponibilità reale.

---

### 2.2 Figma

- **Artefatto:** interfacce, prototipi, design system; poi prototipi in codice (Make), siti (Sites), asset di marketing (Buzz), media generativi (Weave).
- **Azienda:** pubblica (NYSE: FIG) dal 31/07/2025, IPO a 33 USD; ricavi 2024 749 M USD (https://www.tipranks.com/news/figma-fig-debuts-at-33-per-share-after-30x-oversubscribed-ipo [S]). Guidance 2026: 1,463-1,467 mld USD.
- **BM di partenza (2022) [M]:**
  - WHO: designer di prodotto, poi sviluppatori (Dev Mode) e team cross-funzionali.
  - WHAT: design collaborativo multiplayer nel browser, unica fonte di verità del design.
  - HOW: editor web, design system, plugin/community, FigJam.
  - EM: freemium + seat per editor (Professional, Organization, Enterprise); viewer gratuiti.

**Mosse AI e agentic**

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| 11/03/2025 | PRICE | Nuovi seat Full, Dev, Collab, View; crediti AI inclusi nei seat (quest'ultimo punto solo da tracker) | https://www.figma.com/blog/billing-experience-update-2025/ [P]; https://usagepricing.com/blueprint/figma [T] |
| 07/05/2025 | G, WHO | Config 2025: Figma Make (prompt-to-code), Sites, Buzz, Draw; nuovo "content seat" da 8 USD | https://techcrunch.com/2025/05/07/figma-releases-new-ai-powered-tools-for-creating-site-app-prototypes-and-marketing-assets [S] |
| 04/06/2025 | A-out | Dev Mode MCP server (beta, desktop) per Cursor, VS Code, Claude Code | https://alternativeto.net/news/2025/6/figma-launches-dev-mode-mcp-server-for-direct-ai-access-to-design-data [S]; https://help.figma.com/hc/en-us/articles/32132100833559 [P] |
| set 2025 | A-out | Server MCP remoto (mcp.figma.com) | https://help.figma.com/hc/en-us/articles/35281350665623-Figma-MCP-collection-How-to-set-up-the-Figma-remote-MCP-server [P] |
| 06/10/2025 | A-out | Partner di lancio delle app in ChatGPT | https://openai.com/blog/introducing-apps-in-chatgpt [P] |
| 30/10/2025 | ACQ | Weavy (media generativi node-based, valutazione riportata oltre 200 M USD) -> Figma Weave | https://techcrunch.com/2025/10/30/figma-acquires-ai-powered-media-generation-company-weavy [S]; https://www.figma.com/blog/figma-weave/ [P] |
| feb 2026 | A-out | "Code to Canvas" con Anthropic (UI da codice a Figma via MCP) | https://help.figma.com/hc/en-us/articles/40219873508247-Workflow-lab-Code-to-canvas [P] |
| 11 e 18/03/2026 | PRICE | Add-on di crediti (pool condiviso, pay-as-you-go) e **enforcement** dei limiti per seat (Full: 3.000/3.500/4.250 crediti al mese; altri seat: 500) | https://forum.figma.com/product-updates-3/ai-credits-update-new-purchasing-options-and-enforcement-on-march-18-51782 [P]; https://www.figma.com/blog/updates-to-ai-credits-in-figma/ [P] |
| 23-24/03/2026 | A-out | "Canvas aperto agli agenti": tool `use_figma` in scrittura per Claude Code, Codex, Cursor ecc.; Skills; beta, poi pricing a consumo | https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/ [P] |
| mag-giu 2026 | A-in, G | Config 2026: agente Figma per tutti gli utenti, "sempre più basato su modello first-party", Skills, Code Layers, Motion, strumenti Weave nel canvas | https://www.figma.com/blog/config-2026-recap/ [P] |
| 07/07/2026 | ACQ | Acqui-hire del team Orchids/Bud (vibe coding, agenti) | https://dealroom.co/news/137540-figma-acquires-bud-team-to-push-deeper-into-ai-coding [T] |
| 05/08/2026 | EM (dati) | Q2: +48% ricavi; oltre 80% dei clienti con più di 10k USD di ARR consuma crediti AI ogni settimana; NDR 136%; 1.635 clienti sopra 100k; costo del venduto +117% "per infrastruttura AI"; margine lordo GAAP 84% (da circa 89%) | https://www.businesswire.com/news/home/20260805158853/en/Figma-Announces-Second-Quarter-2026-Financial-Results [P]; https://thenextweb.com/news/figma-q2-2026-earnings-ai-costs-margin-stock-drop [S] |
| 25/08/2026 | PRICE | Più crediti negli add-on a parità di prezzo (circa 2x su Professional) | https://usagepricing.com/blueprint/activity/figma-2026-08-25-packaging [T] |
| 06/10/2026 | A-in, PRICE | Agente in Figma Design e Weave in GA, ora a consumo di crediti; agente in FigJam e Slides ancora in beta chiusa | https://help.figma.com/hc/en-us/articles/42614902212887 [P] |

- **Dimensioni cambiate con evidenza:**
  - **EM: sì,** e misurabile: seat ridisegnati, crediti con enforcement, add-on, metriche di consumo AI nei filing, impatto sul margine lordo.
  - **HOW: sì.** Canvas come superficie scrivibile da agenti esterni, modello first-party, acquisizioni di team AI.
  - **WHO: sì, parziale.** Sviluppatori (Dev seat, MCP), marketer (Buzz, content seat), utenti di coding agent come nuovo canale.
  - **WHAT: in transizione.** Da "dove si disegna" a "dove umani e agenti costruiscono" (prodotti in codice). Molte feature erano beta fino a ottobre 2026.
- **Dati pubblici:** ottimi. S-1, 10-Q/10-K, earnings call, investor presentation, help center con regole dei crediti, forum ufficiale con annunci datati.
- **Strategie illuminate:** S1, S2 (il caso più netto), S4 (design system come contesto per gli agenti), S5 (forte), S7 (Weavy, Bud). S3 parziale (dal design al codice).
- **Fattibilità: 5/5.** Lacune: i ricavi AI non sono separati; la monetizzazione degli agenti parte solo da ottobre 2026 (poca storia osservabile).

---

### 2.3 Grammarly / Superhuman

- **Artefatto:** testo (revisione, riscrittura, generazione), oggi anche documenti (Docs), email, note di riunione.
- **Azienda:** privata; ricavi annui riportati oltre 700 M USD (2025); 1 mld USD di finanziamento non diluitivo da General Catalyst, rendimento legato ai ricavi (https://www.businesswire.com/news/home/20250529436291/en/Grammarly-Announces-%241-Billion-Growth-Financing-With-General-Catalyst [P]). Circa 40 M di utenti attivi riportati al momento dell'acquisizione di Coda.
- **BM di partenza (2022) [M]:**
  - WHO: studenti, professionisti, poi team aziendali.
  - WHAT: correttezza, chiarezza e tono della scrittura ovunque si scriva.
  - HOW: estensione/overlay sopra app altrui; modelli NLP proprietari; SDK per sviluppatori.
  - EM: freemium; Premium individuale; Business per seat.

**Mosse AI e agentic**

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| lug 2023, effettivo 10/01/2024 | A-out (in senso negativo) | Chiusura del Text Editor SDK per concentrarsi sull'enterprise | https://techcrunch.com/2023/07/13/grammarly-to-shut-down-the-text-editor-sdk-in-january/ [S] |
| 17/12/2024 | ACQ | Coda; Shishir Mehrotra diventa CEO | https://techcrunch.com/2024/12/17/grammarly-acquires-productivity-startup-coda-brings-on-new-ceo [S] |
| 01/07/2025 | ACQ, WHO | Superhuman (email) | https://techcrunch.com/2025/07/01/grammarly-acquires-ai-email-client-superhuman [S] |
| 18/08/2025 | A-in (debole), WHO | 8 "agenti" in Grammarly Docs (AI Grader, Reader Reactions, citazioni, ecc.), focus studenti | https://www.businesswire.com/news/home/20250818186419/en/Grammarly-Launches-Specialized-AI-Agents-and-Writing-Surface-for-Students-and-Professionals [P] |
| 29/10/2025 | A-in, PRICE | Rebrand in Superhuman; Superhuman Go (assistente cross-app con Agent Store); Pro a 12 USD/mese include Grammarly, Coda, Go; Business circa 33 USD include Mail | https://techcrunch.com/2025/10/29/grammarly-rebrands-to-superhuman-launches-a-new-ai-assistant [S] |
| 22/02/2026 | ACQ | Rows (fogli di calcolo AI), prodotto chiuso il 31/05/2026 | https://rows.com/blog/post/rows-is-joining-superhuman [P] |
| 23/02/2026 | A-out (host), WHO | Partner agent di Box, Gamma, Wayground dentro Go; Agents SDK in beta privata | https://businesswire.com/news/home/20260223993440/en/Superhuman-Go-Scales-Agent-Ecosystem-With-New-Partner-Agents-From-Box-Gamma-and-Wayground [P] |
| mar 2026 | (S6, negativo) | Ritiro della feature "Expert Review" dopo critiche e class action | https://texxr.com/entity/expert-review [T], da verificare |
| 01/06/2026 | PRICE | Enterprise riconfezionato come accesso via Superhuman Go, senza prezzo pubblico | https://www.usagepricing.com/blueprint/activity/grammarly-2026-06-01-enterprise-superhuman-go-repackage [T] |
| 23/06/2026 | ACQ, (S6) | GPTZero (rilevazione testi AI) come "authenticity layer" | https://dataconomy.com/2026/06/24/superhuman-acquires-gptzero-to-expand-ai-authenticity-tools/ [S] |
| 08/07/2026 | A-out | Coda diventa Superhuman Docs; Docs MCP verso ChatGPT e Claude | https://blog.superhuman.com/introducing-superhuman-docs [P] |
| 14/09/2026 | ACQ | Fathom (note di riunione AI) per dare "memoria delle riunioni" agli agenti | https://blog.superhuman.com/superhuman-acquires-fathom/ [P] |

- **Dimensioni cambiate con evidenza:**
  - **HOW: sì, radicalmente,** via acquisizioni (5 in meno di due anni).
  - **WHAT: sì.** Da "assistente di scrittura" a "suite AI cross-app": è cambiata la proposta e anche il nome dell'azienda.
  - **EM: sì nel packaging** (bundle allo stesso prezzo, enterprise via Go); nessun dato sull'effetto.
  - **WHO:** email e meeting portano utenti diversi. Mancano numeri.
- **Dati pubblici:** deboli. Nessun filing, ricavi solo riportati; prezzi documentati soprattutto da tracker.
- **Strategie illuminate:** S7 (il caso più forte del campione), S3, S4 (contesto cross-app), S6 (GPTZero; Expert Review come controesempio), S2 come "host di agenti", S5 come bundling.
- **Fattibilità: 3/5.** Lacune: dati economici; **deriva fuori dal perimetro** (email, meeting, detection non sono creazione di artefatti); l'overlay su app altrui complica l'unità di analisi. È un ottimo caso sull'**acquisizione come strategia**, meno sull'artefatto.

---

### 2.4 Notion (caso di confine)

- **Artefatto:** pagine, documenti, wiki, database; sempre più "lavoro svolto da agenti" nel workspace.
- **Azienda:** privata. ARR stimato 865 M USD a luglio 2026 (https://sacra.com/research/notion-at-865m-year-growing-82-yoy/ [T]); dichiarazione aziendale (blog finance, gennaio 2026) riportata da terzi: oltre il 50% dell'ARR da clienti "AI-enabled" a fine 2025 [T].
- **BM di partenza (2022) [M]:**
  - WHO: individui e startup, poi team e aziende.
  - WHAT: workspace all-in-one flessibile (documenti + database).
  - HOW: blocchi componibili, template, community, integrazioni.
  - EM: freemium; Plus e Business per seat; add-on Notion AI a 10 USD dal 2023 [M].

**Mosse AI e agentic**

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| feb 2023 | G, PRICE | Notion AI come add-on a pagamento | [M] |
| 13/05/2025 | PRICE | AI completa inclusa solo in Business ed Enterprise; Business da 15 a 20 USD (annuale); add-on chiuso per i nuovi clienti; esistenti aggiornati da agosto 2025 | https://pricingsaas.com/companies/notion/diffs/2025Q2 [T]; pagina ufficiale "2025 pricing changes" vista solo via mirror, da verificare |
| lug 2025 | A-out | Server MCP ospitato (mcp.notion.com); connettore nella directory di Claude | https://developers.notion.com/docs/get-started-with-mcp [P]; https://claude.com/blog/connectors-directory [P] |
| 18/09/2025 | A-in | Notion 3.0: agenti che eseguono lavoro multi-step nel workspace | https://www.notion.com/en-gb/blog/introducing-notion-3-0 [P]; https://techcrunch.com/2025/09/18/notion-launches-agents-for-data-analysis-and-task-automation/ [S] |
| 24/02/2026 | A-in | Custom Agents (Notion 3.3), autonomi, con trigger e pianificazione, beta gratuita | https://alternativeto.net/news/2026/2/notion-3-3-launches-custom-agents-for-autonomous-team-automation [S] |
| 04/05/2026 | PRICE | Custom Agents in GA a consumo: 10 USD per 1.000 crediti, solo Business ed Enterprise | https://www.notion.com/help/custom-agent-pricing [P]; https://www.reworked.co/digital-workplace/notion-custom-agents-reach-general-availability/ [S] |
| 13/05/2026 | A-out (host), WHO | Notion 3.5 Developer Platform: External Agents API (alpha, con Claude, Codex, Decagon), Workers (a crediti dall'11/08/2026), CLI, Agent SDK | https://notion.com/releases/2026-05-13 [P] |
| 25/06/2026, effettivo 22/09/2026 | HOW | Chiusura di Notion Mail: oltre metà degli utenti gestiva la posta tramite agenti senza aprire l'inbox | https://www.gigazine.net/gsc_news/en/20260626-notion-mail-is-going-away [S]; https://alternativeto.net/news/2026/6/just-over-a-year-after-launch-notion-is-killing-notion-mail-as-it-shifts-to-ai-agents/ [S] |
| fine lug 2026 | ACQ | ZeroEntropy (retrieval per RAG e agenti) | https://dealroom.co/news/142411-notion-acquires-ai-retrieval-startup-zeroentropy/ [T] |
| 13/10/2026 | A-out | Notion 3.8 "Context for your agents" (dati, tool e skill per qualsiasi agente o modello) | https://www.notion.com/releases/2026-10-13 [P, non aperto] |

- **Dimensioni cambiate con evidenza:**
  - **EM: sì.** AI dentro il seat più caro (bundling forzato) e agenti a consumo: è l'esempio più pulito di **pricing ibrido seat + crediti per agente**.
  - **HOW: sì.** Piattaforma per agenti esterni, runtime ospitato (Workers), chiusura di un'interfaccia (Mail) perché sostituita da agenti.
  - **WHO: sì, in parte.** Sviluppatori e "agent builder" come nuovo segmento (Developer Platform).
  - **WHAT:** da "workspace in cui scrivi" a "workspace in cui agenti lavorano per te": dichiarato, con indizi d'uso (oltre 1 M di custom agent creati, dato riportato da terzi).
- **Dati pubblici:** medi. Release note datate e help center eccellenti; nessun dato finanziario ufficiale.
- **Strategie illuminate:** S1, S2 (anche come **host** di agenti esterni), S4 (contesto del workspace, retrieval), S5 (forte), S3 (agenti che chiudono task). S6 poco visibile.
- **Fattibilità: 4/5.** Lacune: finanza solo stimata; **appartenenza al perimetro discutibile** (documenti sì, database e task no). Proprio per questo è utile come caso di confine.

---

### 2.5 Adobe Express

- **Artefatto:** grafiche social, flyer, video brevi, documenti (concorrente diretto di Canva).
- **Azienda:** prodotto dentro Adobe (pubblica, NASDAQ: ADBE). Ricavi FY2026 attesi circa 26,6 mld USD. Express **non è rendicontato separatamente**.
- **BM di partenza (2022) [M]:**
  - WHO: non designer, PMI, studenti; porta d'ingresso verso Creative Cloud.
  - WHAT: contenuti rapidi con asset Adobe (Stock, Fonts).
  - HOW: app web/mobile (ex Spark), integrazione con l'ecosistema Creative Cloud.
  - EM: freemium + Premium; incluso in alcuni piani Creative Cloud.

**Mosse AI e agentic**

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| 13/09/2023 | G, PRICE | Firefly nei piani; nascita dei "generative credits" (anche per Express free e Premium) con aumento prezzi CC | https://blog.adobe.com/en/publish/2023/09/13/ai-creative-cloud-release-pricing-update [P] |
| 28/10/2025 | A-in | AI Assistant (beta) in Express: creazione ed editing conversazionali, per Premium su desktop | https://news.adobe.com/news/2025/10/adobe-max-2025-express-ai-assistant [P] |
| 19/11/2025 | ACQ (livello Adobe) | Annuncio acquisizione Semrush, 1,9 mld USD (closing non verificato) | https://www.bloomberg.com/news/articles/2025-11-19/adobe-nearing-1-9-billion-deal-to-buy-semrush-wsj-reports [S] |
| 10/12/2025 | A-out | Photoshop, Express e Acrobat dentro ChatGPT, **gratis** | https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt [P] |
| 12/03/2026 | WHO (dati) | Q1 FY26: MAU di Express triplicati anno su anno; il freemium "frena l'ARR nel breve" | https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-q1fy26-transcript.pdf [P] |
| mar 2026 | A-out (dev) | Express Developer MCP server | https://blog.developer.adobe.com/en/publish/2026/03/build-faster-with-the-adobe-express-developer-mcp-server [P] |
| 28/04/2026 | A-out | Connettore "Adobe for Creativity" in Claude (più di 50 tool, Express aggiunto in seguito) | https://helpx.adobe.com/firefly/web/app-integrations/adobe-connectors/adobe-connector-overview.html [P] |

- **Dimensioni cambiate con evidenza:** **WHO** (freemium e canali chatbot: MAU triplicati) ed **EM** a livello Adobe (crediti generativi; il freemium riduce l'ARR nel breve). WHAT e HOW non isolabili per Express.
- **Dati pubblici:** abbondanti ma **aggregati** (10-Q, transcript); dati Express solo qualitativi.
- **Strategie illuminate:** S2 (distribuzione gratuita dentro i chatbot come funnel), S5 (crediti dal 2023, il pioniere), S6 [M: posizionamento di Firefly come "commercially safe", da verificare], S1 (beta).
- **Fattibilità: 2-3/5.** Lacune: unità di analisi (prodotto dentro un conglomerato); Adobe MAX cade dopo il cut-off. Utile come **contrasto "incumbent di portafoglio"**, non come caso principale.

---

### 2.6 Gamma (AI-native di contrasto)

- **Artefatto:** presentazioni, documenti, pagine web; da marzo 2026 anche grafiche e loghi (Gamma Imagine).
- **Azienda:** privata. 100 M USD di ARR, profittevole, circa 70 M di utenti, circa 52 dipendenti; Series B da 68 M USD a 2,1 mld di valutazione, guidata da a16z (10/11/2025) (https://siliconangle.com/2025/11/10/ai-powered-visual-presentation-platform-gamma-raises-68m-2-1b-valuation/ [S]).
- **BM di partenza:** fondata nel 2020, rilancio "AI-first" nel 2023 [M]. **Non ha un vero BM pre-AI generativa:** è il punto del caso (cosa fa chi nasce senza legacy).
  - WHO: professionisti, educatori, PMI; poi team ed enterprise.
  - WHAT: "una presentazione da un prompt", formato più fluido delle slide.
  - HOW: modelli di terzi orchestrati, editor a card, crescita virale.
  - EM: freemium a crediti, piani Plus/Pro, poi Business/Ultra.

**Mosse AI e agentic**

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| 28/07/2025 | A-out | API Generate in beta | https://developers.gamma.app/reference/changelog [P] |
| 15/09/2025 | PRICE | Modello "seat + crediti", piano Ultra, acquisto di crediti | https://gamma.app/insights/why-were-evolving-our-pricing-model-at-gamma [P] |
| set 2025 | A-in | Gamma 3.0 con Gamma Agent | fonte debole, da verificare [M] |
| ott 2025 | WHO | SOC 2 Type II (spinta enterprise) | https://www.implicator.ai/gammas-2-1-billion-bet-52-people-real-profit-and-the-fight-for-your-minutes/ [T] |
| gen 2026 | A-out | API Generate in GA | https://developers.gamma.app/reference/changelog [P] |
| 23/02/2026 | A-out | Agente partner dentro Superhuman Go | https://businesswire.com/news/home/20260223993440/en/Superhuman-Go-Scales-Agent-Ecosystem-With-New-Partner-Agents-From-Box-Gamma-and-Wayground [P] |
| 06/03/2026 | A-out | App in ChatGPT e connettore Claude, su tutti i piani | https://developers.gamma.app/reference/changelog [P] |
| mar 2026 | G, WHO | Gamma Imagine (loghi, infografiche, post social): sconfinamento verso Canva | https://aimagazine.com/news/gamma-ai-presentations-for-100m-users-us-100m-arr-and-prof [S] |
| ago 2026 | ACQ | Acquisizione di Lica (laboratorio di design research) | fonte singola, da verificare |
| set 2026 | PRICE | Da crediti numerici a "unlimited AI creations" con fair use; Agent, modelli avanzati e API restano a crediti | https://pricingsaas.com/news/article/gamma-markets-unlimited-ai-creations-while-quietly-cutting-plus-s-slide-cap-back-to-75 [T] |

- **Dimensioni cambiate con evidenza:** **EM** (crediti, poi "unlimited" per la generazione di base e crediti per le funzioni agentiche: l'agente diventa la cosa che si paga); **WHO** (enterprise); **HOW** (API e app nei chatbot come canale).
- **Dati pubblici:** medi. Changelog sviluppatori ottimo, ARR dichiarato, prezzi tracciati da terzi.
- **Strategie illuminate:** S2, S5, WHO; S3 debole. Funziona come **benchmark di cosa significa "AI-native"** per giudicare quanto gli incumbent si sono trasformati (S1).
- **Fattibilità: 3-4/5.** Lacune: baseline pre-GenAI assente; alcune date (3.0, Lica) poco solide.

---

### 2.7 Descript

- **Artefatto:** video e podcast editati "come un documento" (trascrizione).
- **Azienda:** privata; nessun dato finanziario affidabile trovato (solo stime di siti commerciali, da scartare).
- **BM di partenza (2022) [M]:** WHO creator, podcaster, team marketing; WHAT editing audio/video via testo; HOW trascrizione e modelli vocali (Overdub); EM freemium + seat con ore di trascrizione.

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| 2024-2025 | A-in | Underlord, poi "nuovo Underlord" come co-editor agentico che agisce per conto dell'utente | https://help.descript.com/hc/en-us/articles/36803785502221 [P] |
| set 2025 | PRICE | Ore di trascrizione sostituite da "media minutes" + contatore separato di crediti AI (consumati da Underlord) | https://shade.inc/blog/descript-pricing [T] |
| 2026 | A-out | API pubblica e MCP (directory di Claude e di ChatGPT); API e MCP consumano media minutes e crediti | https://help.descript.com/hc/en-us/articles/46215649218445 [P]; https://www.descript.com/blog/article/mcp-connectors [P] |
| n.d. | (evidenza A-in) | "Oltre il 30% dei progetti Descript coinvolge editing agentico" (case study di un fornitore di modelli, quindi di parte) | https://claude.com/es/customers/descript [P, di parte] |

- **Dimensioni cambiate con evidenza:** EM (doppio contatore), HOW (agente come modalità d'uso). WHO e WHAT non documentati.
- **Strategie:** S1, S2, S5.
- **Fattibilità: 2/5.** Bel caso "puro" di agente in un editor, ma senza dati economici. Va bene come **vignetta illustrativa**, non come caso completo.

---

### 2.8 Wix (con Base44)

- **Artefatto:** siti web; con Base44, app e software creati via prompt.
- **Azienda:** pubblica (NASDAQ: WIX). Q2 2026: ricavi 563,1 M USD (+15%), ARR totale 1,963 mld USD (https://www.sec.gov/Archives/edgar/data/0001576789/000162828026052108/secondquarter2026results.htm [P]).
- **BM di partenza (2022) [M]:**
  - WHO: PMI, self-creator, poi agenzie e partner (Wix Studio).
  - WHAT: sito professionale senza codice, con app di business (e-commerce, prenotazioni).
  - HOW: editor drag-and-drop, hosting, app market. Nota: AI già dal 2016 con Wix ADI [M].
  - EM: freemium + piani premium per sito, più ricavi da transazioni e business app.

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| 07/05/2025 | A-out | Wix MCP server per assistenti di coding e LLM | https://www.wix.com/press-room/home/post/introducing-the-wix-model-context-protocol-mcp-server-for-seamless-ai-driven-web-app-development [P] |
| 18/06/2025 | ACQ, WHO | Base44 (vibe coding), circa 80 M USD + earn-out fino al 2029; brand e operatività separati | https://en.globes.co.il/en/article-wix-acquires-israeli-vibe-coding-co-base44-1001513267 [S] |
| 21/01/2026 | A-in | Wix Harmony con l'agente Aria (vibe coding + editing visuale), incluso nei piani anche free | https://www.globenewswire.com/news-release/2026/01/21/3222826/0/en/Wix-Launches-Wix-Harmony [P] |
| 02/03/2026 | A-out | App Wix in ChatGPT (Apps SDK + MCP) per creare siti Harmony | https://www.localogy.com/2026/03/wix-expands-vibe-coding-surface-area-to-chatgpt/ [S] |
| mar-ago 2026 | WHO (dati) | Base44: 100 M di ARR (inizio marzo), 150 M (metà maggio), circa 200 M (agosto) | https://sacra.com/c/base44/ [T]; https://www.shopifreaks.com/wix-stock-plunges-27-on-q1-return-to-losses-despite-base44-ai-platform-hitting-150m-arr-ahead-of-internal-targets/ [S] |
| 13/05/2026 | EM (dati) | Q1: margine operativo dal 21% al 5% (calcolo e marketing per Base44), titolo -27,1% | https://seekingalpha.com/news/4591871-wix-falls-after-q1-results-miss-estimates [S] |
| 04/08/2026 | EM (dati) | Q2: Base44 atteso a circa 60% di margine lordo non-GAAP nel 2H "da quasi zero a inizio anno"; ulteriore earn-out (41 M USD riportati) | https://www.ynetnews.com/business/article/bkqk6tylzg [S] |
| 2026 | PRICE | Crediti AI a livello di account (chat con Aria gratuita); Wix si riserva di cambiare i costi in crediti | https://dev.wix.com/docs/api-reference/account-level/ai-credits/introduction [P] |

- **Dimensioni cambiate con evidenza:**
  - **WHO: sì,** chi costruisce app senza essere sviluppatore, via Base44.
  - **EM: sì,** con un nuovo motore di ricavi (Base44) e margini compressi poi in recupero, tutto documentato nei 6-K.
  - **HOW: sì,** con agente Aria e MCP.
  - **WHAT del core: meno chiaro.** Harmony è incluso nei piani, non cambia il modo di catturare valore.
- **Dati pubblici:** ottimi (6-K trimestrali, call, KPI su Base44).
- **Strategie illuminate:** **S7** (il caso più quantificabile), S1, S2, S5; WHO.
- **Fattibilità: 4-5/5.** Lacune: Base44 produce **software**, non siti: l'artefatto cambia natura (va discusso nel perimetro). Il cambiamento è concentrato nel prodotto acquisito, non nel core.

---

### 2.9 Miro (confine)

- **Artefatto:** lavagne, diagrammi, mappe, prototipi; l'output è spesso "coordinamento visivo" più che artefatto da consegnare.
- **Azienda:** privata; accordo di acquisizione da parte di Bending Spoons del 10/09/2026, EV 1,355 mld USD contro una valutazione di 17,5 mld nel 2022; circa 600 M USD di ARR, quasi 90% da business/enterprise, quasi 4 M di utenti paganti, oltre 750 clienti sopra 100k USD (https://thenextweb.com/news/bending-spoons-miro-acquisition-1-355bn [S]).
- **BM di partenza (2022) [M]:** WHO team distribuiti, product/UX, facilitatori; WHAT lavagna infinita collaborativa; HOW canvas web, template, integrazioni; EM freemium + seat, forte enterprise.

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| 14/10/2025 | A-in | Canvas 25: AI Innovation Workspace, Sidekicks (agenti conversazionali), Flows (workflow AI multi-step), beta su waitlist | https://www.businesswire.com/news/home/20251014500530/en [P] |
| 12/01/2026 | A-in, WHO | AI Workflows per l'enterprise | https://www.businesswire.com/news/home/20260112644679/en [P] |
| feb 2026 | A-out | Server MCP; oltre 16-19 M di chiamate, 15 client AI (Copilot, Gemini Enterprise, ecc.) | https://miro.com/blog/miro-mcp-server/ [P] |
| 2026 | PRICE | Crediti AI e limiti di chiamate MCP per piano | https://pricingsaas.com/news/article/miro-boosts-free-integrations-to-250-adds-mcp-limits-ai-credit-floors [T] |
| 10/09/2026 | (ACQ subita) | Acquisizione da Bending Spoons (che poche settimane prima aveva comprato Airtable) | https://www.goodwinlaw.com/en/news-and-events/news/2026/09/announcements-technology-goodwin-advises-miro-acquisition-agreement-bending-spoons [P, consulente legale] |

- **Dimensioni cambiate:** HOW (agenti, MCP), EM (crediti, limiti MCP: anche l'accesso degli agenti esterni viene misurato). Esito societario rilevante, ma **senza causalità attribuibile all'AI**.
- **Strategie:** S1, S2, S5.
- **Fattibilità: 3/5.** Lacune: perimetro (più coordinamento che artefatto); storico prezzi da ricostruire. Utile come **controesempio** o vignetta: workspace collaborativo con agenti e MCP, ma con un esito di valore negativo.

---

### 2.10 Framer (con nota su Webflow)

- **Artefatto:** siti web di produzione (design + pubblicazione).
- **Azienda:** privata (Amsterdam). Series D da 100 M USD a 2 mld di valutazione (agosto 2025); ARR circa 50 M nel 2025, riportato (https://www.techcrunch.com/2025/08/28/no-code-website-builder-framer-reaches-2b-valuation/ [S]).
- **BM di partenza (2022) [M]:** WHO designer e startup; WHAT siti di qualità design senza sviluppatore; HOW canvas design-to-publish, hosting, CMS; EM piani per sito + seat editor.

| Data | Tipo | Mossa | Fonte |
|---|---|---|---|
| 2023 | G | "Start with AI" (generazione di siti) | [M] |
| 16/06/2026 | A-in, A-out (host), PRICE | Framer 3.0: Agents che modificano pagine, CMS, SEO e pubblicazione; External Agents (Claude Code, Codex, Cursor, Gemini CLI); Branching per rivedere le modifiche degli agenti prima di pubblicare; crediti AI | https://www.framer.com/blog/framer-3/ [P]; https://www.01net.it/framer-launches-ai-agents/ [P, BusinessWire] |

- **Nota:** il **Branching** è una delle poche evidenze concrete di **S6** (controllo e approvazione dell'output degli agenti).
- **Fattibilità: 2-3/5** (pochi dati economici).

**Webflow (alternativa):** MCP server l'08/04/2025, esteso al Designer il 04/09/2025 (https://developers.webflow.com/changelog/04082025-mcp-server [P]); acquisizione di Vidoso.ai a marzo 2026 [T]; ristrutturazione dei piani dal 13/05/2026 con crediti AI su tutti i piani Workspace, enforcement dal 29/06/2026, nuovo piano Team (https://webflow.com/blog/simplified-plans-and-updated-pricing-2026 [P]; https://help.webflow.com/hc/en-us/articles/51059955082387 [P]). Fattibilità 2-3/5. **Tra i due preferisco Framer** per la chiarezza della mossa agentica (Agents + External Agents + Branching in un solo lancio datato).

---

### 2.11 Microsoft 365 (solo contesto e confronto)

- **Mosse chiave:** Agent Mode in Word ed Excel e "Office Agent" (modelli Anthropic) per generare documenti e presentazioni dalla chat, 29/09/2025 (https://www.computerworld.com/article/4064781/microsoft-upgrades-m365-copilot-with-agent-mode.html [S]); suite E7 "Frontier Suite" a 99 USD per utente, con Copilot e **Agent 365** (15 USD), annunciata il 09/03/2026 e in GA dal 01/05/2026 (https://redresscompliance.com/m365-e7-landing-page.html [T]); aumento dei listini commerciali dal 01/07/2026 [S, vedi sopra]. Copilot a 30 USD per utente dal 2023 [M].
- **Perché conta:** è il riferimento di come un incumbent di suite **monetizza gli agenti come entità con licenza** (Agent 365) e alza i prezzi del core. Per Canva, Figma e Gamma è anche il concorrente "di default" su documenti e presentazioni.
- **Perché non come caso:** l'unità di analisi (suite, conglomerato) non è confrontabile.

### 2.12 Google Workspace (solo contesto e confronto)

- **Mosse chiave:** Gemini incluso nei piani con aumento di prezzo (es. Business Plus da 18 a 22 USD), 15/01/2025 (https://9to5google.com/2025/01/15/google-workspace-gemini-price/ [S]); Workspace Studio (agenti no-code su Gmail, Docs, Sheets, Drive) in GA il 03/12/2025 (https://siliconangle.com/2025/12/03/google-launches-workspace-studio-let-users-build-ai-agents-everyday-work [S]); skill riutilizzabili il 26/08/2026 e creazione cross-app a settembre 2026 (https://workspaceupdates.googleblog.com/2026/09/create-content-schedule-events-and-coordinate-tasks-across-Workspace-regardless-of-what-app-you-are-in.html [P]).
- **Perché conta:** è il caso opposto a Notion e Figma sul pricing. **AI inclusa nel seat con aumento generalizzato**, senza crediti visibili per l'utente base.

---

## 3. Tabella riassuntiva: caso x tipo di mossa

Legenda: **XX** mossa forte, datata e con fonte primaria; **X** presente; **(x)** solo annunciata, in beta o con fonte debole; **-** non trovata.

| Caso | G | A-in | A-out | ACQ | PRICE | WHO | Dati finanziari | Fattibilità |
|---|---|---|---|---|---|---|---|---|
| Canva | XX | X (AI 2.0 in preview) | XX (MCP, ChatGPT, Claude, Craft API) | XX (Leonardo, Affinity, MagicBrief, Simtheory, Ortto) | XX | X (B2B, marketing) | Medi (ARR, MAU dichiarati) | 5 |
| Figma | XX | XX (agente GA 06/10/2026) | XX (MCP in scrittura, ChatGPT) | X (Weavy, Bud) | XX (seat, crediti, enforcement) | X (dev, marketer) | Ottimi (SEC) | 5 |
| Superhuman / Grammarly | X | X (Go) | X (host: Agent Store; Docs MCP) | XX (5 acquisizioni) | X (bundle) | X (email, meeting) | Deboli | 3 |
| Notion | X | XX (Custom Agents) | XX (MCP, External Agents API) | X (ZeroEntropy) | XX (bundling + crediti agenti) | X (dev, agent builder) | Deboli (stime) | 4 |
| Adobe Express | XX | (x) (assistant in beta) | XX (ChatGPT gratis, Claude) | X (Semrush, livello Adobe) | X (crediti dal 2023) | X (freemium) | Aggregati | 2-3 |
| Gamma | XX (nativo) | (x) | XX (API, ChatGPT, Claude, Go) | (x) (Lica) | XX (seat+crediti, poi "unlimited") | X (enterprise) | Medi (ARR dichiarato) | 3-4 |
| Descript | X | XX (Underlord) | X (API, MCP) | - | X (media minutes + crediti) | - | Assenti | 2 |
| Wix (+Base44) | X | X (Aria) | X (MCP, ChatGPT) | XX (Base44) | X (crediti) | XX (non-dev app builder) | Ottimi (6-K) | 4-5 |
| Miro | X | X (Sidekicks, Flows) | X (MCP) | (acquisita) | X (crediti, limiti MCP) | X (enterprise) | Medi (ARR nel deal) | 3 |
| Framer | X | X | X (External Agents) | - | X (crediti) | - | Deboli | 2-3 |
| MS 365 (contesto) | XX | XX | X | - | XX (E7, Agent 365, rincari) | - | Aggregati | contesto |
| Google Workspace (contesto) | XX | X (Studio) | (x) | - | XX (AI nel seat + rincaro) | - | Aggregati | contesto |

**Lettura rapida:** A-out e PRICE sono presenti quasi ovunque, quindi **da soli non discriminano tra i casi**. Discriminano invece: (a) presenza e peso delle ACQ; (b) se l'agente interno è davvero in GA e monetizzato; (c) la forma del pricing (AI nel seat vs crediti vs add-on); (d) la direzione dell'apertura agli agenti (vedi pattern P1).

---

## 4. Due set alternativi di 5 casi (campionamento teorico)

### Set A, "varietà controllata" (RACCOMANDATO)

| Caso | Artefatto | Tipo | Ruolo teorico nel campione | Dati |
|---|---|---|---|---|
| Canva | Visual/grafica | Incumbent privato | Trasformazione AI-native + espansione verso outcome (marketing) + modelli in-house + crisi da costo AI | Medi-alti |
| Figma | UI/prodotto | Incumbent pubblico | Piattaforma accessibile agli agenti (canvas scrivibile) + seat/crediti misurabili nei filing | Alti |
| Wix (+Base44) | Siti/app | Incumbent pubblico | Acquisire un AI-native e gestirlo in parallelo (S7), con KPI separati | Alti |
| Notion | Documenti/workspace | Incumbent privato, **confine** | Host di agenti esterni + agenti a consumo + chiusura di un'interfaccia sostituita da agenti | Medi |
| Gamma | Presentazioni | **AI-native** | Benchmark di contrasto: cosa fa chi nasce senza legacy (API, chatbot, crediti) | Medi |

- **Logica:** 4 artefatti diversi più 1 di confine; 2 aziende pubbliche e 3 private con metriche dichiarate; 4 incumbent e 1 AI-native; ogni caso "porta" almeno una strategia in modo netto (polar types: Figma su S2, Wix su S7, Notion su S5 agentico, Canva su S1/S3, Gamma come riferimento AI-native).
- **Rischi:** Notion contestabile nel perimetro (è voluto: test di confine); Gamma senza baseline pre-GenAI (è voluto: contrasto); Wix con artefatto che cambia natura (siti -> software).
- **Riserve:** Superhuman (se il prof vuole il testo e un caso di acquisizioni seriali), Adobe Express (se vuole un incumbent di portafoglio).

### Set B, "creazione pura, replica letterale"

| Caso | Artefatto | Ruolo |
|---|---|---|
| Canva | Visual | come sopra |
| Figma | UI | come sopra |
| Adobe Express | Visual (incumbent di portafoglio) | Replica letterale di Canva in un conglomerato: AI distribuita gratis nei chatbot come funnel |
| Superhuman / Grammarly | Testo | Crescita per acquisizioni, da assistente a suite; SDK chiuso e poi "host" di agenti |
| Descript | Video/audio | Agente dentro un editor professionale + MCP + doppio contatore di pricing |

- **Logica:** copre testo, video, grafica, UI e resta strettamente dentro la definizione B (o quasi C). Confronto più "pulito" tra creatori puri.
- **Contro:** 3 casi su 5 hanno dati economici deboli o non isolabili (Express aggregato, Descript nulla, Superhuman stime); nessun AI-native di contrasto; Superhuman esce dal perimetro (email, meeting).

### Raccomandazione

**Set A.** Regge meglio i vincoli dello studente: fonti pubbliche sufficienti (due filing SEC più metriche dichiarate), strategie diverse e ben visibili, finestra temporale densa di eventi datati. Il Set B è teoricamente più omogeneo ma rischia di produrre casi "descrittivi" senza evidenza sull'ECONOMIC MODEL. **Alternativa a 4 casi più 1 vignetta:** Canva, Figma, Wix, Notion come casi completi; Gamma come vignetta di contrasto di 4-5 pagine. Riduce il carico di lavoro di circa il 15-20%.

---

## 5. Pattern che emergono già dai dati

**P1. L'apertura agli agenti esterni (A-out) è universale: conta la direzione.** Tutti i casi hanno MCP, app in ChatGPT o connettori Claude tra giugno 2025 e marzo 2026. Ciò che distingue i casi è il **ruolo** che l'azienda si dà rispetto all'agente:
- **(a) strumento usato dall'agente altrui:** Canva in ChatGPT, Adobe gratis in ChatGPT, Figma scrivibile da Claude Code;
- **(b) host che porta agenti altrui dentro il proprio prodotto:** Notion External Agents API, Superhuman Agent Store, Framer External Agents;
- **(c) agente proprietario dentro l'editor:** Canva AI 2.0, Figma agent, Aria, Underlord.

Molti fanno tutte e tre le cose, con enfasi diverse. **Questa tipologia (tool / host / own agent) non è nell'handoff e potrebbe strutturare S2 e il HOW.**

**P2. L'ECONOMIC MODEL è la dimensione che cambia di più, ma la spinta viene dal costo dell'inferenza, non (ancora) dalla cattura di nuovo valore.** Le evidenze:
- Canva taglia la crescita attesa da circa 30% a circa 20% e rallenta il rollout (Fortune, 12/08/2026);
- Figma: costo del venduto +117%, margine lordo giù di circa 5 punti, enforcement dei crediti dal 18/03/2026;
- Wix: margine operativo dal 21% al 5% nel Q1 2026 per Base44.

I crediti nascono soprattutto come **tetto ai costi** (Figma, Canva free AI da 200 a 20 usi, Webflow, Framer, Descript). **Contrario all'ipotesi S5 dell'handoff:** nessuna evidenza di pricing output-based o outcome-based nel campione. Il modello dominante è **ibrido seat + crediti**, e instabile (Canva alza e ritira il prezzo di Pro in sei settimane; Gamma passa dai crediti numerici a "unlimited" per la generazione base). Un dettaglio interessante: dove resta un costo esplicito, **si paga l'agente** (Notion Custom Agents a crediti, Gamma Agent e API a crediti, agente Figma a crediti dal 06/10/2026), mentre la generazione semplice tende a essere inclusa.

**P3. Acquisire un AI-native è una strategia ricorrente, spesso gestita in parallelo invece che integrata.** Base44 (brand separato), Leonardo (resta disponibile), Weavy (inizialmente standalone), GPTZero (standalone), più Simtheory, Ortto, Rows, Fathom, Bud, ZeroEntropy. Nel caso Wix **la crescita AI misurabile sta nel prodotto acquisito, non nel core**. Questo suggerisce di formulare S7 come "**ambidestrismo via portafoglio**" (acquisire e far convivere due business model), non solo come "comprare capacità".

**P4. L'artefatto si sposta verso il software.** Canva Code, Figma Make e Code Layers più l'acqui-hire di Bud, Base44, Framer Agents che pubblicano siti, Gamma che genera siti. Più che "da artefatto a outcome" (S3), molti incumbent **allargano il tipo di artefatto** verso app e codice, dove gli agenti sono più forti. È un pattern da nominare: incide su WHO (sviluppatori e non-sviluppatori che costruiscono app) e sul perimetro della tesi.

**P5. C'è una deriva del perimetro.** Canva va verso il marketing automation (Ortto, Grow, MagicBrief); Superhuman verso email, meeting e detection; Notion chiude Mail ma diventa piattaforma per agenti. **S3 trova evidenza, ma spesso significa uscire dalla categoria "creation".** Implicazione metodologica: definire l'unità di analisi come "prodotto principale + mosse dell'azienda attorno ad esso".

**P6. I modelli proprietari diventano parte del HOW.** Canva Design Model (ottobre 2025) e Craft (ottobre 2026); Figma agent "sempre più basato su modello first-party". Motivazioni dichiarate: differenziazione **e costo** (Canva instrada i compiti tra modelli propri e di frontiera). Nessuna delle sei strategie lo copre bene (S4 è la più vicina). Potrebbe essere un meccanismo di S1.

**P7. Controintuitivi da usare come evidenza contraria:**
- Grammarly **chiude** il suo SDK nel 2024 (meno accessibile, non più) e riapre solo nel 2026 come host di agenti e con Docs MCP.
- Notion **chiude un proprio prodotto** perché gli agenti hanno reso inutile l'interfaccia: disintermediazione interna, non da parte di terzi.
- Canva dichiara che i chatbot portano traffico ("double-digit" dell'inbound), ma Similarweb misura numeri molto più bassi. **L'agente esterno come canale va trattato con cautela.**
- Miro, con agenti, MCP e 600 M di ARR, viene venduta a circa il 90% sotto la valutazione 2022: l'adozione delle mosse agentiche non si traduce in valore. **Causalità non attribuibile.**

**P8. Le mosse agentiche diventano GA tardi.** Agente Figma in GA il 06/10/2026, Notion Custom Agents il 04/05/2026, Canva AI 2.0 in research preview da aprile, Express AI Assistant in beta, Notion External Agents API in alpha. **La finestra osservabile per l'effetto sul business model è di pochi mesi.** La tesi deve parlare di "strategie in formazione" e misurare le **mosse** (codificate per data e tipo) più che i risultati.

### Dove l'evidenza è debole

- **S6 (governance e produzione affidabile):** solo indizi (GPTZero, Branching di Framer, brand kit, controlli enterprise); nessuna strategia esplicita documentata.
- **Pricing outcome-based:** assente.
- **WHO "agent builders" come clienti paganti:** dichiarato (Notion Developer Platform, Superhuman SDK in beta privata), non misurato.
- **Casi con dati economici scarsi:** Descript, Framer, Webflow, Superhuman; Adobe Express non isolabile.
- **Date fragili:** Gamma 3.0 (settembre 2025), Lica, "Gamma 5"; prezzo Business di Superhuman; ARR di Notion (solo stime); Q2 di Canva (fonte secondaria).
- **Baseline 2022:** quasi tutta [M], da ricostruire con Wayback Machine e S-1.

---

## 6. Raccomandazione in 5 righe

1. **RQ (affinata, non stravolta):** *"How are creation-oriented SaaS companies reconfiguring their business models (who, what, how, economic model) as AI agents move from features inside the editor to actors that perform and access artifact production?"*. Sotto-domande: quali mosse (agente interno, apertura agli agenti, acquisizioni, pricing); quali dimensioni cambiano con evidenza; come catturano valore quando il lavoro lo fa un agente.
2. **Perimetro:** definizione B; incumbent nati prima del 2022 più 1 AI-native di contrasto; finestra gennaio 2023 - 30 novembre 2026 (cut-off dichiarato); unità di analisi = prodotto principale più mosse dell'azienda attorno a esso; codifica per "mossa datata" (G, A-in, A-out, ACQ, PRICE, WHO).
3. **Casi:** Canva, Figma, Wix (+Base44), Notion (confine), Gamma (contrasto AI-native). Riserve: Superhuman, Adobe Express. Microsoft 365 e Google Workspace solo come contesto nel capitolo 3.
4. **Strategie attese:** agente proprietario e modelli in-house (S1); "tool / host / own agent" come forme di S2; seat + crediti guidati dal costo di inferenza, con l'agente come cosa che si paga (S5); acquisire AI-native e gestirli in parallelo (S7); espansione verso codice e marketing (S3/P4). Evidenza debole per pricing outcome-based e governance (S6).
5. **Da chiedere al prof:** (a) accetta Notion come caso di confine e Gamma come contrasto? (b) va bene un cut-off fisso (30/11/2026) e solo fonti pubbliche, senza interviste? (c) il framework WHO/WHAT/HOW/EM si applica al prodotto o all'azienda (decisivo per Wix/Base44 e Superhuman)? (d) è accettabile codificare "mosse" e cambiamenti di BM osservabili, dichiarando che gli effetti economici sono troppo recenti per essere misurati?
