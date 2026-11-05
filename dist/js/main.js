/* Il menu e le opzioni WhatsApp sono nell’HTML. Qui si aggiornano filtri e richiesta. */
(() => {
  'use strict';
  document.body.classList.add('has-js');

  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#navigazione');
  toggle.hidden = false;
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
  window.matchMedia('(max-width: 990px)').addEventListener('change', () => setNavigation(false));

  const quickActions = document.querySelector('.mobile-actions');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { quickActions.hidden = entry.isIntersecting; }, {
      rootMargin: '-66px 0px 0px 0px'
    }).observe(document.querySelector('.hero'));
  } else {
    quickActions.hidden = false;
  }

  const menu = document.querySelector('#menu-list');
  const filters = document.querySelector('#menu-filters');
  const menuCount = document.querySelector('#menu-count');
  const groups = [...menu.querySelectorAll('[data-menu-group]')];
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;

    const filter = button.dataset.filter;
    let shown = 0;
    for (const group of groups) {
      let groupShown = 0;
      for (const card of group.querySelectorAll('.menu-item')) {
        const matches = filter === 'all' || filter === group.dataset.menuGroup
          || (filter === 'veg' && card.hasAttribute('data-diet'));
        card.hidden = !matches;
        groupShown += Number(matches);
      }
      group.hidden = groupShown === 0;
      shown += groupShown;
    }
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    menuCount.textContent = `${shown} ${shown === 1 ? 'proposta' : 'proposte'}`;
  });

  const dishes = new Map([...menu.querySelectorAll('.menu-item')].map(card => [card.id, {
    name: card.querySelector('h4').textContent,
    button: card.querySelector('.item-select'),
    shift: card.closest('[data-menu-group]').dataset.shift
  }]));
  const selection = new Map();
  const selectedDishes = document.querySelector('#selected-dishes');
  const selectedTemplate = document.querySelector('#selected-dish-template');
  const selectionEmpty = document.querySelector('#selection-empty');
  const selectionCount = document.querySelector('#selection-count');
  const selectionStatus = document.querySelector('#selection-status');
  const selectionHours = document.querySelector('#selection-hours');
  const selectionBack = document.querySelector('#selection-back');
  const quickCount = document.querySelector('#quick-count');

  const form = document.querySelector('#booking-form');
  const { date, people, notes, service, shift } = form.elements;
  const peopleField = document.querySelector('#people-field');
  const send = document.querySelector('#whatsapp-send');
  const preview = document.querySelector('#message-preview');
  const turinDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit'
  });
  const italianDate = new Intl.DateTimeFormat('it-IT', {
    timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  const updateMessage = () => {
    const today = turinDate.formatToParts(new Date());
    const datePart = type => today.find(part => part.type === type).value;
    date.min = `${datePart('year')}-${datePart('month')}-${datePart('day')}`;

    const isTable = service.value === 'tavolo';
    const isLunch = shift.value === 'pranzo';
    peopleField.hidden = people.disabled = !isTable;
    people.required = isTable;
    const selectedDate = date.valueAsDate;
    date.setCustomValidity(selectedDate?.getUTCDay() === 3 ? 'Il mercoledì siamo chiusi. Scegli un altro giorno.' : '');

    const requested = [...selection.values()];
    const otherShift = requested.some(({ dish }) => dish.shift && dish.shift !== shift.value);
    selectionHours.hidden = !otherShift;
    selectionHours.textContent = isLunch
      ? 'Le bruschette sono disponibili a cena. Chiedi al locale di confermare i piatti scelti.'
      : 'Le insalate sono disponibili a pranzo. Chiedi al locale di confermare i piatti scelti.';

    const message = [
      isTable
        ? `Ciao Lasagnas! Vorrei prenotare un tavolo per ${people.value || '[numero di persone]'} persone.`
        : 'Ciao Lasagnas! Vorrei ordinare per asporto, con ritiro in Via Giuseppe Parini 14/B, Torino.',
      `Giorno: ${selectedDate ? italianDate.format(selectedDate) : '[scegli il giorno]'}.`,
      `Turno: ${isLunch ? 'Pranzo (12:00–15:00)' : 'Cena (19:00–22:00)'}.`
    ];
    if (requested.length) {
      message.push('Piatti scelti (se disponibili):', ...requested.map(({ dish, quantity }) => `• ${quantity} × ${dish.name}`));
    }
    if (notes.value.trim()) message.push(`Orario preferito e note: ${notes.value.trim()}`);
    message.push('Potete confermarmi la disponibilità? Grazie!');
    const text = message.join('\n');
    preview.textContent = text;
    send.href = `https://wa.me/393514570039?text=${encodeURIComponent(text)}`;
  };

  const setQuantity = (id, quantity) => {
    const dish = dishes.get(id);
    let row = selection.get(id)?.row;
    if (quantity > 0) {
      if (!row) {
        row = selectedTemplate.content.firstElementChild.cloneNode(true);
        row.dataset.dish = id;
        row.querySelector('.selected-name').textContent = dish.name;
        row.querySelector('[data-delta="-1"]').setAttribute('aria-label', `Togli una porzione di ${dish.name}`);
        row.querySelector('[data-delta="1"]').setAttribute('aria-label', `Aggiungi una porzione di ${dish.name}`);
        selectedDishes.append(row);
      }
      row.querySelector('.quantity').textContent = quantity;
      selection.set(id, { dish, quantity, row });
    } else {
      row.remove();
      selection.delete(id);
    }

    dish.button.setAttribute('aria-pressed', String(quantity > 0));
    dish.button.firstElementChild.textContent = quantity > 0 ? '✓ Scelto' : '+ Scegli';
    const portions = [...selection.values()].reduce((total, item) => total + item.quantity, 0);
    selectionCount.textContent = quickCount.textContent = portions;
    quickCount.hidden = selectedDishes.hidden = portions === 0;
    selectionEmpty.hidden = portions > 0;
    selectionStatus.textContent = quantity > 0
      ? `${dish.name}: ${quantity} ${quantity === 1 ? 'porzione selezionata' : 'porzioni selezionate'}.`
      : `${dish.name} rimosso dalla selezione.`;
    updateMessage();
  };

  menu.addEventListener('click', event => {
    const button = event.target.closest('.item-select');
    if (!button) return;
    const id = button.closest('.menu-item').id;
    setQuantity(id, selection.has(id) ? 0 : 1);
  });

  selectedDishes.addEventListener('click', event => {
    const button = event.target.closest('button[data-delta]');
    if (!button) return;
    const row = button.closest('.selected-dish');
    const id = row.dataset.dish;
    const quantity = selection.get(id).quantity + Number(button.dataset.delta);
    const nextControl = (row.nextElementSibling || row.previousElementSibling)?.querySelector('button');
    setQuantity(id, quantity);
    if (quantity === 0) (nextControl || selectionBack).focus({ preventScroll: true });
  });

  form.addEventListener('input', updateMessage);
  form.addEventListener('change', updateMessage);
  send.addEventListener('click', event => {
    updateMessage();
    if (!form.reportValidity()) event.preventDefault();
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    send.click();
  });
  updateMessage();
})();
