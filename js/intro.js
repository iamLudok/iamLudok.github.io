/* =============================================
   iamLudok Portfolio - intro.js
   Full-screen ASCII version of the avatar shown once per session.
   Characters near the pointer scramble and get pushed away; the
   visitor enters with scroll, click, a key, the button, or on their
   own after AUTO_MS (paused while they play with the face).
   Whether it runs at all is decided by the inline script in <head>,
   which adds html.intro-pending.
   ============================================= */

(function initIntro() {
  const root = document.documentElement;
  if (!root.classList.contains('intro-pending')) return;

  // Brightness grid sampled from img/avatar.webp (120x96, contrast boosted):
  // ffmpeg -i img/avatar.webp -vf "format=gray,eq=contrast=1.6:brightness=0.08:gamma=1.25,scale=120:96:flags=area" -f rawvideo -pix_fmt gray -
  const COLS = 120, ROWS = 96;
  const ASPECT = 500 / 667; // photo width / height
  const LUM = Uint8Array.from(atob('///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+9vP08vv+/P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7t1aiPhYODfnRuZm57fnaLvOb9/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OnKn3dpXlVYTUEqGyInLiYwNk5QQUtwo9n6/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////++8hG9cTkVCPzsvNEY6LiYiIiQXEwgRKC4hIEFhmuj////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ppWdJTEtHPjw6MDApJCwzMDE2OTgrHhsXHiEwKyMmQ1WQ5v//////////////////////////////////////////////////////////////////////////////////////////////////////////////87NrSTo8QDtDREVGTkEtJCMiKB4XGh0oLywaGSQuGw4ZKkFARYTu///////////////////////////////////////////////////////////////////////////////////////////////////////////Mc0Y1TFREMTdHUkgzKi9BQi4iGiYlIBoLCy4bGBYSFiUfEgYUNT9b4P//////////////////////////////////////////////////////////////////////////////////////////////////////+6dOTl5kYE03NzEqHxsqNTchEhYWEQoFBAoFAgQMBAIDAwIJEyIhEh8fQdj////////////////////////////////////////////////////////////////////////////////////////////////////9oEpDOSAWHyUrMjYsHREECQ8bIA8FAQEAAAABAAABAQAAAAEAAAELExsfCym0/v////////////////////////////////////////////////////////////////////////////////////////////////6uSzs3RkVRRjs2LiUtOUA+LhYIAQYDBAEAAAAAAAAAAAAAAAAAAAEGCAIKHQ493////////////////////////////////////////////////////////////////////////////////////////////////7UzO0A9QktKQz5BOi4pJRgIBggGAgEAAAAAAAAAAAEAAQMDAQABBQsRDwEBCBRI1/3/////////////////////////////////////////////////////////////////////////////////////////////8m9JLykpPkA8OTk5NiokKDInHBcQDQQFAAABAQQOFBQXHTIuGRIYKTxBMg4CAQ1AZ+T/////////////////////////////////////////////////////////////////////////////////////////////wU9YRT8/MjlJUUdGRktDUkpCTFFLNSIVGhYdJjg8Qk5XVkk8OENNX2lnVjwTAQIYM3Dm////////////////////////////////////////////////////////////////////////////////////////////k2JhWE9FOjhDX2dqcGp9i5KnqZ6Kf3lrYniOnKOjo6SimY6MkJGPkZOVk35OFwMOFC2E+f/////////////////////////////////////////////////////////////////////////////////////////oc1RPPTM3NE+Ssry8x9fe4Ort6+Hc19LT1NTV29vXz83Lxr64sKihn6GjpaKQYhEQDAo9q/////////////////////////////////////////////////////////////////////////////////////////+5W0EsQEY5XMb5/v/////////////++fPz6+Ti5OLh3tnW0cm/vbiwq6qpqKmojTwCCAEgRvD///////////////////////////////////////////////////////////////////////////////////////t6SERCR1RooPT///////////78+/z++fTr6OLh4N/c2dHNwb64tLOwrLCyr6yqmVUFAgUPEaP//////////////////////////////////////////////////////////////////////////////////////+VZTEQzSVBitvn//////evVyL6yprLC1dTZ3Nra2dHPxrmtqJp9dnFscYOar62lonURAAMTBlT9/////////////////////////////////////////////////////////////////////////////////////9FQVVE6S0xlyP3////7xnxXSjUrFgoJHj9snsfTzca4lXBeQRUFBgMBAgkXTo6oo5ElAAIQAhfp/////////////////////////////////////////////////////////////////////////////////////81UT1MvOVRhzP//+tyRcHyMlZaPfmlOOTJbi7vPxrGUaEEhEA4kNUFKTEg9Mi9UdY5EAAIOAQ7b/////////////////////////////////////////////////////////////////////////////////////8VSTkUhJUNQm3SFcHi92+Dd1dG8nIB0eHdaUo6ffmFJKyMaKkdLUldZWmdsb2tgUyUNBQgMAxju/////////////////////////////////////////////////////////////////////////////////////+pIHjYwHTqWeCRiYs7k38fIq3VIPkROTlZtn0tYQkIoDQAVJSEqIBkbMUleZHNxe4QQAAITFYT9//////////////////////////////////////////////////////////////////////////////////////+fEzYrLpyTlbpuguflx6Num3k5MkZqVVZruYtMy9+rPgAoHCghIhkjRUYzSmZ1fIQ/ARAcJOP////////////////////////////////////////////////////////////////////////////////////////zUUYwkFMntd+9pPHp0szOva2Jf3t2cXut24aO/+/Hfgg3PDY/SlFWWGxwcnR3eIBMCwIeh+b/////////////////////////////////////////////////////////////////////////////////////////3W8oGUFo9P76mfD4+PLo38u7qaCju9Po50/k//XUoDswYVhTT1ZeZHR9ho6Pjo44WzhZaXD5///////////////////////////////////////////////////////////////////////////////////////vzsy9mlaK+f//1rH7/Pbw6OHc3ODm6u/5gKD//vjcu4sYXHuChoqPlJ+npKGblmR7h1lgVlfy///////////////////////////////////////////////////////////////////////////////////////LfbXp5pKe/f///9Or8f7+9/Dp6Onr7umPeP3///Taxq5rGF6Pm6StsLa9sq6fbISvpnFrPFv4///////////////////////////////////////////////////////////////////////////////////////cc6f68PDl///////yubTM5Ojm39S1lYKr6v/+/ubIrpmYYT8/XIGYoKSjiX6Coq6xrmZ6QrP////////////////////////////////////////////////////////////////////////////////////////4m6X658T7//////////3nxrGgi4SLnMz7/OfO9desh2lwk4dfYFVQV2Jzi6Csra+wpkZ1jPv/////////////////////////////////////////////////////////////////////////////////////////7MbZq8z/////////////++nRt6ahv+PzqEhAwdOXVg4LWH9nbnV6f4aKjpOdp66wlEyC3v////////////////////////////////////////////////////////////////////////////////////////////XYodn/////////////9+TOurTN5O/v5+Xo376IW1BKU2d4fH5/houMj5GYo62zo4Wa/P////////////////////////////////////////////////////////////////////////////////////////////7x3dX+////////////9ObX1drq9/z79vDnxqOSaVVbaHmHiIqMjY6Oj5GXoqqznKHF///////////////////////////////////////////////////////////////////////////////////////////////7/v3+//////////778fHu5+fy+/r59e/dt5melXNucXiAg4eJjo+OjpCVnaewkpTV///////////////////////////////////////////////////////////////////////////////////////////////++vXb//////////z5+vPt2+bs9f39++3ZwailnoR3eHp7dnl+hIuOj5CUnKW0uNv+////////////////////////////////////////////////////////////////////////////////////////////////+e7G6f///////vv7/PTjwK23wMXDvKuag39hSzs6QUdGS1hseIWOkI+TmqG////////////////////////////////////////////////////////////////////////////////////////////////////////84v7////+/fv7/Pbkqo640Nri393MsJiRi3Ztal5ST0plfouQkI2PlKPK/////////////////////////////////////////////////////////////////////////////////////////////////////////Pv+/////vz9//zp2+v7///++u7Xu6qbjoWBg4eJh4SJkJCPj46PlJvg//////////////////////////////////////////////////////////////////////////////////////////////////////////n6/f7//v7///75+fz//////OvZv66dj42Ki46TlpeWk4+NjIuPk6X8//////////////////////////////////////////////////////////////////////////////////////////////////////////r39/r8/v7////9/v/////88+bTvKGMjY6PjpCWmpubmZOPjY2OmOX///////////////////////////////////////////////////////////////////////////////////////////////////////////368vT5/f7////+//////347uXVvamZnKKem5idoKKfm5eRkIuP2f/////////////////////////////////////////////////////////////////////////////////////////////////////////////++Orp9vv+//7////////79e/i2MnIxsO1sa+tqqSioJiRjo+3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////vjm4u32/P3+/////////vrx387P1My/t7Crop+cnJWPjJrA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////704trf7PP4+/7+//////7w29DNyMCtoZqSj4+NioOEh5nG///////////////////////////////////////////////////////////////////////////////////////////////////////////////////89ejUzNXh6PL0+f39/fPhzsi9sKONgHx8dnZyc3uDhpjL///////////////////////////////////////////////////////////////////////////////////////////////////////////9////////+O/l18vDx83R1tnd2tC+rZ+Sg3dlXVhYXGBqeX2Dh5fO///////////////////////////////////////////////////////////////////////////////////////////////////////oopj0////////+/Pv6NnRwrmxoJ2cnZSFemtgVUdCQT5BUGl3gIOFiZfT///////////////////////////////////////////////////////////////////////////////////////////////////+5rF3dff9/////////fnz7ebd1My/taGIdGZZUkVDPTg2PUZYaHN9g4SGipaj1/v////////////////////////////////////////////////////////////////////////////////////////////8476PaV9UfvP9/v7+/v7+/vnz8Ovn3tjTycC0pY56bmNZU0tMUFlkcHuBg4aIjJRaNlmOwuP0//////////////////////////////////////////////////////////////////////////////////7s0qqIa1hOSEVEQ6T6/P3+/v///vn07uvq5t/a1M3Eu6+hlot6aFxYW2Rvd3+ChIaKjZN2Dh4XGS1Icarn/f////////////////////////////////////////////////////////////////////////XatYlqclxLPTk2NzUyMz2n+Pz8/f///fj18e3o5uHd2NTOxrmup5yHb2FeYm51fIGEhoiLj5GKDBAKBQcPGBwsZpjA4vj/////////////////////////////////////////////////////////////+d++lHFaV049Uk4wMyooJyYjKyw0hvT8/P38+vj39PDq4tzb29nTzMK1sKOGbGFja3N6f4OEhomKi45vAgIBAAAACAELFCUxOVN4ncnu/f/////////////////////////////////////////////////+6MOefGdXS0A8QDsqO0U5FyIbHRsdISQiLlfS/f37+ff18uvm4tvV19jX0Me+sZ+EbmdrcHZ7g4WFhYeIiIcnAAAAAAABBQABAwkPEhcdIzJFZY613Pj////////////////////////////////////////74ruNb2VeT0A/OjUtLSsgLz85JxMeFxMVFx8bHCIuiun5+Pbz7ejk39jQ0NHRzci8q5iBcm9yd3yChYWDhISGhDwBAAAAAAAEAQAAAQUICAkIDxYcISkxPlmGsNf0///////////////////////////////74LWJbl9YUk5DPTU1Ly4iHyEfJzc5MScVFRIXGRYYGBgXHTOL3O/t6ujl3NLMyMfIx8S4qJWEeHd8gYSHiIN/gIB2LwEBAAABAAABAAAAAAADAQEGCgwPEBARFRgjMz1PgLnq/v/////////////////////847eGamVcVU1LRjw4MS8qJR0aHR4cIS0zMiwnGxAWFBYRExUTExMXJWWt1d/i3dXHvru9wb+1ppWHg4KGjY6Lg3pxakcRAQAAAAAAAAEAAAAAAAIEAQIEBQQEBggICAsOEx0iKDdSgcP2///////////////+6bmGbV9ZTk9NSUVEPTYtJiUjJCEfHx4YGiQpLSsoGRUNDxcPEBIREg4WEhEXMmqiydHGuK+usLOuppaOjI2RlJKBcFUzEQIAAAAAAAAAAQAAAAAAAAADAwMCAAAAAAUJCQsNEBMXGxskLz9cn+H+////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'), c => c.charCodeAt(0));

  const RAMP = '.:-=+*#%@';
  const SCRAMBLE = '01<>/\\{}[]#$%&*+=?!';
  const NAME = 'Luken Iriondo Bilbao';
  const AUTO_MS = 6000, PLAY_PAUSE_MS = 1200;
  const ENTER_KEYS = ['Enter', ' ', 'ArrowDown', 'PageDown', 'Escape'];
  const t = key => (globalThis.i18n?.t(key)) ?? key;

  try { sessionStorage.setItem('introSeen', '1'); } catch { /* private mode */ }

  // ---- DOM (static markup; translated text goes in with textContent)
  const intro = document.createElement('div');
  intro.className = 'site-intro';
  intro.setAttribute('role', 'dialog');
  intro.setAttribute('aria-modal', 'true');
  intro.setAttribute('aria-label', 'Luken Iriondo Bilbao');
  intro.innerHTML = `
    <canvas class="si-canvas" aria-hidden="true"></canvas>
    <div class="si-layout">
      <div class="si-text">
        <p class="si-name"><span class="si-prompt">$</span><span class="si-typed"></span><span class="si-cursor">_</span></p>
        <p class="si-sub"></p>
        <button class="si-enter" type="button">
          <span class="si-enter-label"></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="M6 13l6 6 6-6"/></svg>
          <span class="si-keys"></span>
        </button>
        <div class="si-timer" aria-hidden="true"><div class="si-timer-bar"></div></div>
      </div>
      <div class="si-face"></div>
    </div>`;
  intro.querySelector('.si-sub').textContent = t('intro_sub');
  intro.querySelector('.si-enter-label').textContent = t('intro_enter');
  intro.querySelector('.si-keys').textContent = t('intro_keys');
  document.body.appendChild(intro);
  root.classList.add('intro-active');
  root.classList.remove('intro-pending');

  const canvas   = intro.querySelector('.si-canvas');
  const faceEl   = intro.querySelector('.si-face');
  const typedEl  = intro.querySelector('.si-typed');
  const enterBtn = intro.querySelector('.si-enter');
  const timerBar = intro.querySelector('.si-timer-bar');
  const ctx  = canvas.getContext('2d');
  const base = document.createElement('canvas');
  const bctx = base.getContext('2d');

  // One entry per character cell that is not background
  const cells = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    const l = LUM[i];
    if (l >= 235) continue;
    const n = 1 - l / 235;
    cells.push({ i, c: i % COLS, r: Math.floor(i / COLS), n,
      ch: RAMP[Math.round(n * (RAMP.length - 1))],
      dx: 0, dy: 0, vx: 0, vy: 0, glyph: null, ex: null });
  }
  const byIndex = new Map(cells.map(c => [c.i, c]));

  let vw, vh, dpr, ox, oy, cw, chh, font;
  const mouse = { x: -9999, y: -9999 };
  const active = new Set();
  let phase = 'scan'; // scan → idle → exit → done
  let scanStart = 0, exitStart = 0, raf = 0;
  let autoOn = false, autoElapsed = 0, autoLast = 0, lastPlay = 0;

  // Mid tones brighter and the darkest (the shirt) a bit dimmer, so the face reads
  function color(n, alpha = 1) {
    return `rgba(0, 255, 136, ${(0.3 + 0.7 * Math.pow(n, 0.55)) * alpha * (n > 0.8 ? 0.75 : 1)})`;
  }

  function layout() {
    dpr = globalThis.devicePixelRatio || 1;
    vw = innerWidth; vh = innerHeight;
    for (const cv of [canvas, base]) { cv.width = Math.round(vw * dpr); cv.height = Math.round(vh * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Fit the face inside its column, keeping the photo's aspect
    const rect = faceEl.getBoundingClientRect();
    const pad = Math.min(rect.width, rect.height) * 0.06;
    let h = rect.height - pad * 2, w = h * ASPECT;
    if (w > rect.width - pad * 2) { w = rect.width - pad * 2; h = w / ASPECT; }
    ox = rect.left + (rect.width - w) / 2;
    oy = rect.top + (rect.height - h) / 2;
    cw = w / COLS; chh = h / ROWS;
    font = `${(chh * 1.02).toFixed(2)}px 'JetBrains Mono', monospace`;
    bctx.clearRect(0, 0, vw, vh);
    bctx.font = font; bctx.textBaseline = 'top';
    for (const c of cells) {
      bctx.fillStyle = color(c.n);
      bctx.fillText(c.ch, ox + c.c * cw, oy + c.r * chh);
    }
  }

  // ---- characters near the pointer scramble and get pushed away
  function touchCells() {
    const R = cw * 9;
    const c0 = Math.max(0, Math.floor((mouse.x - R - ox) / cw)), c1 = Math.min(COLS - 1, Math.ceil((mouse.x + R - ox) / cw));
    const r0 = Math.max(0, Math.floor((mouse.y - R - oy) / chh)), r1 = Math.min(ROWS - 1, Math.ceil((mouse.y + R - oy) / chh));
    for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
      const cell = byIndex.get(r * COLS + c);
      if (cell) active.add(cell);
    }
  }

  function step() {
    const R = cw * 9, K = cw * 0.9;
    for (const cell of active) {
      const x = ox + cell.c * cw + cell.dx + cw / 2, y = oy + cell.r * chh + cell.dy + chh / 2;
      const ddx = x - mouse.x, ddy = y - mouse.y, d = Math.hypot(ddx, ddy);
      const inside = d < R;
      if (inside && d > 0.01) {
        const f = (1 - d / R) ** 2 * K;
        cell.vx += (ddx / d) * f * 0.35; cell.vy += (ddy / d) * f * 0.35;
        if (Math.random() < 0.25) cell.glyph = SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0];
      }
      cell.vx += -cell.dx * 0.07; cell.vy += -cell.dy * 0.07;
      cell.vx *= 0.8; cell.vy *= 0.8;
      cell.dx += cell.vx; cell.dy += cell.vy;
      const still = Math.abs(cell.dx) + Math.abs(cell.dy) < 0.4 && Math.abs(cell.vx) + Math.abs(cell.vy) < 0.2;
      if (!inside && Math.abs(cell.dx) + Math.abs(cell.dy) < cw * 1.5) cell.glyph = null;
      if (!inside && still) { cell.dx = cell.dy = cell.vx = cell.vy = 0; cell.glyph = null; active.delete(cell); }
    }
  }

  function drawIdle() {
    ctx.clearRect(0, 0, vw, vh);
    ctx.drawImage(base, 0, 0, vw, vh);
    if (!active.size) return;
    ctx.fillStyle = '#0a0a0a';
    for (const cell of active) ctx.fillRect(ox + cell.c * cw - 0.5, oy + cell.r * chh - 0.5, cw + 1, chh + 1);
    ctx.font = font; ctx.textBaseline = 'top';
    for (const cell of active) {
      ctx.fillStyle = cell.glyph ? 'rgba(200, 255, 225, 0.95)' : color(cell.n);
      ctx.fillText(cell.glyph || cell.ch, ox + cell.c * cw + cell.dx, oy + cell.r * chh + cell.dy);
    }
  }

  // Rows appear top to bottom behind a scan line
  function drawScan(now) {
    const p = Math.min((now - scanStart) / 900, 1);
    const yCut = oy + p * ROWS * chh;
    ctx.clearRect(0, 0, vw, vh);
    ctx.drawImage(base, 0, 0, vw * dpr, yCut * dpr, 0, 0, vw, yCut);
    if (p < 1) {
      ctx.fillStyle = 'rgba(0, 255, 136, 0.55)';
      ctx.fillRect(ox - cw * 4, yCut, COLS * cw + cw * 8, Math.max(1, chh * 0.25));
    }
    return p >= 1;
  }

  // Every character flies outwards and fades
  function drawExit(now) {
    const p = Math.min((now - exitStart) / 750, 1);
    ctx.clearRect(0, 0, vw, vh);
    ctx.font = font; ctx.textBaseline = 'top';
    const cx = ox + COLS * cw / 2, cy = oy + ROWS * chh / 2;
    for (const cell of cells) {
      if (!cell.ex) {
        const x = ox + cell.c * cw, y = oy + cell.r * chh;
        const a = Math.atan2(y - cy, x - cx) + (Math.random() - 0.5) * 0.6;
        const s = (2 + Math.random() * 10) * (cw / 4);
        cell.ex = { x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, g: SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0] };
      }
      const e = cell.ex;
      e.x += e.vx; e.y += e.vy; e.vx *= 0.97; e.vy = e.vy * 0.97 + 0.15;
      ctx.fillStyle = color(cell.n, 1 - p);
      ctx.fillText(p > 0.15 ? e.g : cell.ch, e.x, e.y);
    }
    return p >= 1;
  }

  // The bar only fills while the visitor is not playing with the face
  function tickAuto(now) {
    if (!autoOn) return;
    const dt = autoLast ? now - autoLast : 0;
    autoLast = now;
    if (now - lastPlay > PLAY_PAUSE_MS) autoElapsed += dt;
    timerBar.style.transform = `scaleX(${Math.min(autoElapsed / AUTO_MS, 1)})`;
    if (autoElapsed >= AUTO_MS) enter();
  }

  function loop(now) {
    if (phase === 'scan') { if (drawScan(now)) { phase = 'idle'; typeName(); } }
    else if (phase === 'idle') { if (mouse.x > -9000) touchCells(); step(); drawIdle(); tickAuto(now); }
    else if (phase === 'exit') { if (drawExit(now)) { finish(); return; } }
    raf = requestAnimationFrame(loop);
  }

  function typeName() {
    let i = 0;
    const tick = () => {
      typedEl.textContent = NAME.slice(0, ++i);
      if (i < NAME.length) setTimeout(tick, 45 + Math.random() * 40);
      else setTimeout(() => {
        intro.classList.add('ready');
        autoOn = true;
      }, 150);
    };
    tick();
  }

  // ---- entering the site
  function enter() {
    if (phase !== 'idle') return;
    autoOn = false;
    intro.classList.add('leaving');
    for (const c of cells) c.ex = null;
    phase = 'exit'; exitStart = performance.now();
    root.classList.remove('intro-active');
    setTimeout(() => intro.classList.add('gone'), 380);
  }

  function finish() {
    phase = 'done';
    cancelAnimationFrame(raf);
    removeEventListener('keydown', onKey, true);
    removeEventListener('resize', layout);
    root.classList.remove('intro-active');
    setTimeout(() => intro.remove(), 500);
  }

  // Capture phase: while the intro is up, other shortcuts (terminal, easter eggs) stay quiet
  function onKey(e) {
    if (phase === 'done') return;
    e.stopImmediatePropagation();
    if (ENTER_KEYS.includes(e.key)) { e.preventDefault(); enter(); }
  }

  intro.addEventListener('pointermove', e => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    const r = faceEl.getBoundingClientRect();
    if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) lastPlay = performance.now();
  });
  intro.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  intro.addEventListener('pointerup', e => { if (e.pointerType === 'mouse') enter(); });
  intro.addEventListener('wheel', e => { if (e.deltaY > 0) enter(); }, { passive: true });
  let touchY = null;
  intro.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
  intro.addEventListener('touchmove', e => { if (touchY !== null && touchY - e.touches[0].clientY > 70) enter(); }, { passive: true });
  intro.addEventListener('touchend', () => { touchY = null; mouse.x = mouse.y = -9999; });
  enterBtn.addEventListener('click', e => { e.stopPropagation(); enter(); });
  addEventListener('keydown', onKey, true);
  addEventListener('resize', layout);

  const fontReady = document.fonts ? document.fonts.load("12px 'JetBrains Mono'") : Promise.resolve();
  fontReady.catch(() => {}).finally(() => {
    layout();
    scanStart = performance.now();
    raf = requestAnimationFrame(loop);
  });
})();
