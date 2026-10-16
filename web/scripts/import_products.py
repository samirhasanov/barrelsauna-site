"""Import _research/products → src/data/products.json + src/assets/products/<id>.webp (white bg, ≤900px)."""
import json, os, sys
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, '..', '_research', 'products')
OUT_IMG = os.path.join(ROOT, 'src', 'assets', 'products')
os.makedirs(OUT_IMG, exist_ok=True)
items = json.load(open(os.path.join(SRC, 'products.json')))
for extra in ('accessories2.json', 'fanlan-accessories.json'):
    extra = os.path.join(SRC, extra)
    if os.path.exists(extra):
        names = {p['name'] for p in items}
        items += [p for p in json.load(open(extra)) if p['name'] not in names]
ALLOWED = {'Harvia', 'SAWO', 'Teplodar', 'TMF', 'Fanlan'}  # owner 2026-10-16: only these brands on the site
filtered = []
for p in items:
    maker = (p.get('specs') or {}).get('manufacturer', '')
    if p['brand'] == 'Saunabee':
        if maker not in ALLOWED:
            continue
        p['brand'] = maker  # show the real maker, not the shop
    if p['brand'] not in ALLOWED:
        continue
    filtered.append(p)
items = filtered
keep = []
for p in items:
    p.pop('price', None)
    fn = os.path.join(SRC, p['image'])
    try:
        im = Image.open(fn)
        im = im.convert('RGBA')
        bg = Image.new('RGBA', im.size, (255, 255, 255, 255))
        bg.alpha_composite(im)
        im = bg.convert('RGB')
        im.thumbnail((900, 900))
        im.save(os.path.join(OUT_IMG, p['id'] + '.webp'), quality=82)
        keep.append(p)
    except Exception as e:
        print('skip', p['id'], e)
json.dump(keep, open(os.path.join(ROOT, 'src', 'data', 'products.json'), 'w'), ensure_ascii=False, indent=1)
print('imported', len(keep))
