self.addEventListener("install", e => {
    console.log("Install!");
    e.waitUntil(
        caches.open('static').then( cache => {
            return cache.addAll([
                './',
                './css/styles.css',
                './logo_images/logo150.png',
                './js/index.js',
                './js/app.js'
            ])
        })
    );
});

self.addEventListener("fetch", e => {
    //console.log(`Intercepting fetch ${e.request.url}`);
    e.respondWith( 
        caches.match(e.request).then( response => {
            return response || fetch(e.request);
        })
    );
});