;
const CACHE_NAME = 'v1_cache_curriculum',
urlsToCache = [
    'https://axelgzca.github.io/Curriculum-Vitae/',
    'https://axelgzca.github.io/Curriculum-Vitae/index.html',
    'https://axelgzca.github.io/Curriculum-Vitae/style.css',
    'https://axelgzca.github.io/Curriculum-Vitae/script.js',
    'https://axelgzca.github.io/Curriculum-Vitae/fetch.js',
    'https://axelgzca.github.io/Curriculum-Vitae/manifest.json',
    'https://axelgzca.github.io/Curriculum-Vitae/img/Fotografia.png'
]

self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache =>{
                return cache.addAll(urlsToCache)
                    .then(() => self.skipWaiting())
            })
            .catch(error => console.log(error))
    )
})
self.addEventListener('activate', event =>{
    const cacheWhitelist = [CACHE_NAME]
    event.waitUntil(
        caches.keys()
            .then(cachesNames =>{
                cachesNames.map(cacheName =>{
                    if(cacheWhitelist.indexOf(cacheName)=== -1){
                        return caches.delete(cacheName)
                    }
                })
            })
            .then(() => self.clients.claim())
    )
})
self.addEventListener('fetch', event =>{
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(res){
                return res
            }
            
            return fetch(event.request)
        })
    )
})