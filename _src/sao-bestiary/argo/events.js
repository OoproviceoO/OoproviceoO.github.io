/* Limited-time events shown on the site. Source: official news (saominecraft.com/news), facts only, text rewritten in Chinese.
   dungeons: event dungeons listed first in the 地下城 tab on every floor (no coordinates yet: the announcement has none).
   eqPatch: balance changes announced in the news before the official item catalogue is updated
            (only items whose name AND "before" values match the catalogue; user 2026-11-05: 公告有調整就先修，不用等圖鑑).
   Keep item / monster / NPC names in English as written in the announcement. */
window.SAO_EVENTS = {
 dungeons: [{
  id: "souls",
  n: "Sanctuary of Souls",
  zh: "萬聖節活動地下城",
  ev: "萬聖節活動（2026，11/5 01:00 台灣時間開始、11/15 結束）",
  src: { title: "Halloween: the Sanctuary of Souls opens its doors", url: "https://saominecraft.com/news/halloween-le-sanctuaire-des-ames-ouvre-ses-portes", date: "2026-11-04" },
  players: "1～4 人",
  bosses: [
   ["Cursed Valdor", "守在儀式法陣旁"],
   ["Skeleton Colossus", "等級 30，坐在王座上的最終首領，這次活動最強的敵人"]
  ],
  chest: ["每位玩家必得 萬聖節禮物（Halloween Gift）", "30% 機率得到 幽靈水晶（Spectral Crystal）（萬聖節轉蛋的免費貨幣；11/6 維護由 10% 提高）"],
  zones: [
   { n: "1", mobs: ["Blind Jaw", "Varagor", "Stonehorn"], leader: "Svarg the Ash Eater", frag: "靈魂碎片（Soul Shard）" },
   { n: "2", mobs: ["Hafu Demon", "Magic Demon", "Rogue Demon"], leader: "Warlock Imp", frag: "儀式靈質（Ritual Ectoplasm）" },
   { n: "3", mobs: ["Imp Minion", "Armored Imp", "Cursed Valdor"], leader: "the Archdemon", frag: "永恆之影（Eternal Shadow）" }
  ],
  fragRate: "一般惡魔 3%、菁英 8%、首領（Svarg、Warlock Imp）必掉、the Archdemon 掉 1～2 個。每個惡魔區只掉自己那一種碎片，三區都要去。",
  key: { n: "靈魂聖所鑰匙", npc: "Halloween Exchanger", where: "地下城告示牌旁邊", mats: [["靈魂碎片", 1], ["儀式靈質", 1], ["永恆之影", 1]], note: "進場時消耗" },
  loop: ["在三個惡魔區打出三種碎片", "到 Halloween Exchanger 換鑰匙，打通 Sanctuary of Souls", "寶箱有機率給 幽靈水晶，3 個可以抽一次萬聖節轉蛋", "轉蛋抽到 黑暗贈禮南瓜（Dark Gift Pumpkin），拿去 Halloween Forge 換武器"],
  forge: {
   npc: "Halloween Blacksmith",
   rows: [
    ["Flayed Blade", "戰士、刺客", 5, null],
    ["Butcher Cleaver", "戰士", 5, 10],
    ["Gore Parasite Greatsword", "戰士", 5, 10],
    ["Infernal Crucible", "戰士", 5, null],
    ["Blunderbuss of the Outer Gods", "弓箭手", 5, 10],
    ["Twinflame Scepter", "法師", 5, null],
    ["Staff of Wandering Souls", "法師", 5, 10],
    ["Scepter of the Risen Dead", "薩滿", 5, 8]
   ],
   extra: "Grappling Hook、Grappling Anchor（限弓箭手）各 3 個 黑暗贈禮南瓜。",
   lvNote: "需求等級是同一篇公告的平衡調整（原本都是 13）；Blunderbuss of the Outer Gods 的第 3 招傷害 20 → 5。另外 Archdemon Blade 需求等級 13 → 10。空白＝公告沒寫。"
  },
  // the game's Dungeons window (owner's screenshots 2026-11-05 19:06): same block as the floor dungeons (dgInfoHTML)
  dg: { date: "2026-11-05", boss: "Skeleton Colossus", bossZh: "骷髏巨像", key: "靈魂聖所鑰匙（Key to the Sanctuary of Souls；遊戲寫在「Board - Sanctuary of Souls」製作）",
        modes: ["Easy", "Initiate", "Hard", "Integrity"],
        easy: [["時間限制", "60 分鐘"], ["失敗時", "送回原處（Sent back if you fall）"], ["人數", "1～4 人"], ["建議等級", "13 級以上"], ["最快紀錄", "2:02"]],
        loot: [["Skeletal Sword", "Skeleton Warrior", 0.5], ["回響鬼火", null, 1], ["幽靈水晶", null, 30], ["Bone Dust", "Skeleton Warrior", 70], ["Skeleton Bone", "Skeleton Warrior", 75], ["Soul of the Ruins", "Skeleton Warrior", 80], ["萬聖節禮物", null, 100]] },   // 2026-11-13: game window (owner 11/12 21:28): 7 items; Skeleton Bone 75% (was 15%)
  notes: ["11/6 維護（官方公告〈Halloween: fixes, balancing and a new weapon exchange〉）：Skeleton Colossus 生命 10,000 → 5,000、傷害 45 → 35，打擊範圍變大、不再鎖畫面；Cursed Valdor（3,000 → 2,100）和 the Archdemon（1,000）的生命和傷害少 30%，其他萬聖節惡魔也變弱；6 個萬聖節終極技能卷軸冷卻 8 小時 → 1 小時；Halloween Forge 買之前會顯示武器完整數值。",
          "新 NPC Halloween Weapon Merchant（在 Halloween Exchanger 旁邊）：舊的萬聖節武器 1 把＋黑暗贈禮南瓜 2 個（原本要 5 個）換一把自己職業的 Forge 新武器。",
          "活動期間（官方 Discord）：11/4 晚上 6 點巴黎時間（台灣 11/5 01:00）開放 Backrooms 和免費碎片；轉蛋、Echoes of Aincrad 戰鬥夥伴、裝備兌換、新怪物區和地下城在之後幾小時逐步開放；活動 11/15 結束。因伺服器停機兩天延後，補償：兌換碼 OVH2029（2,000 Triggiums）、Heroic Pass 延長 5 天、十月終極技能包延長 2 天。","Title: Pumpkin King（稱號）：戴著時 +15 生命、+3 防禦；使用後在稱號選單解鎖，已經有的不要再用（拍賣場提示，站長 2026-11-05 截圖）。",
          "活動廣場在起始之城的競技場，約 X 1760 · Z 4275（站長 11-12 截圖推算：站在 X 1771 Z 4275 往西看，NPC 和轉蛋機台都在西邊約 8～12 格；只有一個方向的截圖，約 ±5 格）：Shard Keeper（右鍵領每日碎片）、Halloween Exchanger（Échangeur d'Halloween）、Halloween Blacksmith、Echoes of Aincrad 和 Sanctuary of Souls 的入口告示牌（右鍵進入地下城）都在這一帶。",
          "Cursed Jewel（糖果）：30 分鐘內 HP +15、防禦 +5、魔法傷害 +5%；所有 Reapkin 糖果共用 60 秒冷卻。",
          "Reapkin King's Lollipop（糖果）：30 分鐘內攻擊傷害 +8%、魔法傷害 +6%、HP +15、速度 +0.03；所有 Reapkin 糖果共用 60 秒冷卻。道具分頁也查得到。",
          "永恆之影：三種鑰匙碎片之一，說明寫「三個合起來在地下城告示牌鍛造鑰匙」。幽靈水晶：萬聖節之夜迷失靈魂起舞的水晶（轉蛋貨幣）。",
          "女巫的魔法書（Witch's Grimoire，萬聖節轉蛋）＝「萬聖節魔法大釜配方」，共 10 種（站長 2026-11-08 截圖）：一開始就會 Ember Elixir、Mine Glow、Sylvan Harmony 三種，其他 7 種要找到配方卷軸，書上的線索（本站改寫）是：廢墟的幽靈、沼澤的巨大史萊姆、狗頭人領主王座後面的洞穴、高地的雄鹿、墮落者迷宮區裡的聲音、冰霜元素看守的冰中卷軸、Geldorack 地底的石封卷軸。魔法大釜每小時充能 1 次、最多存 1 次。Mine Glow：礦石的光會透出岩石（24 格內），加上夜視，持續 3 分鐘。"],
  soon: ["現有武器升級成第 2 層版本：公告寫「明天晚上」開放（法國時間 11/5 晚上），要先通關第 2 層才能用，NPC 會一直在，不用急。",
         "舊的萬聖節武器換成新武器：同樣是「明天晚上」開放。"]
 }],
 eqPatch: {
  src: { title: "Halloween: the Sanctuary of Souls opens its doors", url: "https://saominecraft.com/news/halloween-le-sanctuaire-des-ames-ouvre-ses-portes", date: "2026-11-04" },
  items: {
   "1484": { en: "Corrupted Mask", set: { "Max Health": -20, "Skill Damage": 3, "Critical Strike Chance": 3, "Critical Strike Power": 3, "Skill Critical Strike Chance": 3, "Skill Critical Strike Power": 3, "Weapon Damage": 3 },
             note: "公告寫的調整前數值是 5（HP −50 相同），官網圖鑑是 10；調整後的數值以公告為準。" },
   "1405": { en: "Necromancer's Mask", set: { "Max Health": 45, "Defense": 10 } },
   "1406": { en: "Lunar Dragon Mask", set: { "Max Health": 45, "Defense": 10, "Critical Strike Chance": 0, "Skill Critical Strike Power": 5 } },
   "1508": { en: "Simple Boots", set: { "Magic Damage": -15, "Physical Damage": -15, "Projectile Damage": -15 } },
   "1509": { en: "Superior Boots", set: { "Magic Damage": -20, "Physical Damage": -20, "Projectile Damage": -20 } },
   "1511": { en: "Explorer's Boots", set: { "Magic Damage": -25, "Physical Damage": -25, "Projectile Damage": -25 } }
  },
  unmatched: "Lostvayne、Rhitta、Wild Gloves、Amethyst Boots、Ancient Wood Catalyst、Ancient Wood Lantern 也有調整，但官網圖鑑找不到名稱和調整前數值都對得上的物品（可能是不同階段的版本），先不改。"
 }
};
