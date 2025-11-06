importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.core.skipWaiting();

workbox.routing.registerRoute( // Cache images
	({ request }) => request.destination === 'image', // Match image requests
	new workbox.strategies.CacheFirst()
);