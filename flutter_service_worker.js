'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3c8390be6b3ac7ee4795d4abadb0b9e2",
"version.json": "2bb8e2a25985ddbf11286f36308211c3",
"favicon.ico": "2355444d1aab480359c7e92238fc8b1a",
"index.html": "d6d0a8fbf13dd81eaf1a1689a103dd4e",
"/": "d6d0a8fbf13dd81eaf1a1689a103dd4e",
"main.dart.js": "0c09cba5418e307225a72053133e0736",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-192.png": "0d4ee80b5ee9bd93106884b3172b79d2",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "398d669ef1c27d0f00f1f12cbc9ebf1f",
"manifest.json": "28a411ce52fcca9b533efc9762e7874d",
"assets/AssetManifest.json": "b0740ab063a47f8dd811590257fde3c2",
"assets/NOTICES": "41cf51fca366719330e5e16a19e516cb",
"assets/FontManifest.json": "26ab6027db6c568f4bbd7db21bb9cfc4",
"assets/AssetManifest.bin.json": "7d9004cd2945bc71b66819ca01931dd9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c964c60b6fd4aec32045c121308f5849",
"assets/fonts/MaterialIcons-Regular.otf": "de7cfbc160b9371a47e3a8fa24cae0b3",
"assets/assets/images/search.svg": "5437e5214c32dc0a8b1e3e3749edd831",
"assets/assets/images/non-veg_indicator.svg": "e3c51d6cf9df1c53ebd0f84391f24af8",
"assets/assets/images/otp_code.svg": "5ac25d263201752df688cee8fa77cef3",
"assets/assets/images/Onboard_Img1.png": "4a8047b86834384a6868c32cbb73cb61",
"assets/assets/images/Chai_Kings_logo.svg": "6447411afd6fe4bf8ede5031b530d1e5",
"assets/assets/images/qr-code.svg": "c98bd7ca1e6139a3f0c48171e12298e5",
"assets/assets/images/store.svg": "01fa29dd682e89bdb3d28ef5fd815b8d",
"assets/assets/images/india-flag-icon.svg": "29cf255ded1929a627ee175783817d15",
"assets/assets/images/veg_indicator.svg": "0f98a7737a580f0c460cb5df246bc4a2",
"assets/assets/images/otp_phone.svg": "c9a539f9170df9d69b578e5c86632fe3",
"assets/assets/images/location_arrow.svg": "0c49aa0c1b1588e57e15a2d853460702",
"assets/assets/images/navigation.svg": "0368b80072fdffa0b241969433952198",
"assets/assets/images/coupon.svg": "2ea00146bfe7b4d32d84585e54175552",
"assets/assets/images/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/images/qr-code-dummy.svg": "dbf796e998fa42a56864d54bba764a12",
"assets/assets/images/undraw_barista.svg": "5cf70f7ab5a90f8d5769185fa69804d9",
"assets/assets/images/menu/menu_tea.png": "c3e5b595364b4fdfdcf072526943620a",
"assets/assets/images/menu/menu_zaf.png": "9378665dacf3c9bbc6f2c13e85cd254c",
"assets/assets/images/menu/menu_sandwich.png": "f003da9a5f71ee82bc1f0eb005ca6591",
"assets/assets/images/menu/menu_snacks.png": "e75d3485f52b5f48c55ceb0d1433c4a1",
"assets/assets/images/menu/menu_boba.png": "c0bbc0fcf281c4b67733ffd0e7569a55",
"assets/assets/images/menu/menu_coffie.png": "6b2ca7fe7103ead589dfb174285b534f",
"assets/assets/images/RouterOffline.png": "9575085b41cec283df2ee31e42e7c60e",
"assets/assets/icons/icon.png": "a01643b04b82e895d9f7d520ce49e002",
"assets/assets/lottie/location_animation2.json": "5430de509cd1ae0126f14aa4e0fe0f5c",
"assets/assets/lottie/login_animation.json": "a379ec9210398040cffc15adf098deb8",
"assets/assets/lottie/chai_loading1.json": "83a63a83b074e1406b1b14e74c4bfd94",
"assets/assets/lottie/PaymentSuccess.json": "bc4f1bcb9a802c3252b79826e6cf39bc",
"assets/assets/lottie/delivery_animation2.json": "ef9bcaaf6f6914ec7de469e10d3ba331",
"assets/assets/lottie/chai_animation2.json": "f0691a7087951debc0fa8fd6f56858a3",
"assets/assets/lottie/chai_animation.json": "11d49c93fba88e0c40e03259aae3e411",
"assets/assets/lottie/location_animation.json": "9ed07c891ff7687b7db1f1564ad0b172",
"assets/assets/lottie/delivery_animation.json": "2a6d617330db2b5e459751663599fbb0",
"assets/assets/lottie/wallet_animation.json": "a1d6b5fba27796b74db4b8bc5eba1342",
"assets/assets/lottie/chai_loading2.json": "02dff1c098147ff09b939576c9c9c4ee",
"assets/assets/fonts/AlegreyaSans/AlegreyaSans-Regular.ttf": "778027b74dc46620cb9ed1a26d08dfc4",
"assets/assets/fonts/ProximaNova-Regular.ttf": "1fc524a22c99e8d63393ecfe238e3d35",
"assets/assets/fonts/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/assets/fonts/Recoleta-Regular.otf": "4136b1b0537d776fbf9db85b43972097",
"assets/assets/fonts/Oddval-SemiBold.ttf": "ff10a6e9a8cd0a9aece459fdaaa6e925",
"assets/assets/fonts/DMSerifText-Regular.ttf": "26a61f86766bef242af31d725837a52a",
"assets/assets/fonts/InterVariable.ttf": "8262f126733d938c0010c9b02f3bb610",
"assets/assets/fonts/Syne/Syne-Regular.ttf": "586592300f74e9aace69da86f65ffbac",
"assets/assets/fonts/Syne/Syne-Medium.ttf": "991ec5c628960c50ceaa4eddfac543e7",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
