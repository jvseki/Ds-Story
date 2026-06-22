/* DS A Fonte — Main Script */

const WHATSAPP_NUMBER = '5518996563430';
const TAMANHOS_ROUPA = ['P', 'M', 'G', 'GG'];
const TAMANHOS_TENIS = ['38', '39', '40', '41', '42', '43', '44'];

const GRUPOS = [
  {
    id: 'copa',
    titulo: 'Copa do Mundo & Seleção',
    descricao: 'Camisas retrô, kits femininos e peças da Seleção Brasileira. Época de Copa!'
  },
  {
    id: 'oculos',
    titulo: 'Óculos & Lupas',
    descricao: 'Modelos premium com várias lentes e cores. Escolha o seu estilo.'
  },
  {
    id: 'camisetas',
    titulo: 'Camisetas & Oversized',
    descricao: 'Camisetas importadas, conjuntos e modelos oversized.'
  },
  {
    id: 'kits',
    titulo: 'Kits Completos',
    descricao: 'Looks completos streetwear — monte seu estilo.'
  },
  {
    id: 'jaquetas',
    titulo: 'Jaquetas',
    descricao: 'Corta-vento e jaquetas esportivas importadas.'
  },
  {
    id: 'moletom',
    titulo: 'Moletom & Streetwear',
    descricao: 'Peças premium para o dia a dia com estilo.'
  },
  {
    id: 'polos',
    titulo: 'Polos Dry Fit',
    descricao: 'Polos esportivos de alta performance.'
  },
  {
    id: 'acessorios',
    titulo: 'Bonés & Acessórios',
    descricao: 'Bonés importados e acessórios exclusivos.'
  },
  {
    id: 'tenis',
    titulo: 'Tênis',
    descricao: 'Modelos importados com várias numerações e cores.'
  }
];

function imgs(id, count) {
  return Array.from({ length: count }, (_, i) =>
    `images/produtos/${id}/${String(i + 1).padStart(2, '0')}.jpeg`
  );
}

