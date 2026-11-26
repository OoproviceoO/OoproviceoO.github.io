/* Equipment set bonuses and potion effects as shown in the game's item tooltips (owner's screenshots; not published).
   sets: {name, tiers:[[pieces, effect text as in game]], members:[English item names whose tooltip shows the set]}
   potions: {name, effects:[lines as in game]}. User 2026-11-05: 套裝效果、藥水效果也要寫進去.
   "zh": 1 = the set was only seen on a Chinese tooltip (English set name unknown): name and tiers are the game's Chinese text, shown as is.
   2026-11-07 checked against the Chinese tooltips: Standard Skeleton Set [4] is +2% Damage Reduction (was -2%); the rest match. */
window.SAO_SETS = {date:"2026-11-07", sets:[
 {"name": "暗影士兵套裝", "zh": 1, "tiers": [[2, "-1.5 HP/秒"], [3, "-1.5 HP/秒"], [4, "-1.5 HP/秒"], [5, "-1.5 HP/秒"], [6, "-1.5 HP/秒"], [7, "-1.5 HP/秒"]], "members": ["Grimoire Occulte", "Boucle d'Oreille Occultes", "Bague Occulte", "Masque Occulte", "Hache Occulte", "Casque Occulte", "Bottes Occultes", "Anneau Occulte", "Amulette Occulte"]},   // 2026-11-17 in27 Chinese tooltips (11-17 19.05.47～19.06.19, 7 pieces)
 {"name": "武術古林套裝", "zh": 1, "tiers": [[2, "+7% 爆擊傷害、+7% 技能爆擊傷害"], [3, "+10% 閃避率"], [4, "+5 攻擊傷害、+5% 移動速度、+20% 生命偷取"]], "members": ["武術古林頭盔", "武術古林胸甲", "武術古林護腿", "武術古林靴"]},   // 2026-11-14 in27 Chinese tooltips (20.40.45～20.41.16)
 {"name": "小部落套裝", "zh": 1, "tiers": [[2, "+5 HP、+0.15 HP/秒"], [3, "+1.5% 法術吸血"], [4, "+5% 魔法傷害"]], "members": ["Orbe Goblinne"]},   // 2026-11-17 in27 Chinese tooltip (哥布林寶珠 20.02.26)
 {"name": "盜賊套裝", "zh": 1, "tiers": [[2, "+2 攻擊傷害"], [3, "+0.5/秒 移動速度、+10% 攻擊速度"], [4, "+7.5% 爆擊率、+7.5% 爆擊傷害"]], "members": ["Masque du Voleur", "Cagoule du Voleur", "Gants du Voleur", "Anneau du Voleur", "Amulette du Voleur"]},   // 2026-11-13 in26 Chinese tooltip (竊賊面具); not the English Bandit Set (different tiers). 2026-11-17 in27: 4 more pieces (04.09.25～45)
 {"name": "獵人紫水晶套裝", "zh": 1, "tiers": [[2, "+0.4 耐力/秒"], [3, "+4% 爆擊率、+4% 技能爆擊率"], [4, "+7 攻擊傷害"]], "members": ["獵人紫水晶靴", "獵人紫水晶護腿"]},   // 2026-11-13 in26 Chinese tooltips
 {"name": "森林尖牙套裝", "zh": 1, "tiers": [[2, "+0.8 魔力/秒、+8 最大魔力"], [3, "+6% 冷卻縮減"], [4, "+6 治療威力"]], "members": ["Bottes des Crocs des Bois", "Couteau à la Griffe des Bois", "Manteau des Crocs des Bois", "Bracelet des Bois", "Anneau des Bois", "Gants des Bois", "Amulette des Bois"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "庇護者蜂針套裝", "zh": 1, "tiers": [[2, "+5% 閃避率、+1 攻擊傷害"], [3, "+5% 爆擊威力、+5% 技能爆擊傷害、+5% 技能爆擊率"]], "members": ["Anneau du Nectar Doré", "Anneau du Dard Protecteur"]}, {"name": "水之鳥身女妖套裝", "zh": 1, "tiers": [[2, "+4% 技能爆擊率"], [3, "+5% 移動速度、+1 防禦、+5% 魔法傷害"]], "members": ["Feather of the Little Drop"]}, {"name": "部落套裝", "zh": 1, "tiers": [[2, "+10 HP、+0.25 HP/秒"], [3, "+2.5% 生命偷取"], [4, "+3% 物理傷害"]], "members": ["Bottes Orciennes", "Hache de la Tribu", "Ceinture de la Tribu", "Anneau Orcien", "Gants Orcien", "Bracelet Orcien", "Amulette Orcienne"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "暗林套裝", "zh": 1, "tiers": [[2, "+0.1/秒 移動速度、+2 治療威力"], [3, "+5% 魔法傷害"], [4, "+20% 攻擊速度"]], "members": ["Bottes des Bois Sombres", "Grimoire des Bois Sombres", "Boucles d'Oreilles des Bois Sombres", "Anneau des Bois Sombres", "Gants des Bois Sombres", "Bracelet des Bois Sombres", "Amulette des Bois Sombres"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "蛛網套裝", "zh": 1, "tiers": [[2, "+2% 冷卻縮減、+0.2 魔力/秒"], [3, "+10 最大魔力、+2.5% 技能爆擊率"], [4, "+2.5% 技能爆擊率、+4 攻擊傷害"]], "members": ["Bottes de la Toile", "Masque de la Toile", "Anneau de la Toile", "Gants de la Toile", "Bracelet de la Toile", "Amulette de la Toile", "Bottes Noires"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "發光套裝", "zh": 1, "tiers": [[2, "+4 攻擊傷害"], [3, "+2.5% 移動速度、+10% 攻擊速度"], [4, "+2.5% 投射物傷害、+1.5% 爆擊率"]], "members": ["Bottes Luminescentes", "Ceinture Luminescente", "Anneau Luminescent", "Gants Luminescents", "Bracelet Luminescent", "Amulette Luminescente"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "幽靈套裝", "zh": 1, "tiers": [[2, "+6 最大耐力"], [3, "+0.25/秒 移動速度、+2.5% 爆擊率"], [4, "+5 攻擊傷害、+10% 攻擊速度"]], "members": ["Bottes Spectrales", "Plume Spectrale", "Anneau Spectral", "Gants Spectral", "Bracelet Spectral", "Amulette Spectrale", "Feu Follet Spectral"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "微弱腐化套裝", "zh": 1, "tiers": [[2, "+10% 冷卻縮減"], [3, "+5% 移動速度"], [4, "+10% 閃避率"]], "members": ["Masque Corrompu", "Grimoire Faible Corruption", "Bracelet Faible Corruption", "Gants Faible Corruption"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "紫水晶套裝", "zh": 1, "tiers": [[2, "+4 最大耐力、+0.2 耐力/秒"], [3, "+5% 招架率、+2.5% 擊退抗性"], [4, "+3 防禦、+0.25 HP/秒、+10 最大 HP"]], "members": ["Anneau d'Améthyste", "Gants d'Améthyste", "Bracelet du Voleur", "Amulette d'Améthyste"]},   // 2026-11-18 in28 Chinese tooltips (盜賊手環 19.45.43, 紫水晶戒指／手套／護符 19.41.55、19.42.45、19.46.57); not the 獵人紫水晶套裝
 {"name": "守護者套裝", "zh": 1, "tiers": [[2, "+1.5 最大耐力"], [3, "+0.15 HP/秒"], [4, "+2% 格擋率"]], "members": ["Casque du Gardien"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "符文套裝", "zh": 1, "tiers": [[2, "+0.3 HP/秒、+0.3 魔力/秒、+0.3 耐力/秒"], [3, "+5% 格擋率、+5% 冷卻縮減、+4% 技能傷害"]], "members": ["Collier Runique"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "蜂巢套裝", "zh": 1, "tiers": [[2, "+1 最大魔力"], [3, "+5% 移動速度"], [4, "+1 治療加成"], [5, "+0.05 攻擊速度"]], "members": ["Bracelet Mielleux"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "純淨縞瑪瑙套裝", "zh": 1, "tiers": [[2, "+5.5% 移動速度"], [3, "+0.6 魔力/秒、+0.6 耐力/秒"], [4, "+7% 魔法傷害、+7% 物理傷害、+7% 投射物傷害"], [5, "+25 HP、+10 防禦"]], "members": ["Pièce d'Onyx Pur", "Amulette d''Onyx Pur"]},   // 2026-11-12 in24 Chinese tooltip
 {"name": "下級狼套裝", "zh": 1, "tiers": [[2, "+0.5/秒 移動速度、+5 攻擊傷害、-5 最大耐力、-10 最大魔力"], [3, "+0.2 攻擊速度、+7.5% 爆擊率、+7.5% 爆擊傷害"]], "members": ["Crâne de Loup", "Gants Féroce", "Couteau en Dent de Loup"]},   // 2026-11-07 15:21:05 拍賣場的狼頭骨（官網 1469，等級 17）
 {"name": "森靈套裝", "zh": 1, "tiers": [[2, "+1 HP"], [3, "+0.5 治療加成"], [4, "+0.1 HP/秒、+0.1 魔力/秒、+0.1 耐力/秒"]], "members": ["Amulet of the Sylve", "Lien de la Sylve"]},
 {"name": "Misty Fangs Set", "tiers": [[2, "+1% Lifesteal"], [3, "+5% Crit Chance, +2.5% Crit Damage"], [4, "+5 Attack Damage, +5% Attack Speed"]], "members": ["Misty Ring", "Bottes au Crocs Brumeux", "Couteau à la Griffe de la Brume", "Gants Brumeux", "Bracelet Brumeux", "Amulette Brumeuse", "Manteau des Crocs Brumeux"]},
 {"name": "Shark Set", "tiers": [[2, "+5% Ability Haste"], [3, "+3 Health"], [4, "+3% Physical Damage"]], "members": ["Ring of the Shark", "Shark Amulet", "Shark Fang", "Bracelet of the Shark", "Ring of the Leviathan"]},
 {"name": "Standard Skeleton Set", "tiers": [[2, "+5% Ability Haste"], [3, "+0.05 Health/s"], [4, "+2% Damage Reduction"]], "members": ["Skeleton Skull", "Ring of Narax", "Skeletal Ring", "Bony Gloves", "Skeletal Amulet"]},
 {"name": "Shadow Neophyte Set", "tiers": [[2, "-0.6/s Health, -50% Healing Received"], [3, "-0.6/s Health"], [4, "-0.6/s Health"], [5, "-0.6/s Health"], [6, "-0.6/s Health"], [7, "-0.6/s Health"]], "members": ["Occult Bracelet", "Occult Amulet", "Occult Robe", "Occult Skull", "Occult Hood", "Occult Ring", "Occult Gloves", "Occult Amulet (2)"]},
 {"name": "Hunter Necromancer Set", "tiers": [[2, "+0.3 Stamina/s"], [3, "+3% Crit Chance, +3% Crit Damage"], [4, "+4 Attack Damage"]], "members": ["Boots of the Hunter Necromancer"]},
 {"name": "Hunter Set", "tiers": [[2, "+0.1 Stamina/s"], [3, "+0.5% Critical Chance"]], "members": ["Hunter's Boots", "Hunter's Leggings"]},
 {"name": "Bandit Set", "tiers": [[2, "+1 Health, +2% Critical Power"], [3, "+0.5 Attack Damage"], [4, "+1% Critical Chance"]], "members": ["Stolen Cloak", "Stolen Amulet", "Bandit Coin"]},
 {"name": "Little Slime Set", "tiers": [[2, "+2 Health"], [3, "+0.05 Health/s, +0.05 Mana/s, +0.05 Stamina/s"], [4, "+5% Cooldown Reduction"]], "members": ["Gelatinous Bracelet", "Gelatinous Cloak", "Slimy Ring", "Sticky Ring", "Gelatinous Amulet"]},
 {"name": "Elite Treant Set", "tiers": [[2, "+0.5% Critical Chance"], [3, "+2% Movement Speed"], [4, "+5% Projectile Damage"]], "members": ["Elite Gloves", "Elite Carapace", "Elite Bracelet"]},
 {"name": "Corrupted Boar Set", "tiers": [[2, "+0.25 Attack Damage"], [3, "+2 Health"], [4, "+0.25 Attack Damage"]], "members": ["Gloves of the Boar", "Bracelet of the Boar", "Belt of the Boar"]},
 {"name": "Ice Golem Set", "tiers": [[2, "+5% 格擋率"], [3, "+3% Ability Haste, +0.1 Health/s"], [4, "+1 Defense, +2 Health, +2% Skill Damage"]], "members": ["Frozen Bracelet", "Frozen Ring", "Frozen Gloves", "Frozen Amulet", "Bracelet of Ice"]},   // 2026-11-13 in26 02.52.48 Chinese tooltip: [2] is now +5% 格擋率 (was +5 Health on the 11/4 English tooltip); [3] [4] unchanged. A tier in Chinese is shown as is
 {"name": "Ice Spirits Set", "tiers": [[2, "+1.5% Skill Crit Chance"], [3, "+1 Max Mana"], [4, "+3% Magic Damage"]], "members": ["Glacial Essence", "Glacial Ring", "Glacial Antenna", "Glacial Amulet"]},
 {"name": "Ika Set", "tiers": [[2, "+0.5 Stamina"], [3, "+0.5 Health/s"]], "members": ["Leggings of Ika"]},
 {"name": "Fallen Ones Set", "tiers": [[2, "+2% Skill Critical Damage, +3% Skill Damage"]], "members": ["Ring of the Fallen", "Ring of the Reaper"]},   // 2026-11-13 in26 05.34.26: the game tooltip itself lists only [2] (full resolution); 死神之戒 is a member
 {"name": "Nepenthes Set", "tiers": [[2, "+1% Skill Crit Chance"], [3, "+0.5 Max Mana"], [4, "+2.5% Magic Damage"]], "members": ["Amulet of the Nepenthes", "Flower of a Nepenthes", "Bracelet of the Nepenthes"]},
 {"name": "Iron Set", "tiers": [[2, "+3% Movement Speed"], [3, "+0.1 Health/s +0.1 Mana/s +0.1 Stamina/s"], [4, "+2% Magic Damage +2% Physical Damage +2% Projectile Damage"], [5, "+2 Health +2 Defense"]], "members": ["Iron Ring", "Iron Bracelet", "Iron Gloves", "Iron Coin", "Iron Amulet"]},
 {"name": "Copper Set", "tiers": [[2, "+2.5% Movement Speed"], [3, "+0.05 Health/s +0.05 Mana/s +0.05 Stamina/s"], [4, "+1% Magic Damage +1% Physical Damage +1% Projectile Damage"], [5, "+1 Health +1 Defense"]], "members": ["Copper Ring", "Copper Bracelet", "Copper Gloves", "Copper Coin", "Copper Amulet"]},
 {"name": "Watchful Reaper Set", "tiers": [[2, "+0.15 Mana/s"], [3, "+1.5 Bonus Healing"], [4, "+2% Ability Haste"]], "members": ["Chestplate of the Reaper"]},
 {"name": "Spider Set", "tiers": [[2, "+2.5% Movement Speed"], [3, "+0.025 Attack Speed"], [4, "+2.5% Dodge Chance"], [5, "+0.25 Attack Damage +1% Crit Chance"]], "members": ["Necklace of Aragorn"]},
 {"name": "Weakling Wolf Set", "tiers": [[2, "+0.5% Critical Power"], [3, "+5% Movement Speed"], [4, "+0.25 Attack Damage"]], "members": ["Ring of the Wolf", "Gloves of the Wolves", "Skull of a Wolf", "Albal's Necklace"]},
 {"name": "Peaceful Deer Set", "tiers": [[2, "+1 Bonus Healing"], [3, "+2 Max Mana"]], "members": ["Gloves of the Stags", "Belt of the Stags", "Bracelet of the Stags"]},
 {"name": "Stealthy Herald Set", "tiers": [[2, "+5% Dodge Chance"], [3, "+3% Critical Damage"], [4, "+5% Movement Speed"]], "members": ["Tunic of the Herald", "Boots of the Herald"]},
 {"name": "Hunter Herald Set", "tiers": [[2, "+0.15 Stamina/s"], [3, "+1% Critical Chance"], [4, "+0.5 Attack Damage"]], "members": ["Helmet of the Herald"]},
 {"name": "Fire Harpies Set", "tiers": [[2, "+2% Critical Chance"], [3, "+7% Movement Speed, +2 Defense, +3% Physical Damage"]], "members": ["Feather of the Little Flame", "Anneau de l'Harpie Enflammé"]},
 {"name": "Water Harpies Set", "tiers": [[2, "+4% Skill Critical Chance"], [3, "+5% Movement Speed, +1 Defense, +5% Magic Damage"]], "members": ["Feather of the Little Drop", "Anneau de l'Harpie Noyé"]},
 // 2026-11-19 (in29, owner's Chinese craft-window tooltips 11/18～11/19); members = items whose tooltip shows the set
 {"name": "土之鳥身女妖套裝", "zh": 1, "tiers": [[2, "+1 防禦"], [3, "+2 防禦、+5% 冷卻縮減、+1 攻擊傷害"]], "members": ["Anneau de l'Harpie Ecrasé"]},
 {"name": "廢鐵套裝", "zh": 1, "tiers": [[2, "+4% 移動速度"], [3, "+0.15 魔力/秒、+0.15 耐力/秒、+0.15 HP/秒"], [4, "+3% 魔法傷害、+3% 物理傷害、+3% 投射物傷害"], [5, "+3 HP、+3 防禦"]], "members": ["Anneau de Ferraille", "Bracelet de Ferraille", "Gants de Ferraille", "Pièce de Ferraille", "Amulette de Ferraille"]},
 {"name": "凶猛之熊套裝", "zh": 1, "tiers": [[2, "+2 最大耐力"], [3, "+5% 物理傷害"], [4, "+2.5% 生命偷取"]], "members": ["Anneau de Winnie"]},
 {"name": "Tenacious Necromancer Set", "tiers": [[2, "+0.3 Health/s"], [3, "+5 Max Stamina"], [4, "-15% Damage Reduction, +10% Block Chance"]], "members": ["Helmet of the Tenacious Necromancer"]}
], potions:[
 {"name": "Quality Endurance Fortifier III", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your speed by 0.0325 for 15min", "Boosts your max mana by 7 for 15min", "Boosts your max endurance by 3.5 for 15min", "On consumption, applies 15min of cooldown on all fortifiers"]},
 {"name": "Quality Knowledge Fortifier III", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your magic damage by 3% for 15min", "Boosts your skill critical damage by 3% for 15min", "On consumption, applies 15min of cooldown on all fortifiers"]},
 {"name": "Quality Ferocity Fortifier III", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your attack damage by 3% for 15min", "Boosts your critical damage by 3% for 15min", "On consumption, applies 15min of cooldown on all fortifiers"]},
 {"name": "Quality Vitality Fortifier III", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your max health by 30 for 15min", "Boosts your health regeneration by 0.4/s for 15min", "On consumption, applies 15min of cooldown on all fortifiers"]},
 {"name": "Quality Patience Fortifier III", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your dodge chance by 3% for 15min", "Boosts your mana regeneration by 0.4/s for 15min", "Boosts your stamina regeneration by 0.2/s for 15min", "On consumption, applies 15min of cooldown on all fortifiers"]},
 {"name": "Quality Resistance Fortifier III", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your knockback resistance by 3% for 15min", "Boosts your block chance by 3% for 15min", "Boosts your block power by 3% for 15min", "On consumption, applies 15min of cooldown on all fortifiers"]},
 {"name": "Quality Health Potion IV", "effects": ["Restores : 70 ♥", "Cooldown: 15s"]},
 {"name": "Quality Health Potion V", "effects": ["Restores : 85 ♥", "Cooldown: 15s"]},
 {"name": "Quality Health Potion VI", "effects": ["Restores : 100 ♥", "Cooldown: 15s"]},
 {"name": "Quality Mana Potion V", "effects": ["Restores : 40 Mana"]},
 {"name": "Quality Mana Potion VI", "effects": ["Restores : 45 Mana", "Cooldown: 15s"]},
 {"name": "Quality Stamina Potion V", "effects": ["Restores : 20 Stamina"]},
 {"name": "Quality Stamina Potion VI", "effects": ["Restores : 22.5 Stamina"]},
 {"name": "Health Potion I", "effects": ["Restores : 10 ♥", "Cooldown: 15s"]},
 {"name": "Health Potion II", "effects": ["Restores : 18 ♥", "Cooldown: 15s"]},
 {"name": "Health Potion III", "effects": ["Restores : 22 ♥", "Cooldown: 15s"]},
 {"name": "Mana Potion I", "effects": ["Restores : 5 Mana", "Cooldown: 15s"]},
 {"name": "Mana Potion II", "effects": ["Restores : 6 Mana", "Cooldown: 15s"]},
 {"name": "Mana Potion III", "effects": ["Restores : 7 Mana", "Cooldown: 15s"]},
 {"name": "Stamina Potion I", "effects": ["Restores : 5 Stamina", "Cooldown: 15s"]},
 {"name": "Stamina Potion II", "effects": ["Restores : 6 Stamina", "Cooldown: 15s"]},
 {"name": "Stamina Potion III", "effects": ["Restores : 7 Stamina", "Cooldown: 15s"]},
 {"name": "Quality Health Potion I", "effects": ["Restores : 12 ♥", "Cooldown: 15s"]},
 {"name": "Quality Health Potion II", "effects": ["Restores : 25 ♥", "Cooldown: 15s"]},
 {"name": "Quality Health Potion III", "effects": ["Restores : 32 ♥", "Cooldown: 15s"]},
 {"name": "Quality Mana Potion I", "effects": ["Restores : 6 Mana", "Cooldown: 15s"]},
 {"name": "Quality Mana Potion II", "effects": ["Restores : 8 Mana", "Cooldown: 15s"]},
 {"name": "Quality Mana Potion III", "effects": ["Restores : 10 Mana", "Cooldown: 15s"]},
 {"name": "Quality Stamina Potion I", "effects": ["Restores : 6 Stamina", "Cooldown: 15s"]},
 {"name": "Quality Stamina Potion II", "effects": ["Restores : 8 Stamina", "Cooldown: 15s"]},
 {"name": "Quality Stamina Potion III", "effects": ["Restores : 10 Stamina", "Cooldown: 15s"]},
 {"name": "Quality Vitality Fortifier I", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your max health by 5 for 15min", "Boosts your stamina regeneration by 0.1/s for 15min", "On consumption, applies 1h of cooldown on all fortifiers"]},
 {"name": "Quality Ferocity Fortifier I", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your attack damage by 5% for 15min", "Boosts your critical damage by 5% for 15min", "On consumption, applies 1h of cooldown on all fortifiers"]},
 {"name": "Quality Knowledge Fortifier I", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your magic damage by 5% for 15min", "Boosts your skill critical skills by 5% for 15min", "On consumption, applies 1h of cooldown on all fortifiers"]},
 {"name": "Quality Endurance Fortifier I", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your speed by 2.5% for 15min", "Boosts your max mana by 2 for 15min", "Boosts your max endurance by 2 for 15min", "On consumption, applies 1h of cooldown on all fortifiers"]},
 {"name": "Quality Resistance Fortifier I", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your knockback resistance by 5% for 15min", "Boosts your block chance by 2% for 15min", "Boosts your block power by 2% for 15min", "On consumption, applies 1h of cooldown on all fortifiers"]},
 {"name": "Quality Patience Fortifier I", "effects": ["Cooldown: 3600s", "Uses Remaining: 1", "Boosts your dodge chance by 3% for 15min", "Boosts your mana regeneration by 0.1/s for 15min", "Boosts your stamina regeneration by 0.1/s for 15min", "On consumption, applies 1h of cooldown on all fortifiers"]},
 {"name": "Healing Crystal", "effects": ["Restores : 150 ♥", "Cooldown: 1800s", "Uses Remaining: 1"]},
 {"name": "Mana Crystal", "effects": ["Restores : 50 Mana", "Cooldown: 1800s", "Uses Remaining: 1"]},
 {"name": "Stamina Crystal", "effects": ["Restores : 50 Stamina", "Cooldown: 1800s", "Uses Remaining: 1"]},
 {"name": "Reapkin King's Lollipop", "effects": ["Attack damage +8%, magic damage +6%, max health +15 and speed +0.03 for 30min", "60s cooldown on all Reapkin candies", "Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Resurrection Crystal", "effects": ["Allows you to revive a comrade fallen in battle within 10s after their death in the authorized zones", "Cooldown: 7200s", "Uses Remaining: 1"]},
 {"name": "Radiant Power Crystal", "effects": ["Boosts Weapon Damage and Magic Damage by 25% - 10min", "Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Daily Stamina Crystal", "effects": ["Restores : 80 Stamina", "Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Healing Shard", "effects": ["Restores : 60 ♥", "Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Mana Shard", "effects": ["Restores : 40 Mana", "Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Stamina Shard", "effects": ["Restores : 40 Stamina", "Cooldown: 60s", "Uses Remaining: 1", "Single use - cooldown of 1min"]},
 {"name": "Potion of Albal", "effects": ["提升攻擊傷害 8%，持續 5 分鐘", "Cooldown: 1800s", "Uses Remaining: 1"]},
 {"name": "Drop of Sap", "effects": ["Cooldown: 1800s", "Uses Remaining: 1"]},
 {"name": "Potion of the Martyr", "effects": ["Restaure 250❤", "Utilisations restantes: 1", "Boost les Dégâts armes de 10% - 30sec !"]},
 {"name": "Aincrad Crystal", "effects": ["Restores 150 HP, 150 mana and 150 stamina immediately.", "Boosts Crit Chance and Crit Damage by 10% - 10min !", "Boosts Weapon Damage and Magic Damage by 20% - 10min !", "Cooldown: 180s", "Uses Remaining: 3"]},
 {"name": "Cursed Jewel", "effects": ["Cooldown: 60s", "Uses Remaining: 1", "Max health +15, defense +5 and magic damage +5% for 30min", "60s cooldown on all Reapkin candies"]},
 {"name": "Witch's Dragée", "effects": ["Cooldown: 60s", "Uses Remaining: 1", "Regenerates 0.1/s of mana and 0.1/s of stamina for 15min", "60s cooldown on all Reapkin candies"]},
 {"name": "Bloody Swirl", "effects": ["Cooldown: 60s", "Uses Remaining: 1", "Attack damage +6% and skill critical strike power +4% for 20min", "60s cooldown on all Reapkin candies"]},
 {"name": "Pumpkin Caramel", "effects": ["Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Halloween Candy Corn", "effects": ["Restores : 30 ♥", "Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Pumpkin Wrapped Candy", "effects": ["Restores : 20 ♥", "Cooldown: 60s", "Uses Remaining: 1"]},
 {"name": "Dragon of Wrath Candy", "effects": ["Cooldown: 180s"]},
 {"name": "Boar of Gluttony Candy", "effects": ["Cooldown: 180s"]},
 {"name": "Lion of Pride Candy", "effects": ["Cooldown: 180s"]},
 {"name": "Box of Chocolates", "effects": ["Restores : 5 ♥", "Restores : 20 Food", "Restores : 10 Saturation", "Cooldown: 15s"]},
 {"name": "Boar Meat", "effects": ["Restores : 5 Food", "Cooldown: 1s"]},
 {"name": "Effective Repair Kit", "effects": ["Repair: +50%", "Uses Remaining: 1"]},
 // 2026-11-23 (in30): floor-2 Alchemist tooltips (18.02.04 / 18.02.14); added at the end so the g… ids of earlier potions stay
 {"name": "Quality Mana Potion IV", "effects": ["Restores : 35 Mana", "Cooldown: 15s"]},
 {"name": "Quality Stamina Potion IV", "effects": ["Restores : 17.5 Stamina", "Cooldown: 15s"]}
]};
