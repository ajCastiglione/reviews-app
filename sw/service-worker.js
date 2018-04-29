var staticCache = 'main-cache-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCache).then(function(cache){
            return cache.addAll([
                '/',
                '/js/main.js',
                '/js/dbhelper.js',
                '/js/restaurant_info.js', 
                '/css/styles.css',
                '/sw/index.js',
                '/sw/service-worker.js',
                '/data/restaurants.json'
            ]);
        })
    );
});

self.addEventListener('activate', function(event){
    event.waitUntil(self.clients.claim()); 
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});