# Lasagnas Torino — proposta indipendente di sito

Sito statico preparato con Sites seguendo `siti-web-torino/template-vetrina`.
Repository dedicata creata nell'organizzazione con **Use this template** il 28/10/2026:
https://github.com/siti-web-torino/lasagnas-torino

Il progetto è una demo, non il sito ufficiale approvato dal locale. `noindex`, `nofollow`, `noarchive` e `robots.txt` chiuso restano attivi.

## Leggere prima
- `RAPPORTO.md`: cosa è pronto e cosa manca.
- `docs/anteprime/`: verifiche visuali a 390, 768 e 1280px.
- `STUDIO.md`: identità osservata, fonti, ricette e analisi di sei siti simili.
- `DECISIONI.md`: tre direzioni, scelta e limiti.
- `CLAUDE.md`: regole del modello condiviso e flusso repo → Vercel.

## Modificare i contenuti
Apri `dist/js/main.js`: l'oggetto `SITE` all'inizio contiene testi, recapiti, link, filtri e ricette. Modifica quello; non aggiungere nuovi dati privi di fonte. `data-copy` e `data-link` collegano i campi all'HTML. La pagina legge i valori da questo unico oggetto: i marker dell’HTML non vanno modificati. Senza JavaScript viene mostrato un avviso esplicito; le informazioni non vengono duplicate in un secondo elenco statico.

La palette, le scale tipografiche e gli spazi sono nelle variabili in cima a `dist/css/style.css`. Font Bricolage Grotesque e DM Sans locali, con licenze OFL in `dist/fonts/`. Non sono i font ufficiali accertati del marchio: sono una proposta coerente con i riferimenti osservati.

Nessuna dipendenza, build, CDN, analytics, form, mappa incorporata o foto prelevata dal web. Le azioni telefoniche non eseguono prenotazioni automatiche; i pulsanti delivery aprono le piattaforme esterne. Nessuna chiamata o ordine è stato effettuato durante le prove.

## Materiali
Metti le foto originali autorizzate e il logo ufficiale in `img-originali/`, senza alterarli. Pubblica soltanto derivati ottimizzati in `dist/img/` (WebP, lato lungo massimo 1600px, EXIF rimossi). Le foto con persone riconoscibili richiedono consenso e non vanno inserite prima della verifica. La cartella è attualmente vuota: la demo usa composizioni tipografiche, non foto simulate.

## Da confermare con il locale
- Logo originale, autorizzazione al suo uso e foto del cibo/locale.
- Codici colore e font ufficiali.
- Menu, disponibilità, ingredienti, allergeni e prezzi: quelli delle piattaforme non sono un listino ufficiale approvato.
- Orari settimanali e festivi.
- Civico 14/B (alcune fonti indicano solo 14).
- Recapito telefonico destinato alle prenotazioni e link di consegna aggiornati.
- Ragione sociale, P.IVA, informativa privacy e approvazione finale alla pubblicazione ufficiale.

Gli avvisi rilevanti sono visibili nella pagina: menu indicativo, orari e civico da confermare; materiali e dati legali nelle note della demo. Nessun dato è stato sostituito con un'invenzione.

## Deploy dalla repository
1. Mantieni questa repo come origine del progetto; i file del sito sono in `dist/`.
2. Nell'integrazione GitHub già collegata a Vercel seleziona/importa `siti-web-torino/lasagnas-torino` e avvia **Deploy**.
3. Root Directory vuota (radice repo), preset **Other**. `vercel.json` imposta nessun comando di build/installazione e output `dist`.
4. Produzione dal branch `main`, con aggiornamenti automatici tramite la repo.
5. Per il sito richiesto pubblico, il dominio di produzione deve aprirsi senza Vercel Authentication. Controllare senza cookie di login e senza link temporanei con bypass.

La visibilità del codice è separata da quella del sito. Il modello condiviso prevede repo private per clienti non confermati. Il piano Hobby di Vercel non supporta il collegamento Git automatico da una repo privata di un'organizzazione: per quel piano è necessaria una repo pubblica. Non è stato cambiato il piano, acquistato nulla o ampliata automaticamente la visibilità del codice.

Il deploy Vercel è gestito direttamente dall’utente, come richiesto. Nessun progetto Vercel è stato creato e nessun deploy Vercel è stato eseguito dall’assistente per questo sito. Link pubblico: **[DA CONFERMARE]** dopo il deploy dell’utente. La repo resta privata; il passaggio a pubblica, se necessario per il piano Hobby, è una scelta dell’utente.

## Verifica locale
Apri `dist/index.html` con un server statico. `node --check dist/js/main.js` controlla la sintassi. I percorsi sono relativi e funzionano anche sotto una directory. Il file `qa.html` è uno strumento temporaneo per le anteprime: è ignorato da Git e viene rimosso prima del pacchetto di pubblicazione.

