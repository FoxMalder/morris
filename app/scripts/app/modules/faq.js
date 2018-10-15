$(document).ready(function() {

  let question = $('.faq-q');
  let answer   = $('.faq-a');

  $(question).click(function(){
    $(this).closest(answer).slideToggle();
    $(this).next().slideToggle('fast');
  });

});
