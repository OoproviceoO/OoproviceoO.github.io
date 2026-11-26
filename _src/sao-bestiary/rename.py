import json, sys, re
sys.argv = ['x']; ns = {}
exec(open('/home/claude/build_eo.py', encoding='utf-8').read(), ns)
item = ns['item']
z = json.load(open('argo/zh.json', encoding='utf-8'))
O = json.load(open('raw/eo/objetos.json', encoding='utf-8'))
byid = {int(x[3]): x for x in O if isinstance(x[3], (int, float)) and x[3] == x[3]}
byfr = {x[2].lower(): x for x in O if isinstance(x[2], str)}
byen = {x[1].lower(): x for x in O if isinstance(x[1], str)}
fr2zh = {k.lower(): v for k, v in json.load(open('fr2zh_eq.json', encoding='utf-8')).items()}
R = {}
def cur_names(it):
    out = set()
    for i in it.get('ids', []):
        k, v = i.split('|', 1)
        if k in 'ep' and v.isdigit() and int(v) in byid: x = byid[int(v)]; out.add(item(x[0])[0]); out.add(fr2zh.get(x[2].lower(), ''))
    for key, idx in ((it.get('fr'), byfr), (it.get('en'), byen)):
        if key and key.lower() in idx: x = idx[key.lower()]; out.add(item(x[0])[0]); out.add(fr2zh.get(x[2].lower(), ''))
    if it.get('fr'): out.add(fr2zh.get(it['fr'].lower(), ''))
    if it.get('en'): out.add(fr2zh.get(it['en'].lower(), ''))
    return {n for n in out if n and not re.fullmatch(r'[\x00-\x7f]+', n)} | {n for n in out if n}
for it in z['items']:
    for n in cur_names(it):
        if n != it['zh']: R[n] = it['zh']
# monsters
v2 = json.load(open('mobs.v2.json', encoding='utf-8'))
for m in v2:
    nz = None
    if m['f'] == 1 and m['c'].zfill(3) in z['mobs']: nz = z['mobs'][m['c'].zfill(3)]
    for k in (m.get('ne'),):
        if k in z['mobsByName']: nz = z['mobsByName'][k]
    if nz and nz != m['n']: R[m['n']] = nz
# NPCs / places by original name
eo = json.load(open('eo_points.json', encoding='utf-8'))
NP = {**{k.lower(): v for k, v in z['places'].items()}, **{k.lower(): v for k, v in z['npcs'].items()}}
for p in eo:
    nz = NP.get(p['o'].lower()) or NP.get(re.sub(r'\s*\(.*\)$', '', p['o']).lower())
    if nz and nz != p['n'] and not nz.startswith('第'): R[p['n']] = nz
R = {k: v for k, v in R.items() if k and v and k != v}
json.dump(R, open('rename.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print(len(R)); print(list(R.items())[:12]); print([x for x in R.items() if x[0] in [m['n'] for m in v2]][:30])
print([x for x in R.items() if x[0] in [p['n'] for p in eo]][:30])
