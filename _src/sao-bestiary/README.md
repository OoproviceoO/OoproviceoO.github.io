# 艾恩葛朗特圖鑑：原始檔

網站本體是 `../../sao-bestiary/index.html`，由這裡的 `template.html` + 資料產生。

- `template.html`：頁面原始碼（樣式、程式都在這）
- `build.py`：把資料塞進 template，產生 index.html
- `mobs.v2.json` 怪物、`equip.json` 裝備、`eo_points.json` 地點／配方／商店、`main_zh.json` `side_zh.json` 任務、`dungeons_zh.json` 地城
- `build_eo.py` `merge_mobs.py` `annot.py`：從 EXILED ORDER 資料（raw/eo）轉成中文資料
- `icons2.py` `icons3.py`：抓道具圖示；`icon_map.json` `atlas.json` 是圖示對照
- `dh/dec.py` `dh/colors.py`：讀 Distant Horizons 的 DistantHorizons.sqlite 做第 1 層地形高度（height-1.png）

以後要改：改 template.html 或資料 → `python3 build.py` → 把 index.html 複製到 sao-bestiary/。

## 阿爾戈的攻略本（2026/11/27 加入）
- `argo/`：從 cheng-1001.github.io/ArgoStrategyGuide 下載的資料檔（官方中文名 zhnames.js、收購價 buyback.js、世界王 bosses.js、職業 classes.js）
- `rename.py` → `rename.json`：舊翻譯 → 遊戲官方中文；舊名在網頁上當搜尋別名
- `argo_merge.py`：在 build_eo.py 之後執行，補收購價、產生 argo_data.json（世界王、職業、別名）
- 順序：build_eo.py → argo_merge.py → build.py
