var CACHE_NAME = 'my-site-cache-v2';

var urlsToCache = [
  '/assets/application.js',
  '/assets/application.css',
  '/'
];

self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Install');
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
    .catch(function() {
      console.error('cache failure')
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .catch(function() {
      debugger
    })
    .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest)
          .then(function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              })
              .catch(function(error) {
                debugger
                return {
                  error: error.message
                };
              });
            return response;
          })
          .catch(function(error) {
            return {
              error: error.message
            };
          });
      })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});