/* World bosses and unique monsters.
   Sources (fetched 2026-10-30):
   - saominecraft.com/world-boss (official bestiary: level, entry, schedule, rewards, attacks, weak point, phases)
   - model renders img/bosses/*.webp: the bestiary's 「See up close」 window (/da/bestiary/<id>-34.webp and -face.webp, uploaded 2026-11-05),
     cropped to the model and resized to 520px tall; they replace the emblem pictures used before
   - saominecraft.wiki.gg/wiki/World_Boss and /wiki/Unique_Monsters (how to access, wiki-listed bosses, UNIT levels)
*/
window.SAO_BOSSES = {
  world: [{
    id: "galiath", img: "img/bosses/galiath-34.webp", imgFront: "img/bosses/galiath-face.webp",
    name: "Galiath, the Four-Armed Colossus", fr: "Galiath, le Colosse aux Quatre Bras", zh: "四臂巨像 Galiath",
    desc: "被關在競技場裡的四臂巨像。需要整隊人一起打的團隊戰。",
    level: 12, price: 5000, maxPlayers: 2,
    schedule: [
      { day: 3, time: "23:00", zone: "Europe/Paris", minutes: 60 },
      { day: 5, time: "22:00", zone: "America/New_York", minutes: 60 },
      { day: 0, time: "19:00", zone: "Europe/Paris", minutes: 60 },
      { day: 0, time: "23:00", zone: "America/Los_Angeles", minutes: 60 }
    ],
    guaranteed: "250 珂爾（每位玩家）",
    rolls: 1,
    // the game's queue sign (owner's screenshot 2026-11-05 20:51, auction-house tooltip): odds changed and 3 new rewards since the
    // official page was fetched (2026-10-30); the site shows the game's list and keeps the official one in roulette0
    roulette: [
      ["Colossus Fragments ×3", "Fragments du Colosse ×3", 45],
      ["1,000 Cols purse", "Bourse de 1 000 Cols", 31],
      ["Galiath's Core", "Noyau de Galiath", 5],
      ["Colossus Helmet", "Casque du Colosse", 3],
      ["Colossus Pavise（盾牌）", "Pavois du Colosse", 5],
      ["500 Triggiums", "500 Triggiums", 5],
      ["Colossus Left Blade", "Lame Senestre du Colosse", 2],
      ["Colossus Right Blade", "Lame Dextre du Colosse", 2],
      ["Four-Armed Halberd", "Hallebarde aux Quatre Bras", 1],
      ["Galiath's Axe", "Hache de Galiath", 1]
    ],
    rouletteSrc: "遊戲裡的排隊告示（站長截圖 2026-11-05）",
    queue: 20,
    roulette0: [
      ["Colossus Fragments ×3", "Fragments du Colosse ×3", 40],
      ["1,000 Cols purse", "Bourse de 1 000 Cols", 27],
      ["Galiath's Core", "Noyau de Galiath", 15],
      ["Colossus Pavise（盾牌）", "Pavois du Colosse", 7],
      ["500 Triggiums", "500 Triggiums", 5],
      ["Four-Armed Halberd", "Hallebarde aux Quatre Bras", 4],
      ["Galiath's Axe", "Hache de Galiath", 2]
    ],
    attacks: [
      ["Thrust（突刺）", "快速往正前方刺一劍。"],
      ["Cleave（橫劈）", "長戟往前方範圍掃兩次。"],
      ["Maelstrom（漩渦）", "四隻手都拿著武器往前旋轉衝刺。"],
      ["Ascension（升空）", "升到空中停留，再砸向目標並造成衝擊波。"],
      ["Guard and riposte（格擋反擊）", "舉起大盾，放下時反擊。"]
    ],
    weakness: "胸口中央的核心只在「漩渦」和「升空」時打開；這時打中會造成三倍傷害，還可能讓牠倒地。",
    access: "要先在破碎的地下世界（Fractured Underworld）用 Cardinal Relay 的 System Creation 做出「World Boss Altar」，再於每週開放時段參加（wiki）。"
  }],
  unique: [{
    id: "seraphel", img: "img/bosses/seraphel-34.webp", imgFront: "img/bosses/seraphel-face.webp",
    name: "UNIT-01 — Seraphel, the Fallen Arbiter", fr: "Seraphel, le Séraphin du Jugement", zh: "墮落的仲裁者 Seraphel",
    unit: "UNIT-001", floor: 1, level: 5, levelSrc: "wiki", available: true,
    attacks: [
      ["Teleport strike（瞬移斬）", "消失後出現在目標面前攻擊。"],
      ["Heavenly Judgement（天之審判）", "升空後打擊遠處的一名玩家。"],
      ["Divine Aegis（神聖之盾）", "血量低於 70% 時展開，必須打破的聖盾。"],
      ["Resonance of Order（秩序共鳴）", "打中周圍所有人的波動。"],
      ["Chains of Verdict（審判之鍊）", "第二階段：用鎖鏈抓住逃跑的人。"],
      ["Distorted Judgement（扭曲審判）", "第二階段：連續三次從天而降的打擊。"]
    ],
    phases: "血量低於 50% 時變成扭曲形態，並回復 40% 血量。",
    note: "官方網站沒有寫等級和出現方式。wiki 的獨特怪物表列出 UNIT-001：第 1 層、等級 5、已開放，應該就是這隻（官方名稱是 UNIT-01）。"
  }],
  uniqueRules: [
    "名稱前綴都是「UNIT」，由腐化的 Cardinal System 派出。",
    "不會在地圖上閒晃；要滿足隱藏條件才會出現，例如抵達樓層的特定隱藏地點、照順序打倒一連串敵人、完成秘密任務或找到稀有道具、和其他玩家一起進行儀式。",
    "戰敗會被施加減益效果，有些是暫時的，有些是永久的。",
    "打倒後可以拿到只有牠才會掉的裝備，並替全伺服器解鎖新區域，名字也會登上排行榜。"
  ],
  uniqueWiki: [
    ["UNIT-001", 1, 5, 3, "已開放"],
    ["UNIT-002", 2, 10, 4, "未開放"],
    ["UNIT-003", 3, 15, 5, "未開放"]
  ],
  wikiWorld: [
    ["Fatal Scythe", "15+", "Medium"],
    ["Gleam Eyes", "20+", "Hard"],
    ["Skull Reaper", "30+", "Extreme"],
    ["Administrator", "35+", "Extreme"],
    ["Heathcliff", "40+", "Extreme"]
  ]
};
