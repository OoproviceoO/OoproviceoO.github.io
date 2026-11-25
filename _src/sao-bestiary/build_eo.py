import json, re
D = '/home/claude/raw/eo/'
tw = json.load(open(D + 'tw.json', encoding='utf-8'))
pts = [p for p in json.load(open(D + 'points.json', encoding='utf-8')) if p['nivel'] <= 3]
objs = json.load(open(D + 'objetos.json', encoding='utf-8'))
ES = {o[0].lower(): o for o in objs}
mobs = json.load(open('/home/claude/mobs.min.json', encoding='utf-8'))
EN2ZH = {d['e'].lower(): d['i'] for m in mobs for d in m['d'] if d['e']}
FR2ZH = {k.lower(): v for k, v in json.load(open('/home/claude/fr2zh_eq.json', encoding='utf-8')).items()}
TR = {k.lower(): v for k, v in json.load(open('/home/claude/tr_items.json', encoding='utf-8')).items()}
MOB_FR = {}  # 法文怪名 → 中文（用官方公告比對過的）
import importlib.util
spec = importlib.util.spec_from_file_location('ap', '/home/claude/apply_patch.py')
src = open('/home/claude/apply_patch.py', encoding='utf-8').read()
MAP = eval(src[src.index('MAP = {') + 6: src.index('}\nCORR') + 1])
for m in mobs:
    if m['ne'] in MAP: MOB_FR[MAP[m['ne']].lower()] = m['n']
for m in mobs: MOB_FR.setdefault(m['ne'].lower(), m['n'])

miss = set()
def item(n):
    n = re.sub(r'\s*×\s*\d+$', '', n).strip()
    o = ES.get(n.lower())
    en = o[1] if o else ''
    z = (TR.get(n.lower()) or (o and (TR.get(o[1].lower()) or EN2ZH.get(o[1].lower()) or FR2ZH.get(o[2].lower()))))
    if not z: miss.add(n); z = en or n
    return z, en

RAR = {'Común': '普通', 'Comun': '普通', 'Poco común': '罕見', 'Inusual': '罕見', 'Raro': '稀有', 'Épico': '史詩', 'Legendario': '傳說', 'Mítico': '神話', 'Mitico': '神話'}
STAT = [('daño mágico', '魔法傷害'), ('celeridad de habilidades', '技能急速'), ('celeridad de habilidad', '技能急速'), ('maná máximo', '最大魔力'), ('maná máx.', '最大魔力'),
        ('curación extra', '額外治療'), ('curación adicional', '額外治療'), ('vampirismo de hechizos', '法術吸血'), ('vampirismo', '吸血'),
        ('probabilidad de crítico de habilidad', '技能暴擊率'), ('regeneración de maná', '魔力回復'), ('daño crítico de habilidad', '技能暴擊傷害'),
        ('reducción de daño', '傷害減免'), ('velocidad de movimiento', '移動速度'), ('probabilidad de crítico', '暴擊率'), ('daño físico', '物理傷害'),
        ('daño de proyectil', '投射物傷害'), ('regeneración de aguante', '耐力回復'), ('regeneración de vida', '生命回復'), ('aguante máximo', '最大耐力'), ('aguante máx.', '最大耐力'),
        ('velocidad de ataque', '攻擊速度'), ('daño de arma', '武器傷害'), ('robo de vida', '生命竊取'), ('daño crítico', '暴擊傷害'), ('esquiva', '閃避'), ('evasión', '閃避'),
        ('Chance de Blocage', '格擋率'), ('probabilidad de bloqueo', '格擋率'), ('Dégâts de Compétence', '技能傷害'), ('daño de habilidad', '技能傷害'), ('daño de ataque', '攻擊傷害'),
        ('reducción de caídas', '摔落傷害減免'), ('de vida', '生命'), ('de defensa', '防禦'), ('vida', '生命'), ('defensa', '防禦')]
def stat(s):
    for a, b in STAT:
        if a in s:
            num = s.replace(a, '').strip().replace(',', '.').replace(' ', '')
            return f'{num} {b}'
    return s

