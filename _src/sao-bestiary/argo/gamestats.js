/* In-game stats of equipment, from the owner's screenshots of the item "Specifications" popup (2026-11-04 evening; Skeleton accessories 2026-11-05 evening).
   The game shows the current values; the official item catalogue (equip.js, fetched 2026-10-31) is often older (reworked progression).
   Only items matched to the catalogue with high confidence (scratchpad map9.json). Keys use the catalogue stat names where they mean the same;
   values are the game's own text; r = rarity from the tooltip frame colour when it differs from the catalogue ("+5%", "1.2/s"). dmg = "Attack Damage". The site shows these and keeps the catalogue values in a note
   (user 2026-11-05: 裝備資料要照新上傳的截圖更新). */
window.SAO_GAMESTATS = {date:"2026-11-04", items:{
 // 2026-11-19 (in29, owner's Chinese craft-window tooltips 11/18～11/19). Same item as the catalogue: the description matches line by line and the
 // craft window's large icon has the same shape and colours as equip.png (comparison sheet scratchpad in29/crop_V/icons.png); the stats are the game's
 "2497":{"date": "2026-11-18", "en": "anneau de l'harpie noyé", "lvl": 12, "dmg": null, "st": [["Magic Damage", "+4.5%"], ["Spell Vampirism", "+3.5%"], ["Max Mana", "+2"]]},   // 溺水的鳥身女妖之戒 05.05.55
 "2498":{"date": "2026-11-18", "en": "anneau de l'harpie ecrasé", "lvl": 12, "dmg": null, "st": [["Cooldown Reduction", "+5%"], ["Block Rating", "+5%"], ["Max Health", "+8"]]},   // 被碾碎的鳥身女妖之戒 05.14.23
 "2499":{"date": "2026-11-18", "en": "anneau de ferraille", "lvl": 11, "dmg": null, "st": [["Critical Strike Chance", "+1.5%"], ["Skill Critical Strike Chance", "+1.5%"], ["Max Health", "+1.5"]]},   // 廢鐵戒指 05.19.40
 "1603":{"date": "2026-11-18", "en": "bracelet de ferraille", "lvl": 11, "dmg": null, "st": [["Critical Strike Power", "+1.5%"], ["Skill Critical Strike Power", "+1.5%"], ["Max Health", "+1.5"]]},   // 廢鐵手環 05.19.45
 "2049":{"date": "2026-11-18", "en": "gants de ferraille", "lvl": 11, "dmg": null, "st": [["Defense", "+2"], ["Max Health", "+1.5"]]},   // 廢鐵手套 05.19.48 (equip.png showed a wrong icon; the official model texture gantsferraille = game icon)
 "1485":{"date": "2026-11-18", "en": "pièce de ferraille", "lvl": 11, "dmg": "0.75", "st": [["Max Health", "+1.5"], ["Heal Bonus", "+1.5"]]},   // 廢鐵幣 05.19.55
 "1311":{"date": "2026-11-18", "en": "amulette de ferraille", "lvl": 11, "dmg": null, "st": [["Max Health", "+1.5"], ["Max Mana", "+1.5"], ["Max Stamina", "+1.5"]]},   // 廢鐵護符 05.19.59
 "2503":{"date": "2026-11-19", "en": "anneau de winnie", "lvl": 12, "dmg": "1", "st": [["Critical Strike Chance", "+2%"], ["Skill Critical Strike Chance", "+2%"], ["Max Health", "+5"]]},   // 維尼之戒 00.32.46 (MYTHIC, same as the catalogue)
 // 寒風項鍊 04.35.57 (auction tooltip): the auction cell's icon has the same shape and colours as equip.png #187 (scratchpad in29/cmp1304/icon_1304.png).
 // The red-and-white striped frame is the Christmas style (owner 2026-11-19), not MYTHIC: no "r", the catalogue rarity (COMMON) stays
 "1304":{"date": "2026-11-18", "en": "collier des vents froids", "lvl": 10, "dmg": "0.25", "st": [["Critical Strike Power", "+5%"], ["Health Regeneration", "+0.1/s"]], "auc": 1},   // 寒風項鍊
 // 2026-11-18 (in28, owner's Chinese screenshots 11/14): only the rarity differs. 1552 幽靈鬼火 tooltip frame EPIC (catalogue common; stats match);
 // 1831 被遺忘之墓鑰匙 tooltip frame and shop row EPIC (catalogue RARE)
 "1552":{"date": "2026-11-14", "en": "feu follet spectral", "lvl": null, "dmg": null, "st": null, "r": "a"},
 "1831":{"date": "2026-11-14", "en": "clé du tombeau oublié", "lvl": null, "dmg": null, "st": null, "r": "a"},
 // 2026-11-17 (in27, owner's Chinese tooltips 11/15～11/16). 1553: only the rarity differs (tooltip frame EPIC, catalogue common; stats match).
 // 2696 / 2702 / 2708 (forest tools, props): the tooltip says minimum level 18 (catalogue 1) and EPIC; 2025 is a rune (props)
 "1512":{"date": "2026-11-16", "en": "bottes du pionnier", "lvl": 16, "dmg": null, "st": [["Physical Damage", "-30%"], ["Magic Damage", "-30%"], ["Projectile Damage", "-30%"], ["Movement Speed", "+50%"]]},
 "2025":{"date": "2026-11-16", "en": "rune brumeuse", "lvl": null, "dmg": null, "st": [["Critical Strike Chance", "+2%"], ["Critical Strike Power", "+2%"], ["Weapon Damage", "+5%"], ["Stamina Regeneration", "-0.2/s"]]},
 "1553":{"date": "2026-11-15", "en": "cagoule du voleur", "r": "a", "lvl": 16, "dmg": null, "st": null},
 "2696":{"date": "2026-11-16", "en": "pioche de la forêt", "lvl": 18, "r": "a", "dmg": null, "st": null},
 "2702":{"date": "2026-11-16", "en": "houe de la forêt", "lvl": 18, "r": "a", "dmg": null, "st": null},
 "2708":{"date": "2026-11-16", "en": "hache de la forêt", "lvl": 18, "r": "a", "dmg": null, "st": null},
 // 2026-11-13 (in26, Chinese tooltips 11/13). 1554: only the rarity differs (tooltip frame EPIC, catalogue common; stats match). 2015 / 2010 are runes (props):
 // the site applies these to the props tab too (st = the game's values; catalogue values kept in the note)
 "2492":{"date": "2026-11-13", "en": "anneau du dard protecteur", "r": "s", "lvl": 12, "dmg": null, "st": [["Critical Strike Chance", "+5%"]]},
 "1646":{"date": "2026-11-13", "en": "catalyseur abeille", "r": "a", "lvl": 12, "dmg": null, "st": [["Magic Damage", "+3%"], ["Mana Regeneration", "+2/s"]]},
 "2496":{"date": "2026-11-13", "en": "anneau de l'harpie enflammé", "r": "a", "lvl": 12, "dmg": null, "st": [["Physical Damage", "+5%"], ["Lifesteal", "+2.5%"], ["Max Stamina", "+2"]]},
 "2483":{"date": "2026-11-13", "en": "ring of the reaper", "r": "s", "lvl": 9, "dmg": null, "st": [["Skill Damage", "+3%"], ["Max Health", "+3"], ["Max Mana", "+2"], ["Max Stamina", "+2"]]},
 "1554":{"date": "2026-11-13", "en": "masque du voleur", "lvl": 17, "dmg": null, "st": null, "r": "a"},
 "2015":{"date": "2026-11-13", "en": "rune du colosse", "r": "splus", "lvl": null, "dmg": null, "st": [["Physical Damage", "-5%"], ["Magic Damage", "-5%"], ["Defense", "+3"], ["Max Health", "+10"], ["Max Stamina", "+2"], ["Health Regeneration", "+0.4/s"]]},
 "1587":{"date": "2026-11-13", "en": "arc en améthyste", "r": "a", "lvl": 17, "dmg": "29.5", "st": [["Attack Speed", "1.2/s"]]},
 "2010":{"date": "2026-11-13", "en": "rune de noël", "lvl": 8, "dmg": null, "st": [["Lifesteal", "+1%"], ["Spell Vampirism", "+1%"], ["Max Mana", "+0.5"], ["Max Stamina", "+0.5"]]},
 // 2026-11-12 (in24, Chinese tooltips 11/9～11/12). 1547/1549/1551: the catalogue says common, the game's tooltip frame and craft window say EPIC (st null = catalogue stats, which match)
 "1448":{"date": "2026-11-09", "en": "bond of the sylve", "lvl": 5, "dmg": null, "st": [["Max Health", "+2"], ["Max Mana", "+1.5"], ["Max Stamina", "+1.5"], ["Heal Bonus", "+0.5"]], "r": "s"},
 "1453":{"date": "2026-11-09", "en": "gelatinous cloak", "lvl": 7, "dmg": null, "st": [["Cooldown Reduction", "+5%"], ["Max Health", "+3"], ["Heal Bonus", "+1"]]},
 "1572":{"date": "2026-11-09", "en": "herald's bow", "lvl": 9, "dmg": "18", "st": [["Attack Speed", "1.2/s"]]},
 "1371":{"date": "2026-11-09", "en": "casque du gardien", "lvl": 9, "dmg": null, "st": [["Defense", "+4"], ["Max Health", "+9"]]},
 "1309":{"date": "2026-11-10", "en": "collier runique", "lvl": 13, "dmg": null, "st": [["Skill Damage", "+2%"], ["Cooldown Reduction", "+5%"], ["Max Health", "+5"]]},
 "2586":{"date": "2026-11-09", "en": "bâton magique du nécromancien", "lvl": 14, "dmg": "29", "st": [["Attack Speed", "1/s"]]},
 "1607":{"date": "2026-11-09", "en": "bracelet mielleux", "lvl": 12, "dmg": null, "st": [["Max Health", "+3"], ["Heal Bonus", "+1.5"], ["Movement Speed", "+5%"]]},
 "1484":{"date": "2026-11-09", "en": "masque corrompu", "lvl": 14, "dmg": null, "st": [["Critical Strike Chance", "+3%"], ["Critical Strike Power", "+3%"], ["Skill Critical Strike Chance", "+3%"], ["Skill Critical Strike Power", "+3%"], ["Weapon Damage", "+3%"], ["Skill Damage", "+3%"], ["Max Health", "-20"]]},
 "1488":{"date": "2026-11-10", "en": "pièce d'onyx pur", "lvl": 14, "dmg": null, "st": [["Critical Strike Chance", "+4%"], ["Critical Strike Power", "+2%"], ["Defense", "+3"], ["Max Health", "+15"]]},
 "2074":{"date": "2026-11-12", "en": "gants féroce", "lvl": 17, "dmg": "10", "st": [["Attack Speed", "0.2/s"], ["Lifesteal", "+2%"], ["Spell Vampirism", "+1%"], ["Movement Speed", "+3.5%"]]},
 "1547":{"date": "2026-11-12", "en": "masque de la toile", "lvl": 16, "dmg": null, "st": null, "r": "a"},
 "1549":{"date": "2026-11-12", "en": "ceinture luminescente", "lvl": 16, "dmg": null, "st": null, "r": "a"},
 "1551":{"date": "2026-11-12", "en": "plume spectrale", "lvl": 16, "dmg": null, "st": null, "r": "a"},
 // level-only (st null = keep the catalogue's stats; 2026-11-07 merchant audit, tooltips' minimum level): Gelatinous Cloak 7 (catalogue 5), Bracelet of Ice 8 (catalogue 9)
 "1596":{"date": "2026-11-04", "en": "bracelet of ice", "lvl": 8, "dmg": null, "st": null},
 "1335":{"date": "2026-11-07", "en": "jambières du débutant", "lvl": 1, "dmg": null, "st": [["Max Health", "+1"]]},   // 新手護腿 中文提示 2026-11-07_15.01.53.png
 "1336":{"date": "2026-11-07", "en": "bottes du débutant", "lvl": 1, "dmg": null, "st": [["Max Health", "+1"]]},   // 新手之靴 中文提示 2026-11-07_15.01.58.png
 "2596":{"date": "2026-11-07", "en": "épée d’entraînement", "lvl": 1, "dmg": "2.5", "st": [["Attack Speed", "1.1/s"]]},   // 訓練用劍 中文提示 2026-11-07_15.02.02.png
 "1760":{"date": "2026-11-07", "en": "dague d'entraînement", "lvl": 1, "dmg": "3", "st": [["Attack Speed", "1.4/s"]]},   // 訓練用匕首 中文提示 2026-11-07_15.02.14.png
 "1761":{"date": "2026-11-07", "en": "faux d'entraînement", "lvl": 1, "dmg": "4.5", "st": [["Attack Speed", "0.9/s"], ["Skill Critical Strike Chance", "+0.5%"], ["Stamina Regeneration", "+0.05/s"]]},   // 訓練用巨鐮 中文提示 2026-11-07_15.02.20.png
 "1762":{"date": "2026-11-07", "en": "katana d'entraînement", "lvl": 1, "dmg": "3.5", "st": [["Attack Speed", "1.2/s"], ["Lifesteal", "+5%"], ["Dodge Rating", "+5%"], ["Movement Speed", "+15%"]]},   // 訓練用武士刀 中文提示 2026-11-07_15.02.24.png
 "2569":{"date": "2026-11-07", "en": "bâton magique d'entraînement", "lvl": 1, "dmg": "3.5", "st": [["Attack Speed", "1/s"]]},   // 訓練用魔杖 中文提示 2026-11-07_15.02.28.png
 "1626":{"date": "2026-11-07", "en": "grimoire délié", "lvl": 1, "dmg": null, "st": [["Max Mana", "+1"]]},   // 解縛魔法書 中文提示 2026-11-07_15.02.35.png
 "1627":{"date": "2026-11-07", "en": "lanterne d'entraînement", "lvl": 1, "dmg": null, "st": [["Magic Damage", "+1%"]]},   // 訓練用提燈 中文提示 2026-11-07_15.02.39.png
 "1628":{"date": "2026-11-07", "en": "grimoire sauvage", "lvl": 1, "dmg": null, "st": [["Heal Bonus", "+1"]]},   // 野性魔法書 中文提示 2026-11-07_15.02.43.png
 "2534":{"date": "2026-11-07", "en": "pavois d'entraînement", "lvl": 1, "dmg": null, "st": [["Defense", "+1"], ["Guard Durability", "8"], ["Max Health", "+8"], ["Movement Speed", "-5%"]]},   // 訓練用塔盾 中文提示 2026-11-07_15.02.58.png
 "2533":{"date": "2026-11-07", "en": "rondache d'entraînement", "lvl": 1, "dmg": "0.25", "st": [["Guard Durability", "4"], ["Max Health", "+4"]]},   // 訓練用圓盾 中文提示 2026-11-07_15.03.02.png
 "1569":{"date": "2026-11-07", "en": "sylvan bow", "lvl": 8, "dmg": "16", "st": [["Attack Speed", "1.2/s"], ["Critical Strike Chance", "+1%"]]},   // 森林之弓 中文提示 2026-11-07_15.06.03.png
 "1358":{"date": "2026-11-07", "en": "tunique du chasseur", "lvl": 7, "dmg": null, "st": [["Defense", "+3"], ["Max Health", "+15"]]},   // 獵人束衣 中文提示 2026-11-07_15.06.51.png
 "1359":{"date": "2026-11-07", "en": "hunter's leggings", "lvl": 7, "dmg": null, "st": [["Defense", "+2"], ["Max Health", "+9"]]},   // 獵人護腿 中文提示 2026-11-07_15.06.54.png
 "2485":{"date": "2026-11-07", "en": "ring of the leviathan", "r": "s", "lvl": 7, "dmg": "1", "st": [["Defense", "+3"], ["Max Health", "+5"]]},   // 利維坦之戒 中文提示 2026-11-07_15.07.08.png
 "2481":{"date": "2026-11-07", "en": "ring of the pact", "lvl": 10, "dmg": null, "st": [["Defense", "+2"], ["Max Health", "+3"], ["Max Mana", "+1"], ["Max Stamina", "+1"], ["Movement Speed", "+10%"]], "auc": 1},   // 契約之戒 拍賣場 2026-11-07_15.14.39.png
 "1487":{"date": "2026-11-07", "en": "pièce d'onyx impur", "lvl": 13, "dmg": "1.25", "st": [["Max Health", "+2.5"], ["Heal Bonus", "+2.5"]], "auc": 1},   // 不純黑瑪瑙幣 拍賣場 2026-11-07_15.16.51.png
 "1605":{"date": "2026-11-07", "en": "bracelet d’onyx impur", "lvl": 13, "dmg": null, "st": [["Critical Strike Power", "+2.5%"], ["Skill Critical Strike Power", "+2.5%"], ["Max Health", "+2.5"]], "auc": 1},   // 不純黑瑪瑙手環 拍賣場 2026-11-07_15.16.55.png
 "1598":{"date": "2026-11-07", "en": "bracelet de wolnir", "lvl": 10, "dmg": null, "st": [["Attack Speed", "0.2/s"]], "auc": 1},   // 沃爾尼爾手環 拍賣場 2026-11-07_15.19.07.png
 "1405":{"date": "2026-11-07", "en": "masque du necromancien", "lvl": 14, "dmg": null, "st": [["Skill Critical Strike Chance", "+5%"], ["Skill Critical Strike Power", "+5%"], ["Defense", "+10"], ["Max Health", "+45"]], "auc": 1},   // 死靈法師面具 拍賣場 2026-11-07_15.19.35.png
 "2620":{"date": "2026-11-07", "en": "epée déchue", "lvl": 10, "dmg": "14", "st": [["Attack Speed", "1.1/s"], ["Defense", "+3"]], "auc": 1},   // 墮落之劍 拍賣場 2026-11-07_15.20.45.png
 "1527":{"date": "2026-11-07", "en": "bottes noires", "lvl": 16, "dmg": null, "st": [["Skill Critical Strike Chance", "+10%"], ["Magic Damage", "+4.5%"], ["Damage Reduction", "-25%"], ["Max Mana", "+10"], ["Mana Regeneration", "+0.35/s"], ["Movement Speed", "+12.5%"], ["Sneaking Speed", "+250"]], "auc": 1},   // 黑靴 拍賣場 2026-11-07_15.20.48.png
 "1317":{"date": "2026-11-07", "en": "collier du gardien", "lvl": 13, "dmg": null, "st": [["Max Health", "+10"], ["Max Mana", "+2"], ["Max Stamina", "+2"], ["Mana Regeneration", "+0.2/s"], ["Stamina Regeneration", "+0.2/s"]], "auc": 1},   // 守護者項鍊 拍賣場 2026-11-07_15.20.55.png
 "1334":{"en": "beginner's tunic", "lvl": 1, "dmg": null, "st": [["Max Health", "+2"]]},
 "2482":{"en": "iron ring", "lvl": 5, "dmg": null, "st": [["Critical Strike Chance", "+1%"], ["Skill Critical Strike Chance", "+1%"], ["Max Health", "+1"]]},
 "1593":{"en": "iron bracelet", "lvl": 5, "dmg": null, "st": [["Critical Strike Power", "+1%"], ["Skill Critical Strike Power", "+1%"], ["Max Health", "+1"]]},
 "2042":{"en": "iron gloves", "lvl": 5, "dmg": null, "st": [["Defense", "+1.5"], ["Max Health", "+1"]]},
 "1457":{"en": "iron coin", "lvl": 5, "dmg": "0.5", "st": [["Max Health", "+1"], ["Heal Bonus", "+1"]]},
 "1297":{"en": "iron amulet", "lvl": 5, "dmg": null, "st": [["Max Health", "+1"], ["Max Mana", "+1"], ["Max Stamina", "+1"]]},
 "2477":{"en": "copper ring", "lvl": 3, "dmg": null, "st": [["Critical Strike Chance", "+0.5%"], ["Skill Critical Strike Chance", "+0.5%"], ["Max Health", "+0.5"]]},
 "1591":{"en": "copper bracelet", "lvl": 3, "dmg": null, "st": [["Critical Strike Power", "+0.5%"], ["Skill Critical Strike Power", "+0.5%"], ["Max Health", "+0.5"]]},
 "2039":{"en": "copper gloves", "lvl": 3, "dmg": null, "st": [["Defense", "+1"], ["Max Health", "+0.5"]]},
 "1452":{"en": "copper coin", "lvl": 3, "dmg": "0.25", "st": [["Max Health", "+0.5"], ["Heal Bonus", "+0.5"]]},
 "1290":{"en": "copper amulet", "lvl": 3, "dmg": null, "st": [["Max Health", "+0.5"], ["Max Mana", "+0.5"], ["Max Stamina", "+0.5"]]},
 "2545":{"en": "Forgotten Shield", "lvl": 9, "dmg": null, "st": [["Defense", "+5"], ["Guard Durability", "30"], ["Max Health", "+30"], ["Movement Speed", "-5%"]]},
 "1458":{"en": "necklace of aragorn", "lvl": 8, "dmg": "0.5", "st": [["Fall Damage Reduction", "+15%"], ["Dodge", "+5%"]]},
 "1566":{"date": "2026-11-07", "en": "training bow", "lvl": 1, "dmg": "3", "st": [["Attack Speed", "1.2/s"]]},   // auction tooltip 2026-11-04 19:22:26 + zh tooltip 11-07 15:02:05
 "1727":{"date": "2026-11-07", "en": "training crossbow", "lvl": 1, "dmg": "2", "st": [["Attack Speed", "1/s"], ["Skill Critical Strike Chance", "+0.5%"]]},   // zh tooltip 11-07 15:02:10
 "2480":{"date": "2026-11-07", "en": "ring of the wolf", "lvl": 3, "dmg": "0.25", "st": [["Max Stamina", "+0.5"]]},
 "2479":{"date": "2026-11-07", "en": "sticky ring", "r": "a", "lvl": 5, "dmg": null, "st": [["Defense", "+1"], ["Max Health", "+2"], ["Heal Bonus", "+1"]]},
"2478":{"en": "slimy ring", "lvl": 4, "dmg": null, "st": [["Max Health", "+1"], ["Max Mana", "+0.5"], ["Max Stamina", "+0.5"]]},
 "2616":{"en": "Royal Halberd", "lvl": 9, "dmg": "15", "st": [["Attack Speed", "1.2/s"], ["Skill Critical Strike Chance", "+1%"], ["Dodge", "+1.75%"], ["Movement Speed", "+25%"]]},
 "1779":{"en": "katana of the herald", "lvl": 9, "dmg": "18", "st": [["Attack Speed", "1.2/s"], ["Lifesteal", "+5%"], ["Dodge", "+5%"], ["Movement Speed", "+15%"]]},
 "2043":{"en": "gloves of the stags", "lvl": 7, "dmg": null, "st": [["Mana Regeneration", "+0.2/s"], ["Heal Bonus", "+0.5"]]},
 "1460":{"en": "belt of the stags", "lvl": 7, "dmg": null, "st": [["Ability Haste", "+5%"], ["Max Health", "+2"], ["Heal Bonus", "+0.5"]]},
 "2605":{"en": "Bone Sword", "lvl": 8, "dmg": "11", "st": [["Attack Speed", "1.1/s"], ["Health Regeneration", "+0.1/s"]]},
 "2540":{"en": "Sylvan Shield", "lvl": 8, "dmg": null, "st": [["Defense", "+4"], ["Guard Durability", "24"], ["Max Health", "+24"], ["Health Regeneration", "+0.1/s"], ["Movement Speed", "-5%"]]},
 "1451":{"date": "2026-11-07", "en": "belt of the boar", "lvl": 1, "dmg": null, "st": [["Max Health", "+2"]]},
 "1770":{"date": "2026-11-07", "en": "bandit's dagger", "lvl": 8, "dmg": "13.5", "st": [["Attack Speed", "1.4/s"], ["Critical Strike Chance", "+1%"]]},
 "2570":{"en": "Sylvan Mage Staff", "lvl": 3, "dmg": "12.604", "st": [["Attack Speed", "1/s"]]},
 "1594":{"en": "bracelet of the stags", "lvl": 7, "dmg": null, "st": [["Heal Bonus", "+1.5"]]},
 "1573":{"en": "nodachi bow ★", "lvl": 10, "date": "2026-11-05", "dmg": "18.75", "st": [["Attack Speed", "1.2/s"], ["Critical Strike Chance", "+3.5%"], ["Critical Strike Power", "+1%"]]},
 "2619":{"en": "nodachi", "lvl": 10, "dmg": "20", "st": [["Attack Speed", "1.25/s"], ["Critical Strike Chance", "+3.5%"], ["Lifesteal", "+1%"]]},
 "1784":{"en": "nodachi dagger", "lvl": 10, "dmg": "20", "st": [["Attack Speed", "1.4/s"], ["Critical Strike Chance", "+3.375%"], ["Lifesteal", "+1%"]]},
 "2576":{"en": "nodachi magic staff", "lvl": 10, "dmg": "19", "st": [["Attack Speed", "1/s"], ["Magic Damage", "+3%"], ["Max Mana", "+6.5"]]},
 "1462":{"en": "occult robe", "lvl": 10, "dmg": null, "st": [["Attack Speed", "0.05/s"], ["Dodge", "+2.5%"], ["Max Stamina", "+1"], ["Movement Speed", "+2.5%"]]},
 "2044":{"en": "gloves of the wolves", "lvl": 5, "dmg": null, "st": [["Critical Strike Chance", "+1%"], ["Lifesteal", "+2.5%"], ["Movement Speed", "+5%"]]},
 "1471":{"en": "crown of the solstice", "lvl": 10, "dmg": null, "st": [["Magic Damage", "+2%"], ["Ability Haste", "+5%"], ["Max Health", "+2"], ["Max Mana", "+1"], ["Max Stamina", "+1"]]},
 "1461":{"en": "occult skull", "lvl": 10, "dmg": null, "st": [["Skill Critical Strike Power", "+5%"], ["Magic Damage", "+2%"], ["Max Mana", "+1"]]},
 "2606":{"en": "Colossus Hammer", "lvl": 8, "dmg": "13", "st": [["Attack Speed", "0.9/s"], ["Skill Critical Strike Power", "+1.5%"], ["Defense", "+3"]]},
 "2546":{"date": "2026-11-07", "en": "shield of illfang", "lvl": 10, "dmg": "1.5", "st": [["Defense", "+7"], ["Guard Durability", "40"], ["Block Chance", "+3%"], ["Max Health", "+35"], ["Movement Speed", "-7%"]]},
 "2542":{"en": "magician's pavise", "lvl": 7, "dmg": null, "st": [["Defense", "+4"], ["Guard Durability", "20"], ["Max Health", "+20"], ["Movement Speed", "-5%"]]},
 "1380":{"en": "boots of the foam", "lvl": 5, "dmg": null, "st": [["深海漫遊 X", ""]]},
 "2098":{"en": "putrid shield", "lvl": 10, "dmg": null, "st": [["Defense", "+3.5"], ["Max Health", "+30"]]},
 "2474":{"date": "2026-11-05", "en": "skeletal ring", "lvl": 6, "dmg": null, "st": [["Max Health", "+3"]]},
 "2037":{"date": "2026-11-05", "en": "bony gloves", "lvl": 6, "dmg": null, "st": [["Defense", "+1"], ["Max Health", "+3"]]},
 "1289":{"date": "2026-11-05", "en": "skeletal amulet", "lvl": 6, "dmg": null, "st": [["Max Health", "+3"]]},
 "1450":{"date": "2026-11-05", "en": "skeleton skull", "lvl": 8, "dmg": null, "st": [["Skill Damage", "+1%"], ["Max Health", "+5"], ["Max Mana", "+1"], ["Max Stamina", "+1"], ["Health Regeneration", "+0.05/s"]]},
 "1463":{"date": "2026-11-07", "en": "occult hood", "lvl": 10, "dmg": "1", "st": [["Critical Strike Power", "+5%"], ["Block Chance", "+5%"]]},
 "2045":{"date": "2026-11-07", "en": "occult gloves", "lvl": 10, "dmg": null, "st": [["Lifesteal", "+2%"], ["Spell Vampirism", "+2%"], ["Max Health", "+3"], ["Mana Regeneration", "+0.1/s"], ["Stamina Regeneration", "+0.1/s"]]},
 "1455":{"date": "2026-11-07", "en": "bandit coin", "lvl": 5, "dmg": null, "st": [["Critical Strike Chance", "+1%"]]},
 "2512":{"date": "2026-11-07", "en": "misty ring", "lvl": 15, "dmg": null, "st": [["Attack Speed", "0.1/s"], ["Critical Strike Chance", "+3%"], ["Physical Damage", "+3%"]]},
 "2584":{"date": "2026-11-07", "en": "magic staff of the stinger", "lvl": 12, "dmg": "20", "st": [["Attack Speed", "1/s"]]},
 "1730":{"date": "2026-11-07", "en": "crossbow of the bandits", "lvl": 8, "dmg": "6", "st": [["Attack Speed", "1/s"], ["Critical Strike Chance", "+1.5%"], ["Skill Critical Strike Chance", "+1.5%"]]},
 "2475":{"date": "2026-11-07", "en": "ring of the boar", "lvl": 1, "dmg": null, "st": [["Max Health", "+1"]]},
 "2038":{"date": "2026-11-07", "en": "gloves of the boar", "lvl": 1, "dmg": "0.25", "st": []},
 "1590":{"date": "2026-11-07", "en": "bracelet of the boar", "lvl": 1, "dmg": null, "st": [["Defense", "+2"]]},
 "2505":{"date": "2026-11-07", "en": "ring of the adventurer", "lvl": 12, "dmg": null, "st": [["Attack Speed", "0.01/s"], ["Critical Strike Chance", "+1%"], ["Skill Critical Strike Chance", "+1%"], ["Physical Damage", "+1%"], ["Magic Damage", "+1%"], ["Projectile Damage", "+1%"], ["Lifesteal", "+1%"], ["Spell Vampirism", "+1%"], ["Defense", "+1"], ["Max Health", "+1"], ["Max Mana", "+1"], ["Max Stamina", "+1"], ["Heal Bonus", "+1"], ["Movement Speed", "+1%"]]},
 "1379":{"date": "2026-11-07", "en": "boots of the revenant", "lvl": 5, "dmg": null, "st": [["Movement Speed", "+50%"]]},
 "1597":{"date": "2026-11-07", "en": "occult bracelet", "lvl": 10, "dmg": null, "st": [["Defense", "+2"], ["Max Health", "+10"]]},
 "1592":{"date": "2026-11-08", "en": "gelatinous bracelet", "lvl": 4, "dmg": null, "st": [["Max Health", "+1"], ["Health Regeneration", "+0.05/s"], ["Mana Regeneration", "+0.05/s"], ["Stamina Regeneration", "+0.05/s"]]},   // 膠質手環 史萊姆飾品工坊 2026-11-08_03.33.53.png
 "1291":{"date": "2026-11-08", "en": "gelatinous amulet", "lvl": 4, "dmg": null, "st": [["Heal Bonus", "+0.5"]]},   // 凝膠護符 史萊姆飾品工坊 2026-11-08_03.33.57.png
 "1288":{"date": "2026-11-08", "en": "amulet of the sylve", "lvl": 3, "dmg": null, "st": [["Heal Bonus", "+0.5"]], "auc": 1},   // 森靈護符 拍賣場 (owner's screenshot 2026-11-08, sent in chat)
 "2489":{"date": "2026-11-12", "en": "anneau du nectar doré", "r": "a", "lvl": 12, "dmg": null, "st": [["Physical Damage", "+7.5%"]]},
"2617":{"date": "2026-11-12", "en": "hache d'illfang", "lvl": 10, "dmg": "22.5", "r": "s", "st": [["Attack Speed", "0.9/s"], ["Skill Critical Strike Chance", "+2%"], ["Lifesteal", "+5%"], ["Stamina Regeneration", "+0.5/s"]]},"1296":{"date": "2026-11-07", "en": "albal's necklace", "lvl": 3, "dmg": null, "st": [["Critical Strike Power", "+1%"], ["Max Health", "+1"], ["Movement Speed", "+5%"]]}
}};
