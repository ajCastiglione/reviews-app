var staticCache = 'main-cache-v3';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCache).then(function(cache){
            return cache.addAll([
                '/',
                '/js/main.js',
                '/js/dbhelper.js',
                '/js/restaurant_info.js', 
                '/css/styles.css',
                '/data/restaurants.json'
            ]);
        })
    );
});

self.addEventListener('activate', function(event){
    event.waitUntil(
        caches.keys().then(function(name){
            return Promise.all(
                name.filter(function(name){
                    return name.startsWith('main-') &&
                    name != staticCache;
                }).map(function(name) {
                    return caches.delete(name)
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});