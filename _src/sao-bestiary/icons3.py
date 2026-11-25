import json, re, os, subprocess, concurrent.futures as cf
O = json.load(open('raw/eo/objetos.json', encoding='utf-8'))
idx = {}
for e in O:
    for k in e[:3]:
        if isinstance(k, str): idx.setdefault(k.lower().strip(), e)
inv = {}
for src in ['fr2zh_eq.json', 'tr_items.json']:
    for k, zh in json.load(open(src, encoding='utf-8')).items(): inv.setdefault(zh, []).append(k)
for zh, en in json.load(open('zh2en.json', encoding='utf-8')).items(): inv.setdefault(zh, []).append(en)
im = json.load(open('icon_map.json', encoding='utf-8'))
drop_icons = set()
for m in json.load(open('mobs.v2.json', encoding='utf-8')):
    for d in m['d']:
        if d.get('o'): drop_icons.add(d['i'])
miss = json.load(open('miss.json', encoding='utf-8'))
names = [x for x, _ in miss['miss']] + [e['n'] for e in json.load(open('equip.json', encoding='utf-8'))]
ens = dict(miss['miss'])
jobs = []; added = {}
for n in names:
    b = re.sub(r'\s*×\s*\d+$', '', n.lstrip('—').strip())
    if n in im or n in drop_icons: continue
    if b in im: added[n] = im[b]; continue
    keys = inv.get(b, []) + inv.get(n, []) + ([ens[n].lstrip('—')] if ens.get(n) else [])
    e = next((idx[k.lower().strip()] for k in keys if k.lower().strip() in idx), None)
    if not e or e[3] is None or (isinstance(e[3], float) and e[3] != e[3]): continue
    ref = e[3]
    if isinstance(ref, (int, float)): url = f'https://exiled-order.pages.dev/objetos-wiki/items/{int(ref)}.png'; fn = f'w{int(ref)}.png'
    else: url = 'https://exiled-order.pages.dev' + ref.split('?')[0]; fn = 'x_' + os.path.basename(ref.split('?')[0])
    added[n] = fn; jobs.append((url, 'dl/icons2/' + fn))
jobs = list({j[1]: j for j in jobs}.values())
def g(j): return 0 if os.path.exists(j[1]) else subprocess.run(['curl', '-sf', '-o', j[1], j[0]]).returncode
with cf.ThreadPoolExecutor(8) as ex: list(ex.map(g, jobs))
ok = {k: v for k, v in added.items() if os.path.exists('dl/icons2/' + v) and open('dl/icons2/' + v, 'rb').read(4) == b'\x89PNG'}
im.update(ok); json.dump(im, open('icon_map.json', 'w', encoding='utf-8'), ensure_ascii=False)
left = [n for n in names if n not in im and n not in drop_icons]
print('added', len(ok), 'still missing', len(left)); print(left[:80])
