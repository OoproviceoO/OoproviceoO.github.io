
// ===== 物品欄（版面參考 aincradmap.app 的物品欄；資料是我們自己的） =====
const RAR_ORDER = ['普通', '罕見', '稀有', '史詩', '傳說', '神話', '季節限定', ''];
const WEAPON_C = {'劍': '戰士', '盾牌': '戰士', '匕首': '刺客', '弓': '弓箭手', '弩': '弓箭手', '法師法杖': '法師', '觸媒': '薩滿', '薩滿法杖': '薩滿', '副手': ''};
const INV_GROUPS = [
  ['裝備', [['武器', '⚔️'], ['防具', '🛡️'], ['飾品', '💍'], ['符文與強化', '🔷']]],
  ['消耗品', [['藥水與水晶', '🧪'], ['強化劑', '⚗️'], ['高品質消耗品', '✨'], ['食物', '🍖'], ['修理', '🔨'], ['卷軸', '📜'], ['外觀與票券', '🎟️'], ['Col 袋', '💰']]],
  ['材料與工具', [['怪物素材', '🦴'], ['木材與礦物', '🪵'], ['工具', '⛏️'], ['其他', '📦']]]];
const cleanPrice = s => String(s || '').replace(/\s*\(se compra\)/, '').replace(/(\d),(\d)/g, '$1.$2');
let _inv = null;
function invDB() {
  if (_inv) return _inv;
  const db = {};
  const get = n => (db[n] ||= {n, rar: '', lv: 0, sub: '', cls: '', stats: [], buy: [], craft: [], drops: [], sell: [], used: []});
  EQ.forEach(e => { const x = get(e.n); x.eq = e; x.rar = e.r; x.lv = e.lv; x.sub = e.sub || e.c; x.cls = WEAPON_C[e.c] || '';
    if (e.d) x.stats.push(['傷害', e.d]); if (e.s) x.stats.push(['攻擊速度', e.s]);
    String(e.b || '').split(/[、,，]\s*/).filter(Boolean).forEach(b => { const m = b.match(/^([+\-−]?[\d.]+%?)\s*(.+)$/); x.stats.push(m ? [m[2], m[1]] : [b, '']); }); });
  EO.forEach(p => (p.items || []).forEach(i => { const x = get(i.n), r = i.r || {};
    if (r.rar && !x.rar) x.rar = r.rar; if (r.lv && !x.lv) x.lv = +r.lv || 0;
    const bought = /se compra/.test(r.cost || '') || (!r.mats || !r.mats.length) && (r.cost || i.price);
    if (bought) x.buy.push({p, price: cleanPrice(r.cost || i.price)});
    else if (i.r) x.craft.push({p, r});
    if (r.stats && r.stats.length && !x.stats.length) r.stats.forEach(s => { const m = String(s).match(/^([+\-−]?[\d.,]+%?)\s*(.+)$/); x.stats.push(m ? [m[2], m[1]] : [s, '']); });
    (r.mats || []).forEach(([m]) => { const y = get(m); if (!y.used.includes(i.n)) y.used.push(i.n); }); }));
  Object.values(ITEMS).forEach(it => { get(it.name).drops = it.src; });
  EO.forEach(p => (p.buy || []).forEach(b => get(b.n).sell.push({p, price: b.price})));
  Object.values(db).forEach(x => { x.cat = invCat(x); });
  return (_inv = db);
}
function invCat(x) {
  const n = x.n;
  if (x.eq) { const c = x.eq.c; return c === '飾品' ? '飾品' : c === '護甲' ? '防具' : '武器'; }
  if (/頭盔|胸甲|護腿|靴$|之靴/.test(n)) return '防具';
  if (/符文/.test(n) && !/卷軸/.test(n)) return '符文與強化';
  if (/品質|優質/.test(n)) return '高品質消耗品';
  if (/強化劑/.test(n)) return '強化劑';
  if (/藥水|乳白靈藥|復活水晶|支援水晶|力量水晶|治療水晶|耐力水晶|魔力水晶/.test(n)) return '藥水與水晶';
  if (/肉|湯|料理|麵包|燉|烤|食譜/.test(n)) return '食物';
  if (/修理/.test(n)) return '修理';
  if (/卷軸/.test(n)) return '卷軸';
  if (/票券|代幣|通行證|外觀/.test(n)) return '外觀與票券';
  if (/錢袋|col 袋|Col 袋/i.test(n)) return 'Col 袋';
  if (/十字鎬|之斧$|斧$|鋤$|鎬$/.test(n)) return '工具';
  if (/木板|木屑|細繩|錠|粉末|原木|礦|木材/.test(n)) return '木材與礦物';
  if (x.drops.length) return '怪物素材';
  return '其他';
}
const invAll = () => Object.values(invDB());
function renderInvHome() {
  const all = invAll(), q = norm(state.q);
  if (q) return renderInvList(all.filter(x => match(q, x.n, x.sub, ...x.stats.map(s => s[0]))), `搜尋「${esc(state.q)}」`);
  return INV_GROUPS.map(([g, cats]) => { const n = all.filter(x => cats.some(([c]) => c === x.cat)).length;
    return `<section class="inv-g"><h2>${esc(g)}<small>${n}</small></h2><div class="inv-tiles">${cats.map(([c, ic]) => { const xs = all.filter(x => x.cat === c);
      if (!xs.length) return '';
      const pv = xs.slice().sort((a, b) => RAR_ORDER.indexOf(b.rar) - RAR_ORDER.indexOf(a.rar) || b.lv - a.lv).slice(0, 4);
      return `<button class="inv-tile" data-icat="${esc(c)}"><span class="inv-pv">${pv.map(x => `<span>${ICON_HTML(x.n)}</span>`).join('')}</span><span class="inv-tl"><b>${ic} ${esc(c)}</b><small>${xs.length}</small></span></button>`; }).join('')}</div></section>`; }).join('');
}
function renderInvList(rows, title) {
  const f = state.invF ||= {rar: {}, cls: {}, lv: {}};
  const cnt = (k, fn) => { const m = {}; rows.forEach(x => { const v = fn(x); if (v) m[v] = (m[v] || 0) + 1; }); return m; };
  const lvB = x => x.lv ? `Lv ${Math.floor((x.lv - 1) / 5) * 5 + 1}–${Math.floor((x.lv - 1) / 5) * 5 + 5}` : '';
  const groups = [['稀有度', 'rar', cnt('rar', x => x.rar), RAR_ORDER], ['職業', 'cls', cnt('cls', x => x.cls), ['戰士', '刺客', '弓箭手', '法師', '薩滿']], ['等級', 'lv', cnt('lv', lvB), null]];
  const on = (k, fn) => { const s = Object.keys(f[k]).filter(v => f[k][v]); return !s.length || s.includes(fn); };
  let vis = rows.filter(x => on('rar', x.rar) && on('cls', x.cls) && on('lv', lvB(x)));
  const sort = state.invSort || 'rar';
  vis.sort((a, b) => sort === 'lv' ? a.lv - b.lv || a.n.localeCompare(b.n, 'zh-Hant') : sort === 'name' ? a.n.localeCompare(b.n, 'zh-Hant') : RAR_ORDER.indexOf(a.rar) - RAR_ORDER.indexOf(b.rar) || a.lv - b.lv);
  const side = `<aside class="inv-side"><h3>${title}</h3><label class="inv-sort">排序<select id="invsort"><option value="rar" ${sort === 'rar' ? 'selected' : ''}>稀有度</option><option value="lv" ${sort === 'lv' ? 'selected' : ''}>等級</option><option value="name" ${sort === 'name' ? 'selected' : ''}>名稱</option></select></label>
    ${groups.map(([t, k, m, order]) => { const keys = Object.keys(m).sort((a, b) => order ? order.indexOf(a) - order.indexOf(b) : parseInt(a.slice(3)) - parseInt(b.slice(3)));
      return keys.length > 1 ? `<details class="inv-f" ${Object.values(f[k]).some(Boolean) ? 'open' : ''}><summary>${t}</summary>${keys.map(v => `<label><input type="checkbox" data-invf="${k}|${esc(v)}" ${f[k][v] ? 'checked' : ''}><span>${esc(v)}</span><small>${m[v]}</small></label>`).join('')}</details>` : ''; }).join('')}</aside>`;
  const byR = {}; vis.forEach(x => (byR[sort === 'rar' ? (x.rar || '未分類') : '全部'] ||= []).push(x));
  const grid = vis.length ? Object.entries(byR).map(([r, xs]) => `<div class="inv-rh"><span class="rar rar-${esc(r)}">${esc(r)}</span><small>${xs.length}</small></div><div class="inv-grid">${xs.map(x => `<button class="inv-c r-${esc(x.rar || 'none')} ${state.invSel === x.n ? 'sel' : ''}" data-invsel="${esc(x.n)}"><span class="inv-ic">${ICON_HTML(x.n)}</span><b>${esc(x.n)}</b>${x.lv ? `<small>Lv ${x.lv}</small>` : '<small>&nbsp;</small>'}</button>`).join('')}</div>`).join('')
    : `<div class="empty"><h3>沒有符合條件的物品</h3><p><button class="addr" data-invclear="1">清除篩選</button></p></div>`;
  const sel = state.invSel && invDB()[state.invSel];
  return `<div class="inv"><div class="inv-top"><button class="addr" data-icat="">← 物品欄</button><span class="count">${vis.length} 個</span></div>${side}<div class="inv-main">${grid}</div>
    <div class="inv-det ${sel ? 'open' : ''}">${sel ? invDetail(sel) : '<p class="todo" style="text-align:center;padding:40px 16px">點左邊的物品看詳情</p>'}</div></div>`;
}
function invDetail(x) {
  const loc = p => `${o3d(p.f, p.xyz)}`;
  const src = [
    ...x.buy.map(b => `<div class="src"><span class="tag t-buy">購買</span><b>${esc(b.p.n)}</b><span class="k">${esc(b.price)}</span><div class="eq-stat">第 ${b.p.f} 層 · ${esc(b.p.xyz)} ${loc(b.p)}</div></div>`),
    ...x.craft.map(c => `<div class="src"><span class="tag t-craft">製作</span><b>${esc(c.p.n)}</b><span class="k">${esc(c.r.cost || '')}${c.r.time ? ' · ' + esc(c.r.time) : ''}</span>
      <div class="mats">${c.r.mats.map(([m, q]) => `<button class="mat" data-invsel="${esc(m)}"><span class="mic">${ICON_HTML(m)}</span>${esc(m)} ×${q}</button>`).join('')}</div>
      <div class="eq-stat">第 ${c.p.f} 層 · ${esc(c.p.xyz)} ${loc(c.p)} <button class="addr" data-recipe="${esc(x.n)}">＋ 材料加入清單</button></div></div>`),
    ...x.drops.map(d => `<div class="src"><span class="tag t-drop">掉落</span><b>${esc(d.m.n)}</b><span class="k">${esc(d.p)}</span><div class="eq-stat">第 ${d.m.f} 層 · ${esc(d.m.zona || '')} ${mobPoints(d.m).length ? `<button class="o3d" data-mobmap="${MOBS.indexOf(d.m)}">📍 地圖</button>` : ''}</div></div>`)];
  return `<button class="inv-x" data-invsel="" aria-label="關閉">×</button>
    <div class="inv-hero r-${esc(x.rar || 'none')}"><span class="inv-big">${ICON_HTML(x.n)}</span><h2>${esc(x.n)}</h2>
      ${ALIAS[x.n] ? `<div class="en">以前寫作：${ALIAS[x.n].map(esc).join('、')}</div>` : ''}
      <div class="chips2">${x.lv ? `<span>Lv ${x.lv}</span>` : ''}${x.rar ? `<span class="rar rar-${esc(x.rar)}">${esc(x.rar)}</span>` : ''}${x.cls ? `<span>${esc(x.cls)}</span>` : ''}<span>${esc(x.sub || x.cat)}</span></div>
      <div style="margin-top:10px">${list[x.n] ? '<span class="mini">已在清單</span>' : `<button class="add" data-add="${esc(x.n)}">＋ 加入清單</button>`}</div></div>
    ${x.stats.length ? `<section class="inv-sec"><h4>數值</h4><div class="stat-t">${x.stats.map(([k, v]) => `<div><span>${esc(k)}</span><b class="${/^[-−]/.test(v) ? 'neg' : ''}">${esc(v)}</b></div>`).join('')}</div></section>` : ''}
    <section class="inv-sec"><h4>取得方式</h4>${src.length ? src.join('') : '<p class="todo">還沒有取得方式的資料。</p>'}</section>
    ${x.sell.length ? `<section class="inv-sec"><h4>誰會收購</h4>${x.sell.map(s => `<div class="src"><span class="tag t-sell">收購</span><b>${esc(s.p.n)}</b><span class="k">${esc(s.price)}</span><div class="eq-stat">第 ${s.p.f} 層 ${loc(s.p)}</div></div>`).join('')}</section>` : ''}
    ${x.used.length ? `<section class="inv-sec"><h4>用來做 · ${x.used.length}</h4><div class="mats">${x.used.map(u => `<button class="mat" data-invsel="${esc(u)}"><span class="mic">${ICON_HTML(u)}</span>${esc(u)}</button>`).join('')}</div></section>` : ''}`;
}
function renderInv() {
  if (state.icat === undefined) state.icat = '';
  if (!state.icat) return renderInvHome();
  return renderInvList(invAll().filter(x => x.cat === state.icat && (!state.q || match(norm(state.q), x.n, x.sub, ...x.stats.map(s => s[0])))), state.icat);
}
