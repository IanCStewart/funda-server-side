/* eslint-env browser */
self.addEventListener('install', event => event.waitUntil(
  caches.open('funda-v1-core')
    .then(cache => cache.addAll([
      '/offline/',
      '/style.css',
      '/reset.min.css',
      '/assets/img/chat-background.jpg',
      '/assets/img/logo.svg',
      '/assets/img/fundapi-avatar.svg',
      '/assets/img/user-avatar.svg',
      '/funda.js'
    ]))
    .then(self.skipWaiting())
));

self.addEventListener('fetch', function(event) {
  const request = event.request;
  if(request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => cachePage(request, response))
        .catch(err => getCachedPage(request)) //eslint-disable-line no-unused-vars
        .catch(err => fetchCoreFile('/offline/')) //eslint-disable-line no-unused-vars
    );
  } else {
    event.respondWith(
      fetch(request)
        .catch(err => fetchCoreFile(request.url)) //eslint-disable-line no-unused-vars
        .catch(err => fetchCoreFile('/offline/')) //eslint-disable-line no-unused-vars
    );
  }
});

function fetchCoreFile(url) {
  return caches.open('funda-v1-core')
    .then(cache => cache.match(url))
    .then(response => response ? response : Promise.reject());
}

function getCachedPage(request) {
  return caches.open('funda-v1-pages')
    .then(cache => cache.match(request))
    .then(response => response ? response : Promise.reject());
}

function cachePage(request, response) {
  const clonedResponse = response.clone();
  caches.open('funda-v1-pages')
    .then(cache => cache.put(request, clonedResponse));
  return response;
}
