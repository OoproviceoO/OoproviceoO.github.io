import json, re, sys, os
sys.argv = ['x']; ns = {}
exec(open('/home/claude/build_eo.py', encoding='utf-8').read(), ns)
MAP = ns['MAP']
D = '/home/claude/raw/eo/'
A = json.load(open(D + 'mobs_arrays.json', encoding='utf-8'))
T = json.load(open(D + 'mob_items.json', encoding='utf-8'))
L = [x for x in A['l'] if 'nombre' in x]
mobs = json.load(open('/home/claude/mobs.min.json', encoding='utf-8'))
fl = lambda z: 3 if z.startswith('p3') else 2 if z.startswith('p2') else 1
byc = {}
for m in mobs:
    try: byc.setdefault((m['f'], int(m['c'])), []).append(m)
    except Exception: pass
FR2EN = {}
for en, fr in MAP.items(): FR2EN.setdefault(fr.lower(), []).append(en)
SUF = {'guerrero': 'Warrior', 'arquero': 'Archer', 'chamán': 'Shaman', 'espada': 'Warrior', 'lanza': 'Warrior'}
used = set(); key2x = {}
for x in L:
    f = fl(x['zona']); cand = None
    if f == 1 and (f, x['codice']) in byc: cand = byc[(f, x['codice'])][0]
    if not cand:
        ens = FR2EN.get(x['original'].lower(), [])
        if len(ens) > 1:
            s = re.search(r'\((\w+)\)', x['nombre']); s = SUF.get(s.group(1).lower(), '') if s else ''
            ens = [e for e in ens if s and s in e] or ens[:1]
        for m in mobs:
            if m['f'] == f and ens and m['ne'] == ens[0] and id(m) not in used: cand = m; break
    if cand: used.add(id(cand)); key2x[(cand['f'], cand['c'], cand['ne'])] = x
    else: key2x[(f, str(x['codice']), x['original'])] = x
v2 = json.load(open('/home/claude/mobs.v2.json', encoding='utf-8'))
hit = icons = 0; need = set()
for m in v2:
    x = key2x.get((m['f'], m['c'], m['ne']))
    if not x: continue
    hit += 1
    if x.get('sin3d') != '!0': m['eid'] = x['id']
    b = [b for b in (x.get('botin') or []) if T.get(b['objeto'], {}).get('nombre', b['objeto']) not in ('null', None)]
    if len(b) == len(m['d']):
        for dd, bb in zip(m['d'], b):
            img = T.get(bb['objeto'], {}).get('img')
            if img: dd['o'] = bb['objeto']; need.add(bb['objeto']); icons += 1
json.dump(v2, open('/home/claude/mobs.v2.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
json.dump(sorted(need), open('/home/claude/need_icons.json', 'w'))
print('mobs matched', hit, 'with 3d', sum('eid' in m for m in v2), 'drop icons', icons, 'unique', len(need))