const produtos = [
  {
    id: 'camisa-retro-brasil',
    nome: 'Camisa Retrô Seleção 1998',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 249,99',
    imagens: imgs('camisa-retro-brasil', 15),
    descricao: 'Camisas retrô tailandesa — raridade. Modelo Canarinho da Copa de 98, manga longa e curta. Toque para ver todas as fotos.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-feminino-brasil',
    nome: 'Kit Feminino Seleção',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    variantes: [
      { nome: 'Baby look azul 2026', preco: 'R$ 159,99' },
      { nome: 'Shortinho', preco: 'R$ 79,99' },
      { nome: 'Chapéu Brasil', preco: 'R$ 39,99' }
    ],
    imagens: imgs('kit-feminino-brasil', 6),
    legendas: [
      'Kit completo',
      'Kit completo',
      'Baby look azul 2026',
      'Baby look + Chapéu',
      'Shortinho',
      'Kit completo'
    ],
    descricao: 'Kit feminino CBF para a Copa 2026. Baby look, shortinho e chapéu — monte seu look de torcedora.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'oakley-thump',
    nome: 'Óculos Oakley Thump 2.0',
    categoria: 'oculos',
    categoriaLabel: 'Óculos',
    grupo: 'oculos',
    preco: 'R$ 249,99',
    imagens: imgs('oakley-thump', 2),
    descricao: 'Ouro irídio lente polarizada — 2ª geração. Kit completo com case, lentes extras, cabo USB e acessórios. Várias cores de lente disponíveis.',
    tamanhos: null
  },
  {
    id: 'oakley-juliet',
    nome: 'Oakley Juliet 24K',
    categoria: 'oculos',
    categoriaLabel: 'Óculos',
    grupo: 'oculos',
    preco: 'R$ 149,99',
    promo: '2 por R$ 199,99',
    imagens: imgs('oakley-juliet', 5),
    descricao: 'Armação 24K com lentes espelhadas. Prata, preto e vermelho ruby — várias opções disponíveis.',
    tamanhos: null
  },
  {
    id: 'oculos-dart',
    nome: 'Óculos Dart — UV 400',
    categoria: 'oculos',
    categoriaLabel: 'Óculos',
    grupo: 'oculos',
    preco: 'R$ 179,99',
    imagens: imgs('oculos-dart', 1),
    descricao: 'Proteção UV 400. Design esportivo sem armação — rosa, roxo e laranja disponíveis.',
    tamanhos: null
  },
  {
    id: 'oakley-penny',
    nome: 'Oakley Penny',
    categoria: 'oculos',
    categoriaLabel: 'Óculos',
    grupo: 'oculos',
    variantes: [
      { nome: 'Black', preco: 'R$ 149,99' },
      { nome: 'Ruby', preco: null }
    ],
    imagens: imgs('oakley-penny', 2),
    descricao: 'Modelo Penny clássico. Black preto fosco ou Ruby com lente vermelha espelhada.',
    tamanhos: null
  },
  {
    id: 'jaqueta-alpinestars',
    nome: 'Jaqueta Alpinestars',
    categoria: 'jaquetas',
    categoriaLabel: 'Jaqueta',
    grupo: 'jaquetas',
    preco: 'R$ 249,99',
    imagens: imgs('jaqueta-alpinestars', 1),
    descricao: 'Corta-vento preto com logo Alpinestars. Ideal para moto e streetwear.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'moletom-ecko',
    nome: 'Moletom Ecko Unltd.',
    categoria: 'moletom',
    categoriaLabel: 'Moletom',
    grupo: 'moletom',
    preco: 'R$ 499,99',
    parcelamento: '6x R$ 99,99 no cartão',
    imagens: imgs('moletom-ecko', 5),
    descricao: 'Moletom premium tricolor branco, preto e azul. Logo clássico Ecko no peito.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'polo-honda',
    nome: 'Polo Dry Fit Honda',
    categoria: 'polos',
    categoriaLabel: 'Polo',
    grupo: 'polos',
    preco: 'R$ 79,99',
    imagens: imgs('polo-honda', 4),
    descricao: 'Polo dry fit vermelho e preto com logo Honda. Tecido leve para o dia a dia.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'polo-ferrari',
    nome: 'Polo Ferrari F1',
    categoria: 'polos',
    categoriaLabel: 'Polo',
    grupo: 'polos',
    preco: 'R$ 79,99',
    imagens: imgs('polo-ferrari', 4),
    descricao: 'Polo Scuderia Ferrari com patrocínios Santander, Puma, Shell e UPS.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'camisetas-colecao',
    nome: 'Camisetas & Conjuntos',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('camisetas-colecao', 14),
    descricao: 'Camisetas e conjuntos importados — Casablanca, times e streetwear. Veja todos os modelos nas fotos.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'oversized-colecao',
    nome: 'Oversized & Street',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('oversized-colecao', 8),
    descricao: 'Camisetas oversized e peças streetwear. Inclui modelos da Seleção e grifes exclusivas.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kits-streetwear',
    nome: 'Kits Streetwear',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('kits-streetwear', 12),
    descricao: 'Kits completos — Diesel, City Denim e mais. Moletom, calça, boné e tênis no look.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'bones-colecao',
    nome: 'Bonés & Acessórios',
    categoria: 'acessorios',
    categoriaLabel: 'Bonés',
    grupo: 'acessorios',
    preco: null,
    imagens: imgs('bones-colecao', 16),
    descricao: 'Bonés importados e acessórios. Vários modelos — confira a galeria completa.',
    tamanhos: null
  },
  {
    id: 'mizuno-lotus',
    nome: 'Mizuno Flor de Lótus',
    categoria: 'tenis',
    categoriaLabel: 'Tênis',
    grupo: 'tenis',
    preco: 'R$ 449,99',
    imagens: imgs('mizuno-lotus', 8),
    descricao: 'Wave Prophecy com flor de lótus bordada. Branco, roxo e azul disponíveis.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'tenis-nacional',
    nome: 'Tênis Nacional TN',
    categoria: 'tenis',
    categoriaLabel: 'Tênis',
    grupo: 'tenis',
    preco: 'R$ 149,99',
    imagens: imgs('tenis-nacional', 5),
    descricao: 'Air Max Plus TN. Várias cores disponíveis — consulte numeração no WhatsApp.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'mizuno-pro14',
    nome: 'Mizuno Pro 14',
    categoria: 'tenis',
    categoriaLabel: 'Tênis',
    grupo: 'tenis',
    preco: 'R$ 499,99',
    imagens: imgs('mizuno-pro14', 9),
    descricao: 'Wave Prophecy Pro 14. Diversas combinações de cores — escolha a sua.',
    tamanhos: TAMANHOS_TENIS
  }
];

