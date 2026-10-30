# Round 1, Agente D: esaminatore critico e metodologo

Data: 30 ottobre 2026. Ruolo: membro esigente della commissione e metodologo della ricerca qualitativa. Obiettivo: rendere la tesi difendibile e lineare da eseguire con fonti pubbliche in circa 3 mesi (consegna indicativa 2 febbraio 2027, da verificare).

## 0. Verdetto in breve

La proposta di partenza è buona nell'intuizione (il perimetro "artifact-centric" è davvero il punto in cui l'agentic AI tocca il cuore della value proposition) ma oggi **non reggerebbe a tre domande della commissione**: (1) "che cosa rende agentic, e non solo generative, ciò che osserva?"; (2) "come distingue una feature da un cambiamento di business model?"; (3) "non ha costruito la definizione attorno a Canva?". Tutte e tre si risolvono con **strumenti operativi semplici** (una scala di agency, un codebook con soglia, un protocollo datato con boundary test su una lista esterna), non con più teoria.

La correzione più importante, e minima, sulla RQ: passare da **"How can ... evolve"** (normativa, risponderebbe un consulente) a **"How are ... evolving"** (empirica, risponde un multiple-case study), lasciando il "how can" alle implicazioni manageriali. È un affinamento, non uno stravolgimento.

---

## 1. Attacco alla proposta di partenza

Legenda gravità: **alta** = la commissione può contestare la validità del disegno; **media** = indebolisce la difesa ma è gestibile; **bassa** = va solo dichiarata.

### 1.1 "Artefatto digitale" è vago | gravità ALTA

**Problema.** Quasi ogni software produce un output digitale: un CRM produce report, Trello produce board, Slack produce messaggi. Il criterio (2) della definizione B ("l'output tipico di una sessione è un artefatto") non è osservabile da fonti pubbliche: nessuno studente può misurare "la sessione tipica". Un commissario può dire: "anche una pipeline di HubSpot è un artefatto digitale".

**Correzione minima.** Sostituire i criteri astratti con **due test osservabili da documenti**, entrambi necessari:
- **Test di auto-descrizione (T1):** nella descrizione ufficiale del prodotto (homepage, sezione "Business overview" di un filing, pagina "About") il verbo principale è *create, design, write, edit, build, produce* riferito a un oggetto (design, presentazione, documento, video, sito). Si annota la frase esatta con data e URL. Questo ancora la classificazione alla value proposition dichiarata dall'impresa, che è proprio il costrutto WHAT, e non al giudizio dello studente.
- **Test di portabilità (T2):** l'oggetto può uscire dal software come deliverable autonomo, cioè (a) si esporta in un formato standard (PDF, PPTX, DOCX, PNG, MP4, HTML, codice) **oppure** (b) si pubblica a un URL fruibile da chi non usa il software.

Un terzo test, solo di supporto e non escludente: **struttura del pricing (T3)**, cioè i piani sono differenziati da funzioni di creazione (editor, export, template, brand kit) e non da record gestiti (contatti, pipeline, ticket).

### 1.2 "Valore fuori dal software" è ambiguo | gravità MEDIA

**Problema.** Figma: il file di design ha valore soprattutto dentro Figma (handoff via Dev Mode); Notion: una pagina vive quasi sempre dentro Notion. Il criterio, se binario, escluderebbe Figma, che è uno dei casi più forti.

