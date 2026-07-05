/* ============================================================
   DigiSylva - Global Search
   ============================================================ */

const SEARCH_INDEX = [
  {
    title: "Home - DigiSylva Platform",
    url: "index.html",
    keywords: ["home","platform","features","digital forest","northeastern","overview","mission"],
    snippet: "An integrated platform for forest monitoring, biomass estimation, and ecosystem intelligence across Maine and the Northeastern U.S."
  },
  {
    title: "Forest Map - AGB and CHM Viewer",
    url: "forest-map.html",
    keywords: ["forest map","AGB","CHM","LiDAR","Howland","aboveground biomass","canopy height","overlay","leaflet","layer","year","download","tif"],
    snippet: "Interactive visualization of aboveground biomass (AGB) and canopy height (CHM) with multi-year time series at Howland Research Forest."
  },
  {
    title: "Forest Inventory - Field Plots",
    url: "forest-inventory.html",
    keywords: ["forest inventory","plots","field plots","trees","biomass","AGB","volume","DBH","species","stem map","tree map","LiDAR","Howland","TPH"],
    snippet: "188 field inventory plots across Maine with biomass and volume time series, LiDAR structure metrics, and per-plot tree maps."
  },
  {
    title: "Forest Tools - External Tools and Software",
    url: "forest-tools.html",
    keywords: ["forest tools","wood products carbon tracker","WPSC","PyFIA","FIA","software","calculator","carbon","github"],
    snippet: "DigiSylva team tools: the Wood Products Carbon Tracker and the PyFIA Python package for U.S. Forest Inventory and Analysis data."
  },
  {
    title: "Forest Explorer - USDA National Agriculture Imagery Program (NAIP)",
    url: "forest-explorer.html",
    keywords: ["Forest Explorer","NAIP","aerial imagery","USDA","orthoimagery","satellite","NDVI","CIR","color infrared","GeoTIFF","download","coverage","planetary computer"],
    snippet: "View and download USDA NAIP aerial imagery - natural color, color-infrared, and NDVI - with area selection and GeoTIFF export."
  },
  {
    title: "Forest Prediction - Biomass and Canopy Forecasting",
    url: "forest-prediction.html",
    keywords: ["prediction","forecast","scenario","biomass projection","climate","management","regression","model","future","warming"],
    snippet: "Machine learning models for projecting future forest biomass and canopy dynamics under baseline, warming, and active management scenarios."
  },
  {
    title: "Forest Health - Spruce Budworm Monitoring",
    url: "forest-health.html",
    keywords: ["forest health","spruce budworm","defoliation","pest","insect","outbreak","balsam fir","spruce","risk"],
    snippet: "Spruce budworm monitoring and outlook across DigiSylva sites (illustrative demonstration data)."
  },
  {
    title: "AI Advisor - Forest Science Chat",
    url: "ai-advisor.html",
    keywords: ["AI","advisor","chat","question","carbon sequestration","FIA","LiDAR","management","advisor","bot","ask"],
    snippet: "Ask science-based questions about forest management, carbon, biomass, canopy height, and northeastern forest ecosystems."
  },
  {
    title: "Team - Xinyuan Wei",
    url: "team.html",
    keywords: ["Xinyuan Wei","researcher","PyFIA","LiDAR","carbon","biomass","Oak Ridge","assistant professor","dissolved organic carbon"],
    snippet: "Assistant Research Professor, School of Forest Resources, University of Maine. Forest carbon dynamics, airborne LiDAR, PyFIA developer."
  },
  {
    title: "Team - Daniel Hayes",
    url: "team.html",
    keywords: ["Daniel Hayes","professor","carbon cycling","AmeriFlux","ecosystem modeling","flux","Howland","land atmosphere"],
    snippet: "Professor studying terrestrial carbon cycling and land-atmosphere interactions; co-investigator on DigiSylva initiatives."
  },
  {
    title: "Team - Aaron Weiskittel",
    url: "team.html",
    keywords: ["Aaron Weiskittel","professor","director","forest biometrics","growth yield","allometric models","mensuration","Northeast"],
    snippet: "Professor and Director, School of Forest Resources. Specializes in forest biometrics, growth and yield modeling, and management planning."
  },
  {
    title: "Publications - PyFIA (2025)",
    url: "publications.html",
    keywords: ["PyFIA","FIA","forest inventory analysis","carbon balance management","2025","python package","open source"],
    snippet: "PyFIA: An open-source Python package for analyzing U.S. Forest Inventory and Analysis data. Carbon Balance and Management, 2025."
  },
  {
    title: "Publications - Biomass and LiDAR Research",
    url: "publications.html",
    keywords: ["publications","journal","biomass","LiDAR","remote sensing","airborne","allometric","basal area","point cloud"],
    snippet: "Peer-reviewed research on LiDAR-based biomass estimation, allometric modeling, and remote sensing across northeastern U.S. forests."
  },
  {
    title: "Publications - Carbon and Wood Products",
    url: "publications.html",
    keywords: ["publications","carbon","wood products","harvested","HWP","lumber","life cycle","carbon storage","2022","2023"],
    snippet: "Research on carbon stocks in harvested wood products, life-cycle carbon accounting, and substitution effects from Maine's forests."
  },
  {
    title: "Publications - Forest Ecology and Climate",
    url: "publications.html",
    keywords: ["publications","forest ecology","climate change","warming","dissolved organic carbon","DOC","tree species","composition"],
    snippet: "Research on climate change impacts on northeastern forests, dissolved organic carbon export, and forest species composition shifts."
  },
  {
    title: "News and Updates",
    url: "news.html",
    keywords: ["news","updates","publication","conference","data release","award","announcement","events","spring symposium"],
    snippet: "Latest from DigiSylva - new publications, platform updates, data releases, and upcoming events."
  },
  {
    title: "Workshops - Events",
    url: "workshops.html",
    keywords: ["workshops","events","forest carbon workshop","Orono","training","outreach"],
    snippet: "DigiSylva workshops and events, including the Forest Carbon Workshop in Orono, Maine."
  },
  {
    title: "Howland Research Forest",
    url: "forest-map.html",
    keywords: ["Howland","AmeriFlux","US-Ho1","Penobscot","carbon flux","LiDAR monitoring","Maine","spruce","fir","hardwood"],
    snippet: "Howland Research Forest, Howland ME - AmeriFlux eddy covariance site US-Ho1. Primary LiDAR monitoring site for DigiSylva (2012-2025)."
  },
  {
    title: "Maine Forest Profile",
    url: "index.html",
    keywords: ["Maine","spruce fir","northern hardwood","17.6 million acres","90% forested","timber","forest products","Howland"],
    snippet: "Maine is the most forested state in the U.S. with ~90% forest cover and 17.6 million acres. DigiSylva's primary focus area."
  },
  {
    title: "New Hampshire Forest Profile",
    url: "index.html",
    keywords: ["New Hampshire","NH","84% forested","White Mountains","maple syrup","boreal"],
    snippet: "New Hampshire forests: northern hardwood and spruce-fir communities in the White Mountains; 4.8 million forested acres."
  },
  {
    title: "Vermont Forest Profile",
    url: "index.html",
    keywords: ["Vermont","VT","sugar maple","Green Mountains","foliage","agro-forestry","carbon storage"],
    snippet: "Vermont's forests celebrated for sugar maple, autumn foliage, and regional leadership in sustainable forest management."
  },
  {
    title: "Affiliations and Partners",
    url: "team.html",
    keywords: ["Barbara Wheatland","geospatial analysis","Center for Sustainable Forests","UMaine","affiliation","partner"],
    snippet: "DigiSylva is developed in collaboration with the Barbara Wheatland Geospatial Analysis Laboratory and the Center for Sustainable Forests."
  }
];

