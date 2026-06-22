/* DS A Fonte — Main Script */

const WHATSAPP_NUMBER = '5518996563430';
const TAMANHOS_ROUPA = ['P', 'M', 'G', 'GG'];
const TAMANHOS_INFANTIL = ['2', '4', '6', '8', '10', '12', '14'];
const TAMANHOS_TENIS = ['38', '39', '40', '41', '42', '43', '44'];

const GRUPOS = [
  {
    id: 'copa',
    titulo: 'Copa do Mundo & Seleção',
    descricao: 'Camisas retrô, kits, polos, bonés e moda blogueirinha da Seleção. Época de Copa!'
  },
  {
    id: 'oculos',
    titulo: 'Óculos & Lupas',
    descricao: 'Modelos premium com várias lentes e cores. Escolha o seu estilo.'
  },
  {
    id: 'camisetas',
    titulo: 'Camisetas & Conjuntos',
    descricao: 'Camisetas importadas, conjuntos streetwear e modelos oversized.'
  },
  {
    id: 'bermudas',
    titulo: 'Bermudas',
    descricao: 'Bermudas surf, elastano e jeans importados.'
  },
  {
    id: 'kits',
    titulo: 'Kits Completos',
    descricao: 'Looks completos Quiksilver — monte peça a peça ou o kit inteiro.'
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
    imagens: imgs('camisa-retro-brasil', 6),
    descricao: 'Camisas retrô tailandesa — raridade. Modelo Canarinho da Copa de 98, manga longa e curta.',
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
      { nome: 'Chapéu Brasil', preco: 'R$ 39,99' },
      { nome: 'Conjunto inteiro', preco: 'R$ 279,97', foto: 0 }
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
    id: 'conjunto-virginia',
    nome: 'Conjunto da Virgínia',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 149,99',
    promo: 'Moda Blogueirinha',
    video: 'images/produtos/conjunto-virginia/video.mp4',
    imagens: imgs('conjunto-virginia', 2),
    descricao: 'Conjunto crop + short verde e amarelo Brasil. Moda blogueirinha — veja o vídeo no produto.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-casal-brasil',
    nome: 'Kit Casal Seleção',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    variantes: [
      { nome: 'Amarelo Canarinho', preco: 'R$ 319,99', foto: 0 },
      { nome: 'Azul', preco: 'R$ 319,99', foto: 1 }
    ],
    imagens: imgs('kit-casal-brasil', 2),
    legendas: [
      'Kit casal amarelo Canarinho',
      'Kit casal azul'
    ],
    descricao: 'Kit casal Seleção Brasileira — camisa + short. Amarelo Canarinho ou azul, perfeito para torcer juntos.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'baby-look-brasil',
    nome: 'Baby Look Seleção 2026',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    variantes: [
      { nome: 'Amarelinha 2026', preco: 'R$ 159,99', foto: 0 },
      { nome: 'Azul 2026', preco: 'R$ 159,99', foto: 1 }
    ],
    imagens: imgs('baby-look-brasil', 2),
    legendas: ['Baby look amarelinha 2026', 'Baby look azul 2026'],
    descricao: 'Baby look feminino CBF edição 2026. Azul ou amarelinha — consulte disponibilidade.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'polo-treino-brasil',
    nome: 'Polo Treino Seleção',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 99,99',
    imagens: imgs('polo-treino-brasil', 16),
    descricao: 'Polo de treino CBF. Amarelo, azul, preto e ciano — várias cores disponíveis.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'bone-selecao-brasil',
    nome: 'Boné Seleção Brasil',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 59,99',
    imagens: imgs('bone-selecao-brasil', 8),
    descricao: 'Bonés oficiais CBF. Várias cores — amarelo, azul, preto, branco e mais.',
    tamanhos: null
  },
  {
    id: 'conjunto-infantil-brasil',
    nome: 'Conjunto Infantil Seleção',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 59,99',
    imagens: imgs('conjunto-infantil-brasil', 2),
    descricao: 'Conjunto infantil camisa + shorts Seleção Brasileira. Tamanhos do 2 ao 14 anos.',
    tamanhos: TAMANHOS_INFANTIL
  },
  {
    id: 'camisa-plus-size',
    nome: 'Camisa Plus Size Quiksilver',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: 'R$ 79,99',
    imagens: imgs('camisa-plus-size', 2),
    descricao: 'Camiseta plus size G1 ao G3. Modelos Quiksilver — consulte estoque atualizado.',
    tamanhos: ['G1', 'G2', 'G3']
  },
  {
    id: 'camisas-maresia',
    nome: 'Camiseta Maresia',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: 'R$ 50,00',
    promo: '4 camisas por R$ 120,00',
    imagens: imgs('camisas-maresia', 11),
    galeriaCompacta: true,
    descricao: 'Camisetas Maresia estampadas. Estoque muda diariamente — chame para fotos atualizadas.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'bermudas-elastana',
    nome: 'Bermuda Elastano Surf',
    categoria: 'bermudas',
    categoriaLabel: 'Bermudas',
    grupo: 'bermudas',
    preco: 'R$ 60,00',
    promo: '3 bermudas por R$ 100,00',
    imagens: imgs('bermudas-elastana', 21),
    galeriaCompacta: true,
    descricao: 'Bermudas elastano surf. Vários modelos e cores — veja a galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'bermuda-jeans',
    nome: 'Bermuda Jeans',
    categoria: 'bermudas',
    categoriaLabel: 'Bermudas',
    grupo: 'bermudas',
    preco: 'R$ 69,99',
    imagens: imgs('bermuda-jeans', 5),
    descricao: 'Bermuda jeans importada. Grades 38 e 40 — consulte outras numerações.',
    tamanhos: ['38', '40', '42', '44']
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
    id: 'conjunto-diesel-city',
    nome: 'Conjunto Diesel & City Denim',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-diesel-city', 1),
    descricao: 'Moletom Diesel, calça City Denim, boné, cinto e New Balance — look streetwear completo.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-lacoste-cinza',
    nome: 'Conjunto Lacoste Cinza',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-lacoste-cinza', 1),
    descricao: 'Camiseta Lacoste, calça Titular destroyed, boné Lacoste, relógio e Nike platform.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-lacoste-vermelho',
    nome: 'Conjunto Lacoste Vermelho',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-lacoste-vermelho', 1),
    descricao: 'Camiseta Lacoste vermelha, calça Creed destroyed, boné e tênis branco com detalhes azul/vermelho.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-lacoste-azul',
    nome: 'Conjunto Lacoste Azul',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-lacoste-azul', 1),
    descricao: 'Camiseta e boné Lacoste azul bebê, calça City Denim destroyed e Mizuno Wave Prophecy.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-quiksilver-preto',
    nome: 'Conjunto Quiksilver Preto',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-quiksilver-preto', 1),
    descricao: 'Moletom, calça jeans, boné Quiksilver e Mizuno Wave Prophecy — kit all black.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-philipp-plein',
    nome: 'Conjunto Philipp Plein',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-philipp-plein', 1),
    descricao: 'Camiseta Philipp Plein, calça destroyed, boné Gucci monogram e tênis chunky.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-diesel-branco',
    nome: 'Conjunto Diesel Branco',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-diesel-branco', 1),
    descricao: 'Moletom Diesel splatter branco, calça acid wash, bonés preto e vermelho Diesel.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-lacoste-azul-mizuno',
    nome: 'Conjunto Lacoste & Mizuno',
    categoria: 'camisetas',
    categoriaLabel: 'Conjunto',
    grupo: 'camisetas',
    preco: null,
    imagens: imgs('conjunto-lacoste-azul-mizuno', 1),
    descricao: 'Camiseta Lacoste azul, boné, calça City Denim e Mizuno Wave Prophecy azul.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'oversized-colecao',
    nome: 'Oversized & Street',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: 'R$ 119,99',
    variantes: [
      { nome: 'Godspeed', preco: 'R$ 119,99', foto: 0 },
      { nome: 'Corteiz Barco', preco: 'R$ 119,99', foto: 1 },
      { nome: 'Hellstar Paradise', preco: 'R$ 119,99', foto: 2 },
      { nome: 'Nike Phantom Preto', preco: 'R$ 119,99', foto: 3 },
      { nome: 'Corteiz Ilha', preco: 'R$ 119,99', foto: 4 },
      { nome: 'Balenciaga Football', preco: 'R$ 119,99', foto: 5 },
      { nome: 'Nike Phantom Branco', preco: 'R$ 119,99', foto: 6 },
      { nome: 'Oversized Oval', preco: 'R$ 119,99', foto: 7 }
    ],
    imagens: imgs('oversized-colecao', 8),
    legendas: [
      'Godspeed',
      'Corteiz Barco',
      'Hellstar Paradise',
      'Nike Phantom Preto',
      'Corteiz Ilha',
      'Balenciaga Football',
      'Nike Phantom Branco',
      'Oversized Oval'
    ],
    galeriaCompacta: true,
    descricao: 'Camisetas oversized importadas — Godspeed, Corteiz, Hellstar, Nike e mais. Escolha o modelo e o tamanho.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-quiksilver-roxo',
    nome: 'Kit Quiksilver Roxo',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    variantes: [
      { nome: 'Blusa moletom', preco: 'R$ 179,99' },
      { nome: 'Bermuda Balão', preco: 'R$ 99,99' },
      { nome: 'Mizuno camaleão', preco: 'R$ 449,99' }
    ],
    imagens: imgs('kit-quiksilver-roxo', 1),
    descricao: 'Kit streetwear Quiksilver roxo — moletom, bermuda surf e Mizuno camaleão.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-quiksilver-preto',
    nome: 'Kit Quiksilver Preto',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    variantes: [
      { nome: 'Blusa moletom', preco: 'R$ 179,99' },
      { nome: 'Boné', preco: 'R$ 59,99' },
      { nome: 'Mizuno Refletivo', preco: 'R$ 449,99' }
    ],
    imagens: imgs('kit-quiksilver-preto', 1),
    descricao: 'Kit all black Quiksilver — moletom, calça, boné e Mizuno refletivo.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-quiksilver-typo',
    nome: 'Kit Quiksilver Typo',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    variantes: [
      { nome: 'Corta vento Quiksilver', preco: 'R$ 299,99' },
      { nome: 'Calça Balão', preco: 'R$ 149,99' },
      { nome: 'Mizuno refletivo', preco: 'R$ 449,99' },
      { nome: 'Lupa', preco: 'R$ 149,99' },
      { nome: 'Boné', preco: 'R$ 59,99' }
    ],
    imagens: imgs('kit-quiksilver-typo', 1),
    descricao: 'Kit Quiksilver estampa typo — corta vento, calça, Mizuno, lupa e boné.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-quiksilver-jeans',
    nome: 'Kit Quiksilver Jeans',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    variantes: [
      { nome: 'Blusa moletom', preco: 'R$ 179,99' },
      { nome: 'Calça Balão', preco: 'R$ 149,99' },
      { nome: 'Mizuno lançamento 2026', preco: 'R$ 499,99' },
      { nome: 'Boné', preco: 'R$ 59,99' }
    ],
    imagens: imgs('kit-quiksilver-jeans', 1),
    descricao: 'Kit Quiksilver com moletom, calça jeans, Mizuno 2026 e boné.',
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
  }
];

