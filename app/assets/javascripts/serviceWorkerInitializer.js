;(function () {
  'use strict';
  
  $(document).ready(function () {
    
    var ServiceWorker = {
      init: function () {
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
              // Registration was successful
              console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function(err) {
              // registration failed :(
              console.log('ServiceWorker registration failed: ', err);
            });
          });
        }
      }
    };
    
    (function () {
      ServiceWorker.init();
    })();
  });
})();