# One-time catalog patch helper — run manually if needed
from pathlib import Path
import re

path = Path(__file__).resolve().parents[1] / 'js' / 'main.js'
text = path.read_text(encoding='utf-8')

helpers = '''
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
    const n = parseFloat(String(v.preco).replace(/[^\\d,]/g, '').replace(',', '.'));
    if (!isNaN(n)) total += n;
  });
  return `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function variantesKitCompleto(variantes) {
  const items = variantes.filter(v => v.nome !== 'Kit completo');
  return [...items, { nome: 'Kit completo', preco: somaPrecosVariantes(items), foto: 0 }];
}

const POLO_TREINO_CORES = [
  'Amarelo Guaraná', 'Amarelo Canarinho', 'Azul Royal', 'Azul Marinho',
  'Preto', 'Branco', 'Ciano', 'Verde',
  'Amarelo 2', 'Azul 2', 'Preto 2', 'Branco 2',
  'Ciano 2', 'Verde 2', 'Amarelo 3', 'Azul 3'
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

'''

if 'function variantesFotos' not in text:
    text = text.replace('function imgs(id, count) {', helpers + 'function imgs(id, count) {', 1)

text = text.replace(
    "titulo: 'Camisetas & Conjuntos',\n    descricao: 'Camisetas importadas, conjuntos streetwear e modelos oversized.'",
    "titulo: 'Camisetas & Oversized',\n    descricao: 'Camisetas importadas e modelos oversized streetwear.'"
)
text = text.replace(
    "titulo: 'Bonés & Acessórios',\n    descricao: 'Bonés importados e acessórios exclusivos.'",
    "titulo: 'Bonés',\n    descricao: 'Bonés importados — vários modelos disponíveis.'"
)

if "id: 'tenis'" not in text.split('const GRUPOS')[1].split('];')[0]:
    text = text.replace(
        "  {\n    id: 'acessorios',",
        "  {\n    id: 'tenis',\n    titulo: 'Tênis',\n    descricao: 'Mizuno, Nike e modelos importados — consulte numeração.'\n  },\n  {\n    id: 'acessorios',"
    )

text = text.replace(
    "    categoria: 'camisetas',\n    categoriaLabel: 'Conjunto',\n    grupo: 'camisetas',",
    "    categoria: 'kits',\n    categoriaLabel: 'Kit',\n    grupo: 'kits',"
)

text = re.sub(
    r"(id: 'conjunto-[^']+',[\s\S]*?preco: null,[\s\S]*?descricao: '[^']+',\n)    tamanhos: TAMANHOS_ROUPA",
    r"\1    tamanhos: null",
    text
)

kits_total = {
    'kit-quiksilver-roxo': '729,97',
    'kit-quiksilver-preto': '689,97',
    'kit-quiksilver-typo': '1109,95',
    'kit-quiksilver-jeans': '889,96',
}
for kit_id, total in kits_total.items():
    if f"id: '{kit_id}'" in text and 'Kit completo' not in text[text.index(f"id: '{kit_id}'"):text.index(f"id: '{kit_id}'")+1200]:
        text = re.sub(
            rf"(id: '{kit_id}',[\s\S]*?)(      {{ nome: 'Boné', preco: 'R\$ 59,99' }}\n    ],)",
            rf"\1      {{ nome: 'Boné', preco: 'R$ 59,99' }},\n      {{ nome: 'Kit completo', preco: 'R$ {total}', foto: 0 }}\n    ]," if 'typo' in kit_id or 'jeans' in kit_id else rf"\1      {{ nome: 'Mizuno camaleão', preco: 'R$ 449,99' }},\n      {{ nome: 'Kit completo', preco: 'R$ {total}', foto: 0 }}\n    ]," if 'roxo' in kit_id else rf"\1      {{ nome: 'Mizuno Refletivo', preco: 'R$ 449,99' }},\n      {{ nome: 'Kit completo', preco: 'R$ {total}', foto: 0 }}\n    ],",
            text,
            count=1
        )
    text = re.sub(
        rf"(id: '{kit_id}',[\s\S]*?descricao: '[^']+',\n)    tamanhos: TAMANHOS_ROUPA",
        r"\1    tamanhos: null",
        text,
        count=1
    )

path.write_text(text, encoding='utf-8')
print('done')
