# Round 1, Agente B: sfidante dell'originalità

**Data:** 30 ottobre 2026
**Ruolo:** assicurare che la tesi non arrivi a conclusioni scontate (obiettivo 2), senza sacrificare la fattibilità con sole fonti pubbliche in circa 3 mesi (obiettivi 3, 4, 5).

## 0. Premessa sul metodo e sui livelli di verifica

- In questa sessione **WebFetch non raggiunge gli host esterni** (bain.com, idc.com, cnbc.com falliscono per DNS). Tutta la verifica è stata fatta con **WebSearch**, cioè su estratti delle pagine restituiti dal motore di ricerca. Nessun PDF o articolo è stato letto per intero. Prima di citare, lo studente deve aprire la fonte originale.
- Legenda usata in tutto il file:
  - **[V1]** = esistenza e contenuto chiave confermati da estratti della **fonte primaria** (sito dell'azienda, comunicato, filing SEC, pagina dell'editore scientifico). Da leggere per intero prima di citare.
  - **[V2]** = confermato da **stampa o fonte secondaria affidabile** (Fortune, TechCrunch, ITPro, CNN, Nasdaq/Motley Fool). Va risalito alla primaria.
  - **[V3]** = solo blog, aggregatori, newsletter o fonti in conflitto tra loro. **Da verificare**, non citare così com'è.
  - **[M]** = da memoria, non verificato in questa sessione.

---

## 1. Mappa di cosa è GIÀ stato detto su "SaaS e (agentic) AI"

### 1.1 Consulenza, analisti, VC, dichiarazioni note

