/* DS A Fonte — Config compartilhada */

const WHATSAPP_NUMBER = '5518996563430';
const SITE_ORIGIN = (
  document.querySelector('meta[name="site-origin"]')?.content || 'https://ds-story-coral.vercel.app'
).replace(/\/$/, '');
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
    titulo: 'Camisetas & Oversized',
    descricao: 'Camisetas importadas e modelos oversized streetwear.'
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
    id: 'tenis',
    titulo: 'Tênis',
    descricao: 'Mizuno, Nike e modelos importados — consulte numeração.'
  },
  {
    id: 'acessorios',
    titulo: 'Bonés',
    descricao: 'Bonés importados — vários modelos disponíveis.'
  }
];

function imgs(id, count) {
  return Array.from({ length: count }, (_, i) =>
    `images/produtos/${id}/${String(i + 1).padStart(2, '0')}.jpeg`
  );
}

function variantesFotos(count, preco, prefix = 'Modelo') {
  return Array.from({ length: count }, (_, i) => ({
    nome: `${prefix} ${i + 1}`,
    preco,
    foto: i
  }));
}

function somaPrecosVariantes(variantes) {
  let total = 0;
  variantes.forEach(v => {
    if (!v.preco || v.nome === 'Kit completo') return;
    const n = parseFloat(String(v.preco).replace(/[^\d,]/g, '').replace(',', '.'));
    if (!isNaN(n)) total += n;
  });
  return `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function variantesKitCompleto(variantes) {
  const items = variantes.filter(v => v.nome !== 'Kit completo');
  return [...items, { nome: 'Kit completo', preco: somaPrecosVariantes(items), foto: 0 }];
}

const POLO_TREINO_CORES = [
  { nome: 'Amarelo', arquivo: '01.jpeg' },
  { nome: 'Ciano', arquivo: '02.jpeg' },
  { nome: 'Azul', arquivo: '05.jpeg' },
  { nome: 'Preto', arquivo: '09.jpeg' }
];

function openWhatsApp(url) {
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (mobile) {
    window.location.assign(url);
    return;
  }
  const popup = window.open(url, '_blank', 'noopener,noreferrer');
  if (popup) popup.opener = null;
}

