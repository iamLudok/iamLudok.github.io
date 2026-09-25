(function initSkillGraph() {
  const COLOR = {
    skill:   '#00ff88',
    project: '#ff9f43',
    work:    '#74b9ff',
    study:   '#a29bfe'
  };

  const REDUCED_MOTION = !!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const CAN_HOVER      = !!globalThis.matchMedia?.('(hover: hover)').matches;
  const HUB_LABELS     = 10; // skills with the most connections always show their label

  function norm(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  const ALIAS = {
    'js':         norm('JavaScript'),
    'html':       norm('HTML5'),
    'css':        norm('CSS3'),
    'numpy':      norm('NumPy'),
    'pandas':     norm('Pandas'),
    'matplotlib': norm('Matplotlib'),
  };

  function resolve(name) {
    const n = norm(name);
    return ALIAS[n] ?? n;
  }

  // "10/2023 - 07/2024" → "2023", so repeated labels ("Researcher") stay distinct
  function startYear(period) {
    return (period.match(/\d{4}/) || [''])[0];
  }

  function buildGraph() {
    const skillNodes = [...document.querySelectorAll('.skill-badge')].map(el => {
      const label = el.textContent.trim();
      return { id: 'skill-' + norm(label), label, type: 'skill' };
    });
    const skillByNorm = new Map(skillNodes.map(n => [norm(n.label), n]));

    function findSkill(name) {
      return skillByNorm.get(resolve(name)) ?? null;
    }

    const projectNodes = [...document.querySelectorAll('.project-card[data-project]')].map(card => ({
      id:    'project-' + card.dataset.project,
      label: card.querySelector('.project-title')?.textContent.trim() || card.dataset.project,
      type:  'project',
      key:   card.dataset.project
    }));

    const toNode = type => item => ({
      id:       item.id,
      label:    `${item.label} · ${startYear(item.period)}`,
      sublabel: item.org,
      period:   item.period,
      type,
      _skills:  item.skills
    });
    const workNodes  = GRAPH_DATA.work.map(toNode('work'));
    const studyNodes = GRAPH_DATA.studies.map(toNode('study'));

    const nodes = [...skillNodes, ...projectNodes, ...workNodes, ...studyNodes];
    const edgeSet = new Set();
    const links = [];

    function addLink(sourceId, targetId, color) {
      const key = sourceId + '|' + targetId;
      if (edgeSet.has(key)) return;
      edgeSet.add(key);
      links.push({ source: sourceId, target: targetId, color });
    }

    projectNodes.forEach(pn => {
      const card = document.querySelector(`.project-card[data-project="${pn.key}"]`);
      card?.querySelectorAll('.project-tags .tag').forEach(span => {
        const skill = findSkill(span.textContent.trim());
        if (skill) addLink(pn.id, skill.id, COLOR.project);
      });
    });

    [...workNodes, ...studyNodes].forEach(n => {
      n._skills.forEach(s => {
        const skill = findSkill(s);
        if (skill) addLink(n.id, skill.id, COLOR[n.type]);
      });
    });

    return { nodes, links };
  }

  function render(container) {
    container.innerHTML = '';
    const { nodes, links } = buildGraph();
    const W = container.clientWidth;
    const H = container.clientHeight;

    // Degree and neighbours, used for sizing, labels, tooltips and highlighting
    const byId = new Map(nodes.map(n => [n.id, n]));
    nodes.forEach(n => { n.deg = 0; n.neighbors = new Set(); });
    links.forEach(l => {
      const a = byId.get(l.source), b = byId.get(l.target);
      a.deg++; b.deg++;
      a.neighbors.add(b); b.neighbors.add(a);
    });

    const hubCut = nodes.filter(n => n.type === 'skill')
      .map(n => n.deg).sort((a, b) => b - a)[HUB_LABELS - 1] ?? 0;
    nodes.forEach(n => { n.minor = n.type === 'skill' && n.deg < hubCut; });

    const radius = d => d.type === 'skill'
      ? Math.min(3 + Math.sqrt(d.deg) * 2.2, 14)
      : d.type === 'project' ? 7 : 9;

    // ---- Layout: computed up front, then shown already settled ----
    // Studies, work and projects sit on a fixed outer ring (grouped by type);
    // skills settle inside it, pulled towards whatever they connect to.
    const ORDER = { study: 0, work: 1, project: 2 };
    const outer = nodes.filter(n => n.type !== 'skill')
      .sort((a, b) => ORDER[a.type] - ORDER[b.type]);
    const rx = Math.min(W * 0.36, H * 0.55);
    const ry = H * 0.38;
    outer.forEach((n, i) => {
      n.angle = Math.PI * 0.8 + (i / outer.length) * Math.PI * 2;
      n.x = n.fx = W / 2 + Math.cos(n.angle) * rx;
      n.y = n.fy = H / 2 + Math.sin(n.angle) * ry;
    });
    nodes.filter(n => n.type === 'skill').forEach(n => {
      n.x = W / 2 + (Math.random() - 0.5) * rx;
      n.y = H / 2 + (Math.random() - 0.5) * ry;
    });

    const simulation = d3.forceSimulation(nodes)
      .force('link',    d3.forceLink(links).id(d => d.id).distance(ry * 0.6).strength(0.08))
      .force('charge',  d3.forceManyBody().strength(-70))
      .force('x',       d3.forceX(W / 2).strength(0.03))
      .force('y',       d3.forceY(H / 2).strength(0.03))
      .force('collide', d3.forceCollide(d => radius(d) + (d.minor ? 5 : 14)))
      .force('inside',  () => {
        // Keep skills within the ring so loosely connected ones don't drift out
        const limit = 0.82;
        nodes.forEach(n => {
          if (n.type !== 'skill') return;
          const dx = (n.x - W / 2) / (rx * limit);
          const dy = (n.y - H / 2) / (ry * limit);
          const d = Math.hypot(dx, dy);
          if (d > 1) {
            n.x = W / 2 + (dx / d) * rx * limit;
            n.y = H / 2 + (dy / d) * ry * limit;
          }
        });
      })
      .stop();
    for (let i = 0; i < 320; i++) simulation.tick();

    // ---- SVG ----
    const svg = d3.select(container)
      .append('svg')
      .attr('class', 'sg-svg');

    const defs = svg.append('defs');
    const glow = defs.append('filter').attr('id', 'sg-glow')
      .attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
    glow.append('feGaussianBlur').attr('stdDeviation', 4);

    const g = svg.append('g');
    let fitScale = 1;

    const zoom = d3.zoom()
      .scaleExtent([0.2, 4])
      .on('zoom', e => {
        g.attr('transform', e.transform);
        svg.classed('sg-zoomed', e.transform.k >= fitScale * 1.5);
      });
    svg.call(zoom).on('dblclick.zoom', null);

    const link = g.append('g')
      .selectAll('path')
      .data(links)
      .join('path')
      .attr('class', 'sg-link')
      .style('--c', d => d.color);

    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', d => `sg-node sg-node--${d.type}${d.minor ? ' minor' : ''}`)
      .style('--c', d => COLOR[d.type]);

    // Inner group so the entrance animation (CSS transform) doesn't fight
    // with the position transform set on the outer group.
    const body = node.append('g').attr('class', 'sg-body');

    body.append('circle')
      .attr('class', 'sg-halo')
      .attr('r', d => radius(d) + 6)
      .attr('filter', 'url(#sg-glow)');

    body.append('circle')
      .attr('class', 'sg-core')
      .attr('r', radius);

    body.filter(d => d.type !== 'skill')
      .append('circle')
      .attr('class', 'sg-pip')
      .attr('r', 2.5);

    // Skill labels sit under the dot; ring labels point outwards so they
    // never land on top of the skills inside.
    body.append('text')
      .text(d => d.label)
      .each(function (d) {
        const t = d3.select(this);
        if (d.angle === undefined) { t.attr('dy', radius(d) + 13); return; }
        const cos = Math.cos(d.angle), sin = Math.sin(d.angle);
        const off = radius(d) + 7;
        t.attr('x', cos * off)
         .attr('y', sin * off + 3.5 + (Math.abs(cos) < 0.35 ? sin * 6 : 0))
         .style('text-anchor', cos > 0.35 ? 'start' : cos < -0.35 ? 'end' : 'middle');
      });

    // Curved edges: control point pushed sideways from the midpoint
    function linkPath(d) {
      const sx = d.source.x, sy = d.source.y, tx = d.target.x, ty = d.target.y;
      const mx = (sx + tx) / 2, my = (sy + ty) / 2;
      const bend = 0.12;
      return `M${sx},${sy}Q${mx - (ty - sy) * bend},${my + (tx - sx) * bend} ${tx},${ty}`;
    }

    function applyPositions() {
      link.attr('d', linkPath);
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    }
    applyPositions();
    simulation.on('tick', applyPositions);

    // Frame the whole graph (labels included) in the available space
    function fit(animate) {
      const w = container.clientWidth, h = container.clientHeight;
      // getBBox covers labels too and skips filtered-out (display: none) nodes
      const box = g.node().getBBox();
      if (!box.width || !w || !h) return;
      const x0 = box.x, x1 = box.x + box.width;
      const y0 = box.y, y1 = box.y + box.height;
      const k = Math.min(w / (x1 - x0), h / (y1 - y0), 1.6) * 0.94;
      fitScale = k;
      const t = d3.zoomIdentity
        .translate(w / 2 - k * (x0 + x1) / 2, h / 2 - k * (y0 + y1) / 2)
        .scale(k);
      (animate && !REDUCED_MOTION ? svg.transition().duration(500) : svg).call(zoom.transform, t);
    }

    // ---- Entrance: nodes pop in from the centre outwards ----
    if (!REDUCED_MOTION) {
      const cx = d3.mean(nodes, n => n.x), cy = d3.mean(nodes, n => n.y);
      const maxD = d3.max(nodes, n => Math.hypot(n.x - cx, n.y - cy)) || 1;
      body.style('animation-delay', d => `${Math.round((Math.hypot(d.x - cx, d.y - cy) / maxD) * 600)}ms`);
      svg.classed('sg-enter', true);
      setTimeout(() => svg.classed('sg-enter', false), 1400);
    }

    // ---- Tooltip ----
    const tooltip = d3.select(container)
      .append('div')
      .attr('class', 'sg-tooltip')
      .style('display', 'none');

    function tooltipContent(d) {
      const el = tooltip.node();
      el.replaceChildren();
      const title = document.createElement('strong');
      title.textContent = d.label;
      title.style.color = COLOR[d.type];
      el.appendChild(title);

      const addLine = (text, cls) => {
        const div = document.createElement('div');
        div.textContent = text;
        if (cls) div.className = cls;
        el.appendChild(div);
      };

      if (d.type === 'skill') {
        const count = type => [...d.neighbors].filter(n => n.type === type).length;
        const parts = [
          [count('project'), 'project', 'projects'],
          [count('work'),    'role',    'roles'],
          [count('study'),   'year',    'years'],
        ].filter(([n]) => n).map(([n, one, many]) => `${n} ${n === 1 ? one : many}`);
        addLine(parts.join(' · ') || 'no links yet', 'sg-tooltip-period');
      } else if (d.type === 'project') {
        addLine(`${d.deg} skills`, 'sg-tooltip-period');
        addLine(CAN_HOVER ? 'click to open' : 'tap again to open', 'sg-tooltip-hint');
      } else {
        addLine(d.sublabel);
        addLine(d.period, 'sg-tooltip-period');
      }
    }

    function moveTooltip(e) {
      const [x, y] = d3.pointer(e, container);
      const el = tooltip.node();
      const left = Math.min(x + 14, container.clientWidth - el.offsetWidth - 8);
      tooltip.style('left', left + 'px').style('top', (y + 14) + 'px');
    }

    // ---- Focus: hovered or pinned node lights up its neighbourhood ----
    let pinned = null;

    function focus(d) {
      svg.classed('sg-focus', !!d);
      const lit = d ? new Set([d, ...d.neighbors]) : null;
      node.classed('is-lit', n => !!lit?.has(n))
          .classed('is-hover', n => n === d);
      link.classed('is-lit', l => !!d && (l.source === d || l.target === d));
      if (d) node.filter(n => lit.has(n)).raise();
    }

    node
      .on('mouseenter', (e, d) => {
        if (!pinned) focus(d);
        tooltipContent(d);
        tooltip.style('display', 'block');
        moveTooltip(e);
      })
      .on('mousemove', moveTooltip)
      .on('mouseleave', () => {
        if (!pinned) focus(null);
        tooltip.style('display', 'none');
      })
      .on('click', (e, d) => {
        e.stopPropagation();
        // Projects open straight away with a mouse; on touch the first tap
        // highlights and the second one opens.
        if (d.type === 'project' && (CAN_HOVER || pinned === d)) {
          openProject(d.key);
          return;
        }
        pinned = pinned === d ? null : d;
        focus(pinned);
        if (!CAN_HOVER) {
          tooltipContent(d);
          tooltip.style('display', pinned ? 'block' : 'none');
          moveTooltip(e);
        }
      });

    svg.on('click', () => {
      pinned = null;
      focus(null);
      tooltip.style('display', 'none');
    });

    node.call(
      d3.drag()
        .on('start', (e, d) => {
          if (!e.active) simulation.alphaTarget(0.2).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on('end', (e, d) => {
          if (!e.active) simulation.alphaTarget(0);
          if (d.type !== 'skill') return; // ring nodes stay where they're dropped
          d.fx = null;
          d.fy = null;
        })
    );

    // ---- Legend doubles as a type filter ----
    const hiddenTypes = new Set();
    legendBtns.forEach(btn => {
      btn.classList.remove('is-off');
      btn.setAttribute('aria-pressed', 'true');
      btn.onclick = () => {
        const type = btn.dataset.type;
        hiddenTypes.has(type) ? hiddenTypes.delete(type) : hiddenTypes.add(type);
        const off = hiddenTypes.has(type);
        btn.classList.toggle('is-off', off);
        btn.setAttribute('aria-pressed', String(!off));
        node.classed('is-hidden', n => hiddenTypes.has(n.type));
        link.classed('is-hidden', l => hiddenTypes.has(l.source.type) || hiddenTypes.has(l.target.type));
        if (pinned && hiddenTypes.has(pinned.type)) { pinned = null; focus(null); }
        fit(true);
      };
    });

    fit(false);
    refit = () => fit(false);
  }

  function openProject(key) {
    closeGraph();
    document.querySelector(`.project-card[data-project="${key}"]`)?.click();
  }

  function loadGraph(cb) {
    if (typeof d3 !== 'undefined' && typeof GRAPH_DATA !== 'undefined') { cb(); return; }
    let pending = 0;
    function done() { if (--pending === 0) cb(); }
    function load(src, check) {
      if (check()) return;
      pending++;
      const s = document.createElement('script');
      s.src = src;
      s.onload = done;
      document.head.appendChild(s);
    }
    load('js/d3.min.js',      () => typeof d3         !== 'undefined');
    load('js/graph-data.js',  () => typeof GRAPH_DATA !== 'undefined');
  }

  const overlay    = document.getElementById('skill-graph-overlay');
  const container  = document.getElementById('skill-graph-container');
  const closeBtn   = document.getElementById('skill-graph-close');
  const legendBtns = [...document.querySelectorAll('.sg-legend-item[data-type]')];
  let refit = null;
  if (!overlay) return;

  function openGraph() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (!container.hasChildNodes()) {
      loadGraph(() => requestAnimationFrame(() => render(container)));
    }
  }

  function closeGraph() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Keep the graph framed when the window (or phone orientation) changes
  new ResizeObserver(() => refit?.()).observe(container);

  document.getElementById('navbar-graph-btn')?.addEventListener('click', openGraph);
  closeBtn?.addEventListener('click', closeGraph);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeGraph(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGraph(); });
})();
