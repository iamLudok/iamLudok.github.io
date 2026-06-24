/* =============================================
   iamLudok Portfolio - terminal.js
   Interactive terminal. No backend, no LLM:
   commands read the existing DOM so they stay
   in sync with the rest of the site.
   ============================================= */

(function initTerminal() {
  const overlay  = document.getElementById('terminal-overlay');
  const output   = document.getElementById('term-output');
  const input    = document.getElementById('term-input');
  const closeBtn = document.getElementById('terminal-close');
  const fab      = document.getElementById('terminal-btn');
  if (!overlay || !input) return;

  const SECTIONS = ['me', 'projects', 'challenges', 'experience', 'links'];
  const history  = [];
  let histIndex  = -1;

  const i18n = () => globalThis.i18n || { t: k => k, apply: () => {}, getLang: () => 'en' };

  /* ---- output helpers ---- */
  function line(text = '', cls = '') {
    const div = document.createElement('div');
    div.className = 'term-line' + (cls ? ' ' + cls : '');
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
    return div;
  }

  function echoCommand(raw) {
    const div = document.createElement('div');
    div.className = 'term-line term-echo';
    const p = document.createElement('span');
    p.className = 'prompt';
    p.textContent = '$ ';
    div.appendChild(p);
    div.appendChild(document.createTextNode(raw));
    output.appendChild(div);
  }

  /* ---- data readers (single source of truth = the DOM) ---- */
  function readProjects(filter) {
    return [...document.querySelectorAll('.project-card[data-project]')]
      .filter(c => !filter || c.dataset.category === filter)
      .map(c => ({
        title: c.querySelector('.project-title')?.textContent.trim() || c.dataset.project,
        cat:   c.dataset.category,
      }));
  }

  function readSkills() {
    return [...document.querySelectorAll('.skill-category')].map(cat => ({
      label:  cat.querySelector('.skill-category-label')?.textContent.trim() || '',
      badges: [...cat.querySelectorAll('.skill-badge')].map(b => b.textContent.trim()),
    })).filter(c => c.badges.length);
  }

  function readExperience() {
    return [...document.querySelectorAll('#experience .timeline-item')].map(it => ({
      date:  it.querySelector('.timeline-date')?.textContent.trim() || '',
      title: it.querySelector('.timeline-title')?.textContent.trim() || '',
      sub:   it.querySelector('.timeline-sub')?.textContent.trim() || '',
    })).filter(e => e.title);
  }

  function readLinks() {
    return [...document.querySelectorAll('.social-card')].map(a => ({
      name: a.querySelector('.social-name')?.textContent.trim() || '',
      href: a.getAttribute('href') || '',
    })).filter(l => l.name);
  }

  /* ---- commands ---- */
  const COMMANDS = {
    help() {
      line('available commands:', 'term-accent');
      [
        ['help',            'this list'],
        ['whoami',          'who I am'],
        ['about',           'short bio'],
        ['projects [cat]',  'list projects (cat: dev, hackathon, wip, private)'],
        ['skills',          'tech I work with'],
        ['experience',      'studies & work'],
        ['ctf',             'visitor challenge status'],
        ['links',           'where to find me'],
        ['cd <section>',    'go to ' + SECTIONS.join(' | ')],
        ['lang <code>',     'switch language (en | es | eu)'],
        ['neofetch',        'system info'],
        ['clear',           'clear the screen'],
      ].forEach(([cmd, desc]) => line(`  ${cmd.padEnd(18)} ${desc}`));
    },

    whoami() {
      line('Luken Iriondo Bilbao · iamLudok', 'term-accent');
      line(i18n().t('hero_sub'));
      line(i18n().t('hero_location'));
    },

    about() {
      const tmp = document.createElement('div');
      tmp.innerHTML = i18n().t('about_text');
      line(tmp.textContent);
    },

    projects(args) {
      const cat = args[0];
      const valid = ['dev', 'hackathon', 'wip', 'private'];
      if (cat && !valid.includes(cat)) {
        line(`unknown category: ${cat}`, 'term-error');
        line(`try: ${valid.join(', ')}`);
        return;
      }
      const list = readProjects(cat);
      if (!list.length) { line('no projects found.', 'term-error'); return; }
      line(cat ? `projects [${cat}]:` : 'projects:', 'term-accent');
      list.forEach(p => line(`  → ${p.title.padEnd(26)} [${p.cat}]`));
      line('');
      line("run 'cd projects' to open the section.", 'term-dim');
    },

    skills() {
      readSkills().forEach(c => {
        line(c.label || 'skills', 'term-accent');
        line('  ' + c.badges.join(', '));
      });
    },

    experience() {
      const list = readExperience();
      if (!list.length) { line('nothing to show.', 'term-error'); return; }
      line('studies & experience:', 'term-accent');
      list.forEach(e => {
        line(`  ${e.title}${e.sub ? ' · ' + e.sub : ''}`);
        if (e.date) line(`    ${e.date}`, 'term-dim');
      });
    },

    ctf() {
      const score = document.getElementById('ctf-score')?.textContent.trim() || '';
      line('visitor challenge · ' + score, 'term-accent');
      document.querySelectorAll('#ctf-board .ctf-challenge').forEach(ch => {
        const status = ch.querySelector('.ctf-status')?.textContent.trim() || '[ ]';
        const name   = ch.querySelector('.ctf-name')?.textContent.trim() || '';
        const pts    = ch.querySelector('.ctf-pts')?.textContent.trim() || '';
        const solved = ch.classList.contains('solved');
        line(`  ${status} ${name.padEnd(10)} ${pts}`, solved ? 'term-accent' : '');
      });
      line('');
      line('hints live in the challenges tab. happy hunting.', 'term-dim');
    },

    links() {
      line('find me:', 'term-accent');
      readLinks().forEach(l => line(`  ${l.name.padEnd(10)} ${l.href}`));
    },

    cd(args) {
      const target = args[0];
      if (!target) { line('usage: cd <section>', 'term-error'); return; }
      if (!SECTIONS.includes(target)) {
        line(`no such section: ${target}`, 'term-error');
        line('available: ' + SECTIONS.join(', '));
        return;
      }
      line(`→ ${target}`, 'term-accent');
      document.querySelector(`.tab-btn[data-target="${target}"]`)?.click();
      setTimeout(closeTerminal, 250);
    },

    lang(args) {
      const code = (args[0] || '').toLowerCase();
      if (!['en', 'es', 'eu'].includes(code)) {
        line(`current: ${i18n().getLang()}`, 'term-accent');
        line('usage: lang <en | es | eu>');
        return;
      }
      i18n().apply(code);
      line(`language → ${code}`, 'term-accent');
    },

    neofetch() {
      const logo = [
        '   _                 ',
        '  | |   _   _  _ __  ',
        "  | |  | | | || '_ \\ ",
        '  | |__| |_| || | | |',
        '  |_____\\__,_||_| |_|',
      ];
      const info = [
        'iamLudok@portfolio',
        '------------------',
        'OS:     ' + (navigator.platform || 'unknown'),
        'Shell:  bash (this one)',
        'Lang:   ' + i18n().getLang(),
        'Stack:  HTML · CSS · vanilla JS',
        'Theme:  terminal-green',
        'Uptime: always learning',
      ];
      const rows = Math.max(logo.length, info.length);
      for (let i = 0; i < rows; i++) {
        line((logo[i] || '').padEnd(22) + (info[i] || ''), 'term-accent');
      }
    },

    clear() { output.innerHTML = ''; },

    echo(args) { line(args.join(' ')); },

    sudo(args) {
      const elevate = ['su', '-i', '-s', 'root', 'bash', 'sh'];
      if (args.length && elevate.includes(args[0].toLowerCase())) {
        globalThis.markCTFSolved?.('ctf-5');
        line('# root granted.', 'term-accent');
        line('# you elevated. ROOT challenge unlocked → check the challenges board.', 'term-dim');
        return;
      }
      line("nice try. you don't have root here 😏", 'term-error');
      line('(or do you? a real admin knows how to elevate.)', 'term-dim');
    },

    exit() { closeTerminal(); },
  };

  const ALIASES = { ls: 'projects', man: 'help', '?': 'help', quit: 'exit', contact: 'links', cv: 'experience' };

  /* ---- parser ---- */
  function run(raw) {
    const trimmed = raw.trim();
    echoCommand(raw);
    if (!trimmed) return;

    history.unshift(trimmed);
    histIndex = -1;

    const [cmdRaw, ...args] = trimmed.split(/\s+/);
    const cmd = ALIASES[cmdRaw.toLowerCase()] || cmdRaw.toLowerCase();
    const fn  = COMMANDS[cmd];

    if (fn) fn(args);
    else {
      line(`command not found: ${cmdRaw}`, 'term-error');
      line("type 'help' for the list.", 'term-dim');
    }
  }

  /* ---- open / close ---- */
  function openTerminal() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (!output.childElementCount) {
      line('iamLudok terminal · type ' + "'help'" + ' to begin.', 'term-accent');
      line('');
    }
    setTimeout(() => input.focus(), 50);
  }

  function closeTerminal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function isOpen() { return overlay.classList.contains('active'); }

  /* ---- events ---- */
  fab?.addEventListener('click', openTerminal);
  closeBtn?.addEventListener('click', closeTerminal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeTerminal(); });
  overlay.addEventListener('mousedown', () => input.focus());

  // Keep the terminal's own keystrokes away from the page's global listeners
  // (typing easter eggs, shortcuts, etc.)
  input.addEventListener('keydown', e => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      run(input.value);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIndex < history.length - 1) input.value = history[++histIndex] || '';
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex > 0) input.value = history[--histIndex] || '';
      else { histIndex = -1; input.value = ''; }
    } else if (e.key === 'Escape') {
      closeTerminal();
    }
  });

  // Global toggle: backtick opens/closes when not typing in a field
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen()) { closeTerminal(); return; }
    if (e.key !== '`') return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    e.preventDefault();
    isOpen() ? closeTerminal() : openTerminal();
  });
})();
