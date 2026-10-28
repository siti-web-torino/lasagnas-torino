# Verifiche del 28 ottobre 2026

## Metodo
Anteprima con Sites Preview. Controllo nel browser reale tramite un contenitore di prova con iframe largo 390, 768 e 1280px; non è un'emulazione hardware di iPhone o Android. La larghezza utile del documento può essere 15px inferiore per la barra di scorrimento del browser. Screenshot in `docs/anteprime/`. Il contenitore QA non fa parte dei file da distribuire.

## Risultati osservati
- A 390px: nome, prodotto, Torino e accesso al menu visibili nella prima schermata. Header, filtri e testo leggibili; cinque ricette senza ritagli orizzontali. Larghezza interna 390px, client/scroll 375px. Nessuno scorrimento orizzontale.
- A 768px: header con link e chiamata; composizione su due colonne leggibile, le due azioni della hero si dispongono su righe distinte. Larghezza interna 768px, client/scroll 753px. Nessuno scorrimento orizzontale.
- A 1280px: composizione arancio su due colonne con tipografia e grafica a strati; navigazione completa. Client/scroll 1265px. Nessuno scorrimento orizzontale.
- Menu mobile: apertura e chiusura corrette; selezionando un collegamento il menu si chiude. Invio apre il menu; Escape lo chiude e restituisce il focus al controllo.
- Filtri: Tutte = 5; Carne e pesce = 3; Vegetariane = 1; Vegan = 1; ripristino Tutte = 5. Ricetta vegan visibile: Radicchio e noci. Stato comunicato con aria-pressed e conteggio con aria-live.
- Ancore per menu e contatti presenti, navigazione in una pagina; telefono, Maps, Instagram e delivery collegati a URL espliciti. Non è stata effettuata alcuna chiamata, prenotazione, comunicazione o ordinazione.
- Azioni rapide mobile attive quando la hero lascia l'area sotto l'header. Corretto il margine dell'osservatore per tener conto dell'header fisso.
- Tastiera: pulsanti e collegamenti nativi, focus CSS visibile. Prove manuali sul menu e sul filtro, non un audit assistivo completo.
- Movimento ridotto: CSS disabilita transizioni e scorrimento animato con prefers-reduced-motion. Non è stata effettuata emulazione hardware del sistema operativo.

## Verifiche statiche
- `node --check dist/js/main.js`: esito positivo.
- HTML analizzato: 14 ID unici; ancore interne valide; 69 marker collegati al contenuto; risorse locali esistenti.
- Font locali e licenze SIL OFL presenti. Nessun CDN, framework, form o iframe nel sito distribuito; nessuna fotografia o logo ricostruito.
- `noindex, nofollow, noarchive` e robots.txt chiuso; intestazione equivalente predisposta in vercel.json.
- Configurazione Vercel: output dist, nessuna build/installazione, percorsi relativi.
- Contrasti calcolati: nero/arancio 7,61:1; nero/crema 17,16:1; testo secondario/crema 6,17:1; testo secondario/fondo neutro 5,30:1; testo chiaro/footer 11,10:1. Superano AA per testo normale. Focus delle azioni scure corretto in nero su fondi chiari/arancio; bersagli principali almeno 44px.

## Critica e correzioni
1. Prima anteprima desktop: spaziatura del titolo troppo stretta a 1280px. Ridotta la compressione delle lettere e aumentata leggermente l'interlinea; nessun testo originale cambiato.
2. Menu raggiunto da ancoraggio a 390px: la hero rimaneva geometricamente dietro l'header e impediva la comparsa delle azioni rapide. Corretto rootMargin; verificata la comparsa una volta fuori dall'area utile.
3. Contrasto del bordo dei filtri e focus chiaro su arancio: scuriti bordo e outline. Non sono stati introdotti nuovi colori di accento.
4. Screenshot tablet: un tentativo interrotto dall'utente e un timeout del browser; il successivo screenshot a 768px è stato salvato. Non è stato bloccato lo sviluppo sul problema dello strumento.

## Limiti
I log del browser mostrano messaggi dell'estensione di controllo, non del sito. Le risorse locali e il JavaScript sono stati verificati, ma non è stato eseguito un audit completo su tutti i browser, lettori di schermo o dispositivi fisici. Nessun test di ricezione delle chiamate o delle piattaforme di consegna. I link esterni e i dati vanno riconfermati prima della consegna commerciale.

Scenario venerdì sera per strada: un tocco per il menu; indirizzo e azione Maps nella sezione contatti; chiamata dall'header o dalle azioni rapide. **Non si può rispondere «è aperto adesso?» perché non sono stati forniti orari confermati**: l'assenza è segnalata esplicitamente e non sostituita da orari inventati.

