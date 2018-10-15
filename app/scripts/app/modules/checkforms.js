if ($) $(function () {

  // Вынос всех привязок к элементам
  let form      = $('._check_agent');
  let formInput = form.find('.form-control');

  // Путь аяксы
  let ajaxUrl = '/checks.php';
  form.attr('action', ajaxUrl);

  form.submit(function(event) {
    // console.log('form _check_agent');

    // Привязываемся на отправку формы и отменяем стандартный обработчик
    // Так инпут отправляется по ентеру и кнопке одновременно
    event.preventDefault();
    // Берем значение и обнуляем ввод
    let value = formInput.val(); formInput.val('');
    // Отмена если инпут пустой
    if (value === '') {
      formInput.closest('.form-group').addClass('is-error ui-shake');
    }
    // Аякса
    $.ajax({
      method: 'get',
      url: ajaxUrl,
      data: {
        id: value
      },
      complete: function(result) {
        if (result.status === 404) {
          // По желанию можно добавить обработок 404 и прочих 4хх-5хх прелестей
          return (
            $.magnificPopup.open({
              items: {
                src: '#check_notagent'
              },
              type: 'inline'
            })
          );
        }
        try {
          // Попытка спарсить полученный объект
          let response = JSON.parse(result.responseText);
          // console.log('response', response);
          // Вставка html в вывод, используются бэктики `, они относительно новые и этот вывод чисто для демонстрации, части ответа распихать куда надо на страницу

          $('._modal-agent_name').html(`${response.name}`);
          $('._modal-agent_token-number').html(`${response.id}`);
          $('._modal-agent_photo_img').attr('src', `${response.picture}`);
          $('._modal-agent_photo_img').prop('alt', `${response.name}`);

          $.magnificPopup.open({
            items: {
              src: '#check_agent'
            },
            type: 'inline'
          });

          // destination.html(`<p>[${response.id}]  <img src="${response.picture}" alt=""/></p>`);
        }
        catch(err) {
          console.log('error');
          // Если ошибка произошла при попытке разобрать JSON

          $.magnificPopup.open({
            items: {
              src: '#check_notagent'
            },
            type: 'inline'
          });

        }
      }
    });
  });

});
