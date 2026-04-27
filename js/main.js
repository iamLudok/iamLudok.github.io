/* =============================================
   iamLudok Portfolio — main.js
   ============================================= */

// ---- Lightbox ----
(function initLightbox() {
  const dialog = document.getElementById('lightbox');
  const img    = document.getElementById('lightbox-img');
  const close  = document.getElementById('lightbox-close');

  document.querySelectorAll('.preview-img-wrap .preview-img').forEach(thumb => {
    thumb.style.cursor = 'zoom-in';
    thumb.addEventListener('click', () => {
      img.src = thumb.src;
      img.alt = thumb.alt;
      dialog.showModal();
    });
  });

  const closeLightbox = () => { dialog.close(); img.src = ''; };
  close.addEventListener('click', closeLightbox);
  img.addEventListener('click', closeLightbox);
  dialog.addEventListener('click', e => { if (e.target === dialog) closeLightbox(); });
  dialog.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
})();

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

  const brand = document.querySelector('.navbar-brand');
  if (brand) brand.addEventListener('click', () => {
    activateTab('me');
    globalThis.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Intercept clicks on internal element anchors (e.g. #project-skai)
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href').slice(1);
    const valid = ['me', 'projects', 'challenges', 'experience', 'links'];
    if (valid.includes(hash)) return; // let tab buttons handle these
    const el = document.getElementById(hash);
    if (!el) return;
    e.preventDefault();
    const section = el.closest('.section');
    if (section) activateTab(section.id);
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
  });

  // Support direct URL hash navigation
  function handleHash() {
    const hash = globalThis.location.hash.replace('#', '');
    if (!hash) return;
    const valid = ['me', 'projects', 'challenges', 'experience', 'links'];
    if (valid.includes(hash)) activateTab(hash);
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
    globalThis.markCTFSolved?.('ctf-1');
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
    globalThis.markCTFSolved?.('ctf-2');
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


// ---- Easter egg: Clap detector (click $ in footer → 2 claps → flag) ----
(function initClapEgg() {
  const trigger  = document.getElementById('footer-trigger');
  const overlay  = document.getElementById('clap-overlay');
  const content  = document.getElementById('clap-content');
  const closeBtn = document.getElementById('clap-close');
  if (!trigger || !overlay) return;

  let listening    = false;
  let stream       = null;
  let audioCtx     = null;
  let clapCount    = 0;
  let lastClapTime = 0;

  trigger.addEventListener('click', async () => {
    if (listening) return;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      startListening();
    } catch { /* permission denied — fail silently */ }
  });

  closeBtn.addEventListener('click', stopAndClose);
  overlay.addEventListener('click', e => { if (e.target === overlay) stopAndClose(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && listening) stopListening(); });

  function startListening() {
    listening  = true;
    clapCount  = 0;
    lastClapTime = 0;

    const AudioCtx = globalThis.AudioContext || /** @type {any} */ (globalThis).webkitAudioContext;
    audioCtx = new AudioCtx();
    const source   = audioCtx.createMediaStreamSource(stream);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);

    const dataArray = new Float32Array(analyser.fftSize);
    let wasLoud = false;

    trigger.textContent = '$ ○○';
    trigger.classList.add('listening');

    function tick() {
      if (!listening) return;
      analyser.getFloatTimeDomainData(dataArray);

      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) sum += dataArray[i] * dataArray[i];
      const rms = Math.sqrt(sum / dataArray.length);

      const now = Date.now();
      if (!wasLoud && rms > 0.12 && now - lastClapTime > 400) {
        wasLoud      = true;
        lastClapTime = now;
        clapCount++;
        trigger.textContent = `$ ${'●'.repeat(clapCount)}${'○'.repeat(2 - clapCount)}`;
        if (clapCount >= 2) { stopListening(); showEasterEgg(); return; }
      } else if (rms < 0.05) {
        wasLoud = false;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function stopListening() {
    listening = false;
    stream?.getTracks().forEach(t => t.stop());
    stream = null;
    audioCtx?.close();
    audioCtx = null;
    trigger.textContent = '$';
    trigger.classList.remove('listening');
  }

  function stopAndClose() {
    stopListening();
    overlay.classList.remove('active');
    setTimeout(() => overlay.setAttribute('aria-hidden', 'true'), 300);
  }

  async function showEasterEgg() {
    globalThis.markCTFSolved?.('ctf-3');
    content.textContent = '';
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');

    const lines = [
      '> signal received.',
      '',
      '> nice ears.',
    ];

    for (const line of lines) {
      content.textContent += line + '\n';
      let delay = 60;
      if (line.startsWith('> unlock')) delay = 300;
      else if (line.startsWith('>'))    delay = 130;
      else if (line.startsWith('  '))   delay = 220;
      await new Promise(r => setTimeout(r, delay));
    }
  }
})();


// ---- Easter egg: tap DJ card at 120–130 BPM → visualizer ----
(function initDJEgg() {
  const djCard = document.getElementById('dj-card');
  if (!djCard) return;

  const BPM_MIN  = 115;
  const BPM_MAX  = 135;
  const DURATION = 8000;

  let clickTimes = [];
  djCard.style.cursor = 'pointer';

  djCard.addEventListener('click', () => {
    const now = Date.now();

    // Reset if last click was too long ago
    if (clickTimes.length && now - clickTimes.at(-1) > 1200) {
      clickTimes = [];
    }
    clickTimes.push(now);

    if (clickTimes.length < 4) return;

    const intervals = [];
    for (let i = 1; i < clickTimes.length; i++) {
      intervals.push(clickTimes[i] - clickTimes[i - 1]);
    }
    const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const bpm = Math.round(60000 / avg);

    if (bpm >= BPM_MIN && bpm <= BPM_MAX) {
      clickTimes = [];
      startVisualizer(bpm);
    } else {
      clickTimes = clickTimes.slice(-3);
    }
  });

  function startVisualizer(bpm) {
    globalThis.markCTFSolved?.('ctf-4');
    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
      position: 'fixed', inset: '0', zIndex: '9000',
      opacity: '0', transition: 'opacity 0.4s ease',
    });
    document.body.appendChild(canvas);

    const ctx   = canvas.getContext('2d');
    canvas.width  = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;

    const BAR_COUNT    = 48;
    const beatInterval = 60000 / bpm;
    const heights      = new Array(BAR_COUNT).fill(0.1);
    const targets      = new Array(BAR_COUNT).fill(0.1);
    let lastBeat = Date.now();
    let startTime = Date.now();

    requestAnimationFrame(() => { canvas.style.opacity = '1'; });

    function newTargets() {
      for (let i = 0; i < BAR_COUNT; i++) {
        const center = BAR_COUNT / 2;
        const dist   = Math.abs(i - center) / center;
        targets[i]   = (0.1 + Math.random() * 0.9) * (1 - dist * 0.3);
      }
    }
    newTargets();

    function draw() {
      const now     = Date.now();
      const elapsed = now - startTime;

      if (now - lastBeat >= beatInterval) { lastBeat = now; newTargets(); }

      for (let i = 0; i < BAR_COUNT; i++) {
        heights[i] += (targets[i] - heights[i]) * 0.15;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0,0,0,0.88)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barW  = canvas.width / BAR_COUNT;
      const gap   = 2;
      const maxH  = canvas.height * 0.65;
      const baseY = canvas.height * 0.82;

      for (let i = 0; i < BAR_COUNT; i++) {
        const h    = heights[i] * maxH;
        const x    = i * barW + gap / 2;
        const grad = ctx.createLinearGradient(0, baseY - h, 0, baseY);
        grad.addColorStop(0, 'rgba(0,255,136,0.95)');
        grad.addColorStop(1, 'rgba(0,255,136,0.15)');
        ctx.fillStyle = grad;
        ctx.fillRect(x, baseY - h, barW - gap, h);
      }

      if (elapsed < 2200) {
        const alpha = elapsed < 1600 ? 1 : (2200 - elapsed) / 600;
        ctx.fillStyle = `rgba(0,255,136,${alpha * 0.7})`;
        ctx.font = `700 ${Math.round(canvas.width * 0.055)}px 'JetBrains Mono',monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(`${bpm} BPM`, canvas.width / 2, canvas.height * 0.44);
      }

      if (elapsed < DURATION - 500) {
        requestAnimationFrame(draw);
      } else {
        canvas.style.transition = 'opacity 0.5s ease';
        canvas.style.opacity    = '0';
        setTimeout(() => canvas.remove(), 500);
      }
    }

    requestAnimationFrame(draw);
    canvas.addEventListener('click', () => {
      canvas.style.opacity = '0';
      setTimeout(() => canvas.remove(), 500);
    }, { once: true });
  }
})();


// ---- Skill ↔ Project crosslinks ----
(function initSkillProjectLinks() {
  // Tags whose text differs from the skill badge text
  const ALIASES = {
    'HTML5':      ['html', 'html5'],
    'CSS3':       ['css', 'css3'],
    'JavaScript': ['js', 'javascript'],
  };

  function getAliases(skill) {
    return ALIASES[skill] || [skill.toLowerCase()];
  }

  const badges = document.querySelectorAll('.skill-badge');
  const aliasToSkill = new Map();

  badges.forEach(badge => {
    const skill = badge.textContent.trim();
    badge.dataset.skillName = skill;
    getAliases(skill).forEach(a => aliasToSkill.set(a, skill));
  });

  // Highlight tags that correspond to a real skill
  document.querySelectorAll('.project-tags .tag').forEach(tag => {
    const skill = aliasToSkill.get(tag.textContent.trim().toLowerCase());
    if (skill) {
      tag.classList.add('tag--skill');
      tag.dataset.skillName = skill;
    }
  });

  // Build skill → [{title, sectionId}] map
  const skillProjects = new Map();
  document.querySelectorAll('.project-card').forEach(card => {
    const title = card.querySelector('.project-title')?.textContent.trim();
    const sectionId = card.closest('section')?.id;
    card.querySelectorAll('.tag--skill').forEach(tag => {
      const skill = tag.dataset.skillName;
      if (!skillProjects.has(skill)) skillProjects.set(skill, []);
      const list = skillProjects.get(skill);
      if (!list.some(p => p.title === title)) list.push({ title, sectionId });
    });
  });

  // Shared popover element
  const popover = document.createElement('div');
  popover.className = 'skill-popover';
  popover.setAttribute('aria-hidden', 'true');
  document.body.appendChild(popover);
  let hideTimer;

  badges.forEach(badge => {
    const skill = badge.dataset.skillName;
    const projects = skillProjects.get(skill);
    if (!projects?.length) return;

    // Append [n] counter
    const counter = document.createElement('span');
    counter.className = 'skill-count';
    counter.textContent = `[${projects.length}]`;
    badge.appendChild(counter);
    badge.classList.add('skill-badge--linked');

    badge.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
      const rect = badge.getBoundingClientRect();

      popover.innerHTML = '';
      projects.forEach((p, i) => {
        if (i > 0) popover.appendChild(document.createElement('br'));
        const arrow = document.createElement('span');
        arrow.className = 'sp-arrow';
        arrow.textContent = '→ ';
        popover.appendChild(arrow);
        popover.appendChild(document.createTextNode(p.title));
      });

      popover.classList.add('active');
      popover.setAttribute('aria-hidden', 'false');

      requestAnimationFrame(() => {
        const ph = popover.offsetHeight;
        const pw = popover.offsetWidth;
        let top  = rect.top - ph - 10;
        let left = rect.left;

        if (rect.top < ph + 16) top = rect.bottom + 10;
        if (left + pw > window.innerWidth - 16) left = window.innerWidth - pw - 16;
        if (left < 8) left = 8;

        popover.style.top  = top  + 'px';
        popover.style.left = left + 'px';
      });
    });

    badge.addEventListener('mouseleave', () => {
      hideTimer = setTimeout(() => {
        popover.classList.remove('active');
        popover.setAttribute('aria-hidden', 'true');
      }, 200);
    });

    badge.addEventListener('click', () => {
      popover.classList.remove('active');
      const target = projects.some(p => p.sectionId === 'projects')
        ? 'projects'
        : (projects[0]?.sectionId || 'projects');
      document.querySelector(`.tab-btn[data-target="${target}"]`)?.click();
      setTimeout(() => applySkillFilter(skill, target), 60);
    });
  });

  function applySkillFilter(skill, sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.querySelector('.skill-filter-bar')?.remove();

    const bar = document.createElement('div');
    bar.className = 'skill-filter-bar';

    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = '$';
    bar.appendChild(prompt);
    bar.appendChild(document.createTextNode(' filter: '));

    const nameSpan = document.createElement('span');
    nameSpan.className = 'skill-filter-name';
    nameSpan.textContent = skill;
    bar.appendChild(nameSpan);

    const clearBtn = document.createElement('button');
    clearBtn.className = 'skill-filter-clear';
    clearBtn.setAttribute('aria-label', 'Clear filter');
    clearBtn.textContent = '×';
    bar.appendChild(clearBtn);

    section.querySelector('.projects-grid')?.parentElement.insertBefore(
      bar,
      section.querySelector('.projects-grid')
    );

    section.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('card--dimmed', !card.querySelector(`.tag[data-skill-name="${skill}"]`));
    });

    clearBtn.addEventListener('click', () => {
      bar.remove();
      section.querySelectorAll('.project-card').forEach(c => c.classList.remove('card--dimmed'));
    });
  }
})();


// ---- CTF Board ----
(function initCTFBoard() {
  const POINTS = { 'ctf-1': 150, 'ctf-2': 75, 'ctf-3': 225, 'ctf-4': 300 };
  const TOTAL  = 750;

  function getSolved() {
    try { return JSON.parse(localStorage.getItem('ctf-solved') || '[]'); }
    catch { return []; }
  }

  function updateBoard() {
    const solved = getSolved();
    let score = 0;

    Object.entries(POINTS).forEach(([id, pts]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const isSolved = solved.includes(id);
      el.classList.toggle('solved', isSolved);
      el.querySelector('.ctf-status').textContent = isSolved ? '[✓]' : '[ ]';
      if (isSolved) score += pts;
    });

    const scoreEl = document.getElementById('ctf-score');
    if (scoreEl) scoreEl.textContent = `${score} / ${TOTAL} pts`;

    const allEl = document.getElementById('ctf-all-solved');
    if (allEl) allEl.classList.toggle('visible', solved.length >= Object.keys(POINTS).length);
  }

  globalThis.markCTFSolved = function (id) {
    const solved = getSolved();
    if (solved.includes(id)) return;
    solved.push(id);
    localStorage.setItem('ctf-solved', JSON.stringify(solved));
    updateBoard();
  };

  updateBoard();
})();
