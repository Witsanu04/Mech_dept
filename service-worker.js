const CACHE_NAME = 'mech-dept-v1';
const assets = [
  'index.html',
  'manifest.json'
];

// ติดตั้ง Service Worker และลงทะเบียน Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// ดึงข้อมูลจาก Cache เพื่อความรวดเร็วในการโหลดแอป
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});