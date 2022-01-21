// scroll header
$(function() {
  $(window).scroll(function () {
     if ($(this).scrollTop() > 50) {
        $('.header--vass').addClass('colorChange')
     } 
     else {
      $('.header--vass').removeClass('colorChange')
     } 
  });
  });