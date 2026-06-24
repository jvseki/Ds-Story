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
  nav.querySelectorAll('.nav-link, .nav-categories__link').forEach(link => link.addEventListener('click', closeMenu));
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

function buildMobileCategories() {
  if (typeof GRUPOS === 'undefined') return '';

  const links = GRUPOS.map(grupo => {
    const label = NAV_LABELS[grupo.id] || grupo.titulo;
    return `<a href="catalogo.html?cat=${grupo.id}" class="nav-categories__link">${label}</a>`;
  }).join('');

  return `
    <div class="nav-categories">
      <span class="nav-categories__title">Categorias</span>
      <div class="nav-categories__grid">${links}</div>
    </div>
  `;
}

function initMobileCategories() {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav || mainNav.querySelector('.nav-categories')) return;

  const whatsapp = mainNav.querySelector('.nav-link--cta');
  const block = document.createElement('div');
  block.innerHTML = buildMobileCategories();
  if (block.firstElementChild && whatsapp) {
    mainNav.insertBefore(block.firstElementChild, whatsapp);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  redirectProductDeepLink();
  initHeaderSearchFromUrl();
  initMobileCategories();
  initMobileMenu();
  initHeaderScroll();
  initActiveNav();
  initPromoSlider();
});
