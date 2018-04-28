self.addEventListener('install', function(event) {

    event.waitUntil(
        caches.open('main-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                'js/main.js',
                'css/styles.css',
                'img'
            ]);
        })
    );
});