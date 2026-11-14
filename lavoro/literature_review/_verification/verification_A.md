# Verification A: Crossref check of BM, ST, PL, PR source registers

Method: Crossref REST API by DOI where given, else bibliographic query (rows=3, accepted at title similarity >= 0.85); Open Library for books. Status values: ok, corrected (row differs from Crossref on a point where Crossref is clearly authoritative: volume, pages, year off by one, small title variant), flagged (row and Crossref disagree and the right value cannot be decided automatically), not_found, not_applicable (type not PR/BOOK/CONF/PRE, or PRE without DOI). Stream files were not modified; corrections are proposals in the corrections column. Rows are matched automatically, so each flagged or corrected item needs a human glance.

## 1. Counts by stream and status

| Stream | Rows | ok | corrected | flagged | not_found | not_applicable | content_check_needed=yes | duplicates |
|---|---|---|---|---|---|---|---|---|
| BM | 92 | 85 | 1 | 3 | 2 | 1 | 48 | 34 |
| ST | 82 | 61 | 3 | 1 | 0 | 17 | 33 | 6 |
| PL | 64 | 54 | 1 | 3 | 0 | 6 | 23 | 14 |
| PR | 66 | 27 | 2 | 1 | 1 | 35 | 16 | 4 |
| Total | 304 | 227 | 7 | 8 | 3 | 59 | 120 | 58 |

## 2. NOT FOUND (possible hallucination or wrong reference)