def note(n):
    if not n: return ''
    if n in tw: return tw[n]
    m = re.match(r'(?:Nivel ([\d.]+) · )?([\d.]+) de vida\.(?: Visto en (\d+) zonas? del piso\.)?$', n)
    if m:
        s = []
        if m.group(1): s.append(f'Lv. {m.group(1)}')
        s.append(f'生命值 {m.group(2)}')
        if m.group(3): s.append(f'這層有 {m.group(3)} 處出現')
        return ' · '.join(s)
    m = re.match(r'(\d+) puntos? de recolección por la zona\.', n)
    if m: return f'這一帶有 {m.group(1)} 個採集點'
    m = re.match(r'Entradas? vistas? en (.+?)\.?$', n)
    if m: return '入口座標：' + m.group(1).replace('X ', '').replace(' Y ', ' ').replace(' Z ', ' ').replace(',', '')
    m = re.match(r'Puesto de fabricación\. En el juego: (.+?)\.?$', n)
    if m: return f'製作站（遊戲內名稱：{m.group(1)}）'
    m = re.match(r'En el juego: (.+?)\.?$', n)
    if m: return f'遊戲內名稱：{m.group(1)}'
    if n.startswith('Donde apareces'): return '進入這層時的出生點'
    if n.startswith('Clic derecho en el cartel'): return '右鍵點告示牌進入'
    if 'Punto oficial' in n: return '官方地點'
    return ''

REGION_ZH = json.load(open('/home/claude/region_zh.json', encoding='utf-8'))
def pname(p):
    n = p['nombre']
    if n in REGION_ZH: return REGION_ZH[n]
    if n in tw: return tw[n]
    m = re.match(r'Fabricación: (.+)', n)
    if m: return '製作：' + item(m.group(1))[0]
    m = re.match(r'Comprador de botín \((.+)\)', n)
    if m: return f'戰利品收購（{m.group(1)}）'
    if p['capa'] in ('mobs', 'jefes'):
        k = re.sub(r'\s*\(.*\)$', '', n).replace('_', ' ').lower()
        k = re.sub(r'\s+corrompue?$', '', k)
        z = MOB_FR.get(k)
        if z: return z + ('（腐化）' if 'corromp' in n.lower() else '')
    return n

CAP = {'tiendas': '商店・製作', 'compradores': '收購商', 'pnj': 'NPC', 'jefes': 'Boss', 'mobs': '怪物', 'recursos': '採集點', 'regiones': '地區', 'poi': '地標', 'objetivos': '目標', 'misiones': '任務'}
out = []
for p in pts:
    r = {'id': p['id'], 'f': p['nivel'], 'c': CAP.get(p['capa'], p['capa']), 'n': pname(p), 'o': p['nombre'], 'xyz': f"{p['wx']}, {p.get('wy', p.get('sy', ''))}, {p['wz']}", 'note': note(p.get('nota'))}
    its = []
    for o in p.get('objetos') or []:
        z, en = item(o['nombre'])
        mm = re.search(r'×\s*(\d+)$', o['nombre'])
        it = {'n': z + (f' ×{mm.group(1)}' if mm else ''), 'en': en}
        if o.get('precio'): it['price'] = o['precio'].replace(',', '.')
        rc = o.get('receta')
        if rc:
            it['r'] = {'cost': (rc.get('coste') or '').replace('Gratis', '免費'), 'time': (rc.get('tiempo') or '').replace(' ', ''), 'rar': RAR.get(rc.get('rareza', ''), rc.get('rareza', '')),
                       'lv': rc.get('nivel', ''), 'mats': [[item(a)[0], q] for a, q in rc.get('materiales', [])], 'stats': [stat(s) for s in rc.get('stats', []) or []]}
        its.append(it)
    if its: r['items'] = its
    buy = [{'n': item(o['nombre'])[0], 'price': o.get('precio', '').replace(',', '.')} for o in p.get('compraObjetos') or []]
    if buy: r['buy'] = buy
    out.append(r)
json.dump(out, open('/home/claude/eo_points.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
nrec = sum(1 for r in out for i in r.get('items', []) if 'r' in i)
print('points', len(out), 'recipes', nrec, 'untranslated', len(miss))
print(sorted(miss)[:60])
