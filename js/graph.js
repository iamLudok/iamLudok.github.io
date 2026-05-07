(function initSkillGraph() {
  if (typeof d3 === 'undefined' || typeof GRAPH_DATA === 'undefined') return;

  const COLOR = {
    skill:   '#00ff88',
    project: '#ff9f43',
    work:    '#74b9ff',
    study:   '#a29bfe'
  };

  // Normalize skill names for matching (lowercase, alphanumeric only)
  function norm(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  // Aliases: normalized shorthand → normalized canonical badge name
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

  function buildGraph() {
    const { t } = globalThis.i18n || { t: k => k };

    // Skill nodes from DOM badges
    const skillNodes = [...document.querySelectorAll('.skill-badge')].map(el => {
      const label = el.textContent.trim();
      return { id: 'skill-' + norm(label), label, type: 'skill' };
    });
    const skillByNorm = new Map(skillNodes.map(n => [norm(n.label), n]));

    function findSkill(name) {
      return skillByNorm.get(resolve(name)) ?? null;
    }

    // Project nodes from DOM
    const projectNodes = [...document.querySelectorAll('.project-card[data-project]')].map(card => ({
      id:    'project-' + card.dataset.project,
      label: card.querySelector('.project-title')?.textContent.trim() || card.dataset.project,
      type:  'project',
      key:   card.dataset.project
    }));

    // Work nodes from GRAPH_DATA
    const workNodes = GRAPH_DATA.work.map(w => ({
      id:       w.id,
      label:    w.label,
      sublabel: w.org,
      period:   w.period,
      type:     'work',
      _skills:  w.skills
    }));

    // Study nodes from GRAPH_DATA
    const studyNodes = GRAPH_DATA.studies.map(s => ({
      id:       s.id,
      label:    s.label,
      sublabel: s.org,
      period:   s.period,
      type:     'study',
      _skills:  s.skills
    }));

    const nodes = [...skillNodes, ...projectNodes, ...workNodes, ...studyNodes];
    const edgeSet = new Set();
    const links = [];

    function addLink(sourceId, targetId, color) {
      const key = sourceId + '|' + targetId;
      if (edgeSet.has(key)) return;
      edgeSet.add(key);
      links.push({ source: sourceId, target: targetId, color });
    }

    // Project → Skill links (read from rendered .tag spans — already normalised by initDynamicTags)
    projectNodes.forEach(pn => {
      const card = document.querySelector(`.project-card[data-project="${pn.key}"]`);
      card?.querySelectorAll('.project-tags .tag').forEach(span => {
        const skill = findSkill(span.textContent.trim());
        if (skill) addLink(pn.id, skill.id, COLOR.project);
      });
    });

    // Work → Skill links
    workNodes.forEach(wn => {
      wn._skills.forEach(s => {
        const skill = findSkill(s);
        if (skill) addLink(wn.id, skill.id, COLOR.work);
      });
    });

    // Study → Skill links
    studyNodes.forEach(sn => {
      sn._skills.forEach(s => {
        const skill = findSkill(s);
        if (skill) addLink(sn.id, skill.id, COLOR.study);
      });
    });

    return { nodes, links };
  }

  // ---- Render ----
  function render(container) {
    container.innerHTML = '';
    const { nodes, links } = buildGraph();
    const W = container.clientWidth;
    const H = container.clientHeight;

    // Degree for node sizing
    const degree = new Map();
    links.forEach(l => {
      degree.set(l.source, (degree.get(l.source) || 0) + 1);
      degree.set(l.target, (degree.get(l.target) || 0) + 1);
    });

    const radius = d => {
      const deg = degree.get(d.id) || 1;
      return d.type === 'skill'
        ? Math.max(5, Math.min(20, 4 + deg * 1.3))
        : 11;
    };

    const svg = d3.select(container)
      .append('svg')
      .attr('width', W)
      .attr('height', H);

    // Zoom & pan
    const g = svg.append('g');
    svg.call(
      d3.zoom().scaleExtent([0.2, 4])
        .on('zoom', e => g.attr('transform', e.transform))
    );

    const simulation = d3.forceSimulation(nodes)
      .force('link',    d3.forceLink(links).id(d => d.id).distance(110).strength(0.5))
      .force('charge',  d3.forceManyBody().strength(-220))
      .force('center',  d3.forceCenter(W / 2, H / 2))
      .force('x',       d3.forceX(W / 2).strength(0.04))
      .force('y',       d3.forceY(H / 2).strength(0.04))
      .force('collide', d3.forceCollide(d => radius(d) + 14));

    // Edges
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', d => d.color)
      .attr('stroke-opacity', 0.2)
      .attr('stroke-width', 1.5);

    // Nodes
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .style('cursor', 'default')
      .call(
        d3.drag()
          .on('start', (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
          .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
          .on('end',   (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; })
      );

    node.append('circle')
      .attr('r', radius)
      .attr('fill', d => COLOR[d.type])
      .attr('fill-opacity', 0.8)
      .attr('stroke', d => COLOR[d.type])
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.5);

    node.append('text')
      .text(d => d.label)
      .attr('font-size', d => d.type === 'skill' ? '8.5px' : '9.5px')
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('fill', '#e0e0e0')
      .attr('text-anchor', 'middle')
      .attr('dy', d => radius(d) + 11)
      .style('pointer-events', 'none')
      .style('user-select', 'none');

    // Tooltip for work/study nodes
    const tooltip = d3.select(container)
      .append('div')
      .attr('class', 'sg-tooltip')
      .style('display', 'none');

    node.on('mouseover', (e, d) => {
      // Highlight connected nodes & edges
      const connected = new Set([d.id]);
      links.forEach(l => {
        const src = typeof l.source === 'object' ? l.source.id : l.source;
        const tgt = typeof l.target === 'object' ? l.target.id : l.target;
        if (src === d.id || tgt === d.id) { connected.add(src); connected.add(tgt); }
      });

      node.selectAll('circle').attr('fill-opacity', n => connected.has(n.id) ? 1 : 0.08);
      node.selectAll('text').attr('fill-opacity', n => connected.has(n.id) ? 1 : 0.08);
      link.attr('stroke-opacity', l => {
        const src = typeof l.source === 'object' ? l.source.id : l.source;
        const tgt = typeof l.target === 'object' ? l.target.id : l.target;
        return (src === d.id || tgt === d.id) ? 0.85 : 0.03;
      });

      // Tooltip for work/study
      if (d.sublabel) {
        tooltip
          .style('display', 'block')
          .style('left', (e.offsetX + 14) + 'px')
          .style('top',  (e.offsetY - 10) + 'px')
          .html(`<strong>${d.label}</strong><br>${d.sublabel}<br><span class="sg-tooltip-period">${d.period}</span>`);
      }
    }).on('mousemove', e => {
      tooltip.style('left', (e.offsetX + 14) + 'px').style('top', (e.offsetY - 10) + 'px');
    }).on('mouseout', () => {
      node.selectAll('circle').attr('fill-opacity', 0.8);
      node.selectAll('text').attr('fill-opacity', 1);
      link.attr('stroke-opacity', 0.2);
      tooltip.style('display', 'none');
    });

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }

  // ---- Open / Close ----
  const overlay   = document.getElementById('skill-graph-overlay');
  const container = document.getElementById('skill-graph-container');
  const closeBtn  = document.getElementById('skill-graph-close');
  if (!overlay) return;

  function openGraph() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (!container.hasChildNodes()) {
      requestAnimationFrame(() => render(container));
    }
  }

  function closeGraph() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.getElementById('navbar-graph-btn')?.addEventListener('click', openGraph);

  closeBtn?.addEventListener('click', closeGraph);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeGraph(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGraph(); });
})();
