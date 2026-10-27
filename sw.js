self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('yami-store-v2').then((cache) => {
            return cache.addAll([
                './index.html',
                'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                'https://cdn.jsdelivr.net/npm/chart.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
