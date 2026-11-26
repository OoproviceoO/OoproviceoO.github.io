/* Item icons cut from the owner's game screenshots (the dark circle behind the icon in the Specifications popup or the
   codex loot list removed; scratchpad cuticon.py), for items the official catalogue has no picture for.
   key = in-game English name -> 64 px PNG in icons/game/. User 2026-11-05: 有傳過截圖但沒有使用. */
// 2026-11-07 (user: Spider Gloves icon blurry): the official site's item-model index (/item-models/index.json) also has the
// textures of game-only items (nerfs:item/ia_auto/gantstissuaraignee = Spider Gloves…); matched by name and checked side by
// side against the icons rebuilt from screenshots (identical shapes), they replace those rebuilds: 16 px texture, ×4.
window.SAO_GAMEICONS = {
 // 2026-11-07 (user: 訓練用十字弓、訓練用弓圖示錯誤): the catalogue points both at old/shared models (Arc d'Entraînement ->
 // goblin_bow; Arbalète d'Entraînement has no model and showed the shared crossbow picture), and the official
 // arc_entrainement model is an older purple one. The game draws them as 3D models (no 16 px grid), so these are the
 // auction-house tiles with the grey disk removed (Training Bow 2026-11-04 19:22:31, Training Crossbow 19:23:25),
 // 96 px, shown smooth (file name *_s.png). Replace with the resource-pack texture when the owner runs equip_icons.py.
 "Arc d'Entraînement": "icons/game/training_bow_s.png",
 "Arbalète d'Entraînement": "icons/game/training_crossbow_s.png",
 // same audit: these were listed in tools/equip_icons.json "_wrong" (site icon ≠ game) but the site kept the wrong picture
 // until the resource pack is read. Until then: auction-house tile cut-outs (chk/cards.json index in brackets).
 "Leaf Fragments": "icons/game/leaf_fragments_s.png",            // 2026-11-04 22:45:27 [1781]
 "Arbalète en Cuivre": "icons/game/copper_crossbow_s.png",       // 22:50:24 [2151]
 "Arbalète en Fer": "icons/game/iron_crossbow_s.png",            // 19:23:31 [635]
 "Arc en Fer": "icons/game/iron_bow_s.png",                      // 22:42:40 [1604]
 "Arc de l'Héraut": "icons/game/bow_of_the_herald_s.png",        // 2026-11-07 02:11:27 [3217]
 "Bouclier de Illfang": "icons/game/shield_of_illfang_s.png",    // 2026-11-05 00:56:42 [2449]
 "Bouclier Putride": "icons/game/putrid_shield_s.png",           // 2026-11-05 01:01:02 [2638]
 "Arc Nodachi": "icons/game/nodachi_bow_s.png",                  // 2026-11-04 19:22:01 [574]
 "Key of Xal'Zirith": "icons/game/key_of_xalzirith.png",   // auction house 2026-11-05 00:52: the game shows a silver key, not the catalogue's dark one
 "Skeleton Bone": "icons/game/skeleton_bone.png",
 "Magic Staff of the Revenants": "icons/game/magic_staff_of_the_revenants.png",
 "Healing Shard": "icons/game/healing_shard.png",
 "Mana Shard": "icons/game/mana_shard.png",
 "Stamina Shard": "icons/game/stamina_shard.png",
 "Daily Stamina Crystal": "icons/game/daily_stamina_crystal.png",
 "Radiant Power Crystal": "icons/game/radiant_power_crystal.png",
 "Box of Chocolates": "icons/game/box_of_chocolates.png",
 // game-only equipment (2026-11-06): rebuilt on the 16 px pixel grid from big screenshots (auction tile k≈4.7 screen px per
 // texture px, crafting-window detail k≈3.8; scratchpad gridfit.py / rebuild.py), checked against the official icons.
 // tools/equip_icons.py (resource pack, owner's PC) replaces these with the exact textures.
 "Bracelet of the Nepenthes": "icons/game/bracelet_of_the_nepenthes.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Amulet of the Nepenthes": "icons/game/amulet_of_the_nepenthes.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Frozen Bracelet": "icons/game/frozen_bracelet.png",
 "Frozen Ring": "icons/game/frozen_ring.png",
 "Glacial Ring": "icons/game/glacial_ring.png",
 "Shark Fang": "icons/game/shark_fang.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Elite Gloves": "icons/game/elite_gloves.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Elite Carapace": "icons/game/elite_carapace.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Ring of the Shark": "icons/game/ring_of_the_shark.png",
 "Glacial Essence": "icons/game/glacial_essence.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Elite Bracelet": "icons/game/elite_bracelet.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Cursed Jewel": "icons/game/cursed_jewel.png",   // auction tile in14 00:49:14, k≈4.64
 "Copper Ore": "icons/game/copper_ore.png",   // Local Miner detail icon in15 03:46:21, k≈3.76
 // 2026-11-07 full search of all screenshots for items still on placeholder icons
 "Shark Amulet": "icons/game/shark_amulet.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Bracelet of the Shark": "icons/game/bracelet_of_the_shark.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Spider Ring": "icons/game/spider_ring.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Spider Gloves": "icons/game/spider_gloves.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Spider Cloak": "icons/game/spider_cloak.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Frozen Gloves": "icons/game/frozen_gloves.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Frozen Amulet": "icons/game/frozen_amulet.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Glacial Antenna": "icons/game/glacial_antenna.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Glacial Amulet": "icons/game/glacial_amulet.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Elite Amulet": "icons/game/elite_amulet.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Dragon of Wrath Candy": "icons/game/dragon_of_wrath_candy.png",   // auction tile (in9), k≈4.65
 "Bloody Swirl": "icons/game/bloody_swirl.png",   // auction tile (in9), k≈4.65
 "Boar of Gluttony Candy": "icons/game/boar_of_gluttony_candy.png",   // auction tile (in9), k≈4.65
 "Halloween Candy Corn": "icons/game/halloween_candy_corn.png",   // auction tile (in9), k≈4.65
 "Lion of Pride Candy": "icons/game/lion_of_pride_candy.png",   // auction tile (in9), k≈4.65
 "Pumpkin Caramel": "icons/game/pumpkin_caramel.png",   // auction tile (in9), k≈4.65
 "Pumpkin Wrapped Candy": "icons/game/pumpkin_wrapped_candy.png",   // auction tile (in9), k≈4.65
 "Reapkin King's Lollipop": "icons/game/reapkin_kings_lollipop.png",   // auction tile (in9), k≈4.65
 "Oak String": "icons/game/oak_string.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Copper Gloves": "icons/game/copper_gloves.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Iron Gloves": "icons/game/iron_gloves.png",   // official item-model texture (saominecraft.com/item-models, 2026-11-07)
 "Christmas Mittens (3)": "icons/game/christmas_mittens.png",   // red mittens, auction tile 11/7 15:18:54, k≈4.67 (2026-11-11: catalogue 2048 is the pink pair, a different item)
 "Christmas Mittens (2)": "icons/game/christmas_mittens_yellow.png",   // yellow mittens, auction tile 11/5 00:51:51, k≈4.68, TH 8
 "Occult Bracelet": "icons/game/occult_bracelet.png",   // auction tile, k≈4.67 (2026-11-07 audit: the site showed a wrong icon)
 "Occult Ring": "icons/game/occult_ring.png",       // 2026-11-07 (user: 神祕戒指圖示要檢查): official icon is an older black ring; game shows a crimson one. Auction tile 2026-11-07 00:47:31, k≈4.70
 "Occult Amulet": "icons/game/occult_amulet.png",   // same check: official icon is a grey chain; game chain is dark red. Auction tile 2026-11-04 19:20:11, k≈4.66 (4 screenshots agree)
 // 2026-11-07 merchant audit (user: 所有的商人都要再看一次): shop-window icons that differed from the site.
 "Gants de Ferraille": "icons/game/gants_de_ferraille.png",   // 2026-11-19 (in29): official model texture nerfs:item/ia_auto/gantsferraille ×4 = the game icon (05.19.48 craft window); equip.png slot 32 showed a brown glove with skin-coloured fingers
 "Occult Gloves": "icons/game/occult_gloves.png",       // shop version (Occult Merchant - Gloves 03:18, level 10) = official model texture nerfs:item/ia_auto/gantsocculte ×4; the auction's black glove is the older level-14 version
 "Copper Amulet": "icons/game/copper_amulet.png",       // nerfs:item/ia_auto/amulettecuivre ×4 = Copper Accessories window 2026-11-03 22:40:39 (catalogue showed a black chain)
 "Iron Amulet": "icons/game/iron_amulet.png",           // nerfs:item/ia_auto/amulettefer ×4 = Iron Accessories window 22:40:21
 "Slime Tear": "icons/game/slime_tear_s.png",           // nerfs:item/ia_auto/larmeslime (64 px texture) = Sewer Reshaper window 21:55:42
 "Slime Essence": "icons/game/slime_essence_s.png",     // auction tile 2026-11-04 22:47:16 (cut-out; 3D/hi-res)
 "Teleportation Crystal": "icons/game/teleportation_crystal_s.png",   // auction tile 2026-11-05 20:23:51 (cut-out)
 "Kobold Key": "icons/game/kobold_key_s.png",           // auction tile 2026-11-04 22:37:22 (cut-out)
 "Twisted Hoe": "icons/game/twisted_hoe_s.png",         // model elitecreatures:rogue_assortment/rogue_hoe (same set as the other starter tools), checked against Starting City - Tools 22:39:47
 "Training Scepter": "icons/game/training_scepter_s.png",   // model nerfs_weapons:baton_shaman_entrainement, = Starting Merchant 22:39:13
 "Training Quiver": "icons/game/training_quiver_s.png",     // model nerfs_weapons:carquois_entrainement, = 22:39:24
 "Training Dagger (2)": "icons/game/training_short_dagger_s.png",   // model nerfs_weapons:seconde_dague_entrainement, = 22:39:23 (訓練用短劍, assassin off-hand)
 // 2026-11-07 site-wide check (全站檢查): game-only weapons still on placeholders, official item-model index by name
 "Ring of the Leviathan": "icons/game/ring_of_the_leviathan.png",   // nerfs:item/ia_auto/anneau_leviathan ×4 = auction tiles 11/4 19:29 and the 11/7 inventory (grey centre gem; the catalogue icon had a blue gem). User 2026-11-07 screenshots
 // 2026-11-07 icon-vs-screenshot comparison (user「沒檢查到」after 利維坦之戒): every auction-tile name compared with the site icon (scratchpad aud/si.js + aud/sim.py). Pixel grid rebuilt (k≈4.62–4.72) where the site showed a different object:
 "Corrupted Fragment": "icons/game/corrupted_fragment.png",   // in9 2026-11-05 01:01:25, k≈4.68
 "Iron Ingot": "icons/game/iron_ingot.png",   // in7 2026-11-04 19:29:16, k≈4.66
 "Copper Ingot": "icons/game/copper_ingot.png",   // in9 2026-11-04 22:40:34, k≈4.72
 "Ring of the Fallen": "icons/game/ring_of_the_fallen.png",   // in7 2026-11-04 19:29:35, k≈4.62
 // cut-outs (no clean 16 px grid: k at the search lower bound, or 3D models):
 "Magician's Pavise": "icons/game/magicians_pavise_s.png",   // 2026-11-05 00:58:44 [2511] (catalogue colours differ)
 "Swordsman's Scroll": "icons/game/swordsmans_scroll_s.png",   // 2026-11-05 00:58:44 [2508] (was a placeholder)
 "Archer's Scroll": "icons/game/archers_scroll_s.png",   // 2026-11-04 19:22:26 [589] (was a placeholder; same picture as the swordsman's)
 "Aincrad Crystal": "icons/game/aincrad_crystal_s.png",   // 2026-11-07 02:11:59 [3230]
 "Halberd of the Warden": "icons/game/halberd_of_the_warden_s.png",   // 2026-11-04 22:42:24 [1585]
 "Sylvan Bow": "icons/game/sylvan_bow_s.png",   // 2026-11-04 19:23:31 [634]
 "Bandit's Dagger": "icons/game/bandits_dagger_s.png",   // 2026-11-04 22:50:32 [2166]
 "Sylvan Staff": "icons/game/sylvan_staff_s.png",   // 2026-11-04 22:50:47 [2193]
 "Skeletal Sword": "icons/game/skeletal_sword_s.png",   // 2026-11-04 22:42:09 [1560]
 "Crossbow of the Bandits": "icons/game/crossbow_of_the_bandits_s.png",   // 2026-11-04 19:28:01 [757]
 "Four-Armed Halberd": "icons/game/four_armed_halberd_s.png",   // 2026-11-04 22:46:43 [1901] (was a placeholder)
 "Galiath's Axe": "icons/game/galiaths_axe_s.png",   // 2026-11-04 22:51:21 [2247] (was a placeholder)
 "Colossus Pavise": "icons/game/colossus_pavise_s.png",   // 2026-11-05 01:00:20 [2588] (was a placeholder)
 "Nodachi Staff": "icons/game/nodachi_staff_s.png",   // 2026-11-05 01:01:14 [2653] (was a placeholder)
 "Rhitta": "icons/game/rhitta_s.png",   // 2026-11-05 01:01:28 [2672] (user 2026-11-07: game codex icons are fine to show, even for the Seven Deadly Sins collab weapons)
 "Lostvayne": "icons/game/lostvayne_s.png",   // 2026-11-05 00:56:32 [2427]
 "Dagger of Albal": "icons/game/dagger_of_albal_s.png",     // nerfs_weapons:seconde_dague_albal = auction tile 2026-11-04 22:4x (dark red blade, black guard)
 "Iron Quiver": "icons/game/iron_quiver_s.png",             // nerfs_weapons:carquois_fer (name only; no screenshot of the icon yet)
 "Hunter's Quiver": "icons/game/hunters_quiver_s.png",      // nerfs_weapons:carquois_chasseur (name only; no screenshot of the icon yet)
 "Witch's Dragée": "icons/game/witchs_dragee.png",   // auction tile, k≈4.67 (2026-11-07 audit: the site showed a wrong icon)
 "Ring of the Nepenthes": "icons/game/ring_of_the_nepenthes.png",   // official item-model texture anneaunephente (2026-11-07)
 "Flower of a Nepenthes": "icons/game/flower_of_a_nepenthes.png",   // official item-model texture fleurnephente (2026-11-07)
 "Boots of the Foam": "icons/game/boots_of_the_foam.png",   // auction tile in9 2026-11-05 01:00:15, k≈4.64 (official catalogue has no icon for Bottes de l’écume)
 // 2026-11-11: two different items are both called 狼頭骨 (user: 物品素質都是統一改動 -> the 11/7 screenshots 15 min apart
 // are two items). Level 3 epic (brown, fur): 32 px grid rebuilt from the 11/5 01:01:25 auction tile (k≈2.33, ×2);
 // level 17 legendary (catalogue 1469 Crâne de Loup; the catalogue picture is the level-3 look): 11/7 15:21:05 auction tile, white disk removed.
 "Skull of a Wolf": "icons/game/skull_of_a_wolf.png",
 "Feather of the Little Flame": "icons/game/feather_of_the_little_flame.png",   // auction tile in9 2026-11-05 00:57:01, k≈4.68 (floor 2, Fire Harpy 1 %)
 "Feather of the Little Drop": "icons/game/feather_of_the_little_drop.png",   // auction tile in9 2026-11-05 00:59:44, k≈4.68 (floor 2, Lightning Harpy 1 %)
 "Crâne de Loup": "icons/game/crane_de_loup_s.png",
 "Anneau du Nectar Doré": "icons/game/anneau_du_nectar_dore.png",   // auction tile in25 2026-11-12 21:23:48, k≈4.68, TH=22 (official 2489 icon is the old orange-gold colouring)
};
