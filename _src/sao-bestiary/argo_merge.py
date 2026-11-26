# 阿爾戈的攻略本（cheng-1001.github.io/ArgoStrategyGuide）資料併入：收購價、世界王、職業。
# 在 build_eo.py 之後、build.py 之前執行。
import json, re, sys, chompjs
sys.argv = ['x']; ns = {}
src = open('/home/claude/build_eo.py', encoding='utf-8').read()
src = src[:src.index('\n# ---- main')] if '\n# ---- main' in src else src
exec(compile(src, 'build_eo', 'exec'), ns)
item = ns['item']
R = json.load(open('/home/claude/rename.json', encoding='utf-8'))
A = '/home/claude/argo/'
def load(f, var):
    t = open(A + f, encoding='utf-8').read(); i = t.index(var); return chompjs.parse_js_object(t[t.index('=', i) + 1:])
O = json.load(open('/home/claude/raw/eo/objetos.json', encoding='utf-8'))
byen = {x[1].lower(): x for x in O if isinstance(x[1], str)}
Z = json.load(open(A + 'zh.json', encoding='utf-8'))
zen = {(it.get('en') or '').lower(): it['zh'] for it in Z['items'] if it.get('en')}
def zh(en):
    if en.lower() in zen: return zen[en.lower()]
    x = byen.get(en.lower())
    if x: n = item(x[0])[0]; return R.get(n, n)
    return None

eo = json.load(open('/home/claude/eo_points.json', encoding='utf-8'))
# 未翻譯的 NPC 名稱
FIX = {'Comprador de botín de la mazmorra del Laberinto': '墮落者迷宮戰利品收購商', 'Comprador de botín de la Mina de Geldorack': '蓋爾多拉克礦坑戰利品收購商', 'Minero': '礦工'}
for p in eo:
    if p['o'] in FIX: p['n'] = FIX[p['o']]
    p['n'] = R.get(p['n'], p['n'])
SHOP = {'Starting Merchant': 'Ciudad de inicio Mercader', 'Mizunari Loot Buyer': 'Mizunari - Comprador de botín', 'Cursed Ruins - Loot Buyer': 'Ruinas Malditas - Comprador de botín',
        'Cursed Ruins - Loot Buyer (2)': 'Ruinas Malditas - Comprador de botín', 'Labyrinth of the Fallen - Loot Buyer': 'Comprador de botín de la mazmorra del Laberinto',
        'Labyrinth of the Fallen (2) - Loot Buyer': 'Comprador de botín de la mazmorra del Laberinto', 'Hanaka - Loot Buyer': 'Comprador de botín de Hanaka',
        'Vallhat - Loot Buyer': 'Comprador de botín de Vallhatt', 'Magical & Icy Loot Buyer': 'Comprador de botín de Tolbana', 'Local Farmer': 'Agricultor de la Ciudad de inicio',
        'Virelune - Loot Buyer': 'Comprador de botín de Virelune', 'Candelia': 'Comprador de botín de Candelia', 'Local Lumberjack': 'Leñador Local - Cerca de la Ciudad Inicial',
        'Local Miner': 'Minero de la Ciudad de inicio', 'Geldorak Mine Dungeon - Loot Buyer': 'Comprador de botín de la Mina de Geldorack'}
bb = load('buyback.js', 'window.SAO_BUYBACK')
added = miss = 0; missing = set()
for shop, rows in bb['items'].items():
    o = SHOP.get(shop)
    pts = [p for p in eo if p['o'] == o and p['f'] == 1]
    if not pts: continue
    for en, price, _ in rows:
        n = zh(en)
        if not n: miss += 1; missing.add(en); continue
        for p in pts:
            p.setdefault('buy', [])
            if not any(b['n'] == n for b in p['buy']): p['buy'].append({'n': n, 'price': f'{price} col'}); added += 1
def walk(o):
    if isinstance(o, str): return R.get(o, o)
    if isinstance(o, list): return [walk(x) for x in o]
    if isinstance(o, dict): return {k: walk(v) for k, v in o.items()}
    return o
eo = walk(eo)
json.dump(eo, open('/home/claude/eo_points.json', 'w', encoding='utf-8'), ensure_ascii=False)

# 世界王、UNIT 首領
B = load('bosses.js', 'window.SAO_BOSSES')
def rw(lst): return [[zh(re.sub(r'\s*[×x]\s*\d+$|（.*?）', '', a)) or a, a, pct] for a, fr, pct in lst]
bosses = []
for b in B['world'] + B['unique']:
    bosses.append({'n': b.get('zh') or b['name'], 'en': b['name'], 'kind': 'world' if b in B['world'] else 'unique', 'f': b.get('floor'), 'lv': b.get('level'),
                   'price': b.get('price'), 'max': b.get('maxPlayers'), 'sch': b.get('schedule', []), 'g': b.get('guaranteed'), 'rolls': b.get('rolls'),
                   'rw': rw(b.get('roulette', [])), 'atk': [a[0] for a in b.get('attacks', [])], 'unit': b.get('unit'), 'ok': b.get('available', True)})
# 職業：只取事實（定位、難度、能力星等、專精、技能名稱與解鎖等級、可用武器）
C = load('classes.js', 'window.SAO_CLASSES')
classes = [{'n': c['zh'], 'en': c['name'], 'ic': c.get('ic', ''), 'role': c['role'], 'diff': c['diff'], 'stars': c['stars'], 'subs': [s[0] for s in c['subs']],
            'sk': [[s[0], s[1], s[2]] for s in c['skills']], 'sure': c.get('skillsSure', True), 'wp': c.get('weapons')} for c in C]
alias = {}
for old, new in R.items(): alias.setdefault(new, []).append(old)
json.dump({'wikiWorld': B.get('wikiWorld', []), 'bosses': bosses, 'classes': classes, 'alias': alias}, open('/home/claude/argo_data.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('buyback added', added, 'unmatched', miss, sorted(missing)[:15]); print('bosses', len(bosses), 'classes', len(classes), 'alias', len(alias))
print(json.dumps(classes[0]['wp'], ensure_ascii=False)[:300])
