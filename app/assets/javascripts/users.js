;(function () {
  'use strict';
  
  $(document).ready(function () {
    
    var Users = {
      init: function () {
        $.ajax({
          url: "https://api.github.com/users",
          success: function (response) {
            $('#user-avatar').text('');
            response.forEach(function (user) {
              $('#user-avatar').append(
                $('<div>')
                  .append($('<img>', {src: user['avatar_url']}))
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