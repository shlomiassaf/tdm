declare const serviceWorkerOption: {  assets: string[]; };

export function registerOfflineWorker(self: ServiceWorkerGlobalScope) {
  const DEBUG = (ENV || '').substr(0, 3) === 'dev';

  const log = DEBUG ? console.log : (msg: string) => {}; // tslint:disable-line

  // When the user navigates to your site,
  // the browser tries to redownload the script file that defined the service
  // worker in the background.
  // If there is even a byte's difference in the service worker file compared
  // to what it currently has, it considers it 'new'.
  const { assets } = serviceWorkerOption;
  const CACHE_NAME = new Date().toISOString();
  let assetsToCache = [...assets, './'];

  assetsToCache = assetsToCache.map(path => new URL(path, self.location).toString());

// When the service worker is first added to a computer.
  self.addEventListener('install', event => {
    // Perform install steps.
    log('[SW] Install event');

    // Add core website files to cache during serviceworker installation.
    event.waitUntil(
      self.caches
        .open(CACHE_NAME)
        .then(cache => cache.addAll(assetsToCache))
        .then(() => log('Cached assets: main', assetsToCache) )
        .catch(error => {
          console.error(error);
          throw error;
        })
    );
  });

// After the install event.
  self.addEventListener('activate', event => {
    log('[SW] Activate event');

    // Delete the caches that are not the current one.
    const cleanCache = (cacheName: any) => cacheName.indexOf(CACHE_NAME) === 0 ? null : self.caches.delete(cacheName);

    // Clean the caches
    event.waitUntil(self.caches.keys().then( cacheNames => Promise.all(cacheNames.map(cleanCache)) ) );
  });

  self.addEventListener('message', event => {
    switch (event.data.action) {
      case 'skipWaiting':
        if (self.skipWaiting) {
          self.skipWaiting();
          self.clients.claim();
        }
        break;
      default:
        break;
    }
  });

  self.addEventListener('fetch', event => {
    const { request } = event;
    // Ignore not GET request.
    if (request.method !== 'GET') {
      log(`[SW] Ignore non GET request ${request.method}`);
      return;
    }

    const requestUrl = new URL(request.url);
    if (requestUrl.pathname.match('^\/api')) {
      log(`[SW] Ignore API request ${request.url}`);
      return;
    }

    // Ignore difference origin.
    if (requestUrl.origin !== location.origin) {
      log(`[SW] Ignore difference origin ${requestUrl.origin}`);
      return;
    }

    const resource = self.caches.match(request)
      .then(response => {
        if (response) {
          log(`[SW] fetch URL ${requestUrl.href} from cache`);
          return response;
        }

        return fetch(request) // Load and cache known assets.
          .then(respNetwork => {
            if (!respNetwork || !respNetwork.ok) {
              log(`[SW] URL [${requestUrl.toString()}] wrong responseNetwork: ${respNetwork.status} ${respNetwork.type}`); // tslint:disable-line
            } else {
              log(`[SW] URL ${requestUrl.href} fetched`);
              const responseCache = respNetwork.clone();
              self.caches
                .open(CACHE_NAME)
                .then(cache => cache.put(request, responseCache) )
                .then(() => log(`[SW] Cache asset: ${requestUrl.href}`) );
            }
            return respNetwork;
          })                     // User is landing on our page.
          .catch(() => event.request.mode === 'navigate' ? self.caches.match('./') : null );

      });
    event.respondWith(resource);
  });
}
