/* Gacha (商城轉蛋) contents, used only as an obtain source on item panels — no rates (user 2026-11-07:
   「轉蛋表不要放，只需要當成來源，不用寫機率」). Source: official page 傳送門機率 https://saominecraft.com/tw/gacha
   (settings updated 2026-11-05, read 2026-11-07). Reward names in English as on the page; "id" = this site's item
   when the name only matches the catalogue's French name (Bourse de 500Cols…). Rewards with no site item are kept
   so they can be attached once the item exists. */
window.SAO_GACHA = {
 src: { title: "傳送門機率", url: "https://saominecraft.com/tw/gacha", date: "2026-11-07" },
 banners: [
  { n: "Aincrad 轉蛋", note: "常駐，抽到第 1 層的地下城鑰匙、水晶和珂爾", items: [
    { en: "Aincrad Crystal" }, { en: "Resurrection Crystal" },
    { en: "Greater Mana Crystal" }, { en: "Superior Power Crystal" }, { en: "Greater Healing Crystal" }, { en: "Greater Stamina Crystal" },
    { en: "Key of Xal'Zirith" }, { en: "Key of the Fallen" }, { en: "Kobold Key" },
    { en: "Pouch of 500 Cols", id: "p|1696" }, { en: "Pouch of 250 Cols", id: "p|1695" } ] },
  { n: "萬聖節轉蛋", note: "萬聖節活動限定（2026，到 11/15）", items: [
    { en: "Scroll: Witch's Cauldron" }, { en: "Scroll: Headless Ride" }, { en: "Scroll: Lights Out" }, { en: "Scroll: Hunter's Moon" },
    { en: "Scroll: Gate of Souls (Lightning)" }, { en: "Scroll: Gate of Souls (Earth)" }, { en: "Witch's Grimoire" },
    { en: "Echo Will-o'-the-Wisp" }, { en: "Dark Gift Pumpkin" }, { en: "Title: Soul Reaper" }, { en: "Title: Pumpkin King" },
    { en: "Scroll: Witch's Broom" }, { en: "Scroll: Pumpkin Knight" }, { en: "Scroll: Mutant Pumpkin" }, { en: "Halloween Gift" } ] }
 ]
};
