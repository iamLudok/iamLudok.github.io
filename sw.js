/* =============================================
   iamLudok Portfolio — service worker
   Cache-first with background refresh. Lets the
   site load offline / installable as a PWA.
   Bump CACHE when assets change to invalidate.
   ============================================= */

const CACHE = 'iamludok-v1';

const CORE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/i18n.js',
  '/js/main.js',
  '/js/graph.js',
  '/js/terminal.js',
  '/img/favicon.svg',
  '/img/avatar.webp',
  '/img/icon-192.png',
  '/img/icon-512.png',
  '/fonts/inter-latin.woff2',
  '/fonts/jetbrains-mono-latin.woff2',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() =>
        cached || (request.mode === 'navigate' ? caches.match('/index.html') : Response.error())
      );
      return cached || network;
    })
  );
});