| Fonte (data) | Tesi principale in una riga | URL | Verifica |
|---|---|---|---|
| **Bain & Company, Technology Report 2025, "Will Agentic AI Disrupt SaaS?"** (23 set 2025; Crawford, McLaughlin, Doddapaneni, Fiore) | L'AI disturberà il SaaS in modo diverso per ogni workflow, secondo due assi (quanto l'AI può automatizzare i task dell'utente; quanto può penetrare il workflow): quattro scenari "AI enhances SaaS", "AI outshines SaaS", "Spending compresses", "AI cannibalizes SaaS" (più un caso "No AI" in alcune versioni). Stack a tre livelli: systems of record, agent operating systems, outcome interfaces. Raccomanda agli incumbent di lanciare agenti propri, approfondire le integrazioni con partner e **limitare l'accesso agli endpoint critici**; avverte del rischio di diventare un **"silent back end"** mentre i gatekeeper semantici raccolgono il margine; pricing "for outcomes, not log-ons". | https://www.bain.com/insights/will-agentic-ai-disrupt-saas-technology-report-2025/ | [V1] su estratti di più versioni linguistiche della pagina Bain. Il conteggio 4 o 5 scenari e la formulazione esatta vanno controllati nel PDF. |
| **Bain, Technology Report 2026, "$100 billion SaaS opportunity hiding in cross-system labor"** (comunicato 7 mag 2026) | La maggiore opportunità agentic per il SaaS è automatizzare il lavoro umano di coordinamento **tra** sistemi (non sostituirli); stima circa 100 mld USD nel mercato USA; potenziale di automazione più alto in customer support e R&D, più basso in legal e sales. | https://www.bain.com/about/media-center/press-releases/2026/saas-next-$100-billion-opportunity-could-come-from-agentic-ai--bain--co-research/ | [V1] sul comunicato. È l'"analisi Bain di maggio 2026" citata nell'handoff. |
| **IDC, "SaaSpocalypse: Catchy Title, Flawed Premise"** (blog, 23 set 2026) | Il SaaS enterprise non è un esecutore di task ma un insieme di systems of record, orchestratori di workflow e framework di governance dei dati: gli agenti ne estendono i modelli dati invece di sostituirli. Si appoggia all'"Agentic Evolution of Enterprise Applications Framework" (aggiornamento settembre 2026, 18 mercati, fasi Agent-Enhanced, Agent-Led, Agents as Apps, Cross-Application Agents). | https://idc.com/resource-center/blog/saaspocalypse-catchy-title-flawed-premise | [V1] esistenza, data e tesi. **L'attribuzione a Eric Newmark non compare negli estratti del blog**; Newmark è citato (come group VP e GM) in una copertura giapponese di @IT del 28 set 2026 (https://atmarkit.itmedia.co.jp/ait/articles/2609/28/news036.html), con dati su pricing a uso/outcome dal 13% al 63% in dieci anni. Confermare autore sul testo che lo studente possiede. |
| **Satya Nadella, podcast BG2** (dicembre 2024) | Le business application sono essenzialmente "CRUD databases" con logica di business; la logica migrerà in un "AI tier" di agenti che orchestrano più back end. Nadella **non** ha detto "SaaS is dead": è una lettura giornalistica. | https://www.cxtoday.com/data-analytics/microsoft-ceo-ai-agents-will-transform-saas-as-we-know-it/ | [V2] coperture concordi; per citare usare la trascrizione del podcast. |
| **Gartner, press release** (25 giu 2025) | Oltre il 40% dei progetti di agentic AI sarà cancellato entro fine 2027 (costi, valore incerto, controlli inadeguati); "agent washing": solo circa 130 vendor su migliaia offrono capacità agentic genuine; entro il 2028 un terzo del software enterprise includerà agentic AI. | https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 | [V1]. Utilissimo come argomento per distinguere generative da agentic e feature da business model. |
| **Gartner, Scheibenreif e Raskino, "When Machines Become Customers"** (2023) | Le macchine diventeranno clienti (bound, adaptable, autonomous customers). | https://www.gartner.com/en/newsroom/press-releases/03-16-2023-gartner-says-machine-customers-represent-one-of-the-biggest-new-growth-opportunities-of-the-decade | [V1] esistenza e tesi. Ancoraggio per il WHO quando "l'utente" è un agente. |
| **Deloitte, TMT Predictions 2026, "SaaS meets AI agents"** | Gli agenti renderanno le app SaaS più autonome e spingeranno dal pricing per seat a modelli ibridi a uso e a outcome; il pricing a outcome è più difficile da misurare. | https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/saas-ai-agents.html | [V1] su estratti. Le percentuali circolanti (es. seat dal 21% al 15%) sono [V3]. |
| **BCG, "Rethinking B2B Software Pricing in the Era of AI"** (2025) e **"How SaaS Pricing Must Change for Agentic AI in 2026"** (2026) | Passare da prezzi per utente a prezzi allineati al valore, gestendo il rischio di perdita di ricavi e la variabilità dei costi di inferenza. | https://www.bcg.com/publications/2025/rethinking-b2b-software-pricing-in-the-era-of-ai ; https://www.bcg.com/publications/2026/saas-pricing-must-change-agentic-ai | 2025: [V1]. 2026: URL trovato, contenuto solo da riassunti [V3]. |
| **Sequoia Capital, Julien Bek, "Services: The New Software"** (2026) | Per ogni dollaro speso in software se ne spendono circa sei in servizi: le prossime grandi aziende venderanno il lavoro (servizi) eseguito da software. | https://fortune.com/2026/04/21/services-are-the-new-software-sequoia-venture-capital-julien-bek-ai-native-eye-on-ai/ | [V2] via Fortune; l'essay originale non è stato trovato dal motore di ricerca. |
| **Foundation Capital, "service-as-software"** (2024) | L'AI apre un'opportunità di "service-as-software" stimata in trilioni (cifre diverse tra fonti). | https://foundationcapital.com/?p=9718 | [V3] cifre incoerenti tra fonti; leggere l'originale. |
| **a16z, Yoko Li, "A Deep Dive Into MCP and the Future of AI Tooling"** (2025) | Con i giusti server MCP ogni client agentico diventa una "everything app"; i SaaS multi-tenant devono servire molti utenti tramite server MCP condivisi. | https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling | [V1] esistenza e passaggi chiave. |
| **a16z, "Big Ideas 2026: The Agentic Interface"** (podcast, 22 dic 2025) | Il software deve diventare "machine-legible": se sono gli agenti a navigarlo, va progettato per loro; il design visivo conta meno. | https://a16z.com/podcast/big-ideas-2026-the-agentic-interface/ | [V1] pagina; formulazioni da trascrizioni secondarie. |
| **McKinsey** | Non ho trovato un report McKinsey specifico su SaaS e agentic AI nel 2025-2026; solo dati di survey (State of AI) citati di seconda mano. | n.d. | Da cercare; non citare McKinsey sul tema senza fonte. |

### 1.2 Il dibattito di mercato 2026 sulla "SaaSpocalypse": cronologia datata

| Data | Evento | Fonte | Verifica |
|---|---|---|---|
| 26 giu 2025 | Canva annuncia di essere il primo "design connector" per ChatGPT. | https://www.businesswire.com/news/home/20250626279168/en/Canva-Breaks-Ground-as-First-Design-Connector-for-OpenAIs-ChatGPT | [V1] |
| ott 2025 | OpenAI lancia le app in ChatGPT (Apps SDK, basato su MCP) al DevDay. | https://latent.space/reading/devday-apps-agents-mcp/ | [V2]; data esatta [M] 6 ottobre 2025 |
| 29 ott 2025 | Grammarly si rinomina Superhuman e lancia Superhuman Go. | https://www.businesswire.com/news/home/20251029236844/en | [V1] |
| 10 dic 2025 | Adobe porta Photoshop, Express e Acrobat dentro ChatGPT, **gratis** per gli utenti ChatGPT, basati su MCP. Una fonte riporta che il lavoro fatto in ChatGPT non si sincronizza con Creative Cloud. | https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt | [V1]; nota sulla sincronizzazione [V3] |
| 30 gen 2026 | Anthropic rilascia 11 plugin open source per Claude Cowork (tra cui legal). | https://www.itpro.com/technology/artificial-intelligence/why-anthropic-sent-software-stocks-into-freefall | [V2] |
| 3 feb 2026 | Vendita massiccia di titoli software e data provider: Thomson Reuters circa -16% (record negativo giornaliero), RELX e Wolters Kluwer in forte calo; Bloomberg parla di "rout" da circa 285 mld USD. Il nome "SaaSpocalypse" è attribuito a trader di Jefferies. | https://www.cnn.com/2026/02/24/tech/anthropic-claude-plugins-office-jobs ; https://fortune.com/2026/02/13/scary-saas-selloff-changes-calculus-startups-private-markets-code-alone-was-never-a-real-moat/ | [V2]; cifre aggregate (285 mld, 1 trilione, 2 trilioni) in conflitto tra fonti |
| 5 feb 2026 | Canva porta i Brand Kit nell'app ChatGPT (dopo il debutto in Claude). Canva dichiara oltre 3,7 milioni di utenti del suo server MCP e oltre 12 milioni di design creati o aperti da assistenti AI. | https://www.businesswire.com/news/home/20260205384226/en | [V1]; numeri auto-dichiarati |
| 24 feb 2026 | Notion lancia i Custom Agents (Notion 3.3), gratuiti in beta fino al 3 maggio. | https://www.notion.com/help/custom-agent-pricing | [V1] |
| feb 2026 | Ivan Zhao (Notion), podcast Access: "If your product cannot be used by agents, I don't think the future is very promising for you." | https://sources.news/p/notions-next-act | [V2]; verificare sulla registrazione |
| mar 2026 | Figma inizia a far rispettare i limiti di AI credits per seat (data indicata nel 10-Q secondo fonti secondarie). | https://wiki.licenseware.io/wiki/figma-ai-credits/ | [V3]; verificare nel 10-Q |
| Q1 2026 | L'ETF IGV perde circa il 24% nel trimestre, peggior risultato dal 2008. | https://247wallst.com/investing/2026/10/13/everyone-declared-software-dead-in-april-this-etf-is-up-41-since-then/ | [V2] |
| 16 apr 2026 | Canva lancia Canva AI 2.0 (research preview): agenti conversazionali che costruiscono e iterano design, con memoria e connettori. | https://techcrunch.com/2026/04/16/canvas-ai-assistant-can-now-call-various-tools-to-make-designs-for-you/ | [V2] |
| 17 apr 2026 | Anthropic lancia Claude Design (Anthropic Labs); Figma perde circa il 7% in giornata e circa il 16% nel mese (anche per altri fattori). Mike Krieger aveva lasciato il board di Figma tre giorni prima. | https://www.nasdaq.com/articles/why-figma-stock-fell-16-april | [V2] |
| 4 mag 2026 | Notion: i Custom Agents passano a crediti a pagamento (10 USD per 1.000 crediti, solo piani Business ed Enterprise). | https://www.notion.com/help/custom-agent-pricing | [V1] |
| 13 mag 2026 | Notion Developer Platform 3.5 con External Agents API (alpha): Claude Code, Cursor, Codex, Decagon lavorano **dentro** Notion come collaboratori. | https://letsdatascience.com/news/notion-integrates-claude-and-cursor-as-external-agents-7f0782c7 | [V3]; cercare annuncio primario Notion |
| 30 giu 2026 | Forbes: "The SaaSpocalypse maybe ending, but SaaS will never be the same again". | https://www.forbes.com/sites/timkeary/2026/06/30/the-saaspocalypse-maybe-ending-but-saas-will-never-be-the-same-again/ | [V2] |
| 5 ago 2026 | Figma Q2 2026: ricavi 370,1 mln USD (+48% a/a), NDR 136%; lancio del "Figma agent" nel canvas; oltre il 50% dei clienti paganti con più di 10.000 USD di ARR lo usa ogni settimana; oltre l'80% consuma AI credits settimanalmente. In call: uso delle capacità MCP "write-to-Figma" +75% sul trimestre precedente. Margine lordo variabile perché Figma finanzia l'inferenza dei prodotti in beta. | https://www.sec.gov/Archives/edgar/data/0001579878/000162828026053331/q226pressrelease.htm ; https://www.nasdaq.com/articles/figma-q2-earnings-call-highlights | [V1] comunicato su SEC; dato MCP [V2] |
| ago 2026 | Canva taglia la previsione di crescita 2026 dal 30% al 20% per "get the economics right" sul costo di servire i task AI (lettera Q2 CY26 agli azionisti, secondo la stampa). | https://fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/ | [V2] |
| 2 set 2026 | Google Pics (editor e design AI, rivale dichiarato di Canva e Adobe Express) in disponibilità generale su Workspace e Google AI Pro/Ultra. | https://www.androidheadlines.com/2026/09/google-pics-launch-broadly-challenge-canva.html | [V2] |
| 10 set 2026 | Adobe Q3 FY26: ricavi 6,76 mld USD (+13%); "AI-first ARR" in crescita oltre il 150% (base assoluta non chiara); 1 miliardo di MAU. | https://www.sec.gov/Archives/edgar/data/0000796343/000079634326000147/adbeex991q326.htm | [V1] su SEC; dettagli AI [V2]/[V3] |
| 23 set 2026 | Blog IDC "SaaSpocalypse: Catchy Title, Flawed Premise". | vedi 1.1 | [V1] |
| inizio ott 2026 | I titoli software toccano i massimi del 2026; IGV +41% dal 13 aprile al 12 ottobre, ma circa -1% da inizio anno. | https://247wallst.com/investing/2026/10/13/everyone-declared-software-dead-in-april-this-etf-is-up-41-since-then/ | [V2] |

**Lettura sintetica del dibattito:** il mercato ha prezzato a febbraio il timore che gli agenti erodano il modello per seat, poi ha in larga parte rimbalzato; analisti (IDC) e consulenti (Bain) spostano il discorso da "morte" a "riconfigurazione". **Quasi tutto il dibattito riguarda systems of record e software enterprise o data provider (legal, finanza, CRM, ERP).** I SaaS di creazione di artefatti compaiono soprattutto come notizie di prodotto (Claude Design contro Figma, Google Pics contro Canva, Canva in ChatGPT), non come oggetto di analisi di business model.

### 1.3 Letteratura accademica pertinente

| Riferimento | Tesi in una riga | URL / DOI | Verifica |
|---|---|---|---|
| **Teng, D., Ye, C., Martinez, V. (2025). "Gen-AI's effects on new value propositions in business model innovation: Evidence from information technology industry." Technovation, 143, 103191.** DOI 10.1016/j.technovation.2025.103191 | Nell'industria IT la GenAI abilita cinque nuove value proposition (soluzioni cloud basate su knowledge querying, content creation, AI agents, foundation models, infrastruttura upstream); AI agents e detector di contenuti AI sono BMI radicale, le altre incrementale. | https://www.sciencedirect.com/science/article/pii/S0166497225000239 ; SSRN https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4918834 | [V1] metadati e highlights. **Esiste.** Nota: il titolo usa "Gen-AI" e parla di value proposition; prospettiva dei fornitori di AI, non degli incumbent di creazione. |
| **Kanbach, D. K., Heiduk, L., et al. (2024). "The GenAI is out of the bottle: generative artificial intelligence from a business model innovation perspective." Review of Managerial Science, 18(4), 1189-1220.** DOI 10.1007/s11846-023-00696-z | Esplora come la GenAI abilita BMI (lettura generativa, pre-agentic). | https://ideas.repec.org/a/spr/rvmgts/v18y2024i4d10.1007_s11846-023-00696-z.html | [V1] titolo, rivista, volume, pagine; elenco completo degli autori da controllare [M: cinque autori]. |
| **Jorzik, P., Klein, S. P., Kanbach, D. K., Kraus, S. (2024). "AI-driven business model innovation: A systematic review and research agenda." Journal of Business Research, 182.** | Review sistematica della BMI guidata dall'AI con prospettive di ricerca distinte. | https://ideas.repec.org/a/eee/jbrese/v182y2024ics0148296324002686.html | [V1] metadati. |
| **Heimburg, V., Schreieck, M., Wiesche, M. (2025). "Complementor Value Co-Creation in Generative AI Platform Ecosystems." Journal of Management Information Systems, 42(2), 491-528.** DOI 10.1080/07421222.2025.2487310 | Caso incorporato sui complementor dell'ecosistema OpenAI: quattro meccanismi di co-creazione (istruzioni di sistema, dati di contesto, cura degli input, revisione degli output) e due logiche (reap, differentiation). | https://jmis-web.org/articles/1711 | [V1] abstract. **Molto utile**: Canva, Adobe, Figma dentro ChatGPT/Claude sono di fatto complementor di piattaforme AI, ma lo studio guarda ai costruttori di GPT, non agli incumbent SaaS. |
| **(Autori da verificare) (2026). "Agentic artificial intelligence as a new frontier in information systems: Promise, peril, and research opportunities." Information & Management, 63(3), 104317.** | Inquadra l'agentic AI come nuovo artefatto IS; richiama la visione di Microsoft di un'orchestrazione cross-system che sostituisce in parte il SaaS. | https://www.sciencedirect.com/science/article/abs/pii/S0378720626000170 | [V1] esistenza; autori non visti. Utile per la definizione di agentic. |
| **Azabagic, Gemser, Giesen (2026). "The Human Side of Generative AI in Business Model Innovation." California Management Review, 68(4).** | Il ruolo umano nell'uso della GenAI per fare BMI; nota la scarsità di studi. | https://cmr.berkeley.edu/2026/05/68-4-the-human-side-of-generative-artificial-intelligence-in-business-model-innovation/ | [V1] esistenza. Pertinenza media (GenAI come strumento di BMI, non come shock esterno). |
| **"From Instrument to Economic Actor: Generative and Agentic AI as a New Logic of Business Model Innovation." Big Data and Cognitive Computing (MDPI), 10(11), 360 (ott 2026).** | Concept paper: tre logiche (supporting, generative, agentic); la BMI agentic richiede "delegated reconfiguration authority". | https://www.mdpi.com/2504-2289/10/11/360 | [V1] esistenza; rivista MDPI, usare con cautela, solo come spunto definitorio. |
| **Hagiu, A., Wright, J. (2025). HBR, su ChatGPT come piattaforma dominante.** | Gli effetti di rete cross-side tra utenti e sviluppatori di GPT sono limitati perché molte GPT non dipendono da ChatGPT. | https://insights.bu.edu/could-the-gpt-store-turn-chatgpt-into-a-platform-powerhouse/ | [V2]; titolo esatto da verificare. |
| **arXiv 2604.26482, "The Buy-or-Build Decision, Revisited: How Agentic AI Changes the Economics of Enterprise Software"** | Preprint su come l'agentic AI cambia l'economia make-or-buy del software enterprise. | https://arxiv.org/pdf/2604.26482 | [V1] esistenza; non peer reviewed. |

**Verdetto sulla letteratura:** non ho trovato studi peer reviewed sull'evoluzione del business model di **incumbent SaaS di creazione di artefatti** di fronte all'**agentic** AI. La letteratura BMI esistente è (a) generativa più che agentic, (b) generica per settore (IT in generale), (c) spesso dal lato di chi fornisce AI. La letteratura su piattaforme e complementor (Heimburg et al. 2025) offre una lente teorica pronta ma non è mai stata applicata a incumbent SaaS che diventano complementor degli assistenti AI. Questo è uno spazio reale per una tesi magistrale.

---

## 2. Affermazioni BANALI da non usare come conclusione

Una commissione le considererebbe scontate. Possono comparire come contesto, mai come risultato.

1. "Le aziende SaaS stanno aggiungendo funzionalità AI ai loro prodotti."
2. "Il SaaS deve adattarsi all'AI o morire" (e la variante "il SaaS non è morto, si evolve", che è ormai la tesi di IDC, Forbes, Deloitte).
3. "Si passa dal pricing per seat al pricing a consumo, ibrido o a outcome" (è la tesi di Deloitte, BCG, Bain, di ogni blog di pricing).
4. "I dati proprietari e le integrazioni sono il vero moat" (Bain, IDC, Fortune: "code alone was never a real moat"; inoltre è difendibilità, esclusa dal perimetro).
5. "Gli agenti rendono l'interfaccia meno importante" (a16z, Nadella).
6. "Gli incumbent hanno il vantaggio della distribuzione, le startup AI-native quello della velocità."
7. "Il valore si sposta dal tool all'outcome" (Sequoia, Foundation Capital, Bain "outcome interfaces").
8. "Servono governance, fiducia e controllo umano sugli output AI."
9. "Le aziende acquisiscono startup AI-native per accelerare" (osservabile, ma da solo è descrittivo).
10. "L'impatto dipende dal tipo di workflow e dal grado di automazione" (è letteralmente il framework Bain 2025: ripeterlo non è un contributo).
11. "Le aziende combinano più strategie" (vero ma vuoto se non si spiega quali combinazioni e perché).
12. "I costi di inferenza pesano sui margini" (vero, ormai riportato da stampa e filing).

**Test pratico per lo studente:** se una conclusione della tesi potrebbe stare, identica, in un report Deloitte o Bain su CRM ed ERP, non è un contributo. Deve dire qualcosa che vale **specificamente** per i SaaS in cui l'output è un artefatto.

---

## 3. GAP: che cosa le fonti NON spiegano, soprattutto per i SaaS di creazione

### G1. Il paradosso dell'apertura (il gap più forte)
Bain 2025 consiglia agli incumbent di limitare l'accesso agli endpoint critici e avverte del rischio di diventare un "silent back end". Eppure i SaaS di creazione hanno fatto **il contrario, e presto**: Canva è entrata in ChatGPT come primo design connector (giugno 2025) e poi in Claude e Gemini; Adobe ha messo Photoshop, Express e Acrobat in ChatGPT **gratis** (dicembre 2025); Figma ha aperto un server MCP con scrittura sul canvas; Notion ha un server MCP e perfino un'API per far lavorare agenti esterni dentro il workspace. **Perché aprono, che cosa aprono e che cosa trattengono?** Nessuna fonte risponde per questa categoria. Attenzione: il consiglio Bain si riferisce soprattutto allo scenario "Spending compresses"; la formulazione esatta va verificata nel PDF prima di costruirci sopra il puzzle.

### G2. IDC si regge sui systems of record, che i SaaS di creazione NON sono
La rassicurazione IDC (il SaaS resta perché custodisce dati, workflow, governance) presuppone gravità dei dati. Il criterio che definisce la popolazione dello studente (definizione B: l'artefatto **ha valore fuori dal software**, si esporta, si pubblica) implica per costruzione **meno gravità dei dati**. Quindi l'argomento IDC non si trasferisce: questi prodotti sono più esposti. Il gap interessante è l'inverso: questi SaaS stanno cercando di **diventare una sorta di system of record del contesto creativo** (Brand Kit di Canva serviti dentro ChatGPT, design system e variabili di Figma serviti agli agenti di coding via MCP, workspace Notion come contesto per agenti)? È un'ipotesi osservabile, non un fatto.

### G3. Nadella descrive app "CRUD più logica", i tool di creazione sono "motori"
La tesi "la logica migra negli agenti" funziona per CRM ed ERP. Un editor grafico o un canvas di design incorpora un motore di rendering, un formato di file, librerie di asset, collaborazione in tempo reale. Un agente esterno può **usare** quel motore (via MCP) più facilmente di quanto possa **sostituirlo**; oppure può bypassarlo generando direttamente l'output (Claude che crea file .pptx, Claude Design, Google Pics). Nessuna fonte distingue queste due traiettorie per la creazione di artefatti.

### G4. Che cosa succede al seat quando l'"utente" è un agente
Il dibattito dice "il seat muore". Le prove nei casi dicono qualcosa di più fine:
- Figma: per scrivere nei file con agenti serve un **Full seat**; la scrittura sul canvas è gratuita in beta e diventerà **funzione a pagamento a consumo** (documentazione developer Figma, [V1] via estratti: https://developers.figma.com/docs/figma-mcp-server/write-to-canvas). AI credits per seat con limiti applicati da marzo 2026.
- Notion: agenti pagati con crediti **a livello di workspace**, solo su piani Business ed Enterprise (cioè dopo aver comprato seat).
- Adobe in ChatGPT: accesso gratuito per chiunque abbia un account Adobe; il seat non c'entra.
- Fuori dalla popolazione, Microsoft Agent 365 viene descritto come licenziato **per utente umano che sponsorizza agenti** ([V3], consulenti di licensing).
Ipotesi non banale: **il seat umano non scompare ma diventa l'"àncora" a cui si attacca un contatore di consumo per il lavoro degli agenti**, mentre l'accesso esterno gratuito funziona da canale di acquisizione. Va verificata, ma è osservabile nei listini.

### G5. Chi cattura il valore quando l'artefatto lo produce un agente
Se un utente crea un post in ChatGPT tramite l'app Canva, chi ha catturato valore? Le scelte di **gating** sono osservabili: secondo fonti secondarie l'export e il resize richiedono di tornare in Canva o un piano a pagamento; Adobe non sincronizza con Creative Cloud; Canva mostra una "Live Design Preview" da "finire in Canva"; Figma porta l'interfaccia generata dal codice di nuovo sul canvas ("code to canvas"). Il punto non è il prezzo ma **dove vive la versione modificabile e canonica dell'artefatto**. Nessun report affronta questa variabile.

### G6. Il lato dei costi nel freemium di massa
Il dibattito parla di pricing. Per i SaaS di creazione con enormi basi gratuite (Canva, Adobe Express, Affinity resa gratuita da Canva con AI a pagamento) il nodo è **il costo variabile dell'inferenza per utenti che non pagano**. Canva ha tagliato la crescita 2026 dal 30% al 20% per rimettere a posto l'economia unitaria dell'AI; Figma dichiara margini lordi variabili perché finanzia la beta. Bain e IDC ignorano il lato costi del modello economico.

### G7. Il doppio ruolo: complementor delle piattaforme AI e piattaforma per agenti altrui
Canva, Adobe, Figma sono complementor di ChatGPT, Claude, Gemini. Contemporaneamente Superhuman (ex Grammarly) ospita agenti di terzi (Box, Gamma, Wayground nell'Agent Store, febbraio 2026) e Notion ospita agenti esterni (External Agents API). La letteratura sui complementor (Heimburg et al. 2025) studia i piccoli sviluppatori, non incumbent che giocano entrambi i ruoli.

### G8. Generative contro agentic nei casi
Le fonti accademiche (Teng et al. 2025; Kanbach et al. 2024) restano sulla GenAI. Gartner stesso parla di "agent washing". Nessuno distingue, per i tool di creazione, che cosa sia davvero agentic (pianifica, usa strumenti, itera: Canva AI 2.0, Figma agent, Notion Custom Agents) da che cosa sia generazione one-shot. Questo è un contributo definitorio piccolo ma solido.

---

## 4. Tre angolazioni più affilate della RQ (dentro lo spirito "affinare, non stravolgere")

Tutte mantengono: popolazione (SaaS di creazione/trasformazione di artefatti), oggetto (evoluzione del business model), shock (agentic AI), framework (WHO/WHAT/HOW/ECONOMIC MODEL), metodo (casi multipli su fonti pubbliche).

### B1. "Dentro e fuori": il doppio canale agentico
**RQ:** *How do artifact-creation SaaS companies reconfigure their business models when agentic AI can produce artifacts both inside their products (first-party agents) and through external agents that access their products (via MCP, apps in AI assistants, APIs)?*
**Idea:** "agentic AI" smette di essere un'onda generica e diventa due canali concreti e osservabili. La tensione tra costruire agenti propri e farsi usare dagli agenti altrui è il cuore del problema (G1, G4, G5, G7). Le sei strategie dell'handoff non spariscono: la 1 (AI-native) è il canale interno, la 2 (agent-accessible) il canale esterno, la 4 (contesto) e la 5 (monetizzazione) diventano le leve con cui si governa il rapporto tra i due.
- **Originalità: 4/5.** La tensione è notata dalla stampa (The Information su utenti Canva che generano in ChatGPT, [V3] via https://sovereignmagazine.com/article/canva-ai-platform-design-tools-perkins), non analizzata con un framework di business model né in modo comparativo.
- **Fattibilità con fonti pubbliche in 3 mesi: 4/5.** Documentazione MCP, pagine di help, listini (anche storici via Wayback Machine), comunicati, filing SEC (Figma, Adobe), lettere agli azionisti riportate dalla stampa (Canva), interviste pubbliche dei CEO.
- **Osservabilità: alta.** Ogni caso ha eventi datati su entrambi i canali (vedi cronologia 1.2).
- **Rischio castelli in aria: basso-medio.** Basso perché si codificano fatti (che cosa è accessibile, a chi, a che prezzo, da quando). Medio perché i dati d'uso sono auto-dichiarati e non si può misurare la cannibalizzazione.

### B2. "Dove vive l'artefatto": da strumento di produzione a custode dell'artefatto e del contesto
**RQ:** *As agents become able to produce digital artifacts anywhere, are artifact-creation SaaS companies shifting their value proposition from enabling production to governing the editable artifact and its creative context, and how does this reshape their business models?*
**Idea:** risponde a IDC rovesciandolo (G2, G5): i SaaS di creazione non sono systems of record, ma provano a diventare il luogo canonico dove l'artefatto modificabile, il brand e il design system vivono, lasciando che la produzione avvenga ovunque.
- **Originalità: 5/5.** Tesi interpretativa nuova e "da discussione".
- **Fattibilità: 3/5.** Richiede di interpretare segnali (gating, "finish in Canva", code to canvas, Brand Kit) e c'è il rischio di forzare i casi verso la tesi.
- **Osservabilità: media.** I segnali esistono e sono datati, ma la loro lettura come "spostamento di value proposition" è un'inferenza.
- **Rischio castelli in aria: medio-alto** se diventa la RQ principale. Ottima invece come **proposizione da testare** dentro B1.

### B3. "Chi paga il lavoro dell'agente": cattura del valore e struttura dei costi
**RQ:** *How do artifact-creation SaaS companies redesign value capture when artifacts are increasingly produced by agents rather than by human users?*
**Idea:** si concentra sull'ECONOMIC MODEL (G4, G6): seat come àncora più crediti come contatore, freemium sotto pressione dei costi di inferenza, accesso gratuito via assistenti come canale.
- **Originalità: 3/5.** Il tema pricing è il più affollato (Deloitte, BCG, Bain, blog); l'originalità sta solo nel focus su freemium di massa e agenti esterni.
- **Fattibilità: 5/5.** Listini storici e filing sono le fonti più solide e confrontabili.
- **Osservabilità: alta.**
- **Rischio castelli in aria: basso**, ma **rischio di tesi monodimensionale**: schiaccia WHO, WHAT e HOW, mentre il relatore vuole l'intero framework. Ed è vicinissima alla banalità n. 3.

### Tabella di sintesi

| Angolazione | Originalità | Fattibilità 3 mesi | Osservabilità | Rischio castelli in aria | Coerenza con framework prof |
|---|---|---|---|---|---|
| B1 Dentro e fuori | 4 | 4 | Alta | Basso-medio | Piena (tocca tutte e quattro le dimensioni) |
| B2 Dove vive l'artefatto | 5 | 3 | Media | Medio-alto | Forte su WHAT e HOW |
| B3 Chi paga l'agente | 3 | 5 | Alta | Basso (ma monodimensionale) | Debole (quasi solo ECONOMIC MODEL) |

---

## 5. Raccomandazione

**Raccomando B1 come RQ principale, con B2 e B3 come sotto-domande o proposizioni da testare.** Motivi:

1. **Trasforma un tema affollato in un puzzle empirico.** L'introduzione può partire da un fatto controintuitivo e datato: mentre Bain consiglia di proteggere gli endpoint e il mercato vendeva SaaS per paura degli agenti (febbraio 2026), Canva, Adobe, Figma e Notion si aprivano agli agenti esterni e insieme lanciavano agenti propri. Questa è la frase che rende la tesi non banale davanti al prof.
2. **Non stravolge nulla.** Stesso titolo (si può aggiungere un sottotitolo), stessa popolazione, stesso framework; precisa soltanto il meccanismo con cui l'agentic AI colpisce il business model.
3. **È specifica della popolazione scelta.** Funziona proprio perché l'artefatto si esporta e si può produrre ovunque (G2): giustifica il perimetro "creation" contro le obiezioni ("perché non CRM?").
4. **È fattibile senza interviste.** Lo strumento analitico è una **"agent access matrix"** per caso: quali funzioni sono accessibili agli agenti esterni, tramite quale canale, con quale piano o prezzo, che cosa resta solo nell'interfaccia nativa, da quando (date da changelog, help center, Wayback Machine). Accanto, la stessa matrice per gli agenti interni. Poi si legge tutto con WHO/WHAT/HOW/ECONOMIC MODEL.
5. **Produce strategie non banali da trovare** (ipotesi da verificare, non risultati): agente interno come nuova value proposition; apertura agli agenti esterni come canale di distribuzione (Adobe gratuito in ChatGPT); "ritorno al canvas" come meccanismo di cattura (Canva, Figma); contesto servito agli agenti (Brand Kit, design system); accesso agentico misurato e ancorato al seat umano (Figma, Notion); ruolo di host di agenti altrui (Superhuman, Notion); acquisizioni di AI-native (già nel brief).

**Formulazione proposta:**
- **RQ:** *How are artifact-creation SaaS companies evolving their business models as agentic AI enables artifacts to be produced both by first-party agents inside their products and by external agents that use their products?*
- **SQ1 (configurazione):** Which agentic configurations (first-party agents, access for external agents, hosting of third-party agents) do these companies adopt, when, and with what boundaries?
- **SQ2 (business model):** How do these configurations change WHO, WHAT, HOW and the economic model, and what remains unchanged?
- **SQ3 (cattura del valore):** How do companies capture value when the artifact is produced by an agent rather than by a human user (seats, credits, usage, free distribution, return to the native editor)?

**Casi suggeriti** (scelti per variare sul doppio canale, non per notorietà):
- **Canva:** entrambi i canali molto visibili (ChatGPT, Claude, Gemini, MCP; Canva AI 2.0), più la pressione dei costi (taglio della crescita, Affinity gratis con AI a pagamento). Privata: dati finanziari solo da stampa.
- **Figma:** entrambi i canali più accesso agentico a pagamento ancorato al Full seat; società quotata con filing SEC; concorrente agentico diretto (Claude Design).
- **Adobe Express** (unità di analisi: il prodotto, non tutta Adobe): apertura "gratis e fuori" in ChatGPT, Firefly come aggregatore di modelli di terzi a crediti; filing SEC.
- **Notion** (caso di confine dichiarato): caso estremo di apertura, agenti esterni che lavorano dentro il prodotto, crediti a livello di workspace.
- **Superhuman (ex Grammarly):** il contrasto, perché si posiziona come host di agenti sopra le app altrui.
- **Contesto, non casi:** Claude Design, Google Pics, Claude che genera file .pptx, Gamma come complementor AI-native.

**Rischi da dichiarare nella tesi:** i dati d'uso (3,7 milioni di utenti MCP di Canva, +75% MCP di Figma) sono auto-dichiarati; la cannibalizzazione non è misurabile con fonti pubbliche; il fenomeno è recente e cambia mese per mese, quindi serve una data di cut-off della raccolta dati (es. 31 dicembre 2026); il "paradosso Bain" va formulato con precisione solo dopo aver letto il PDF.

---

## Raccomandazione in 5 righe

1. **RQ:** *How are artifact-creation SaaS companies evolving their business models as agentic AI enables artifacts to be produced both by first-party agents inside their products and by external agents that use their products?* (più SQ su configurazione, cambi WHO/WHAT/HOW/ECONOMIC MODEL, cattura del valore).
2. **Perimetro:** definizione B (SaaS il cui output tipico è un artefatto con valore fuori dal software), con agentic distinto da generative e con un cut-off dei dati dichiarato; il puzzle d'apertura è "aprirsi agli agenti esterni mentre si costruiscono agenti propri", in contrasto con Bain e con il caso systems of record di IDC.
3. **Casi suggeriti:** Canva, Figma, Adobe Express, Notion (confine), Superhuman/Grammarly (contrasto); Claude Design, Google Pics e Gamma come contesto competitivo, non come casi.
4. **Strategie attese (ipotesi):** agente interno come nuova value proposition; apertura agli agenti esterni come canale; ritorno al canvas e custodia dell'artefatto modificabile; contesto (brand, design system) servito agli agenti; accesso agentico a consumo ancorato al seat umano; ospitare agenti altrui; acquisizioni di AI-native.
5. **Cosa chiedere al prof:** se accetta il focus "doppio canale" come affinamento della RQ e un sottotitolo; se va bene Adobe Express come unità di analisi e Notion come caso di confine; se l'"agent access matrix" più le fonti pubbliche bastano senza interviste; quale data di cut-off dei dati usare per la consegna di febbraio.
