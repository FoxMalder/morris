$(document).ready(function(){

  var owl  = $('.memory_list');

  owl.owlCarousel({
    items: 4,
    slideSpeed: 1200,
    lazyLoad: true,
    navigation: false,
    pagination: false,
    loop: true
  });
  $(".memory_nav-right").click(function(){
    owl.trigger('next.owl.carousel');
  });
  $(".memory_nav-left").click(function(){
    owl.trigger('prev.owl.carousel');
  });

});

