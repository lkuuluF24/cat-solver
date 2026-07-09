const CACHE_NAME = 'cat-solver-v1';
const SHARE_CACHE = 'cat-solver-share';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Intercept the share-target POST request declared in manifest.json,
// pull the shared image out of the multipart form, stash it in the
// Cache Storage API, then redirect to a plain GET the page can handle.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (event.request.method === 'POST' && url.pathname.endsWith('index.html')) {
    event.respondWith(handleShareTarget(event));
    return;
  }
});

async function handleShareTarget(event) {
  try {
    const formData = await event.request.formData();
    const file = formData.get('photo');
    if (file) {
      const cache = await caches.open(SHARE_CACHE);
      await cache.put('shared-photo', new Response(file));
    }
  } catch (e) {
    // fall through to redirect even if something went wrong reading the file
  }
  return Response.redirect('./index.html?share-target=1', 303);
}
