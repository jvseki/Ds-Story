import fs from 'fs';

const src = fs.readFileSync('js/main.js', 'utf8');
const lines = src.split(/\r?\n/);

const prodStart = lines.findIndex((l) => l.startsWith('const produtos = ['));
const forEachEnd = lines.findIndex((l, i) => i > prodStart && l.startsWith('let modalState'));

const beforeProd = lines.slice(0, prodStart).join('\n');
const prodBlock = lines.slice(prodStart, forEachEnd).join('\n');
let afterProd = lines.slice(forEachEnd).join('\n');

const configPart = beforeProd.replace(
  /^\/\* DS A Fonte — Main Script \*\/\n\n/,
  '/* DS A Fonte — Config compartilhada */\n\n'
);

fs.writeFileSync('js/config.js', configPart + '\n');
fs.writeFileSync('js/catalog-data.js', '/* DS A Fonte — Dados do catálogo */\n\n' + prodBlock + '\n');

afterProd = afterProd.replace(
  /document\.addEventListener\('DOMContentLoaded', \(\) => \{\s*renderCatalog\(\);\s*initFilters\(\);\s*initMobileMenu\(\);\s*initHeaderScroll\(\);\s*initProductModal\(\);\s*initModalSwipe\(\);\s*initDeepLink\(\);\s*\}\);/,
  `function initCatalogPage() {
  renderCatalog();
  initFilters();
  initProductModal();
  initModalSwipe();
  initDeepLink();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === 'catalogo') {
    initCatalogPage();
  }
});`
);

afterProd = afterProd.replace(
  `function getProductShareUrl(produtoId, photoIndex = 0) {
  const url = new URL(SITE_ORIGIN);
  url.searchParams.set('p', produtoId);
  if (photoIndex > 0) url.searchParams.set('f', String(photoIndex));
  url.hash = 'catalogo';
  return url.toString();
}`,
  `function getProductShareUrl(produtoId, photoIndex = 0) {
  const url = new URL(SITE_ORIGIN + '/catalogo');
  url.searchParams.set('p', produtoId);
  if (photoIndex > 0) url.searchParams.set('f', String(photoIndex));
  return url.toString();
}`
);

afterProd = afterProd.replace(
  `  url.hash = 'catalogo';
  return \`\${url.pathname}\${url.search}\${url.hash}\`;`,
  `  url.hash = '';
  return \`\${url.pathname}\${url.search}\${url.hash}\`;`
);

const mobileMatch = afterProd.match(
  /function initMobileMenu\(\)[\s\S]*?function initHeaderScroll\(\)[\s\S]*?\}\n\nfunction initCardAnimations/
);
if (mobileMatch) {
  const mobileBlock = mobileMatch[0].replace(/\n\nfunction initCardAnimations$/, '');
  fs.writeFileSync(
    'js/site.js',
    `/* DS A Fonte — Layout e navegação compartilhada */

${mobileBlock}

function initActiveNav() {
  const page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll('[data-nav="' + page + '"]').forEach((el) => {
    if (el.classList.contains('mobile-tabs__item')) {
      el.classList.add('mobile-tabs__item--active');
    } else {
      el.classList.add('nav-link--active');
    }
  });
}

function redirectProductDeepLink() {
  const params = new URLSearchParams(window.location.search);
  if (!params.get('p')) return;
  if (document.body.dataset.page === 'catalogo') return;
  window.location.replace('catalogo.html' + window.location.search);
}

document.addEventListener('DOMContentLoaded', () => {
  redirectProductDeepLink();
  initMobileMenu();
  initHeaderScroll();
  initActiveNav();
});
`
  );
  afterProd = afterProd.replace(mobileBlock + '\n\n', '');
}

afterProd = afterProd.replace(
  `  document.querySelectorAll('[data-filter-scroll]').forEach(link => {
    link.addEventListener('click', () => {
      const filter = link.dataset.filterScroll;
      setTimeout(() => applyFilter(filter), 400);
    });
  });
}`,
  `  document.querySelectorAll('[data-filter-scroll]').forEach(link => {
    link.addEventListener('click', () => {
      const filter = link.dataset.filterScroll;
      setTimeout(() => applyFilter(filter), 400);
    });
  });

  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat) applyFilter(urlCat);
}`
);

fs.writeFileSync('js/main.js', '/* DS A Fonte — Catálogo e modal */\n\n' + afterProd);
console.log('split ok');
