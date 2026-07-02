/* DS A Fonte — Catálogo e modal */

let activeCategoryFilter = 'todos';
let activeSearchQuery = '';

let modalState = {
  produtoId: null,
  photoIndex: 0,
  selectedSize: null,
  selectedVariant: null
};

function getPublicUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const clean = path.replace(/^\//, '');
  return `${SITE_ORIGIN}/${clean}`;
}

function getAbsoluteUrl(path) {
  return getPublicUrl(path);
}

function getVariante(produto, index) {
  return produto.variantes?.[index] ?? null;
}

function getPhotoUrlForIndex(produto, index) {
  const imagens = getImagens(produto);
  const safe = Math.max(0, Math.min(index, imagens.length - 1));
  return getAbsoluteUrl(imagens[safe]);
}

function getVariantFotoIndices(variante) {
  if (variante?.fotos?.length) return variante.fotos;
  if (variante?.foto != null) return [variante.foto];
  return null;
}

function getModalPhotoIndices(produto) {
  const fromVariant = getVariantFotoIndices(modalState.selectedVariant);
  if (fromVariant) return fromVariant;
  return getImagens(produto).map((_, i) => i);
}

function buildMidiasList(imageItems, videoConfig) {
  if (!videoConfig?.src) return imageItems;
  return [{
    tipo: 'video',
    src: videoConfig.src,
    poster: videoConfig.poster,
    legenda: videoConfig.legenda || 'Vídeo do produto'
  }, ...imageItems];
}

function getModalMidias(produto) {
  const imagens = getImagens(produto);
  const indices = getModalPhotoIndices(produto);
  const variante = modalState.selectedVariant;
  const imageItems = indices.map(i => ({
    tipo: 'imagem',
    src: imagens[i],
    legenda: getLegenda(produto, i),
    globalIndex: i
  }));

  let videoSrc = null;
  if (variante?.video) {
    videoSrc = variante.video;
  } else if (produto.video && !produto.variantesPorCor) {
    videoSrc = produto.video;
  }

  return buildMidiasList(imageItems, videoSrc ? {
    src: videoSrc,
    poster: imagens[indices[0]] ?? imagens[0]
  } : null);
}

function hasPrecoFixo(produto, variante) {
  return Boolean(variante?.preco || produto.preco);
}

function getResolvedPreco(produto, variante) {
  return variante?.preco || produto.preco || null;
}

function getWhatsappCtaText(produto, tamanho, variante) {
  if (!canSubmitOrder(produto, tamanho, variante)) {
    if (produto.grupo === 'kits' && produto.variantes?.length && !variante) return 'Escolha a peça ou kit';
    if (produto.variantes?.length && !variante) {
      return produto.variantesPorCor ? 'Escolha a cor' : 'Escolha o modelo';
    }
    if (produto.tamanhos?.length && !tamanho) return 'Escolha o tamanho';
    return 'Solicitar Orçamento';
  }
  return hasPrecoFixo(produto, variante) ? 'Comprar no WhatsApp' : 'Solicitar Orçamento';
}

function getActivePhotoUrl(produto, photoIndex = modalState.photoIndex) {
  const midias = modalState.produtoId === produto.id ? getModalMidias(produto) : getMidias(produto);
  const item = midias[photoIndex];
  if (item?.tipo === 'imagem') return getAbsoluteUrl(item.src);
  if (item?.tipo === 'video') return getAbsoluteUrl(item.poster || getImagens(produto)[0]);
  return getAbsoluteUrl(getImagens(produto)[0]);
}

function canSubmitOrder(produto, tamanho, variante) {
  const needsSize = Boolean(produto.tamanhos?.length);
  const needsVariant = Boolean(produto.variantes?.length);
  if (needsSize && !tamanho) return false;
  if (needsVariant && !variante) return false;
  return true;
}

function getWhatsappBtnText(produto) {
  if (produto.grupo === 'kits' && produto.variantes?.length && !modalState.selectedVariant) {
    return 'Escolha a peça ou kit';
  }
  if (produto.variantes?.length && !modalState.selectedVariant) return 'Escolha o modelo';
  if (produto.tamanhos?.length) return 'Escolha o tamanho';
  return 'Solicitar Orçamento';
}