- BM088 (2004) Cusumano, M. A.: The business of software: What every manager, programmer, and entrepreneur must know to th | n/a (ISBN not verified) | verification: [M: book metadata from memory; not verif | Book not found in Crossref or Open Library by title search; verification is [M]. Treat as unverified until ISBN/publisher page is checked.
- BM092 (2021) Parolini, C.: Business planning: Turning an idea into a reality | https://iris.unimore.it/handle/11380/1295186 | verification: [V-open per academic_register FR01, IRIS | Not in Crossref/Open Library; row cites an institutional repository handle (IRIS) copied from academic_register FR01. Check the handle.
- PR017 (2014) Kumar, V.: Making 'freemium' work | n/a | verification: [M] | HBR article (2014) not found in Crossref; verification is [M]. Unconfirmed; check HBR site.

## 3. FLAGGED (row and Crossref disagree, undecided)

- BM087 (2020) Iansiti, M., & Lakhani, K. R.: Competing in the age of AI: Strategy and leadership when algorithms and networks run the w | Crossref hit is a book review, not the book; the proposed year change to 2021 is NOT supported (HBR Press book is 2020); not confirmed here.
- BM090 (2010) Osterwalder, A., & Pigneur, Y.: Business model generation: A handbook for visionaries, game changers, and challengers | Crossref hit is a book review (2014), not the book; book itself not in Crossref. Not confirmed here; ISBN in row not checked.
- BM091 (1997) Christensen, C. M.: The innovator's dilemma: When new technologies cause great firms to fail | Crossref hit is a book review (2005), not the book; book itself not in Crossref. Not confirmed here; ISBN in row not checked.
- ST053 (2009) Puranam, P., Singh, H., & Chaudhuri, S.: Integrating acquired capabilities: When structural integration is (un)necessary | year 2009 vs Crossref [2005]
- PL010 (2003) West, J.: How open is open enough? Melding proprietary and open source platform strategies | Crossref title "How open is open enough?" lacks subtitle; likely same article, check subtitle.
- PL021 (2014) Tiwana, A.: Platform ecosystems: aligning architecture, governance, and strategy (chapters Platform Ar | DOI/Crossref record is a chapter ("Platform Architecture"), not the whole book; row title lists chapters; check scope.
- PL061 (2026) Loh, J.; Elsas-Nicolle, A.: Platform competition and strategic trade-offs for complementors | title differs (sim 0.69): Crossref "Platform competition and strategic trade‐offs for complementors: Heterogeneous reactions to the entry of a new platform"; author surnames not in row: Elsas‐Nicolle
- PR001 (1999) Shapiro, C.; Varian, H. R.: Information rules: A strategic guide to the network economy | Crossref hit is a book review/record with garbled title; book itself not confirmed in Crossref.

## 4. Corrections (proposed)

- BM026 (2014) Khanagha, S.; Volberda, H.; Sidhu, J.; Oshri, I.: Management Innovation and Adoption of Emerging Technologies: The Case of Cloud Computing | year 2014 vs Crossref [2013]
- ST005 (2021) Raisch, S., & Krakowski, S.: Artificial intelligence and management: The automation-augmentation paradox | year 2021 vs Crossref [2020]
- ST007 (2024) Korinek, A., & Vipra, J.: Concentrating intelligence: Scaling and market structure in artificial intelligence (NBER  | title differs (sim 0.87): Crossref "Concentrating Intelligence: Scaling and Market Structure in Artificial Intelligence"
- ST059 (2013) Coyle, J. F., & Polsky, G. D.: Acqui-hiring | year 2013 vs Crossref [2012]
- PL052 (2025) Su, D.; Zhao, Y.; Hou, X.; Wang, S.: GPT Store mining and analysis | pages Crossref 344-354 vs row venue
- PR020 (2009) Harmon, R.; Demirkan, H.; Hefley, B.; Moreno, N.: Pricing strategies for information technology services: A value-based approach | pages Crossref 1-10 vs row venue
- PR031 (2025) Bergemann, D.; Bonatti, A.; Smolin, A.: The economics of large language models: Token allocation, fine-tuning, and optimal pricing | pages Crossref 786-786 vs row venue

## 5. Rows with a Crossref DOI different from the row, or matched without DOI


## 6. Duplicate groups (master first)

- master ST071; duplicates: BM019 | Competing with dual business models: A contingency approach
- master PR028; duplicates: BM021 | Value creation and value capture alignment in business model innovation: A process view on
- master ST020; duplicates: BM029 | Unraveling the process of creative destruction: Complementary assets and incumbent surviva
- master ST070; duplicates: BM043 | Organizational ambidexterity: Antecedents, outcomes, and moderators
- master ST021; duplicates: BM045 | Dynamic and integrative capabilities for profiting from innovation in digital platform-bas
- master ST024; duplicates: BM055, PL038 | The role of artificial intelligence and data network effects for creating user value
- master ST008; duplicates: BM056 | Innovation and design in the age of artificial intelligence
- master PR013; duplicates: BM064 | Converting freemium customers from free to premium: The role of the perceived premium fit 
- master PR018; duplicates: BM067 | Pricing strategies of software vendors
- master PL001; duplicates: BM075 | Industry platforms and ecosystem innovation
- master PL008; duplicates: BM076 | Platform competition: a systematic and interdisciplinary review of the literature
- master PL017; duplicates: ST042, BM077 | Competing with complementors: an empirical look at Amazon.com
- master PL019; duplicates: BM078 | Does platform owner's entry crowd out innovation? Evidence from Google Photos
- master ST043; duplicates: PL018, BM079 | Threat of platform-owner entry and complementor responses: Evidence from the mobile app ma
- master ST041; duplicates: PL041, BM080 | Platform owner entry and innovation in complementary markets: Evidence from Intel
- master PL060; duplicates: BM081 | Value creation in innovation ecosystems: how the structure of technological interdependenc
- master PL042; duplicates: BM082 | Sustaining superior performance in business ecosystems: evidence from application software
- master ST009; duplicates: BM083 | Generative AI at work
- master BM086; duplicates: PR017 | Making "freemium" work
- master ST019; duplicates: PL058 | Profiting from innovation in the digital economy: Enabling technologies, standards, and li
- master PR002; duplicates: ST035 | Bundling information goods: Pricing, profits, and efficiency
- master PR003; duplicates: ST036 | Bundling and competition on the Internet
- master ST038; duplicates: PL024 | Platform envelopment
- master PR031; duplicates: PL057 | The economics of large language models: Token allocation, fine-tuning, and optimal pricing

Against existing registers (row id, register id):

- BM001 = BM01
- BM002 = BM02
- BM010 = BMI01
- BM012 = BMI02
- BM013 = BMI03
- BM029 = LENS03
- BM038 = BMI06
- BM047 = AI02
- BM048 = AI01
- BM049 = AI03
- BM050 = AI04
- BM059 = AI09
- BM067 = AI07
- BM075 = LENS04
- BM085 = FR07
- BM089 = FR03
- BM090 = BM03
- BM091 = BMI04
- BM092 = FR01
- ST018 = LENS01
- ST019 = LENS02
- ST020 = LENS03
- PL001 = LENS04
- PL005 = LENS05
- PL034 = AI05
- PL035 = NEW01
- PL036 = LENS08
- PL039 = LENS06
- PL055 = NEW05
- PL056 = NEW02
- PL058 = LENS02
- PR001 = LENS07
- PR018 = AI07
- PR019 = AI06

## 7. Rows whose findings must be checked against full text before citing (verification is [M], [V-meta] or [V-snippet] only)


BM (48):
- BM001 [[V-meta: Cro] Teece, D. 2010: Business Models, Business Strategy and Innovation
- BM003 [[V-meta: Cro] Massa, L.; Tucci, C.; Afuah, A. 2017: A Critical Assessment of Business Model Research
- BM004 [[V-meta: Cro] Wirtz, B.; Pistoia, A.; Ullrich, S. 2016: Business Models: Origin, Development and Future Research Perspectives
- BM005 [[V-meta: Cro] Demil, B.; Lecocq, X. 2010: Business Model Evolution: In Search of Dynamic Consistency
- BM007 [[V-meta: Cro] Casadesus-Masanell, R.; Ricart, J. 2010: From Strategy to Business Models and onto Tactics
- BM008 [[V-meta: Cro] Baden-Fuller, C.; Haefliger, S. 2013: Business Models and Technological Innovation
- BM009 [[V-meta: Cro] Chesbrough, H. 2002: The role of the business model in capturing value from innovation: evi
- BM011 [[V-meta: Cro] Foss, N.; Saebi, T. 2018: Business models and business model innovation: Between wicked and para
- BM012 [[V-meta: Cro] Saebi, T.; Lien, L.; Foss, N. 2017: What Drives Business Model Adaptation? The Impact of Opportunities, Th
- BM013 [[V-meta: Cro] Chesbrough, H. 2010: Business Model Innovation: Opportunities and Barriers
- BM015 [[V-meta: Cro] Sosna, M.; Trevinyo-Rodríguez, R.;  2010: Business Model Innovation through Trial-and-Error Learning
- BM016 [[V-meta: Cro] Snihur, Y.; Zott, C. 2020: The Genesis and Metamorphosis of Novelty Imprints: How Business Model 
- BM019 [[V-meta: Cro] Markides, C.; Charitou, C. 2004: Competing with dual business models: A contingency approach
- BM020 [[V-meta: Cro] Velu, C.; Stiles, P. 2013: Managing Decision-Making and Cannibalization for Parallel Business Mod
- BM027 [[V-meta: Cro] Tushman, M.; Anderson, P. 1986: Technological Discontinuities and Organizational Environments
- BM028 [[V-meta: Cro] Henderson, R.; Clark, K. 1990: Architectural Innovation: The Reconfiguration of Existing Product Tech
- BM029 [[V-meta: Cro] Tripsas, M. 1997: UNRAVELING THE PROCESS OF CREATIVE DESTRUCTION: COMPLEMENTARY ASSETS A
- BM030 [[V-meta: Cro] Tripsas, M.; Gavetti, G. 2000: Capabilities, cognition, and inertia: evidence from digital imaging
- BM031 [[V-meta: Cro] Hill, C.; Rothaermel, F. 2003: The Performance of Incumbent Firms in the Face of Radical Technologica
- BM035 [[V-meta: Cro] Eggers, J.; Park, K. 2018: Incumbent Adaptation to Technological Change: The Past, Present, and F
- BM037 [[V-meta: Cro] Teece, D. 2018: Business models and dynamic capabilities
- BM038 [[V-meta: Cro] O'Reilly, C.; Tushman, M. 2013: Organizational Ambidexterity: Past, Present, and Future
- BM039 [[V-meta: Cro] Christensen, C.; Bower, J. 1996: CUSTOMER POWER, STRATEGIC INVESTMENT, AND THE FAILURE OF LEADING FIRMS
- BM040 [[V-meta: Cro] Adner, R.; Snow, D. 2010: Old technology responses to new technology threats: demand heterogenei
- BM041 [[V-meta: Cro] Gilbert, C. 2005: Unbundling the Structure of Inertia: Resource Versus Routine Rigidity
- BM044 [[V-meta: Cro] Eisenhardt, K.; Martin, J. 2000: Dynamic capabilities: what are they?
- BM045 [[V-meta: Cro] Helfat, C.; Raubitschek, R. 2018: Dynamic and integrative capabilities for profiting from innovation in 
- BM046 [[V-meta: Cro] Warner, K.; Wäger, M. 2019: Building dynamic capabilities for digital transformation: An ongoing p
- BM047 [[V-meta: Cro] Jorzik, P.; Klein, S.; Kanbach, D.; 2024: AI-driven business model innovation: A systematic review and research 
- BM049 [[V-meta: Cro] Teng, D.; Ye, C.; Martinez, V. 2025: Gen-AI’s effects on new value propositions in business model innovatio
- BM051 [[V-meta: Cro] Sjödin, D.; Parida, V.; Palmié, M.; 2021: How AI capabilities enable business model innovation: Scaling AI throu
- BM052 [[V-meta: Cro] Burström, T.; Parida, V.; Lahti, T. 2021: AI-enabled business-model innovation and transformation in industrial 
- BM053 [[V-meta: Cro] Lee, J.; Suh, T.; Roy, D.; Baucus,  2019: Emerging Technology and Business Model Innovation: The Case of Artific
- BM054 [[V-meta: Cro] Haefner, N.; Wincent, J.; Parida, V 2021: Artificial intelligence and innovation management: A review, framework
- BM055 [[V-meta: Cro] Gregory, R.; Henfridsson, O.; Kagan 2021: The Role of Artificial Intelligence and Data Network Effects for Creat
- BM058 [[V-meta: Cro] Vial, G. 2019: Understanding digital transformation: A review and a research agenda
- BM060 [[V-meta: Cro] Yang, J.; Hurmelinna-Laukkanen, P.; 2025: Profiting from Innovation Process – Capturing Value from Evolving Arti
- BM062 [[V-meta: Cro] Cordes, M.; Kanbach, D. 2025: Transforming Business Model Innovation: How Generative Artificial Inte
- BM064 [[V-meta: Cro] Wagner, T.; Benlian, A.; Hess, T. 2014: Converting freemium customers from free to premium: the role of the pe
- BM067 [[V-meta: Cro] Lehmann, S.; Buxmann, P. 2009: Pricing Strategies of Software Vendors
- BM069 [[V-meta: Cro] Cusumano, M. 2008: The Changing Software Business: Moving from Products to Services
- BM072 [[V-meta: Cro] Choudhary, V. 2007: Comparison of Software Quality Under Perpetual Licensing and Software 
- BM073 [[V-meta: Cro] Ojala, A.; Tyrvainen, P. 2011: Developing Cloud Business Models: A Case Study on Cloud Gaming
- BM074 [[V-meta: Cro] Stuckenberg, S. 2014: Exploring the Organizational Impact of Software-as-a-Service on Softwa
- BM085 [[V-meta: Cro] Coda, V. 2012: The Evaluation of the Entrepreneurial Formula
- BM086 [[V-snippet:] Kumar, V. 2014: Making "freemium" work
- BM087 [[M: Crossref] Iansiti, M., & Lakhani, K. R. 2020: Competing in the age of AI: Strategy and leadership when algorithms an
- BM088 [[M: book met] Cusumano, M. A. 2004: The business of software: What every manager, programmer, and entrepre

ST (33):
- ST001 [[V-meta: Cro] Vandermerwe, S., & Rada, J. 1988: Servitization of business: Adding value by adding services
- ST003 [[V-meta: Cro] Kowalkowski, C., Gebauer, H., & Oli 2017: Service growth in product firms: Past, present, and future
- ST005 [[V-meta: Cro] Raisch, S., & Krakowski, S. 2021: Artificial intelligence and management: The automation-augmentation pa
- ST007 [[V-meta: Cro] Korinek, A., & Vipra, J. 2024: Concentrating intelligence: Scaling and market structure in artificial
- ST011 [[V-snippet:] Dell'Acqua, F., McFowland, E., Moll 2023: Navigating the jagged technological frontier: Field experimental evide
- ST016 [[V-snippet:] Gupta, J., & Garg, A. (Foundation C 2024: AI leads a service-as-software paradigm shift (and related 'systems of
- ST017 [[V-snippet:] VentureBeat; Sequoia Capital (podca 2025: Cursor releases Composer, its first in-house model (and related covera
- ST018 [[V-meta: Cro] Teece, D. J. 1986: Profiting from technological innovation: Implications for integration,
- ST019 [[V-meta: Cro] Teece, D. J. 2018: Profiting from innovation in the digital economy: Enabling technologie
- ST020 [[V-meta: Cro] Tripsas, M. 1997: Unraveling the process of creative destruction: Complementary assets a
- ST023 [[V-meta: Cro] Teece, D. J., Pisano, G., & Shuen,  1997: Dynamic capabilities and strategic management
- ST024 [[V-meta: Cro] Gregory, R. W., Henfridsson, O., Ka 2021: The role of artificial intelligence and data network effects for creat
- ST025 [[V-meta: Cro] Gregory, R. W., Henfridsson, O., Ka 2022: Data network effects: Key conditions, shared data, and the data value 
- ST030 [[V-meta: Cro] Klemperer, P. 1995: Competition when consumers have switching costs: An overview with appl
- ST037 [[V-meta: Cro] Nalebuff, B. 2004: Bundling as an entry barrier
- ST039 [[V-meta: Cro] Teece, D. J. 1980: Economies of scope and the scope of the enterprise
- ST041 [[V-meta: Cro] Gawer, A., & Henderson, R. 2007: Platform owner entry and innovation in complementary markets: Evidence
- ST042 [[V-meta: Cro] Zhu, F., & Liu, Q. 2018: Competing with complementors: An empirical look at Amazon.com
- ST049 [[V-snippet:] Maginative; PCWorld; Tom's Hardware 2025: Microsoft bundles Copilot AI into consumer Microsoft 365 and raises pr
- ST050 [[V-snippet:] Atlassian; trade press (alternative 2025: Atlassian acquires The Browser Company (Arc and Dia) for USD 610 milli
- ST052 [[V-meta: Cro] Puranam, P., Singh, H., & Zollo, M. 2006: Organizing for innovation: Managing the coordination-autonomy dilemma 
- ST058 [[V-meta: Cro] Chatterji, A., & Patro, A. 2014: Dynamic capabilities and managing human capital
- ST062 [[V-meta: Cro] Gautier, A., & Lamesch, J. 2021: Mergers in the digital economy
- ST066 [[V-snippet:] Competition and Markets Authority ( 2024: Microsoft / Inflection AI: Phase 1 decision summary (4 September 2024)
- ST067 [[V-snippet:] Federal Trade Commission (US), staf 2025: Staff report on AI partnerships and investments (6(b) study), Matter P
- ST069 [[V-meta: Cro] Tushman, M. L., & O'Reilly, C. A.,  1996: Ambidextrous organizations: Managing evolutionary and revolutionary ch
- ST071 [[V-meta: Cro] Markides, C., & Charitou, C. D. 2004: Competing with dual business models: A contingency approach
- ST072 [[V-meta: Cro] Berg, J. M., Raj, M., & Seamans, R. 2023: Capturing value from artificial intelligence
- ST073 [[V-meta: Cro] Jobin, A., Ienca, M., & Vayena, E. 2019: The global landscape of AI ethics guidelines
- ST075 [[V-meta: Cro] Papagiannidis, E., Mikalef, P., & C 2025: Responsible artificial intelligence governance: A review and research 
- ST078 [[V-meta: Cro] Liang, W., Yuksekgonul, M., Mao, Y. 2023: GPT detectors are biased against non-native English writers
- ST080 [[V-snippet:] Computerworld; VentureBeat; World I 2023: Adobe offers IP indemnification for Firefly outputs to enterprise cust
- ST081 [[V-snippet:] European Union 2024: Regulation (EU) 2024/1689 (AI Act), Article 50 transparency obligation

PL (23):
- PL010 [[V-meta: Cro] West, J. 2003: How open is open enough? Melding proprietary and open source platform 
- PL021 [[V-meta: Cro] Tiwana, A. 2014: Platform ecosystems: aligning architecture, governance, and strategy (
- PL025 [[V-meta: Cro] Eisenmann, T.; Parker, G.; Van Alst 2008: Opening platforms: how, when and why?
- PL027 [[V-meta: Cro] Benzell, S.; Hersh, J.; Van Alstyne 2019: The paradox of openness: exposure vs. efficiency of APIs
- PL028 [[V-meta: Cro] Evans, P. C.; Basole, R. C. 2016: Revealing the API ecosystem and enterprise strategy via visual analyti
- PL029 [[V-snippet:] Hagiu, A.; Wright, J. 2015: Multi-sided platforms
- PL034 [[V-meta: Cro] Heimburg, V.; Schreieck, M.; Wiesch 2025: Complementor value co-creation in generative AI platform ecosystems
- PL035 [[V-meta: Cro] Mayer, A.-S.; Kostis, A.; Strich, F 2025: Shifting dynamics: how generative AI as a boundary resource reshapes d
- PL036 [[V-meta: Cro] Azoulay, P.; Krieger, J. L.; Nagara 2025: Old moats for new models: openness, control, and competition in genera
- PL038 [[V-meta: Cro] Gregory, R. W.; Henfridsson, O.; Ka 2021: The role of artificial intelligence and data network effects for creat
- PL039 [[V-meta: Cro] Ceccagnoli, M.; Forman, C.; Huang,  2012: Cocreation of value in a platform ecosystem: the case of enterprise so
- PL049 [[V-meta: Cro] Gawer, A. 2021: Digital platforms' boundaries: the interplay of firm scope, platform s
- PL052 [[V-meta: Cro] Su, D.; Zhao, Y.; Hou, X.; Wang, S. 2025: GPT Store mining and analysis
- PL053 [[V-snippet:] Authors not captured (arXiv 2509.25 2025: A measurement study of Model Context Protocol
- PL055 [[V-snippet:] Lin, J.; Zhu, J.; Zhou, Z.; et al. 2025: Superplatforms have to attack AI agents
- PL056 [[M: carried] Hydari, M. Z.; Muzaffar, F. 2026: Going headless? On the boundaries of vertical AI firms
- PL057 [[V-meta: Cro] Bergemann, D.; Bonatti, A.; Smolin, 2025: The economics of large language models: token allocation, fine-tuning,
- PL058 [[V-meta: Cro] Teece, D. J. 2018: Profiting from innovation in the digital economy: enabling technologie
- PL059 [[V-meta: Cro] Rochet, J.-C.; Tirole, J. 2003: Platform competition in two-sided markets
- PL061 [[V-meta: Cro] Loh, J.; Elsas-Nicolle, A. 2026: Platform competition and strategic trade-offs for complementors
- PL062 [[V-snippet:] Anthropic 2026: Claude connectors directory: submission and review requirements
- PL063 [[V-snippet:] Unknown (arXiv listing) 2026: The agentic web requires new normative infrastructure
- PL064 [[V-snippet:] Unknown (CMR article) 2026: The rise of AI intermediaries: how agentic systems are rewiring custom

PR (16):
- PR001 [[V-meta: Cro] Shapiro, C.; Varian, H. R. 1999: Information rules: A strategic guide to the network economy
- PR010 [[V-meta: Cro] Gabaix, X.; Laibson, D. 2005: Shrouded attributes, consumer myopia, and information suppression in c
- PR013 [[V-meta: Cro] Wagner, T. M.; Benlian, A.; Hess, T 2014: Converting freemium customers from free to premium: The role of the pe
- PR017 [[M]] Kumar, V. 2014: Making 'freemium' work
- PR018 [[V-meta: Cro] Lehmann, S.; Buxmann, P. 2009: Pricing strategies of software vendors
- PR019 [[V-meta: Cro] Saltan, A.; Smolander, K. 2021: Bridging the state-of-the-art and the state-of-the-practice of SaaS pr
- PR020 [[V-meta: Cro] Harmon, R.; Demirkan, H.; Hefley, B 2009: Pricing strategies for information technology services: A value-based 
- PR021 [[M]] Kittlaus, H.-B.; Clough, P. N. 2009: Software product management and pricing: Key success factors for softw
- PR023 [[V-meta: Cro] Ingenbleek, P.; Debruyne, M.; Framb 2003: Successful new product pricing practices: A contingency approach
- PR024 [[V-meta: Cro] Hünerberg, R.; Hüttmann, A. 2003: Performance as a basis for price-setting in the capital goods industry
- PR025 [[V-meta: Cro] Bonnemeier, S.; Burianek, F.; Reich 2010: Revenue models for integrated customer solutions: Concept and organiza
- PR029 [[V-meta: Cro] Hou, J.; Neely, A. 2018: Investigating risks of outcome-based service contracts from a provider
- PR030 [[V-meta: Cro] Kohtamäki, M.; Parida, V.; Oghazi,  2019: Digital servitization business models in ecosystems: A theory of the f
- PR031 [[V-meta: Cro] Bergemann, D.; Bonatti, A.; Smolin, 2025: The economics of large language models: Token allocation, fine-tuning,
- PR064 [[V-snippet:] McKinsey & Company (via CustomerThi 2025: The AI price is right (chart); analysis of 150 software vendors, Septe
- PR065 [[V-meta: fro] IDC (Newmark, E.); Gartner; Deloitt 2025: Cross-reference to existing register entries G06, G08, G13 and Gartner

## 8. Caveats

- Year corrections of one year (BM026, ST005, ST059, ST053) may reflect online-first versus issue date; the row year is not necessarily wrong. Decide the citation convention before applying.
- Ten rows whose DOIs contain angle brackets (Wiley SICI-style DOIs) were verified after fixing the parser; all resolved in Crossref.
- Duplicates against the two existing registers are listed for awareness; the registers were not altered.
- Automated matching: a status of ok means title, year, first authors and venue matched Crossref within tolerance, not that the content summary was read against the source.
