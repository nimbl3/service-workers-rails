;(function () {
  'use strict';
  
  $(document).ready(function () {
    
    var Users = {
      init: function () {
        $('body').on('click', 'div.cover-image', function () {
          window.location = '/users/' + event.target.dataset.id;
        });
      },
      
      index: function () {
        $.ajax({
          url: "https://api.github.com/users",
          success: function (response) {
            response.forEach(function (user) {
              $('.list-user').append(
                $('<div>', {class: 'user-item'})
                  .append($('<header>', {text: user['login']}))
                  .append(
                    $('<div>', {
                      class: 'image-container'
                    }).append($('<div>', {
                      'class': 'cover-image',
                      'data-id': user.id,
                      'style': 'background-image:url(' + user['avatar_url'] + ')'
                    }))
                  )
              );
            });
  
            $('.loading').attr('hidden', 'true');
          }
        });
      },
      
      show: function () {
        $('.list-user').text('Fetching user details ...');
        var userId = window.location.pathname.replace('/users/', '');
        
        $.ajax({
          url: "https://api.github.com/users/" + userId,
          success: function (user) {
            $('.user-avatar')
              .css('background-image', 'url(' + user['avatar_url'] + ')');
            
            $('.user-info h4').text(user['name']);
            
            if (user['email']) {
              $('.user-info .user-email')
                .attr('href', 'mailto:' + user['email'])
                .text(user['email']);
            }
            
            $('.user-info .user-url')
              .attr('href', user['url'])
              .text(user['url']);
            
            $('.user-info .user-joined-at')
              .text('Joined ' + moment(user['created_at']).fromNow());
  
            $('.loading').attr('hidden', 'true');
            $('.user-card').removeAttr('hidden');
          },
          
          error: function (response) {
            $('.user-info h4').text(response.responseJSON['message']);
            
            $('#not-found').removeAttr('hidden');
            $('.loading').attr('hidden', 'true');
          }
        });
      }
    };
    
    (function () {
      Users.init();
      
      if (document.body.className === 'users show') {
        Users.show();
        return;
      }
      
      Users.index();
    })();
  });
})();