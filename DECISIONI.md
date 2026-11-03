# Direzioni e decisioni

Riferimenti e fatti: STUDIO.md, S1–S6. CLAUDE.md corrisponde al modello condiviso, aggiornato il 28/10/2026 su richiesta dell'utente con il flusso repo dedicata prima e deploy Vercel dalla repo. Le altre regole sono invariate.

## Tre direzioni considerate
| Direzione | Concetto e palette | Font | Foto/logo | Dettaglio | Rischio e giustificazione |
|---|---|---|---|---|---|
| 1. Manifesto a strati | Pagina editoriale arancio/nero, crema per il menu | Bricolage Grotesque per titoli, DM Sans per lettura; entrambi OFL locali | Niente foto non fornite; nome testuale provvisorio, logo originale da ricevere | Tre piani tipografici sfalsati che illustrano le categorie | Più grafica che food finché mancano le foto; è la più coerente con arancio e lettering compatto osservati in S1 |
| 2. Tavola di quartiere | Fondo crema, griglia calma, arancio solo sui richiami | DM Sans + Georgia di sistema (nessun font esterno) | Foto di tavola come elemento centrale solo dopo autorizzazione; logo intatto | Menu come una carta piegata, senza box ripetuti | Rischia di sembrare una trattoria generica e dipende dalle fotografie; sostenuta dalle scene conviviali S1 |
| 3. Menu urbano | Pagina nera con grande elenco arancio e azioni sempre disponibili | Bricolage Grotesque per titoli e corpo, pesi diversi | Foto ritagliate facoltative solo autorizzate; logo originale a contrasto | Indice del menu simile a una lavagna contemporanea | Un fondo scuro esteso può affaticare la lettura; sostenuta dal contrasto dell'avatar S1 e dalle esigenze delivery |

## Scelta
Direzione 1. Nome e prodotto in primo piano; menu e contatti su crema per la leggibilità; un solo arancio e un solo trattamento delle azioni. La composizione astratta usa rettangoli, non riproduce il simbolo ondulato/foglie del logo. I font scelti sono una proposta compatibile, non i font ufficiali identificati. Il logo non viene ricostruito.

## Scelte pratiche
- Nuovo Site privato `lasagnas-torino-proposta` per lavorare e verificare la demo. Su indicazione esplicita dell'utente si crea prima la repo dedicata `siti-web-torino/lasagnas-torino` usando `template-vetrina`, e poi l'utente collegherà Vercel a quella repo. L'ultima istruzione esclude qualsiasi operazione Vercel da parte dell'assistente. Regole del template copiate integralmente e conservate senza modifiche.
- Statico puro nella directory `dist/`, con `index.html`, `css/style.css`, `js/main.js`, `img/`, `fonts/`. `dist/` è l'unico adattamento di percorso necessario all'hosting; al suo interno la struttura è quella del modello. Nessuna build o dipendenza runtime.
- Tutti i testi, dati, collegamenti e ricette modificabili in `SITE` in cima a `js/main.js`. HTML statico semantico per la struttura, menu renderizzato con cinque voci; nessun framework.
- Slogan riusato esattamente. Descrizioni fattuali brevi, nessuna storia inventata, recensione, valutazione, certificazione o dato sulle vendite.
- Un unico avviso di sezione rende esplicito che tutte le voci del menu, i prezzi e gli allergeni attendono conferma. Orari, civico e materiali hanno avvisi specifici. Nessun prezzo preso dai delivery: S3 e S4 non coincidono.
- Prenotazioni tramite chiamata al numero di S1, senza inviare messaggi o fingere disponibilità. I link di consegna portano a servizi reali e dichiarati; la verifica non effettua acquisti.
- Nessuna foto generata o presa dal web, nessuna galleria vuota. Un pannello nella nota di progetto spiega i materiali mancanti. Non si interrompe il lavoro per un file che può essere aggiunto in seguito.
- Nessun form o analytics: nessun consenso cookie aggiunto inutilmente. Link Maps semplice, mai iframe. Informativa della demo sul trattamento tecnico, da rivedere prima di un sito commerciale.
- Demo Sites privata con `noindex, nofollow, noarchive` e robots.txt chiuso. L'utente ha richiesto esplicitamente un link Vercel pubblico senza autenticazione: il deploy sarà eseguito dall'utente; la pubblicazione su Vercel resta una proposta indipendente, con avvisi e noindex, non il sito ufficiale approvato dal cliente. Visibilità del codice distinta dall'accesso al sito.



## Aggiornamento — 3 novembre 2026

- Il nuovo brief richiede esplicitamente HTML statico SEO/GEO: sostituisce la precedente sorgente SITE in JavaScript e la modalità noindex della demo. Contenuti e href sono nell’HTML, JSON-LD nello stesso file; JavaScript è progressivo.
- Conservati Bricolage, impianto editoriale, hero a due colonne e tre schede inclinate. Applicata la palette richiesta: #FAF4E8, #FFFDF9, #C93B2B, #E5A93B, #3A6B4C, #1E1916. Aumentata la distanza tra schede dopo aver osservato che la prima copriva il titolo della seconda a 1280px.
- L’insegna fotografata è il marchio autentico disponibile. Nessuna estrazione generativa o reinterpretazione delle lettere. L’arancione resta dentro la fotografia originale; l’interfaccia segue la palette richiesta.
- La foto del menu prevale sulle cinque card generiche del brief: pubblicate tutte le 16 voci con prezzi reali, formule e coperto. Nessun «10/10» attribuito alla Classica. Aggiunti i filtri Lasagne e Antipasti & Insalate per coprire il menu reale.
- La scheda Maps ha confermato indirizzo 14/B, telefono, orari e 4,7/236. Badge oltre 230, collegato alla fonte; nessun aggregateRating autopromozionale.
- Configuratore senza backend, cookie, analytics o archivio clienti. Testo WhatsApp preparato localmente, con conferma del locale obbligatoria nella formulazione.
- La richiesta di aggiornare il sito esistente è eseguita nella stessa repo collegata a Vercel; nessun nuovo progetto Sites/Vercel e nessuna modifica a permessi, piani o domini.


## Revisione del marchio SVG — brief successivo del 3 novembre 2026

Il nuovo brief sostituisce la palette crema/rosso con l’arancione #F07C12 dell’insegna, nero #141414, bianco e crema. I due SVG del brief sono pubblicati esattamente come forniti: nessun ridisegno o passaggio generativo. File esterni per isolare gli stili delle lettere dal resto della pagina.

Icona circolare: favicon, header, footer e sigillo nei contatti. Scritta completa: header, footer, hero e format. La foto originale resta conservata, inclusa nell’immagine social; i social non dipendono dalla compatibilità SVG.

I pulsanti arancioni hanno testo nero e bordo nero: bianco su questo arancione non raggiunge AA per i testi piccoli. Il testo di enfasi resta nero, con sottolineatura arancione. Le tre schede della hero usano bianco, arancione e nero. Menu, 16 prezzi, orari, dati strutturati e logica WhatsApp restano quelli verificati: cambia soltanto il riferimento logo nello schema.

Prove a 320, 390, 768 e 1280px. Anteprime in docs/anteprime/marchio-svg/.
