// Nama cache (Bisa diganti jika ada update besar)
const CACHE_NAME = 'djangkos-pos-v1';

// Saat aplikasi diinstal
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Menginstal App...');
    self.skipWaiting();
});

// Saat aplikasi aktif
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] App Aktif!');
    event.waitUntil(self.clients.claim());
});

// Saat aplikasi mengambil data dari internet (biarkan lewat langsung agar real-time Firebase aman)
self.addEventListener('fetch', (event) => {
    // Tidak melakukan blokir cache agar Firebase Real-time tetap lancar
    event.respondWith(fetch(event.request));
});
