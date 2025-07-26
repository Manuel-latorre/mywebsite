const CACHE_NAME = 'manuel-latorre-v1';
const STATIC_ASSETS = [
  '/',
  '/src/main.tsx',
  '/favicon/favicon.ico',
];

const LONG_CACHE_ASSETS = [
  /\/assets\/.*\.css$/,
  /\/assets\/.*\.js$/,
  /\/assets\/.*\.(png|jpg|jpeg|svg|webp)$/,
  /\/assets\/.*\.(woff|woff2|ttf)$/,
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache First para assets estáticos
  if (LONG_CACHE_ASSETS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request).then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Network First para todo lo demás
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});