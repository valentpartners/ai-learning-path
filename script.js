
const root = DATA[0];
const tabs = root.children;

const DEFAULT_COLORS = [
  { color: '#2563EB', light: '#EFF6FF', border: '#BFDBFE' },
  { color: '#059669', light: '#ECFDF5', border: '#A7F3D0' },
  { color: '#9333EA', light: '#FAF5FF', border: '#DDD6FE' },
  { color: '#DC2626', light: '#FEF2F2', border: '#FECACA' },
  { color: '#D97706', light: '#FFFBEB', border: '#FDE68A' },
];

document.getElementById('page-title').textContent = root.name;

function isLeaf(node) { return !node.children || node.children.length === 0; }
function getBadgeText(node) { return node.children ? String(node.children.length) : ''; }

// ---- Sidebar logic ----
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarBody = document.getElementById('sidebarBody');
const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarBreadcrumb = document.getElementById('sidebarBreadcrumb');
let activeLeafEl = null;

function openSidebar(node, breadcrumb, accentColor) {
  sidebarTitle.textContent = node.name;
  sidebarBreadcrumb.textContent = breadcrumb;
  sidebarBody.innerHTML = '';

  // Description
  if (node.description) {
    const sec = document.createElement('div');
    sec.className = 'sidebar-section';
    const label = document.createElement('div');
    label.className = 'sidebar-section-label';
    label.textContent = 'Overview';
    sec.appendChild(label);
    const desc = document.createElement('div');
    desc.className = 'sidebar-description';
    desc.textContent = node.description;
    sec.appendChild(desc);
    sidebarBody.appendChild(sec);
  }

  // Tags
  if (node.tags && node.tags.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'sidebar-section';
    const label = document.createElement('div');
    label.className = 'sidebar-section-label';
    label.textContent = 'Tags';
    sec.appendChild(label);
    const grid = document.createElement('div');
    grid.className = 'sidebar-tags';
    node.tags.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'sidebar-tag';
      tag.textContent = t;
      grid.appendChild(tag);
    });
    sec.appendChild(grid);
    sidebarBody.appendChild(sec);
  }

  // Sources
  if (node.sources && node.sources.length > 0) {
    const sec = document.createElement('div');
    sec.className = 'sidebar-section';
    const label = document.createElement('div');
    label.className = 'sidebar-section-label';
    label.textContent = 'Resources';
    sec.appendChild(label);
    const list = document.createElement('div');
    list.className = 'sidebar-sources';
    node.sources.forEach(s => {
      const a = document.createElement('a');
      a.className = 'sidebar-source';
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      // Favicon
      const fav = document.createElement('span');
      fav.className = 'source-favicon';
      try {
        const u = new URL(s.url);
        const img = document.createElement('img');
        img.src = `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=32`;
        img.alt = '';
        img.loading = 'lazy';
        fav.appendChild(img);
      } catch(e) { fav.textContent = '🔗'; }
      a.appendChild(fav);

      const info = document.createElement('div');
      info.className = 'source-info';
      const sl = document.createElement('div');
      sl.className = 'source-label';
      sl.textContent = s.label;
      info.appendChild(sl);
      try {
        const su = document.createElement('div');
        su.className = 'source-url';
        su.textContent = new URL(s.url).hostname;
        info.appendChild(su);
      } catch(e) {}
      a.appendChild(info);

      const arrow = document.createElement('span');
      arrow.className = 'source-arrow';
      arrow.textContent = '↗';
      a.appendChild(arrow);

      list.appendChild(a);
    });
    sec.appendChild(list);
    sidebarBody.appendChild(sec);
  }

  sidebar.classList.add('open');
  sidebarOverlay.classList.add('visible');
  document.body.classList.add('sidebar-open');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('visible');
  document.body.classList.remove('sidebar-open');
  if (activeLeafEl) { activeLeafEl.classList.remove('active-leaf'); activeLeafEl = null; }
}

document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

// ---- Build leaf cards ----
function renderLeaves(children, accentColor, breadcrumb) {
  const grid = document.createElement('div');
  grid.className = 'leaf-grid';
  children.forEach(child => {
    const el = document.createElement('div');
    el.className = 'leaf-card';
    el.style.setProperty('--accent-color', accentColor);
    el.textContent = child.name;

    const arrow = document.createElement('span');
    arrow.className = 'card-arrow';
    arrow.textContent = '→';
    el.appendChild(arrow);

    el.addEventListener('click', () => {
      if (activeLeafEl) activeLeafEl.classList.remove('active-leaf');
      el.classList.add('active-leaf');
      activeLeafEl = el;
      openSidebar(child, breadcrumb, accentColor);
    });

    grid.appendChild(el);
  });
  return grid;
}

