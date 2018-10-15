if ($) $(function () {

  let form              = $('._call_agent');
  let allformInput      = form.find('.form-control');
  let formInputRequired = form.find('.form-control[required]');
  let formSendBtn       = $('._call_agent_btn');

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

  $('._call_agent').submit(function(e) {
    console.log('form _call_agent');

    e.preventDefault();
    let form           = $(this);
    let formInput      = form.find('.form-control');
    let formSendBtn    = $('._call_agent_btn');

    let call_name     = form.find('input[name="call_name"]').val();
    let call_tel      = form.find('input[name="call_tel"]').val();

    if(formInput.val().length > 0) {
      $.ajax({
        type: "POST",
        url: "forms.php",
        data: {
          'call_name': call_name,
          'call_tel': call_tel
        },
        success: function() {

          console.log('success');

          clear_form();
          formInput.closest('.form-group').removeClass('is-error ui-shake');
          formSendBtn.text('Заявка принята');
        },
        error: function() {

          console.log('error');

          formInput.closest('.form-group').addClass('is-error ui-shake');

        }
      });
    } else {
      formInput.closest('.form-group').addClass('is-error ui-shake');
    }

    return false;
  });

});
