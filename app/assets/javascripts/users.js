;(function () {
  'use strict';
  
  $(document).ready(function () {
    
    var Users = {
      init: function () {
        $.ajax({
          url: "https://api.github.com/users",
          success: function (response) {
            $('.list-user').text('');
            
            response.forEach(function (user) {
              $('.list-user').append(
                $('<div>', {class: 'user-item'})
                  .append($('<header>', {text: user['login']}))
                  .append(
                    $('<div>', {
                      class: 'image-container'
                    }).append($('<div>', {
                      'class': 'cover-image',
                      'style': 'background-image:url(' + user['avatar_url'] + ')'
                    }))
                  )
              );
            });
          }
        });
      }
    };
    
    (function () {
      Users.init();
    })();
  });
})();