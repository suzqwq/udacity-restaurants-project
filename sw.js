const cache = 'sw1';
const cacheAssets = [
'js/main.js',
'js/restaurant_info.js',
'index.html',
'restaurant.html',
'/css/styles.css',
'/data/restaurants.JSON',
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg',
'/img/5.jpg',
'/img/6.jpg',
'/img/7.jpg',
'/img/8.jpg',
'/img/9.jpg',
'/img/10.jpg'
];
//listen to install service worker
self.addEventListener('install', function(event){
	console.log('installed');
	event.waitUntil(
		caches.open(cache).then(function(cache){
			console.log('cashing');
			cache.addAll(cacheAssets);
		}).then(function(){
			self.skipWaiting();
		})
		);

});
//listen to activate service worker
self.addEventListener('activate', function(event){
	console.log('activated');
	//delete older cashes
	event.waitUntil(
		caches.keys().then(function(cachenames){
			return Promise.all(
				cachenames.map(function(cacheN){
					if (cacheN !==cache){
						console.log('cleared old cache');
						return caches.delete(cacheN);
					}
				}));
		}));

});

	//listen to fetch event
	self.addEventListener('fetch', function(event){
		console.log('fetching');
		event.respondWith(
			fetch(event.request).catch(function(){
				caches.match(event.request);
			}));
	});