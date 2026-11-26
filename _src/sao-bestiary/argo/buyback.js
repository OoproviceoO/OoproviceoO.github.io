/* What each loot buyer buys back (收購): from the item tooltips' "Obtainable" lines in the owner's screenshots — English
   "Bought back by <shop> (<price> Cols)" (gameinfo.js) and Chinese 「由<商店>回收 <價格>珂爾」 (2026-11-07 tooltips; item matched through zhnames.js).
   Shop names in the game -> site NPC (npcs.js): "Shop - Hanaka" = Hanaka - Loot Buyer, "Shop - Tolbana" = Magical & Icy Loot Buyer,
   "F1 - Labyrinth of the Forgotten - Loot Buyer" = both Labyrinth of the Fallen loot buyers… Only items seen in a tooltip are listed, so the
   lists are not complete. Row: [English item name, price in Col, "en"|"zh" source]. Built 2026-11-07 (user: 收購商要顯示回收物品). */
window.SAO_BUYBACK = {shops:{"Starting Merchant": "Starting Merchant", "Mizunari Loot Buyer": "Shop - Mizunari", "Cursed Ruins - Loot Buyer": "Shop - Cursed Ruins", "Cursed Ruins - Loot Buyer (2)": "Shop - Cursed Ruins", "Labyrinth of the Fallen - Loot Buyer": "F1 - Labyrinth of the Forgotten - Loot Buyer", "Labyrinth of the Fallen (2) - Loot Buyer": "F1 - Labyrinth of the Forgotten - Loot Buyer", "Hanaka - Loot Buyer": "Shop - Hanaka", "Vallhat - Loot Buyer": "Shop - Vallhat", "Magical & Icy Loot Buyer": "Shop - Tolbana", "Local Farmer": "F1 Local Farmer - Near the Starting City", "Virelune - Loot Buyer": "Shop - Virelune", "Candelia": "Shop - Candelia", "Local Lumberjack": "F1 Local Lumberjack - Near the Starting City", "Local Miner": "F1 Local Miner - Near the Starting City", "Geldorak Mine Dungeon - Loot Buyer": "Shop - Geldorack Mine"},
 items:{
"Starting Merchant": [
[
"Bandit's Dagger",
"150",
"en"
],
[
"Boar Hide",
"1",
"en"
],
[
"Crossbow of the Bandits",
"150",
"en"
],
[
"Hammer of the Colossus",
"300",
"en"
],
[
"Magic Staff of the Revenants",
"150",
"en"
],
[
"Magic Staff of the Ruins",
"150",
"en"
],
[
"Skeletal Sword",
"150",
"en"
],
[
"Sylvan Pavise",
"150",
"en"
],
[
"Wolf Fangs",
"3",
"zh"
],
[
"Wolf Fur",
"3",
"en"
]
],
"Mizunari Loot Buyer": [
[
"Corrupted Spore",
"4",
"en"
],
[
"Flower of a Nepenthes",
"25",
"en"
],
[
"Leaf Fragments",
"5",
"en"
]
],
"Cursed Ruins - Loot Buyer": [
[
"Bone Dust",
"3.5",
"en"
],
[
"Cursed Cloth",
"3.5",
"en"
],
[
"Piece of Spectral Mane",
"1000",
"en"
],
[
"Reinforced Skeleton Bone",
"4.5",
"en"
],
[
"Ring of Narax",
"75",
"en"
],
[
"Skeleton Bone",
"3.5",
"en"
],
[
"Soul of the Ruins",
"3.5",
"en"
]
],
"Cursed Ruins - Loot Buyer (2)": [
[
"Bone Dust",
"3.5",
"en"
],
[
"Cursed Cloth",
"3.5",
"en"
],
[
"Piece of Spectral Mane",
"1000",
"en"
],
[
"Reinforced Skeleton Bone",
"4.5",
"en"
],
[
"Ring of Narax",
"75",
"en"
],
[
"Skeleton Bone",
"3.5",
"en"
],
[
"Soul of the Ruins",
"3.5",
"en"
]
],
"Labyrinth of the Fallen - Loot Buyer": [
[
"Metal Soul Piece",
"15",
"en"
],
[
"Soul of the Herald",
"210",
"en"
],
[
"Soul of the Reaper",
"175",
"en"
],
[
"Soul of the Warden",
"210",
"en"
]
],
"Labyrinth of the Fallen (2) - Loot Buyer": [
[
"Metal Soul Piece",
"15",
"en"
],
[
"Soul of the Herald",
"210",
"en"
],
[
"Soul of the Reaper",
"175",
"en"
],
[
"Soul of the Warden",
"210",
"en"
]
],
"Hanaka - Loot Buyer": [
[
"Ancestral Root",
"15",
"en"
],
[
"Magic Mycelium",
"30",
"en"
],
[
"Magic Wood Shard",
"2.5",
"en"
],
[
"Sylvan Bark",
"2.5",
"en"
],
[
"Sylve Sprout",
"2.5",
"en"
],
[
"Wood Heart",
"5",
"zh"
]
],
"Vallhat - Loot Buyer": [
[
"Essence of Gorbel",
"20",
"en"
],
[
"Slime Core",
"4",
"en"
]
],
"Magical & Icy Loot Buyer": [
[
"Fragment of the Bear's Soul",
"100",
"en"
],
[
"Frost Dust",
"5",
"zh"
],
[
"Glacial Magic Shard",
"6",
"en"
],
[
"Hard Glacial Hide",
"6",
"en"
]
],
"Local Farmer": [
[
"Allium Flower",
"3",
"en"
],
[
"Wheat",
"3",
"en"
]
],
"Virelune - Loot Buyer": [
[
"Heart of Nymbrea",
"75",
"en"
]
],
"Candelia": [
[
"Leg of a Spider",
"20",
"zh"
],
[
"Necklace of Aragorn",
"150",
"en"
],
[
"Spider Cloth",
"6",
"en"
],
[
"Spider Thread",
"5",
"en"
],
[
"Spider Venom",
"75",
"en"
]
],
"Local Lumberjack": [
[
"Birch Log",
"8",
"en"
],
[
"Oak Log",
"6",
"en"
]
],
"Local Miner": [
[
"Copper Ingot",
"16",
"zh"
],
[
"Copper Ore",
"6.03",
"en"
],
[
"Iron Ingot",
"20",
"en"
]
],
"Geldorak Mine Dungeon - Loot Buyer": [
[
"Worn Leather",
"5",
"zh"
]
]
}};
