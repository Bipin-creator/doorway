/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


self.fallback = async request => {
  // https://developer.mozilla.org/en-US/docs/Web/API/RequestDestination
  switch (request.destination) {
    case 'document':
      if (true) return caches.match("/_offline", {
        ignoreSearch: true
      });
    case 'image':
      if (true) return caches.match("/fallback-image.png", {
        ignoreSearch: true
      });
    case 'audio':
      if (true) return caches.match("/fallback-audio.mp3", {
        ignoreSearch: true
      });
    case 'video':
      if (true) return caches.match("/fallback-video.mp4", {
        ignoreSearch: true
      });
    case 'font':
      if (true) return caches.match("/fallback-font.woff2", {
        ignoreSearch: true
      });
    case '':
      if (false) {}
    default:
      return Response.error();
  }
};
/******/ })()
;