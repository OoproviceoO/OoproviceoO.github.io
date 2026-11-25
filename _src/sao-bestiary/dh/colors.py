import zipfile, json, io, re, numpy as np
from PIL import Image
Z = zipfile.ZipFile('client.jar')
TEX = {n[len('assets/minecraft/textures/block/'):-4]: n for n in Z.namelist() if n.startswith('assets/minecraft/textures/block/') and n.endswith('.png')}
cache = {}
def avg(t):
    if t in cache: return cache[t]
    im = Image.open(io.BytesIO(Z.read(TEX[t]))).convert('RGBA'); a = np.asarray(im, float)
    a = a[:a.shape[1]] if a.shape[0] > a.shape[1] else a  # 動畫材質只取第一格
    w = a[..., 3:4] / 255
    col = (a[..., :3] * w).sum((0, 1)) / max(w.sum(), 1e-6)
    cache[t] = col; return col
GRASS = np.array([121, 192, 90]) / 255; FOL = np.array([89, 174, 48]) / 255
TINT = {'grass_block_top': GRASS, 'short_grass': GRASS, 'tall_grass_top': GRASS, 'fern': GRASS, 'large_fern_top': GRASS, 'vine': FOL,
        'oak_leaves': FOL, 'jungle_leaves': FOL, 'acacia_leaves': FOL, 'dark_oak_leaves': FOL, 'mangrove_leaves': FOL,
        'birch_leaves': np.array([128, 167, 85]) / 255, 'spruce_leaves': np.array([97, 153, 97]) / 255, 'lily_pad': np.array([32, 128, 48]) / 255}
FIX = {'water': (63, 118, 228), 'barrier': None, 'light': None, 'structure_void': None, 'lava': (207, 92, 20), 'bubble_column': (63, 118, 228)}
def color(block):
    b = block.replace('minecraft:', '')
    if b in FIX: return FIX[b]
    base = re.sub(r'_(slab|stairs|wall|fence_gate|fence|pressure_plate|button|carpet|pane|trapdoor|door|sign|wall_sign|hanging_sign)$', '', b)
    cands = [b + '_top', b, base + '_top', base, base + 's', base.replace('_wood', '_log'), base.replace('smooth_', '') + '_top', base.replace('smooth_', ''),
             base.replace('_bricks', '') , base + '_block', base.replace('waxed_', ''), base + '_planks', b + '_upper', b + '_stage3', b + '_stage7', b + '_top_' ]
    if base.endswith('brick'): cands.append(base + 's')
    for dye in ['light_blue','light_gray','black','blue','brown','cyan','gray','green','lime','magenta','orange','pink','purple','red','white','yellow']:
        if b.startswith(dye + '_'): cands.append(dye + '_wool'); break
    if b.startswith('infested_'): cands += [b[9:], b[9:] + '_top']
    if 'quartz' in b: cands.append('quartz_block_top')
    cands += [b.split('_')[0] + '_planks', 'magma' if 'magma' in b else '', 'chiseled_stone_bricks']
    if base.startswith('potted_'): cands.append(base[7:])
    if base.endswith('_glass'): cands.append(base)
    for t in cands:
        if t in TEX:
            col = avg(t)
            if t in TINT: col = col / 255 * TINT[t] * 255 * 1.25
            return tuple(int(min(255, x)) for x in col)
    return 'MISS'
meta = json.load(open('meta.json'))
out = []; miss = set()
for n in meta['names']:
    biome, rest = n.split('_DH-BSW_', 1)
    if rest == 'AIR': out.append(None); continue
    blk = rest.split('_STATE_')[0]
    c = color(blk)
    if c == 'MISS': miss.add(blk); c = (128, 128, 128)
    out.append(c)
json.dump(out, open('pal.json', 'w'))
print('missing', len(miss), sorted(miss)[:80])