function matchesFilter(produto, filter) {
  if (filter === 'todos') return true;
  return produto.categoria === filter || produto.grupo === filter;
}

function normalizeSearch(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function matchesSearch(produto, query) {
  if (!query) return true;
  const q = normalizeSearch(query);
  const parts = [
    produto.nome,
    produto.descricao,
    produto.categoriaLabel,
    produto.grupo,
    produto.categoria,
    ...(produto.variantes?.map(v => v.nome) || [])
  ];
  return normalizeSearch(parts.join(' ')).includes(q);
}

function getFilteredProducts(categoryFilter, searchQuery) {
  return produtos.filter(p => matchesFilter(p, categoryFilter) && matchesSearch(p, searchQuery));
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

function syncHeaderSearchInputs(value) {
  document.querySelectorAll('.header__search-input').forEach(el => {
    el.value = value;
  });
}

function updateSearchMeta(count, query) {
  const meta = document.getElementById('catalogSearchMeta');
  if (!meta) return;

  if (!query.trim()) {
    meta.hidden = true;
    meta.textContent = '';
    return;
  }

  meta.hidden = false;
  const label = count === 1 ? 'produto encontrado' : 'produtos encontrados';
  meta.innerHTML = `<strong>${count}</strong> ${label} para "${escapeHtml(query)}"`;
}

function getProductShareUrl(produtoId, photoIndex = 0) {
  const url = new URL(SITE_ORIGIN + '/catalogo');
  url.searchParams.set('p', produtoId);
  if (photoIndex > 0) url.searchParams.set('f', String(photoIndex));
  return url.toString();
}

function getBrowserProductUrl(produtoId, photoIndex = 0) {
  const url = new URL(window.location.href);
  url.searchParams.set('p', produtoId);
  if (photoIndex > 0) url.searchParams.set('f', String(photoIndex));
  else url.searchParams.delete('f');
  url.hash = '';
  return `${url.pathname}${url.search}${url.hash}`;
}

function syncUrlToModal(produto, photoIndex = 0) {
  if (!produto) return;
  try {
    history.replaceState(null, '', getBrowserProductUrl(produto.id, photoIndex));
  } catch (_) {
    /* URL sync opcional — não bloqueia abrir o modal */
  }
}

function clearProductShareUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete('p');
  url.searchParams.delete('f');
  history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

async function enviarFotoCliente(produto, photoIndex = modalState.photoIndex) {
  const midias = modalState.produtoId === produto.id ? getModalMidias(produto) : getMidias(produto);
  const item = midias[photoIndex];
  const legenda = item?.tipo === 'imagem'
    ? getLegenda(produto, getImagens(produto).indexOf(item.src))
    : null;
  const titulo = legenda ? `${produto.nome} — ${legenda}` : produto.nome;

  if (item?.tipo === 'video') {
    const videoUrl = getAbsoluteUrl(item.src);
    const msg = `${titulo}\nVídeo: ${videoUrl}`;
    openWhatsApp(`https://wa.me/?text=${encodeURIComponent(msg)}`);
    return;
  }

  const fotoUrl = getActivePhotoUrl(produto, photoIndex);

  if (navigator.share) {
    try {
      const response = await fetch(fotoUrl);
      if (!response.ok) throw new Error('fetch failed');
      const blob = await response.blob();
      const file = new File([blob], `${produto.id}.jpg`, { type: blob.type || 'image/jpeg' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: titulo });
        return;
      }
    } catch (err) {
      if (err?.name === 'AbortError') return;
    }
  }

  const msg = `${titulo}\n${fotoUrl}`;
  openWhatsApp(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}

function getProduto(id) {
  return produtos.find(p => p.id === id);
}

function getImagens(produto) {
  return produto.imagens?.length ? produto.imagens : [produto.imagem];
}

function produtoTemVideo(produto) {
  if (produto.video) return true;
  return Boolean(produto.variantes?.some(v => v.video));
}

function getMidias(produto) {
  const imagens = getImagens(produto);
  const imageItems = imagens.map(src => ({ tipo: 'imagem', src }));
  return buildMidiasList(imageItems, produto.video ? {
    src: produto.video,
    poster: imagens[0]
  } : null);
}

function getMidiaCount(produto) {
  return getMidias(produto).length;
}

function formatPreco(produto) {
  if (produto.preco) return produto.preco;
  return 'Solicitar orçamento';
}

function buildMensagem(produto, tamanho, variante, fotoUrl) {
  const preco = getResolvedPreco(produto, variante);
  let msg = preco
    ? `Olá! Vi no site da DS A Fonte o produto "${produto.nome}" e quero comprar.`
    : `Olá! Vi no site da DS A Fonte o produto "${produto.nome}" e gostaria de solicitar um orçamento.`;

  if (variante) {
    msg += ` Modelo escolhido: ${variante.nome}${variante.preco ? ` (${variante.preco})` : ''}.`;
  } else if (produto.variantes?.length && !preco) {
    const opcoes = produto.variantes
      .map(v => `${v.nome}${v.preco ? ` (${v.preco})` : ''}`)
      .join(', ');
    msg += ` Opções disponíveis: ${opcoes}.`;
  }

  if (preco && !variante?.preco) msg += ` Valor: ${preco}.`;
  if (produto.promo) msg += ` Promoção: ${produto.promo}.`;
  if (tamanho) msg += ` Tamanho/Numeração: ${tamanho}.`;
  if (fotoUrl) msg += ` Foto: ${fotoUrl}`;

  return msg;
}

function solicitarOrcamento(produto, tamanho, variante, fotoUrl) {
  const mensagem = buildMensagem(produto, tamanho, variante, fotoUrl);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  openWhatsApp(url);
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

function getPrecoResumo(produto) {
  if (produto.preco) return produto.preco;
  const precos = [...new Set(produto.variantes?.map(v => v.preco).filter(Boolean) || [])];
  if (!precos.length) return null;
  if (precos.length === 1) return precos[0];
  const valores = precos
    .map(p => parseFloat(String(p).replace(/[^\d,]/g, '').replace(',', '.')))
    .filter(n => !isNaN(n))
    .sort((a, b) => a - b);
  if (!valores.length) return precos[0];
  return `A partir de R$ ${valores[0].toFixed(2).replace('.', ',')}`;
}

function renderPrecoHTML(produto) {
  if (produto.variantes?.length) {
    const resumo = getPrecoResumo(produto);
    const precoClass = resumo ? 'product-card__price' : 'product-card__price product-card__price--quote';

    return `
      <div class="${precoClass}">${resumo || 'Solicitar orçamento'}</div>
      ${produto.promo ? `<div class="product-card__promo">${produto.promo}</div>` : ''}
      ${produto.parcelamento ? `<div class="product-card__parcela">${produto.parcelamento}</div>` : ''}
      ${!resumo ? '<p class="product-card__quote-hint">Chame no WhatsApp e faça seu orçamento personalizado.</p>' : ''}
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

function getVariantLabel(produto, context = 'card') {
  if (produto.variantesPorCor) return context === 'modal' ? 'Cor' : 'Cor';
  if (produto.id === 'kit-feminino-brasil') return 'Itens do kit';
  if (produto.grupo === 'kits') return 'Escolha a peça ou kit';
  if (produto.variantes?.length > 1 && produto.imagens?.length > 1) return 'Escolha o modelo';
  return context === 'modal' ? 'Escolha o modelo' : 'Modelo';
}

function getVariantFotoIndex(variante, fallback = 0) {
  if (variante?.fotos?.length) return variante.fotos[0];
  if (variante?.foto != null) return variante.foto;
  return fallback;
}

function renderVariantPickHTML(produto, context = 'card') {
  if (!produto.variantes?.length) return '';

  const label = getVariantLabel(produto, context);
  const groupClass = context === 'modal' ? 'variant-options variant-options--modal' : 'variant-options';

  return `
    <div class="product-card__variantes-pick">
      <span class="size-label">${label}</span>
      <div class="${groupClass}" role="group" aria-label="Escolha o modelo">
        ${produto.variantes.map((v, i) => `
          <button
            type="button"
            class="variant-btn"
            data-variant-index="${i}"
            data-foto-index="${getVariantFotoIndex(v, i)}"
            aria-pressed="false">
            ${v.nome}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function updateOrderButtonState(container, produto) {
  const btn = container.querySelector('.btn--whatsapp');
  if (!btn) return;

  const tamanho = container.querySelector('.size-btn.active')?.dataset.size || null;
  const variantIndex = container.querySelector('.variant-btn.active')?.dataset.variantIndex;
  const variante = variantIndex != null ? getVariante(produto, Number(variantIndex)) : null;
  const ready = canSubmitOrder(produto, tamanho, variante);

  btn.disabled = !ready;
  btn.querySelector('.btn-text').textContent = getWhatsappCtaText(produto, tamanho, variante);
}

function renderSizesHTML(produto) {
  if (!produto.tamanhos?.length) return '';

  const label = produto.tamanhos === TAMANHOS_TENIS
    ? 'Numeração'
    : produto.tamanhos === TAMANHOS_INFANTIL
      ? 'Tamanho infantil'
      : 'Tamanho';
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

function getCapaImagem(produto) {
  const imagens = getImagens(produto);
  if (produto.imagemCapa) return produto.imagemCapa;
  const index = produto.imagemCapaIndex ?? 0;
  return imagens[index] || imagens[0];
}

function renderPreviewHTML(produto) {
  const imagens = getImagens(produto);
  const capa = getCapaImagem(produto);
  const count = getMidiaCount(produto);
  const badgeText = count > 8 ? 'Galeria completa' : `${count} mídias`;

  return `
    <button type="button" class="product-card__preview" data-open-product="${produto.id}" aria-label="Ver fotos de ${produto.nome}">
      <img src="${capa}" alt="${produto.nome}" loading="lazy">
      <span class="product-card__tag">${produto.categoriaLabel}</span>
      ${produtoTemVideo(produto) ? '<span class="product-card__video-badge">Vídeo</span>' : ''}
      ${count > 1 ? `<span class="product-card__photos-badge">${badgeText}</span>` : ''}
      <span class="product-card__view-hint">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        Ver produto
      </span>
    </button>
  `;
}

function buildProductCardHTML(produto) {
  const needsSize = Boolean(produto.tamanhos?.length);
  const needsVariant = Boolean(produto.variantes?.length);
  const btnText = getWhatsappCtaText(
    produto,
    null,
    null
  );
  const disabled = needsSize || needsVariant;

  const cardExtras = [
    !produto.preco && !produto.variantes?.length ? 'product-card--quote' : '',
    produto.galeriaCompacta ? 'product-card--catalogo' : ''
  ].filter(Boolean).join(' ');

  return `
    <article class="product-card${cardExtras ? ' ' + cardExtras : ''}" data-id="${produto.id}" data-category="${produto.categoria}" data-group="${produto.grupo}">
      ${renderPreviewHTML(produto)}
      <div class="product-card__body">
        <h3 class="product-card__title">${produto.nome}</h3>
        ${renderPrecoHTML(produto)}
        <p class="product-card__desc">${produto.descricao}</p>
        ${renderVariantPickHTML(produto)}
        ${renderSizesHTML(produto)}
        <button class="btn btn--whatsapp" data-id="${produto.id}" type="button"${disabled ? ' disabled' : ''}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span class="btn-text">${btnText}</span>
        </button>
      </div>
    </article>
  `;
}

function bindProductCardEvents(container) {
  container.querySelectorAll('[data-open-product]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openProductModal(btn.dataset.openProduct);
    });
  });

  container.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const produto = getProduto(card.dataset.id);
      if (!produto) return;

      card.querySelectorAll('.variant-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const fotoIndex = Number(btn.dataset.fotoIndex);
      const previewImg = card.querySelector('.product-card__preview img');
      if (previewImg && !Number.isNaN(fotoIndex)) {
        previewImg.src = getImagens(produto)[fotoIndex] || previewImg.src;
      }

      updateOrderButtonState(card, produto);
    });
  });

  container.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const produto = getProduto(card.dataset.id);

      card.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      if (produto) updateOrderButtonState(card, produto);
    });
  });

  container.querySelectorAll('.btn--whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const produto = getProduto(btn.dataset.id);
      if (!produto) return;

      const tamanho = card.querySelector('.size-btn.active')?.dataset.size || null;
      const variantIndex = card.querySelector('.variant-btn.active')?.dataset.variantIndex;
      const variante = variantIndex != null ? getVariante(produto, Number(variantIndex)) : null;
      const fotoIndex = variante?.foto ?? 0;
      const fotoUrl = getPhotoUrlForIndex(produto, fotoIndex);

      if (canSubmitOrder(produto, tamanho, variante)) {
        solicitarOrcamento(produto, tamanho, variante, fotoUrl);
      }
    });
  });
}

function updatePhotoShareButton(produto, photoIndex) {
  const btn = document.getElementById('productModalPhotoShare');
  if (!btn) return;

  const midias = modalState.produtoId === produto.id ? getModalMidias(produto) : getMidias(produto);
  const item = midias[photoIndex];
  btn.hidden = !item;
  btn.textContent = item?.tipo === 'video'
    ? 'Enviar este vídeo no WhatsApp'
    : 'Enviar esta foto no WhatsApp';
}

function renderModalPriceHTML(produto) {
  if (produto.variantes?.length && produto.variantesPorCor) {
    return `
      <h3 class="product-modal__section-title">Preço</h3>
      <div class="product-modal__price">${produto.preco || 'Consulte'}</div>
      ${produto.promo ? `<p class="product-modal__promo">${produto.promo}</p>` : ''}
      <h3 class="product-modal__section-title">${getVariantLabel(produto, 'modal')}</h3>
      <ul class="product-modal__variant-grid product-modal__variant-grid--colors">
        ${produto.variantes.map((v, i) => `
          <li>
            <button
              type="button"
              class="product-modal__variant-item variant-btn variant-btn--color"
              data-variant-index="${i}"
              data-foto-index="${getVariantFotoIndex(v, i)}"
              aria-pressed="false">
              <span class="product-modal__variant-name">${v.nome}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    `;
  }

  if (produto.variantes?.length) {
    const variantTitle = getVariantLabel(produto, 'modal');
    return `
      <h3 class="product-modal__section-title">${variantTitle}</h3>
      <ul class="product-modal__variant-grid">
        ${produto.variantes.map((v, i) => `
          <li>
            <button
              type="button"
              class="product-modal__variant-item variant-btn"
              data-variant-index="${i}"
              data-foto-index="${getVariantFotoIndex(v, i)}"
              aria-pressed="false">
              <span class="product-modal__variant-name">${v.nome}</span>
              <span class="product-modal__variant-price${v.preco ? '' : ' product-modal__variant-price--quote'}">${v.preco || 'Solicitar orçamento'}</span>
            </button>
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

  const label = produto.tamanhos === TAMANHOS_TENIS
    ? 'Numeração'
    : produto.tamanhos === TAMANHOS_INFANTIL
      ? 'Tamanho infantil'
      : 'Tamanho';
  const gridClass = produto.tamanhos.length > 4 ? 'size-options size-options--shoes' : 'size-options';

  return `
    <h3 class="product-modal__section-title">${label}</h3>
    <div class="${gridClass}" role="group" aria-label="Selecione ${label.toLowerCase()}">
      ${renderSizeOptions(produto.id, produto.tamanhos)}
    </div>
  `;
}

let modalImageToken = 0;
let modalEventsAbort = null;

const BLANK_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function clearModalPanel() {
  document.getElementById('productModalCategory').textContent = '';
  document.getElementById('productModalTitle').textContent = '';
  document.getElementById('productModalDesc').textContent = '';
  document.getElementById('productModalPrice').innerHTML = '';
  document.getElementById('productModalSizes').innerHTML = '';
  document.getElementById('productModalDots').innerHTML = '';
}

function resetModalGallery() {
  modalImageToken += 1;

  const imgEl = document.getElementById('productModalImage');
  const videoEl = document.getElementById('productModalVideo');
  const stageEl = document.getElementById('productModalStage');
  const captionEl = document.getElementById('productModalCaption');
  const counterEl = document.getElementById('productModalCounter');
  const modal = document.getElementById('productModal');

  stageEl?.classList.remove('has-video');
  stageEl?.classList.add('is-loading');

  if (imgEl) {
    imgEl.hidden = true;
    imgEl.src = BLANK_IMAGE;
    imgEl.alt = '';
  }

  if (videoEl) {
    videoEl.pause();
    videoEl.hidden = true;
    videoEl.removeAttribute('src');
    videoEl.load();
  }

  if (captionEl) {
    captionEl.textContent = '';
    captionEl.hidden = true;
  }

  if (counterEl) counterEl.textContent = '';
  modal?.classList.add('is-switching');
}

function showModalImage(produtoId, photoIndex, src, alt) {
  const token = modalImageToken;
  const imgEl = document.getElementById('productModalImage');
  const stageEl = document.getElementById('productModalStage');
  const modal = document.getElementById('productModal');
  if (!imgEl || !stageEl || !src) return;

  stageEl.classList.add('is-loading');
  imgEl.hidden = true;
  imgEl.src = BLANK_IMAGE;
  imgEl.alt = '';

  const loader = new Image();
  const reveal = () => {
    if (token !== modalImageToken) return;
    if (modalState.produtoId !== produtoId || modalState.photoIndex !== photoIndex) return;
    imgEl.src = src;
    imgEl.alt = alt;
    imgEl.hidden = false;
    stageEl.classList.remove('is-loading');
    modal?.classList.remove('is-switching');
  };

  loader.onload = reveal;
  loader.onerror = reveal;
  loader.src = src;

  if (loader.complete) reveal();
}

function updateModalGalleryDots(produto) {
  const midias = getModalMidias(produto);
  const dotsEl = document.getElementById('productModalDots');
  if (!dotsEl) return;

  dotsEl.innerHTML = midias.map((_, i) => `
    <button type="button" class="product-modal__dot${i === modalState.photoIndex ? ' active' : ''}" data-photo-index="${i}" aria-label="Ir para mídia ${i + 1}" aria-selected="${i === modalState.photoIndex ? 'true' : 'false'}"></button>
  `).join('');

  const multi = midias.length > 1;
  dotsEl.hidden = !multi || midias.length > 12;
}

function updateModalPhoto(produto, index) {
  const midias = getModalMidias(produto);
  if (!midias.length) return;

  const imagens = getImagens(produto);
  const safeIndex = ((index % midias.length) + midias.length) % midias.length;
  modalState.photoIndex = safeIndex;

  const imgEl = document.getElementById('productModalImage');
  const videoEl = document.getElementById('productModalVideo');
  const stageEl = document.getElementById('productModalStage');
  const counterEl = document.getElementById('productModalCounter');
  const captionEl = document.getElementById('productModalCaption');
  const dotsEl = document.getElementById('productModalDots');
  const item = midias[safeIndex];
  if (!item) return;

  stageEl?.classList.toggle('has-video', item.tipo === 'video');

  if (item.tipo === 'video') {
    stageEl?.classList.remove('is-loading');
    document.getElementById('productModal')?.classList.remove('is-switching');
    if (imgEl) {
      imgEl.hidden = true;
      imgEl.removeAttribute('src');
    }
    if (videoEl) {
      videoEl.hidden = false;
      videoEl.src = item.src;
      videoEl.poster = item.poster || imagens[0] || '';
      videoEl.load();
      const tryPlay = () => videoEl.play().catch(() => {});
      if (videoEl.readyState >= 2) tryPlay();
      else videoEl.addEventListener('loadeddata', tryPlay, { once: true });
    }
  } else if (imgEl) {
    if (videoEl) {
      videoEl.hidden = true;
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    }
    stageEl?.classList.remove('has-video');
    const imgIndex = imagens.indexOf(item.src);
    const legenda = imgIndex >= 0 ? getLegenda(produto, imgIndex) : null;
    const alt = legenda ? `${produto.nome} — ${legenda}` : `${produto.nome} — foto ${imgIndex + 1}`;
    showModalImage(produto.id, safeIndex, item.src, alt);
  }

  if (counterEl) counterEl.textContent = `${safeIndex + 1} / ${midias.length}`;

  if (captionEl) {
    const captionText = item.legenda || (item.tipo === 'imagem'
      ? getLegenda(produto, imagens.indexOf(item.src))
      : '');
    captionEl.textContent = captionText || '';
    captionEl.hidden = !captionText;
  }

  dotsEl?.querySelectorAll('.product-modal__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === safeIndex);
    dot.setAttribute('aria-selected', i === safeIndex ? 'true' : 'false');
  });

  const prevBtn = document.querySelector('.product-modal__nav--prev');
  const nextBtn = document.querySelector('.product-modal__nav--next');
  const multi = midias.length > 1;
  if (prevBtn) prevBtn.style.visibility = multi ? 'visible' : 'hidden';
  if (nextBtn) nextBtn.style.visibility = multi ? 'visible' : 'hidden';
  if (dotsEl) dotsEl.hidden = !multi || midias.length > 12;

  syncUrlToModal(produto, safeIndex);
  updatePhotoShareButton(produto, safeIndex);
}

function openProductModal(produtoId) {
  const produto = getProduto(produtoId);
  const modal = document.getElementById('productModal');
  if (!produto || !modal) return;

  modalEventsAbort?.abort();
  resetModalGallery();
  modal.classList.remove('is-closing');
  modalState = {
    produtoId,
    photoIndex: 0,
    selectedSize: null,
    selectedVariant: produto.variantesPorCor && produto.variantes?.length
      ? getVariante(produto, 0)
      : null
  };

  const midias = getModalMidias(produto);
  const needsSize = Boolean(produto.tamanhos?.length);
  const needsVariant = Boolean(produto.variantes?.length) && !produto.variantesPorCor;
  const btnText = getWhatsappCtaText(produto, null, modalState.selectedVariant);

  document.getElementById('productModalCategory').textContent = produto.categoriaLabel;
  document.getElementById('productModalTitle').textContent = produto.nome;
  document.getElementById('productModalDesc').textContent = produto.descricao;
  document.getElementById('productModalPrice').innerHTML = renderModalPriceHTML(produto);

  const sizesEl = document.getElementById('productModalSizes');
  sizesEl.innerHTML = renderModalSizesHTML(produto);
  sizesEl.hidden = !produto.tamanhos?.length;

  const whatsappBtn = document.getElementById('productModalWhatsapp');
  whatsappBtn.disabled = !canSubmitOrder(produto, null, modalState.selectedVariant);
  whatsappBtn.querySelector('.btn-text').textContent = btnText;

  if (produto.variantesPorCor && produto.variantes?.length) {
    requestAnimationFrame(() => {
      const firstVariantBtn = document.querySelector('#productModalPanel .variant-btn[data-variant-index="0"]');
      firstVariantBtn?.classList.add('active');
      firstVariantBtn?.setAttribute('aria-pressed', 'true');
    });
  }

  updateModalGalleryDots(produto);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  updateModalPhoto(produto, 0);

  bindModalEvents(produto);
  bindPhotoShareButton(produto);
  modal.querySelector('.product-modal__close')?.focus();
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  modalEventsAbort?.abort();
  resetModalGallery();
  clearModalPanel();

  modal.classList.add('is-closing');
  modal.classList.remove('open', 'is-switching');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  clearProductShareUrl();
  modalState = { produtoId: null, photoIndex: 0, selectedSize: null, selectedVariant: null };

  requestAnimationFrame(() => modal.classList.remove('is-closing'));
}

function bindModalEvents(produto) {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  modalEventsAbort?.abort();
  modalEventsAbort = new AbortController();
  const { signal } = modalEventsAbort;

  modal.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeProductModal, { signal });
  });

  modal.querySelector('.product-modal__nav--prev')?.addEventListener('click', () => {
    updateModalPhoto(produto, modalState.photoIndex - 1);
  }, { signal });

  modal.querySelector('.product-modal__nav--next')?.addEventListener('click', () => {
    updateModalPhoto(produto, modalState.photoIndex + 1);
  }, { signal });

  modal.querySelectorAll('[data-photo-index]').forEach(el => {
    el.addEventListener('click', () => updateModalPhoto(produto, Number(el.dataset.photoIndex)), { signal });
  });

  const whatsappBtn = document.getElementById('productModalWhatsapp');
  const panel = document.getElementById('productModalPanel');

  panel.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.querySelectorAll('.variant-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      modalState.selectedVariant = getVariante(produto, Number(btn.dataset.variantIndex));
      modalState.photoIndex = 0;
      updateModalGalleryDots(produto);
      updateModalPhoto(produto, 0);
      updateOrderButtonState(panel, produto);
    }, { signal });
  });

  panel.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      modalState.selectedSize = btn.dataset.size;
      updateOrderButtonState(panel, produto);
    }, { signal });
  });

  whatsappBtn.addEventListener('click', () => {
    if (!canSubmitOrder(produto, modalState.selectedSize, modalState.selectedVariant)) return;
    solicitarOrcamento(
      produto,
      modalState.selectedSize,
      modalState.selectedVariant,
      getActivePhotoUrl(produto)
    );
  }, { signal });
}

