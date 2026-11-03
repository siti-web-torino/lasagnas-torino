# Verifiche — 3 novembre 2026

Storia verificata: il visitatore legge menu/prezzi senza dipendere da JavaScript, filtra le proposte, trova orari/indirizzo e prepara un messaggio corretto per il tavolo o l’asporto.

- Sintassi: node --check dist/js/main.js, riuscita.
- Prezzi: 16 valori HTML confrontati con la foto e con le Offer nel JSON-LD: 11,11,13,13,11,5,5,5,10,10,12,12,5,5,5,5.
- Sorgente: un H1, nessun data-copy/data-link, nessun heading/paragrafo/nav/link vuoto, href statici e ancore valide, asset locali presenti, JSON-LD valido, nessun ID duplicato.
- SEO: canonical di produzione, meta social e sitemap; rimossi i tre blocchi di scansione precedenti (meta, robots.txt, header Vercel).
- Contrasti testo/sfondo: rosso/card, verde/crema, testo secondario/crema e carbone/giallo almeno 4,5:1.
- Browser: filtro Dolci = 4, Lasagne = 5, Tutte = 16. Foto menu apribile nel details.
- Tavolo: giovedì 5 novembre 2026, 4 persone, cena: messaggio e URL wa.me corretti.
- Asporto: ordine con accenti e & preservato nel parametro URL; campo persone disattivato, ordine richiesto.
- Date: mercoledì 4 novembre bloccato con messaggio dedicato, data passata 2 novembre non valida; orologio del ristorante Europe/Rome.
- Senza main.js: 16 card visibili, navigazione e collegamenti telefono/WhatsApp presenti, nessun contenuto vuoto.
- Mobile: menu a tendina apribile e richiudibile dopo un link, nessun overflow orizzontale delle sezioni. CSS per focus visibile, targets di azione, reduced motion e stampa.
- Anteprime archiviate in docs/anteprime/2026-11-03/. Prima correzione visiva: eliminate le sovrapposizioni sui testi delle schede della hero.

Non sono state verificate disponibilità del locale o inviate richieste reali. Nessun backend, database o segreto richiesto per questo sito statico.