/* ─── Modal Creation ─── */
function createSearchModal() {
  if (document.getElementById('sylva-search-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'sylva-search-overlay';
  overlay.className = 'search-overlay';
  overlay.style.display = 'none';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Search DigiSylva');

  overlay.innerHTML = `
    <div class="search-modal">
      <div class="search-header">
        <span style="font-size:1.1rem;color:var(--green-mid);flex-shrink:0;">🔍</span>
        <input type="text" id="sylva-search-input" placeholder="Search DigiSylva…" autocomplete="off" spellcheck="false" />
        <button onclick="closeSearch()" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--text-light);padding:0.2rem 0.4rem;border-radius:4px;line-height:1;" title="Close">✕</button>
      </div>
      <div class="search-results" id="sylva-search-results">
        <div class="search-no-results" id="sylva-search-empty" style="display:none;">No results found. Try different keywords.</div>
      </div>
      <div class="search-footer">
        <span><kbd>↵</kbd> Open</span>
        <span><kbd>ESC</kbd> Close</span>
        <span><kbd>Ctrl</kbd>+<kbd>K</kbd> Shortcut</span>
      </div>
    </div>
  `;

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeSearch();
  });

  document.body.appendChild(overlay);

  const input = document.getElementById('sylva-search-input');
  input.addEventListener('input', function() { runSearch(this.value); });
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeSearch(); return; }
    if (e.key === 'Enter') {
      const first = document.querySelector('.search-result-item');
      if (first) window.location.href = first.getAttribute('href');
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const items = document.querySelectorAll('.search-result-item');
      if (items.length) items[0].focus();
    }
  });

  // Arrow key navigation within results
  document.getElementById('sylva-search-results').addEventListener('keydown', function(e) {
    const items = [...document.querySelectorAll('.search-result-item')];
    const idx = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && idx < items.length - 1) { e.preventDefault(); items[idx + 1].focus(); }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (idx <= 0) document.getElementById('sylva-search-input').focus();
      else items[idx - 1].focus();
    }
    if (e.key === 'Escape') closeSearch();
  });
}

