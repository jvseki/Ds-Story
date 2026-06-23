from pathlib import Path
import re

p = Path(__file__).resolve().parents[1] / 'js' / 'main.js'
t = p.read_text(encoding='utf-8')

t = re.sub(
    r"(grupo: 'kits',\n    preco: null,[\s\S]*?descricao: '[^']+',\n)    tamanhos: TAMANHOS_ROUPA",
    r"\1    tamanhos: null",
    t,
)

replacements = [
    (
        "      { nome: 'Mizuno camaleão', preco: 'R$ 449,99' }\n    ],\n    imagens: imgs('kit-quiksilver-roxo'",
        "      { nome: 'Mizuno camaleão', preco: 'R$ 449,99' },\n      { nome: 'Kit completo', preco: 'R$ 729,97', foto: 0 }\n    ],\n    imagens: imgs('kit-quiksilver-roxo'",
    ),
    (
        "      { nome: 'Mizuno Refletivo', preco: 'R$ 449,99' }\n    ],\n    imagens: imgs('kit-quiksilver-preto'",
        "      { nome: 'Mizuno Refletivo', preco: 'R$ 449,99' },\n      { nome: 'Kit completo', preco: 'R$ 689,97', foto: 0 }\n    ],\n    imagens: imgs('kit-quiksilver-preto'",
    ),
    (
        "      { nome: 'Boné', preco: 'R$ 59,99' }\n    ],\n    imagens: imgs('kit-quiksilver-typo'",
        "      { nome: 'Boné', preco: 'R$ 59,99' },\n      { nome: 'Kit completo', preco: 'R$ 1109,95', foto: 0 }\n    ],\n    imagens: imgs('kit-quiksilver-typo'",
    ),
    (
        "      { nome: 'Boné', preco: 'R$ 59,99' }\n    ],\n    imagens: imgs('kit-quiksilver-jeans'",
        "      { nome: 'Boné', preco: 'R$ 59,99' },\n      { nome: 'Kit completo', preco: 'R$ 889,96', foto: 0 }\n    ],\n    imagens: imgs('kit-quiksilver-jeans'",
    ),
]

for old, new in replacements:
    if old in t:
        t = t.replace(old, new, 1)

p.write_text(t, encoding='utf-8')
print('patched kits')
