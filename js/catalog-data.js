/* DS A Fonte — Dados do catálogo */

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
    variantes: POLO_TREINO_CORES.map(({ nome }, i) => ({
      nome,
      preco: 'R$ 99,99',
      foto: i
    })),
    imagens: POLO_TREINO_CORES.map(({ arquivo }) => `images/produtos/polo-treino-brasil/${arquivo}`),
    legendas: POLO_TREINO_CORES.map(({ nome }) => nome),
    galeriaCompacta: true,
    descricao: 'Polo de treino CBF Guaraná — amarelo, azul, preto ou ciano. Escolha a cor e o tamanho.',
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
    variantes: Array.from({ length: 10 }, (_, i) => ({
      nome: `Estampa ${i + 1}`,
      preco: 'R$ 50,00',
      foto: i + 1
    })),
    imagens: imgs('camisas-maresia', 11),
    legendas: ['Anúncio', ...Array.from({ length: 10 }, (_, i) => `Estampa ${i + 1}`)],
    imagemCapaIndex: 1,
    galeriaCompacta: true,
    descricao: 'Camisetas Maresia estampadas. Escolha a estampa e o tamanho — estoque muda diariamente.',
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
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-diesel-city', 1),
    descricao: 'Moletom Diesel, calça City Denim, boné, cinto e New Balance — look streetwear completo.',
    tamanhos: null
  },
  {
    id: 'conjunto-lacoste-cinza',
    nome: 'Conjunto Lacoste Cinza',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-lacoste-cinza', 1),
    descricao: 'Camiseta Lacoste, calça Titular destroyed, boné Lacoste, relógio e Nike platform.',
    tamanhos: null
  },
  {
    id: 'conjunto-lacoste-vermelho',
    nome: 'Conjunto Lacoste Vermelho',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-lacoste-vermelho', 1),
    descricao: 'Camiseta Lacoste vermelha, calça Creed destroyed, boné e tênis branco com detalhes azul/vermelho.',
    tamanhos: null
  },
  {
    id: 'conjunto-lacoste-azul',
    nome: 'Conjunto Lacoste Azul',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-lacoste-azul', 1),
    descricao: 'Camiseta e boné Lacoste azul bebê, calça City Denim destroyed e Mizuno Wave Prophecy.',
    tamanhos: null
  },
  {
    id: 'conjunto-quiksilver-preto',
    nome: 'Conjunto Quiksilver Preto',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-quiksilver-preto', 1),
    descricao: 'Moletom, calça jeans, boné Quiksilver e Mizuno Wave Prophecy — kit all black.',
    tamanhos: null
  },
  {
    id: 'conjunto-philipp-plein',
    nome: 'Conjunto Philipp Plein',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-philipp-plein', 1),
    descricao: 'Camiseta Philipp Plein, calça destroyed, boné Gucci monogram e tênis chunky.',
    tamanhos: null
  },
  {
    id: 'conjunto-diesel-branco',
    nome: 'Conjunto Diesel Branco',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-diesel-branco', 1),
    descricao: 'Moletom Diesel splatter branco, calça acid wash, bonés preto e vermelho Diesel.',
    tamanhos: null
  },
  {
    id: 'conjunto-lacoste-azul-mizuno',
    nome: 'Conjunto Lacoste & Mizuno',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-lacoste-azul-mizuno', 1),
    descricao: 'Camiseta Lacoste azul, boné, calça City Denim e Mizuno Wave Prophecy azul.',
    tamanhos: null
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
      { nome: 'Mizuno camaleão', preco: 'R$ 449,99' },
      { nome: 'Kit completo', preco: 'R$ 729,97', foto: 0 }
    ],
    imagens: imgs('kit-quiksilver-roxo', 1),
    descricao: 'Kit streetwear Quiksilver roxo — moletom, bermuda surf e Mizuno camaleão.',
    tamanhos: null
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
      { nome: 'Mizuno Refletivo', preco: 'R$ 449,99' },
      { nome: 'Kit completo', preco: 'R$ 689,97', foto: 0 }
    ],
    imagens: imgs('kit-quiksilver-preto', 1),
    descricao: 'Kit all black Quiksilver — moletom, calça, boné e Mizuno refletivo.',
    tamanhos: null
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
      { nome: 'Boné', preco: 'R$ 59,99' },
      { nome: 'Kit completo', preco: 'R$ 1109,95', foto: 0 }
    ],
    imagens: imgs('kit-quiksilver-typo', 1),
    descricao: 'Kit Quiksilver estampa typo — corta vento, calça, Mizuno, lupa e boné.',
    tamanhos: null
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
      { nome: 'Boné', preco: 'R$ 59,99' },
      { nome: 'Kit completo', preco: 'R$ 889,96', foto: 0 }
    ],
    imagens: imgs('kit-quiksilver-jeans', 1),
    descricao: 'Kit Quiksilver com moletom, calça jeans, Mizuno 2026 e boné.',
    tamanhos: null
  },
  {
    id: 'bones-colecao',
    nome: 'Bonés',
    categoria: 'acessorios',
    categoriaLabel: 'Bonés',
    grupo: 'acessorios',
    preco: 'R$ 59,99',
    variantes: variantesFotos(16, 'R$ 59,99', 'Boné'),
    imagens: imgs('bones-colecao', 16),
    legendas: Array.from({ length: 16 }, (_, i) => `Boné ${i + 1}`),
    galeriaCompacta: true,
    descricao: 'Bonés importados — escolha o modelo e solicite pelo WhatsApp.',
    tamanhos: null
  },
  {
    id: 'mizuno-pro14',
    nome: 'Mizuno Pro 14',
    categoria: 'tenis',
    categoriaLabel: 'Tênis',
    grupo: 'tenis',
    preco: 'R$ 499,99',
    imagens: imgs('mizuno-pro14', 1),
    descricao: 'Wave Prophecy Pro 14. Diversas combinações — consulte numeração no WhatsApp.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'nike-corteiz-am95',
    nome: 'Nike Air Max 95 Corteiz',
    categoria: 'tenis',
    categoriaLabel: 'Tênis',
    grupo: 'tenis',
    preco: 'R$ 499,99',
    imagens: imgs('nike-corteiz-am95', 8),
    galeriaCompacta: true,
    descricao: 'Colab Nike x Corteiz Air Max 95. Peça exclusiva — escolha a numeração.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'tenis-nacional',
    nome: 'Tênis Nike & Mizuno Nacional',
    categoria: 'tenis',
    categoriaLabel: 'Tênis',
    grupo: 'tenis',
    preco: 'R$ 149,99',
    imagens: imgs('tenis-nacional', 9),
    descricao: 'Nike Air Max TN e Mizuno nacional. Várias cores — consulte numeração e modelos.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'mizuno-lotus',
    nome: 'Mizuno Flor de Lótus',
    categoria: 'tenis',
    categoriaLabel: 'Tênis',
    grupo: 'tenis',
    preco: 'R$ 449,99',
    imagens: imgs('mizuno-lotus', 4),
    descricao: 'Wave Prophecy com flor de lótus bordada. Branco, roxo e azul disponíveis.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'polo-mercedes-bmw',
    nome: 'Polo Mercedes & BMW',
    categoria: 'polos',
    categoriaLabel: 'Polo',
    grupo: 'polos',
    preco: 'R$ 79,99',
    imagens: imgs('polo-mercedes-bmw', 3),
    legendas: ['Frente', 'Costas', 'Detalhe'],
    descricao: 'Polos dry fit Mercedes e BMW. Escolha o tamanho — as fotos mostram frente, costas e detalhes.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'roupas-grife',
    nome: 'Roupas de Grife',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    variantes: variantesFotos(15, null, 'Peça'),
    imagens: imgs('roupas-grife', 15),
    legendas: Array.from({ length: 15 }, (_, i) => `Peça ${i + 1}`),
    galeriaCompacta: true,
    descricao: 'Peças de grife importadas — escolha o modelo e solicite orçamento no WhatsApp.',
    tamanhos: null
  },
  {
    id: 'bermuda-jeans-balao',
    nome: 'Bermuda Jeans Balão',
    categoria: 'bermudas',
    categoriaLabel: 'Bermudas',
    grupo: 'bermudas',
    preco: 'R$ 99,99',
    imagens: imgs('bermuda-jeans-balao', 1),
    descricao: 'Bermuda jeans balão importada. Consulte numeração disponível.',
    tamanhos: ['38', '40', '42', '44']
  },
  {
    id: 'bermuda-jogador',
    nome: 'Bermuda Jogador',
    categoria: 'bermudas',
    categoriaLabel: 'Bermudas',
    grupo: 'bermudas',
    preco: 'R$ 149,99',
    imagens: imgs('bermuda-jogador', 1),
    descricao: 'Bermuda jogador premium. Várias numerações — chame no WhatsApp.',
    tamanhos: ['38', '40', '42', '44']
  }
];

produtos.forEach(p => {
  p.imagem = p.imagens[0];
});

