/* eslint-env browser */
self.addEventListener('install', event => event.waitUntil(
  caches.open('funda-v1-core')
    .then(cache => cache.add('/offline/'))
    .then(self.skipWaiting())
));

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .catch(err => fetchOfflinePage()) //eslint-disable-line no-unused-vars
  );
});

function fetchOfflinePage() {
  return caches.open('funda-v1-core')
    .then(cache => cache.match('/offline/'));
}
