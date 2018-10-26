if ($) $(function () {

  let form              = $('._order');
  let allformInput      = form.find('.form-control');
  let formInputRequired = form.find('.form-control[required]');
  let formSendBtn       = $('._order_btn');

  formInputRequired.keyup(function() {
    if( $(this).val().length !== 0 ) {
      formSendBtn.attr('disabled', false);
    } else {
      formSendBtn.attr('disabled', true);
    }
  });

  function clear_form() {
    allformInput.val('');
  }

  $('._order').submit(function(e) {
    console.log('form _order');

    e.preventDefault();
    let form        = $(this);
    let formInput   = form.find('.form-control');
    let formCkeck   = form.find('.form-check');
    let formSendBtn = $('._order_btn');

    let order_name  = form.find('input[name="order_name"]').val();
    let order_tel   = form.find('input[name="order_tel"]').val();
    let order_email = form.find('input[name="order_email"]').val();

    if(formInput.val().length > 0) {
      $.ajax({
        type: "POST",
        url: "order.php",
        data: {
          'order_name':  order_name,
          'order_tel':   order_tel,
          'order_email': order_email
        },
        success: function() {

          console.log('success');

          clear_form();
          formInput.closest('.form-group').removeClass('is-error ui-shake');
          formCkeck.closest('.form-group').removeClass('is-error ui-shake');
          formSendBtn.text('Заявка принята');
        },
        error: function() {

          console.log('error');

          formInput.closest('.form-group').addClass('is-error ui-shake');
          formCkeck.closest('.form-group').addClass('is-error ui-shake');

        }
      });
    } else {
      formInput.closest('.form-group').addClass('is-error ui-shake');
      formCkeck.closest('.form-group').addClass('is-error ui-shake');
    }

    return false;
  });

});
