const ELEMENTS = [
  "a","abbr","acronym","address","area","article","aside","audio",
  "b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup",
  "data","datalist","dd","del","details","dfn","dialog","div","dl","dt",
  "em","embed",
  "fieldset","figcaption","figure","footer","form",
  "h1","head","header","hgroup","hr","html",
  "i","iframe","img","input","ins",
  "kbd","label","legend","li","link",
  "main","map","mark","menu","meta","meter",
  "nav","noscript","object","ol","optgroup","option","output",
  "p","picture","pre","progress",
  "q","rp","rt","ruby",
  "s","samp","script","search","section","select","slot","small","source","span","strong","style","sub","summary","sup",
  "table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track",
  "u","ul","var","video","wbr"
];

const BASE_URL = "https://search3958.github.io/dictionary/html/";

function buildSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const path = window.location.pathname;
  const current = path.replace(/^.*\//, "").replace(/\.html$/, "") || "index";

  let heading = sidebar.querySelector("h3");
  if (!heading) {
    heading = document.createElement("h3");
    sidebar.appendChild(heading);
  }
  heading.textContent = "HTML要素一覧";

  let list = sidebar.querySelector("ul");
  if (!list) {
    list = document.createElement("ul");
    sidebar.appendChild(list);
  }

  list.innerHTML = ELEMENTS.map(el => {
    const href = `${BASE_URL}${el}.html`;
    const isCurrent = el === current ? ' class="current"' : "";
    return `<li><a href="${href}"${isCurrent}>&lt;${el}&gt;</a></li>`;
  }).join("");
}

function setupSidebarToggle() {
  const toggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (!toggle || !sidebar || !overlay) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });

  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    buildSidebar();
    setupSidebarToggle();
  });
} else {
  buildSidebar();
  setupSidebarToggle();
}
