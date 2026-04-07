self.addEventListener("install", function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open("expense-app-v2").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./app-icon.svg",
      ]);
    })
  );
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          if (key !== "expense-app-v2") {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});