function bindPhotoShareButton(produto) {
  const btn = document.getElementById('productModalPhotoShare');
  if (!btn) return;
  btn.onclick = () => enviarFotoCliente(produto, modalState.photoIndex);
}

function initDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const produtoId = params.get('p');
  const produto = produtoId ? getProduto(produtoId) : null;
  if (!produto) return;

  const photoIndex = Math.max(0, parseInt(params.get('f') || '0', 10) || 0);

  setTimeout(() => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      openProductModal(produtoId);
      if (photoIndex > 0) updateModalPhoto(produto, photoIndex);
    }, 500);
  }, 200);
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

function renderCatalog(categoryFilter = activeCategoryFilter, searchQuery = activeSearchQuery) {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  activeCategoryFilter = categoryFilter;
  activeSearchQuery = searchQuery;
  const items = getFilteredProducts(categoryFilter, searchQuery);
  const useGrouped = categoryFilter === 'todos' && !searchQuery.trim();

  if (!items.length) {
    grid.className = 'catalog__grid';
    const term = searchQuery.trim();
    grid.innerHTML = term
      ? `<p class="catalog-empty">Nenhum produto encontrado para "<strong>${escapeHtml(term)}</strong>". Tente outro termo ou limpe a busca.</p>`
      : '<p class="catalog-empty">Nenhum produto nesta categoria no momento.</p>';
    updateSearchMeta(0, searchQuery);
    return;
  }

  if (useGrouped) {
    grid.className = 'catalog-groups';
    grid.innerHTML = renderGroupedCatalog(items);
  } else {
    grid.className = 'catalog__grid';
    grid.innerHTML = items.map(buildProductCardHTML).join('');
  }

  bindProductCardEvents(grid);
  initCardAnimations();
  updateSearchMeta(items.length, searchQuery);
}