produtos.forEach(p => {
  p.imagem = p.imagens[0];
});

let modalState = {
  produtoId: null,
  photoIndex: 0,
  selectedSize: null,
  selectedVariant: null
};

function getAbsoluteUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return new URL(path, window.location.href).href;
}

function getVariante(produto, index) {
  return produto.variantes?.[index] ?? null;
}

function getPhotoUrlForIndex(produto, index) {
  const imagens = getImagens(produto);
  const safe = Math.max(0, Math.min(index, imagens.length - 1));
  return getAbsoluteUrl(imagens[safe]);
}

function getActivePhotoUrl(produto, photoIndex = modalState.photoIndex) {
  const midias = getMidias(produto);
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
  if (produto.variantes?.length && !modalState.selectedVariant) return 'Escolha o modelo';
  if (produto.tamanhos?.length) return 'Escolha o tamanho';
  return 'Solicitar Orçamento';
}

function matchesFilter(produto, filter) {
  if (filter === 'todos') return true;
  return produto.categoria === filter;
}

function getProductShareUrl(produtoId, photoIndex = 0) {
  const url = new URL(window.location.href);
  url.searchParams.set('p', produtoId);
  if (photoIndex > 0) url.searchParams.set('f', String(photoIndex));
  else url.searchParams.delete('f');
  if (!url.hash.includes('catalogo')) url.hash = 'catalogo';
  return url.toString();
}

