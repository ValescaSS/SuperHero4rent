$(document).ready(function() {

  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('animate');
    $('.bar').toggleClass('animate');
  })

  if($(window).width() < 768) {
    console.log('less than 768');
    $('.menu-list').hide();
    //   toggle menu list
    $('.hamburger-menu').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass('open');
      $('.menu-list').slideToggle(200);
    });
  }else {
    console.log('greater than 768');
  }

});