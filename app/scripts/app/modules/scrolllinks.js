// помогаем ссылкам с якорями плавно скролиться
$('._go-to').on('click', function (e) {
  e.preventDefault();
  let id  = $(this).attr('href');
  let top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
// /помогаем ссылкам с якорями плавно скролиться

