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
    nome: 'Polo Treino Seleção Guaraná',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 99,99',
    variantesPorCor: true,
    variantes: [
      { nome: 'Amarela gola amarela', preco: 'R$ 99,99', fotos: [14, 16, 17] },
      { nome: 'Amarela gola verde', preco: 'R$ 99,99', fotos: [2, 18], video: 'images/produtos/polo-treino-brasil/video-amarela-gola-verde.mp4' },
      { nome: 'Preta gola verde', preco: 'R$ 99,99', fotos: [0, 1], video: 'images/produtos/polo-treino-brasil/video-preta-gola-verde.mp4' },
      { nome: 'Preta gola preta', preco: 'R$ 99,99', fotos: [10, 11, 12] },
      { nome: 'Ciano', preco: 'R$ 99,99', fotos: [3, 4], video: 'images/produtos/polo-treino-brasil/video-ciano.mp4' },
      { nome: 'Azul', preco: 'R$ 99,99', fotos: [5, 6, 7, 8, 9] }
    ],
    imagens: imgs('polo-treino-brasil', 19),
    imagemCapaIndex: 14,
    galeriaCompacta: true,
    descricao: 'Polo de treino CBF patrocínio Guaraná — escolha a cor e veja os modelos disponíveis.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'manto-treino-black',
    nome: 'Manto Treino Black Edition',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 99,99',
    promo: 'Lançamento',
    video: 'images/produtos/manto-treino-black/video.mp4',
    imagens: imgs('manto-treino-black', 1),
    descricao: '🇧🇷 Lançamento: Manto Treino Black Edition! Edição especial preta da linha de treino da Seleção — veja o vídeo no produto.',
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
    categoriaLabel: 'Berm. e Calças',
    grupo: 'bermudas',
    preco: 'R$ 79,99',
    imagens: imgs('bermudas-elastano-79', 57),
    galeriaCompacta: true,
    descricao: 'Bermudas elastano surf importadas. Vários modelos e cores — veja a galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'bermuda-jeans',
    nome: 'Bermuda Jeans',
    categoria: 'bermudas',
    categoriaLabel: 'Berm. e Calças',
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
    categoria: 'calcados',
    categoriaLabel: 'Calçados',
    grupo: 'calcados',
    preco: 'R$ 499,99',
    imagens: imgs('mizuno-pro14', 1),
    descricao: 'Wave Prophecy Pro 14. Diversas combinações — consulte numeração no WhatsApp.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'nike-corteiz-am95',
    nome: 'Nike Air Max 95 Corteiz',
    categoria: 'calcados',
    categoriaLabel: 'Calçados',
    grupo: 'calcados',
    preco: 'R$ 499,99',
    imagens: imgs('nike-corteiz-am95', 8),
    galeriaCompacta: true,
    descricao: 'Colab Nike x Corteiz Air Max 95. Peça exclusiva — escolha a numeração.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'tenis-nacional',
    nome: 'Tênis Nike & Mizuno Nacional',
    categoria: 'calcados',
    categoriaLabel: 'Calçados',
    grupo: 'calcados',
    preco: 'R$ 149,99',
    imagens: imgs('tenis-nacional', 9),
    descricao: 'Nike Air Max TN e Mizuno nacional. Várias cores — consulte numeração e modelos.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'mizuno-lotus',
    nome: 'Mizuno Flor de Lótus',
    categoria: 'calcados',
    categoriaLabel: 'Calçados',
    grupo: 'calcados',
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
    categoriaLabel: 'Berm. e Calças',
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
    categoriaLabel: 'Berm. e Calças',
    grupo: 'bermudas',
    preco: 'R$ 149,99',
    imagens: imgs('bermuda-jogador', 1),
    descricao: 'Bermuda jogador premium. Várias numerações — chame no WhatsApp.',
    tamanhos: ['38', '40', '42', '44']
  },
  {
    id: 'calca-balao-quik',
    nome: 'Calça Balão Quiksilver',
    categoria: 'bermudas',
    categoriaLabel: 'Berm. e Calças',
    grupo: 'bermudas',
    preco: 'R$ 149,99',
    promo: 'De R$ 269,90',
    imagens: imgs('calca-balao-quik', 18),
    galeriaCompacta: true,
    descricao: 'Calça balão Quiksilver importada. Vários modelos — consulte numeração no WhatsApp.',
    tamanhos: ['38', '40', '42', '44']
  },
  {
    id: 'calca-120',
    nome: 'Calça Importada',
    categoria: 'bermudas',
    categoriaLabel: 'Berm. e Calças',
    grupo: 'bermudas',
    preco: 'R$ 120,00',
    imagens: imgs('calca-120', 2),
    descricao: 'Calça importada streetwear. Consulte modelos e numeração disponível.',
    tamanhos: ['38', '40', '42', '44']
  },
  {
    id: 'bermuda-cyclone',
    nome: 'Bermuda Cyclone Original',
    categoria: 'bermudas',
    categoriaLabel: 'Berm. e Calças',
    grupo: 'bermudas',
    preco: 'R$ 200,00',
    imagens: imgs('bermuda-cyclone', 12),
    galeriaCompacta: true,
    descricao: 'Bermuda Cyclone 100% original. Vários modelos — veja a galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'bermuda-jordan',
    nome: 'Bermuda Jordan Importada',
    categoria: 'bermudas',
    categoriaLabel: 'Berm. e Calças',
    grupo: 'bermudas',
    preco: 'R$ 99,99',
    imagens: imgs('bermuda-jordan', 2),
    descricao: 'Bermuda Jordan importada. Modelo premium — consulte tamanhos.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'camisa-amarelinha-2026',
    nome: 'Camisa Amarelinha Tailandesa 2026',
    categoria: 'copa',
    categoriaLabel: 'Copa',
    grupo: 'copa',
    preco: 'R$ 249,99',
    imagens: imgs('camisa-amarelinha-2026', 7),
    galeriaCompacta: true,
    descricao: 'Camisa amarelinha Seleção Brasileira 2026 — versão tailandesa premium.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'camisa-brooksfield',
    nome: 'Camisa Brooksfield',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: 'R$ 89,99',
    imagens: imgs('camisa-brooksfield', 16),
    galeriaCompacta: true,
    descricao: 'Camisa Brooksfield importada. Vários modelos — escolha na galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'camisetas-quiksilver',
    nome: 'Camiseta Quiksilver',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: 'R$ 79,99',
    imagens: imgs('camisetas-quiksilver', 3),
    descricao: 'Camisetas Quiksilver importadas. Modelos surf — consulte estoque.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'camisa-bermuda-mizuno',
    nome: 'Camisa e Bermuda Mizuno Dry Fit',
    categoria: 'camisetas',
    categoriaLabel: 'Camisetas',
    grupo: 'camisetas',
    preco: 'R$ 79,99',
    variantes: [
      { nome: 'Camisa dry fit', preco: 'R$ 79,99' },
      { nome: 'Bermuda dry fit', preco: 'R$ 79,99' }
    ],
    imagens: imgs('camisa-bermuda-mizuno', 52),
    galeriaCompacta: true,
    descricao: 'Camisa e bermuda Mizuno dry fit — R$ 79,99 cada. Tecido leve para treino e dia a dia.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-cyclone-original',
    nome: 'Kit Cyclone Original',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: 'R$ 250,00',
    imagens: imgs('kit-cyclone-original', 6),
    galeriaCompacta: true,
    descricao: 'Kit Cyclone 100% original. Veja os modelos na galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kit-cyclone-veludo',
    nome: 'Kit Cyclone Camisa + Bermuda Veludo',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: 'R$ 249,99',
    imagens: imgs('kit-cyclone-veludo', 7),
    galeriaCompacta: true,
    descricao: 'Kit Cyclone original: camisa + bermuda veludo. 100% original.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'conjunto-quicksilver-novo',
    nome: 'Conjunto Quiksilver',
    categoria: 'kits',
    categoriaLabel: 'Kit',
    grupo: 'kits',
    preco: null,
    imagens: imgs('conjunto-quicksilver-novo', 2),
    descricao: 'Conjunto Quiksilver importado — look surf completo. Solicite orçamento no WhatsApp.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'polo-oakley',
    nome: 'Polo Oakley',
    categoria: 'polos',
    categoriaLabel: 'Polo',
    grupo: 'polos',
    preco: 'R$ 100,00',
    variantesPorCor: true,
    variantes: [
      { nome: 'Branca Caveira', preco: 'R$ 100,00', fotos: [0, 8] },
      { nome: 'Branca Elite SF', preco: 'R$ 100,00', fotos: [9, 10] },
      { nome: 'Preta Caveira', preco: 'R$ 100,00', fotos: [7, 12] },
      { nome: 'Preta Elite SF', preco: 'R$ 100,00', fotos: [3, 4, 5, 11] },
      { nome: 'Preta Pilot', preco: 'R$ 100,00', fotos: [2] },
      { nome: 'Preta Camuflado', preco: 'R$ 100,00', fotos: [1] },
      { nome: 'Preta Escudo', preco: 'R$ 100,00', fotos: [6] }
    ],
    imagens: imgs('polo-oakley', 13),
    imagemCapaIndex: 0,
    galeriaCompacta: true,
    descricao: 'Polo Oakley dry fit importada. Escolha o modelo e veja as fotos na galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'polo-lacoste-algodao',
    nome: 'Polo Lacoste Algodão',
    categoria: 'polos',
    categoriaLabel: 'Polo',
    grupo: 'polos',
    preco: 'R$ 99,99',
    imagens: imgs('polo-lacoste-algodao', 5),
    galeriaCompacta: true,
    descricao: 'Polo Lacoste 100% algodão. Clássica e confortável — consulte cores.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'polo-guarana-garros',
    nome: 'Polo Guaraná F1',
    categoria: 'polos',
    categoriaLabel: 'Polo',
    grupo: 'polos',
    preco: 'R$ 99,99',
    imagens: imgs('polo-guarana-garros', 18),
    galeriaCompacta: true,
    descricao: 'Polos dry fit patrocínio Guaraná e equipes de F1. Vários modelos na galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'blusa-moletom-180',
    nome: 'Blusa Moletom',
    categoria: 'moletom',
    categoriaLabel: 'Moletom',
    grupo: 'moletom',
    preco: 'R$ 180,00',
    imagens: imgs('blusa-moletom-180', 9),
    galeriaCompacta: true,
    descricao: 'Blusas de moletom importadas. Vários modelos — veja a galeria.',
    tamanhos: TAMANHOS_ROUPA
  },
  {
    id: 'kenner',
    nome: 'Kenner',
    categoria: 'calcados',
    categoriaLabel: 'Calçados',
    grupo: 'calcados',
    preco: 'R$ 149,99',
    imagens: imgs('kenner', 19),
    galeriaCompacta: true,
    descricao: 'Kenner importado. Vários modelos e cores — consulte numeração.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'chinelo-lacoste',
    nome: 'Chinelo Lacoste',
    categoria: 'calcados',
    categoriaLabel: 'Calçados',
    grupo: 'calcados',
    preco: 'R$ 220,00',
    imagens: imgs('chinelo-lacoste', 1),
    descricao: 'Chinelo Lacoste importado. Consulte numeração disponível.',
    tamanhos: TAMANHOS_TENIS
  },
  {
    id: 'perfume-miniatura-arabe',
    nome: 'Perfumes Miniatura Árabe',
    categoria: 'cosmeticos',
    categoriaLabel: 'Perfumes',
    grupo: 'cosmeticos',
    preco: 'R$ 149,99',
    imagens: imgs('perfume-miniatura-arabe', 1),
    descricao: 'Miniaturas de perfumes árabes importados. Fragrâncias intensas e marcantes.',
    tamanhos: null
  },
  {
    id: 'perfume-asad',
    nome: 'Asad Tradicional',
    categoria: 'cosmeticos',
    categoriaLabel: 'Perfumes',
    grupo: 'cosmeticos',
    preco: 'R$ 149,99',
    video: 'images/produtos/perfume-asad/video.mp4',
    imagens: imgs('perfume-asad', 1),
    descricao: 'O cheiro de um homem que sabe o que quer! Se você curte perfume com presença, intensidade e um toque de poder, o Asad Tradicional é pra você. Uma fragrância quente, amadeirada e envolvente que não passa despercebida. É o tipo de perfume que deixa rastro por onde passa — simplesmente impossível de ignorar!',
    tamanhos: null
  },
  {
    id: 'perfume-miniaturas-brand',
    nome: 'Perfume Miniaturas Brand',
    categoria: 'cosmeticos',
    categoriaLabel: 'Perfumes',
    grupo: 'cosmeticos',
    preco: 'R$ 120,00',
    imagens: imgs('perfume-miniaturas-brand', 4),
    galeriaCompacta: true,
    descricao: 'Miniaturas de perfumes de grife importados. Ideal para presentear ou experimentar.',
    tamanhos: null
  },
  {
    id: 'body-splash',
    nome: 'Body Splash',
    categoria: 'cosmeticos',
    categoriaLabel: 'Perfumes',
    grupo: 'cosmeticos',
    preco: 'R$ 149,99',
    imagens: imgs('body-splash', 8),
    galeriaCompacta: true,
    descricao: 'Body splash importado. Fragrâncias frescas e duradouras — veja os modelos.',
    tamanhos: null
  }
];

produtos.forEach(p => {
  p.imagem = p.imagens[0];
});

