/* Aincrad main questline, floor 1 (and the first floor-2 rows, see 2: below).
   Sources (checked 2026-10-31):
   - NPC, level, reward and the short story text: saominecraft.wiki.gg/wiki/Quests/Aincrad/Main (rev 2700), rewritten in Chinese.
   - Quest order, step list and step coordinates: DelayedCode's SAO MC Interactive Map (Current Data). Only the facts
     (order, target, amount, X / Z) were taken; every step text below is our own Chinese wording.
   Parts 7-18 of the REFERENCE MAP numbering (not the game numbering) happen in the Fractured Underworld and are not listed.
   Quest fields: t = title (as in game), n = number in the in-game quest tracker, nEst = number estimated
   from the order, npc, lv, rw = reward, d = story text, s = steps.
   en = in-game English step text from players' screenshots, keyed by step index (shown under the step, searchable).
   Numbers: 8-18 are written on the wiki main-quest table, 24 is confirmed by report R0001 (tracker shows
   "24. The Truth About the Seal"), 19-23 follow the wiki order between them; 25+ are estimated. The
   reference map merged "The Southern Marshes" (14) into "The Suspended City"; it is split again here.
   1-6 are confirmed by the owner's quest-log screenshots of 2026-11-03 (1. A new horizon … 6. The Forest of Small Webs);
   7 = Bury Them (between 6 and the wiki's 8). A New World and A Decisive Choice have no number in the game.
   d = our own story text: removed where the in-game quest log (Chinese client, owner screenshots 2026-11-07) gives the
   official text (zhnames.js quests, shown instead); tip = our extra hint shown under it.
   Step: [text, x, z, approx]   x/z null = no coordinate; approx 1 = "about here". */
