/* Tutti i contenuti modificabili della demo sono in SITE.
 * Fonti, stato delle verifiche e limiti: STUDIO.md e README.md.
 * Non impostare informazioni non confermate come dati definitivi.
 */
const SITE = {
  name: 'Lasagnas',
  city: 'Torino',
  meta: {
    title: 'Lasagnas Torino — proposta di sito',
    description: 'Proposta indipendente di sito per Lasagnas Torino. Lasagne tradizionali, gourmet e vegan. Contenuti e materiali da confermare con il locale.'
  },
  phoneDisplay: '+39 351 457 0039',
  instagramDisplay: '@lasagnas.family',
  links: {
    phone: 'tel:+393514570039',
    instagram: 'https://www.instagram.com/lasagnas.family/',
    maps: 'https://www.google.com/maps/search/?api=1&query=Lasagnas%20Via%20Giuseppe%20Parini%20Torino',
    deliveroo: 'https://deliveroo.it/it/menu/torino/torino-centro/lasagnas-via-giuseppe-parini-14-b',
    glovo: 'https://kaspi.glovoapp.com/it/it/torino/stores/lasagnas-tor'
  },
  labels: {
    navigation: 'Menu', menu: 'Le lasagne', restaurant: 'Ristorante e delivery',
    contacts: 'Dove siamo', call: 'Chiama il locale', shortCall: 'Chiama',
    directions: 'Come arrivare', deliveroo: 'Deliveroo', glovo: 'Glovo', backTop: 'Torna su'
  },
  pending: { label: '[DA CONFERMARE]' },
  hero: {
    eyebrow: 'Lasagne · Torino centro',
    title: ['La felicità', 'ha tanti', 'strati.'],
    intro: 'Lasagne tradizionali, gourmet & vegan.',
    primary: 'Scopri le lasagne',
    location: 'Via Giuseppe Parini · Torino'
  },
  art: {
    top: 'Lasagnas / Torino', layers: ['tradizionali', 'gourmet', 'vegan'],
    bottom: 'La felicità ha tanti strati.'
  },
  strip: ['Lasagne', 'Insalatone', 'Bruschette fresche'],
  menu: {
    eyebrow: '01 / Le lasagne',
    title: 'Lasagne tradizionali, gourmet & vegan.',
    intro: 'Una selezione delle ricette pubblicate dal locale, da consultare prima di scegliere come ordinare.',
    pending: 'Menu, disponibilità, prezzi e allergeni attendono conferma del locale. Le categorie qui mostrate sono indicative.',
    footer: 'Per il menu disponibile oggi e le informazioni sugli allergeni, contatta il locale.',
    contact: 'Chiedi al locale',
    filters: [
      { id: 'all', label: 'Tutte' },
      { id: 'classiche', label: 'Carne e pesce' },
      { id: 'vegetariane', label: 'Vegetariane' },
      { id: 'vegan', label: 'Vegan' }
    ],
    items: [
      { id: 'ragu', number: '01', name: 'Classica al ragù', ingredients: 'Ragù · besciamella · Parmigiano', category: 'classiche', label: 'Tradizionale', source: 'S3/S4' },
      { id: 'salsiccia', number: '02', name: 'Salsiccia, funghi e scamorza', ingredients: 'Salsiccia · funghi · scamorza', category: 'classiche', label: 'Gourmet', source: 'S3/S4' },
      { id: 'pesto', number: '03', name: 'Pesto, fagiolini e patate', ingredients: 'Pesto · fagiolini · patate', category: 'vegetariane', label: 'Vegetariana', source: 'S3/S4' },
      { id: 'gamberi', number: '04', name: 'Gamberi e zucchine', ingredients: 'Gamberi · zucchine', category: 'classiche', label: 'Gourmet', source: 'S3/S4' },
      { id: 'radicchio', number: '05', name: 'Radicchio e noci', ingredients: 'Radicchio · noci · besciamella vegetale', category: 'vegan', label: 'Vegan', source: 'S4' }
    ],
    countOne: 'proposta', countMany: 'proposte'
  },
  restaurant: {
    eyebrow: '02 / Scegli come',
    title: ['Al ristorante.', 'A domicilio.'],
    intro: 'Puoi venire in via Parini oppure ordinare sulle piattaforme di consegna. Scegli come preferisci.',
    table: {
      label: 'Per un tavolo', title: 'Prenota per telefono.',
      description: 'Chiama il locale per prenotare, conoscere gli orari o chiedere informazioni.'
    },
    delivery: {
      label: 'Per la consegna', title: 'Ordina a domicilio.',
      description: 'Menu, prezzi, copertura e tempi di consegna sono quelli mostrati dalla piattaforma scelta.'
    }
  },
  contact: {
    eyebrow: '03 / Ci vediamo a Torino',
    title: ['Ci trovi', 'in via Parini.'],
    addressLabel: 'Indirizzo', address: 'Via Giuseppe Parini, 14/B\nTorino',
    addressPending: 'Confermare il civico 14/B.',
    hoursLabel: 'Orari', hoursPending: 'Gli orari aggiornati vanno verificati con il locale prima della visita.',
    phoneLabel: 'Telefono', socialLabel: 'Dal profilo ufficiale'
  },
  demo: {
    bar: 'Proposta di sito · contenuti da confermare',
    footer: 'Proposta indipendente di sito. Non è il sito ufficiale del locale.',
    notesTitle: 'Note e contenuti da confermare',
    materials: '[DA CONFERMARE] Foto autorizzate e logo originale: non sono stati forniti e non sono stati sostituiti con immagini di altri locali o con un logo ridisegnato.',
    content: '[DA CONFERMARE] Menu, prezzi, allergeni, orari, civico, recapiti, codici del marchio e dati fiscali. Le informazioni pubbliche sono una base di lavoro da approvare con il titolare.',
    privacy: "Questa demo non contiene moduli, analytics o contenuti esterni incorporati. Il servizio di hosting può trattare dati tecnici di accesso; i servizi collegati applicano le proprie informative. L'informativa del sito ufficiale andrà concordata prima della pubblicazione.",
    sources: [
      {label: 'Profilo ufficiale Instagram', url: 'https://www.instagram.com/lasagnas.family/'},
      {label: 'Scheda Turismo Torino', url: 'https://turismotorino.org/it/visita/dove-mangiare/lasagnas/'},
      {label: 'Menu sulla piattaforma Deliveroo', url: 'https://deliveroo.it/it/menu/torino/torino-centro/lasagnas-via-giuseppe-parini-14-b'},
      {label: 'Menu sulla piattaforma Glovo', url: 'https://kaspi.glovoapp.com/it/it/torino/stores/lasagnas-tor'}
    ]
  }
};

