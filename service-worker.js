self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("expense-app").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/app-icon.svg",
      ]);
    })
  );
});