**Correzione minima.** Assorbirlo nel Test di portabilità (T2) e trasformarlo in **scala a tre livelli** (alto: il deliverable è consumato fuori, come una grafica Canva pubblicata su Instagram; medio: consumato anche fuori ma con dipendenza dal tool, come un prototipo Figma condiviso via link; basso: valore quasi solo interno, come un database Notion). Si esclude solo il livello "nessuna portabilità". Il livello diventa poi una **variabile di confronto** tra casi (ipotesi da esplorare: più bassa la portabilità, più il BM si sposta verso il workspace e meno verso l'output).

### 1.3 Circolarità tra definizione e casi | gravità ALTA

**Problema.** La definizione è nata da Canva e Figma e il boundary test usa marchi scelti dallo studente. È esattamente ciò che l'handoff stesso vieta ("non decidere la definizione per includere a posteriori i marchi preferiti"). In commissione: "lei ha definito la popolazione per farci stare i suoi casi".

**Correzione minima (circa 1 giornata di lavoro).**
1. **Congelare la definizione con una data** in un protocollo di 1 pagina (versione 1.0, data, criteri T1 T2 T3) prima di scegliere i casi finali.
2. **Boundary test su una lista non scelta dallo studente**: prendere i primi 3-4 prodotti per ciascuna di 6-8 categorie di una tassonomia commerciale (per esempio categorie G2 o Gartner Peer Insights: graphic design, presentation, website builder, video editing, writing assistant, whiteboard, note-taking/knowledge base, project management), con data dello snapshot. Sono 25-30 prodotti: si applicano T1 e T2 e si pubblica la tabella in appendice. Se il criterio discrimina (alcuni dentro, alcuni fuori, alcuni al confine) la definizione è dimostrata non circolare.
3. I casi si scelgono **dentro** l'insieme risultante, con criteri di variazione espliciti (vedi 1.12).

Nota: G2 e Gartner sono fonti commerciali, usate qui solo come *sampling frame* esterno, non come validazione della categoria.

### 1.4 Grammarly lavora sopra le app altrui | gravità MEDIA

**Problema.** Grammarly non ospita l'artefatto: l'email resta in Gmail, il documento in Google Docs. Inoltre dal rebrand dell'ottobre 2025 l'impresa si chiama Superhuman e comprende Grammarly, Coda, Superhuman Mail e la piattaforma di agenti Superhuman Go [verificato: comunicato del 29 ottobre 2025, https://www.businesswire.com/news/home/20251029236844/en ; dettagli del perimetro dei prodotti da verificare sul sito ufficiale].

**Perché però conviene tenerlo.** La definizione dice *create, edit or transform*: Grammarly trasforma testo, quindi passa T1. Ed è il caso in cui il cambiamento di business model è più visibile (rebrand, acquisizioni, piattaforma di agenti). Teoricamente è prezioso perché è **esso stesso un "overlay" che lavora sopra le app altrui**, cioè l'archetipo di ciò che gli agenti fanno agli editor.

**Correzione minima.** Tenerlo come **caso "overlay"** dichiarato, con una variabile in più nel confronto ("ospita l'artefatto: sì/no"). Unità di analisi: l'offerta Grammarly e la sua evoluzione dentro Superhuman (vedi 1.6). Se il tempo stringe, è il primo candidato da sostituire.

### 1.5 Notion ibrido | gravità MEDIA

**Problema.** Notion si posiziona come workspace connesso: documenti, ma anche database, wiki, project management. I suoi agenti agiscono spesso su record e attività (aggiornare database, smistare richieste) più che produrre un artefatto portabile. Rischia di contaminare la popolazione con logiche da systems of record.

**Perché conviene tenerlo.** Ha evidenze di ECONOMIC MODEL molto nitide e datate: AI inclusa nel piano Business con ritiro dell'add-on separato (riportato a maggio 2025), Notion Agent incluso senza crediti, Custom Agents a consumo con crediti acquistabili dal 4 maggio 2026 [parzialmente verificato: pagina ufficiale https://www.notion.com/help/custom-agent-pricing ; data di ritiro dell'add-on da fonti terze, da verificare].

**Correzione minima.** Includerlo **esplicitamente come caso di confine** (al massimo uno), codificato "portabilità bassa", per testare se le strategie cambiano quando l'artefatto è meno centrale. Questo trasforma la debolezza in un elemento di disegno (variazione teorica).

### 1.6 Unità di analisi: prodotto o azienda | gravità ALTA

**Problema.** I dati finanziari sono a livello di impresa (Figma, Wix), le feature a livello di prodotto, le acquisizioni a livello di gruppo (Canva con Leonardo.ai e Affinity; Superhuman con Coda). Confrontare il prodotto Grammarly con l'azienda Figma è incoerente.

**Correzione minima.** Una frase nel capitolo di metodo: **unità di analisi = l'offerta principale di creazione di artefatti dell'impresa (focal offering)**. Le mosse a livello di impresa (M&A, ristrutturazione dei piani, rebrand) si codificano **solo se toccano l'offerta focale**. I dati finanziari si usano come contesto descrittivo, **mai come misura di esito** della strategia (non si può attribuire causalità).

### 1.7 Incumbent e AI-native mescolati | gravità MEDIA

**Problema.** La RQ parla di "evolvere" un business model: presuppone un BM pre-esistente. Gamma, Lovable, Bolt non hanno un "prima" pre-AI da confrontare. Mescolarli rompe la logica prima/dopo.

**Correzione minima.** Criterio di campionamento: **imprese con offerta lanciata prima di novembre 2022** (lancio di ChatGPT) e BM pre-AI documentabile. Gli AI-native entrano solo nel capitolo di contesto come **pressione competitiva e benchmark** (per esempio come termine di confronto del pricing), non come casi.

### 1.8 Finestra temporale troppo recente | gravità ALTA

**Problema.** Le funzioni realmente agentic sono del 2025-2026: per esempio l'agente in Figma Design è passato in disponibilità generale il 6 ottobre 2026 e consuma crediti AI [fonte terza, da verificare su figma.com: https://fourweekmba.com/ai-figma-design-agent-leaves-beta-now-draws-ai-credits/]. Non si può osservare un BM "assestato" né misurare esiti economici. Un commissario dirà: "sta studiando annunci, non trasformazioni".

**Correzione minima, in quattro mosse.**
1. **RQ empirica e al presente progressivo** ("how are ... evolving"): l'oggetto sono le **risposte strategiche emergenti**, non gli esiti.
2. **Tre finestre di osservazione fisse:** T0 baseline pre-ChatGPT (metà 2022), T1 fase generative (fine 2024), T2 fase agentic (data di congelamento). Per i listini storici si usano gli snapshot del Wayback Machine (web.archive.org) delle pagine pricing e homepage.
3. **Data di congelamento dei dati** (proposta: 15 dicembre 2026). Eventi successivi solo in una nota finale.
4. **Status di ogni cambiamento:** annunciato / beta / disponibile (GA) / monetizzato. Solo GA e monetizzato contano come cambiamento implementato.

Nota a favore della fattibilità: i cambiamenti di ECONOMIC MODEL sono **già osservabili**. Per esempio Figma ha introdotto acquisti aggiuntivi di crediti AI (11 marzo 2026) e l'applicazione dei limiti sui posti Full (18 marzo 2026) [parzialmente verificato: forum ufficiale https://forum.figma.com/product-updates-3/ai-credits-update-new-purchasing-options-and-enforcement-on-march-18-51782 e blog https://www.figma.com/blog/updates-to-ai-credits-in-figma/]; Canva ha ristrutturato piani e "AI allowance" tra 2025 e 2026 [solo fonti terze, contrastanti, da verificare su canva.com/pricing e Wayback].

### 1.9 Generative e agentic non distinti operativamente | gravità ALTA

**Problema.** Senza criteri osservabili ogni pulsante "Magic" diventa "agentic". È la prima domanda che farà chiunque conosca il tema, ed è un punto su cui lo studente stesso ha chiesto rigore.

**Correzione minima.** Una **scala di agency a 5 livelli (A0-A4) con indicatori verificabili nella documentazione** (help center, developer docs, changelog), più un flag separato per l'accesso da agenti esterni. Vedi Tabella D nella sezione 2. Regola d'oro: **si codifica il livello che la documentazione dimostra, non l'etichetta usata dal marketing**. Ancoraggi: livelli di automazione di Parasuraman, Sheridan e Wickens (2000) e definizione di agentic AI da Abou Ali et al. (verificati, sezione 4).

### 1.10 Soglia tra nuova feature e business model innovation | gravità ALTA

**Problema.** Il brief lo vieta ma non dice come evitarlo. Senza soglia, la tesi diventa un catalogo di feature.

**Correzione minima.** Adottare la definizione di BMI di Foss e Saebi (2017): cambiamenti **nuovi e non banali** agli elementi chiave del BM e/o all'architettura che li collega [definizione da memoria, verificare la formulazione esatta nel testo]. Operativamente:
- **D0 feature:** nuova funzione AI senza cambiamenti osservabili in WHO, WHAT, HOW, ECONOMIC MODEL.
- **D1 cambiamento di BM incrementale:** cambia una dimensione (per esempio un aumento di prezzo motivato dall'AI, o un nuovo add-on).
- **D2 cambiamento di BM sostanziale (architetturale):** cambiano almeno due dimensioni **e le fonti collegano esplicitamente i cambiamenti** (per esempio lancio di un agente + nuova metrica a crediti + nuovo segmento di clienti).

Si chiama "business model innovation" solo D2. Tutto D0 resta documentato come product innovation, ed è un risultato, non uno scarto.

### 1.11 Affidabilità delle fonti pubbliche e del marketing | gravità MEDIA-ALTA

**Problema.** Comunicati, blog e interviste dei CEO sono costruiti per gli investitori e il mercato: descrivono intenzioni e narrazioni, non implementazioni.

**Correzione minima: gerarchia delle evidenze in tre livelli.**
- **Livello A (fatti):** documenti con valore legale o contrattuale o tecnico: filing SEC (Figma è quotata dal 2025), pagine pricing e termini, help center, documentazione API e developer, changelog. Servono a dire *che cosa esiste*.
- **Livello B (intenzioni e framing):** comunicati, blog ufficiali, earnings call, interviste pubbliche dei CEO. Servono a dire *perché l'impresa dice di farlo*.
- **Livello C (corroborazione):** stampa indipendente, report di analisti, tracker di pricing (per esempio pricingsaas.com, usagepricing.com), forum utenti, snapshot Wayback.

**Regola:** ogni cambiamento codificato come "implementato" richiede almeno una fonte di livello A, oppure due fonti indipendenti di livello B o C. Con sola fonte B si codifica "annunciato". Metodo di riferimento: document analysis (Bowen, 2009, verificato).

### 1.12 Bias di selezione | gravità MEDIA

**Problema.** Canva, Figma, Notion, Grammarly sono i vincitori più visibili: si rischia survivorship bias e di vedere solo risposte "ricche".

**Correzione minima.** Campionamento teorico (Eisenhardt, 1989) con **dimensioni di variazione dichiarate**: tipo di artefatto (visivo, testuale, interfaccia, sito, video), segmento (prevalenza B2C/prosumer vs B2B/enterprise), quotata vs privata (disponibilità di dati), portabilità (alta, media, bassa), ospita l'artefatto (sì/no). Più un vincolo: **almeno un caso con risposta limitata o tardiva**, se il boundary test ne fa emergere uno documentabile. Se non emerge, dichiararlo come limite.

### 1.13 Generalizzabilità | gravità MEDIA

**Problema.** 4-5 casi non generalizzano statisticamente.

**Correzione minima.** Rivendicare **generalizzazione analitica** (Yin): l'output sono proposizioni con **condizioni di confine esplicite** (software orizzontale, artifact-centric, incumbent, 2022-2026, fonti pubbliche). Non si dice "i SaaS fanno X", si dice "nei SaaS artifact-centric, quando l'agency raggiunge A3, osserviamo Y; proposizione da testare".

### 1.14 RQ normativa e causale | gravità MEDIA-ALTA

**Problema.** "How can ... evolve" chiede una prescrizione; un case study risponde a "how are". "In response to" presuppone causalità: alcune mosse (per esempio i crediti AI) possono rispondere ai **costi di inferenza della generative AI** o alla concorrenza degli AI-native, non all'agentic AI in sé.

**Correzione minima.** RQ al presente progressivo; codificare per ogni cambiamento la **motivazione dichiarata** dalle fonti (fonte B) e distinguere nel confronto se il cambiamento è associato a iniziative A1-A2 (generative) o A3-A4 (agentic). Questa distinzione diventa un risultato originale.

### 1.15 Titolo "productivity" vs perimetro ristretto | gravità MEDIA

**Problema.** Un commissario può obiettare che Canva non è "productivity software" nel senso comune (office, PM).

**Correzione minima.** Mantenere il titolo ma definire nel capitolo 2 la sotto-popolazione con un'etichetta trasparente (*artifact-centric productivity SaaS*), dichiarando che è una definizione operativa dell'autore e non una categoria consolidata. Eventualmente sottotitolo. Decisione da chiedere al relatore.

### 1.16 Le sei strategie come ipotesi: rischio di conferma | gravità MEDIA

**Problema.** Con sei caselle pronte, si tende a riempirle.

**Correzione minima.** Codifica in due passaggi: prima si codificano i cambiamenti con il codebook (sezione 2), **poi** si mappano sulle strategie, con una colonna obbligatoria "non mappabile / altro" e una riga "strategia non osservata". Le sei strategie restano *sensitizing concepts*.

### 1.17 Le acquisizioni come "settima strategia" | gravità BASSA

**Problema.** Acquisire una startup AI-native è un **mezzo** (acquisizione di risorse e competenze), non un fine strategico.

**Correzione minima.** Codificarle nel HOW (risorse e partnership) e verificare nel confronto **a quale strategia servono** (per esempio Wix con Base44 verso "da artefatto a outcome", cioè dall'editor di siti all'app costruita da prompt). Diventano un meccanismo trasversale, non una strategia.

### 1.18 Ancoraggi deboli | gravità BASSA

Moore (2011) è un white paper AIIM, non peer-reviewed; G2 e Gartner sono tassonomie commerciali; Shneiderman (2007) e Frich et al. (2019) parlano di creativity support tools in ricerca HCI (spesso prototipi di laboratorio), non di una categoria di mercato. Vanno usati come **supporto concettuale alla funzione "creazione"**, non come validazione della popolazione. Dichiararlo.

### Tabella riassuntiva

| # | Debolezza | Gravità | Correzione in una riga |
|---|---|---|---|
| 1.1 | "Artefatto digitale" vago | Alta | Test osservabili T1 auto-descrizione + T2 portabilità |
| 1.2 | "Valore fuori dal software" | Media | Portabilità su 3 livelli, usata come variabile |
| 1.3 | Circolarità | Alta | Protocollo datato + boundary test su lista esterna (G2/Gartner) |
| 1.4 | Grammarly overlay | Media | Caso "overlay" dichiarato, primo sostituibile |
| 1.5 | Notion ibrido | Media | Un solo caso di confine dichiarato |
| 1.6 | Prodotto vs azienda | Alta | Unità = offerta focale; finanziari solo contesto |
| 1.7 | Incumbent vs AI-native | Media | Solo incumbent pre-nov 2022; AI-native come benchmark |
| 1.8 | Finestra recente | Alta | "How are"; T0/T1/T2; data freeze; status annunciato/GA |
| 1.9 | Generative vs agentic | Alta | Scala A0-A4 + flag agenti esterni, da documentazione |
| 1.10 | Feature vs BMI | Alta | Soglia D0/D1/D2 (Foss e Saebi 2017) |
| 1.11 | Fonti di marketing | Media-alta | Gerarchia A/B/C e regola di corroborazione |
| 1.12 | Bias di selezione | Media | Campionamento teorico su dimensioni dichiarate |
| 1.13 | Generalizzabilità | Media | Generalizzazione analitica, condizioni di confine |
| 1.14 | RQ normativa/causale | Media-alta | Presente progressivo; motivazione dichiarata codificata |
| 1.15 | Titolo "productivity" | Media | Etichetta operativa trasparente, chiedere al relatore |
| 1.16 | Bias di conferma | Media | Codifica prima, mappatura dopo, colonna "altro" |
| 1.17 | Acquisizioni | Bassa | Meccanismo del HOW, non strategia |
| 1.18 | Ancoraggi non peer-reviewed | Bassa | Usarli come supporto, dichiararlo |

---

## 2. Procedura di analisi minima e ripetibile (1-2 pagine)

Principio: **ogni cella deve avere una data e una fonte**. Se manca la fonte, la cella resta vuota con "n.d.": non si inventa.

### Passo 0 | Protocollo (una volta sola, 1 pagina, in appendice)
Definizione e test T1-T3, unità di analisi, finestre T0/T1/T2, data di congelamento, gerarchia delle fonti, codebook (sotto). Versione e data. È anche il primo deliverable da mandare al relatore.

### Passo 1 | Registro eventi del caso (Tabella A)
Un foglio per caso, una riga per evento, ordinate per data.

| Data | Evento | Dimensione/i toccate | Fonte (URL) | Livello fonte A/B/C | Status (annunciato/beta/GA/monetizzato) | Livello agency (A0-A4) | Note e motivazione dichiarata |
|---|---|---|---|---|---|---|---|

Fonti tipiche per caso: pagina pricing e homepage via Wayback (T0 metà 2022, T1 fine 2024, T2 data freeze); help center e changelog; documentazione developer (API, MCP, connettori); filing e earnings call (se quotata); comunicati e blog; 2-3 interviste pubbliche del CEO; 1-2 fonti indipendenti.

### Passo 2 | Scheda prima/dopo WHO / WHAT / HOW / ECONOMIC MODEL (Tabella B)

| Dimensione | T0 (metà 2022) | T1 (fine 2024) | T2 (data freeze) | Codici di cambiamento | Profondità | Evidenze (rif. righe Tabella A) | Che cosa NON è cambiato |
|---|---|---|---|---|---|---|---|
| WHO | | | | | | | |
| WHAT | | | | | | | |
| HOW | | | | | | | |
| ECONOMIC MODEL | | | | | | | |

La colonna "che cosa non è cambiato" è obbligatoria: è la principale difesa contro la narrativa precostituita.

### Passo 3 | Codebook dei cambiamenti di BM (Tabella C)

| Dimensione | Codice | Che cosa conta (definizione operativa) | Evidenza tipica |
|---|---|---|---|
| WHO | W1 Nuovo segmento di utenti | Utenti prima non serviti resi target esplicito (non designer, sviluppatori, team non tecnici) | Pagine dedicate, piani nuovi, comunicazione |
| WHO | W2 Nuovo acquirente | Passaggio o estensione a buyer diverso (IT enterprise, procurement) | Piani enterprise, controlli admin, sales motion |
| WHO | W3 Clienti o canali non umani | Agenti o assistenti AI di terzi come canale o "utente" (connettori, app directory, MCP) | Documentazione connettori/API, annunci di partnership |
| WHAT | V1 Da strumento a esecuzione delegata | La proposta passa da "ti aiuto a fare" a "lo faccio per te" | Homepage T0 vs T2, descrizione nei filing |
| WHAT | V2 Da artefatto a outcome | Dal singolo artefatto a un workflow o risultato completo (campagna, sito pubblicato, app funzionante) | Nuove offerte, bundle, casi d'uso dichiarati |
| WHAT | V3 Output contestuale | Output personalizzato con asset del cliente (brand kit, memoria, dati) | Funzioni di contesto, governance dati |
| WHAT | V4 Affidabilità e garanzie | Controlli, approvazioni, indennizzi IP, sicurezza come parte dell'offerta | Pagine trust, termini, piani enterprise |
| HOW | H1 Modelli | Modelli propri, partnership con fornitori di modelli | Comunicati, docs |
| HOW | H2 Accesso per agenti | API, MCP server, connettori per agenti esterni | Docs developer, changelog |
| HOW | H3 Acquisizioni AI | Acquisizione di imprese o team AI-native | Comunicati, filing |
| HOW | H4 Asset e dati | Uso di template, librerie, dati cliente come risorsa per l'AI | Docs, termini d'uso dei dati |
| ECON | E1 Livello di prezzo | Variazione di prezzo motivata dall'AI | Pricing T0/T1/T2, comunicazioni ai clienti |
| ECON | E2 Nuova metrica | Crediti, consumo, chiamate API accanto o al posto dei posti (seat) | Pricing, help center |
| ECON | E3 Add-on o tier AI | Offerta AI venduta separatamente | Pricing |
| ECON | E4 Bundling | AI inclusa nei piani esistenti (ritiro dell'add-on) | Pricing, annunci |
| ECON | E5 Ristrutturazione dei posti | Nuovi tipi di seat, piani rinominati o fusi | Pricing, help center |
| ECON | E6 Outcome-based | Prezzo legato al risultato | Pricing, termini |

Per la sotto-codifica del pricing ci si può appoggiare ai sei parametri di Lehmann e Buxmann (2009) e alla tassonomia di Saltan e Smolander (2021), entrambi verificati.

**Profondità (soglia feature vs BMI):** D0 feature; D1 una dimensione; D2 almeno due dimensioni con collegamento documentato. Solo D2 si chiama business model innovation.

### Passo 4 | Scala di agency delle iniziative AI (Tabella D)

Indicatori osservabili nella documentazione: (i) l'input è un obiettivo e non un contenuto da generare; (ii) l'AI scompone in più passi; (iii) l'AI usa strumenti o azioni del prodotto (modifica livelli, crea pagine, applica il brand kit, pubblica); (iv) itera o si autocorregge; (v) procede senza conferma umana a ogni passo; (vi) gira in background, su trigger o pianificazione.

| Livello | Nome | Regola di codifica | Esempio tipo (da verificare caso per caso) |
|---|---|---|---|
| A0 | Nessuna AI | Nessuna funzione AI | |
| A1 | Generative puntuale | Prompt e un output, l'utente integra (genera immagine, riscrivi frase) | Text-to-image, rewrite |
| A2 | Generative estesa o assistita | Genera un artefatto completo o modifica via chat, ma ogni passo è guidato e approvato dall'utente | Bozza di presentazione intera da prompt |
| A3 | Agentic nel prodotto | Indicatori i, ii, iii e almeno uno tra iv e v | Agente che esegue una sequenza di modifiche sul file |
| A4 | Agentic delegata | A3 più indicatore vi (asincrona, su trigger, persistente) | Agenti personalizzati che girano su trigger |
| Flag X | Accessibile ad agenti esterni | Il prodotto è operabile da agenti di terzi via API, MCP o connettori; si registra la data | Connettore per assistenti AI di terzi |

Si codifica **il livello massimo disponibile in GA a ciascuna finestra** (T1, T2). Il flag X serve a separare la strategia "AI dentro l'editor" dalla strategia "editor dentro l'agente altrui", che è lo snodo concettuale n. 6 dell'handoff.

### Passo 5 | Mappatura sulle strategie (dopo la codifica)
Per ogni caso: quali delle sei strategie ipotizzate sono **osservate** (con codici ed evidenze), quali **annunciate**, quali **non osservate**, e quali cambiamenti **non mappabili** (candidati a nuove strategie).

### Passo 6 | Tabella di confronto tra casi (Tabella E)

| Caso | Artefatto | Portabilità | Ospita l'artefatto | Segmento prevalente | Agency max T1 / T2 | Flag X (data) | Codici WHO | Codici WHAT | Codici HOW | Codici ECON | Profondità | Strategie osservate | Che cosa non è cambiato | Qualità evidenze (A/B/C) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

Da qui si leggono i pattern (per esempio: i casi con A3-A4 hanno anche E2? i casi con flag X hanno W3? la portabilità bassa si associa a V2 o a E4?). Ogni pattern diventa una **proposizione** con le sue condizioni di confine.

**Carico stimato:** 3-4 giornate di lavoro per caso, quindi circa una settimana di calendario per caso lavorando a tempo parziale. Con 5 casi, 5-6 settimane; con 4 casi si guadagna una settimana di margine.

---

## 3. Le interviste: necessarie, utili o superflue?

**Giudizio: utili ma opzionali. Non necessarie.**

Perché non necessarie:
- La RQ riguarda **cambiamenti di business model osservabili** (prezzi, piani, offerta, architettura di accesso, segmenti dichiarati): sono documentati in fonti pubbliche, spesso con valore contrattuale (livello A), e sono **datati**, cosa che un'intervista non garantisce.
- I dipendenti di Canva, Figma, Notion o Superhuman sono difficili da raggiungere senza contatti e vincolati da riservatezza: si otterrebbero opinioni personali, non dati sul BM.
- Esistono già "interviste secondarie" di qualità: earnings call (Figma), interviste pubbliche e podcast dei CEO, keynote di prodotto. Vanno trattate come fonte di livello B.

Quando sarebbero utili, e come farle senza costi eccessivi:
- **Scopo:** non raccogliere dati sui casi, ma **validare il framework finale** (expert validation): le strategie e le proposizioni hanno senso per chi decide prezzi e prodotto?
- **Quante:** 3-5 conversazioni semi-strutturate da 30 minuti.
- **A chi:** product manager o pricing manager di SaaS (anche non dei casi), consulenti di pricing SaaS, responsabili design ops o acquisti software in aziende clienti. A Berlino, via LinkedIn, sono profili relativamente accessibili; anche Arbio potrebbe offrire un primo contatto con fornitori SaaS.
- **Quando:** solo dopo la tabella di confronto (settimana 9-10), con una traccia di 5 domande. Se non si ottengono, la tesi non perde validità: si dichiara come limite.

Da chiedere al relatore: se per una tesi ITEM richiede **dati primari** come requisito. Se sì, la soluzione minima è quella sopra.

---

## 4. Verifica degli ancoraggi accademici

Nota di metodo: le verifiche sono state fatte con ricerca web; l'accesso diretto a Crossref e doi.org non era disponibile da questa sessione (host bloccato dalla rete), quindi i DOI marcati "verificato" risultano da pagine editore, repository o indici (IDEAS/RePEc, ACM DL, ScienceDirect) e vanno comunque cliccati una volta dallo studente.

### 4.1 Ancoraggi citati nell'handoff e nel brief

| Riferimento | Esito della verifica | Uso e cautele |
|---|---|---|
| **Teece, D. J. (2010). Business Models, Business Strategy and Innovation. *Long Range Planning*, 43(2-3), 172-194.** DOI 10.1016/j.lrp.2009.07.003 | **Metadati verificati** (volume, numero, pagine): https://haas.berkeley.edu/faculty/teece-david/ e https://skalierung.smart-city-dialog.de/quellen/teece-2010 . DOI non visualizzato nei risultati: da memoria, coerente con il formato Elsevier; verificare su doi.org | Fondamento di creazione, delivery e cattura del valore; mappa bene WHAT/HOW/ECONOMIC MODEL. Nessuna cautela particolare |
| **Mell, P., & Grance, T. (2011). *The NIST Definition of Cloud Computing* (NIST SP 800-145).** DOI 10.6028/NIST.SP.800-145 | **Verificato**: https://csrc.nist.gov/pubs/sp/800/145/final ; PDF https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf (settembre 2011) | Definisce SaaS come modello di servizio, nulla sul pricing. Punto utile da controllare sul testo: la definizione di SaaS cita l'accesso tramite *thin client* **o program interface** [da memoria, verificare a p. 2-3]. Se confermato, è un argomento elegante: l'accesso via API, quindi anche da agenti, è già dentro la definizione di SaaS. Cautela: prodotti con client desktop (Photoshop) sono zona grigia |
| **Shneiderman, B. (2007). Creativity support tools: Accelerating discovery and innovation. *Communications of the ACM*, 50(12), 20-32.** DOI 10.1145/1323688.1323689 | **Verificato**: https://cacm.acm.org/magazines/2007/12/5511-creativity-support-tools-accelerating-discovery-and-innovation/fulltext ; PDF https://www.cs.umd.edu/~ben/papers/Shneiderman2007Creativity.pdf | Supporta la funzione "creazione" come categoria concettuale. Cautela: parla di creatività e scoperta scientifica, non di mercato SaaS |
| **Frich, J., MacDonald Vermeulen, L., Remy, C., Biskjaer, M. M., & Dalsgaard, P. (2019). Mapping the Landscape of Creativity Support Tools in HCI. *Proceedings of CHI 2019*, Paper 389, 1-18.** DOI 10.1145/3290605.3300619 | **Verificato**: https://dl.acm.org/doi/10.1145/3290605.3300619 ; https://pure.au.dk/portal/en/publications/mapping-the-landscape-of-creativity-support-tools-in-hci/ | Rassegna di 143 articoli sui CST. Utile per mostrare che la categoria esiste in HCI. Cautela: i CST studiati sono spesso prototipi di ricerca, non prodotti commerciali |
| **Moore, G. (2011). *Systems of Engagement and the Future of Enterprise IT: A Sea Change in Enterprise IT*. AIIM white paper.** | **Esistenza verificata**: https://info.aiim.org/systems-of-engagement-and-the-future-of-enterprise-it e annuncio del 19 gennaio 2011 https://info.aiim.org/aiim-blog/newaiimo/2011/01/19/new-geoffrey-moore-white-paper-on-future-of-enterprise-it . PDF non letto | **Non peer-reviewed.** Utile per la distinzione systems of record / engagement, da usare come cornice pratica. Non regge da solo l'argomento del perimetro |
| **Teng, D., Ye, C., & Martinez, V. (2025). Gen-AI's effects on new value propositions in business model innovation: Evidence from information technology industry. *Technovation*, 143, 103191.** DOI 10.1016/j.technovation.2025.103191 | **Verificato** (titolo, autori, volume, numero articolo, DOI): https://www.sciencedirect.com/science/article/pii/S0166497225000239 ; https://ideas.repec.org/a/eee/techno/v143y2025ics0166497225000239.html ; https://www.repository.cam.ac.uk/items/4337c60c-4046-45fa-9482-c5d16d909fcd | **Il più pertinente di tutti.** Studio qualitativo; identifica cinque approcci di nuove value proposition (tra cui *content creation* e *AI agents*); secondo gli highlights, AI agents e detector di contenuti AI sono BMI radicale, gli altri incrementale. Permette di posizionare la tesi: "Teng et al. trovano gli agenti come BMI radicale nell'IT; la tesi verifica come si manifesta in una popolazione specifica". Leggere il full text (repository Cambridge) per campione e metodo |
| **Abou Ali, M., Dornaika, F., & Charafeddine, J. Agentic AI: A comprehensive survey of architectures, applications, and future directions. *Artificial Intelligence Review*.** DOI 10.1007/s10462-025-11422-4 | **Verificato** (autori, titolo, DOI): https://ekoizpen-zientifikoa.ehu.eus/documentos/692222ce621d0957276df0ab?lang=en ; preprint https://arxiv.org/abs/2510.25445v1 . **Attenzione all'anno**: online 2025, ma un repository lo assegna a vol. 59, n. 1, 2026. Citare la versione di record con volume (verificare numero d'articolo sul sito Springer) | Fonte tecnica per definire agentic AI e distinguerla dalla generative. Cautela: è una survey tecnica, con un inquadramento che distingue paradigmi simbolici e neurali; per la tesi servono solo la definizione e le capacità (pianificazione, uso di strumenti, iterazione) |
| **Eisenhardt, K. M. (1989). Building Theories from Case Study Research. *Academy of Management Review*, 14(4), 532-550.** | **Verificato**: https://www.jstor.org/stable/258557 (via https://www.uio.no/studier/emner/matnat/ifi/INF5571/v15/timeplan/ar-docs/eisenhardt-1989.pdf ). DOI 10.5465/amr.1989.4308385 da memoria, da verificare | Campionamento teorico, analisi within-case e cross-case, proposizioni. Pilastro del capitolo di metodo |
| **Yin, R. K. (2018). *Case Study Research and Applications: Design and Methods* (6th ed.). SAGE.** ISBN 9781506336169 | **Verificato**: https://www.sagepub.com/en-us/cab/case-study-research-and-applications/book250150 (la data editoriale appare come ottobre 2017, i cataloghi indicano 2018) | Protocollo, database del caso, catena di evidenze, generalizzazione analitica. Nota: dalla 6a edizione il titolo è cambiato rispetto a *Case Study Research: Design and Methods* |

Fuori dalla lista ma nell'handoff, **Bain**: la pagina ufficiale "Will Agentic AI Disrupt SaaS?" (https://www.bain.com/insights/will-ai-disrupt-saas/) esiste e usa una matrice 2x2 con quadranti chiamati *core strongholds, open doors, gold mines, battlegrounds*; almeno l'etichetta "AI outshines SaaS (high user automation, low AI penetration)" associata a *gold mines* compare negli estratti. Le altre corrispondenze tra etichette e quadranti sono **plausibili ma da verificare sul testo**. Esiste anche un seguito Bain 2026 sull'opportunità da 100 miliardi nel lavoro di coordinamento tra sistemi (https://www.bain.com/it/insights/100-billion-saas-opportunity-hiding-in-cross-system-labor100-billion-saas-opportunity-hiding-in-cross-system-labor-technology-report-2026/), probabilmente il riferimento "maggio 2026" dell'handoff: **mese non verificato**.

### 4.2 Altri lavori peer-reviewed pertinenti (verificati)

**Nucleo (5 lavori):**

1. **Foss, N. J., & Saebi, T. (2017). Fifteen Years of Research on Business Model Innovation: How Far Have We Come, and Where Should We Go? *Journal of Management*, 43(1), 200-227.** DOI 10.1177/0149206316675927. [verificato: https://journals.sagepub.com/doi/10.1177/0149206316675927 ; versione accettata open https://wrap.warwick.ac.uk/98514/]
   *Perché serve:* dà la definizione di BMI su cui costruire la soglia feature/BMI (D0/D1/D2) e la critica sulla scarsa chiarezza del costrutto, che giustifica un codebook operativo. La formulazione esatta della definizione va presa dal testo.

2. **Saebi, T., Lien, L., & Foss, N. J. (2017). What Drives Business Model Adaptation? The Impact of Opportunities, Threats and Strategic Orientation. *Long Range Planning*, 50(5), 567-581.** DOI 10.1016/j.lrp.2016.06.006. [verificato: https://wrap.warwick.ac.uk/98519 ; https://research.cbs.dk/da/publications/what-drives-business-model-adaptation-the-impact-of-opportunities/]
   *Perché serve:* inquadra teoricamente la RQ come **business model adaptation** di incumbent a un cambiamento ambientale (minacce vs opportunità). È la lente giusta per "evolve ... in response to", più precisa del generico BMI. Online 2016, fascicolo 2017.

3. **Kanbach, D. K., Heiduk, L., Blueher, G., Schreiter, M., & Lahmann, A. (2024). The GenAI is out of the bottle: generative artificial intelligence from a business model innovation perspective. *Review of Managerial Science*, 18(4), 1189-1220.** DOI 10.1007/s11846-023-00696-z. [verificato: https://ideas.repec.org/a/spr/rvmgts/v18y2024i4d10.1007_s11846-023-00696-z.html ; https://www.semanticscholar.org/paper/df558a3daf22955fe42f4bbeb1415f6607b67567]
   *Perché serve:* sei proposizioni sull'impatto della generative AI sul BM. È il **riferimento "generative"** rispetto a cui mostrare che cosa aggiunge l'agentic. Nota: l'ordine degli autori varia tra fonti (nel CV di Kanbach compare Blüher primo autore e anno 2023, data online); usare l'ordine della pagina editore.

4. **Jorzik, P., Klein, S. P., Kanbach, D. K., & Kraus, S. (2024). AI-driven business model innovation: A systematic review and research agenda. *Journal of Business Research*, 182, 114764.** DOI 10.1016/j.jbusres.2024.114764. [verificato: https://ideas.repec.org/a/eee/jbrese/v182y2024ics0148296324002686.html ; iniziali dei nomi da memoria, verificare]
   *Perché serve:* rassegna di 180 articoli su AI e BMI; serve per costruire il gap nel capitolo 3 senza fare una revisione sistematica in proprio.

5. **Saltan, A., & Smolander, K. (2021). Bridging the state-of-the-art and the state-of-the-practice of SaaS pricing: A multivocal literature review. *Information and Software Technology*, 133, 106510.** [verificato: https://publications.hse.ru/en/articles/434379757 ; https://lutpub.lut.fi/handle/10024/163342 . DOI non visualizzato: da cercare]
   *Perché serve:* tassonomia dei concetti di pricing SaaS (387 fonti accademiche e grigie) per codificare l'ECONOMIC MODEL senza inventare categorie.

**Complementari (usare se servono):**

6. **Lehmann, S., & Buxmann, P. (2009). Pricing Strategies of Software Vendors. *Business & Information Systems Engineering*, 1(6), 452-462.** [verificato: https://aisel.aisnet.org/bise/vol1/iss6/5 ; DOI non verificato] Sei parametri di pricing del software (formazione del prezzo, struttura dei pagamenti, base di calcolo, discriminazione, bundling, pricing dinamico): sottocodici pronti per E1-E6.
7. **Åström, J., Reim, W., & Parida, V. (2022). Value creation and value capture for AI business model innovation: a three-phase process framework. *Review of Managerial Science*, 16(7), 2111-2133.** DOI 10.1007/s11846-022-00521-z. [verificato: https://link.springer.com/article/10.1007/s11846-022-00521-z ; https://ideas.repec.org/a/spr/rvmgts/v16y2022i7d10.1007_s11846-022-00521-z.html] Cattura del valore per fornitori di AI: utile per discutere crediti e metriche d'uso.

**Metodologici (per il capitolo 4):**

8. **Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics, Part A*, 30(3), 286-297.** DOI 10.1109/3468.844354. [verificato tramite record bibliotecari: https://vufind.lboro.ac.uk/PrimoRecord/cdi_ieee_primary_844354] Ancora la scala A0-A4: l'automazione è un continuum su quattro funzioni (acquisizione e analisi dell'informazione, selezione della decisione, esecuzione dell'azione). La versione a 10 livelli citata altrove va controllata sul testo.
9. **Bowen, G. A. (2009). Document Analysis as a Qualitative Research Method. *Qualitative Research Journal*, 9(2), 27-40.** DOI 10.3316/QRJ0902027. [verificato: https://www.doi.org/10.3316/QRJ0902027] Legittima la document analysis come metodo principale, con vantaggi e limiti: esattamente il disegno senza interviste.
10. **Gibbert, M., Ruigrok, W., & Wicki, B. (2008). What passes as a rigorous case study? *Strategic Management Journal*, 29(13), 1465-1474.** DOI 10.1002/smj.722. [verificato: https://ideas.repec.org/a/bla/stratm/v29y2008i13p1465-1474.html] Validità di costrutto, interna, esterna e affidabilità: struttura pronta per la sezione "rigore e limiti".

**Lacuna osservata.** Due ricerche mirate non hanno trovato lavori peer-reviewed specifici su **agentic AI e business model del SaaS** (solo preprint arXiv e report di consulenza). È un'assenza di evidenza da due ricerche, non una revisione sistematica, ma sostiene l'argomento di originalità: la letteratura peer-reviewed copre generative AI e BMI (Kanbach, Jorzik, Teng), mentre l'agentic nel SaaS è ancora terreno di report (Bain, IDC).

**Non verificati in questa sessione:** Parolini (*Business Planning*), Bahles et al. (2022), Williams e Schubert (2024), IDC Newmark (2026, serve il file dello studente). Non citarli senza controllo.

---

## 5. Le 5 domande più probabili della commissione

**D1. "Che cosa c'è di agentic, e non solo generative, in ciò che ha osservato? Molte di queste sono funzioni di generazione."**
Risposta permessa dal disegno: "Ho codificato ogni iniziativa su una scala A0-A4 con sei indicatori verificabili nella documentazione, non nelle dichiarazioni di marketing (Tabella D). Ecco la distribuzione per caso e finestra: la maggior parte delle iniziative 2023-2024 è A1-A2; A3-A4 compaiono dal 2025. Le conclusioni distinguono i cambiamenti associati a iniziative generative da quelli associati a iniziative agentic, e in alcuni casi mostrano che il cambiamento di pricing precede l'agentic e risponde ai costi della generative."

**D2. "Come fa a dire che sono cambiamenti di business model e non semplici nuove funzioni?"**
Risposta: "Uso la definizione di BMI di Foss e Saebi (2017) resa operativa: D0 feature, D1 cambiamento in una dimensione, D2 cambiamenti collegati in almeno due dimensioni. Chiamo innovazione di business model solo D2. Ecco le iniziative che ho classificato D0: sono la maggioranza, e questo è già un risultato."

**D3. "La sua popolazione sembra costruita attorno a Canva. Perché questi casi e non altri?"**
Risposta: "La definizione è stata fissata in un protocollo datato prima della scelta dei casi, con due test osservabili. L'ho applicata a una lista esterna di 25-30 prodotti presi da categorie commerciali (appendice): alcuni entrano, altri no, altri sono di confine. I casi sono stati scelti dentro la popolazione per variare tipo di artefatto, segmento, portabilità e ospitalità dell'artefatto, includendo un caso di confine (Notion) e un caso overlay (Grammarly)."

**D4. "È troppo presto: con 12-18 mesi di funzioni agentic e fonti aziendali, come può parlare di evoluzione?"**
Risposta: "La domanda riguarda le risposte strategiche emergenti, non gli esiti. Ho tre finestre fisse (2022, 2024, data di congelamento), uno status per ogni cambiamento (annunciato, beta, GA, monetizzato) e una gerarchia delle fonti: nessun cambiamento è 'implementato' senza una fonte contrattuale o tecnica o due fonti indipendenti. Le conclusioni sono proposizioni con condizioni di confine, da testare in ricerche successive."

**D5. "Qual è il suo contributo rispetto a Bain, IDC e ai report di consulenza? E che cosa si può generalizzare?"**
Risposta: "Bain e IDC ragionano sul SaaS enterprise e sui systems of record. Io studio la popolazione in cui l'agente tocca direttamente la value proposition, cioè la produzione dell'artefatto. Il contributo è triplice: una distinzione operativa generative/agentic applicata al business model; una mappatura empirica, datata e verificabile, dei cambiamenti in WHO/WHAT/HOW/ECONOMIC MODEL; un insieme di strategie con le condizioni in cui compaiono. In dialogo con Teng et al. (2025), che indicano gli agenti come innovazione radicale nell'IT, mostro come e quanto questo si verifica in imprese incumbent. La generalizzazione è analitica (Yin), non statistica."

(Domanda di riserva: "Perché WHO/WHAT/HOW/ECONOMIC MODEL e non il Business Model Canvas?" Risposta: è il framework del corso, e si mappa sulle tre funzioni di Teece (2010): creazione e delivery del valore (WHAT, HOW), cattura (ECONOMIC MODEL), più il WHO esplicito.)

---

## 6. Nota di calendario (solo indicativa)

Con consegna il 2 febbraio 2027 (da verificare): settimana 1 protocollo e boundary test (da mandare al relatore); settimane 2-3 capitoli 2 e 3 in forma essenziale; settimane 4-8 casi (uno a settimana, data freeze 15 dicembre); settimana 9 confronto tra casi; settimane 10-11 discussione, introduzione, conclusioni; settimana 12 revisione. Le feste di fine anno tolgono circa una settimana: con 5 casi il margine è zero, con 4 casi c'è una settimana di respiro.

---

## Raccomandazione in 5 righe

1. **RQ:** *How are productivity SaaS incumbents whose core offering is the creation of digital artifacts evolving their business models (who, what, how, economic model) as AI moves from generative assistance to agentic execution?* Sotto-domande: quali iniziative sono agentic e non solo generative (scala A0-A4); quali dimensioni del BM cambiano e quanto (D0-D2); quali pattern strategici emergono e a quali condizioni. Il "how can" va nelle implicazioni manageriali.
2. **Perimetro:** SaaS orizzontali artifact-centric definiti da due test osservabili (auto-descrizione + portabilità), solo incumbent con offerta anteriore a novembre 2022, finestre T0 2022 / T1 2024 / T2 data freeze 15 dicembre 2026, unità di analisi = offerta focale, fonti pubbliche gerarchizzate A/B/C.
3. **Casi suggeriti (4-5):** Canva, Figma (quotata, filing), Grammarly/Superhuman (caso overlay), Notion (caso di confine dichiarato), più uno tra Wix (quotata, siti, Base44) e Descript (video), da scegliere dopo il boundary test; riserva per un caso a risposta limitata.
4. **Strategie attese (da verificare, non da confermare):** trasformazione AI-native del prodotto in tutti i casi; apertura ad agenti esterni (flag X, connettori e MCP); ridisegno della monetizzazione (crediti, allowance, bundling); da artefatto a outcome nei casi siti/app; acquisizioni come meccanismo del HOW; contesto proprietario e governance come complementari.
5. **Da chiedere al prof:** (a) va bene "how are" empirico con implicazioni prescrittive? (b) perimetro artifact-centric e titolo con "productivity": serve un sottotitolo? (c) un multiple-case documentale senza interviste è sufficiente, o servono 3-5 interviste di validazione? (d) 4 o 5 casi, con un caso di confine? (e) conferma della fonte del framework WHO/WHAT/HOW/ECONOMIC MODEL e consegna del protocollo con boundary test entro la prima settimana.