(() => {
  'use strict';
  document.title = SITE.meta.title;
  document.querySelector('meta[name="description"]').content = SITE.meta.description;
  document.querySelector('.brand').setAttribute('aria-label', `${SITE.name}, inizio pagina`);
  const getContent = path => path.split('.').reduce((value, key) => value?.[key], SITE);
  document.querySelectorAll('[data-copy]').forEach(element => {
    const value = getContent(element.dataset.copy);
    if (typeof value === 'string') element.textContent = value;
  });
  document.querySelectorAll('[data-link]').forEach(element => {
    const url = SITE.links[element.dataset.link];
    if (url) element.setAttribute('href', url);
  });

  const list = document.querySelector('#menu-list');
  const filters = document.querySelector('#menu-filters');
  const count = document.querySelector('#menu-count');
  const rows = SITE.menu.items.map(item => {
    const article = document.createElement('article');
    article.className = 'menu-item';
    article.dataset.category = item.category;
    const number = document.createElement('span');
    number.className = 'item-number';
    number.textContent = item.number;
    number.setAttribute('aria-hidden', 'true');
    const content = document.createElement('div');
    content.className = 'item-copy';
    const title = document.createElement('h3');
    title.textContent = item.name;
    const ingredients = document.createElement('p');
    ingredients.textContent = item.ingredients;
    const category = document.createElement('span');
    category.className = 'item-label';
    category.textContent = item.label;
    content.append(title, ingredients);
    article.append(number, content, category);
    list.append(article);
    return article;
  });

  function setFilter(category) {
    let shown = 0;
    rows.forEach(row => {
      row.hidden = category !== 'all' && row.dataset.category !== category;
      if (!row.hidden) shown += 1;
    });
    filters.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    });
    count.textContent = `${shown} ${shown === 1 ? SITE.menu.countOne : SITE.menu.countMany}`;
  }

  SITE.menu.filters.forEach(filter => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.filter = filter.id;
    button.textContent = filter.label;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => setFilter(filter.id));
    filters.append(button);
  });
  setFilter('all');

  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#navigazione');
  toggle.hidden = false;
  document.body.classList.add('has-js');
  const setNavigation = open => {
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setNavigation(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavigation(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setNavigation(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setNavigation(false);
  });
  const mobileMedia = window.matchMedia('(max-width: 760px)');
  mobileMedia.addEventListener('change', () => setNavigation(false));

  const quickActions = document.querySelector('.mobile-actions');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      quickActions.hidden = entries[0].isIntersecting;
    }, {threshold: 0, rootMargin: '-90px 0px 0px 0px'});
    observer.observe(document.querySelector('.hero'));
  }

  const sourceList = document.querySelector('#source-links');
  SITE.demo.sources.forEach(source => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = source.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = `${source.label} ↗`;
    li.append(link);
    sourceList.append(li);
  });
})();