window.SAO_MAINQ = {1: [
 {t:"A New World", npc:"Yui", lv:"1",
  s:[["和神秘人物對話（教學區，不在樓層地圖上）",null,null]]},
 {t:"A Decisive Choice", npc:"The Master Swordsman", lv:"1", tip:"之後隨時可以換職業；選好後前往起始之鎮。",
  s:[["和劍術大師對話（教學區）",null,null],["依序試用戰士、弓箭手、薩滿、法師、刺客五種職業",null,null],["回去找劍術大師",null,null]]},
 {t:"A New Horizon", n:1, npc:"The Master Swordsman", lv:"1", rw:"150 經驗、200 珂爾",
  s:[["和劍術大師對話",1089,4289],["買一件胸甲（Beginner's Tunic）",null,null],["買一件護腿（Beginner's Leggings）",null,null],["依職業買一把訓練用武器（劍、法杖、弓或匕首）",null,null],["回去找劍術大師",1089,4289]]},
 {t:"Show Me", n:2, npc:"The Master Swordsman", lv:"1", rw:"100 經驗、110 珂爾",
  s:[["搭鍛造場對面的傳送點",1816,4136],["和鐵匠學徒對話",1789,3636],["擊殺 16 隻野豬",1798,3617,1],["把 16 張野豬皮交給鐵匠",1789,3636],["把皮帶回去給 Abraham",1789,3636]]},
 {t:"The Essentials", n:3, npc:"Town Alchemist", lv:"1–3", rw:"100 經驗、120 珂爾",
  s:[["到工作室找鍊金術士",1772,4096],["在城鎮東北的田裡採 5 朵 Allium",2362,3651,1],["在同一片田採 5 束小麥",2362,3651,1],["靠近發出聲音的地方",2372,3702],["回去找鍊金術士",1772,4096]]},
 {t:"What No One Will Touch", n:4, npc:"The Alchemist、The Master Swordsman", lv:"1–3", rw:"100 經驗、120 珂爾",
  s:[["告訴鍊金術士碎片的事",1772,4096],["去找劍術大師",1089,4289],["前往花瓣谷的墜落地點",1051,4367]]},
 {t:"What No One Will Touch（續）", npc:"The Master Swordsman", d:"從破碎的地下世界回到艾恩葛朗特後，繼續這段主線。",
  s:[["從遊戲選單點艾恩葛朗特（Aincrad）圖示回到艾恩葛朗特",null,null],["去找劍術大師",1089,4289],["前往 Hanaka",1576,3460,1]]},
 {t:"The Assault", n:5, npc:"Mayor of Hanaka",
  s:[["擋下三波敵人（每波 5 隻）",null,null],["右鍵救出被抓的村民",null,null],["和村長對話",1526,3412]]},
 {t:"The Forest of Small Webs", n:6, npc:"Mayor of Hanaka",
  s:[["前往小蛛網森林",1358,3539],["找到第二具屍體",1341,3521],["找到第三具屍體",1375,3512],["回報村長",1526,3412]]},
 {t:"Bury Them", n:7, npc:"Mayor of Hanaka",
  s:[["背起第一具屍體",1341,3521],["背起第二具屍體",1375,3512],["背起第三具屍體",1526,3412],["把屍體分別埋進三座墳墓",1254,3770],["回去找村長",1526,3412]]},
 {t:"The Trader", n:8, npc:"The Trader",
  s:[["和村長的商人碰面",1565,3427],["擊殺 15 隻蜘蛛",1366,3618,1],["收集 5 個毒腺",null,null],["把毒液交給商人",1565,3427]]},
 {t:"The Slime Marsh", n:9, npc:"The Trader",
  s:[["走西邊的路到島的山腳",null,null],["和 Ceyla 對話",499,3043]]},
 {t:"The Foot of the Island", n:10, npc:"Ceyla",
  s:[["和 Baldim 對話",507,3044],["前往巨人花園",374,2479,1],["和 Zebulgarath 對話",374,2479]]},
 {t:"By the Branches of the Ancients", n:11, npc:"Zebulgarath", tip:"提示：利用水往上爬。",
  s:[["從老橡樹採 3 塊樹皮",286,2448,1],["把樹皮交給 Zebulgarath",374,2479]]},
 {t:"The Broken Knot", n:12, npc:"Zebulgarath",
  s:[["到傳送點和 Zebulgarath 會合",498,3047,1],["和 Zebulgarath 對話",498,3047,1],["和 Baldim 對話",484,3058]]},
 {t:"The Suspended City", n:13, npc:"Baldim",
  s:[["在 Vallhat 找第 1 條線索",466,2999],["找第 2 條線索",398,3080],["找第 3 條線索",450,3116],["和看到怪物的村民對話",null,null],["把書拿給 Baldim",484,3058],["和 Lisa 對話",450,3116]]},
 {t:"The Southern Marshes", n:14, npc:"Lisa",
  s:[["到南方沼澤找 Isaac 的蹤跡",317,3200,1],["打倒史萊姆王 Gorbel",317,3200,1],["和 Isaac 對話並跟著他走",325,3194],["回去和 Baldim 對話",484,3058]]},
 {t:"What Emanates From You", n:15, npc:"Baldim",
  s:[["離開 Vallhat 前和 Baldim 對話",484,3058],["前往 Hanaka 北邊的沼澤",1421,3091],["調查神秘的綠色團塊",1421,3091],["取得遠古封印的第一塊碎片",1441,3091]]},
 {t:"He Came", n:16, npc:"The Master Swordsman",
  s:[["和劍術大師對話",1089,4289],["前往 Mizunari",3133,3656],["和 Elma 對話",3136,3668]]},
 {t:"At Elma's", n:17, npc:"Elma",
  s:[["和 Elma 對話 3 次",3136,3668],["到森林北邊的田",3334,3779,1],["擊殺倉庫旁的 3 隻 Nephentes",3334,3779,1],["清掉附近 5 隻 Nephentes",3334,3779,1],["回去找 Harrold",3335,3782],["採 8 束奇怪的麥穗",3401,3749],["回 Mizunari 找 Elma",3136,3668,1],["和 Harrold 對話",3134,3666]]},
 {t:"What Harrold Saw", n:18, npc:"Harrold",
  s:[["聽 Harrold 說 3 次他看到的事",3134,3666],["前往東邊道路上的井",4301,3704,1]]},
 {t:"The Chamber Beneath the Fields", n:19, npc:"Harrold",
  s:[["探索井下的隧道",4281,3710,1],["回到地面向 Harrold 報告",3134,3666],["前往盜賊的據點",4204,3899],["和 Bob 對話",4287,3890]]},
 {t:"The Geldorak Mine", n:20, npc:"Bob",
   en:{4:"Find Velka, in Castelbrume",5:"(Bonus) Hand the rare material to the Hanaka merchant"},
  s:[["和 Bob 對話",4287,3890],["取得 Geldorak 地下城鑰匙",4288,3887],["進入礦坑並完成地下城",4288,3887],["離開礦坑入口",4260,3892,1],["到 Castlebrume 找 Velka",2922,3006],["（額外）把稀有素材交給 Hanaka 的商人（推測是第 8 段村長的商人 The Trader，在 Hanaka 樓上；還沒有人交過，可能尚未實裝）",1565,3427,1]]},
 {t:"Velka, and the Ruins of the Dream", n:21, npc:"Velka",
  s:[["和 Velka 對話",2922,3006],["把奇怪的麥穗拿給 Velka 看",2922,3006],["找到南方的廢墟",2842,4400]]},
 {t:"The Archivist Specter", n:22, npc:"Archivist Specter",
  s:[["和檔案管理員幽靈對話（地下）",2849,4342],["收集 10 塊詛咒布",null,null],["打倒廢墟的詛咒之靈 Narax（地下）",2757,4285],["把報酬交給幽靈",2849,4342]]},
 {t:"Behind the Great Door", n:23, npc:"—",
  s:[["穿過解封的大門（地下）",2848,4254,1],["打倒 Cursed Nazgul Protector",null,null],["取得遠古封印的第三塊碎片",null,null],["和 A 的回聲對話，封印重新成形",null,null],["走通道離開",null,null],["前往墮落者迷宮",2382,2415]]},
 {t:"The Truth About the Seal", n:24, npc:"Catherine",
  s:[["到墮落者迷宮門口和 Catherine 對話",2382,2415]]},
 {t:"The Calamity", n:25, npc:"The Master Swordsman", en:{0:"Speak with the Master Swordsman to continue the main story",2:"Question a mage of Tolbana",3:"Question a mage of Tolbana",4:"Question a mage of Tolbana"},
  s:[["和劍術大師對話",1809,4289],["告訴他迷宮裡發生的事，選擇繼續或放棄",1809,4289],["問 Tolbana 的第 1 位法師",3321,1619],["問第 2 位法師",3200,1447],["問第 3 位法師",3198,1469],["去找 Mephisto",3260,1403]]},
 {t:"Mephisto", n:26, npc:"Mephisto", en:{0:"Speak with Mephisto to continue the main story",1:"Answer Mephisto's question",2:"Learn the mechanism: scroll + crystal"},
  s:[["和 Mephisto 對話",3260,1403],["回答他的問題（答案：An Instrument）",3260,1403],["學會卷軸加水晶的機制",3260,1403]]},
 {t:"Find a Way to Remake the Scroll", n:27, npc:"Emy", en:{0:"Find Emy in the Tolbana Forge",1:"Learn what it takes to remake the scroll",2:"Enter the old mill",3:"Harvest the ink (0/8)"},
  img:{3:[["img/quests/27_ink.jpg","墨水房一帶的地底（高度 Y 16～31，底圖是玩家上傳的室內・洞穴地圖，地面部分調暗）：3＝入口豎井下來的地方，通道往東、再往北接到 4＝墨水房（綠色的黏液方塊房間）。墨水的位置每次不同"]],2:[["img/quests/27_mill.jpg","舊磨坊一帶（底圖是本站的探索地圖）：上方橘點是 Cursed Ruins 傳送點，往南走；3＝入口豎井（在岩石裡），4＝墨水房（磨坊地下，Y 24）"]],6:[["img/quests/27_virelune.jpg","Virelune 一帶（底圖是本站的探索地圖）：右邊橘點是 Virelune 傳送點；6＝Dorven，7＝要調查的岩石（湖的西岸）"]]},
  s:[["到 Tolbana 鍛造場找 Emy",3227,1495],["問清楚重做卷軸需要什麼",3227,1495],["進入舊磨坊（入口是岩石裡的豎井）",2765,4778],["在磨坊裡的黏液方塊房間，150 秒內收集 8 份墨水：用 Emy 的燈（右鍵，每 5 秒一次）照出墨水，時間到會重來",2851,4705],["前往 Virelune",1617,1958],["和 Dorven 對話",1618,1959],["調查岩石，看有沒有入口",1419,1986],["全部帶回去給 Emy",3227,1495]]},
 {t:"Request an audience with King Harald", n:28, aka:"Request an Audience with King Harald", npc:"King Harald", tip:"遊戲裡 28 之後直接是 32，沒有 29～31。",
  s:[["前往 Harald 的宮殿",3199,1510],["和 Harald 國王對話",3198,1524],["得知檔案裡有關於他的記載",3198,1524]]},
 {t:"The Trial of the Haralds", n:32, aka:"The Trials of the Heralds", npc:"—", en:{0:"Find the tomb of the ancestors",1:"Trial of Harald I（路標：Épreuve de Harald I）"},
  img:{0:[["img/quests/32_route.jpg","路線：從 Tolbana 東北邊的路往上走，穿過森林到洞口（底圖是本站的探索地圖，紅線是站長畫的走法）"],["img/quests/32_cave.jpg","洞口：銅色平台上有往下的樓梯和一盞燈，沿著往下走"],["img/quests/32_tomb.jpg","走到底就是祖先之墓：長滿藤蔓的洞穴，中間有一顆石球"],["img/quests/32_hole.jpg","爬上石球，上面有一個洞，跳進去就到地底下的試煉場"]],1:[["img/quests/32_trials.jpg","地底的試煉場（高度 Y 32～47，底圖是玩家上傳的室內・洞穴地圖）：中間是圓形大廳，2＝東邊房間（試煉 1）、3＝南邊房間（試煉 2）、4＝西邊房間（試煉 3）"]]},
  s:[["找到祖先之墓：從 Tolbana 東北邊沿著路走上去到洞口，往下走到底會看到墓（大石球）；爬上去有一個洞，跳進去到地底下才是試煉的地方",3681,1648],["Harald 的試煉 1：Harald I 會叫出一隻怪，站著不要動就好",3781,1673],["Harald 的試煉 2：脫掉防具和主手、副手",3741,1714],["Harald 的試煉 3：Harald III 會叫出一隻怪，站著不要動就好",3701,1667],["得到三個年份：−700、−620、−660",null,null],["回去找 Harald 國王",3198,1524]]},
 {t:"The Crystal of Tolbana", n:33, npc:"Mephisto", tip:"梅菲斯特帶你到鍛造場附近一扇很久沒開過的門。他會說：「Follow me. And don't touch anything.」「It hasn't been opened since before my time.」「Go down. I'll join you.」（站長 2026-11-05 截圖）",
  en:{1:"Meet him at the door, near the forge",2:"Follow him to the door"},
  s:[["回去找 Mephisto",3260,1403],["在鍛造場附近的門和他會合",3239,1461],["跟著他走到門口",3216,1445]]},
 {t:"Beneath the Crystal", n:34, npc:"Mephisto", tip:"水晶下面是浮空島，地上鋪了一條紅石粉，沿著紅石粉往上走就對了（站長 2026-11-06）。",
  en:{0:"Go down beneath the crystal",1:"Meet Mephisto at the Kobold Tower"},
  img:{0:[["img/quests/34_redstone.jpg","水晶底下的浮空島：地上有一條紅石粉（紅線），沿著它往上走"]]},
  s:[["下到水晶底下",3047,1208],["在 Kobold Tower 和 Mephisto 會合",3400,1080]]},
 {t:"Floor 2", n:35, npc:"—", d:"前往第 2 層（2026-11-09 開放）。", tip:"wiki（2026-11-10）把這一段寫成「清 Kobold 地下城，向 Archaeologist 買鑰匙 5,000 Col」，和遊戲任務追蹤寫的「第2層／Reach Floor 2」不同；兩邊都列，等遊戲畫面確認。", en:{0:"Reach Floor 2"},
  s:[["抵達第 2 層",null,null]]}
],
// Floor 2 (opened 2026-11-09): the three rows SpaceKat added to the wiki main-quest table on 2026-11-10 (rev 2894, "from actual play");
// no game screenshot yet, no quest-tracker numbers. Story text and steps are our own Chinese wording of the wiki description.
2: [
 {t:"A Question in the air", n:1, npc:"The Master Swordsman's Echo", lv:"約 10", rw:"3150 經驗、1000 珂爾", d:"打倒 Kobold 領主後會出現在第 2 層。和劍術大師的回音（Echo of the Sword Master）對話，再走到懸崖邊。", wrev:5673,
  s:[["和劍術大師的回音對話",null,null],["走到懸崖邊",null,null]]},
 {t:"The people from bellow", npc:"Elyra", lv:"10", d:"和 Elyra 對話後，往南穿過兩座山之間的山口，前往 Urbus。",
  s:[["和 Elyra 對話",null,null],["往南穿過兩座山之間的山口，到 Urbus",null,null]]},
 {t:"Five Opinions on Artheon", n:3, npc:"Urbus residents", lv:"10", rw:"3150 經驗、1100 珂爾", d:"到了 Urbus 之後，和 5 位居民談談 Artheon。", wrev:5673,
  s:[["和 Calyss 對話",null,null],["和 Vaelith 對話",null,null],["和 Olyx 對話",null,null],["和 Oreyl 對話",null,null],["和 Duskwind 對話",null,null]]},
 // 2026-11-12 (in24): floor-2 main quests seen in the owner's quest tracker (Chinese UI). Floor 2 has its own numbering
 // (28 here is not floor 1's 28). Titles are the game's Chinese names; no English/French title seen yet.
 // 2026-11-17 (in27, owner's quest-log screenshots 11/15 14.08.05～14.10.08): 22 more floor-2 main quests (journal text and rewards);
 // there is no 2 in the journal list. 13.1～13.3 have no reward line
 {"t": "公牛從何而來", "n": 4, "npc": "Artheon", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "亞瑟昂派你去查明公牛從何而來，就在山的南方。", "rw": "3150 經驗、1150 珂爾", "s": [], "wen": "Where the Bulls Come From", "wrev": 5673},
 {t:"獸群狂奔", n:5, npc:"Artheon", tip:"說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟只有任務追蹤看到的這一步（站長 11/9～11/11 截圖），其他步驟和 NPC 還沒有截圖。", d:"草地裂開了。關閉噴出公牛的棕色傳送門，然後回報亞瑟昂。", rw:"3150 經驗、1250 珂爾", s:[["向亞瑟昂報告",null,null]], wen:"The Stampede", wrev:5673},
 {"t": "長角之謎", "n": 6, "npc": "Artheon", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "亞瑟昂想知道究竟發生了什麼事。和他談過後，前往凱洛爾村。", "rw": "3150 經驗、1300 珂爾", "s": [], "wen": "The Horned Mystery", "wrev": 5673},
 {"t": "鍛造之村", "n": 7, "npc": "—", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "有人在凱洛爾村大聲喧鬧。去看看發生了什麼事。", "rw": "3150 經驗、1350 珂爾", "s": [], "wen": "The Village of Forges", "wrev": 5673},
 {"t": "夸貝納", "n": 8, "npc": "Kwabena", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "夸貝納是兩位恩岡加之一，她知道如何製作蘇曼。她不太喜歡有人上門找她。", "rw": "3150 經驗、1400 珂爾", "s": [], "wen": "Kwabena", "wrev": 5673},
 {"t": "石子遊戲", "n": 9, "npc": "Kwabeno", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "夸貝諾是夸貝納的弟弟，負責製作蘇曼之心。前提是他還記得怎麼做。", "rw": "3300 經驗、1450 珂爾", "s": [], "wen": "The Pebble Game", "wrev": 5673},
 {"t": "蘇曼", "n": 10, "npc": "Kwabena", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "夸貝納用相思木雕刻蘇曼的印。得有人替她扶著木頭，一動也不能動。", "rw": "4000 經驗、1500 珂爾", "s": [], "wen": "The Suman", "wrev": 5673},
 {"t": "千年猴麵包樹", "n": 11, "npc": "Millennial Baobab", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "本層最古老的樹，總會先要點什麼，才肯讓人爬上去。", "rw": "4000 經驗、1600 珂爾", "s": [], "wen": "The Thousand-Year Baobab", "wrev": 5673},
 {"t": "花束", "n": 12, "npc": "Yaa", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "雅婭最喜歡的，是從沒有人帶給她的花。", "rw": "4000 經驗、1650 珂爾", "s": [], "wen": "The Bouquet", "wrev": 5673},
 {"t": "祭壇下的聲音", "n": 13, "npc": "Yaa", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "雅婭再也聽不見馬洛姆的祈禱。其中三則還在等待回應。", "rw": "4000 經驗、1700 珂爾", "s": [], "wen": "The Voice Beneath the Altar", "wrev": 5673},
 {"t": "毯子", "n": 13.1, "npc": "Ondo", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "翁多祈求自己的兒子在湖上不再受凍。", "s": [], "wen": "The Blanket", "wrev": 5673},
 {"t": "他妻子的歌", "n": 13.2, "npc": "Ismaël", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "伊斯梅爾在銀湖畔弄丟了妻子的音樂盒。", "s": [], "wen": "His Wife's Song", "wrev": 5673},
 {"t": "搖籃曲", "n": 13.3, "npc": "Mama Esi", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "艾西媽媽在尋找她丈夫曾唱給女兒聽的搖籃曲。", "s": [], "wen": "The Lullaby", "wrev": 5673},
 {"t": "只差一翼的女王", "n": 14, "npc": "Archaeologist", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "一位考古學家在蜂巢入口處記下一切：工蜂們吟唱著一位已不再統治的女王之名。", "rw": "4000 經驗、1750 珂爾", "s": [], "wen": "The Queen One Wing Away", "wrev": 5673},
 {"t": "廣場上的回響", "n": 15, "npc": "The Master Swordsman's Echo", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "在烏爾巴斯廣場，一道劍術大師的回響看著孩子們玩耍。他曾經認識雅婭。", "rw": "4000 經驗、1800 珂爾", "s": [], "wen": "The Echo of the Square", "wrev": 5673},
 {t:"鬼火", n:16, npc:"Bia", tip:"說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟只有任務追蹤看到的這一步（站長 11/9～11/11 截圖），其他步驟和 NPC 還沒有截圖。", d:"碧亞的聲音斷斷續續。一團綠色鬼火領著你走向切斷聲音的東西。", rw:"4000 經驗、1850 珂爾", s:[["擊退啃食樹根的鳥身女妖（6 隻）",null,null]], wen:"The Will-o'-the-Wisp", wrev:5673},
 {t:"凱順的燈籠", n:17, npc:"Bia", tip:"說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟只有任務追蹤看到的這一步（站長 11/9～11/11 截圖），其他步驟和 NPC 還沒有截圖。", d:"凱遜聖所的四盞燈籠在同一夜熄滅。從那以後，碧亞的鎖鏈便日漸磨損。", rw:"4000 經驗、1950 珂爾", s:[["重新點亮聖所的四盞燈籠（凱順聖所）",-6,181,1]], wen:"The Lanterns of Khesun", wrev:5673},
 {"t": "碧亞握著的東西", "n": 18, "npc": "Bia", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "從凱遜回來後，你向碧亞述說壁畫所描繪的景象。", "rw": "4000 經驗、2000 珂爾", "s": [], "wen": "What Bia Held", "wrev": 5673},
 {"t": "保衛碧亞", "n": 19, "npc": "Bia", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "亡者正在拉扯碧亞的鎖鏈。在祂恢復力量之前，石碑必須撐住。", "rw": "4200 經驗、2050 珂爾", "s": [], "wen": "Defend Bia", "wrev": 5673},
 {t:"貢品", n:20, npc:"Tano", tip:"說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟只有任務追蹤看到的這一步（站長 11/9～11/11 截圖），其他步驟和 NPC 還沒有截圖。", d:"塔諾有兩張面孔。戰士要戰利品：在烏爾巴斯南方的公牛身上取得10支公牛角，在凱洛爾北方的狼之谷取得10張狼皮，並在甜蜜森林熊之谷的熊身上取得2份熊脂。", rw:"4200 經驗、2100 珂爾", s:[["把戰士的貢品帶到塔諾的祭壇（公牛角 ×10、狼皮 ×10、熊脂 ×2）",null,null],["在塔諾的祭壇上獻上貢品",null,null]], wen:"The Tribute", wrev:5673},
 {"t": "判決", "n": 21, "npc": "The Judge", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "審判者就你的所作所為提出三個問題。答案他早已知道。", "rw": "4200 經驗、2150 珂爾", "s": [], "wen": "The Verdict", "wrev": 5673},
 {"t": "編織者", "n": 22, "npc": "Tano", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "塔諾要大師的編織者薇琳德拉死，她被關在平頂山深處一扇編織的門後。", "rw": "4200 經驗、2200 珂爾", "s": [], "wen": "The Weaver", "wrev": 5673},
 {"t": "諸神的真面目", "n": 23, "npc": "The Master Swordsman's Echo", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "在烏爾巴斯廣場，劍術大師的回響告訴你三位庇護者的真面目。", "rw": "4200 經驗、2300 珂爾", "s": [], "wen": "What the Gods Are", "wrev": 5673},
 {t:"登巴與倒影", n:24, npc:"Demba", tip:"說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟只有任務追蹤看到的這一步（站長 11/9～11/11 截圖），其他步驟和 NPC 還沒有截圖。", d:"養貓的巫師登巴知道怎麼減緩鏽蝕。他需要一些誰也摘不到的樹皮。", rw:"4200 經驗、2350 珂爾", s:[["在西邊區域採集腐化樹皮（6 個）",null,null]], wen:"Demba and the Reflection", wrev:5673},
 {"t": "願望祭壇", "n": 25, "npc": "—", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "水池周圍有三座石碑、三件神器，還有三尊等待了許久的雕像。", "rw": "4200 經驗、2400 珂爾", "s": [], "wen": "The Altar of Wishes", "wrev": 5673},
 {"t": "通道的守護者", "n": 26, "npc": "—", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "咆哮牛是沉睡的牛頭人中最巨大的一位，守著通往阿斯特里歐斯巢穴的峽谷。", "rw": "4200 經驗、2450 珂爾", "s": [], "wen": "The Guardian of the Pass", "wrev": 5673},
 {"t": "公牛之首", "n": 27, "npc": "—", "tip": "說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟、NPC 還沒有截圖。", "d": "巢穴岩壁上雕刻的巨大牛頭睜開了雙眼。", "rw": "4200 經驗、2500 珂爾", "s": [], "wen": "The Bull's Head", "wrev": 5673},
 {t:"阿斯特里歐斯的巢穴", n:28, npc:"—", tip:"說明和獎勵取自任務日誌（站長 11/15 截圖）；步驟只有任務追蹤看到的這一步（站長 11/9～11/11 截圖），其他步驟和 NPC 還沒有截圖。日誌說明是法文原文，要點：點岩壁下的告示板開地下城選單，打倒巢穴深處的牛頭人王，打開終點寶箱；回到第 2 層後任務完成，並被送到第 3 層。", d:"La porte de l'Antre d'Astérius s'est ouverte sous la tête du taureau. Cliquez sur le tableau au pied de la paroi pour ouvrir le menu du donjon, puis terrassez le Roi Taurus au fond de l'Antre. Ouvrez le coffre de fin : de retour au Palier 2, la quête se valide et vous êtes envoyé au Palier 3.", rw:"4200 經驗、2650 珂爾", en:{0:"Clear the Lair of Asterius dungeon"}, s:[["通關阿斯特里歐斯的巢穴地下城",null,null]], wen:"Asterius's Lair", wrev:5673},
 // 2026-11-13 (in26, user E2): only the name is known, from the obtain line of 梅莉歐娜之鑰 (Clé de Melliona). Main or side quest is unknown; listed here
 // (main-quest list) because a side-quest row needs a town and NPC position
 {t:"前往梅莉歐娜途中", npc:"—", rw:"梅莉歐娜之鑰", d:"遊戲截圖只看到任務名稱（梅莉歐娜之鑰的取得途徑），任務內容、NPC、位置都還不知道。", tip:"名稱取自梅莉歐娜之鑰的屬性視窗（站長 2026-11-13 截圖）：「任務『前往梅莉歐娜途中』的獎勵」。是主線還是支線也還不知道，先列在這裡。", s:[]}
],
3: [
  // 2026-11-13 (in25): floor-3 main quests 01～08 from the quest log (Chinese UI, owner 11/12 screenshots). Region label 失落迷霧之森.
 {"t": "霧中", "n": 1, "npc": "Elora", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "依照艾洛拉的指示走到橋邊，別在迷霧中迷路。", "rw": "10000 經驗、1800 珂爾", "s": [], "wen": "Into the Mist", "wrev": 5673},
 {"t": "兩種說法", "n": 2, "npc": "Faelir, Nyrath", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "菲利爾和尼拉斯為了聖樹爭執不下。先聽聽雙方的說法，再選擇陣營。", "rw": "12000 經驗、1950 珂爾", "s": [], "wen": "Two Versions", "wrev": 5673},
 {"t": "按在樹皮上的手", "n": 3.1, "npc": "Faelir", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "菲利爾在尊弗特以東的白樹阿爾達里亞腳下等你。去看看希爾維爾在守護什麼。", "s": [], "wen": "Hand on the Bark", "wrev": 5673},
 {"t": "葉與根", "n": 3.2, "npc": "Nyrath", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "尼拉斯在河畔的懷斯盧姆等你，就在尊弗特以西。去看看希爾諾瓦守護的是什麼。", "s": [], "wen": "The Leaf and the Root", "wrev": 5673},
 {"t": "抉擇", "n": 3.3, "npc": "Faelir, Nyrath", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "兩邊你都看過了。到尊弗特南門與菲利爾和尼拉斯會合，做出選擇吧。", "rw": "13000 經驗、2050 珂爾、迷霧筆記 ×1", "s": [], "wen": "The Choice", "wrev": 5673},
 {"t": "得來不易的信任", "n": 4, "npc": "Aurelianne, Swarrik", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "贏得陣營的信任：為希爾維爾的奧蕾莉安效勞，或向希爾諾瓦的斯瓦里克證明自己。", "rw": "14500 經驗、2200 珂爾", "s": [], "wen": "Hard-Won Trust", "wrev": 5673},
 {"t": "令人不安的失蹤", "n": 5, "npc": "—", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "帕薩艾爾山的盜賊抓住了你陣營的一名斥候。被關在籠子裡的恐怕不只他一人。", "rw": "8150 經驗、2700 珂爾", "s": [["在帕薩艾爾山的巢穴擊敗十名強盜（0/10）", null, null], ["通知奧蕾莉安", null, null]], "wen": "A Worrying Disappearance", "wrev": 5673},
  // wiki rev 5673: the faction leader's mission notebook (no number on the wiki)
 {"t": "任務筆記本", "npc": "Camp leader", "tip": "遊戲任務追蹤（站長 11/13 截圖，中文和英文介面）只看到這一步；說明是本站依 wiki 主線表改寫。", "d": "你的陣營首領有一本任務筆記，每完成一個任務就提升聲望；聲望到 8，儀式就會開放。", "s": [["到市政廳查閱奧蕾莉安的任務手冊", null, null]], "en": {"0": "Check Aurelianne's mission book, at the town hall"}, "wen": "The Mission Notebook", "wrev": 5673},
 {"t": "突襲", "n": 6, "npc": "—", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "疲憊不堪的入侵者正在攻打城鎮。擊退他們，並聽聽最後一人說了什麼。", "rw": "8150 經驗、2700 珂爾", "s": [], "wen": "Surprise Attack", "wrev": 5673},
 {"t": "破壞行動", "n": 7, "npc": "—", "tip": "說明和獎勵取自任務日誌（站長 11/12 截圖）；步驟、NPC 還沒有截圖。", "d": "從另一陣營的曬衣架偷走十五塊布料，不要被發現：靠近守衛時要蹲下。", "rw": "8150 經驗、2700 珂爾", "s": [], "wen": "Sabotage", "wrev": 5673},
 {"t": "仍屹立之物", "n": 8, "npc": "—", "tip": "遊戲任務追蹤（站長 11/13 截圖）只看到名稱和這一步的目標；獎勵取自 wiki 主線表，說明還不知道。", "s": [["在尊弗特周圍的每座界標放上水晶並連接光束（0/5）", null, null]], "en": {"0": "Set a crystal on each boundary stone around Zumfut and link the beams"}, "wen": "What Stands Upright", "rw": "8150 經驗、2700 珂爾", "wrev": 5673},
  // 2026-11-18 (owner: wiki 主線拿來補): wiki main-quest table rev 5673 (2026-11-17), floor-3 quests 9-18 and 16 bis; text is our Chinese rewrite
 {"t": "陷入險境的信使", "n": 9, "tip": "遊戲任務追蹤（站長 11/13 截圖）只看到這三步；說明是本站依 wiki 主線表改寫，獎勵取自 wiki 主線表。", "npc": "—", "rw": "8150 經驗、2700 珂爾", "d": "護送一名信使走過危險的道路：希爾維爾那邊是蘇爾瓦前往埃蘭之地，希爾諾瓦那邊是莫爾提斯前往莉薩特。信使血量太低時會退回，要從頭再來。", "s": [["到通往埃亞蘭之地的道路起點與蘇爾瓦會合", null, null], ["護送蘇爾瓦到埃亞蘭之地", null, null], ["回去向奧蕾莉安回報", null, null]], "wen": "Messenger in Danger", "wrev": 5673},
 {"t": "Perilous Ritual", "n": 10, "npc": "—", "rw": "8150 經驗、2700 珂爾", "d": "守住儀式祭壇，擋下被魔法引來的野獸：一邊是阿爾達里亞之樹的淨化儀式，另一邊是召喚莉薩特的靈魂。", "s": [], "wrev": 5673},
 {"t": "A Growing Population", "n": 11, "npc": "—", "rw": "8150 經驗、2700 珂爾", "d": "敵對的野獸從南方大量湧來。清出能走的道路，把困在樹上的獵人（或斥候）帶回來。", "s": [], "wrev": 5673},
 {"t": "成年禮", "n": 12, "tip": "遊戲任務追蹤（站長 11/13 截圖）只看到這一步；說明是本站依 wiki 主線表改寫，獎勵取自 wiki 主線表。", "npc": "—", "rw": "19950 經驗、3200 珂爾、Cord x1", "d": "成年儀式：循著蹤跡找到儀式的生物，打倒牠，把戰利品帶回去給首領。", "s": [["擊敗洞穴深處的成年迷霧之狼", null, null]], "wen": "The Rite of Passage", "wrev": 5673},
 {"t": "地底的爭執", "n": 13, "tip": "遊戲任務追蹤（站長 11/13 截圖）只看到這一步；說明是本站依 wiki 主線表改寫，獎勵取自 wiki 主線表。", "npc": "Lyrath, Eryndil", "rw": "9400 經驗、3300 珂爾、Mask x1", "d": "地底的爭執：調查艾勒薩礦坑，介入 Lyrath 和 Eryndil 之間，然後拿出證據。", "s": [["會合各小隊前先調查艾勒薩礦坑（0/3）", null, null]], "wen": "A Disagreement Underground", "wrev": 5673},
 {"t": "治樹的良藥", "n": 14, "tip": "遊戲任務追蹤（站長 11/13 截圖）只看到這一步；說明是本站依 wiki 主線表改寫，獎勵取自 wiki 主線表。", "npc": "—", "rw": "9700 經驗、3450 珂爾", "d": "給聖樹的藥：村裡的法師要舉行儀式，需要幼年樹人的種子和獸人之血。在 Groulagh，有東西從籠子裡掉了下來。", "s": [["查看從格魯拉格上空的籠子掉下來的東西", null, null]], "wen": "A Remedy for the Tree", "wrev": 5673},
 {"t": "One Evil Can Hide Another", "n": 15, "npc": "—", "rw": "10000 經驗、3550 珂爾、Adoryll's Loot x1", "d": "一個災禍底下藏著另一個：法師的儀式失敗了。阿朵瑞爾的叫聲從泰瑞亞莉絲之井傳出，你得爬上 Groulagh 上方牠的籠子。", "s": [], "wrev": 5673},
 {"t": "What the Tree Keeps", "n": 16, "npc": "—", "rw": "10300 經驗、3700 珂爾", "d": "聖樹守護的東西：在阿爾達里亞之樹腳下戴上礦坑的面具，聆聽記憶中的人影，再去問法師。", "s": [], "wrev": 5673},
 {"t": "The Smooth Stone", "n": "16 bis", "npc": "Aurelianne, Swarrik", "rw": "600 經驗、1000 珂爾", "d": "光滑的石頭：把 Ilvane 的東西帶給另一個陣營的首領，再讓奧蕾莉安和 Swarrik 一起來到光滑的石頭前。", "s": [], "wrev": 5673},
 {"t": "戰前準備", "n": 17, "tip": "遊戲任務追蹤（站長 11/14 截圖）只看到這一步；說明是本站依 wiki 主線表改寫，獎勵取自 wiki 主線表。", "npc": "—", "rw": "10600 經驗、3800 珂爾", "d": "備戰：回到村裡找法師做好準備，然後前往 Shalheira 的迷宮入口。", "s": [["前往夏爾海拉的迷宮區入口", null, null]], "wen": "Battle Preparation", "wrev": 5673},
 {"t": "The Labyrinth Guardian", "n": 18, "npc": "Shalheira", "rw": "10900 經驗、3950 珂爾", "d": "迷宮守護者：在拱門前和 Shalheira 對話，然後擊敗封鎖迷宮一百年的守護者 Furacas。", "s": [], "wrev": 5673}
]};
