# Lasagnas Torino

Sito statico: https://lasagnas-torino.vercel.app/
Repository: https://github.com/siti-web-torino/lasagnas-torino

## Aggiornamento del 3 novembre 2026
Palette crema/rosso ragù, Bricolage Grotesque e DM Sans ospitati localmente. La fotografia dell’insegna fornita dall’utente è usata integralmente nell’header, nel format e nel footer: nessun logo ricostruito. Gli originali sono in img-originali/; le copie pubblicate in dist/img/ mantengono gli stessi pixel. Menu fotografato disponibile nella pagina, caricato soltanto quando necessario.

## Contenuti e SEO
Tutti i contenuti, i 16 piatti con prezzi, i link e gli orari sono scritti direttamente in dist/index.html. Il file contiene anche title, description, canonical, Open Graph, Twitter Card e JSON-LD Restaurant/Menu/Offer. Modificando un prezzo, aggiornare sia la card HTML sia l’offerta JSON-LD corrispondente.

La richiesta SEO/GEO del 3 novembre sostituisce l’impostazione della demo precedente: robots.txt consente la scansione, la meta robots è index/follow e il vecchio X-Robots-Tag noindex è stato tolto da vercel.json. Sitemap in dist/sitemap.xml. Questo abilita la scansione; l’indicizzazione effettiva dipende dai motori di ricerca.

dist/js/main.js aggiunge soltanto i filtri, la navigazione mobile, la pausa della fascia scorrevole e il configuratore WhatsApp. Non popola i contenuti. Senza JavaScript restano visibili menu, prezzi, contatti, navigazione e collegamenti diretti WhatsApp/telefono.

## Menu e fonti
I prezzi derivano dalla foto dell’utente del 3 novembre, conservata in img-originali/menu-lasagnas.png: lasagne 11/11/13/13/11 €, bruschette 5 €, insalate 10/10/12/12 €, dolci 5 €. Le formule pranzo comprendono bibita (escluso vino) e coperto; gli antipasti sono disponibili solo a cena, con coperto cena a 1 €. Ingredienti e simboli Vegan sono quelli leggibili nella foto. Non sono state inventate ricette stagionali con prezzi o valutazioni dei piatti.

Indirizzo 14/B, CAP, telefono, Instagram e orari sono stati riscontrati sulla scheda Google Maps il 3 novembre 2026: https://maps.app.goo.gl/fF5LQXXF38y2piSJ7 . La scheda mostrava 4,7 stelle e 236 recensioni: il badge riporta prudenzialmente «oltre 230». Il punteggio Google non è inserito in aggregateRating del sito.

Orari: lunedì, martedì, giovedì, venerdì, sabato e domenica 12–15 e 19–22; mercoledì chiuso. Alcuni servizi aggiuntivi e il tono editoriale provengono dal brief allegato dell’utente. Riscontro indipendente per telefono, carte, tavoli e orientamento family: https://turismotorino.org/it/visita/dove-mangiare/lasagnas/ .

## WhatsApp
Il visitatore sceglie tavolo/asporto, giorno, turno, persone oppure ordine, ed eventuali note. L’anteprima corrisponde al parametro text del link wa.me. Il sito non invia messaggi: il visitatore apre WhatsApp e invia personalmente. Le richieste attendono risposta del locale. Date passate, mercoledì, numero di persone non valido e ordine vuoto vengono bloccati. Il calendario usa Europe/Rome.

## Sviluppo e pubblicazione
Nessuna dipendenza o build. Servire dist/ con un server HTTP. Verifica sintassi: node --check dist/js/main.js. Il deploy resta collegato alla stessa repository GitHub, branch main, output dist, tramite l’integrazione Vercel esistente.

Vedere VERIFICHE.md, DECISIONI.md e RAPPORTO.md. Le verifiche del 3 novembre sono in docs/anteprime/2026-11-03/. I documenti precedenti restano come storico e non descrivono lo stato attuale.

## Materiali ancora utili
Un logo vettoriale originale e fotografie autorizzate dei piatti permetteranno ulteriori miglioramenti. Nessuna foto di terzi, immagine IA o recensione inventata è stata aggiunta. Ragione sociale, P.IVA e informativa definitiva non sono state fornite né inventate.
