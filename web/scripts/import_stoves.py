"""Merge scraped heater catalogs (_research/stoves/*.json) + stove items from products.json
into src/data/stoves.json, grouped into families (same brand + image = one card with variants).
Images → src/assets/stoves/<family-id>.webp (white bg, ≤800px)."""
import json, os, re, glob, hashlib
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RES = os.path.join(ROOT, '..', '_research')
OUT_IMG = os.path.join(ROOT, 'src', 'assets', 'stoves')
os.makedirs(OUT_IMG, exist_ok=True)
STOVE_CATS = {'wood-stove', 'electric-stove', 'combi-stove', 'control-panel', 'steam-generator', 'infrared'}

items = []
official_tokens = set()
for f in ['harvia.json', 'sawo.json']:
    for p in json.load(open(os.path.join(RES, 'stoves', f))):
        p['_img'] = os.path.join(RES, 'stoves', p['image'])
        items.append(p)
        for t in re.findall(r'[A-Za-z]*\d+[A-Za-z0-9-]*', p['name'] + ' ' + p['specs'].get('model_code', '')):
            if re.search(r'[A-Za-z]', t) and len(t) >= 4: official_tokens.add(t.upper())
skipped_dupe = skipped_noimg = 0
for p in json.load(open(os.path.join(RES, 'stoves', 'saunabee.json'))):
    if not p.get('image'):
        skipped_noimg += 1; continue
    if p['brand'] in ('Harvia', 'SAWO'):
        toks = [t.upper() for t in re.findall(r'[A-Za-z]*\d+[A-Za-z0-9-]*', p['name']) if re.search(r'[A-Za-z]', t) and len(t) >= 4]
        if any(t in official_tokens for t in toks):
            skipped_dupe += 1; continue
    p['_img'] = os.path.join(RES, 'stoves', p['image'])
    items.append(p)
print('saunabee skipped: dupes', skipped_dupe, 'no image', skipped_noimg)
# stoves already curated in products.json (images in _research/products)
for p in json.load(open(os.path.join(ROOT, 'src', 'data', 'products.json'))):
    if p['category'] in STOVE_CATS:
        p['_img'] = os.path.join(RES, 'products', p['image'])
        items.append(p)

# de-duplicate by normalised name / model code
seen, uniq = set(), []
for p in items:
    p.pop('price', None)
    if p['category'] not in STOVE_CATS:
        continue
    key = (p['specs'].get('model_code') or p['name']).lower().replace(' ', '')
    if key in seen:
        continue
    seen.add(key); uniq.append(p)

def words_prefix(names):
    ws = [n.split() for n in names]
    out = []
    for parts in zip(*ws):
        if all(x == parts[0] for x in parts): out.append(parts[0])
        else: break
    return ' '.join(out)

groups = {}
for p in uniq:
    groups.setdefault((p['brand'], p['category'], p['_img']), []).append(p)

def num(s):
    m = re.search(r'[\d.]+', s or ''); return float(m.group()) if m else 0

families, used_ids = [], set()
for (brand, cat, img), vs in groups.items():
    vs.sort(key=lambda v: num(v['specs'].get('power_kw')))
    name = words_prefix([v['name'] for v in vs]) if len(vs) > 1 else vs[0]['name']
    if len(name.split()) < 2: name = f"{brand} {vs[0].get('series') or ''}".strip()
    name = re.sub(r'\s+\d+([.,]\d+)?\s*(kW|kVt)?$', '', name).strip(' -–,')
    name = re.sub(r',\s*$', '', name)
    fid = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    if fid in used_ids: fid += '-' + hashlib.md5(img.encode()).hexdigest()[:5]
    used_ids.add(fid)
    try:
        im = Image.open(img).convert('RGBA')
        bg = Image.new('RGBA', im.size, (255, 255, 255, 255)); bg.alpha_composite(im)
        im = bg.convert('RGB'); im.thumbnail((640, 640))
        im.save(os.path.join(OUT_IMG, fid + '.webp'), quality=80)
    except Exception as e:
        print('image fail', fid, e); continue
    pw = [num(v['specs'].get('power_kw')) for v in vs if v['specs'].get('power_kw')]
    families.append({
        'id': fid, 'brand': brand, 'category': cat, 'series': vs[0].get('series') or '',
        'name': name, 'image': fid,
        'manufacturer': vs[0]['specs'].get('manufacturer') or '',
        'description': vs[0]['description'],
        'power': [min(pw), max(pw)] if pw else None,
        'variants': [{
            'name': v['name'], 'code': v['specs'].get('model_code', ''),
            'kw': v['specs'].get('power_kw', ''), 'm3': v['specs'].get('room_m3', ''),
            'stones': v['specs'].get('stones_kg', ''), 'control': v['specs'].get('control', ''),
        } for v in vs],
    })

# drop single-variant cards whose name duplicates a richer family (old curated entries)
names = {}
for f in families: names.setdefault((f['brand'], f['name'].lower()), []).append(f)
drop = set()
for k, fs in names.items():
    if len(fs) > 1:
        fs.sort(key=lambda f: -len(f['variants']))
        for f in fs[1:]:
            if len(f['variants']) == 1: drop.add(f['id'])
families = [f for f in families if f['id'] not in drop]

order = {'wood-stove': 0, 'electric-stove': 1, 'combi-stove': 2, 'steam-generator': 3, 'control-panel': 4, 'infrared': 5}
brand_order = {'Harvia': 0, 'SAWO': 1, 'Teplodar': 2, 'TMF': 3}
# well-known series first inside each brand
BOOST = ['legend', 'cilindro', 'vega', 'kip', ' m3', 'pro 20', 'virta', 'the wall', 'spirit', 'linear',
         'tower', 'nordex', 'scandia', 'krios', 'cumulus', 'savonia', 'mini x', 'heaterking', 'aries',
         'bylina', 'cascade', 'kuzbass', 'russkaya', 'barrel', 'angara', 'compact', 'gardarika', 'arabesk', 'tunguska', 'sahalin', 'saga', 'oasis', 'skif']
def pop(f):
    n = ' ' + f['name'].lower()
    hit = next((i for i, k in enumerate(BOOST) if k in n), len(BOOST))
    return (hit, -len(f['variants']), f['name'])
families.sort(key=lambda f: (order[f['category']], brand_order.get(f['brand'], 9), pop(f)))

# Default "All" view: round-robin the most popular brands' wood + electric heaters,
# then everything else in category order.
POPULAR = ['Harvia', 'SAWO', 'Teplodar', 'TMF']
buckets = [[f for f in families if f['brand'] == b and f['category'] == c] for c in ('wood-stove', 'electric-stove') for b in POPULAR]
def spread(bucket):
    # one family per series first (e.g. Legend, Cilindro, Vega…), then the rest
    seen, first, rest = set(), [], []
    for f in bucket:
        key = (f.get('series') or ' '.join(f['name'].split()[1:2])).lower()
        (rest if key in seen else first).append(f); seen.add(key)
    return first + rest
buckets = [spread(b) for b in buckets if b]
head, picked = [], set()
while any(buckets):
    for b in buckets:
        if b:
            f = b.pop(0); head.append(f); picked.add(f['id'])
families = head + [f for f in families if f['id'] not in picked]
json.dump(families, open(os.path.join(ROOT, 'src', 'data', 'stoves.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
print('models', len(uniq), 'families', len(families))
from collections import Counter
print(Counter(f['category'] for f in families), Counter(f['brand'] for f in families))
