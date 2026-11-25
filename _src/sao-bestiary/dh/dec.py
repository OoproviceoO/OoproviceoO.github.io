import sqlite3, zstandard, struct, numpy as np, sys, json
LV = int(sys.argv[1]) if len(sys.argv) > 1 else 1
c = sqlite3.connect('f.sqlite'); D = zstandard.ZstdDecompressor()
rows = c.execute("select PosX,PosZ,MinY,Data,Mapping from FullData where DetailLevel=?", (LV,)).fetchall()
xs = [r[0] for r in rows]; zs = [r[1] for r in rows]
X0, Z0 = min(xs), min(zs); W = (max(xs) - X0 + 1) * 64; H = (max(zs) - Z0 + 1) * 64
topY = np.full((H, W), -9999, np.int16); blk = np.full((H, W), -1, np.int32)
gid = {}

def vread(b, p):
    v = s = 0
    while True:
        x = b[p]; p += 1; v |= (x & 127) << s; s += 7
        if x < 128: return v, p

bad = 0
COLS = [(x, z) for x in range(1, 63) for z in range(1, 63)]
for px, pz, miny, data, mp in rows:
    d = D.decompress(data, max_output_size=80_000_000); m = D.decompress(mp, max_output_size=80_000_000)
    n = struct.unpack('>i', m[:4])[0]; p = 4; loc = []
    for i in range(n):
        l = struct.unpack('>H', m[p:p + 2])[0]; s = m[p + 2:p + 2 + l].decode('utf8', 'replace'); p += 2 + l
        if s not in gid: gid[s] = len(gid)
        loc.append(gid[s])
    AIR = {v for k, v in gid.items() if k.endswith('_DH-BSW_AIR') or 'minecraft:air' in k or 'cave_air' in k or 'void_air' in k or k.endswith(('minecraft:barrier', 'minecraft:light', 'minecraft:structure_void')) or '_STATE_' in k and k.split('_DH-BSW_')[1].split('_STATE_')[0] in ('minecraft:barrier', 'minecraft:light', 'minecraft:structure_void')}
    p = 0; cnt = []
    for _ in COLS: v, p = vread(d, p); cnt.append(v)
    ids = []
    for k in cnt:
        a = []
        for _ in range(k): v, p = vread(d, p); a.append(v)
        ids.append(a)
    hs = []
    for k in cnt:
        a = []
        for _ in range(k): v, p = vread(d, p); a.append(v)
        hs.append(a)
    prev = 0; bys = []
    for ci, k in enumerate(cnt):
        a = []
        for i in range(k):
            err = 0
            if ids[ci][i] & 1:
                v, p = vread(d, p); err = (v >> 1) ^ -(v & 1)
            by = prev - hs[ci][i] + err; a.append(by); prev = by
        bys.append(a)
    p += sum(1 for a in ids for e in a if e & 2)
    if p != len(d): bad += 1
    for ci, (x, z) in enumerate(COLS):
        for i in range(cnt[ci]):
            bid = loc[ids[ci][i] >> 2]
            if bid in AIR: continue
            gx = (px - X0) * 64 + x; gz = (pz - Z0) * 64 + z
            topY[gz, gx] = miny + bys[ci][i] + hs[ci][i]; blk[gz, gx] = bid
            break
print('sections', len(rows), 'bad', bad, 'size', W, H, 'origin blocks', X0 * 64 * (2 ** LV), Z0 * 64 * (2 ** LV), 'blocks', len(gid))
np.save('topY.npy', topY); np.save('blk.npy', blk)
json.dump({'X0': X0, 'Z0': Z0, 'LV': LV, 'names': sorted(gid, key=gid.get)}, open('meta.json', 'w'))
v = topY[topY > -9999]; print('y range', v.min(), v.max(), 'filled', len(v) / topY.size)
