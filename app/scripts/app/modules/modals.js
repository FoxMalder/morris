$(document).ready(function() {

  $('._modal-link').magnificPopup({
    showCloseBtn: true,
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: false,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: false,
    removalDelay: 100,
    mainClass: 'my-mfp-zoom-in'
  });

  $('._mfp-close').click(function(){
    $.magnificPopup.close();
  });

});