produtos.forEach(p => {
  p.imagem = p.imagens[0];
});

let modalState = {
  produtoId: null,
  photoIndex: 0,
  selectedSize: null
};

function getProduto(id) {
  return produtos.find(p => p.id === id);
}

function getImagens(produto) {
  return produto.imagens?.length ? produto.imagens : [produto.imagem];
}

function formatPreco(produto) {
  if (produto.preco) return produto.preco;
  return 'Solicitar orçamento';
}

function buildMensagem(produto, tamanho) {
  let msg = `Olá! Vi no site da DS A Fonte o produto "${produto.nome}" e gostaria de solicitar um orçamento.`;

  if (produto.variantes?.length) {
    const opcoes = produto.variantes
      .map(v => `${v.nome}${v.preco ? ` (${v.preco})` : ' (consultar valor)'}`)
      .join(', ');
    msg += ` Opções: ${opcoes}.`;
  } else if (produto.preco) {
    msg += ` Valor: ${produto.preco}.`;
  }

  if (produto.promo) msg += ` Promoção: ${produto.promo}.`;
  if (tamanho) msg += ` Tamanho/Numeração: ${tamanho}.`;

  return msg;
}

function solicitarOrcamento(produto, tamanho) {
  const mensagem = buildMensagem(produto, tamanho);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function renderSizeOptions(produtoId, tamanhos, selected = '', prefix = '') {
  return tamanhos.map(tamanho => `
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

function renderPrecoHTML(produto) {
  if (produto.variantes?.length) {
    return `
      <ul class="product-card__variantes">
        ${produto.variantes.map(v => `
          <li>
            <span class="product-card__variante-nome">${v.nome}</span>
            <span class="product-card__variante-preco${v.preco ? '' : ' product-card__variante-preco--quote'}">${v.preco || 'Solicitar orçamento'}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  const precoClass = produto.preco ? 'product-card__price' : 'product-card__price product-card__price--quote';

  return `
    <div class="${precoClass}">${formatPreco(produto)}</div>
    ${produto.promo ? `<div class="product-card__promo">${produto.promo}</div>` : ''}
    ${produto.parcelamento ? `<div class="product-card__parcela">${produto.parcelamento}</div>` : ''}
    ${!produto.preco ? '<p class="product-card__quote-hint">Chame no WhatsApp e faça seu orçamento personalizado.</p>' : ''}
  `;
}

function renderSizesHTML(produto, disabled = false) {
  if (!produto.tamanhos?.length) return '';

  const label = produto.categoria === 'tenis' ? 'Numeração' : 'Tamanho';
  const gridClass = produto.tamanhos.length > 4 ? 'size-options size-options--shoes' : 'size-options';

  return `
    <div class="product-card__sizes">
      <span class="size-label">${label}</span>
      <div class="${gridClass}" role="group" aria-label="Selecione ${label.toLowerCase()}">
        ${renderSizeOptions(produto.id, produto.tamanhos)}
      </div>
    </div>
  `;
}

function getLegenda(produto, index) {
  return produto.legendas?.[index] || null;
}

function renderPreviewHTML(produto) {
  const imagens = getImagens(produto);
  const count = imagens.length;

  return `
    <button type="button" class="product-card__preview" data-open-product="${produto.id}" aria-label="Ver fotos de ${produto.nome}">
      <img src="${imagens[0]}" alt="${produto.nome}" loading="lazy">
      <span class="product-card__tag">${produto.categoriaLabel}</span>
      ${count > 1 ? `<span class="product-card__photos-badge">${count} fotos</span>` : ''}
      <span class="product-card__view-hint">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        Ver produto
      </span>
    </button>
  `;
}

function buildProductCardHTML(produto) {
  const needsSize = Boolean(produto.tamanhos?.length);
  const btnText = needsSize ? 'Escolha o tamanho' : 'Solicitar Orçamento';

  return `
    <article class="product-card" data-id="${produto.id}" data-category="${produto.categoria}" data-group="${produto.grupo}">
      ${renderPreviewHTML(produto)}
      <div class="product-card__body">
        <h3 class="product-card__title">${produto.nome}</h3>
        ${renderPrecoHTML(produto)}
        <p class="product-card__desc">${produto.descricao}</p>
        ${renderSizesHTML(produto)}
        <button class="btn btn--whatsapp" data-id="${produto.id}" type="button"${needsSize ? ' disabled' : ''}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span class="btn-text">${btnText}</span>
        </button>
      </div>
    </article>
  `;
}

function bindProductCardEvents(container) {
  container.querySelectorAll('[data-open-product]').forEach(btn => {
    btn.addEventListener('click', () => openProductModal(btn.dataset.openProduct));
  });

  container.querySelectorAll('.size-btn').forEach(btn => {
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

  container.querySelectorAll('.btn--whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const produto = getProduto(btn.dataset.id);
      const tamanho = card.querySelector('.size-btn.active')?.dataset.size || null;
      if (produto) solicitarOrcamento(produto, tamanho);
    });
  });
}

function renderModalPriceHTML(produto) {
  if (produto.variantes?.length) {
    return `
      <h3 class="product-modal__section-title">Itens do kit</h3>
      <ul class="product-modal__variant-grid">
        ${produto.variantes.map(v => `
          <li class="product-modal__variant-item">
            <span class="product-modal__variant-name">${v.nome}</span>
            <span class="product-modal__variant-price${v.preco ? '' : ' product-modal__variant-price--quote'}">${v.preco || 'Solicitar orçamento'}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  const precoClass = produto.preco ? 'product-modal__price' : 'product-modal__price product-modal__price--quote';

  return `
    <h3 class="product-modal__section-title">Preço</h3>
    <div class="${precoClass}">${formatPreco(produto)}</div>
    ${produto.promo ? `<p class="product-modal__promo">${produto.promo}</p>` : ''}
    ${produto.parcelamento ? `<p class="product-modal__parcela">${produto.parcelamento}</p>` : ''}
    ${!produto.preco ? '<p class="product-modal__quote-hint">Sem preço fixo — chame no WhatsApp e faça seu orçamento.</p>' : ''}
  `;
}

function renderModalSizesHTML(produto) {
  if (!produto.tamanhos?.length) return '';

  const label = produto.categoria === 'tenis' ? 'Numeração' : 'Tamanho';
  const gridClass = produto.tamanhos.length > 4 ? 'size-options size-options--shoes' : 'size-options';

  return `
    <h3 class="product-modal__section-title">${label}</h3>
    <div class="${gridClass}" role="group" aria-label="Selecione ${label.toLowerCase()}">
      ${renderSizeOptions(produto.id, produto.tamanhos)}
    </div>
  `;
}

function updateModalPhoto(produto, index) {
  const imagens = getImagens(produto);
  const safeIndex = ((index % imagens.length) + imagens.length) % imagens.length;
  modalState.photoIndex = safeIndex;

  const imgEl = document.getElementById('productModalImage');
  const counterEl = document.getElementById('productModalCounter');
  const captionEl = document.getElementById('productModalCaption');
  const thumbsEl = document.getElementById('productModalThumbs');
  const dotsEl = document.getElementById('productModalDots');
  const legenda = getLegenda(produto, safeIndex);

  imgEl.src = imagens[safeIndex];
  imgEl.alt = legenda ? `${produto.nome} — ${legenda}` : `${produto.nome} — foto ${safeIndex + 1}`;
  counterEl.textContent = `${safeIndex + 1} / ${imagens.length}`;

  if (captionEl) {
    captionEl.textContent = legenda || '';
    captionEl.hidden = !legenda;
  }

  thumbsEl?.querySelectorAll('.product-modal__filmstrip-item').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === safeIndex);
    if (i === safeIndex) thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });

  dotsEl?.querySelectorAll('.product-modal__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === safeIndex);
    dot.setAttribute('aria-selected', i === safeIndex ? 'true' : 'false');
  });

  const prevBtn = document.querySelector('.product-modal__nav--prev');
  const nextBtn = document.querySelector('.product-modal__nav--next');
  const multi = imagens.length > 1;
  if (prevBtn) prevBtn.style.visibility = multi ? 'visible' : 'hidden';
  if (nextBtn) nextBtn.style.visibility = multi ? 'visible' : 'hidden';
  if (dotsEl) dotsEl.hidden = !multi;
  if (thumbsEl) thumbsEl.hidden = !multi;
}

function openProductModal(produtoId) {
  const produto = getProduto(produtoId);
  const modal = document.getElementById('productModal');
  if (!produto || !modal) return;

  modalState = { produtoId, photoIndex: 0, selectedSize: null };

  const imagens = getImagens(produto);
  const needsSize = Boolean(produto.tamanhos?.length);
  const btnText = needsSize ? 'Escolha o tamanho' : 'Solicitar Orçamento';

  document.getElementById('productModalCategory').textContent = produto.categoriaLabel;
  document.getElementById('productModalTitle').textContent = produto.nome;
  document.getElementById('productModalDesc').textContent = produto.descricao;
  document.getElementById('productModalPrice').innerHTML = renderModalPriceHTML(produto);

  const sizesEl = document.getElementById('productModalSizes');
  sizesEl.innerHTML = renderModalSizesHTML(produto);
  sizesEl.hidden = !produto.tamanhos?.length;

  const whatsappBtn = document.getElementById('productModalWhatsapp');
  whatsappBtn.disabled = needsSize;
  whatsappBtn.querySelector('.btn-text').textContent = btnText;

  const thumbsEl = document.getElementById('productModalThumbs');
  thumbsEl.innerHTML = imagens.map((src, i) => {
    const legenda = getLegenda(produto, i);
    return `
      <button type="button" class="product-modal__filmstrip-item${i === 0 ? ' active' : ''}" data-photo-index="${i}" aria-label="${legenda || `Foto ${i + 1}`}">
        <img src="${src}" alt="" loading="lazy">
      </button>
    `;
  }).join('');

  const dotsEl = document.getElementById('productModalDots');
  dotsEl.innerHTML = imagens.map((_, i) => `
    <button type="button" class="product-modal__dot${i === 0 ? ' active' : ''}" data-photo-index="${i}" aria-label="Ir para foto ${i + 1}" aria-selected="${i === 0 ? 'true' : 'false'}"></button>
  `).join('');

  updateModalPhoto(produto, 0);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  bindModalEvents(produto);
  modal.querySelector('.product-modal__close')?.focus();
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalState = { produtoId: null, photoIndex: 0, selectedSize: null };
}

function bindModalEvents(produto) {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  modal.querySelectorAll('[data-close-modal]').forEach(el => {
    el.onclick = closeProductModal;
  });

  modal.querySelector('.product-modal__nav--prev').onclick = () => {
    updateModalPhoto(produto, modalState.photoIndex - 1);
  };

  modal.querySelector('.product-modal__nav--next').onclick = () => {
    updateModalPhoto(produto, modalState.photoIndex + 1);
  };

  modal.querySelectorAll('[data-photo-index]').forEach(el => {
    el.onclick = () => updateModalPhoto(produto, Number(el.dataset.photoIndex));
  });

  const whatsappBtn = document.getElementById('productModalWhatsapp');
  modal.querySelectorAll('.size-btn').forEach(btn => {
    btn.onclick = () => {
      modal.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      modalState.selectedSize = btn.dataset.size;
      whatsappBtn.disabled = false;
      whatsappBtn.querySelector('.btn-text').textContent = 'Solicitar Orçamento';
    };
  });

  whatsappBtn.onclick = () => solicitarOrcamento(produto, modalState.selectedSize);
}

function initModalSwipe() {
  const stage = document.getElementById('productModalStage');
  if (!stage) return;

  let startX = 0;
  let tracking = false;

  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    tracking = true;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    if (!tracking) return;
    tracking = false;

    const produto = getProduto(modalState.produtoId);
    if (!produto) return;

    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) < 48) return;

    updateModalPhoto(produto, modalState.photoIndex + (diff < 0 ? 1 : -1));
  }, { passive: true });
}

function initProductModal() {
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('productModal');
    if (!modal?.classList.contains('open')) return;

    const produto = getProduto(modalState.produtoId);
    if (!produto) return;

    if (e.key === 'Escape') closeProductModal();
    if (e.key === 'ArrowLeft') updateModalPhoto(produto, modalState.photoIndex - 1);
    if (e.key === 'ArrowRight') updateModalPhoto(produto, modalState.photoIndex + 1);
  });
}

function renderGroupedCatalog(items) {
  return GRUPOS
    .map(grupo => {
      const groupItems = items.filter(p => p.grupo === grupo.id);
      if (!groupItems.length) return '';

      return `
        <section class="catalog-group" data-group="${grupo.id}">
          <div class="catalog-group__header">
            <span class="catalog-group__tag">${grupo.titulo}</span>
            <h3 class="catalog-group__title">${grupo.titulo}</h3>
            <p class="catalog-group__desc">${grupo.descricao}</p>
          </div>
          <div class="catalog-group__grid catalog__grid">
            ${groupItems.map(buildProductCardHTML).join('')}
          </div>
        </section>
      `;
    })
    .filter(Boolean)
    .join('');
}

function renderCatalog(filter = 'todos') {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const items = produtos.filter(p => filter === 'todos' || p.categoria === filter);

  if (filter === 'todos') {
    grid.className = 'catalog-groups';
    grid.innerHTML = renderGroupedCatalog(items);
  } else {
    grid.className = 'catalog__grid';
    grid.innerHTML = items.map(buildProductCardHTML).join('');
  }

  bindProductCardEvents(grid);
  initCardAnimations();
}

function initFilters() {
  const filters = document.getElementById('filters');
  if (!filters) return;

  function applyFilter(filter) {
    filters.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    renderCatalog(filter);
  }

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    applyFilter(btn.dataset.filter);
  });

  document.querySelectorAll('[data-filter-scroll]').forEach(link => {
    link.addEventListener('click', () => {
      const filter = link.dataset.filterScroll;
      setTimeout(() => applyFilter(filter), 400);
    });
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
  nav.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function initCardAnimations() {
  const cards = document.querySelectorAll('.product-card:not(.visible)');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  cards.forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  initFilters();
  initMobileMenu();
  initHeaderScroll();
  initProductModal();
  initModalSwipe();
});
