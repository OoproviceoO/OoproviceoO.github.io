/* Recipes by NPC (key = floor-1 NPC name, or "3|name" for another floor; matches npcs.js where that NPC is mapped). Built by tools/build_recipes.py.
   Row: [catalogueId|null, name, seconds|null, [[material, qty]], cost Col ("Free"; null = unknown), rarity|null, category, level, source]
   category: weapon / armor / acc / potion / key. source: "shot" = owner's in-game screenshot (wins), "ref" = reference map.
   Weapons and armour here are only the starter gear sold by the Starting Merchant; smiths' recipes still need screenshots. */
window.SAO_RECIPES = {
"Alchemist": {
"floor": 1,
"items": [
[
2463,
"Quality Health Potion I",
5,
[
[
"Sylve Sprout",
8
],
[
"Allium Flower",
8
]
],
"5",
"b",
"potion",
1,
"shot"
],
[
2464,
"Quality Health Potion II",
5,
[
[
"Sylve Sprout",
8
],
[
"Bone Dust",
8
],
[
"Allium Flower",
12
]
],
"7",
"b",
"potion",
5,
"shot"
],
[
2465,
"Quality Health Potion III",
5,
[
[
"Sylve Sprout",
8
],
[
"Bone Dust",
8
],
[
"Ancestral Root",
1
],
[
"Allium Flower",
16
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
null,
"Quality Mana Potion I",
5,
[
[
"Soul of the Ruins",
8
],
[
"Allium Flower",
8
]
],
"5",
"b",
"potion",
1,
"shot"
],
[
null,
"Quality Mana Potion II",
5,
[
[
"Soul of the Ruins",
8
],
[
"Bone Dust",
8
],
[
"Allium Flower",
12
]
],
"7",
"b",
"potion",
5,
"shot"
],
[
null,
"Quality Mana Potion III",
5,
[
[
"Soul of the Ruins",
8
],
[
"Bone Dust",
8
],
[
"Ancestral Root",
1
],
[
"Allium Flower",
16
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
null,
"Quality Stamina Potion I",
5,
[
[
"Wheat",
8
],
[
"Allium Flower",
8
]
],
"5",
"b",
"potion",
1,
"shot"
],
[
null,
"Quality Stamina Potion II",
5,
[
[
"Wheat",
8
],
[
"Bone Dust",
8
],
[
"Allium Flower",
12
]
],
"7",
"b",
"potion",
5,
"shot"
],
[
null,
"Quality Stamina Potion III",
5,
[
[
"Wheat",
8
],
[
"Bone Dust",
8
],
[
"Ancestral Root",
1
],
[
"Allium Flower",
16
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
2457,
"Health Potion I",
null,
[],
"5.02",
"c",
"potion",
1,
"shot"
],
[
2458,
"Health Potion II",
null,
[],
"10.05",
"c",
"potion",
3,
"shot"
],
[
2459,
"Health Potion III",
null,
[],
"15.07",
"c",
"potion",
5,
"shot"
],
[
null,
"Mana Potion I",
null,
[],
"5.02",
"c",
"potion",
1,
"shot"
],
[
null,
"Mana Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
],
[
null,
"Mana Potion III",
null,
[],
"15.07",
"c",
"potion",
8,
"shot"
],
[
2471,
"Stamina Potion I",
null,
[],
"5.02",
"c",
"potion",
1,
"shot"
],
[
2472,
"Stamina Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
],
[
null,
"Stamina Potion III",
null,
[],
"15.07",
"c",
"potion",
8,
"shot"
]
]
},
"Bandit Accessories": {
"floor": 1,
"items": [
[
2040,
"Gloves of the Bandit",
15,
[
[
"Small Purse",
16
]
],
"Free",
"c",
"acc",
5,
"shot"
],
[
1456,
"Bandit Hood",
15,
[
[
"Small Purse",
16
]
],
"Free",
"c",
"acc",
5,
"shot"
],
[
1292,
"Stolen Amulet",
30,
[
[
"Small Purse",
24
]
],
"Free",
"b",
"acc",
5,
"shot"
],
[
1454,
"Stolen Cloak",
30,
[
[
"Small Purse",
24
]
],
"Free",
"b",
"acc",
5,
"shot"
],
[
1455,
"Bandit Coin",
30,
[
[
"Small Purse",
24
]
],
"Free",
"b",
"acc",
5,
"shot"
]
]
},
"Bracelet of Ice": {
"floor": 1,
"items": [
[
1596,
"Bracelet of Ice",
null,
[
[
"Fragment of the Bear's Soul",
3
],
[
"Hard Glacial Hide",
24
]
],
"45",
null,
"acc",
8,
"ref"
]
]
},
"Candelia": {
"floor": 1,
"items": [
[
2459,
"Health Potion III",
null,
[],
"15.07",
"c",
"potion",
5,
"shot"
],
[
null,
"Mana Potion III",
null,
[],
"15.07",
"c",
"potion",
8,
"shot"
],
[
null,
"Stamina Potion III",
null,
[],
"15.07",
"c",
"potion",
8,
"shot"
]
]
},
"Copper Accessories": {
"floor": 1,
"items": [
[
2477,
"Copper Ring",
15,
[
[
"Copper Ingot",
1
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
1591,
"Copper Bracelet",
15,
[
[
"Copper Ingot",
1
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
2039,
"Copper Gloves",
15,
[
[
"Copper Ingot",
1
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
1452,
"Copper Coin",
15,
[
[
"Copper Ingot",
1
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
1290,
"Copper Amulet",
15,
[
[
"Copper Ingot",
1
],
[
"Copper String",
1
]
],
"25",
"c",
"acc",
3,
"shot"
]
]
},
"Corrupted Boar Accessories": {
"floor": 1,
"items": [
[
2475,
"Ring of the Boar",
15,
[
[
"Boar Hide",
8
],
[
"Corrupted Crystal",
8
]
],
"25",
"c",
"acc",
null,
"shot"
],
[
2038,
"Gloves of the Boar",
15,
[
[
"Boar Hide",
8
],
[
"Corrupted Crystal",
8
]
],
"25",
"c",
"acc",
null,
"shot"
],
[
1590,
"Bracelet of the Boar",
30,
[
[
"Boar Hide",
16
],
[
"Corrupted Crystal",
8
]
],
"28",
"b",
"acc",
null,
"shot"
],
[
1451,
"Belt of the Boar",
30,
[
[
"Boar Hide",
16
],
[
"Corrupted Crystal",
8
]
],
"28",
"b",
"acc",
null,
"shot"
]
]
},
"Crystallographer": {
"floor": 1,
"items": [
[
1747,
"Healing Crystal",
300,
[
[
"Ancestral Root",
16
],
[
"Magic Mycelium",
4
],
[
"Essence of Gorbel",
1
],
[
"Frost Dust",
32
]
],
"50",
"a",
"potion",
10,
"shot"
],
[
1749,
"Mana Crystal",
300,
[
[
"Ancestral Root",
16
],
[
"Magic Mycelium",
4
],
[
"Essence of Gorbel",
1
],
[
"Glacial Magic Shard",
32
]
],
"50",
"a",
"potion",
10,
"shot"
],
[
1750,
"Stamina Crystal",
300,
[
[
"Ancestral Root",
16
],
[
"Magic Mycelium",
4
],
[
"Essence of Gorbel",
1
],
[
"Hard Glacial Hide",
32
]
],
"50",
"a",
"potion",
10,
"shot"
]
]
},
"Cursed Ruins - Loot Buyer": {
"floor": 1,
"items": [
[
2458,
"Health Potion II",
null,
[],
"10.05",
"c",
"potion",
3,
"shot"
],
[
null,
"Mana Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
],
[
2472,
"Stamina Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
]
]
},
"Cursed Ruins - Loot Buyer (2)": {
"floor": 1,
"items": [
[
2458,
"Health Potion II",
null,
[],
"10.05",
"c",
"potion",
3,
"shot"
],
[
null,
"Mana Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
],
[
2472,
"Stamina Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
]
]
},
"Deer Accessories": {
"floor": 1,
"items": [
[
1594,
"Bracelet of the Stags",
30,
[
[
"Mountain Stag Hide",
12
]
],
"33",
"b",
"acc",
7,
"shot"
],
[
2043,
"Gloves of the Stags",
30,
[
[
"Mountain Stag Hide",
12
]
],
"33",
"b",
"acc",
7,
"shot"
]
]
},
"Elite Treant Accessories": {
"floor": 1,
"items": [
[
null,
"Elite Gloves",
15,
[
[
"Wolf Fur",
8
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
null,
"Elite Amulet",
15,
[
[
"Oak String",
1
],
[
"Sylvan Bark",
8
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
null,
"Elite Bracelet",
30,
[
[
"Oak Log",
4
],
[
"Titan Bark",
4
],
[
"Sylvan Bark",
8
]
],
"28",
"b",
"acc",
3,
"shot"
],
[
null,
"Elite Carapace",
30,
[
[
"Titan Bark",
8
],
[
"Sylvan Bark",
8
],
[
"Sylve Sprout",
8
]
],
"28",
"b",
"acc",
3,
"shot"
]
]
},
"Fallen Labyrinth Dungeon Guard - Tolbana": {
"floor": 1,
"items": [
[
1823,
"Key of the Fallen",
60,
[
[
"Leaf Fragments",
8
],
[
"Cursed Cloth",
8
]
],
"20",
"b",
"key",
null,
"shot"
]
]
},
"Geldorak Dungeon Guard - Starting Town": {
"floor": 1,
"items": [
[
1821,
"Forest Key",
60,
[
[
"Sylvan Bark",
8
],
[
"Wood Heart",
4
],
[
"Magic Mycelium",
1
]
],
"10",
"c",
"key",
null,
"shot"
]
]
},
"Hanaka - Loot Buyer": {
"floor": 1,
"items": [
[
2457,
"Health Potion I",
null,
[],
"5.02",
"c",
"potion",
null,
"shot"
],
[
null,
"Mana Potion I",
null,
[],
"5.02",
"c",
"potion",
null,
"shot"
],
[
2471,
"Stamina Potion I",
null,
[],
"5.02",
"c",
"potion",
null,
"shot"
]
]
},
"Ice Golem Accessories": {
"floor": 1,
"items": [
[
null,
"Frozen Ring",
30,
[
[
"Hard Glacial Hide",
12
],
[
"Frost Dust",
8
]
],
"33",
"b",
"acc",
7,
"shot"
],
[
null,
"Frozen Bracelet",
30,
[
[
"Hard Glacial Hide",
16
]
],
"33",
"b",
"acc",
7,
"shot"
],
[
null,
"Frozen Gloves",
15,
[
[
"Hard Glacial Hide",
12
]
],
"30",
"c",
"acc",
7,
"shot"
],
[
null,
"Frozen Amulet",
15,
[
[
"Hard Glacial Hide",
8
],
[
"Birch String",
1
]
],
"30",
"c",
"acc",
7,
"shot"
]
]
},
"Ice Spirit Accessories": {
"floor": 1,
"items": [
[
null,
"Glacial Ring",
30,
[
[
"Glacial Magic Shard",
12
],
[
"Frost Dust",
8
]
],
"33",
"b",
"acc",
7,
"shot"
],
[
null,
"Glacial Antenna",
30,
[
[
"Glacial Magic Shard",
16
]
],
"33",
"b",
"acc",
7,
"shot"
],
[
null,
"Glacial Essence",
60,
[
[
"Frost Dust",
32
]
],
"40",
"a",
"acc",
7,
"shot"
],
[
null,
"Glacial Amulet",
30,
[
[
"Glacial Magic Shard",
12
],
[
"Birch String",
1
]
],
"33",
"b",
"acc",
7,
"shot"
]
]
},
"Iron Accessories": {
"floor": 1,
"items": [
[
2482,
"Iron Ring",
15,
[
[
"Iron Ingot",
1
]
],
"30",
"b",
"acc",
5,
"shot"
],
[
1593,
"Iron Bracelet",
15,
[
[
"Iron Ingot",
1
]
],
"30",
"b",
"acc",
5,
"shot"
],
[
2042,
"Iron Gloves",
15,
[
[
"Iron Ingot",
1
]
],
"30",
"b",
"acc",
5,
"shot"
],
[
1457,
"Iron Coin",
15,
[
[
"Iron Ingot",
1
]
],
"30",
"b",
"acc",
5,
"shot"
],
[
1297,
"Iron Amulet",
15,
[
[
"Iron Ingot",
1
],
[
"Iron String",
1
]
],
"30",
"b",
"acc",
5,
"shot"
]
]
},
"Key Blacksmith": {
"floor": 1,
"items": [
[
null,
"Kobold Key",
null,
[],
"5024.91",
"b",
"key",
null,
"shot"
]
]
},
"Magical & Icy Loot Buyer": {
"floor": 1,
"items": [
[
2459,
"Health Potion III",
null,
[],
"15.07",
"c",
"potion",
5,
"shot"
],
[
null,
"Mana Potion III",
null,
[],
"15.07",
"c",
"potion",
8,
"shot"
],
[
null,
"Stamina Potion III",
null,
[],
"15.07",
"c",
"potion",
8,
"shot"
]
]
},
"Mizunari Loot Buyer": {
"floor": 1,
"items": [
[
2458,
"Health Potion II",
null,
[],
"10.05",
"c",
"potion",
3,
"shot"
],
[
null,
"Mana Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
],
[
2472,
"Stamina Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
]
]
},
"Necklace of Aragorn": {
"floor": 1,
"items": [
[
1458,
"Necklace of Aragorn",
null,
[
[
"Spider Venom",
3
],
[
"Oak String",
1
],
[
"Spider Thread",
20
]
],
"50",
null,
"acc",
8,
"ref"
]
]
},
"Nepenthes Accessories": {
"floor": 1,
"items": [
[
null,
"Ring of the Nepenthes",
15,
[
[
"Leaf Fragments",
8
],
[
"Corrupted Spore",
8
]
],
"25",
"c",
"acc",
5,
"shot"
],
[
null,
"Bracelet of the Nepenthes",
30,
[
[
"Leaf Fragments",
12
]
],
"28",
"b",
"acc",
5,
"shot"
],
[
null,
"Amulet of the Nepenthes",
15,
[
[
"Leaf Fragments",
4
],
[
"Corrupted Spore",
4
],
[
"Oak String",
1
]
],
"25",
"c",
"acc",
5,
"shot"
]
]
},
"Occult Merchant - Amulet": {
"floor": 1,
"items": [
[
null,
"Occult Amulet",
null,
[],
"5024.91",
"s",
"acc",
10,
"shot"
]
]
},
"Occult Merchant - Artifacts": {
"floor": 1,
"items": [
[
1461,
"Occult Skull",
null,
[],
"5024.91",
"s",
"acc",
10,
"shot"
],
[
1462,
"Occult Robe",
null,
[],
"5024.91",
"s",
"acc",
10,
"shot"
],
[
1463,
"Occult Hood",
null,
[],
"5024.91",
"s",
"acc",
10,
"shot"
]
]
},
"Occult Merchant - Bracelet": {
"floor": 1,
"items": [
[
1597,
"Occult Bracelet",
null,
[],
"5024.91",
"s",
"acc",
10,
"shot"
]
]
},
"Occult Merchant - Gloves": {
"floor": 1,
"items": [
[
2045,
"Occult Gloves",
null,
[],
"5024.91",
"s",
"acc",
10,
"shot"
]
]
},
"Occult Merchant - Ring": {
"floor": 1,
"items": [
[
null,
"Occult Ring",
null,
[],
"5024.91",
"s",
"acc",
10,
"shot"
]
]
},
"PvP Purification Alchemist": {
"floor": 1,
"items": [
[
null,
"Purification Elixir",
15,
[
[
"Ancestral Root",
1
],
[
"Frost Dust",
1
],
[
"Bone Dust",
1
],
[
"Slime Core",
1
]
],
"Free",
"a",
"potion",
null,
"shot"
]
]
},
"Ring of the Leviathan": {
"floor": 1,
"items": [
[
2485,
"Ring of the Leviathan",
300,
[
[
"Shark Carapace",
24
],
[
"Heart of Nymbrea",
3
],
[
"Iron Ingot",
1
]
],
"55",
"s",
"acc",
7,
"shot"
]
]
},
"Secret Accessory Blacksmith": {
"floor": 1,
"items": [
[
2044,
"Gloves of the Wolves",
60,
[
[
"Wolf Fur",
32
],
[
"Wolf Fangs",
16
]
],
"40",
"a",
"acc",
5,
"shot"
]
]
},
"Secret Deer Belt Merchant": {
"floor": 1,
"items": [
[
1460,
"Belt of the Stags",
60,
[
[
"Mountain Stag Hide",
20
]
],
"40",
"a",
"acc",
7,
"shot"
]
]
},
"Secret Gelatinous Cloak": {
"floor": 1,
"items": [
[
1453,
"Gelatinous Cloak",
null,
[
[
"Stolen Cloak",
1
],
[
"Slime Essence",
1
],
[
"Slime Tear",
1
]
],
null,
null,
"acc",
7,
"ref"
]
]
},
"Secret Sticky Ring Merchant": {
"floor": 1,
"items": [
[
2479,
"Sticky Ring",
60,
[
[
"Slime Jelly",
12
],
[
"Essence of Gorbel",
3
],
[
"Slime Core",
8
]
],
"35",
"a",
"acc",
5,
"shot"
]
]
},
"Sewer Reshaper": {
"floor": 1,
"items": [
[
null,
"Slime Essence",
60,
[
[
"Slime Jelly",
16
],
[
"Essence of Gorbel",
1
]
],
"20",
"a",
"other",
null,
"shot"
],
[
null,
"Slime Tear",
240,
[
[
"Slime Core",
16
]
],
"25",
"s",
"other",
null,
"shot"
]
]
},
"Shark Accessories": {
"floor": 1,
"items": [
[
null,
"Ring of the Shark",
15,
[
[
"Shark Carapace",
8
]
],
"30",
"c",
"acc",
7,
"shot"
],
[
null,
"Shark Amulet",
15,
[
[
"Shark Carapace",
8
],
[
"Birch String",
1
]
],
"30",
"c",
"acc",
7,
"shot"
],
[
null,
"Shark Fang",
30,
[
[
"Shark Carapace",
12
],
[
"Wolf Fangs",
8
]
],
"33",
"b",
"acc",
7,
"shot"
],
[
null,
"Bracelet of the Shark",
30,
[
[
"Shark Carapace",
12
],
[
"Iron Ingot",
1
]
],
"33",
"b",
"acc",
7,
"shot"
]
]
},
"Skeleton Accessories": {
"floor": 1,
"items": [
[
2474,
"Skeletal Ring",
15,
[
[
"Skeleton Bone",
8
],
[
"Soul of the Ruins",
8
]
],
"25",
"c",
"acc",
null,
"shot"
],
[
2037,
"Bony Gloves",
30,
[
[
"Skeleton Bone",
12
],
[
"Reinforced Skeleton Bone",
8
]
],
"28",
"b",
"acc",
null,
"shot"
],
[
1289,
"Skeletal Amulet",
15,
[
[
"Skeleton Bone",
4
],
[
"Soul of the Ruins",
4
],
[
"Oak String",
1
]
],
"25",
"c",
"acc",
null,
"shot"
]
]
},
"Skeleton Skull": {
"floor": 1,
"items": [
[
1450,
"Skeleton Skull",
60,
[
[
"Reinforced Skeleton Bone",
20
]
],
"35",
"a",
"acc",
8,
"shot"
]
]
},
"Slime Accessories": {
"floor": 1,
"items": [
[
2478,
"Slimy Ring",
15,
[
[
"Slime Jelly",
8
]
],
"25",
"c",
"acc",
4,
"shot"
],
[
1592,
"Gelatinous Bracelet",
30,
[
[
"Slime Jelly",
12
],
[
"Slime Core",
4
]
],
"28",
"b",
"acc",
4,
"shot"
],
[
1291,
"Gelatinous Amulet",
15,
[
[
"Oak String",
1
],
[
"Slime Jelly",
8
]
],
"25",
"c",
"acc",
4,
"shot"
]
]
},
"Spider Accessories": {
"floor": 1,
"items": [
[
null,
"Spider Ring",
15,
[
[
"Spider Cloth",
8
],
[
"Coal Ore",
8
]
],
"30",
"c",
"acc",
6,
"shot"
],
[
1595,
"Spider Bracelet",
15,
[
[
"Spider Cloth",
8
],
[
"Corrupted Spore",
8
]
],
"30",
"c",
"acc",
6,
"shot"
],
[
null,
"Spider Gloves",
15,
[
[
"Spider Cloth",
8
],
[
"Spider Thread",
8
]
],
"30",
"c",
"acc",
6,
"shot"
],
[
null,
"Spider Cloak",
30,
[
[
"Spider Cloth",
12
],
[
"Spider Thread",
8
]
],
"33",
"b",
"acc",
6,
"shot"
]
]
},
"Starting Merchant": {
"floor": 1,
"items": [
[
null,
"Teleportation Crystal",
null,
[],
"301.49",
"s",
"other",
null,
"shot"
],
[
1957,
"Boar Meat",
null,
[],
"1.00",
"c",
"other",
1,
"shot"
],
[
2457,
"Health Potion I",
null,
[],
"5.02",
"c",
"potion",
1,
"shot"
],
[
null,
"Mana Potion I",
null,
[],
"5.02",
"c",
"potion",
1,
"shot"
],
[
2471,
"Stamina Potion I",
null,
[],
"5.02",
"c",
"potion",
1,
"shot"
],
[
1334,
"Beginner's Tunic",
null,
[],
"50.25",
"c",
"armor",
1,
"shot"
],
[
1335,
"Beginner's Leggings",
null,
[],
"50.25",
"c",
"armor",
1,
"shot"
],
[
1336,
"Beginner's Boots",
null,
[],
"50.25",
"c",
"armor",
1,
"shot"
],
[
2596,
"Training Sword",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1566,
"Training Bow",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1727,
"Training Crossbow",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1760,
"Training Dagger",
null,
[],
"1.00",
"c",
"weapon",
null,
"shot"
],
[
1761,
"Training Scythe",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1762,
"Training Katana",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
2569,
"Training Magic Staff",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
null,
"Training Scepter",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1626,
"Unbound Grimoire",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1627,
"Training Lantern",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1628,
"Wild Grimoire",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
null,
"Training Quiver",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
2534,
"Training Pavise",
null,
[],
"1.00",
"c",
"weapon",
null,
"shot"
],
[
2533,
"Training Buckler",
null,
[],
"1.00",
"c",
"weapon",
null,
"shot"
],
[
null,
"Training Dagger (2)",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
],
[
1627,
"Training Lantern (2)",
null,
[],
"1.00",
"c",
"weapon",
1,
"shot"
]
]
},
"Starting Town - Tools": {
"floor": 1,
"items": [
[
2703,
"Chipped Axe",
null,
[],
"50.25",
"c",
"other",
null,
"shot"
],
[
2691,
"Cracked Pickaxe",
null,
[],
"50.25",
"c",
"other",
null,
"shot"
],
[
null,
"Twisted Hoe",
null,
[],
"50.25",
"c",
"other",
null,
"shot"
],
[
2709,
"Wooden Fishing Rod",
null,
[],
"50.25",
"c",
"other",
null,
"shot"
]
]
},
"Sylve Accessories": {
"floor": 1,
"items": [
[
1589,
"Bracelet of the Sylve",
15,
[
[
"Oak Log",
8
],
[
"Magic Wood Shard",
8
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
1288,
"Amulet of the Sylve",
15,
[
[
"Magic Wood Shard",
8
],
[
"Oak String",
1
]
],
"25",
"c",
"acc",
3,
"shot"
],
[
2473,
"Ring of the Sylve",
30,
[
[
"Magic Wood Shard",
8
],
[
"Allium Flower",
8
],
[
"Oak Log",
4
],
[
"Wood Heart",
1
]
],
"28",
"b",
"acc",
3,
"shot"
]
]
},
"The Assistant": {
"floor": 1,
"items": [
[
1969,
"Quality Vitality Fortifier I",
10,
[
[
"Magic Wood Shard",
16
],
[
"Wood Heart",
2
],
[
"Slime Core",
2
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
1970,
"Quality Ferocity Fortifier I",
10,
[
[
"Wolf Fangs",
16
],
[
"Wheat Flower",
2
],
[
"Fangs of Albal",
1
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
1971,
"Quality Knowledge Fortifier I",
10,
[
[
"Allium Flower",
16
],
[
"Lavender",
2
],
[
"Refined Allium",
1
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
1972,
"Quality Endurance Fortifier I",
10,
[
[
"Wheat",
16
],
[
"Wheat Leaves",
2
],
[
"Refined Wheat",
1
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
1973,
"Quality Resistance Fortifier I",
10,
[
[
"Hard Glacial Hide",
16
],
[
"Wisteria",
2
],
[
"Ancestral Root",
2
]
],
"10",
"b",
"potion",
8,
"shot"
],
[
1974,
"Quality Patience Fortifier I",
10,
[
[
"Soul of the Ruins",
16
],
[
"Glacial Magic Shard",
8
],
[
"Fragment of the Bear's Soul",
1
]
],
"10",
"b",
"potion",
8,
"shot"
]
]
},
"Vallhat - Loot Buyer": {
"floor": 1,
"items": [
[
2457,
"Health Potion I",
null,
[],
"5.02",
"c",
"potion",
null,
"shot"
],
[
null,
"Mana Potion I",
null,
[],
"5.02",
"c",
"potion",
null,
"shot"
],
[
2471,
"Stamina Potion I",
null,
[],
"5.02",
"c",
"potion",
null,
"shot"
]
]
},
"Virelune - Loot Buyer": {
"floor": 1,
"items": [
[
2458,
"Health Potion II",
null,
[],
"10.05",
"c",
"potion",
3,
"shot"
],
[
null,
"Mana Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
],
[
2472,
"Stamina Potion II",
null,
[],
"10.05",
"c",
"potion",
5,
"shot"
]
]
},
"Wolf Accessories": {
"floor": 1,
"items": [
[
2480,
"Ring of the Wolf",
30,
[
[
"Wolf Fur",
16
],
[
"Oak Log",
8
]
],
"33",
"b",
"acc",
3,
"shot"
],
[
1296,
"Albal's Necklace",
30,
[
[
"Birch String",
1
],
[
"Fangs of Albal",
4
]
],
"33",
"b",
"acc",
3,
"shot"
]
]
},
"Xal'Zirith Dungeon Guard - Candelia": {
"floor": 1,
"items": [
[
1824,
"Key of Xal'Zirith",
60,
[
[
"Spider Cloth",
16
],
[
"Spider Thread",
16
]
],
"15",
"b",
"key",
null,
"shot"
]
]
},
"3|Assistant to the Alchemist": {
"floor": 3,
"items": [
[
1999,
"Quality Endurance Fortifier III",
60,
[
[
"Wheat",
14
],
[
"Wheat Leaves",
4
],
[
"Wheat Flower",
2
],
[
"Yellow Spider Carcass",
16
]
],
"55",
"b",
"potion",
null,
"shot"
],
[
1998,
"Quality Knowledge Fortifier III",
60,
[
[
"Allium Flower",
14
],
[
"Lavender",
4
],
[
"Wisteria",
5
],
[
"Purple Spider Eyes",
8
]
],
"55",
"b",
"potion",
null,
"shot"
],
[
1997,
"Quality Ferocity Fortifier III",
60,
[
[
"琥珀萼片",
14
],
[
"琥珀種子",
4
],
[
"Flarevae",
16
],
[
"Orc Blood",
8
]
],
"55",
"b",
"potion",
null,
"shot"
],
[
1996,
"Quality Vitality Fortifier III",
60,
[
[
"奧拉西爾之刺",
16
],
[
"Sylvaerian Jewel",
8
],
[
"Sylvaer Essence",
1
]
],
"55",
"b",
"potion",
null,
"shot"
],
[
2001,
"Quality Patience Fortifier III",
60,
[
[
"Sylnovarian Leaves",
12
],
[
"Sylnovarian Jewel",
8
],
[
"Sylnovar Essence",
1
]
],
"55",
"b",
"potion",
null,
"shot"
],
[
2000,
"Quality Resistance Fortifier III",
60,
[
[
"White Spider Powder",
12
],
[
"Juvenile Bark",
6
],
[
"Ravager Bark",
6
],
[
"Orc Heart",
1
]
],
"55",
"b",
"potion",
null,
"shot"
]
]
},
"3|Alchemist": {
"floor": 3,
"items": [
[
2464,
"Quality Health Potion II",
5,
[
[
"Allium Flower",
6
],
[
"Sylve Sprout",
4
],
[
"Magic Wood Shard",
3
]
],
"15",
"b",
"potion",
5,
"shot"
],
[
null,
"Quality Mana Potion II",
5,
[
[
"Allium Flower",
6
],
[
"Sylve Sprout",
4
],
[
"Magic Wood Shard",
3
]
],
"15",
"b",
"potion",
5,
"shot"
],
[
null,
"Quality Stamina Potion II",
5,
[
[
"Allium Flower",
6
],
[
"Sylve Sprout",
4
],
[
"Magic Wood Shard",
3
]
],
"15",
"b",
"potion",
5,
"shot"
],
[
2465,
"Quality Health Potion III",
5,
[
[
"Allium Flower",
9
],
[
"Sylve Sprout",
6
],
[
"Magic Wood Shard",
5
],
[
"Ancestral Root",
1
]
],
"15",
"b",
"potion",
8,
"shot"
],
[
null,
"Quality Mana Potion III",
5,
[
[
"Allium Flower",
9
],
[
"Sylve Sprout",
6
],
[
"Magic Wood Shard",
5
],
[
"Ancestral Root",
1
]
],
"15",
"b",
"potion",
8,
"shot"
],
[
null,
"Quality Stamina Potion III",
5,
[
[
"Allium Flower",
9
],
[
"Sylve Sprout",
6
],
[
"Magic Wood Shard",
5
],
[
"Ancestral Root",
1
]
],
"15",
"b",
"potion",
8,
"shot"
],
[
2466,
"Quality Health Potion IV",
5,
[
[
"Allium Flower",
10
],
[
"Flaming Feather",
10
],
[
"Marrow Powder",
3
]
],
"15",
"b",
"potion",
12,
"shot"
],
[
2467,
"Quality Health Potion V",
5,
[
[
"Allium Flower",
12
],
[
"Orc Blood",
6
]
],
"15",
"b",
"potion",
15,
"shot"
],
[
2468,
"Quality Health Potion VI",
5,
[
[
"Allium Flower",
12
],
[
"Orc Blood",
10
],
[
"Orc Eye",
8
]
],
"15",
"b",
"potion",
18,
"shot"
],
[
null,
"Quality Mana Potion V",
5,
[
[
"Allium Flower",
12
],
[
"Sylnovarian Leaves",
6
]
],
"15",
"b",
"potion",
15,
"shot"
],
[
null,
"Quality Mana Potion VI",
5,
[
[
"Allium Flower",
12
],
[
"Sylnovarian Leaves",
10
],
[
"Sylnovarian Jewel",
8
]
],
"15",
"b",
"potion",
18,
"shot"
],
[
null,
"Quality Stamina Potion V",
5,
[
[
"Allium Flower",
12
],
[
"Yellow Spider Carcass",
12
]
],
"15",
"b",
"potion",
15,
"shot"
],
[
null,
"Quality Stamina Potion VI",
5,
[
[
"Allium Flower",
12
],
[
"Yellow Spider Carcass",
16
],
[
"Wheat Flower",
4
]
],
"15",
"b",
"potion",
18,
"shot"
]
]
},
"3|Reinforced Tools Merchant": {
"floor": 3,
"items": [
[
2695,
"Pioche Renforcée",
null,
[],
"753.74",
"c",
"other",
15,
"shot"
],
[
2707,
"Hache Renforcée",
null,
[],
"753.74",
"c",
"other",
15,
"shot"
],
[
2701,
"Houe Renforcée",
null,
[],
"753.74",
"c",
"other",
15,
"shot"
]
]
},
"3|Consumables Merchant": {
"floor": 3,
"items": [
[
2457,
"Health Potion I",
null,
[],
"30.15",
"c",
"potion",
1,
"shot"
],
[
null,
"Mana Potion I",
null,
[],
"30.15",
"c",
"potion",
1,
"shot"
],
[
2471,
"Stamina Potion I",
null,
[],
"30.15",
"c",
"potion",
1,
"shot"
],
[
2458,
"Health Potion II",
null,
[],
"65.32",
"c",
"potion",
3,
"shot"
],
[
null,
"Mana Potion II",
null,
[],
"65.32",
"c",
"potion",
5,
"shot"
],
[
2472,
"Stamina Potion II",
null,
[],
"65.32",
"c",
"potion",
5,
"shot"
],
[
2459,
"Health Potion III",
null,
[],
"100.50",
"c",
"potion",
5,
"shot"
],
[
2470,
"Mana Potion III",
null,
[],
"100.50",
"c",
"potion",
8,
"shot"
],
[
null,
"Stamina Potion III",
null,
[],
"100.50",
"c",
"potion",
8,
"shot"
],
[
1708,
"Parchemin de Réallocation",
null,
[],
"753.74",
"b",
"other",
null,
"shot"
],
[
1707,
"Parchemin de Maîtrise",
null,
[],
"753.74",
"b",
"other",
null,
"shot"
]
]
},
"3|Basic Rune Craftsman": {
"floor": 3,
"items": [
[
2021,
"Rune des Bois",
60,
[
[
"橙色赤鐵礦",
8
],
[
"蜂蜜琥珀",
16
],
[
"Woodland Tail",
16
]
],
"15",
"b",
"other",
null,
"shot"
],
[
2020,
"Rune Gobeline",
60,
[
[
"孔雀石",
6
],
[
"Goblin Essence",
1
]
],
"15",
"b",
"other",
null,
"shot"
],
[
2019,
"Rune Orcienne",
60,
[
[
"石榴石",
2
],
[
"鋁土礦錠",
4
],
[
"Orc Blood",
16
]
],
"15",
"b",
"other",
null,
"shot"
],
[
2022,
"Rune de la Toile",
60,
[
[
"赤鐵礦",
4
],
[
"Iron Ingot",
4
],
[
"Scrap Metal Piece",
8
]
],
"15",
"b",
"other",
null,
"shot"
]
]
},
"3|Complex Rune Craftsman": {
"floor": 3,
"items": [
[
2023,
"Rune Sylnovarienne",
60,
[
[
"藍銅礦",
6
],
[
"藍寶石",
2
],
[
"Sylnovar Essence",
1
]
],
"15",
"a",
"other",
null,
"shot"
],
[
2024,
"Rune Sylvaerienne",
60,
[
[
"孔雀石",
6
],
[
"綠松石",
2
],
[
"Sylvaer Essence",
1
]
],
"15",
"a",
"other",
null,
"shot"
],
[
2025,
"Rune Brumeuse",
60,
[
[
"黃鐵礦",
6
],
[
"Anthracite",
4
],
[
"Misty Tail",
32
]
],
"15",
"a",
"other",
null,
"shot"
],
[
2026,
"Rune Luminiscente",
60,
[
[
"金黃鐵礦",
4
],
[
"蜂蜜琥珀",
16
],
[
"Luminescent Spider Venom",
1
]
],
"15",
"a",
"other",
null,
"shot"
],
[
2027,
"Rune Spectrale",
60,
[
[
"紅柱石",
6
],
[
"Jet",
4
],
[
"Spectral Essence",
1
]
],
"15",
"a",
"other",
null,
"shot"
]
]
},
"3|Sylnovar Accessories Blacksmith": {
"floor": 3,
"items": [
[
1517,
"Bottes des Crocs des Bois",
600,
[
[
"Bottes des Bois",
1
],
[
"Woodland Tail",
32
],
[
"Sylnovarian Cloth",
64
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1519,
"Bottes au Crocs Brumeux",
600,
[
[
"Bottes Brumeuses",
1
],
[
"Misty Tail",
32
],
[
"Sylvaerian Cloth",
64
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1514,
"Bottes Orciennes",
600,
[
[
"Bottes Goblines",
1
],
[
"Ravager Bark",
32
],
[
"Ravager Heart",
16
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1521,
"Bottes des Bois Sombres",
600,
[
[
"Bottes Sylvestres",
1
],
[
"Sylvaerian Jewel",
32
],
[
"Juvenile Bark",
32
],
[
"Sylvaer Essence",
16
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1526,
"Bottes de la Toile",
600,
[
[
"Bottes en Toile d'Araignée",
1
],
[
"Black Silk",
32
],
[
"White Spider Silk",
32
],
[
"Egg Cocoon",
16
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1523,
"Bottes Luminescentes",
600,
[
[
"Yellow Spider Silk",
64
],
[
"Luminescent Spider Venom",
16
],
[
"Misty Fur",
64
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1345,
"Bottes Spectrales",
600,
[
[
"White Spider Silk",
64
],
[
"Spectral Essence",
16
],
[
"Misty Fur",
64
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1538,
"Couteau à la Griffe des Bois",
600,
[
[
"Woodland Claw",
128
],
[
"Juvenile Seed",
16
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1540,
"Couteau à la Griffe de la Brume",
600,
[
[
"Misty Claw",
128
],
[
"Juvenile Seed",
16
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1542,
"Hache de la Tribu",
600,
[
[
"Orc Eye",
64
],
[
"Orc Essence",
16
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1545,
"Grimoire des Bois Sombres",
600,
[
[
"Orc Heart",
16
],
[
"Ravager Heart",
16
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1547,
"Masque de la Toile",
600,
[
[
"強化蛛絲",
16
],
[
"White Spider Silk",
64
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1549,
"Ceinture Luminescente",
600,
[
[
"Yellow Spider Carcass",
128
],
[
"Yellow Spider Silk",
64
]
],
"30",
"a",
"acc",
null,
"shot"
],
[
1551,
"Plume Spectrale",
600,
[
[
"Spectral Essence",
16
],
[
"White Spider Silk",
64
]
],
"30",
"a",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Couteau en Dent de Loup": {
"floor": 3,
"items": [
[
1564,
"Couteau en Dent de Loup",
600,
[
[
"Wolf Fangs",
64
],
[
"Fangs of Albal",
8
],
[
"Woodland Claw",
96
]
],
"55",
"s",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Gants Féroce": {
"floor": 3,
"items": [
[
2074,
"Gants Féroce",
600,
[
[
"Wolf Fur",
64
],
[
"Wolf Fur (2)",
64
],
[
"Woodland Fur",
96
],
[
"Woodland Tail",
32
]
],
"55",
"s",
"acc",
null,
"shot"
]
]
},
"3|P3 - Forgeron Grimoire Corrompu": {
"floor": 3,
"items": [
[
1565,
"Grimoire Faible Corruption",
600,
[
[
"Corrupted Fragment",
32
],
[
"Corrupted Fragment (2)",
16
],
[
"Corrupted Fragment (3)",
8
]
],
"55",
"splus",
"acc",
null,
"shot"
]
]
},
"2|Manufacturer of the Runic Necklace": {
"floor": 2,
"items": [
[
1309,
"Collier Runique",
60,
[
[
"Bone Dust",
64
],
[
"Spectral Chain",
64
],
[
"Runestone",
64
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Anneau Draconique Corrompu": {
"floor": 3,
"items": [
[
2522,
"Anneau Draconique Corrompu",
600,
[
[
"腐化金屬錠",
1
],
[
"腐化碎片（三種之一，看不出是哪一種）",
16
],
[
"Fangs of Albal",
8
]
],
"55",
"splus",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Bottes du Pionnier": {
"floor": 3,
"items": [
[
1512,
"Bottes du Pionnier",
900,
[
[
"探險家之靴",
1
],
[
"Bear Hide",
128
],
[
"Ravager Bark",
64
],
[
"Thick Hide",
96
],
[
"Black Silk",
64
],
[
"Ancient Woods Essence",
8
]
],
"30",
"s",
"acc",
16,
"shot"
]
]
},
"3|Refaiter": {
"floor": 3,
"items": [
[
null,
"冷杉細繩",
60,
[
[
"冷杉原木",
8
],
[
"Spider Thread",
4
]
],
"15",
"c",
"other",
null,
"shot"
],
[
2367,
"Ficelle de Bouleau",
60,
[
[
"樺木原木",
8
],
[
"Spider Thread",
4
]
],
"15",
"b",
"other",
null,
"shot"
],
[
null,
"橡木細繩",
60,
[
[
"Oak Log",
8
],
[
"Spider Thread",
4
]
],
"15",
"c",
"other",
null,
"shot"
],
[
null,
"金合歡細繩",
60,
[
[
"金合歡原木",
8
],
[
"Spider Thread",
4
]
],
"15",
"c",
"other",
null,
"shot"
]
]
},
"3|Adventurer's Shoemaker": {
"floor": 3,
"items": [
[
1510,
"Bottes de l'Aventurier",
300,
[
[
"磨損皮革",
128
],
[
"狼皮（第 1 或第 2 層，看不出來）",
128
],
[
"Misty Fur",
96
],
[
"Misty Tail",
48
]
],
"30",
"b",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Artefact Manteau Crocs Bois": {
"floor": 3,
"items": [
[
1539,
"Manteau des Crocs des Bois",
600,
[
[
"Woodland Fur",
256
],
[
"Woodland Tail",
64
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"3|Accessories Bandit Blacksmith": {
"floor": 3,
"items": [
[
1553,
"Cagoule du Voleur",
300,
[
[
"Medium Pouch",
8
],
[
"Small Purse",
64
],
[
"Bandit Gold Coin",
32
]
],
"55",
"a",
"acc",
null,
"shot"
],
[
2075,
"Gants du Voleur",
300,
[
[
"Medium Pouch",
8
],
[
"Small Purse",
64
],
[
"Bandit Gold Coin",
32
]
],
"55",
"b",
"acc",
null,
"shot"
],
[
2519,
"Anneau du Voleur",
300,
[
[
"Medium Pouch",
8
],
[
"Small Purse",
64
],
[
"Bandit Gold Coin",
32
]
],
"55",
"b",
"acc",
null,
"shot"
],
[
1331,
"Amulette du Voleur",
300,
[
[
"Medium Pouch",
8
],
[
"Small Purse",
64
],
[
"Bandit Gold Coin",
32
]
],
"55",
"b",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Artefact Masque Voleur": {
"floor": 3,
"items": [
[
1554,
"Masque du Voleur",
600,
[
[
"Medium Pouch",
32
],
[
"Small Purse",
64
],
[
"Bandit Gold Coin",
64
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Artefact Boucles d'Oreilles Bois Sombres": {
"floor": 3,
"items": [
[
1546,
"Boucles d'Oreilles des Bois Sombres",
600,
[
[
"Juvenile Bark",
64
],
[
"Sylvaerian Jewel",
64
],
[
"Iron Ingot",
16
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Jeton Occulte": {
"floor": 3,
"items": [
[
2386,
"Jeton Occulte",
0,
[
[
"Medium Pouch",
64
]
],
"55",
"splusplus",
"other",
null,
"shot"
]
]
},
"3|Leatherworker": {
"floor": 3,
"items": [
[
1516,
"Bottes des Bois",
300,
[
[
"Woodland Fur",
64
],
[
"Woodland Tail",
32
],
[
"Bear Hide",
32
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1518,
"Bottes Brumeuses",
300,
[
[
"Misty Fur",
64
],
[
"Misty Tail",
32
],
[
"Bear Hide",
32
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1513,
"Bottes Goblines",
300,
[
[
"Orc Blood",
32
],
[
"Juvenile Bark",
32
],
[
"Bear Hide",
32
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1525,
"Bottes en Toile d'Araignée",
300,
[
[
"Spider Cloth",
64
],
[
"強化蛛絲",
16
],
[
"Spider Thread",
64
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1520,
"Bottes Sylvestres",
300,
[
[
"Magic Wood Shard",
64
],
[
"Beast Fur",
64
],
[
"Bear Hide",
32
]
],
"30",
"b",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Orbe Goblinne": {
"floor": 3,
"items": [
[
1544,
"Orbe Goblinne",
600,
[
[
"Goblin Blood",
128
],
[
"Goblin Eye",
32
],
[
"Goblin Essence",
8
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Bracelet Goblin": {
"floor": 3,
"items": [
[
1619,
"Bracelet Goblin",
600,
[
[
"Goblin Blood",
64
],
[
"Goblin Armor",
32
],
[
"哥布林之耳",
16
],
[
"Goblin Eye",
16
]
],
"55",
"b",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Anneau des Cieux": {
"floor": 3,
"items": [
[
2521,
"Anneau des Cieux",
600,
[
[
"Majestic Essence",
1
],
[
"Skyblue Feather",
10
],
[
"Sylnovarian Jewel",
8
],
[
"不純黑瑪瑙錠",
10
]
],
"55",
"s",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Outils des Bois Anciens": {
"floor": 3,
"items": [
[
2696,
"Pioche de la Forêt",
600,
[
[
"Ancient Woods Essence",
1
],
[
"Juvenile Seed",
16
],
[
"Ravager Bark",
16
],
[
"Dark Branch",
32
]
],
"40",
"a",
"other",
18,
"shot"
],
[
2702,
"Houe de la Forêt",
600,
[
[
"Ancient Woods Essence",
1
],
[
"Juvenile Seed",
16
],
[
"Ravager Bark",
16
],
[
"Dark Branch",
32
]
],
"40",
"a",
"other",
18,
"shot"
],
[
2708,
"Hache de la Forêt",
600,
[
[
"Ancient Woods Essence",
1
],
[
"Juvenile Seed",
16
],
[
"Ravager Bark",
16
],
[
"Dark Branch",
32
]
],
"40",
"a",
"other",
18,
"shot"
]
]
},
"3|Occult Artifact Merchant": {
"floor": 3,
"items": [
[
1557,
"Grimoire Occulte",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
],
[
1558,
"Boucle d'Oreille Occultes",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
],
[
1559,
"Bague Occulte",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
],
[
1493,
"Masque Occulte",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
],
[
1560,
"Hache Occulte",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
],
[
1561,
"Casque Occulte",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
],
[
1562,
"Bottes Occultes",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
]
]
},
"3|Occult Rings Merchant": {
"floor": 3,
"items": [
[
2486,
"Anneau Occulte",
null,
[],
"65323.81",
"s",
"acc",
null,
"shot"
]
]
},
"2|考古學家 de l'Antre": {
"floor": 2,
"items": [
[
null,
"Clé du Roi Taurus",
null,
[],
"10049.82",
"b",
"key",
null,
"shot"
]
]
},
"3|Ringman": {
"floor": 3,
"items": [
[
2506,
"Anneau de Granite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2508,
"Anneau d'Andésite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2509,
"Anneau de Pierre",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2510,
"Anneau Abordable",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2507,
"Anneau en Cuivre Granuleux",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
]
]
},
"3|Glove Merchant": {
"floor": 3,
"items": [
[
2059,
"Gants de Granite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2060,
"Gants Andesite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2061,
"Gants en Pierre",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2062,
"Gants Abordables",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
2058,
"Gants Novices",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
]
]
},
"3|Amulet Merchant": {
"floor": 3,
"items": [
[
1319,
"Collier de Granite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1320,
"Collier d'Andésite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1321,
"Collier de Pierre",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1322,
"Collier Abordable",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1318,
"Collier Novice",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
]
]
},
"3|Artifact Merchant": {
"floor": 3,
"items": [
[
1531,
"Ceinture Simple",
null,
[],
"6532.38",
"c",
"acc",
null,
"shot"
],
[
1534,
"Ceinture en Cuivre Granuleux",
null,
[],
"6532.38",
"c",
"acc",
null,
"shot"
],
[
1537,
"Ceinture Abordable",
null,
[],
"6532.38",
"c",
"acc",
null,
"shot"
],
[
1533,
"Ceinture Novice",
null,
[],
"6532.38",
"c",
"acc",
null,
"shot"
],
[
1535,
"Ceinture Étrange",
null,
[],
"6532.38",
"c",
"acc",
null,
"shot"
]
]
},
"3|Bracelet Merchant": {
"floor": 3,
"items": [
[
1611,
"Bracelet de Granite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1613,
"Bracelet d'Andésite",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1614,
"Bracelet de Pierre",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1615,
"Bracelet Abordable",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1612,
"Bracelet en Cuivre Granuleux",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
]
]
},
"3|Simple Accessories Merchant": {
"floor": 3,
"items": [
[
2056,
"Gants Simples",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
],
[
1531,
"Ceinture Simple",
null,
[],
"5024.91",
"c",
"acc",
null,
"shot"
]
]
},
"3|Ring Blacksmith": {
"floor": 3,
"items": [
[
2511,
"Anneau des Bois",
300,
[
[
"Woodland Claw",
64
],
[
"Sylnovarian Jewel",
32
],
[
"Copper Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2512,
"Anneau Brumeux",
300,
[
[
"Misty Claw",
64
],
[
"Sylvaerian Jewel",
16
],
[
"Iron Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2513,
"Anneau Orcien",
300,
[
[
"Orc Blood",
32
],
[
"White Spider Powder",
64
],
[
"鋁土礦錠",
12
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2515,
"Anneau des Bois Sombres",
300,
[
[
"Juvenile Bark",
32
],
[
"Sylvaerian Jewel",
16
],
[
"Iron Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2516,
"Anneau de la Toile",
300,
[
[
"Spider Cloth",
64
],
[
"White Spider Silk",
32
],
[
"Iron Ingot",
32
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2517,
"Anneau Spectral",
300,
[
[
"Spectral Essence",
16
],
[
"White Spider Silk",
32
],
[
"White Spider Powder",
64
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2518,
"Anneau Luminescent",
300,
[
[
"Yellow Spider Carcass",
64
],
[
"Yellow Spider Silk",
32
],
[
"Copper Ingot",
32
]
],
"30",
"b",
"acc",
null,
"shot"
]
]
},
"3|Glove Blacksmith": {
"floor": 3,
"items": [
[
2063,
"Gants des Bois",
300,
[
[
"Woodland Fur",
64
],
[
"Worn Leather",
64
],
[
"Thick Hide",
32
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2065,
"Gants Brumeux",
300,
[
[
"Misty Fur",
64
],
[
"Worn Leather",
64
],
[
"Thick Hide",
32
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2069,
"Gants des Bois Sombres",
300,
[
[
"Juvenile Bark",
32
],
[
"Sylvaerian Leaves",
32
],
[
"Sylvaerian Cloth",
32
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2070,
"Gants de la Toile",
300,
[
[
"Spider Cloth",
64
],
[
"White Spider Silk",
32
],
[
"Spider Thread",
64
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2071,
"Gants Spectral",
300,
[
[
"Spectral Essence",
8
],
[
"White Spider Silk",
32
],
[
"White Spider Powder",
64
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
2072,
"Gants Luminescents",
300,
[
[
"Yellow Spider Carcass",
64
],
[
"Yellow Spider Silk",
32
],
[
"Worn Leather",
64
]
],
"30",
"b",
"acc",
null,
"shot"
]
]
},
"3|Bracelet Blacksmith": {
"floor": 3,
"items": [
[
1616,
"Bracelet des Bois",
300,
[
[
"Woodland Claw",
64
],
[
"Sylnovarian Jewel",
16
],
[
"Copper Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1617,
"Bracelet Brumeux",
300,
[
[
"Misty Claw",
64
],
[
"Sylvaerian Jewel",
16
],
[
"Iron Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1618,
"Bracelet Orcien",
300,
[
[
"Orc Blood",
32
],
[
"White Spider Powder",
64
],
[
"鋁土礦錠",
12
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1620,
"Bracelet des Bois Sombres",
300,
[
[
"Juvenile Bark",
32
],
[
"Sylvaerian Jewel",
16
],
[
"Iron Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1621,
"Bracelet de la Toile",
300,
[
[
"Spider Cloth",
64
],
[
"White Spider Silk",
32
],
[
"Iron Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1622,
"Bracelet Spectral",
300,
[
[
"Spectral Essence",
8
],
[
"White Spider Silk",
32
],
[
"White Spider Powder",
64
]
],
"30",
"b",
"acc",
null,
"shot"
],
[
1623,
"Bracelet Luminescent",
300,
[
[
"Yellow Spider Carcass",
64
],
[
"Yellow Spider Silk",
32
],
[
"Copper Ingot",
16
]
],
"30",
"b",
"acc",
null,
"shot"
]
]
},
"3|P3 - Craft Artefact Manteau Crocs Brumeux": {
"floor": 3,
"items": [
[
1541,
"Manteau des Crocs Brumeux",
600,
[
[
"Misty Fur",
256
],
[
"Misty Tail",
64
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"3|P3 - Forgeron Gants Corrompus": {
"floor": 3,
"items": [
[
2076,
"Gants Faible Corruption",
600,
[
[
"Corrupted Fragment",
32
],
[
"Corrupted Fragment (2)",
16
],
[
"Corrupted Fragment (3)",
8
]
],
"55",
"splus",
"acc",
null,
"shot"
]
]
},
"2|Necrotic Tool Blacksmith": {
"floor": 2,
"items": [
[
2694,
"Pioche Nécrotique",
1800,
[
[
"Dark Bone",
24
],
[
"Black Powder",
24
],
[
"Necromancer Powder",
6
],
[
"Black Bone Stone",
8
]
],
"40",
"a",
"other",
null,
"shot"
],
[
2700,
"Houe Nécrotique",
1800,
[
[
"Dark Bone",
24
],
[
"Black Powder",
24
],
[
"Necromancer Powder",
6
],
[
"Black Bone Stone",
8
]
],
"40",
"a",
"other",
null,
"shot"
],
[
2706,
"Hache Nécrotique",
1800,
[
[
"Dark Bone",
24
],
[
"Black Powder",
24
],
[
"Necromancer Powder",
6
],
[
"Black Bone Stone",
8
]
],
"40",
"a",
"other",
null,
"shot"
]
]
},
"2|蜂巢考古學家": {
"floor": 2,
"items": [
[
1830,
"Clé de Melliona",
null,
[],
"1758.72",
"b",
"key",
null,
"shot"
]
]
},
"2|第 2 層 - 飾品鍛造：維尼戒指": {
"floor": 2,
"items": [
[
2503,
"Anneau de Winnie",
60,
[
[
"Copper Ingot",
32
],
[
"Bear Hide",
64
],
[
"Honey Residue",
64
],
[
"Honey",
64
],
[
"Bear Fat",
32
]
],
"55",
"splus",
"acc",
null,
"shot"
]
]
},
"2|Scrap Accessories Blacksmith": {
"floor": 2,
"items": [
[
2499,
"Anneau de Ferraille",
15,
[
[
"Scrap Metal Piece",
1
]
],
"30",
"c",
"acc",
null,
"shot"
],
[
1603,
"Bracelet de Ferraille",
15,
[
[
"Scrap Metal Piece",
1
]
],
"30",
"c",
"acc",
null,
"shot"
],
[
2049,
"Gants de Ferraille",
15,
[
[
"Scrap Metal Piece",
1
]
],
"30",
"c",
"acc",
null,
"shot"
],
[
1485,
"Pièce de Ferraille",
15,
[
[
"Scrap Metal Piece",
1
]
],
"30",
"c",
"acc",
null,
"shot"
],
[
1311,
"Amulette de Ferraille",
15,
[
[
"Scrap Metal Piece",
1
],
[
"廢鐵細繩",
1
]
],
"30",
"c",
"acc",
null,
"shot"
]
]
},
"2|Manufacturer of the Ring of the Flaming Harpy": {
"floor": 2,
"items": [
[
2496,
"Anneau de l'Harpie Enflammé",
60,
[
[
"Mountain Stag Hide",
32
],
[
"Scrap Metal Piece",
64
],
[
"Flaming Feather",
64
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"2|Manufacturer of the Ring of the Drowned Harpy": {
"floor": 2,
"items": [
[
2497,
"Anneau de l'Harpie Noyé",
60,
[
[
"Glacial Magic Shard",
32
],
[
"Scrap Metal Piece",
64
],
[
"Rippling Feather",
64
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"2|Manufacturer of the Crushed Harpy Ring": {
"floor": 2,
"items": [
[
2498,
"Anneau de l'Harpie Ecrasé",
60,
[
[
"Ancestral Root",
16
],
[
"Scrap Metal Piece",
64
],
[
"Earthen Feather",
64
]
],
"55",
"a",
"acc",
null,
"shot"
]
]
},
"3|P3 - Forgeron Bracelet Corrompu": {
"floor": 3,
"items": [
[
1625,
"Bracelet Faible Corruption",
600,
[
[
"Corrupted Fragment",
32
],
[
"Corrupted Fragment (2)",
16
],
[
"Corrupted Fragment (3)",
8
]
],
"55",
"splus",
"acc",
null,
"shot"
]
]
},
"2|第 2 層 - 飾品鍛造：腐化面具": {
"floor": 2,
"items": [
[
1484,
"Masque Corrompu",
60,
[
[
"Soul of the Ruins",
64
],
[
"Corrupted Crystal",
128
],
[
"Spectral Cloth",
64
],
[
"Piece of Spectral Mane",
1
],
[
"純淨黑瑪瑙錠",
3
]
],
"55",
"splusplus",
"acc",
null,
"shot"
]
]
},
"2|第 2 層 - 第 2 層鍊金術師": {
"floor": 2,
"items": [
[
2463,
"Quality Health Potion I",
5,
[
[
"Allium Flower",
3
],
[
"Sylve Sprout",
2
]
],
"15",
"b",
"potion",
1,
"shot"
],
[
null,
"Quality Mana Potion I",
5,
[
[
"Allium Flower",
3
],
[
"Sylve Sprout",
2
]
],
"15",
"b",
"potion",
1,
"shot"
],
[
null,
"Quality Stamina Potion I",
5,
[
[
"Allium Flower",
3
],
[
"Sylve Sprout",
2
]
],
"15",
"b",
"potion",
1,
"shot"
],
[
2464,
"Quality Health Potion II",
5,
[
[
"Allium Flower",
6
],
[
"Sylve Sprout",
4
],
[
"Magic Wood Shard",
3
]
],
"15",
"b",
"potion",
5,
"shot"
],
[
null,
"Quality Mana Potion II",
5,
[
[
"Allium Flower",
6
],
[
"Sylve Sprout",
4
],
[
"Magic Wood Shard",
3
]
],
"15",
"b",
"potion",
5,
"shot"
],
[
null,
"Quality Stamina Potion II",
5,
[
[
"Allium Flower",
6
],
[
"Sylve Sprout",
4
],
[
"Magic Wood Shard",
3
]
],
"15",
"b",
"potion",
5,
"shot"
],
[
2465,
"Quality Health Potion III",
5,
[
[
"Allium Flower",
9
],
[
"Sylve Sprout",
6
],
[
"Magic Wood Shard",
5
],
[
"Ancestral Root",
1
]
],
"15",
"b",
"potion",
8,
"shot"
],
[
null,
"Quality Mana Potion III",
5,
[
[
"Allium Flower",
9
],
[
"Sylve Sprout",
6
],
[
"Magic Wood Shard",
5
],
[
"Ancestral Root",
1
]
],
"15",
"b",
"potion",
8,
"shot"
],
[
null,
"Quality Stamina Potion III",
5,
[
[
"Allium Flower",
9
],
[
"Sylve Sprout",
6
],
[
"Magic Wood Shard",
5
],
[
"Ancestral Root",
1
]
],
"15",
"b",
"potion",
8,
"shot"
],
[
2466,
"Quality Health Potion IV",
5,
[
[
"Allium Flower",
10
],
[
"Flaming Feather",
10
],
[
"Marrow Powder",
3
]
],
"15",
"b",
"potion",
12,
"shot"
],
[
null,
"Quality Mana Potion IV",
5,
[
[
"Allium Flower",
10
],
[
"Rippling Feather",
10
]
],
"15",
"b",
"potion",
12,
"shot"
],
[
null,
"Quality Stamina Potion IV",
5,
[
[
"Allium Flower",
10
],
[
"Honey Residue",
10
],
[
"Bear Fat",
3
]
],
"15",
"b",
"potion",
12,
"shot"
]
]
},
"2|第 2 層 - 第 2 層鍊金術師助手": {
"floor": 2,
"items": [
[
1984,
"Quality Endurance Fortifier II",
60,
[
[
"Wheat",
12
],
[
"Wheat Leaves",
4
],
[
"Bear Fat",
4
],
[
"Honey Residue",
4
]
],
"15",
"b",
"potion",
null,
"shot"
],
[
1983,
"Quality Knowledge Fortifier II",
60,
[
[
"Allium Flower",
12
],
[
"Soul of the Ruins",
6
],
[
"Wisteria",
4
],
[
"Corrupted Crystal",
16
]
],
"15",
"b",
"potion",
null,
"shot"
],
[
1981,
"Quality Vitality Fortifier II",
60,
[
[
"Sylve Sprout",
16
],
[
"Slime Core",
2
],
[
"Earthen Feather",
8
]
],
"15",
"b",
"potion",
null,
"shot"
],
[
1986,
"Quality Patience Fortifier II",
60,
[
[
"Frost Dust",
16
],
[
"Glacial Magic Shard",
8
],
[
"Rippling Feather",
8
]
],
"15",
"b",
"potion",
null,
"shot"
],
[
1985,
"Quality Resistance Fortifier II",
60,
[
[
"Shark Carapace",
12
],
[
"Hard Glacial Hide",
8
],
[
"琥珀種子",
4
],
[
"Scrap Metal Piece",
4
]
],
"15",
"b",
"potion",
null,
"shot"
]
]
},
"2|第 2 層 - 第 2 層細木工匠": {
"floor": 2,
"items": [
[
2132,
"Acacia Plank",
0,
[
[
"Acacia Log",
4
]
],
"15",
"c",
"other",
null,
"shot"
],
[
2133,
"Poudre d'Acacia",
0,
[
[
"Acacia Plank",
2
]
],
"15",
"b",
"other",
null,
"shot"
]
]
},
"2|第 2 層 - 烏爾巴斯鐵匠": {
"floor": 2,
"items": [
[
2416,
"Lingot de Bauxite",
15,
[
[
"Bauxite Ore",
4
],
[
"Coal Ore",
3
]
],
"15",
"b",
"other",
null,
"shot"
],
[
2410,
"Lingot d’Onyx Impur",
30,
[
[
"Impure Onyx Ore",
10
],
[
"Coal Ore",
5
]
],
"15",
"a",
"other",
null,
"shot"
]
]
},
"2|第 2 層 - 烏爾巴斯鐵匠 (2)": {
"floor": 2,
"items": [
[
2408,
"Lingot d’Onyx Pur",
60,
[
[
"純淨黑瑪瑙礦",
10
],
[
"Coal Ore",
5
]
],
"15",
"s",
"other",
null,
"shot"
]
]
},
"2|第 2 層 - 材料重塑師": {
"floor": 2,
"items": [
[
2374,
"Ficelle d'Acacia",
60,
[
[
"Acacia Log",
8
],
[
"Spider Thread",
4
]
],
"15",
"c",
"other",
null,
"shot"
],
[
2375,
"Ficelle de Bauxite",
60,
[
[
"Bauxite Ore",
4
],
[
"Spider Thread",
4
]
],
"15",
"b",
"other",
null,
"shot"
],
[
2377,
"Ficelle d'Onyx Impure",
180,
[
[
"Impure Onyx Ore",
4
],
[
"Spider Thread",
4
]
],
"15",
"a",
"other",
null,
"shot"
],
[
2378,
"Ficelle d'Onyx Pure",
240,
[
[
"純淨黑瑪瑙礦",
4
],
[
"Spider Thread",
4
]
],
"15",
"s",
"other",
null,
"shot"
]
]
},
"2|第 2 層 - 裝備商人": {
"floor": 2,
"items": [
[
2596,
"Training Sword",
null,
[],
"75.37",
"c",
"weapon",
null,
"shot"
],
[
2533,
"Training Buckler",
null,
[],
"25.12",
"c",
"weapon",
null,
"shot"
],
[
1760,
"Training Dagger",
null,
[],
"100.50",
"c",
"weapon",
null,
"shot"
],
[
1567,
"Arc Basique",
null,
[],
"100.50",
"c",
"weapon",
3,
"shot"
],
[
1626,
"Unbound Grimoire",
null,
[],
"25.12",
"c",
"weapon",
null,
"shot"
],
[
1628,
"Wild Grimoire",
null,
[],
"25.12",
"c",
"weapon",
null,
"shot"
],
[
2457,
"Health Potion I",
null,
[],
"30.15",
"c",
"potion",
1,
"shot"
],
[
null,
"Mana Potion I",
null,
[],
"30.15",
"c",
"potion",
1,
"shot"
],
[
2471,
"Stamina Potion I",
null,
[],
"30.15",
"c",
"potion",
1,
"shot"
],
[
1957,
"Boar Meat",
null,
[],
"0.10",
"c",
"other",
null,
"shot"
],
[
1708,
"Parchemin de Réallocation",
null,
[],
"753.74",
"b",
"other",
null,
"shot"
],
[
1707,
"Parchemin de Maîtrise",
null,
[],
"753.74",
"b",
"other",
null,
"shot"
],
[
1709,
"Parchemin de Changement",
null,
[],
"1507.47",
"b",
"other",
null,
"shot"
],
[
null,
"劣質法杖",
null,
[],
"75.37",
"c",
"weapon",
1,
"shot"
],
[
null,
"劣質法杖 (2)",
null,
[],
"75.37",
"c",
"weapon",
1,
"shot"
]
]
}
};
window.SAO_RECIPE_QTY = {"Alchemist|Quality Health Potion I": 3, "Alchemist|Quality Health Potion II": 3, "Alchemist|Quality Health Potion III": 3, "Alchemist|Quality Mana Potion I": 3, "Alchemist|Quality Mana Potion II": 3, "Alchemist|Quality Mana Potion III": 3, "Alchemist|Quality Stamina Potion I": 3, "Alchemist|Quality Stamina Potion II": 3, "Alchemist|Quality Stamina Potion III": 3, "3|Alchemist|Quality Health Potion II": 3, "3|Alchemist|Quality Mana Potion II": 3, "3|Alchemist|Quality Stamina Potion II": 3, "3|Alchemist|Quality Health Potion III": 3, "3|Alchemist|Quality Mana Potion III": 3, "3|Alchemist|Quality Stamina Potion III": 3, "3|Alchemist|Quality Health Potion IV": 3, "3|Alchemist|Quality Health Potion V": 3, "3|Alchemist|Quality Health Potion VI": 3, "3|Alchemist|Quality Mana Potion V": 3, "3|Alchemist|Quality Mana Potion VI": 3, "3|Alchemist|Quality Stamina Potion V": 3, "3|Alchemist|Quality Stamina Potion VI": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Health Potion I": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Mana Potion I": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Stamina Potion I": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Health Potion II": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Mana Potion II": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Stamina Potion II": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Health Potion III": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Mana Potion III": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Stamina Potion III": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Health Potion IV": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Mana Potion IV": 3, "2|第 2 層 - 第 2 層鍊金術師|Quality Stamina Potion IV": 3};
window.SAO_RECIPE_MISS = {"3|P3 - Craft Bracelet Goblin|Bracelet Goblin": 1, "3|P3 - Craft Anneau des Cieux|Anneau des Cieux": 1, "2|第 2 層 - 第 2 層鍊金術師|Quality Mana Potion IV": "水之鳥身女妖蛋|3", "2|第 2 層 - 第 2 層鍊金術師助手|Quality Vitality Fortifier II": "奧拉西爾刺莖|4", "2|第 2 層 - 第 2 層鍊金術師助手|Quality Patience Fortifier II": "水之鳥身女妖蛋|4"};
