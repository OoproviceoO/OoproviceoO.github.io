# 麻將算錢 — 維護說明

網頁版 + PWA + Android APK，後端用 Firebase。

| 項目 | 位置 |
|---|---|
| 網頁版 | https://ooproviceoo.github.io/mahjong/ |
| 介紹頁 | https://ooproviceoo.github.io/tools/mahjong.html |
| 原始碼 | repo `OoproviceoO/OoproviceoO.github.io` |
| Firebase 專案 | `piaoyang-mahjong`（Spark 免費方案） |
| 管理員帳號 | ooproviceoo@gmail.com |

---

## 一、檔案位置

```
OoproviceoO.github.io/
├── .nojekyll                  ← 空檔案，讓 .well-known 能被發佈
├── index.html                 首頁
├── assets/style.css           全站樣式
│
├── .well-known/
│   └── assetlinks.json        APK 的網域驗證（PWABuilder 產生）
│
├── downloads/
│   └── mahjong.apk            手機程式
│
├── tools/
│   ├── mahjong.html           介紹頁
│   └── youtube-downloader.html
│
└── mahjong/                   程式本體
    ├── index.html             全部的程式都在這一個檔案裡
    ├── manifest.json          App 名稱、圖示、顏色
    ├── sw.js                  離線快取
    └── icons/
        ├── icon-192.png
        ├── icon-512.png
        ├── icon-maskable-512.png
        └── apple-touch-icon.png
```

---

## 二、改版流程

### 只改程式內容（最常見）

1. 改 `mahjong/index.html`
2. **把 `mahjong/sw.js` 裡的 `VER` 加一**（`mj-v3` → `mj-v4`）
3. 上傳，兩個檔案都要傳

網頁版、已經「加到主畫面」的 PWA、**還有 APK**，全部會自動更新。
因為 APK 裡面裝的其實就是你的網頁，不是程式碼副本。

> **忘記改 `VER` 的話**，使用者會一直看到舊版，
> 因為離線快取認版本號決定要不要重抓。這是最容易忘的一步。

### 改了圖示或 App 名稱

除了上面三步，還要重新打包 APK（見第四節），因為那些資訊寫死在 APK 裡。

---

## 三、Firebase

### 資料長什麼樣

```
users/{uid}          （目前沒實際用到，保留給之後擴充）

tickets/{proof}      proof = sha256(代碼 + "::" + 密碼)
  └ code: "K7M2QP"

tables/{代碼}
  ├ owner:   開桌者的 uid
  ├ members: [uid, uid, ...]
  ├ proof:   最後一次加入用的通行票
  ├ data:    整個遊戲狀態，JSON 字串
  ├ by:      最後寫入者的 uid
  └ createdAt / updatedAt
```

**為什麼 `data` 存成字串**：Firestore 不支援陣列裡面再放陣列，
而 `rounds[].seats` 正是這種結構。轉成 JSON 字串就繞過去了。

### 密碼是怎麼擋的

免費方案沒有後端可以驗密碼，所以改用文件名稱當密碼：

通行票的文件名是 `sha256(代碼::密碼)`，安全規則**只允許精確指名讀取、禁止列舉**。
不知道密碼就算不出那個名稱，也就叫不出文件。加入牌桌時必須附上通行票，
規則會去確認票裡的代碼對得上這一桌。

**限制**：擋得住不知道密碼的人，擋不住暴力嘗試（沒有次數限制）。
自家朋友記帳這個強度夠用，不適合放敏感資料。

### 安全規則

改規則的地方：Firebase 控制台 → Firestore Database → **規則** 頁籤 → 發布。
規則內容見 repo 裡的 `firestore.rules`（那個檔案只是備份，不會自動套用）。

---

## 四、重新打包 APK

只有改了圖示、App 名稱、`manifest.json` 才需要做。

1. 到 **pwabuilder.com**，輸入 `https://ooproviceoo.github.io/mahjong/`
2. 等它檢查，紅色錯誤要清零
3. **Package For Stores → Android**
4. **Package ID 千萬不要改**（目前是 `io.github.ooproviceoo.twa`）
   改了會被當成另一支 App，使用者得先移除舊的
5. Signing key 選 **Use mine**，上傳你備份的 `signing.keystore`
   （選 Create new 會產生新金鑰，一樣會變成另一支 App）
6. Generate → 下載 → 把 APK 換掉 `downloads/mahjong.apk`

> **`signing.keystore` 和 `signing-key-info.txt` 一定要留著。**
> 弄丟就永遠沒辦法更新，使用者只能移除重裝。

**不要按 PWABuilder 的「Generate Service Worker」**，會蓋掉自己寫的 `sw.js`。

---

## 五、程式結構

`mahjong/index.html` 裡有兩段 script：

**第一段（原本的程式）** — 所有狀態都在一個叫 `S` 的物件裡，
存在 localStorage 的 `mahjong-money-v2`。沒登入也能完整使用。

**第二段（雲端同步層）** — 用 ES module 寫的，做三件事：

1. 包住 `save()`，本機存完延遲 0.7 秒上傳
2. 收到別台的更新就覆蓋 `S` 並重繪
3. 帳號登入、開桌代碼、管理員

兩段是分開的。**雲端層壞掉或沒網路，本機功能完全不受影響。**

### 幾個關鍵點

| 位置 | 說明 |
|---|---|
| `S.exPlayers` | 刪掉的玩家搬到這裡，舊記錄才不會變問號 |
| `player(id)` | 先找現有名單，找不到再找 `exPlayers` |
| `mj-force-push` 事件 | 重大變更（歸零）時跳過延遲、立刻覆蓋雲端 |
| `snap.metadata.hasPendingWrites` | 用來過濾掉自己剛送出的更新，避免打架 |

### 已知限制

**兩台同時記局是後蓋前**，因為整份狀態一起同步。
實際上通常一個人記帳，不太會撞到。真要修的話得改成只同步新增的那一局。

---

## 六、常見狀況

| 狀況 | 原因／處理 |
|---|---|
| 改了程式但手機還是舊版 | `sw.js` 的 `VER` 忘了加一 |
| 雲端按鈕說沒權限 | Firestore 規則沒發布，或網域沒加進 Authentication 的授權網域 |
| 登入視窗跳出又關掉 | 瀏覽器擋彈出視窗 |
| APK 開起來有網址列 | `.well-known/assetlinks.json` 沒生效，確認 `.nojekyll` 存在 |
| 歸零後資料又回來 | 有連雲端。先刪掉那一桌再清 |
| 想完全清空重來 | 瀏覽器「網站設定 → 清除並重設」。有連雲端要先刪桌 |
| 儲存失敗說空間不足 | 照片頭像太多，換成動物頭像 |

---

## 七、還沒做的

- 玩家名單目前存在本機，換裝置要重建（`users/{uid}` 那個集合是留給這個的）
- 兩台同時記局的衝突處理
- APK 沒有上架 Google Play，只能自己傳檔案安裝
