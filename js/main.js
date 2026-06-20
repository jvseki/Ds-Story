/* DS A Fonte — Main Script */

const WHATSAPP_NUMBER = '5518996563430';
const TAMANHOS = ['P', 'M', 'G', 'GG'];

const produtos = [
  {
    id: 'camisa-brasil',
    nome: 'Camisa Seleção Canarinho',
    categoria: 'selecao',
    categoriaLabel: 'Seleção',
    imagem: 'images/hero-brasil.png',
    descricao: 'Camisa oficial da Seleção Brasileira. Modelo Canarinho, perfeita para torcer na Copa.'
  },
  {
    id: 'kit-brasil',
    nome: 'Kit Polo + Boné Seleção CBF',
    categoria: 'selecao',
    categoriaLabel: 'Seleção',
    imagem: 'images/produto-brasil-kit.png',
    descricao: 'Conjunto polo azul e boné oficial CBF com patrocínios Nike, Itaú e Guaraná Antarctica.'
  },
  {
    id: 'polo-ferrari',
    nome: 'Polo Ferrari F1 Santander',
    categoria: 'f1',
    categoriaLabel: 'F1',
    imagem: 'images/produto-ferrari.png',
    descricao: 'Polo oficial Scuderia Ferrari com patrocínios Santander, Puma, Shell e UPS.'
  },
  {
    id: 'conjunto-nike',
    nome: 'Conjunto Nike Preto e Branco',
    categoria: 'casual',
    categoriaLabel: 'Casual',
    imagem: 'images/produto-nike.png',
    descricao: 'Jaqueta e calça Nike com listras brancas. Estilo esportivo premium para o dia a dia.'
  },
  {
    id: 'santos-fc',
    nome: 'Manga Longa Santos FC',
    categoria: 'times',
    categoriaLabel: 'Times BR',
    imagem: 'images/produto-santos.png',
    descricao: 'Camisa manga longa preta com escudo oficial do Santos Futebol Clube estampado nas costas.'
  }
];

function buildMensagem(produto, tamanho) {
  return `Olá! Vi no site da DS A Fonte o produto "${produto.nome}" e gostaria de solicitar um orçamento. Tamanho: ${tamanho}`;
}

function solicitarOrcamento(produto, tamanho) {
  if (!tamanho) return;

  const mensagem = buildMensagem(produto, tamanho);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function renderSizeOptions(produtoId, selected = '') {
  return TAMANHOS.map(tamanho => `
    <button
      class="size-btn${selected === tamanho ? ' active' : ''}"
      type="button"
      data-id="${produtoId}"
      data-size="${tamanho}"
      aria-label="Tamanho ${tamanho}"
      aria-pressed="${selected === tamanho}">
      ${tamanho}
    </button>
  `).join('');
}

function renderCatalog(filter = 'todos') {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  grid.innerHTML = produtos
    .filter(p => filter === 'todos' || p.categoria === filter)
    .map(produto => `
      <article class="product-card" data-id="${produto.id}" data-category="${produto.categoria}">
        <div class="product-card__image">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <span class="product-card__tag">${produto.categoriaLabel}</span>
        </div>
        <div class="product-card__body">
          <h3 class="product-card__title">${produto.nome}</h3>
          <p class="product-card__desc">${produto.descricao}</p>
          <div class="product-card__sizes">
            <span class="size-label">Tamanho</span>
            <div class="size-options" role="group" aria-label="Selecione o tamanho">
              ${renderSizeOptions(produto.id)}
            </div>
          </div>
          <button class="btn btn--whatsapp" data-id="${produto.id}" type="button" disabled>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span class="btn-text">Escolha o tamanho</span>
          </button>
        </div>
      </article>
    `)
    .join('');

  grid.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const orcamentoBtn = card.querySelector('.btn--whatsapp');

      card.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      orcamentoBtn.disabled = false;
      orcamentoBtn.querySelector('.btn-text').textContent = 'Solicitar Orçamento';
    });
  });

  grid.querySelectorAll('.btn--whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const id = btn.dataset.id;
      const produto = produtos.find(p => p.id === id);
      const tamanhoBtn = card.querySelector('.size-btn.active');
      const tamanho = tamanhoBtn?.dataset.size;

      if (produto && tamanho) solicitarOrcamento(produto, tamanho);
    });
  });

  initCardAnimations();
}

function initFilters() {
  const filters = document.getElementById('filters');
  if (!filters) return;

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog(btn.dataset.filter);
  });
}

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

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function initCardAnimations() {
  const cards = document.querySelectorAll('.product-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  cards.forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  initFilters();
  initMobileMenu();
  initHeaderScroll();
});
