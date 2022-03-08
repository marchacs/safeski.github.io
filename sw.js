self.addEventListener("install", e => {
       e.waitUntil(
           caches.open("static").then(cache=> {
                return cache.addAll(["./", "./src/master.css", "./images/safeskiapp.png" ]) 

           })
       );

});

self.addEventListener("fetch", e => { 
    console.log('Interceptin fetch request for: $(e.request_url)');
});