function initFilters() {
  const filters = document.getElementById('filters');
  if (!filters) return;

  function applyFilter(filter) {
    activeCategoryFilter = filter;
    filters.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    renderCatalog(filter, activeSearchQuery);
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

  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  if (urlCat) applyFilter(urlCat);
  else applyFilter(activeCategoryFilter);
}

function initSearch() {
  const form = document.getElementById('catalogSearchForm');
  const input = document.getElementById('catalogSearch');
  if (!form || !input) return;

  activeSearchQuery = new URLSearchParams(window.location.search).get('q') || '';
  input.value = activeSearchQuery;
  syncHeaderSearchInputs(activeSearchQuery);

  function runSearch(query) {
    activeSearchQuery = query.trim();
    const url = new URL(window.location.href);
    if (activeSearchQuery) url.searchParams.set('q', activeSearchQuery);
    else url.searchParams.delete('q');
    history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    syncHeaderSearchInputs(activeSearchQuery);
    renderCatalog(activeCategoryFilter, activeSearchQuery);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    runSearch(input.value);
  });

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => runSearch(input.value), 280);
  });
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

function initCatalogPage() {
  const params = new URLSearchParams(window.location.search);
  activeSearchQuery = params.get('q') || '';
  let cat = params.get('cat') || 'todos';
  if (cat === 'tenis') cat = 'calcados';
  activeCategoryFilter = cat;

  initFilters();
  initSearch();
  initProductModal();
  initModalSwipe();
  initDeepLink();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === 'catalogo') {
    initCatalogPage();
  }
});
