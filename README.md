# Lasagnas Torino

Sito statico: https://lasagnas-torino.vercel.app/
Repository: https://github.com/siti-web-torino/lasagnas-torino

## Aggiornamento del 5 novembre 2026

L’insegna SVG è nel solo header. L’icona circolare resta la favicon e compare come sigillo nel format. La teglia della hero, le stelle e i pittogrammi dell’interfaccia sono SVG integrati nell’HTML. La versione mobile rispetta le aree sicure di iOS.

I collegamenti per la consegna portano alle schede di [Glovo](https://glovoapp.com/it/it/torino/stores/lasagnas-tor) e [Deliveroo](https://deliveroo.it/it/menu/torino/torino-centro/lasagnas-via-giuseppe-parini-14-b). Prezzi e disponibilità della consegna sono gestiti dalle piattaforme.

## Aggiornamento del 3 novembre 2026
Palette dell’insegna: arancione #F07C12, nero #141414, bianco #FFFFFF e crema #FAF4E8. Bricolage Grotesque e DM Sans sono ospitati localmente. Il brief successivo del 3 novembre fornisce due SVG: sono salvati senza modifiche geometriche in dist/img/lasagnas-icon.svg e dist/img/lasagnas-insegna.svg. Icona circolare per favicon, header/footer e sigillo nei contatti; scritta per header/footer, hero e format. Le fotografie originali restano conservate e quella dell’insegna resta l’immagine social, compatibile con le anteprime che non supportano SVG. Menu fotografato disponibile nella pagina, caricato soltanto quando necessario.

## Contenuti e SEO
Tutti i contenuti, i 16 piatti con prezzi, i link e gli orari sono scritti direttamente in dist/index.html. Il file contiene anche title, description, canonical, Open Graph, Twitter Card e JSON-LD Restaurant/Menu/Offer. Modificando un prezzo, aggiornare sia la card HTML sia l’offerta JSON-LD corrispondente.

La richiesta SEO/GEO del 3 novembre sostituisce l’impostazione della demo precedente: robots.txt consente la scansione, la meta robots è index/follow e il vecchio X-Robots-Tag noindex è stato tolto da vercel.json. Sitemap in dist/sitemap.xml. Questo abilita la scansione; l’indicizzazione effettiva dipende dai motori di ricerca.

I 16 piatti, i filtri e le opzioni del configuratore sono nell’HTML. dist/js/main.js aggiorna la selezione, la navigazione mobile e il testo della richiesta. Senza JavaScript il menu e i link diretti WhatsApp e telefono restano disponibili.

## Menu e fonti
I prezzi derivano dalla foto dell’utente del 3 novembre, conservata in img-originali/menu-lasagnas.png: lasagne 11/11/13/13/11 €, bruschette 5 €, insalate 10/10/12/12 €, dolci 5 €. Le formule pranzo comprendono bibita (escluso vino) e coperto; gli antipasti sono disponibili solo a cena, con coperto cena a 1 €. Ingredienti e simboli Vegan sono quelli leggibili nella foto. Non sono state inventate ricette stagionali con prezzi o valutazioni dei piatti.

Indirizzo 14/B, CAP, telefono, Instagram e orari sono stati riscontrati sulla scheda Google Maps il 3 novembre 2026: https://maps.app.goo.gl/fF5LQXXF38y2piSJ7 . La scheda mostrava 4,7 stelle e 236 recensioni: il badge riporta prudenzialmente «oltre 230». Il punteggio Google non è inserito in aggregateRating del sito.

Orari: lunedì, martedì, giovedì, venerdì, sabato e domenica 12–15 e 19–22; mercoledì chiuso. Alcuni servizi aggiuntivi e il tono editoriale provengono dal brief allegato dell’utente. Riscontro indipendente per telefono, carte, tavoli e orientamento family: https://turismotorino.org/it/visita/dove-mangiare/lasagnas/ .

## WhatsApp
Il visitatore sceglie tavolo o asporto, giorno, turno, numero di persone per il tavolo ed eventuali note. I piatti selezionati nel menu e le quantità del riepilogo sono facoltativi e confluiscono nel messaggio. L’anteprima corrisponde al parametro text del link wa.me. Il visitatore invia il messaggio da WhatsApp e attende la conferma del locale. Il configuratore verifica il giorno in Europe/Rome e il numero di persone.

## Sviluppo e pubblicazione
Nessuna dipendenza o build. Servire dist/ con un server HTTP. Verifica sintassi: node --check dist/js/main.js. Il deploy resta collegato alla stessa repository GitHub, branch main, output dist, tramite l’integrazione Vercel esistente.

Vedere VERIFICHE.md, DECISIONI.md e RAPPORTO.md. Le verifiche del 3 novembre sono in docs/anteprime/2026-11-03/. I documenti precedenti restano come storico e non descrivono lo stato attuale.

## Materiali ancora utili
Ulteriori fotografie autorizzate dei piatti permetteranno altri miglioramenti. Nessuna foto di terzi, immagine IA o recensione inventata è stata aggiunta. Ragione sociale, P.IVA e informativa definitiva non sono state fornite né inventate.
