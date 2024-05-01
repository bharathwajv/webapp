'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "baa327b506fed8aea44faa2ae12e75b0",
"assets/AssetManifest.bin.json": "47765bd758d0a357e2d90af97ebd1cdd",
"assets/AssetManifest.json": "00fdbeb382cdfb9e84ff33dd265f8d8b",
"assets/assets/fonts/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/assets/icons/icon.png": "a01643b04b82e895d9f7d520ce49e002",
"assets/assets/images/Chai_Kings_logo.svg": "6447411afd6fe4bf8ede5031b530d1e5",
"assets/assets/images/coupon.svg": "2ea00146bfe7b4d32d84585e54175552",
"assets/assets/images/india-flag-icon.svg": "f23942851815f6633b23b68be0763a8a",
"assets/assets/images/location_arrow.svg": "0c49aa0c1b1588e57e15a2d853460702",
"assets/assets/images/menu/menu_coffie.png": "6b2ca7fe7103ead589dfb174285b534f",
"assets/assets/images/menu/menu_sandwich.png": "f003da9a5f71ee82bc1f0eb005ca6591",
"assets/assets/images/menu/menu_snacks.png": "e75d3485f52b5f48c55ceb0d1433c4a1",
"assets/assets/images/menu/menu_tea.png": "c3e5b595364b4fdfdcf072526943620a",
"assets/assets/images/menu/menu_zaf.png": "9378665dacf3c9bbc6f2c13e85cd254c",
"assets/assets/images/navigation.svg": "0368b80072fdffa0b241969433952198",
"assets/assets/images/non-veg_indicator.svg": "e3c51d6cf9df1c53ebd0f84391f24af8",
"assets/assets/images/Onboard_Img1.png": "4a8047b86834384a6868c32cbb73cb61",
"assets/assets/images/otp_code.svg": "9572e620d49ef3d95bd3305b6ae1bb49",
"assets/assets/images/otp_phone.svg": "635bd0583faffda9fa39f88dda14e979",
"assets/assets/images/qr-code-dummy.svg": "8957ce3fdfc37b2be82f39128e0f478d",
"assets/assets/images/qr-code.svg": "c98bd7ca1e6139a3f0c48171e12298e5",
"assets/assets/images/RouterOffline.png": "9575085b41cec283df2ee31e42e7c60e",
"assets/assets/images/search.svg": "5437e5214c32dc0a8b1e3e3749edd831",
"assets/assets/images/store.svg": "01fa29dd682e89bdb3d28ef5fd815b8d",
"assets/assets/images/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/images/veg_indicator.svg": "0f98a7737a580f0c460cb5df246bc4a2",
"assets/assets/lottie/chai_animation.json": "11d49c93fba88e0c40e03259aae3e411",
"assets/assets/lottie/chai_animation2.json": "f0691a7087951debc0fa8fd6f56858a3",
"assets/assets/lottie/chai_loading1.json": "83a63a83b074e1406b1b14e74c4bfd94",
"assets/assets/lottie/chai_loading2.json": "02dff1c098147ff09b939576c9c9c4ee",
"assets/assets/lottie/location_animation.json": "9ed07c891ff7687b7db1f1564ad0b172",
"assets/assets/lottie/location_animation2.json": "5430de509cd1ae0126f14aa4e0fe0f5c",
"assets/assets/lottie/login_animation.json": "a379ec9210398040cffc15adf098deb8",
"assets/assets/lottie/PaymentSuccess.json": "bc4f1bcb9a802c3252b79826e6cf39bc",
"assets/assets/lottie/wallet_animation.json": "a1d6b5fba27796b74db4b8bc5eba1342",
"assets/FontManifest.json": "66af42192d977895d26d200651046b3b",
"assets/fonts/MaterialIcons-Regular.otf": "cfbdcd2745bdf31be4ecc5ee2f1dc986",
"assets/NOTICES": "7ff54195398917e9f6cce73dcbc2c5a4",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dce648ae2cad97d381525f9efdd3925b",
"/": "dce648ae2cad97d381525f9efdd3925b",
"main.dart.js": "ddac574267aa9ca6c778bca3cba6fecf",
"manifest.json": "8df3f0708ea6ac1d6a1b3434ae353544",
"version.json": "2bb8e2a25985ddbf11286f36308211c3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
