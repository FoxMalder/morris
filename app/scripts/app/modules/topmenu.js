$(document).ready(function() {
  var topMenu        = $('.header--light');
  var topMenuHeight  = topMenu.outerHeight();

  $(window).scroll(function() {

    if( $(window).scrollTop() > topMenuHeight ) {
      topMenu.addClass('is-fixed');
    } else {
      topMenu.removeClass('is-fixed');
    }

    return false;
  });

  $('._nav-hamburger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.header-nav_actions').toggleClass('is-hide');
    $('.menu').toggleClass('is-active');
    return false;
  });
});