function openSearch() {
  createSearchModal();
  const overlay = document.getElementById('sylva-search-overlay');
  overlay.style.display = 'flex';
  runSearch('');
  setTimeout(() => document.getElementById('sylva-search-input').focus(), 40);
}

function closeSearch() {
  const overlay = document.getElementById('sylva-search-overlay');
  if (overlay) overlay.style.display = 'none';
}

function highlight(text, query) {
  if (!query) return text;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${safe})`, 'gi'), '<mark style="background:#d8f3dc;color:inherit;border-radius:2px;">$1</mark>');
}

/* Resolve an index URL relative to the current page location.
   index.html lives at site root; all other pages live in /pages/. */
function resolveUrl(url) {
  const inPages = location.pathname.replace(/\\/g, '/').includes('/pages/');
  if (url === 'index.html') return inPages ? '../index.html' : 'index.html';
  return inPages ? url : 'pages/' + url;
}

function runSearch(query) {
  const resultsEl = document.getElementById('sylva-search-results');
  const emptyEl   = document.getElementById('sylva-search-empty');

  // Remove old result items (keep emptyEl)
  resultsEl.querySelectorAll('.search-result-item').forEach(el => el.remove());

  const q = query.toLowerCase().trim();
  let results = [];

  if (!q) {
    results = SEARCH_INDEX.slice(0, 8);
  } else {
    const words = q.split(/\s+/);
    results = SEARCH_INDEX
      .map(item => {
        const haystack = (item.title + ' ' + item.keywords.join(' ') + ' ' + item.snippet).toLowerCase();
        const score = words.reduce((s, w) => s + (haystack.includes(w) ? 1 : 0), 0);
        return { item, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(x => x.item);
  }

  if (results.length === 0) {
    emptyEl.style.display = 'block';
  } else {
    emptyEl.style.display = 'none';
    results.forEach(item => {
      const a = document.createElement('a');
      a.className = 'search-result-item';
      a.href = resolveUrl(item.url);
      a.tabIndex = 0;
      a.innerHTML = `
        <div class="search-result-title">${highlight(item.title, q)}</div>
        <div class="search-result-snippet">${highlight(item.snippet, q)}</div>
        <div class="search-result-url">DigiSylva · ${resolveUrl(item.url)}</div>
      `;
      resultsEl.insertBefore(a, emptyEl);
    });
  }
}

/* Keyboard shortcut: Ctrl/Cmd + K */
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    openSearch();
  }
});
