/* 像素小窩 — 離線快取
   網頁本身「先上網拿新版，連不上才用快取」，所以每次更新都會馬上拿到；
   Firebase 程式庫版本固定，用快取比較快。 */
const VER = "pn-v1";
const CORE = ["./", "./index.html", "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VER).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  if (url.hostname === "cdn.jsdelivr.net") {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const cp = res.clone(); caches.open(VER).then(c => c.put(req, cp)); return res; })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => { if (res.ok) { const cp = res.clone(); caches.open(VER).then(c => c.put(req, cp)); } return res; })
    .catch(() => caches.match(req).then(r => r || caches.match("./index.html"))));
});
