/* DS A Fonte — Layout e navegação compartilhada */

function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function closeMenu() {
    toggle.classList.remove('active');
    nav.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    toggle.classList.add('active');
    nav.classList.add('open');
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  toggle.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);
  nav.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

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

function initPromoSlider() {
  const track = document.getElementById('promoSliderTrack');
  const dotsEl = document.getElementById('promoSliderDots');
  if (!track || !dotsEl) return;

  const slides = [...track.children];
  if (!slides.length) return;

  let index = 0;
  let timer;

  dotsEl.innerHTML = slides.map((_, i) =>
    `<button type="button" class="promo-slider__dot${i === 0 ? ' active' : ''}" aria-label="Ir para slide ${i + 1}" data-slide="${i}"></button>`
  ).join('');

  function goTo(nextIndex) {
    index = ((nextIndex % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsEl.querySelectorAll('.promo-slider__dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(index + 1), 6000);
  }

  document.querySelector('.promo-slider__nav--prev')?.addEventListener('click', () => {
    goTo(index - 1);
    resetTimer();
  });

  document.querySelector('.promo-slider__nav--next')?.addEventListener('click', () => {
    goTo(index + 1);
    resetTimer();
  });

  dotsEl.addEventListener('click', (e) => {
    const dot = e.target.closest('[data-slide]');
    if (!dot) return;
    goTo(Number(dot.dataset.slide));
    resetTimer();
  });

  resetTimer();
}

function initHeaderSearchFromUrl() {
  const query = new URLSearchParams(window.location.search).get('q') || '';
  document.querySelectorAll('.header__search-input').forEach(input => {
    input.value = query;
  });
}

function getProductCover(produto) {
  return produto.imagem || produto.imagens?.[0] || 'images/logo.png';
}

function getNavSections(grupoId, items) {
  if (grupoId === 'camisetas') {
    const oversized = items.filter(p => /oversized/i.test(`${p.id} ${p.nome}`));
    const camisetas = items.filter(p => !/oversized/i.test(`${p.id} ${p.nome}`));
    return [
      { title: 'Camisetas', items: camisetas },
      { title: 'Oversized', items: oversized }
    ].filter(section => section.items.length);
  }
  return [{ title: null, items }];
}

function buildMegaProductLink(produto, isActive) {
  const cover = getProductCover(produto);
  const price = produto.preco || 'Solicitar orçamento';
  return `
    <a
      href="catalogo.html?p=${produto.id}"
      class="category-mega__product${isActive ? ' is-active' : ''}"
      data-preview="${cover}"
      data-name="${produto.nome.replace(/"/g, '&quot;')}"
      data-price="${price.replace(/"/g, '&quot;')}">
      <img src="${cover}" alt="" loading="lazy" width="44" height="44">
      <span class="category-mega__product-text">
        <strong>${produto.nome}</strong>
        <small>${price}</small>
      </span>
    </a>
  `;
}

function buildMegaPanel(grupo, items) {
  const first = items[0];
  const sections = getNavSections(grupo.id, items);
  const maxPerSection = 6;
  let firstProduct = true;

  const sectionsHTML = sections.map(section => {
    const list = section.items.slice(0, maxPerSection);
    const productsHTML = list.map(p => {
      const html = buildMegaProductLink(p, firstProduct);
      firstProduct = false;
      return html;
    }).join('');

    return `
      <div class="category-mega__section">
        ${section.title ? `<h4 class="category-mega__section-title">${section.title}</h4>` : ''}
        <div class="category-mega__products">${productsHTML}</div>
      </div>
    `;
  }).join('');

  const previewSrc = first ? getProductCover(first) : 'images/logo.png';
  const previewName = first?.nome || grupo.titulo;
  const previewPrice = first?.preco || 'Veja opções no catálogo';

  return `
    <div class="category-mega">
      <div class="container category-mega__inner">
        <div class="category-mega__content">
          <div class="category-mega__head">
            <h3 class="category-mega__title">${grupo.titulo}</h3>
            <a href="catalogo.html?cat=${grupo.id}" class="category-mega__all">Ver todos (${items.length})</a>
          </div>
          <div class="category-mega__sections">${sectionsHTML}</div>
        </div>
        <aside class="category-mega__preview" aria-live="polite">
          <div class="category-mega__preview-frame">
            <img class="category-mega__preview-img" src="${previewSrc}" alt="">
          </div>
          <p class="category-mega__preview-name">${previewName}</p>
          <p class="category-mega__preview-price">${previewPrice}</p>
        </aside>
      </div>
    </div>
  `;
}

function bindMegaPreview(panel) {
  const img = panel.querySelector('.category-mega__preview-img');
  const nameEl = panel.querySelector('.category-mega__preview-name');
  const priceEl = panel.querySelector('.category-mega__preview-price');
  if (!img || !nameEl || !priceEl) return;

  panel.querySelectorAll('.category-mega__product').forEach(link => {
    const activate = () => {
      panel.querySelectorAll('.category-mega__product').forEach(el => el.classList.remove('is-active'));
      link.classList.add('is-active');
      img.src = link.dataset.preview;
      nameEl.textContent = link.dataset.name;
      priceEl.textContent = link.dataset.price;
    };
    link.addEventListener('mouseenter', activate);
    link.addEventListener('focus', activate);
  });
}

function buildMobileCategories() {
  if (typeof GRUPOS === 'undefined' || typeof produtos === 'undefined') return '';

  const links = GRUPOS.map(grupo => {
    const count = produtos.filter(p => p.grupo === grupo.id).length;
    if (!count) return '';
    const label = NAV_LABELS[grupo.id] || grupo.titulo;
    return `<a href="catalogo.html?cat=${grupo.id}" class="nav-categories__link">${label} <span>${count}</span></a>`;
  }).filter(Boolean).join('');

  if (!links) return '';

  return `
    <div class="nav-categories">
      <span class="nav-categories__title">Categorias</span>
      <div class="nav-categories__grid">${links}</div>
    </div>
  `;
}

function bindCategoryMegaHover() {
  const items = document.querySelectorAll('.category-nav__item');
  if (!items.length) return;

  let closeTimer;

  function closeAll() {
    document.querySelectorAll('.category-mega').forEach(panel => panel.classList.remove('is-open'));
    document.querySelectorAll('.category-nav__link').forEach(link => link.classList.remove('is-active'));
  }

  items.forEach(item => {
    const mega = item.querySelector('.category-mega');
    const link = item.querySelector('.category-nav__link');
    if (!mega) return;

    const open = () => {
      clearTimeout(closeTimer);
      closeAll();
      mega.classList.add('is-open');
      link?.classList.add('is-active');
    };

    const scheduleClose = () => {
      closeTimer = setTimeout(closeAll, 150);
    };

    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', scheduleClose);
    mega.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    mega.addEventListener('mouseleave', scheduleClose);
  });
}

function initCategoryNav() {
  const mount = document.getElementById('categoryNav');
  const mainNav = document.getElementById('mainNav');
  if (!mount || typeof GRUPOS === 'undefined' || typeof produtos === 'undefined') return;

  const items = GRUPOS.map(grupo => {
    const products = produtos.filter(p => p.grupo === grupo.id);
    if (!products.length) return '';
    const label = NAV_LABELS[grupo.id] || grupo.titulo;
    return `
      <li class="category-nav__item">
        <a href="catalogo.html?cat=${grupo.id}" class="category-nav__link">${label}</a>
        ${buildMegaPanel(grupo, products)}
      </li>
    `;
  }).filter(Boolean).join('');

  if (!items) return;

  mount.innerHTML = `
    <div class="container category-nav__inner">
      <ul class="category-nav__list">${items}</ul>
    </div>
  `;

  mount.querySelectorAll('.category-mega').forEach(bindMegaPreview);
  bindCategoryMegaHover();

  if (mainNav && !mainNav.querySelector('.nav-categories')) {
    const whatsapp = mainNav.querySelector('.nav-link--cta');
    const block = document.createElement('div');
    block.innerHTML = buildMobileCategories();
    if (block.firstElementChild && whatsapp) {
      mainNav.insertBefore(block.firstElementChild, whatsapp);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  redirectProductDeepLink();
  initHeaderSearchFromUrl();
  initCategoryNav();
  initMobileMenu();
  initHeaderScroll();
  initActiveNav();
  initPromoSlider();
});
