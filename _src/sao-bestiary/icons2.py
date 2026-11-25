import json, sys, re, os, subprocess, concurrent.futures as cf
sys.argv = ['x']; ns = {}
exec(open('/home/claude/build_eo.py', encoding='utf-8').read(), ns)
item = ns['item']
O = json.load(open('raw/eo/objetos.json', encoding='utf-8'))
names = {e['n'] for e in json.load(open('equip.json', encoding='utf-8'))}
for p in json.load(open('eo_points.json', encoding='utf-8')):
    for x in p.get('items') or []:
        names.add(x['n']); [names.add(m[0]) for m in (x.get('r') or {}).get('mats', [])]
    for x in p.get('buy') or []: names.add(x['n'])
for m in json.load(open('mobs.v2.json', encoding='utf-8')):
    for d in m['d']: names.add(d['i'])
out = {}; jobs = []
for es, en, fr, ref in O:
    zh, _ = item(es)
    if zh not in names or zh in out: continue
    if ref is None or (isinstance(ref, float) and ref != ref): continue
    if isinstance(ref, (int, float)): ref = int(ref); url = f'https://exiled-order.pages.dev/objetos-wiki/items/{ref}.png'; fn = f'w{ref}.png'
    else: url = 'https://exiled-order.pages.dev' + ref.split('?')[0]; fn = 'x_' + os.path.basename(ref.split('?')[0])
    out[zh] = fn; jobs.append((url, 'dl/icons2/' + fn))
os.makedirs('dl/icons2', exist_ok=True)
jobs = list(dict(jobs[::-1]).items()) if False else list({j[1]: j for j in jobs}.values())
def g(j): return 0 if os.path.exists(j[1]) else subprocess.run(['curl', '-sf', '-o', j[1], j[0]]).returncode
with cf.ThreadPoolExecutor(8) as ex: r = list(ex.map(g, jobs))
bad = {j[1].split('/')[-1] for j, c in zip(jobs, r) if c}
for f in os.listdir('dl/icons2'):
    if open('dl/icons2/' + f, 'rb').read(4) != b'\x89PNG': bad.add(f); os.remove('dl/icons2/' + f)
out = {k: v for k, v in out.items() if v not in bad}
json.dump(out, open('icon_map.json', 'w', encoding='utf-8'), ensure_ascii=False)
print('names', len(names), 'icons', len(out), 'bad', len(bad))
