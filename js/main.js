/* =============================================
   iamLudok Portfolio — main.js
   ============================================= */

// ---- Typing effect ----
(function initTyping() {
  const el     = document.getElementById('typing-name');
  const cursor = document.getElementById('cursor');
  if (!el) return;

  const lines = [
    'Luken Iriondo Bilbao',
    'iamLudok',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting  = false;
  let pauseTimer = null;

  const TYPE_SPEED   = 75;
  const DELETE_SPEED = 40;
  const PAUSE_AFTER  = 2200;
  const PAUSE_BEFORE = 400;

  function tick() {
    const current = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting  = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  setTimeout(tick, 600);
})();


// ---- Tab navigation ----
(function initTabs() {
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.section');

  function activateTab(target) {
    tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.target === target));
    sections.forEach(sec => sec.classList.toggle('active', sec.id === target));
    // Close mobile menu if open
    const tabs = document.querySelector('.navbar-tabs');
    const toggle = document.querySelector('.menu-toggle');
    if (tabs) tabs.classList.remove('open');
    if (toggle) toggle.classList.remove('open');
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.target));
  });

  // Support direct URL hash navigation
  function handleHash() {
    const hash = window.location.hash.replace('#', '');
    const valid = ['me', 'projects', 'experience', 'links'];
    if (hash && valid.includes(hash)) activateTab(hash);
  }
  window.addEventListener('hashchange', handleHash);
  handleHash();
})();


// ---- Mobile menu toggle ----
(function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const tabs   = document.querySelector('.navbar-tabs');
  if (!toggle || !tabs) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    tabs.classList.toggle('open');
  });
})();


// ---- Project filters ----
(function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');

  function applyFilter(filter) {
    filterBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });
})();


// ---- Footer year ----
(function initFooter() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();