function syncUrlToModal(produto, photoIndex = 0) {
  if (!produto) return;
  history.replaceState(null, '', getProductShareUrl(produto.id, photoIndex));
}

function clearProductShareUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete('p');
  url.searchParams.delete('f');
  history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

async function enviarFotoCliente(produto, photoIndex = modalState.photoIndex) {
  const midias = getMidias(produto);
  const item = midias[photoIndex];
  const legenda = item?.tipo === 'imagem'
    ? getLegenda(produto, getImagens(produto).indexOf(item.src))
    : null;
  const titulo = legenda ? `${produto.nome} — ${legenda}` : produto.nome;

  if (item?.tipo === 'video') {
    const videoUrl = getAbsoluteUrl(item.src);
    const msg = `${titulo}\nVídeo: ${videoUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
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
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

function getProduto(id) {
  return produtos.find(p => p.id === id);
}

function getImagens(produto) {
  return produto.imagens?.length ? produto.imagens : [produto.imagem];
}

function getMidias(produto) {
  const items = getImagens(produto).map(src => ({ tipo: 'imagem', src }));
  if (produto.video) {
    items.push({
      tipo: 'video',
      src: produto.video,
      poster: getImagens(produto)[0],
      legenda: 'Vídeo do produto'
    });
  }
  return items;
}

function getMidiaCount(produto) {
  return getMidias(produto).length;
}

function formatPreco(produto) {
  if (produto.preco) return produto.preco;
  return 'Solicitar orçamento';
}

function buildMensagem(produto, tamanho, variante, fotoUrl) {
  let msg = `Olá! Vi no site da DS A Fonte o produto "${produto.nome}" e gostaria de solicitar um orçamento.`;

  if (variante) {
    msg += ` Modelo escolhido: ${variante.nome}${variante.preco ? ` (${variante.preco})` : ''}.`;
  } else if (produto.variantes?.length) {
    const opcoes = produto.variantes
      .map(v => `${v.nome}${v.preco ? ` (${v.preco})` : ''}`)
      .join(', ');
    msg += ` Opções disponíveis: ${opcoes}.`;
  } else if (produto.preco) {
    msg += ` Valor: ${produto.preco}.`;
  }

  if (produto.promo) msg += ` Promoção: ${produto.promo}.`;
  if (tamanho) msg += ` Tamanho/Numeração: ${tamanho}.`;
  if (fotoUrl) msg += ` Foto: ${fotoUrl}`;

  return msg;
}

function solicitarOrcamento(produto, tamanho, variante, fotoUrl) {
  const mensagem = buildMensagem(produto, tamanho, variante, fotoUrl);
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

function renderVariantPickHTML(produto, context = 'card') {
  if (!produto.variantes?.length) return '';

  const label = produto.id === 'kit-feminino-brasil'
    ? 'Itens do kit'
    : (produto.variantes?.length > 1 && produto.imagens?.length > 1
      ? 'Escolha o modelo'
      : (context === 'modal' ? 'Escolha o modelo' : 'Modelo'));
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
            data-foto-index="${v.foto ?? i}"
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
  btn.querySelector('.btn-text').textContent = ready
    ? 'Solicitar Orçamento'
    : (produto.variantes?.length && !variante ? 'Escolha o modelo' : 'Escolha o tamanho');
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

function renderPreviewHTML(produto) {
  const imagens = getImagens(produto);
  const count = getMidiaCount(produto);
  const badgeText = count > 8 ? 'Galeria completa' : `${count} mídias`;

  return `
    <button type="button" class="product-card__preview" data-open-product="${produto.id}" aria-label="Ver fotos de ${produto.nome}">
      <img src="${imagens[0]}" alt="${produto.nome}" loading="lazy">
      <span class="product-card__tag">${produto.categoriaLabel}</span>
      ${produto.video ? '<span class="product-card__video-badge">Vídeo</span>' : ''}
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
  const btnText = needsVariant ? 'Escolha o modelo' : (needsSize ? 'Escolha o tamanho' : 'Solicitar Orçamento');
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
    btn.addEventListener('click', () => openProductModal(btn.dataset.openProduct));
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

  const midias = getMidias(produto);
  const item = midias[photoIndex];
  btn.hidden = !item;
  btn.textContent = item?.tipo === 'video'
    ? 'Enviar este vídeo no WhatsApp'
    : 'Enviar esta foto no WhatsApp';
}

function renderModalPriceHTML(produto) {
  if (produto.variantes?.length) {
    const variantTitle = produto.id === 'kit-feminino-brasil' ? 'Itens do kit' : 'Escolha o modelo';
    return `
      <h3 class="product-modal__section-title">${variantTitle}</h3>
      <ul class="product-modal__variant-grid">
        ${produto.variantes.map((v, i) => `
          <li>
            <button
              type="button"
              class="product-modal__variant-item variant-btn"
              data-variant-index="${i}"
              data-foto-index="${v.foto ?? i}"
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

function updateModalPhoto(produto, index) {
  const midias = getMidias(produto);
  const imagens = getImagens(produto);
  const safeIndex = ((index % midias.length) + midias.length) % midias.length;
  modalState.photoIndex = safeIndex;

  const imgEl = document.getElementById('productModalImage');
  const videoEl = document.getElementById('productModalVideo');
  const stageEl = document.getElementById('productModalStage');
  const counterEl = document.getElementById('productModalCounter');
  const captionEl = document.getElementById('productModalCaption');
  const thumbsEl = document.getElementById('productModalThumbs');
  const dotsEl = document.getElementById('productModalDots');
  const item = midias[safeIndex];

  stageEl?.classList.toggle('has-video', item.tipo === 'video');

  if (item.tipo === 'video') {
    imgEl.hidden = true;
    imgEl.removeAttribute('src');
    videoEl.hidden = false;
    videoEl.src = item.src;
    videoEl.poster = item.poster || imagens[0] || '';
    videoEl.load();
  } else {
    videoEl.hidden = true;
    videoEl.pause();
    videoEl.removeAttribute('src');
    videoEl.load();
    imgEl.hidden = false;
    imgEl.src = item.src;
    const imgIndex = imagens.indexOf(item.src);
    const legenda = imgIndex >= 0 ? getLegenda(produto, imgIndex) : null;
    imgEl.alt = legenda ? `${produto.nome} — ${legenda}` : `${produto.nome} — foto ${imgIndex + 1}`;
  }

  counterEl.textContent = `${safeIndex + 1} / ${midias.length}`;

  if (captionEl) {
    const captionText = item.legenda || (item.tipo === 'imagem'
      ? getLegenda(produto, imagens.indexOf(item.src))
      : '');
    captionEl.textContent = captionText || '';
    captionEl.hidden = !captionText;
  }

  thumbsEl?.querySelectorAll('.product-modal__filmstrip-item').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === safeIndex);
  });

  dotsEl?.querySelectorAll('.product-modal__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === safeIndex);
    dot.setAttribute('aria-selected', i === safeIndex ? 'true' : 'false');
  });

  const prevBtn = document.querySelector('.product-modal__nav--prev');
  const nextBtn = document.querySelector('.product-modal__nav--next');
  const multi = midias.length > 1;
  if (prevBtn) prevBtn.style.visibility = multi ? 'visible' : 'hidden';
  if (nextBtn) nextBtn.style.visibility = multi ? 'visible' : 'hidden';
  if (dotsEl) dotsEl.hidden = !multi;
  if (thumbsEl) thumbsEl.hidden = !multi;

  syncUrlToModal(produto, safeIndex);
  updatePhotoShareButton(produto, safeIndex);
}

