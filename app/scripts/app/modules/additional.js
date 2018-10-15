$(document).ready(function(){

  var owladditional  = $('.additional_items');

  owladditional.owlCarousel({
    items: 1,
    startPosition: 0,
    nav: false,
    loop: true
  });

  $(".additional_nav-right").click(function(){
    owladditional.trigger('next.owl.carousel');
  });
  $(".additional_nav-left").click(function(){
    owladditional.trigger('prev.owl.carousel');
  });

  $('.additional_cards').masonry({
    itemSelector: '.additional_card',
    columnWidth: 270,
    gutter: 29
  });

});
