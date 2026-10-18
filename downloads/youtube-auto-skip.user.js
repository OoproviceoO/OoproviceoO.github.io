// ==UserScript==
// @name         YouTube 自動略過廣告
// @namespace    https://github.com/OoproviceoO
// @version      1.3
// @description  出現「略過廣告」就自動點；不能略過的廣告自動靜音＋加速；關閉橫幅廣告
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @run-at       document-idle
// @grant        none
// @updateURL    https://ooproviceoo.github.io/downloads/youtube-auto-skip.user.js
// @downloadURL  https://ooproviceoo.github.io/downloads/youtube-auto-skip.user.js
// ==/UserScript==

(function () {
  'use strict';

  // ===== 設定區（可自行修改）=====
  const SPEED_UP_ADS = true;   // 不能略過的廣告是否加速播放
  const AD_SPEED = 16;         // 廣告播放倍速（最高 16）
  const MUTE_ADS = true;       // 廣告播放時是否靜音
  const CHECK_MS = 300;        // 每隔多少毫秒檢查一次
  // ==============================

  // 各版本 YouTube 的「略過」按鈕
  const SKIP_SELECTORS = [
    '.ytp-skip-ad-button',
    '.ytp-ad-skip-button',
    '.ytp-ad-skip-button-modern',
    '.ytp-ad-skip-button-slot button',
    'button[id^="skip-button"]',
  ];

  // 影片上的橫幅廣告關閉鈕
  const OVERLAY_CLOSE_SELECTORS = [
    '.ytp-ad-overlay-close-button',
    '.ytp-ad-overlay-close-container',
  ];

  const style = document.createElement('style');
  style.textContent = `
    .ad-showing video { opacity: 0 !important; }
    .ad-showing .ytp-ad-player-overlay-layout > :not([class*="skip-or-preview"]),
    .ad-showing .ytp-ad-player-overlay,
    .ad-showing .ytp-ad-action-interstitial,
    .ad-showing .ytp-ad-image-overlay,
    .ad-showing .ytp-ad-overlay-container,
    .ad-showing .ytp-ad-text,
    .ad-showing .ytp-ad-visit-advertiser-button { display: none !important; }
    .ad-showing::after {
      content: "廣告略過中…"; position: absolute; left: 50%; top: 50%;
      transform: translate(-50%, -50%); color: #ccc; font-size: 18px;
      pointer-events: none; z-index: 10;
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  let inAd = false;
  let savedRate = 1;
  let savedMuted = false;

  function clickIfVisible(selectors) {
    for (const sel of selectors) {
      const btn = document.querySelector(sel);
      if (btn && btn.offsetParent !== null) {
        const r = btn.getBoundingClientRect();
        const opt = { bubbles: true, cancelable: true, view: window,
                      clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 };
        for (const t of ['pointerdown', 'mousedown', 'pointerup', 'mouseup']) {
          btn.dispatchEvent(t.startsWith('pointer') ? new PointerEvent(t, opt) : new MouseEvent(t, opt));
        }
        btn.click();
        return true;
      }
    }
    return false;
  }

  function tick() {
    const player = document.querySelector('#movie_player, .html5-video-player');
    const video = document.querySelector('video');
    if (!player || !video) return;

    const adShowing = player.classList.contains('ad-showing') ||
                      player.classList.contains('ad-interrupting');

    // 1. 有略過鈕就點
    clickIfVisible(SKIP_SELECTORS);

    // 2. 關掉橫幅廣告
    clickIfVisible(OVERLAY_CLOSE_SELECTORS);

    // 3. 廣告中：靜音＋加速
    if (adShowing) {
      if (!inAd) {
        inAd = true;
        savedRate = video.playbackRate || 1;
        savedMuted = video.muted;
      }
      if (MUTE_ADS) video.muted = true;
      // YouTube 會忽略程式送出的點擊，所以直接把廣告跳到結尾（等同按略過）
      const d = video.duration;
      if (isFinite(d) && d > 0 && video.currentTime < d - 0.3) {
        video.currentTime = d - 0.1;
      }
      if (SPEED_UP_ADS && video.playbackRate !== AD_SPEED) {
        video.playbackRate = AD_SPEED;
      }
    } else if (inAd) {
      // 廣告結束：恢復原本的速度和音量
      inAd = false;
      video.playbackRate = savedRate;
      video.muted = savedMuted;
    }
  }

  setInterval(tick, CHECK_MS);
})();
