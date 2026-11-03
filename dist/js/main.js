/* Testi, prezzi e collegamenti sono nell’HTML. Qui solo miglioramenti progressivi. */
(() => {
  'use strict';
  document.body.classList.add('has-js');
  const marqueeToggle = document.querySelector('.marquee-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncMotionControl = () => { marqueeToggle.hidden = reducedMotion.matches; };
  syncMotionControl();
  reducedMotion.addEventListener('change', syncMotionControl);
  marqueeToggle.addEventListener('click', () => {
    const paused = marqueeToggle.getAttribute('aria-pressed') !== 'true';
    marqueeToggle.setAttribute('aria-pressed', String(paused));
    marqueeToggle.setAttribute('aria-label', paused ? 'Riprendi la fascia scorrevole' : 'Metti in pausa la fascia scorrevole');
    marqueeToggle.textContent = paused ? 'Riprendi' : 'Pausa';
    document.querySelector('.hero-strip').classList.toggle('is-paused', paused);
  });
  const filters = document.querySelector('#menu-filters');
  const groups = [...document.querySelectorAll('[data-menu-group]')];
  const count = document.querySelector('#menu-count');
  const rows = [...document.querySelectorAll('.menu-item')];
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const filter = button.dataset.filter;
    rows.forEach(row => {
      const category = row.dataset.category.split(' ');
      const groupId = row.closest('[data-menu-group]').querySelector('h3').id;
      row.hidden = !(filter === 'all'
        || (filter === 'lasagne' && groupId === 'lasagne-title')
        || (filter === 'antipasti-insalate' && category.some(value => ['antipasti', 'insalate'].includes(value)))
        || category.includes(filter));
    });
    groups.forEach(group => { group.hidden = [...group.querySelectorAll('.menu-item')].every(row => row.hidden); });
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const shown = rows.filter(row => !row.hidden).length;
    count.textContent = `${shown} ${shown === 1 ? 'proposta' : 'proposte'}`;
  });
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
  window.matchMedia('(max-width: 1080px)').addEventListener('change', () => setNavigation(false));
  const quickActions = document.querySelector('.mobile-actions');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { quickActions.hidden = entries[0].isIntersecting; }, {
      threshold: 0, rootMargin: '-90px 0px 0px 0px'
    }).observe(document.querySelector('.hero'));
  } else quickActions.hidden = false;

  const form = document.querySelector('#booking-form');
  const date = form.elements.date;
  const shift = form.elements.shift;
  const people = form.elements.people;
  const order = form.elements.order;
  const notes = form.elements.notes;
  const send = document.querySelector('#whatsapp-send');
  const preview = document.querySelector('#message-preview');
  const todayInTurin = () => {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    const get = type => parts.find(part => part.type === type).value;
    return `${get('year')}-${get('month')}-${get('day')}`;
  };
  form.hidden = false;
  const updateMessage = () => {
    date.min = todayInTurin();
    const isTable = form.elements.service.value === 'tavolo';
    document.querySelector('#people-field').hidden = !isTable;
    document.querySelector('#order-field').hidden = isTable;
    people.disabled = !isTable;
    people.required = isTable;
    order.disabled = isTable;
    order.required = !isTable;
    order.setCustomValidity(!isTable && !order.value.trim() ? 'Indica cosa vorresti ordinare per asporto.' : '');
    const selected = date.value ? new Date(`${date.value}T12:00:00Z`) : null;
    date.setCustomValidity(selected?.getUTCDay() === 3 ? 'Il mercoledì siamo chiusi. Scegli un altro giorno.' : '');
    const formatted = selected ? new Intl.DateTimeFormat('it-IT', {
      timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    }).format(selected) : '[scegli il giorno]';
    let message = isTable
      ? `Ciao Lasagnas! Vorrei prenotare un tavolo per ${people.value || '[numero persone]'} persone.`
      : 'Ciao Lasagnas! Vorrei ordinare per asporto.';
    message += `\nGiorno: ${formatted}.\nTurno: ${shift.value}.`;
    if (!isTable) message += `\nOrdine: ${order.value.trim() || '[indica le proposte e le quantità]'}.`;
    if (notes.value.trim()) message += `\nOrario preferito e note: ${notes.value.trim()}`;
    message += '\nPotete confermarmi la disponibilità? Grazie!';
    preview.textContent = message;
    send.href = `https://wa.me/393514570039?text=${encodeURIComponent(message)}`;
  };
  form.addEventListener('input', updateMessage);
  form.addEventListener('change', updateMessage);
  send.addEventListener('click', event => {
    updateMessage();
    if (!form.reportValidity()) event.preventDefault();
  });
  form.addEventListener('submit', event => { event.preventDefault(); send.click(); });
  updateMessage();
})();
