$(document).ready(function() {

  // scroll-top arrow only appears after scrolling down half the page
  $(window).scroll(function() {
    if($(window).scrollTop() > $('body').height() / 3) {
        $('.scrollTop').removeClass('hidden');
    }else {
        $('.scrollTop').addClass('hidden');
    }
  });

});