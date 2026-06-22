#!/usr/bin/env python3
"""
Importa fotos de uma pasta para images/produtos/{id}/ no formato do site DS A Fonte.

Uso:
  python scripts/import-produtos.py "C:/Users/.../Downloads/minhas-fotos" meu-produto-id

Opcoes:
  --max-size 1600     Largura maxima em pixels (padrao: 1600)
  --quality 88        Qualidade JPEG (padrao: 88)
  --dry-run           Mostra o que faria sem gravar arquivos
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    print("Instale o Pillow: pip install Pillow")
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
DEST_ROOT = ROOT / "images" / "produtos"
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"}


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "produto"


def iter_images(folder: Path) -> list[Path]:
    files = [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in IMAGE_EXTS]
    return sorted(files, key=lambda p: p.name.lower())


def optimize_image(src: Path, dest: Path, max_size: int, quality: int) -> None:
    with Image.open(src) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")
        elif img.mode == "L":
            img = img.convert("RGB")

        width, height = img.size
        if width > max_size or height > max_size:
            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)

        dest.parent.mkdir(parents=True, exist_ok=True)
        img.save(dest, "JPEG", quality=quality, optimize=True)


def import_folder(source: Path, product_id: str, max_size: int, quality: int, dry_run: bool) -> int:
    if not source.exists() or not source.is_dir():
        raise FileNotFoundError(f"Pasta nao encontrada: {source}")

    images = iter_images(source)
    if not images:
        raise FileNotFoundError(f"Nenhuma imagem encontrada em: {source}")

    product_id = slugify(product_id)
    dest_dir = DEST_ROOT / product_id

    if dry_run:
        print(f"[dry-run] {source} -> {dest_dir}")
    else:
        if dest_dir.exists():
            for old in dest_dir.glob("*.jpeg"):
                old.unlink()
        dest_dir.mkdir(parents=True, exist_ok=True)

    for index, src in enumerate(images, start=1):
        dest = dest_dir / f"{index:02d}.jpeg"
        print(f"  {src.name} -> {dest.relative_to(ROOT)}")
        if not dry_run:
            optimize_image(src, dest, max_size, quality)

    print(f"\nPronto: {len(images)} foto(s) em images/produtos/{product_id}/")
    print(f"Adicione no main.js: imagens: imgs('{product_id}', {len(images)}),")
    return len(images)


def main() -> None:
    parser = argparse.ArgumentParser(description="Importa fotos para o catalogo DS A Fonte")
    parser.add_argument("source", help="Pasta com as fotos originais")
    parser.add_argument("product_id", help="ID do produto (ex: nike-tn-dourado)")
    parser.add_argument("--max-size", type=int, default=1600)
    parser.add_argument("--quality", type=int, default=88)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    count = import_folder(
        Path(args.source),
        args.product_id,
        args.max_size,
        args.quality,
        args.dry_run,
    )
    if count == 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