function openProductModal(produtoId) {
  const produto = getProduto(produtoId);
  const modal = document.getElementById('productModal');
  if (!produto || !modal) return;

  modalState = { produtoId, photoIndex: 0, selectedSize: null, selectedVariant: null };

  const midias = getMidias(produto);
  const needsSize = Boolean(produto.tamanhos?.length);
  const needsVariant = Boolean(produto.variantes?.length);
  const btnText = needsVariant ? 'Escolha o modelo' : (needsSize ? 'Escolha o tamanho' : 'Solicitar Orçamento');

  document.getElementById('productModalCategory').textContent = produto.categoriaLabel;
  document.getElementById('productModalTitle').textContent = produto.nome;
  document.getElementById('productModalDesc').textContent = produto.descricao;
  document.getElementById('productModalPrice').innerHTML = renderModalPriceHTML(produto);

  const sizesEl = document.getElementById('productModalSizes');
  sizesEl.innerHTML = renderModalSizesHTML(produto);
  sizesEl.hidden = !produto.tamanhos?.length;

  const whatsappBtn = document.getElementById('productModalWhatsapp');
  whatsappBtn.disabled = needsSize || needsVariant;
  whatsappBtn.querySelector('.btn-text').textContent = btnText;

  const imagens = getImagens(produto);
  const thumbsEl = document.getElementById('productModalThumbs');
  const compactGallery = produto.galeriaCompacta || midias.length > 8;
  thumbsEl.className = `product-modal__filmstrip${compactGallery ? ' product-modal__filmstrip--compact' : ''}`;
  thumbsEl.innerHTML = midias.map((item, i) => {
    if (item.tipo === 'video') {
      return `
        <button type="button" class="product-modal__filmstrip-item product-modal__filmstrip-item--video${i === 0 ? ' active' : ''}" data-photo-index="${i}" aria-label="Vídeo do produto">
          <span>▶</span>
        </button>
      `;
    }
    const imgIndex = imagens.indexOf(item.src);
    const legenda = getLegenda(produto, imgIndex);
    return `
      <button type="button" class="product-modal__filmstrip-item${i === 0 ? ' active' : ''}" data-photo-index="${i}" aria-label="${legenda || `Foto ${imgIndex + 1}`}">
        <img src="${item.src}" alt="" loading="lazy">
      </button>
    `;
  }).join('');

  const dotsEl = document.getElementById('productModalDots');
  dotsEl.innerHTML = midias.map((_, i) => `
    <button type="button" class="product-modal__dot${i === 0 ? ' active' : ''}" data-photo-index="${i}" aria-label="Ir para mídia ${i + 1}" aria-selected="${i === 0 ? 'true' : 'false'}"></button>
  `).join('');

  updateModalPhoto(produto, 0);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  bindModalEvents(produto);
  bindPhotoShareButton(produto);
  modal.querySelector('.product-modal__close')?.focus();
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  const videoEl = document.getElementById('productModalVideo');
  const imgEl = document.getElementById('productModalImage');
  const stageEl = document.getElementById('productModalStage');

  if (videoEl) {
    videoEl.pause();
    videoEl.removeAttribute('src');
    videoEl.hidden = true;
    videoEl.load();
  }
  if (imgEl) {
    imgEl.hidden = false;
    imgEl.removeAttribute('src');
  }
  stageEl?.classList.remove('has-video');

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  clearProductShareUrl();
  modalState = { produtoId: null, photoIndex: 0, selectedSize: null, selectedVariant: null };
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
  const panel = document.getElementById('productModalPanel');

  panel.querySelectorAll('.variant-btn').forEach(btn => {
    btn.onclick = () => {
      panel.querySelectorAll('.variant-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      modalState.selectedVariant = getVariante(produto, Number(btn.dataset.variantIndex));
      updateModalPhoto(produto, Number(btn.dataset.fotoIndex));
      updateOrderButtonState(panel, produto);
    };
  });

  panel.querySelectorAll('.size-btn').forEach(btn => {
    btn.onclick = () => {
      panel.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      modalState.selectedSize = btn.dataset.size;
      updateOrderButtonState(panel, produto);
    };
  });

  whatsappBtn.onclick = () => {
    if (!canSubmitOrder(produto, modalState.selectedSize, modalState.selectedVariant)) return;
    solicitarOrcamento(
      produto,
      modalState.selectedSize,
      modalState.selectedVariant,
      getActivePhotoUrl(produto)
    );
  };
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

function renderCatalog(filter = 'todos') {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const items = produtos.filter(p => matchesFilter(p, filter));

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
  initDeepLink();
});
