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
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
                'restaurant.html'
            ]);
        })
    );
});

self.addEventListener('activate', function(evt){
    evt.waitUntil(
        caches.keys().then(function(name){
            return Promise.all(
                name.filter(function(name){
                    return name.startsWith('main-') &&
                    name != staticCache;
                }).map(function(name) {
                    return cache.delete(name)
                })
            );
        })
    );
});

self.addEventListener('fetch', function(evt) {
    evt.respondWith(
        caches.match(evt.request).then(function(response) {
            if(response) return response;
            return fetch(evt.request);
        })
    );
});