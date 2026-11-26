/* Classes and skills (職業／技能 tab). Built by tools/build_classes.py; regenerate rather than edit by hand.
   wiki (saominecraft.wiki.gg): role, difficulty, stat stars, specialisations, skill names/levels; descriptions are
   this site's Chinese rewrite. skillsSure=false: every skill icon on the wiki page is a placeholder, so the list may
   be pre-release plans. Reference map (facts only): base stats, per-level gains, talent-tree nodes summarised as
   [name, stat, amount per point, unit, number of nodes]. weapons: official catalogue items per weapon type.
   No class or skill pictures on purpose (possible original SAO artwork the server has no licence for). */
window.SAO_CLASSES = [
 {
  "id": "guerrier",
  "name": "Guerrier",
  "zh": "戰士",
  "ic": "🛡️",
  "role": "Tank / Melee DPS",
  "diff": 1,
  "about": "近戰職業，靠力量和耐打壓制對手。用重武器、穿重甲，在前線吸收傷害，同時打出高傷害，是隊友可以依靠的支柱。",
  "stars": [
   [
    "生命",
    5
   ],
   [
    "力量",
    3
   ],
   [
    "抗性",
    5
   ],
   [
    "速度",
    1
   ],
   [
    "敏捷",
    0
   ],
   [
    "魔法",
    0
   ],
   [
    "魔力",
    0
   ],
   [
    "耐力",
    2
   ]
  ],
  "subs": [
   [
    "Paladin",
    "神聖守護者，專注保護隊伍。"
   ],
   [
    "Berserker",
    "犧牲防禦換取毀滅性的攻擊力。"
   ]
  ],
  "skills": [
   [
    "Combinaison Brutale",
    "主動",
    1,
    "一連串重擊：大範圍突刺、再一次突刺、短衝刺穿刺、旋轉上挑把敵人打上空中，最後重重砸下。"
   ],
   [
    "Instinct de Rempart",
    "被動",
    2,
    "受到攻擊時，獲得數秒的抗性 III。"
   ],
   [
    "Le Saut du Berserker",
    "主動",
    4,
    "用劍掃過地面劃出裂地線，再躍起砸向瞄準的區域。"
   ],
   [
    "Barrière de Bouclier",
    "主動",
    5,
    "召喚 4 面盾牌保護自己並擊退周圍目標；每面盾被打一次就碎，但會吸收那一下的全部傷害。同時嘲諷附近敵人。"
   ],
   [
    "Tourbillon Implacable",
    "主動",
    7,
    "旋轉突刺一段時間，後撤再向前衝，打出長距離穿刺。"
   ],
   [
    "Frappe Vicieuse",
    "主動",
    8,
    "站定蓄積氣場，從地面向上掃擊，向前放出一列造成重傷害的裂地衝擊。"
   ],
   [
    "Frappe de Fureur",
    "主動",
    10,
    "紅色靈劍大幅伸長，向前砍 4 次後躍起砸向目標區域形成裂縫，再跳回原位；裂縫隨後爆炸，範圍內敵人暈眩。"
   ]
  ],
  "skillsSure": true,
  "wikiRev": 441,
  "weapons": {
   "shield": 37,
   "sword": 87
  },
  "base": [
   [
    "生命",
    "28"
   ],
   [
    "傷害",
    "1"
   ],
   [
    "魔力",
    "20"
   ],
   [
    "攻擊速度",
    "12.5%"
   ],
   [
    "爆擊率",
    "1%"
   ],
   [
    "爆擊傷害",
    "200%"
   ],
   [
    "移動速度",
    "10%"
   ],
   [
    "閃避",
    "5"
   ]
  ],
  "perLv": [
   [
    "生命",
    "1.5"
   ],
   [
    "HP 恢復",
    "0.1"
   ],
   [
    "魔力恢復",
    "0.1"
   ],
   [
    "耐力恢復",
    "0.1"
   ]
  ],
  "talents": [
   [
    "Physical Might",
    "物理傷害",
    1.0,
    "%",
    22
   ],
   [
    "Striking Force",
    "攻擊傷害",
    1.0,
    "",
    4
   ],
   [
    "Reinforced Guard",
    "防禦",
    3.0,
    "",
    2
   ],
   [
    "Reinforced Vitality",
    "HP",
    5.0,
    "",
    14
   ],
   [
    "Critical Instinct",
    "爆擊率",
    0.5,
    "%",
    21
   ],
   [
    "Deep Breath",
    "耐力",
    2.0,
    "",
    6
   ],
   [
    "Hardening",
    "傷害減免",
    2.0,
    "%",
    3
   ],
   [
    "Light Step",
    "移動速度",
    3.0,
    "%",
    2
   ],
   [
    "Swiftness",
    "攻擊速度",
    0.05,
    "",
    2
   ]
  ]
 },
 {
  "id": "assassin",
  "name": "Assassin",
  "zh": "刺客",
  "ic": "🗡️",
  "role": "Melee DPS",
  "diff": 2,
  "about": "速度快、出手致命，擅長爆擊和偷襲，在敵人反應前解決目標。用耐久換取爆發傷害和速度。",
  "stars": [
   [
    "生命",
    2
   ],
   [
    "力量",
    3
   ],
   [
    "抗性",
    1
   ],
   [
    "速度",
    5
   ],
   [
    "敏捷",
    5
   ],
   [
    "魔法",
    0
   ],
   [
    "魔力",
    0
   ],
   [
    "耐力",
    3
   ]
  ],
  "subs": [
   [
    "Samouraï",
    "太刀大師，兼具敏捷和力量，擅長正面連擊。"
   ],
   [
    "Ninja",
    "暗影專家，無聲出手、造成持續傷害，擅長潛行和閃避。"
   ]
  ],
  "skills": [
   [
    "Lacération",
    "主動",
    1,
    "用匕首快速連斬前方敵人。"
   ],
   [
    "Pas de l'Ombre",
    "主動",
    3,
    "穿過陰影衝刺，短暫隱形後出現在目標身後。"
   ],
   [
    "Embuscade",
    "被動",
    5,
    "潛行中的第一擊爆擊傷害提高。"
   ],
   [
    "Lame Empoisonnée",
    "主動",
    7,
    "刀刃塗毒，數秒內攻擊附帶持續傷害。"
   ],
   [
    "Danse des Lames",
    "主動",
    10,
    "在周圍連續揮砍多次，最後一記強力突刺。"
   ]
  ],
  "skillsSure": false,
  "wikiRev": 446,
  "weapons": {
   "dagger": 57
  },
  "base": [
   [
    "生命",
    "24"
   ],
   [
    "傷害",
    "1"
   ],
   [
    "魔力",
    "20"
   ],
   [
    "攻擊速度",
    "12.5%"
   ],
   [
    "爆擊率",
    "1%"
   ],
   [
    "爆擊傷害",
    "200%"
   ],
   [
    "移動速度",
    "-68%"
   ],
   [
    "閃避",
    "5"
   ]
  ],
  "perLv": [
   [
    "生命",
    "1.25"
   ],
   [
    "爆擊傷害",
    "0.25%"
   ],
   [
    "HP 恢復",
    "0.1"
   ],
   [
    "魔力恢復",
    "0.1"
   ],
   [
    "耐力恢復",
    "0.1"
   ]
  ],
  "talents": [
   [
    "Physical Might",
    "物理傷害",
    1.0,
    "%",
    22
   ],
   [
    "Side Step",
    "閃避",
    2.0,
    "%",
    1
   ],
   [
    "Reinforced Guard",
    "防禦",
    2.0,
    "",
    2
   ],
   [
    "Bloodthirst",
    "生命偷取",
    0.1,
    "%",
    2
   ],
   [
    "Critical Instinct",
    "爆擊率",
    0.5,
    "%",
    22
   ],
   [
    "Deep Breath",
    "耐力",
    2.0,
    "",
    6
   ],
   [
    "Reinforced Vitality",
    "HP",
    2.0,
    "",
    2
   ],
   [
    "Striking Force",
    "攻擊傷害",
    2.0,
    "",
    2
   ],
   [
    "Decisive Strike",
    "爆擊傷害",
    5.0,
    "%",
    3
   ],
   [
    "Reinforced Vitality",
    "HP",
    4.0,
    "",
    9
   ],
   [
    "Light Step",
    "傷害",
    5.0,
    "%",
    2
   ],
   [
    "Swiftness",
    "攻擊速度",
    0.025,
    "",
    2
   ],
   [
    "Sidestep",
    "閃避",
    2.0,
    "%",
    1
   ]
  ]
 },
 {
  "id": "mage",
  "name": "Mage",
  "zh": "法師",
  "ic": "🔮",
  "role": "Ranged DPS",
  "diff": 2,
  "about": "精通奧術，從遠距離用法術控制戰場、造成大量傷害。近戰脆弱，靠魔力和範圍技能彌補。",
  "stars": [
   [
    "生命",
    1
   ],
   [
    "力量",
    0
   ],
   [
    "抗性",
    1
   ],
   [
    "速度",
    2
   ],
   [
    "敏捷",
    1
   ],
   [
    "魔法",
    5
   ],
   [
    "魔力",
    5
   ],
   [
    "耐力",
    1
   ]
  ],
  "subs": [
   [
    "Archimage",
    "操控火、冰、雷等高階元素法術，從遠距離殲滅敵人。"
   ],
   [
    "Nécromancien",
    "召喚生物、操縱靈魂，用黑魔法削弱並壓垮敵人。"
   ]
  ],
  "skills": [
   [
    "Projectile Arcanique",
    "主動",
    1,
    "對目標發射奧術飛彈。"
   ],
   [
    "Nova de Givre",
    "主動",
    3,
    "在身邊引發冰霜爆炸，緩速並傷害附近敵人。"
   ],
   [
    "Bouclier Magique",
    "主動",
    5,
    "召喚吸收傷害的魔法屏障，持續數秒。"
   ],
   [
    "Pluie de Météores",
    "主動",
    7,
    "在指定區域降下隕石雨，持續造成大範圍傷害。"
   ],
   [
    "Cataclysme",
    "主動",
    10,
    "引導全部魔力，引發大範圍的毀滅性爆炸。"
   ]
  ],
  "skillsSure": false,
  "wikiRev": 445,
  "weapons": {
   "staff_mage": 28
  },
  "base": [
   [
    "生命",
    "20"
   ],
   [
    "傷害",
    "1"
   ],
   [
    "魔力",
    "20"
   ],
   [
    "攻擊速度",
    "12.5%"
   ],
   [
    "爆擊率",
    "1%"
   ],
   [
    "爆擊傷害",
    "200%"
   ],
   [
    "移動速度",
    "10%"
   ],
   [
    "閃避",
    "5"
   ]
  ],
  "perLv": [
   [
    "生命",
    "1.25"
   ],
   [
    "技能爆擊傷害",
    "0.25%"
   ],
   [
    "HP 恢復",
    "0.1"
   ],
   [
    "魔力恢復",
    "0.1"
   ],
   [
    "耐力恢復",
    "0.1"
   ]
  ],
  "talents": [
   [
    "Arcane Might",
    "魔法傷害",
    1.0,
    "%",
    22
   ],
   [
    "Arcane Reserve",
    "最大魔力",
    2.0,
    "",
    8
   ],
   [
    "Reinforced Guard",
    "防禦",
    2.0,
    "",
    2
   ],
   [
    "Arcane Absorption",
    "法術吸血",
    0.1,
    "%",
    2
   ],
   [
    "Mastery Spark",
    "技能爆擊率",
    0.5,
    "%",
    22
   ],
   [
    "Reinforced Vitality",
    "HP",
    3.0,
    "",
    12
   ],
   [
    "Striking Force",
    "攻擊傷害",
    2.0,
    "",
    2
   ],
   [
    "Mastery Apex",
    "技能爆擊傷害",
    5.0,
    "%",
    2
   ],
   [
    "Light Step",
    "移動速度",
    3.0,
    "%",
    2
   ],
   [
    "Swiftness",
    "攻擊速度",
    0.05,
    "%",
    2
   ]
  ]
 },
 {
  "id": "shaman",
  "name": "Shaman",
  "zh": "薩滿",
  "ic": "🌿",
  "role": "Support / Healer",
  "diff": 3,
  "about": "隊伍的治療者，能回復隊友生命並給予增益、提高抗性。團體內容不可或缺。",
  "stars": [
   [
    "生命",
    3
   ],
   [
    "力量",
    0
   ],
   [
    "抗性",
    2
   ],
   [
    "速度",
    2
   ],
   [
    "敏捷",
    1
   ],
   [
    "魔法",
    4
   ],
   [
    "魔力",
    5
   ],
   [
    "耐力",
    2
   ]
  ],
  "subs": [
   [
    "Druide",
    "專注自然治療和再生，用持續回復讓全隊撐下去。"
   ],
   [
    "Oracle",
    "給予神聖預知和強力的攻擊增益。"
   ]
  ],
  "skills": [
   [
    "Soin Naturel",
    "主動",
    1,
    "回復自己和附近隊友的生命。"
   ],
   [
    "Totem de Protection",
    "主動",
    3,
    "放置圖騰，範圍內隊友受到的傷害降低。"
   ],
   [
    "Bénédiction",
    "主動",
    5,
    "祝福隊友，一段時間內提升屬性和抗性。"
   ],
   [
    "Chaîne de Vie",
    "主動",
    7,
    "和一名隊友連結，分享受到的治療，並替他承擔部分傷害。"
   ],
   [
    "Renaissance",
    "主動",
    10,
    "大範圍大量治療所有隊友，並清除負面效果。"
   ]
  ],
  "skillsSure": false,
  "wikiRev": 460,
  "weapons": {
   "staff_shaman": 4
  },
  "base": [
   [
    "生命",
    "20"
   ],
   [
    "傷害",
    "1"
   ],
   [
    "魔力",
    "20"
   ],
   [
    "攻擊速度",
    "12.5%"
   ],
   [
    "爆擊率",
    "1%"
   ],
   [
    "爆擊傷害",
    "200%"
   ],
   [
    "移動速度",
    "10%"
   ],
   [
    "閃避",
    "5"
   ]
  ],
  "perLv": [
   [
    "生命",
    "1.25"
   ],
   [
    "技能爆擊率",
    "0.25%"
   ],
   [
    "HP 恢復",
    "0.1"
   ],
   [
    "魔力恢復",
    "0.1"
   ],
   [
    "耐力恢復",
    "0.1"
   ]
  ],
  "talents": [
   [
    "Arcane Might",
    "魔法傷害",
    1.0,
    "%",
    20
   ],
   [
    "Healing Art",
    "額外治療",
    1.0,
    "",
    7
   ],
   [
    "Reinforced Guard",
    "防禦",
    2.0,
    "",
    2
   ],
   [
    "Arcane Absorption",
    "法術吸血",
    0.1,
    "%",
    2
   ],
   [
    "Mastery Spark",
    "技能爆擊率",
    0.5,
    "%",
    20
   ],
   [
    "Arcane Reserve",
    "最大魔力",
    2.0,
    "",
    4
   ],
   [
    "Reinforced Vitality",
    "HP",
    3.0,
    "",
    12
   ],
   [
    "Striking Force",
    "攻擊傷害",
    2.0,
    "",
    2
   ],
   [
    "Mastery Apex",
    "技能爆擊傷害",
    5.0,
    "%",
    1
   ],
   [
    "Light Step",
    "移動速度",
    3.0,
    "%",
    2
   ],
   [
    "Mana Flow",
    "最大魔力",
    2.0,
    "",
    2
   ],
   [
    "Swiftness",
    "攻擊速度",
    0.05,
    "%",
    2
   ]
  ]
 },
 {
  "id": "archer",
  "name": "Archer",
  "zh": "弓箭手",
  "ic": "🏹",
  "role": "Ranged DPS",
  "diff": 2,
  "about": "遠距離射手，從安全距離打出精準的穿透傷害。機動性好、輸出穩定。",
  "stars": [
   [
    "生命",
    2
   ],
   [
    "力量",
    2
   ],
   [
    "抗性",
    1
   ],
   [
    "速度",
    4
   ],
   [
    "敏捷",
    5
   ],
   [
    "魔法",
    0
   ],
   [
    "魔力",
    1
   ],
   [
    "耐力",
    3
   ]
  ],
  "subs": [
   [
    "Sniper",
    "超遠距離的單發重擊，耐心和精準換來致命傷害。"
   ],
   [
    "Ranger",
    "機動的快速射擊，擅長邊走邊打、持續輸出。"
   ]
  ],
  "skills": [
   [
    "Tir Précis",
    "主動",
    1,
    "精準射擊，距離越遠傷害越高。"
   ],
   [
    "Pluie de Flèches",
    "主動",
    3,
    "向空中齊射，箭雨落在指定區域。"
   ],
   [
    "Flèche Perforante",
    "主動",
    5,
    "強力箭矢，直線貫穿多名敵人。"
   ],
   [
    "Roulade Tactique",
    "主動",
    7,
    "快速翻滾閃避，短暫無敵並調整位置。"
   ],
   [
    "Tempête de Carreaux",
    "主動",
    10,
    "向前方扇形區域快速連射弩箭。"
   ]
  ],
  "skillsSure": false,
  "wikiRev": 486,
  "weapons": {
   "crossbow": 21,
   "bow": 22
  },
  "base": [
   [
    "生命",
    "20"
   ],
   [
    "傷害",
    "1"
   ],
   [
    "魔力",
    "20"
   ],
   [
    "攻擊速度",
    "12.5%"
   ],
   [
    "爆擊率",
    "1%"
   ],
   [
    "爆擊傷害",
    "200%"
   ],
   [
    "移動速度",
    "16%"
   ],
   [
    "閃避",
    "5"
   ]
  ],
  "perLv": [
   [
    "生命",
    "1.25"
   ],
   [
    "爆擊率",
    "0.25%"
   ],
   [
    "HP 恢復",
    "0.1"
   ],
   [
    "魔力恢復",
    "0.1"
   ],
   [
    "耐力恢復",
    "0.1"
   ]
  ],
  "talents": [
   [
    "Marksmanship",
    "投射物傷害",
    1.0,
    "%",
    22
   ],
   [
    "Decisive Strike",
    "爆擊傷害",
    5.0,
    "%",
    5
   ],
   [
    "Reinforced Guard",
    "防禦",
    2.0,
    "",
    2
   ],
   [
    "Bloodthirst",
    "生命偷取",
    0.1,
    "%",
    2
   ],
   [
    "Critical Instinct",
    "爆擊率",
    0.5,
    "%",
    21
   ],
   [
    "Deep Breath",
    "耐力",
    2.0,
    "",
    6
   ],
   [
    "Reinforced Vitality",
    "HP",
    3.0,
    "",
    12
   ],
   [
    "Striking Force",
    "攻擊傷害",
    2.0,
    "",
    2
   ],
   [
    "Light Step",
    "移動速度",
    3.0,
    "%",
    2
   ],
   [
    "Swiftness",
    "攻擊速度",
    0.05,
    "",
    2
   ]
  ]
 },
 {
  "id": "martial",
  "name": "Martial Artist",
  "zh": "武術家",
  "ic": "👊",
  "role": "Melee DPS",
  "diff": 2,
  "about": "用拳套和肉體力量戰鬥的近戰職業，以快速連擊和重拳壓制敵人。",
  "stars": [
   [
    "生命",
    3
   ],
   [
    "力量",
    4
   ],
   [
    "抗性",
    2
   ],
   [
    "速度",
    4
   ],
   [
    "敏捷",
    4
   ],
   [
    "魔法",
    0
   ],
   [
    "魔力",
    0
   ],
   [
    "耐力",
    4
   ]
  ],
  "subs": [
   [
    "Monk",
    "運用內在靈力，攻守平衡。"
   ],
   [
    "Brawler",
    "靠蠻力和兇猛連擊，追求壓倒性的傷害。"
   ]
  ],
  "skills": [
   [
    "Enchaînement",
    "主動",
    1,
    "三段拳連擊，一下比一下重。"
   ],
   [
    "Coup de Paume",
    "主動",
    3,
    "掌擊放出衝擊波，擊退前方敵人。"
   ],
   [
    "Aura de Combat",
    "被動",
    5,
    "連續命中會提高攻擊速度，最多疊 5 層。"
   ],
   [
    "Uppercut Dévastateur",
    "主動",
    7,
    "強力上勾拳把目標打飛到空中。"
   ],
   [
    "Poing du Dragon",
    "主動",
    10,
    "引導內在能量，打出向前推進的龍形拳。"
   ]
  ],
  "skillsSure": false,
  "wikiRev": 442,
  "weapons": {},
  "base": [],
  "perLv": [],
  "talents": []
 }
];
