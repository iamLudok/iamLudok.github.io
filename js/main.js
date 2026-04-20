/* =============================================
   iamLudok Portfolio — main.js
   ============================================= */

// ---- Typing effect ----
(function initTyping() {
  const el = document.getElementById('typing-name');
  if (!el) return;

  const lines = [
    'Luken Iriondo Bilbao',
    'iamLudok',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting  = false;
  let pauseTimer = null;
  let glitching  = false;
  let glitchChars = 0;

  const TYPE_SPEED   = 75;
  const DELETE_SPEED = 40;
  const PAUSE_AFTER  = 2200;
  const PAUSE_BEFORE = 400;

  const GLITCH_WORD         = ' privacy';
  const GLITCH_TYPE_SPEED   = 20;
  const GLITCH_DELETE_SPEED = 12;
  const GLITCH_CHANCE       = 0.4;

  function tick() {
    const current = lines[lineIndex];

    if (deleting) {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting  = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    } else {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        if (!glitching && Math.random() < GLITCH_CHANCE) {
          glitching  = true;
          glitchChars = 0;
          setTimeout(glitchType, 350);
          return;
        }
        deleting = true;
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    }
  }

  function glitchType() {
    const current = lines[lineIndex];
    if (glitchChars < GLITCH_WORD.length) {
      glitchChars++;
      el.textContent = current + GLITCH_WORD.slice(0, glitchChars);
      setTimeout(glitchType, GLITCH_TYPE_SPEED);
    } else {
      setTimeout(glitchDelete, 200);
    }
  }

  function glitchDelete() {
    const current = lines[lineIndex];
    if (glitchChars > 0) {
      glitchChars--;
      el.textContent = current + GLITCH_WORD.slice(0, glitchChars);
      setTimeout(glitchDelete, GLITCH_DELETE_SPEED);
    } else {
      glitching = false;
      deleting  = true;
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(tick, PAUSE_AFTER);
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
    const hash = globalThis.location.hash.replace('#', '');
    const valid = ['me', 'projects', 'challenges', 'experience', 'links'];
    if (hash && valid.includes(hash)) activateTab(hash);
  }
  globalThis.addEventListener('hashchange', handleHash);
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


// ---- Easter egg: Paranoid Mode (type "privacy") ----
(function initParanoidMode() {
  let buffer = '';
  const TARGET = 'privacy';

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    buffer = (buffer + e.key).slice(-TARGET.length);
    if (buffer.toLowerCase() === TARGET) {
      buffer = '';
      startMatrix();
    }
  });

  function startMatrix() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    document.body.appendChild(canvas);

    const ctx    = canvas.getContext('2d');
    canvas.width  = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;

    const fontSize = 15;
    const cols     = Math.floor(canvas.width / fontSize);
    const drops    = Array.from({ length: cols }, () => Math.random() * -40);

    let elapsed = 0;

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff88';
      ctx.font      = `${fontSize}px 'JetBrains Mono', monospace`;

      drops.forEach((y, i) => {
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', i * fontSize, y * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) drops[i] = 0;
      });

      elapsed += 50;
      if (elapsed >= 2900) {
        clearInterval(interval);
        canvas.remove();
        showParanoidMessage();
      }
    }, 50);
  }

  function showParanoidMessage() {
    const overlay = document.getElementById('paranoid-overlay');
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');

    setTimeout(() => {
      overlay.classList.remove('active');
      setTimeout(() => overlay.setAttribute('aria-hidden', 'true'), 500);
    }, 2800);
  }
})();


// ---- Easter egg: You are trackable (click Privacy & Data view card) ----
(function initTrackingEgg() {
  const modal    = document.getElementById('tracking-modal');
  const content  = document.getElementById('tracking-content');
  const closeBtn = document.getElementById('tracking-close');
  const card     = document.getElementById('privacy-card');
  if (!modal || !card) return;

  card.style.cursor = 'pointer';
  card.addEventListener('click', openTrackingModal);

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  async function openTrackingModal() {
    content.textContent = '';
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('active');

    const i18n    = globalThis.i18n || { t: k => k };
    const ua      = navigator.userAgent;
    const lang    = navigator.language || 'unknown';
    const tz      = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const res     = `${globalThis.screen.width}x${globalThis.screen.height}`;
    const os      = detectOS(ua);
    const browser = detectBrowser(ua);

    let ip = 'resolving...';

    const lines = [
      { text: i18n.t('tracking_cmd'), color: '#00ff88' },
      { text: '' },
      { text: i18n.t('tracking_ip') + ip },
      { text: i18n.t('tracking_os') + os },
      { text: i18n.t('tracking_browser') + browser },
      { text: i18n.t('tracking_lang') + lang },
      { text: i18n.t('tracking_tz') + tz },
      { text: i18n.t('tracking_res') + res },
      { text: '' },
      { text: i18n.t('tracking_footer1') },
      { text: i18n.t('tracking_footer2'), color: '#cc0000' },
    ];

    await typeLines(content, lines);

    // Now fetch real IP and replace placeholder
    try {
      const r    = await fetch('https://api.ipify.org?format=json');
      const data = await r.json();
      ip = data.ip;
    } catch {
      ip = 'blocked (good instinct)';
    }

    // Update IP line in rendered text
    content.textContent = content.textContent.replace('resolving...', ip);
  }

  function typeLines(el, lines) {
    return new Promise(resolve => {
      let i = 0;
      function nextLine() {
        if (i >= lines.length) { resolve(); return; }
        const line = lines[i++];
        el.textContent += line.text + '\n';
        el.scrollTop = el.scrollHeight;
        setTimeout(nextLine, line.text === '' ? 60 : 90);
      }
      nextLine();
    });
  }

  function detectOS(ua) {
    if (/Windows NT/.test(ua))         return 'Windows';
    if (/Android/.test(ua))            return 'Android';
    if (/iPhone|iPad|iPod/.test(ua))   return 'iOS';
    if (/Macintosh/.test(ua))          return 'macOS';
    if (/Linux/.test(ua))              return 'Linux';
    return 'Unknown';
  }

  function detectBrowser(ua) {
    if (/Firefox\//.test(ua))          return 'Firefox';
    if (/Edg\//.test(ua))              return 'Edge';
    if (/OPR\/|Opera/.test(ua))        return 'Opera';
    if (/Chrome\//.test(ua))           return 'Chrome';
    if (/Safari\//.test(ua))           return 'Safari';
    return 'Unknown';
  }
})();
