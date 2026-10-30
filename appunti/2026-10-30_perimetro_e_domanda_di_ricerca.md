# Perimetro e domanda di ricerca: sintesi del dibattito tra agenti

**Data:** 30 ottobre 2026
**Come è stato prodotto:** quattro agenti con ruoli diversi (architetto della RQ, sfidante dell'originalità, esploratore dei casi, esaminatore critico) hanno lavorato in due giri. Nel primo giro ognuno ha fatto la propria proposta con ricerca web; nel secondo ha letto le proposte degli altri e ha rivisto la propria. I file completi sono in `appunti/dibattito_agenti/`.

> **Avvertenza sulle fonti.** Tutte le verifiche sono state fatte su estratti di ricerca web: in questa sessione non è stato possibile aprire le pagine originali. Prima di citare qualsiasi fatto, numero o articolo nella tesi va applicata la regola **apri, archivia, annota**: aprire la fonte originale, salvarla (Wayback Machine o PDF) con la data di accesso, annotare la pagina o il passaggio. Vale anche per questo documento.

---

## 0. In due frasi (per la telefonata)

> Studio come gli incumbent SaaS della creazione di artefatti digitali (Canva, Figma, Notion, Wix) stanno cambiando il loro business model ora che gli agenti AI possono produrre gli artefatti, sia dentro i loro prodotti sia dall'esterno, per esempio ChatGPT o Claude che usano Canva. Il punto di partenza è un fatto controintuitivo: tra il 2025 e il 2026 si sono aperti tutti agli agenti esterni, mentre Bain consigliava di proteggere gli accessi; la tesi guarda a come si differenziano e a come catturano valore quando il lavoro lo fa un agente.

---

## 1. Domanda di ricerca proposta

**RQ**
> *How are creation-oriented productivity SaaS incumbents evolving their business models as agentic AI enables digital artifacts to be produced by AI agents, both inside their products and through external agents that use them?*

**Sotto-domande**
- **SQ1.** Which roles do these companies take toward AI agents (own agents inside the product, tool for external agents, host of third-party agents), under which access terms, and when?
- **SQ2.** How do these roles change WHO, WHAT, HOW and ECONOMIC MODEL between 2022 and 2026, at what depth, and what remains unchanged?
- **SQ3.** How do these companies capture value and cover inference costs when an agent, rather than a human user, produces the artifact?

**Che cosa cambia rispetto alla RQ concordata** (*How can productivity SaaS companies evolve their business models in response to the emergence of agentic AI?*)

| Elemento | Prima | Dopo | Perché |
|---|---|---|---|
| Tipo di domanda | "How can" (prescrittiva) | "How are ... evolving" (empirica) | "How can" invita a immaginare opzioni: è il rischio dei castelli in aria. Il "how can" torna nelle implicazioni manageriali, derivato da ciò che si osserva |
| Popolazione | "productivity SaaS" | "creation-oriented productivity SaaS incumbents" | Elimina la discussione infinita su chi è dentro; "incumbent" garantisce che esista un business model "prima" da confrontare |
| Shock | "emergence of agentic AI" | due canali: agenti dentro il prodotto, agenti esterni che lo usano | Rende osservabile il meccanismo e separa generativo da agentic |
| Evoluzione | non specificata | WHO/WHAT/HOW/ECONOMIC MODEL in tre momenti, con profondità D0-D2 | Distingue una nuova feature da un cambio di business model |

Lo spirito resta lo stesso: evoluzione del business model, non difendibilità. Il titolo può restare invariato, eventualmente con un sottotitolo (da chiedere al prof).

**Formulazioni scartate durante il dibattito:** "as agentic AI shifts the production ... from users to agents" (presuppone l'esito); RQ centrata solo sul pricing (monodimensionale e vicina alla banalità "dal seat al consumo"); tipologia induttiva su perimetro largo (prevedibile e poco lineare).

---

## 2. Perché non è banale

**Il puzzle.** Bain (Technology Report 2025) consiglia agli incumbent di limitare l'accesso agli endpoint critici per non diventare un "silent back end" degli agenti. I SaaS di creazione hanno fatto il contrario, e presto: Canva primo "design connector" in ChatGPT (giugno 2025) e poi Claude; Adobe Express e Photoshop gratis dentro ChatGPT (dicembre 2025); Figma con il canvas scrivibile da agenti esterni (marzo 2026); Notion con server MCP e perfino un'API per far lavorare agenti esterni dentro il workspace. Perché si aprono, che cosa aprono e che cosa trattengono? *(Formulazione esatta del consiglio Bain da controllare nel PDF.)*

**Il gap.** Il dibattito "SaaSpocalypse" (crollo dei titoli software di febbraio 2026, poi rimbalzo) e i report di Bain e IDC riguardano soprattutto systems of record e software enterprise (CRM, ERP, legal, data provider). L'argomento IDC ("il SaaS resta perché custodisce dati e workflow") non si trasferisce ai SaaS di creazione, il cui artefatto per definizione si esporta. In letteratura peer-reviewed ci sono lavori su generative AI e business model innovation (Kanbach et al. 2024; Jorzik et al. 2024; Teng, Ye e Martinez 2025), ma nessuno studio trovato sugli incumbent della creazione di fronte all'agentic AI.

**Il contributo atteso** (ipotesi da verificare nei casi, non risultato):
1. una distinzione operativa tra generativo e agentic applicata al business model;
2. una mappatura datata dei ruoli che le aziende assumono verso gli agenti (agente proprio, strumento per agenti altrui, host di agenti altrui) e delle condizioni di accesso;
3. la lettura di come cambia la cattura del valore: dai primi dati sembra guidata dal costo dell'inferenza più che dal valore degli outcome ("si paga l'agente, la generazione è inclusa").

**Conclusioni da NON usare come risultato** (le dicono già consulenti e stampa): "le aziende aggiungono feature AI"; "il SaaS non muore, evolve"; "si passa dal seat al consumo o all'outcome"; "i dati proprietari sono il moat"; "il valore si sposta dal tool all'outcome"; "l'impatto dipende dal workflow"; "l'inferenza pesa sui margini". Test pratico: se una conclusione potrebbe stare identica in un report Bain su CRM ed ERP, non è un contributo.

---

## 3. Popolazione

**Definizione operativa** (etichetta definita nella tesi, non categoria consolidata in letteratura: va dichiarato)
> *Creation-oriented productivity SaaS: cloud-delivered software products (NIST SP 800-145) whose primary value proposition is to enable users to create, edit or transform digital artifacts (e.g. graphics, presentations, documents, interface designs, videos, websites) that retain value outside the software itself, and that serve primarily horizontal, cross-industry markets.*

**Criteri di inclusione (tutti necessari)**
1. **SaaS orizzontale** secondo NIST, usato da più settori.
2. **Test T1, auto-descrizione:** l'azienda descrive il prodotto con un verbo di creazione (create, design, write, edit, build) riferito a un artefatto.
3. **Test T2, portabilità:** l'artefatto si esporta o si pubblica (file, URL).
4. **Incumbent:** business model commerciale documentabile a metà 2022 (piani a pagamento e listino archiviato).
5. **Evidenze pubbliche minime:** listini archiviati 2022 e 2026, documentazione ufficiale, almeno una fonte tra filing, earnings call o comunicati.

Non si richiede di "avere già funzioni agentic": sarebbe selezionare i casi sulla variabile che si vuole studiare.

**Esclusi:** coordinamento di task (Trello, Asana, monday.com); systems of record (Salesforce, HubSpot); comunicazione (Slack, Zoom); storage (Dropbox, Box); suite in cui il prodotto non è isolabile (Microsoft 365, Google Workspace, usati come contesto); AI-native senza un "prima" (Lovable, Bolt, Gamma: solo come termine di confronto).

**Boundary test:** applicare T1 e T2 a una lista esterna di circa 20 prodotti presa da categorie commerciali (G2 o Gartner), con data e protocollo, per difendersi dall'obiezione "la definizione è costruita attorno a Canva".

**Unità di analisi:** il business model del **prodotto focale**, con le mosse aziendali che lo toccano (acquisizioni, pricing, partnership).

**Finestra temporale:** t0 metà 2022 (prima di ChatGPT), t1 dicembre 2024 (fine della fase generativa, prima della diffusione di MCP), t2 **30 novembre 2026** (data di congelamento: include i risultati Q3 di Figma e Wix e Adobe MAX; gli eventi successivi vanno solo in nota).

---

## 4. Casi

| # | Caso | Artefatto | Ruolo nel campione | Fonte economica principale | Buco più grosso |
|---|---|---|---|---|---|
| 1 | **Figma** (pilota) | Interfacce, prototipi, codice | Strumento per agenti esterni con accesso in scrittura legato al seat a pagamento; agente proprio in GA dal 6 ottobre 2026; crediti AI con limiti applicati da marzo 2026 | Filing SEC (quotata da luglio 2025): ricavi Q2 2026 +48%, costo del venduto +117% per infrastruttura AI | Ricavi AI non separati; agente monetizzato da poche settimane |
| 2 | **Canva** | Grafiche, presentazioni, video, siti | Strumento per agenti esterni (ChatGPT, Claude) più agente proprio (Canva AI 2.0, research preview da aprile 2026); modelli proprietari (Design Model, Craft); crescita 2026 attesa tagliata da circa 30% a circa 20% per i costi dell'AI | ARR e utenti dichiarati; lettera agli azionisti riportata da Fortune; listini via Wayback | Nessun bilancio pubblico; distinguere annunci da disponibilità reale |
| 3 | **Notion** (caso di confine) | Pagine, documenti, wiki | Host di agenti esterni (External Agents API in alpha) più agenti propri a crediti (Custom Agents, a pagamento da maggio 2026); chiude Notion Mail perché oltre metà degli utenti gestiva la posta tramite agenti | Listini e help center (AI inclusa nel piano Business da maggio 2025, crediti per gli agenti) | Nessun dato finanziario ufficiale |
| 4 | **Wix** (con Base44) | Siti web, poi app | Acquisizione di un AI-native (Base44, giugno 2025) gestita in parallelo al core; artefatto che si allarga dal sito al software | Filing (quotata): ricavi, margini, ARR di Base44 | La crescita AI sta nel prodotto acquisito, non nel core |
| V | **Gamma** (scheda di confronto, 2-5 pagine) | Presentazioni | Fondata nel 2020 ma senza un business model pre-AI documentabile: mostra il modello "nato con l'AI" con cui gli incumbent si confrontano | ARR dichiarato | Nessun "prima" |

**Quinto caso, ancora aperto** (da decidere col prof o dopo il pilota):
- **Adobe Express** (proposto da due agenti): è la replica di Canva con condizioni opposte, cioè gratis dentro ChatGPT come canale di acquisizione. Contro: è un prodotto dentro Adobe, con dati aggregati.
- **Grammarly / Superhuman** (proposto da un agente): unico caso "host" sul testo. Contro: dopo cinque acquisizioni le mosse più forti (mail, note di riunione, rilevazione AI) cadono fuori dalla creazione, e non esiste un accesso per agenti specifico di Grammarly.

Raccomandazione: **4 casi completi più Gamma come scheda di confronto**. È la versione che lascia una settimana di margine con il lavoro a tempo pieno. Adobe Express solo se il pilota va veloce, oppure come breve scheda accoppiata a Canva.

---

## 5. Lente analitica e risultato della tesi

**Perché non la matrice 2x2 "agente dentro / agente fuori".** I dati raccolti mostrano che a ottobre 2026 quasi tutti i casi sono alti su entrambi gli assi: la matrice metterebbe tutti nello stesso quadrante. Che si aprano tutti è un risultato (contro il consiglio Bain), ma non serve a distinguere i casi.

**Che cosa distingue davvero i casi:**
1. **il ruolo** verso gli agenti: OWN (agente proprio nell'editor), TOOL (strumento usato da agenti altrui), HOST (ospita agenti altrui nel proprio prodotto);
2. **le condizioni di accesso:** lettura o scrittura; gratis (Adobe in ChatGPT), solo con piano a pagamento (Canva), legato al seat e destinato al consumo (Figma), a crediti (Notion);
3. **la sequenza nel tempo:** chi apre prima agli agenti esterni e chi costruisce prima l'agente proprio.

**Risultato finale della tesi, definito fin dall'inizio:**
1. una **matrice ruoli x logiche di cattura del valore** (gratis, incluso nel seat, a crediti o consumo, prodotto separato), con le traiettorie dei casi t0, t1, t2;
2. una **tabella delle ipotesi** con un esito per ciascuna: supportata, riformulata, non osservata;
3. le **strategie emergenti** (solo se in almeno 2 casi con status GA);
4. 3-5 **proposizioni** con le loro condizioni e le **implicazioni manageriali** (qui si recupera il "how can").

---

## 6. Strategie attese

Le sei strategie dell'handoff restano ipotesi (sensitizing concepts). Vanno messe per iscritto prima di codificare i casi, ognuna con l'evidenza attesa e una spiegazione rivale (costo dell'inferenza, concorrenti AI-native, pressione da IPO o da investitori).

| Esito del dibattito | Strategia | Note dai primi dati |
|---|---|---|
| **Tenere** | Agente proprio (AI-native product transformation) | Presente in tutti i casi; i modelli proprietari (Canva, Figma) sono un meccanismo, motivato anche dal costo |
| **Tenere, divisa in due** | Apertura agli agenti: TOOL e HOST | Universale; conta il ruolo e dove resta la versione modificabile dell'artefatto (ritorno al canvas) |
| **Tenere** | Contesto servito agli agenti (brand kit, design system, workspace) | Presente in 4 casi su 5 |
| **Riformulare** | Monetizzazione → **ibrido guidato dal costo** | Seat come àncora, crediti come tetto ai costi, si paga l'agente mentre la generazione semplice tende a essere inclusa; prezzi instabili (Canva alza e ritira l'aumento di Pro in sei settimane) |
| **Riformulare** | Da artefatto a outcome → **allargamento dell'artefatto** verso codice, app e marketing | Canva Code, Figma Make, Base44; Canva verso marketing automation |
| **Aggiungere** | Acquisizioni di AI-native come meccanismo del HOW (integrate o in parallelo) | Leonardo, Weavy, Base44, Coda e altre; spesso tenute separate dal core |
| **Ipotesi rivali da testare** | Pricing a outcome; governance come leva strategica | Finora non osservati: si registra l'assenza ("non osservato entro il cut-off"), senza dichiararli smentiti |
| **Mosse non previste da osservare** | Chiusura di prodotti o interfacce sostituite dagli agenti (Notion Mail); razionamento della AI gratuita per i costi (Canva) | Possibili strategie emergenti |

---

## 7. Procedura di analisi (uguale per ogni caso, 3-4 giornate per caso)

**Passo 1. Registro delle mosse.** Una riga per ogni mossa datata con: data, descrizione, ruolo (OWN, TOOL, HOST o nessuno per le feature generative), livello di agency (0-3), dimensioni toccate (WHO, WHAT, HOW, EM), monetizzazione, status (annunciata, beta, GA, monetizzata), fonte con livello (A fatti ufficiali, B intenzioni dichiarate, C stampa e analisti).

**Passo 2. Griglia unica del caso.**

| Riga | t0 metà 2022 | t1 dic 2024 | t2 30 nov 2026 | Profondità D0-D2 | Status | Evidenze (ID, livello) | Che cosa non cambia / evidenza contraria |
|---|---|---|---|---|---|---|---|
| WHO | | | | | | | |
| WHAT | | | | | | | |
| HOW | | | | | | | |
| ECONOMIC MODEL | | | | | | | |
| Agente interno (0 nessuno, 1 generativo puntuale, 2 multi-step con conferma, 3 autonomo o su trigger) | | | | | | | |
| Accesso esterno (0 chiuso, 1 API per sviluppatori, 2 agenti in lettura, 3 agenti in scrittura; ruolo; condizioni) | | | | | | | |

**Regole:**
- **Profondità:** D0 feature; D1 cambiamento in una dimensione; D2 cambiamenti collegati in almeno due dimensioni. Si parla di business model innovation solo per D2 (ancoraggio: Foss e Saebi 2017).
- Un cambiamento è "implementato" solo con una fonte A o con due fonti indipendenti.
- La colonna "che cosa non cambia" è obbligatoria: è la difesa contro la narrativa precostituita.
- Si codificano i casi prima, poi si confrontano con le ipotesi.

**Interviste:** non necessarie. Al massimo 3-5 conversazioni di validazione del framework finale (product o pricing manager SaaS, anche via LinkedIn a Berlino), solo dopo la tabella di confronto e solo se il prof le chiede.

---

## 8. Come risponde ai 5 obiettivi

| Obiettivo | Come viene soddisfatto |
|---|---|
| 1. Domanda chiara che guidi la tesi | RQ e tre sotto-domande che corrispondono ai capitoli 3, 5 e 6; risultato finale definito fin dall'inizio |
| 2. Non banale | Puzzle "si aprono tutti, contro Bain"; popolazione trascurata dal dibattito; cattura del valore guidata dal costo; lista esplicita di conclusioni banali da evitare |
| 3. Lineare, senza castelli in aria | Domanda empirica; griglia unica decisa prima dei casi; caso pilota per tararla; solo fonti pubbliche; data di congelamento |
| 4. Business model analizzabili | Due aziende quotate (Figma, Wix) con filing; Canva e Notion con listini storici e metriche dichiarate; baseline 2022 ricostruibile con Wayback |
| 5. Spunti sulle strategie | Ogni caso porta almeno una strategia in modo netto (Figma: accesso agentico a pagamento; Canva: agente proprio e crisi dei costi; Notion: host e chiusura di Mail; Wix: acquisizione in parallelo) |

---

## 9. Domande per il prof (con la proposta da portare)

1. **RQ.** Va bene la versione empirica ("how are evolving") con i due canali, con il "how can" nelle implicazioni? Titolo invariato o sottotitolo? *Proposta: titolo invariato, perimetro precisato nel capitolo 2.*
2. **Popolazione.** Va bene restringere a incumbent della creazione di artefatti, con Notion come caso di confine e Gamma solo come confronto? *Proposta: sì.*
3. **Casi.** 4 casi completi più una scheda di confronto, o 5 casi? *Proposta: 4 + Gamma; Adobe Express solo se c'è tempo.*
4. **Unità di analisi.** Il framework si applica al prodotto focale o all'azienda? Decisivo per Wix con Base44 e per Adobe Express. *Proposta: prodotto focale più le mosse aziendali che lo toccano.*
5. **Metodo.** Basta un multiple-case documentale con fonti pubbliche e data di congelamento al 30 novembre, senza interviste? Una tesi ITEM richiede dati primari? *Proposta: sì, con 3-5 interviste di validazione solo se richieste.*
6. **Framework.** Quale fonte citare per WHO/WHAT/HOW/ECONOMIC MODEL (Parolini? slide del corso)?
7. **Calendario.** Protocollo e definizione entro metà novembre; capitoli 2-4 più caso pilota verso l'11 dicembre; bozza completa verso il 17 gennaio. Le date vanno bene?

---

## 10. Piano di 13 settimane (consegna indicativa 2 febbraio 2027, da verificare)

Carico ipotizzato: 10-12 ore a settimana.

| Sett. | Date | Attività | Milestone col prof |
|---|---|---|---|
| 1 | 2-8 nov | Fissare RQ e casi dopo la call; foglio delle evidenze e literature register; snapshot Wayback dei listini 2022, 2024, 2026 | Memo di disegno (1 pagina) |
| 2 | 9-15 nov | Definizione e boundary test (circa 20 prodotti) | Primo deliverable "Defining and Classifying..." (3-5 pagine) |
| 3 | 16-22 nov | Letteratura su business model adaptation e agentic AI; Bain e IDC; domanda di laurea (finestra indicativa 17 nov - 17 dic) | |
| 4 | 23-29 nov | Metodologia; caso pilota Figma codificato per tarare la griglia | |
| 5 | 30 nov - 6 dic | Data di congelamento (30 nov); stesura Figma; raccolta Canva | |
| 6 | 7-13 dic | Stesura Canva; baseline t0 nel capitolo 2 | Capitoli 2-4 + pilota (circa 11 dic) |
| 7 | 14-20 dic | Notion | |
| 8 | 21-27 dic | Wix | |
| 9 | 28 dic - 3 gen | Margine; scheda Gamma; quinto caso solo se in anticipo | |
| 10 | 4-10 gen | Analisi comparata: matrice, traiettorie, esito delle ipotesi | |
| 11 | 11-17 gen | Discussione, conclusioni, introduzione | Bozza completa (circa 17 gen) |
| 12 | 18-24 gen | Revisioni; verifica di tutte le citazioni e i DOI | |
| 13 | 25-31 gen | Rilettura, formattazione, caricamento | Consegna entro il 2 feb |

Regola di sicurezza: se a fine settimana 8 i quattro casi non sono scritti, il quinto caso e la scheda Gamma saltano e la settimana 9 diventa recupero.

---

## 11. Punti ancora aperti

- **Quinto caso:** Adobe Express (2 agenti), Grammarly/Superhuman (1 agente), nessuno (1 agente). Vedi sezione 4.
- **Consiglio Bain:** il "paradosso dell'apertura" regge solo se la formulazione del report è quella riportata; da controllare nel PDF (anche i nomi dei quadranti).
- **IDC:** il blog del 23 settembre 2026 esiste, ma l'attribuzione a Eric Newmark non compare negli estratti; confermare sul file in possesso dello studente.
- **Dati auto-dichiarati:** per esempio i "3,7 milioni di utenti MCP" di Canva non sono nel comunicato ufficiale, che riporta "oltre 12 milioni di design" creati o aperti da assistenti AI. Usare solo numeri da fonti ufficiali, altrimenti "riportato da".
- **Data di consegna e date amministrative:** da verificare su iCatt.

---

## 12. Fonti da aprire per prime

**Report e dibattito**
- Bain, *Will Agentic AI Disrupt SaaS?* (Technology Report 2025): https://www.bain.com/insights/will-agentic-ai-disrupt-saas-technology-report-2025/
- IDC, *SaaSpocalypse: Catchy Title, Flawed Premise* (23 set 2026): https://idc.com/resource-center/blog/saaspocalypse-catchy-title-flawed-premise
- Gartner, previsioni sull'agentic AI e "agent washing" (25 giu 2025): https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027

**Letteratura accademica (metadati verificati da pagine editore o indici, da aprire)**
- Teece (2010), *Long Range Planning* 43(2-3), 172-194.
- Mell e Grance (2011), NIST SP 800-145: https://csrc.nist.gov/pubs/sp/800/145/final
- Foss e Saebi (2017), *Journal of Management* 43(1), 200-227: https://journals.sagepub.com/doi/10.1177/0149206316675927
- Saebi, Lien e Foss (2017), *Long Range Planning* 50(5), 567-581 (business model adaptation): https://wrap.warwick.ac.uk/98519
- Teng, Ye e Martinez (2025), *Technovation* 143, 103191: https://www.sciencedirect.com/science/article/pii/S0166497225000239
- Kanbach et al. (2024), *Review of Managerial Science* 18(4), 1189-1220.
- Jorzik et al. (2024), *Journal of Business Research* 182.
- Heimburg, Schreieck e Wiesche (2025), *Journal of Management Information Systems* 42(2) (complementor delle piattaforme AI): https://jmis-web.org/articles/1711
- Saltan e Smolander (2021), *Information and Software Technology* 133 (pricing SaaS).
- Eisenhardt (1989); Yin (2018, 6a ed.); Bowen (2009, document analysis); Gibbert, Ruigrok e Wicki (2008, rigore dei case study).

**Casi**
- Figma Q2 2026: https://www.businesswire.com/news/home/20260805158853/en/Figma-Announces-Second-Quarter-2026-Financial-Results
- Figma, canvas aperto agli agenti: https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/
- Canva, connettore ChatGPT e server MCP: https://www.businesswire.com/news/home/20250626279168/en/Canva-Breaks-Ground-as-First-Design-Connector-for-OpenAIs-ChatGPT
- Canva, taglio della crescita per i costi AI: https://fortune.com/2026/08/12/canva-startup-growth-ai-costs-revenue-forecast-by-third/
- Notion, prezzi dei Custom Agents: https://www.notion.com/help/custom-agent-pricing
- Notion, chiusura di Mail: https://www.notion.com/help/notion-mail-inbox-is-going-away-what-to-do-next
- Adobe in ChatGPT: https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt

Le schede complete dei casi, con tutte le mosse datate e gli URL, sono in `appunti/dibattito_agenti/round1_C_casi.md`.
