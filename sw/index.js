  /*
    Caching service worker
    */
   if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw/service-worker.js')
    .then(function (registration) {
        console.log('sw registered')
      })
      .catch(function () {
        console.log('reg failed');
      });
  } else {
    console.log('sw not supported');
  }