/* eslint-env browser */
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
});
