import json, re, sys
sys.argv = ['x']
ns = {}
exec(open('/home/claude/build_eo.py', encoding='utf-8').read(), ns)   # 取得 item()、MAP、tw
item, MAP, tw = ns['item'], ns['MAP'], ns['tw']
D = '/home/claude/raw/eo/'
A = json.load(open(D + 'mobs_arrays.json', encoding='utf-8'))
T = json.load(open(D + 'mob_items.json', encoding='utf-8'))
Z = {z['id']: z for z in A['n']}
L = [x for x in A['l'] if 'nombre' in x]
mobs = json.load(open('/home/claude/mobs.min.json', encoding='utf-8'))
NEW = json.load(open('/home/claude/new_mobs_zh.json', encoding='utf-8')) if len(sys.argv) and __import__('os').path.exists('/home/claude/new_mobs_zh.json') else {}
fl = lambda z: 3 if z.startswith('p3') else 2 if z.startswith('p2') else 1
byc = {}
for m in mobs:
    try: byc.setdefault((m['f'], int(m['c'])), []).append(m)
    except Exception: pass
FR2EN = {}
for en, fr in MAP.items(): FR2EN.setdefault(fr.lower(), []).append(en)
SUF = {'guerrero': 'Warrior', 'arquero': 'Archer', 'chamán': 'Shaman', 'espada': 'Warrior', 'lanza': 'Warrior'}
RAR = {'C': '普通', 'U': '罕見', 'R': '稀有', 'E': '史詩', 'L': '傳說', 'M': '神話'}
used = set(); new = []; unmatched = []
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
    drops = []
    for b in x.get('botin') or []:
        it = T.get(b['objeto'], {})
        zh, en = item(it.get('nombre', b['objeto']))
        drops.append({'p': f"{b['prob']}%", 'i': zh, 'e': en, 'n': ''})
    zona = tw.get(Z[x['zona']]['nombre'], Z[x['zona']]['nombre'])
    if cand:
        used.add(id(cand))
        if drops: cand['d'] = drops; cand['src2'] = 1
        cand['mapa'] = x.get('mapa') or ''
        cand['zona'] = zona
        if x.get('texto') in tw: cand['desc'] = tw[x['texto']]
    else:
        zh = NEW.get(x['nombre'])
        if not zh: unmatched.append(x['nombre'])
        mobs.append({'f': f, 'c': str(x['codice']), 'n': zh or x['nombre'], 'ne': x['original'], 't': 'Boss' if x.get('jefe') == '!0' else '怪物', 'b': '',
                     'r': zona, 're': '', 's': 0, 'st': {}, 'd': drops, 'tr': 1, 'mapa': x.get('mapa') or '', 'zona': zona, 'src2': 1,
                     **({'desc': tw[x['texto']]} if x.get('texto') in tw else {})})
json.dump(mobs, open('/home/claude/mobs.v2.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('their', len(L), 'matched', len(used), 'new', len(L) - len(used), 'total', len(mobs))
print('need names:', unmatched)