// ---- Build accordions recursively ----
function renderAccordion(node, depth, accentColor, isTopLevel, breadcrumb) {
  const wrapper = document.createElement('div');
  wrapper.className = 'accordion';

  const trigger = document.createElement('button');
  trigger.className = 'accordion-trigger';
  trigger.onclick = function() { this.parentElement.classList.toggle('open'); };

  if (isTopLevel) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.background = accentColor;
    trigger.appendChild(dot);
  }

  const chevron = document.createElement('span');
  chevron.className = 'accordion-chevron';
  chevron.textContent = '▶';
  trigger.appendChild(chevron);

  const title = document.createElement('span');
  title.className = 'accordion-title';
  title.textContent = node.name;
  trigger.appendChild(title);

  const badge = document.createElement('span');
  badge.className = 'accordion-badge';
  badge.textContent = getBadgeText(node);
  trigger.appendChild(badge);

  wrapper.appendChild(trigger);

  const body = document.createElement('div');
  body.className = 'accordion-body';
  const inner = document.createElement('div');
  inner.className = 'accordion-inner';

  const currentBreadcrumb = breadcrumb ? breadcrumb + ' › ' + node.name : node.name;

  const leafChildren = node.children.filter(c => isLeaf(c));
  const branchChildren = node.children.filter(c => !isLeaf(c));

  if (leafChildren.length > 0) {
    inner.appendChild(renderLeaves(leafChildren, accentColor, currentBreadcrumb));
  }

  if (branchChildren.length > 0) {
    const group = document.createElement('div');
    group.className = 'accordion-group';
    branchChildren.forEach(child => {
      group.appendChild(renderAccordion(child, depth + 1, accentColor, false, currentBreadcrumb));
    });
    inner.appendChild(group);
  }

  body.appendChild(inner);
  wrapper.appendChild(body);
  return wrapper;
}

// ---- Build tabs & panels ----
const tabsContainer = document.getElementById('tabs');
const panelsContainer = document.getElementById('tab-panels');

tabs.forEach((tab, i) => {
  const colors = {
    color: tab.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length].color,
    light: tab.colorLight || DEFAULT_COLORS[i % DEFAULT_COLORS.length].light,
    border: tab.colorBorder || DEFAULT_COLORS[i % DEFAULT_COLORS.length].border,
  };
  const slug = tab.name.toLowerCase().replace(/[^a-z0-9]/g, '-');

  const btn = document.createElement('button');
  btn.className = 'tab' + (i === 0 ? ' active' : '');
  btn.dataset.tab = slug;
  btn.style.setProperty('--tab-color', colors.color);
  btn.style.setProperty('--tab-bg', colors.light);
  btn.style.setProperty('--tab-border', colors.border);
  btn.innerHTML = `<span style="font-size:16px">${tab.icon || '●'}</span>${tab.name}`;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`[data-tab-content="${slug}"]`).classList.add('active');
  });
  tabsContainer.appendChild(btn);

  const panel = document.createElement('div');
  panel.className = 'tab-content' + (i === 0 ? ' active' : '');
  panel.dataset.tabContent = slug;

  const moduleGoal = document.createElement('div');
  moduleGoal.className = 'module-goal';
  moduleGoal.textContent = tab.goal || '';
  panel.appendChild(moduleGoal);
  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';
  const expandBtn = document.createElement('button');
  expandBtn.className = 'toolbar-btn';
  expandBtn.textContent = 'Expand all';
  expandBtn.onclick = () => panel.querySelectorAll('.accordion').forEach(a => a.classList.add('open'));
  const collapseBtn = document.createElement('button');
  collapseBtn.className = 'toolbar-btn';
  collapseBtn.textContent = 'Collapse all';
  collapseBtn.onclick = () => panel.querySelectorAll('.accordion').forEach(a => a.classList.remove('open'));
  toolbar.appendChild(expandBtn);
  toolbar.appendChild(collapseBtn);
  panel.appendChild(toolbar);

  const group = document.createElement('div');
  group.className = 'accordion-group';
  if (tab.children) {
    tab.children.forEach(section => {
      if (!isLeaf(section)) {
        group.appendChild(renderAccordion(section, 0, colors.color, true, tab.name));
      }
    });
  }
  panel.appendChild(group);
  panelsContainer.appendChild(panel);
});