/* eslint-env browser */
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
});
