import re, json, chompjs
t = open('map-PENiQJFa.js', encoding='utf-8').read()
def block(i):
    d = 0
    for j in range(i, len(t)):
        if t[j] == '{': d += 1
        elif t[j] == '}':
            d -= 1
            if d == 0: return t[i:j + 1]
vars_ = {}
for m in re.finditer(r'(?<=[,;\s])([A-Za-z_$][\w$]{0,2})=(\[\[[-\d.,\[\]]+\]\])', t): vars_[m.group(1)] = chompjs.parse_js_object(m.group(2))
def conv(s):
    s = re.sub(r'\be\(("(?:[^"\\]|\\.)*")\)', r'\1', s)
    s = re.sub(r'\bt\((\[[-\d.,]+\])\)', r'[\1]', s)
    s = re.sub(r'(puntos:)([A-Za-z_$][\w$]{0,2})(?=[,}])', lambda m: m.group(1) + json.dumps(vars_.get(m.group(2), [])), s)
    s = s.replace('!0', 'true').replace('!1', 'false')
    return chompjs.parse_js_object(s)
levels = []
for m in re.finditer(r'\{id:"(mazmorra-[a-z]+-\d+)",', t):
    b = block(m.start())
    if 'mazmorra:!0' not in b: continue
    try: levels.append(conv(b))
    except Exception as ex: print('fail', m.group(1), ex)
pois = []
for m in re.finditer(r'\{id:"(mazmorra-[a-z0-9-]+)",nivel:"(mazmorra-[a-z]+-\d+)"', t):
    b = block(m.start())
    try: pois.append(conv(b))
    except Exception as ex: print('poi fail', m.group(1), ex)
json.dump({'levels': levels, 'pois': pois}, open('dg.json', 'w', encoding='utf-8'), ensure_ascii=False)
print(len(levels), len(pois))
for L in levels: print(L['id'], L.get('ficha'), L.get('titulo'), len(L.get('guia', [])), [len(r['puntos']) for r in L.get('rutas', [])], L.get('imagen'))
import collections; print(collections.Counter(p['capa'] for p in pois))
