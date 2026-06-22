"""Copia e organiza fotos/vídeos da pasta danielloja para images/produtos/."""
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'danielloja'
DEST = ROOT / 'images' / 'produtos'


def itens_by_time(prefix):
    folder = SRC / 'ITENS'
    return sorted([
        str(p.relative_to(SRC)).replace('\\', '/')
        for p in folder.glob(f'*{prefix}*')
        if p.suffix.lower() in {'.jpeg', '.jpg'}
    ])


PRODUCTS = {
    'camisa-retro-brasil': [
        'brasil/WhatsApp Image 2026-06-21 at 21.13.49 (4).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.49 (3).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.46 (2).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.48 (2).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.48 (4).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.46.jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.47 (1).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.47 (2).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.47 (3).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.48 (1).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.48 (3).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.49 (1).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.46 (1).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.47 (4).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.13.47.jpeg',
    ],
    'kit-feminino-brasil': [
        'brasil/WhatsApp Image 2026-06-21 at 21.16.22.jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.16.22 (1).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.16.23 (1).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.16.23 (2).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.16.23 (3).jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.16.23.jpeg',
    ],
    'kit-casal-brasil': [
        'brasil/WhatsApp Image 2026-06-21 at 21.27.59444.jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.27.5944.jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.27.5744.jpeg',
    ],
    'baby-look-brasil': [
        'brasil/44.jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.27.57.jpeg',
        'brasil/3.jpeg',
    ],
    'conjunto-infantil-brasil': [
        'brasil/WhatsApp Image 2026-06-21 at 21.27.573.jpeg',
        'brasil/44444.jpeg',
    ],
    'polo-treino-brasil': itens_by_time('21.02.') + itens_by_time('21.05.') + [
        'brasil/WhatsApp Image 2026-06-21 at 21.35.12.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.18.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.18 (1).jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.19.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.19 (1).jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.20.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.21.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.22.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.22 (1).jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.22 (2).jpeg',
    ],
    'bone-selecao-brasil': itens_by_time('20.55.') + itens_by_time('21.00.') + [
        'brasil/3333.jpeg',
        'brasil/WhatsApp Image 2026-06-21 at 21.35.13.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.15.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.16.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.16 (1).jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.17.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.17 (1).jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.17 (2).jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.23.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.23 (1).jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.24.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.26.jpeg',
        'WhatsApp Image 2026-06-21 at 21.35.26 (1).jpeg',
    ],
    'conjunto-virginia': [
        'virginia/WhatsApp Image 2026-06-21 at 21.37.56.jpeg',
        'virginia/WhatsApp Image 2026-06-21 at 21.37.562.jpeg',
    ],
}


def sync_product(product_id, files):
    out_dir = DEST / product_id
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)

    copied = 0
    for i, rel in enumerate(files, 1):
        src = SRC / rel
        if not src.exists():
            print(f'  SKIP missing: {rel}')
            continue
        shutil.copy2(src, out_dir / f'{i:02d}.jpeg')
        copied += 1

    if product_id == 'conjunto-virginia':
        video_src = SRC / 'virginia' / 'WhatsApp Video 2026-06-21 at 21.38.04.mp4'
        if video_src.exists():
            shutil.copy2(video_src, out_dir / 'video.mp4')
            print(f'  + video.mp4')

    print(f'{product_id}: {copied} fotos')
    return copied


def main():
    for pid, files in PRODUCTS.items():
        sync_product(pid, files)


if __name__ == '__main__':
    main()
