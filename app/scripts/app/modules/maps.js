ymaps.ready(init);

let doc          = document;
let zonespravmap = doc.getElementById('spravmap');
let zonemap      = doc.getElementById('map');

function init(){

  if (zonemap) {
    let myMap = new ymaps.Map("map", {
      center: [55.614780, 37.527121],
      zoom: 15,
      controls: []
    });

    let myPlacemark = new ymaps.Placemark([55.614780, 37.527121], {
      hintContent: 'Броникс-Сервис',
      balloonContentBody: '<div class="balloon_body">Броникс-Сервис</div>',
      balloonContentFooter: '<div class="balloon_footer"><span class="map-place">Москва, Литовский бульвар, 1А</span><a href="tel:+74956496494" class="map-tel-link"><span class="tel-link_ico">☎</span><span class="tel-link_number">8 (495) 649-64-94</span></a></div>',
    }, {
      iconColor: '#2E2B77'
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl');
    myMap.controls.remove('typeSelector');
  }

  // а это для справочника

  if (zonespravmap) {
    let myMapSrav = new ymaps.Map("spravmap", {
      center: [55.753559, 37.609218],
      zoom: 11,
      controls: []
    });


    // Функция, которая по состоянию чекбоксов в меню
    // показывает или скрывает геообъекты из выборки.
    function checkState () {

      let shownObjects;
      let byType = new ymaps.GeoQueryResult();



      if ($('#mfc').prop('checked')) {
        byType = myObjects.search('options.itemType = "mfc"')
          .add(byType);
      }
      if ($('#uszn').prop('checked')) {
        byType = myObjects.search('options.itemType = "uszn"')
          .add(byType);
      }
      if ($('#cemetery').prop('checked')) {
        byType = myObjects.search('options.itemType = "cemetery"')
          .add(byType);
      }
      if ($('#crematorium').prop('checked')) {
        byType = myObjects.search('options.itemType = "crematorium"')
          .add(byType);
      }
      if ($('#columbarium').prop('checked')) {
        byType = myObjects.search('options.itemType = "columbarium"')
          .add(byType);
      }
      if ($('#morgue').prop('checked')) {
        byType = myObjects.search('options.itemType = "morgue"')
          .add(byType);
      }

      shownObjects = byType.addToMap(myMapSrav);
      myObjects.remove(shownObjects).removeFromMap(myMapSrav);
    }

    $('#mfc').click(checkState);
    $('#uszn').click(checkState);
    $('#cemetery').click(checkState);
    $('#crematorium').click(checkState);
    $('#columbarium').click(checkState);
    $('#morgue').click(checkState);

    // Создадим объекты из их JSON-описания и добавим их на карту.
    window.myObjects = ymaps.geoQuery({
      type: "FeatureCollection",
      features: [
        /* begin mfc */
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Красносельский ',
            iconCaption: 'Многофункциональный центр р-на Красносельский',
            balloonContentHeader: 'Многофункциональный центр р-на Красносельский',
            balloonContentBody: 'Верхняя Красносельская ул., 3, стр. 2, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.785979, 37.660521]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Сокол',
            iconCaption: 'Многофункциональный центр р-на Сокол',
            balloonContentHeader: 'Многофункциональный центр р-на Сокол',
            balloonContentBody: 'Чапаевский пер., дом 16',
            balloonContentFooter: 'Телефон: <a href="tel:+74957777777">+7 (495) 777-77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.797083, 37.518228]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ново-Переделкино',
            iconCaption: 'Многофункциональный центр р-на Ново-Переделкино',
            balloonContentHeader: 'Многофункциональный центр р-на Ново-Переделкино',
            balloonContentBody: 'Новопеределкинская ул., 12А, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.641422, 37.366251]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Академический',
            iconCaption: 'Многофункциональный центр р-на Академический',
            balloonContentHeader: 'Многофункциональный центр р-на Академический',
            balloonContentBody: 'Новочерёмушкинская ул., 23, корп. 5, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.680722, 37.580131]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Чертаново Южное',
            iconCaption: 'Многофункциональный центр р-на Чертаново Южное',
            balloonContentHeader: 'Многофункциональный центр р-на Чертаново Южное',
            balloonContentBody: 'Москва, ул. Россошанская, д. 4, корп. 2',
            balloonContentFooter: 'Телефон: <a href="tel:+7 (495) 777-77-77">+7 (495) 777-77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.592429, 37.608958]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Перово',
            iconCaption: 'Многофункциональный центр р-на Перово',
            balloonContentHeader: 'Многофункциональный центр р-на Перово',
            balloonContentBody: '3-я Владимирская ул., 9А, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.760682, 37.788324]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бабушкинский',
            iconCaption: 'Многофункциональный центр р-на Бабушкинский',
            balloonContentHeader: 'Многофункциональный центр р-на Бабушкинский',
            balloonContentBody: 'ул. Лётчика Бабушкина, 1, корп. 1, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.856316, 37.66998]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Лефортово',
            iconCaption: 'Многофункциональный центр р-на Лефортово',
            balloonContentHeader: 'Многофункциональный центр р-на Лефортово',
            balloonContentBody: 'пр. Завода Серп и Молот, 10, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.752587, 37.702346]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Нижегородский',
            iconCaption: 'Многофункциональный центр р-на Нижегородский',
            balloonContentHeader: 'Многофункциональный центр р-на Нижегородский',
            balloonContentBody: 'пр. Завода Серп и Молот, 10, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.752587, 37.702346]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Печатники',
            iconCaption: 'Многофункциональный центр р-на Печатники',
            balloonContentHeader: 'Многофункциональный центр р-на Печатники',
            balloonContentBody: 'Шоссейная ул., 86, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.66766, 37.719558]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бескудниковский',
            iconCaption: 'Многофункциональный центр р-на Бескудниковский',
            balloonContentHeader: 'Многофункциональный центр р-на Бескудниковский',
            balloonContentBody: 'Дубнинская ул., 40А, корп. 1, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.888998, 37.558436]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Измайлово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.805938, 37.823592]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Даниловский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.712862, 37.612883]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Коньково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.64476, 37.510287]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Выхино-Жулебино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.689913, 37.852266]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Измайлово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.798586, 37.802949]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Соколиная Гора',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.782567, 37.707449]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Марьино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.674575, 37.760225]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Нагатинский Затон',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.678159, 37.655257]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Некрасовка',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.707507, 37.930141]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Бутово (доп. офис)',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.504399, 37.597279]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тропарёво-Никулино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.667122, 37.490245]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Фили-Давыдково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.720337, 37.463215]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Филёвский Парк',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.752536, 37.500486]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Новогиреево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.748903, 37.807647]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Крылатское',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.770046, 37.418605]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бирюлёво Западное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.574655, 37.656721]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Тушино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.838096, 37.401537]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бирюлёво Восточное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.578304, 37.676637]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Чертаново Центральное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.598034, 37.605427]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Капотня',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.638257, 37.800865]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Восточное Измайлово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.789036, 37.809228]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Медведково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.888952, 37.639779]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Москворечье-Сабурово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.634105, 37.65699]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бутырский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.828632, 37.580418]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Матушкино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [56.003457, 37.208066]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Щукино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.807602, 37.464994]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ростокино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.831479, 37.660377]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Замоскворечье',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.735505, 37.635593]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Басманный',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.780122, 37.68571]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южнопортовый',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.731262, 37.666036]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Нагорный',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.679133, 37.630122]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Нагатино-Садовники',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.679133, 37.630122]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Царицыно',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.635701, 37.675011]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Орехово-Борисово Южное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.596493, 37.721588]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тёплый Стан',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.634466, 37.474363]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Можайский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.726015, 37.422692]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Савёлки',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [55.995765, 37.215576]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Гагаринский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.679417, 37.546111]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ивановское',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.883275247000185, 37.81536021679667]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Солнцево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.665898, 37.426177]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Внуково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.615136, 37.262181]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тимирязевский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.810663, 37.570968
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Новокосино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.739792, 37.871661
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Дмитровский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.896544, 37.534864
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Лианозово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.894879, 37.573052
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Марфино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.844212, 37.577912
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Арбат',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.747819, 37.59392
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Куркино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.89666, 37.401177
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Восточное Дегунино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.888998, 37.558436]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Свиблово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.857862, 37.644899]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Медведково',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.871753, 37.638719]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Хорошевский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.786845, 37.512029]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ярославский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.866652, 37.708958
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Аэропорт',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.799497, 37.528576]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Западное Дегунино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [55.872663, 37.509388]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Котловка',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.679798, 37.606775
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Крюково',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.970766, 37.166367
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Таганский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.746405, 37.682592
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Восточный',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.816788, 37.866055
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Рязанский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.715586, 37.784875
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северный',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.913243, 37.547683
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Косино-Ухтомский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [
              55.711113, 37.854359
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Кунцево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.726015, 37.422692
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Хорошево-Мнёвники',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.774968, 37.473914
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Россия, Москва, Волжский Бульвар квартал 95',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.713258, 37.7456
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Текстильщики',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.710915, 37.747855
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ломоносовский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.676154, 37.536131
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Кузьминки',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.698401, 37.75567
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Коптево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.83523, 37.524381
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Очаково-Матвеевское',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.682884, 37.459415
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Покровское-Стрешнево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.82666, 37.44479
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Савёловский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.79852, 37.582826
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Орехово-Борисово Северное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.599611, 37.717752
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Хамовники',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.743031, 37.584712
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Алтуфьевский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.880939, 37.589311
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Черёмушки',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.670767, 37.569854
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Чертаново Северное',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.623092, 37.61212
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Алексеевский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.822443, 37.66397
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Братеево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.636006, 37.752356
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Тушино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.838096, 37.401537
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Вешняки',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.734532, 37.833599
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Люблино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.689517, 37.737048
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр района Беговой',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.789755, 37.582799
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Раменки',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.695357, 37.496614
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Останкинский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.80916, 37.612021
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Марьина Роща',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.80916, 37.612021
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Строгино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.802801, 37.404115
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Зюзино',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.65789, 37.593533
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Проспект Вернадского',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.676042, 37.512263
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Мещанский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.784552, 37.636958
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Богородское',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.811513, 37.733446
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Метрогородок',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.811513, 37.733446
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Гольяново',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.810157, 37.778883
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Преображенское',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.799861, 37.718992
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Донской',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.707395, 37.600486
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Тверской',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.767757, 37.604924
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Зябликово',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.622848, 37.7441
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Южное Бутово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.543644, 37.531927
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Левобережный',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.860514, 37.46767
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Молжаниновский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.860514, 37.46767
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ховрино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.860514, 37.46767
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Ясенево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.608816, 37.535403
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Войковский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.815413, 37.514805
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Бибирево',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.898578, 37.604843
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Пресненский',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.74903, 37.538575
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Северное Бутово',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.574055, 37.565389
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр поселения Московский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.597546, 37.347647
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Лосиноостровский',
            iconCaption: '',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:"></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.870925, 37.682736
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Митино',
            description: ''
          },
          geometry: {
            type: 'Point',
            coordinates: [

              55.838991, 37.378863
            ]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Якиманка',
            iconCaption: 'Многофункциональный центр р-на Якиманка',
            balloonContentHeader: 'Многофункциональный центр р-на Якиманка',
            balloonContentBody: 'Якиманский пер., 6, стр. 1, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.733493, 37.609973]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Обручевский',
            iconCaption: 'Многофункциональный центр р-на Обручевский',
            balloonContentHeader: 'Многофункциональный центр р-на Обручевский',
            balloonContentBody: 'Ленинский просп., 103, Москва',
            balloonContentFooter: 'Телефон: <a href="tel:+7 499 739‑75-30">+7 499 739‑75-30</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.665274, 37.514338]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Старое Крюково',
            iconCaption: 'Многофункциональный центр р-на Старое Крюково',
            balloonContentHeader: 'Многофункциональный центр р-на Старое Крюково',
            balloonContentBody: 'к828, Зеленоград',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.980659, 37.182141]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Многофункциональный центр р-на Силино',
            iconCaption: 'Многофункциональный центр р-на Силино',
            balloonContentHeader: 'Многофункциональный центр р-на Силино',
            balloonContentBody: 'Панфиловский просп., к1105, Зеленоград',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 777‑77-77">+7 495 777‑77-77</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.995206, 37.187558]
          },
          options: {
            itemType: "mfc",
            preset: "islands#redIcon"
          }
        },
        /* end mfc */
        /* begin cemetery */
        {
          type: 'Feature',
          properties: {
            name: 'Алабушевское кладбище',
            iconCaption: 'Алабушевское кладбище ',
            balloonContentHeader: 'Алабушевское кладбище',
            balloonContentBody: 'Москва, ЗелАО, г. Зеленоград, пос. Алабушево',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-25">8 (495) 181-97-25</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [56.015022, 37.138663]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Алексеевское кладбище',
            iconCaption: 'Алексеевское кладбище',
            balloonContentHeader: 'Алексеевское кладбище',
            balloonContentBody: 'Москва, СВАО, ул. Церковная горка, 26а (ранее – проспект Мира, 130)',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.817881, 37.645231]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Алтуфьевское кладбище',
            iconCaption: 'Алтуфьевское кладбище',
            balloonContentHeader: 'Алтуфьевское кладбище',
            balloonContentBody: 'Москва, СВАО, Алтуфьевское шоссе, 104',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.907047, 37.59418]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Бабушкинское кладбище',
            iconCaption: 'Бабушкинское кладбище',
            balloonContentHeader: 'Бабушкинское кладбище',
            balloonContentBody: 'Москва, СВАО, Ярославское ш., 52',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.862353, 37.706425]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Богородское кладбище',
            iconCaption: 'Богородское кладбище',
            balloonContentHeader: 'Богородское кладбище',
            balloonContentBody: 'Московская обл., Ногинский р-н, сельское поселение Аксено-Бутырское, дер. Тимохово',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.804132, 37.709425]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Борисовское кладбище',
            iconCaption: 'Борисовское кладбище',
            balloonContentHeader: 'Борисовское кладбище',
            balloonContentBody: 'Москва, ЮАО, ул. Борисовские пруды, влад. 4',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.634624, 37.734776]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Бусиновское кладбище',
            iconCaption: 'Бусиновское кладбище',
            balloonContentHeader: 'Бусиновское кладбище',
            balloonContentBody: 'Москва, САО, ул. Краснополянская, влад. 18',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.88824, 37.496165]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Бутовское кладбище',
            iconCaption: 'Бутовское кладбище',
            balloonContentHeader: 'Бутовское кладбище',
            balloonContentBody: 'Москва, ЮЗАО, Южное Бутово, 36-й км. Курской железной дороги',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.528202, 37.564689]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Владыкинское кладбище',
            iconCaption: 'Владыкинское кладбище ',
            balloonContentHeader: 'Владыкинское кладбище',
            balloonContentBody: 'Москва, СВАО, ул. Станционная, вл. 8а',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.845254, 37.591351]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Востряковское кладбище',
            iconCaption: 'Востряковское кладбище',
            balloonContentHeader: 'Востряковское кладбище',
            balloonContentBody: 'Москва, ЗАО, ул. Озёрная, д. 47 (Боровское ш., 1 а)',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.658769, 37.443946]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Востряковское Южное (Еврейское) кладбище',
            iconCaption: 'Востряковское Южное (Еврейское) кладбище',
            balloonContentHeader: 'Востряковское Южное (Еврейское) кладбище',
            balloonContentBody: 'Москва, ЗАО, Боровское шоссе, проектируемый проезд № 634',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.658007, 37.454007]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Головинское кладбище',
            iconCaption: 'Головинское кладбище',
            balloonContentHeader: 'Головинское кладбище',
            balloonContentBody: 'Москва, САО, Головинское ш., вл. 13а',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.839719, 37.500728]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Гольяновское кладбище',
            iconCaption: 'Гольяновское кладбище',
            balloonContentHeader: 'Гольяновское кладбище',
            balloonContentBody: 'Москва, ВАО, ул. Курганская, 11',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.830978, 37.813046]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Даниловское кладбище',
            iconCaption: 'Даниловское кладбище',
            balloonContentHeader: 'Даниловское кладбище',
            balloonContentBody: 'Москва, ЮАО, 4-й Рощинский пр., вл. 30',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.704007, 37.609029]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Даниловское мусульманское кладбище',
            iconCaption: 'Даниловское мусульманское кладбище',
            balloonContentHeader: 'Даниловское мусульманское кладбище',
            balloonContentBody: 'Москва, ЮАО, Четвертый Рощинский пр., 10',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-05">8 (495) 181-97-05</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.704697639239015, 37.602677529052144]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Долгопрудненское кладбище',
            iconCaption: 'Долгопрудненское кладбище',
            balloonContentHeader: 'Долгопрудненское кладбище',
            balloonContentBody: 'Московская область, г. Долгопрудный, Лихачевский проезд, 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.916487, 37.51043]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Домодедовское кладбище',
            iconCaption: 'Домодедовское кладбище',
            balloonContentHeader: 'Домодедовское кладбище',
            balloonContentBody: 'Московская область, Домодедовский р-н, д. Истомиха',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.459665, 37.896023]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Захарьинское кладбище',
            iconCaption: 'Захарьинское кладбище',
            balloonContentHeader: 'Захарьинское кладбище',
            balloonContentBody: 'Москва, ЮЗАО, ул. Николая Сироткина',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.495384, 37.596417]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Ивановское кладбище',
            iconCaption: 'Ивановское кладбище',
            balloonContentHeader: 'Ивановское кладбище',
            balloonContentBody: 'Москва, ТиНАО, п. Воскресенское, дер. Ямонтово, 33',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.769312, 37.83916]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Измайловское кладбище',
            iconCaption: 'Измайловское кладбище',
            balloonContentHeader: 'Измайловское кладбище',
            balloonContentBody: 'Москва, ВАО, Измайловский пр., вл. 30',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.801703, 37.769729]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Калитниковское кладбище',
            iconCaption: 'Калитниковское кладбище',
            balloonContentHeader: 'Калитниковское кладбище',
            balloonContentBody: 'Москва, ЦАО, Большой Калитниковский пр., 11',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.732028, 37.691046]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Капотнинское кладбище',
            iconCaption: 'Капотнинское кладбище',
            balloonContentHeader: 'Капотнинское кладбище',
            balloonContentBody: 'Москва, ЮВАО, Большой Капотнинский пр., 11',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.638221, 37.790561]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Качаловское кладбище',
            iconCaption: 'Качаловское кладбище',
            balloonContentHeader: 'Качаловское кладбище',
            balloonContentBody: 'Москва, ЮЗАО, Старокачаловская улица, 8',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.571164, 37.581487]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Котляковское кладбище',
            iconCaption: 'Котляковское кладбище',
            balloonContentHeader: 'Котляковское кладбище',
            balloonContentBody: 'Москва, ЮАО, ул. Деловая, 20а',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.619813, 37.638503]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Кузьминское (мусульманское) кладбище',
            iconCaption: 'Кузьминское (мусульманское) кладбище',
            balloonContentHeader: 'Кузьминское (мусульманское) кладбище',
            balloonContentBody: 'Москва, ЮВАО, ул. Академика Скрябина, 19',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.70253919177521, 37.806809010619766]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Кузьминское кладбище',
            iconCaption: 'Кузьминское кладбище ',
            balloonContentHeader: 'Кузьминское кладбище',
            balloonContentBody: 'Москва, ЮВАО, ул. Академика Скрябина, 19',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.70283, 37.801745]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Кунцевское кладбище',
            iconCaption: 'Кунцевское кладбище',
            balloonContentHeader: 'Кунцевское кладбище',
            balloonContentBody: 'Москва, ЗАО, ул. Рябиновая, 20',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.707517, 37.417688]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Леоновское кладбище',
            iconCaption: 'Леоновское кладбище',
            balloonContentHeader: 'Леоновское кладбище',
            balloonContentBody: 'Москва, СВАО, 1-я Леонова ул., 8',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.844157, 37.646426]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Лианозовское кладбище',
            iconCaption: 'Лианозовское кладбище',
            balloonContentHeader: 'Лианозовское кладбище',
            balloonContentBody: 'Москва, СВАО, 83-й километр МКАД, 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.911996, 37.564159]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Люблинское кладбище',
            iconCaption: 'Люблинское кладбище',
            balloonContentHeader: 'Люблинское кладбище',
            balloonContentBody: 'Москва, ЮВАО, Ставропольская ул., 74А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.681782824093986, 37.78401716400118]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Медведковское кладбище',
            iconCaption: 'Медведковское кладбище',
            balloonContentHeader: 'Медведковское кладбище',
            balloonContentBody: 'Москва, СВАО, Заповедная ул., вл. 7А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.864823, 37.63774]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Митинское кладбище',
            iconCaption: 'Митинское кладбище',
            balloonContentHeader: 'Митинское кладбище',
            balloonContentBody: 'Москва, СЗАО, Пятницкое шоссе, 6-й км',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.877162, 37.347045]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Миусское кладбище',
            iconCaption: 'Миусское кладбище',
            balloonContentHeader: 'Миусское кладбище',
            balloonContentBody: 'Москва, СВАО, улица Сущевский Вал, 19',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.79387, 37.598097]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Николо-Архангельское кладбище',
            iconCaption: 'Николо-Архангельское кладбище',
            balloonContentHeader: 'Николо-Архангельское кладбище',
            balloonContentBody: 'Окольная ул., 4, микрорайон Салтыковка, Балашиха',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.741034, 37.898341]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Николо-Хованское кладбище',
            iconCaption: 'Николо-Хованское кладбище',
            balloonContentHeader: 'Николо-Хованское кладбище',
            balloonContentBody: 'Москва, ТиНАО, поселение «Мосрентген», 21 км Киевского ш.',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.60864103350812, 37.441885396849955]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Ореховское кладбище',
            iconCaption: 'Ореховское кладбище',
            balloonContentHeader: 'Ореховское кладбище',
            balloonContentBody: 'Москва, ЮАО, Шипиловский проезд, 45',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 325‑28-45">+7 495 325‑28-45</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.606934, 37.695025]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Орловское кладбище',
            iconCaption: 'Орловское кладбище',
            balloonContentHeader: 'Орловское кладбище',
            balloonContentBody: 'Москва, ЗАО, Староорловская улица, 107',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 437‑47-00">+7 495 437‑47-00</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.631574, 37.378099]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Останкинское кладбище',
            iconCaption: 'Останкинское кладбище',
            balloonContentHeader: 'Останкинское кладбище',
            balloonContentBody: 'Москва, СВАО, Прудовой проезд, дом 13, строение 14',
            balloonContentFooter: 'Телефоны: <a href="tel:+7 495 602‑21-39">+7 495 602‑21-39</a>, <a href="tel:+7 499 110‑00-00">+7 499 110‑00-00</a>, <a href="tel:+7 499 157‑43-83">+7 499 157‑43-83</a>, <a href="tel:+7 499 610‑00-00">+7 499 610‑00-00</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.816465, 37.612955]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Перепечинское кладбище',
            iconCaption: 'Перепечинское кладбище',
            balloonContentHeader: 'Перепечинское кладбище',
            balloonContentBody: 'Московская обл., Солнечногорский р-н, с/п Луневское, дер. Перепечино',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-13">8 (495) 181-97-13</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [56.006462, 37.387065]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Перловское кладбище',
            iconCaption: 'Перловское кладбище',
            balloonContentHeader: 'Перловское кладбище',
            balloonContentBody: 'Москва, СВАО, 92 километр Московской Кольцевой автодороги',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-13">8 (495) 181-97-13</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.892451, 37.696157]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Перовское кладбище',
            iconCaption: 'Перовское кладбище',
            balloonContentHeader: 'Перовское кладбище',
            balloonContentBody: 'Москва, ВАО, Кетчерская улица, 20',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-13">8 (495) 181-97-13</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.741865, 37.83854]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Покровское кладбище',
            iconCaption: 'Покровское кладбище',
            balloonContentHeader: 'Покровское кладбище',
            balloonContentBody: 'Москва, ЮАО, ул. Подольских Курсантов, 24',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-13">8 (495) 181-97-13</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.595282, 37.63235]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Преображенское кладбище',
            iconCaption: 'Преображенское кладбище',
            balloonContentHeader: 'Преображенское кладбище',
            balloonContentBody: 'Москва, ВАО, улица Преображенский Вал, 17А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-07">8 (495) 181-98-07</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.790327, 37.721355]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Пыхтинское кладбище',
            iconCaption: 'Пыхтинское кладбище',
            balloonContentHeader: 'Пыхтинское кладбище',
            balloonContentBody: 'Москва, НАО, пос. Внуковское, дер. Пыхтино, дом 25, строение 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-07">8 (495) 181-98-07</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.626279, 37.292113]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Пятницкое кладбище',
            iconCaption: 'Пятницкое кладбище',
            balloonContentHeader: 'Пятницкое кладбище',
            balloonContentBody: 'Москва, СВАО, Дроболитейный переулок, дом 3, строение 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-07">8 (495) 181-98-07</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.799846, 37.641863]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Раевское кладбище',
            iconCaption: 'Раевское кладбище',
            balloonContentHeader: 'Раевское кладбище',
            balloonContentBody: 'Москва, СВАО, Олонецкий пр-д, дом 4, корпус 2',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.87243916128106, 37.66016999999996]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Рогожское кладбище',
            iconCaption: 'Рогожское кладбище',
            balloonContentHeader: 'Рогожское кладбище',
            balloonContentBody: 'Москва, ЮВАО, Старообрядческая улица, 31А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.742174, 37.702984]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Рождественское кладбище',
            iconCaption: 'Рождественское кладбище',
            balloonContentHeader: 'Рождественское кладбище',
            balloonContentBody: 'Москва, СЗАО, 1-я Муравская улица, дом 39, строение 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.860494, 37.369161]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Рублевское кладбище',
            iconCaption: 'Рублевское кладбище',
            balloonContentHeader: 'Рублевское кладбище',
            balloonContentBody: 'Москва, ЗАО, пос. Рублево',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.77315, 37.348311]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Старо-Марковское кладбище',
            iconCaption: 'Старо-Марковское кладбище',
            balloonContentHeader: 'Старо-Марковское кладбище',
            balloonContentBody: 'Москва, СВАО, Дмитровское ш., вл. 124А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.925193, 37.558409]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Старо-Покровское кладбище',
            iconCaption: 'Старо-Покровское кладбище',
            balloonContentHeader: 'Старо-Покровское кладбище',
            balloonContentBody: 'Москва, ЮЗАО, Дорожная улица, 12',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.6133, 37.62448]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Троекуровское кладбище',
            iconCaption: 'Троекуровское кладбище ',
            balloonContentHeader: 'Троекуровское кладбище',
            balloonContentBody: 'Москва, ЗАО, ул. Рябиновая',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.70812182967349, 37.50222620703084]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Троице-Лыковское кладбище',
            iconCaption: 'Троице-Лыковское кладбище',
            balloonContentHeader: 'Троице-Лыковское кладбище',
            balloonContentBody: 'Москва, СЗАО, улица Твардовского, дом 12, корпус 3',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.79179, 37.398931]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Химкинское кладбище',
            iconCaption: 'Химкинское кладбище ',
            balloonContentHeader: 'Химкинское кладбище',
            balloonContentBody: 'Москва, САО, Новосходненское шоссе, 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.915225, 37.378333]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Хованское кладбище',
            iconCaption: 'Хованское кладбище',
            balloonContentHeader: 'Хованское кладбище',
            balloonContentBody: 'Москва, ТиНАО, поселение «Мосрентген», 21 км Киевского ш.',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.61580667392309, 37.454545423400646]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Черкизовское кладбище',
            iconCaption: 'Черкизовское кладбище',
            balloonContentHeader: 'Черкизовское кладбище',
            balloonContentBody: 'Москва, ВАО, Б. Черкизовская, 17',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.800382, 37.734335]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Щербинское кладбище',
            iconCaption: 'Щербинское кладбище',
            balloonContentHeader: 'Щербинское кладбище',
            balloonContentBody: 'Москва, ЮАО, Подольский район, пос. Стрелковское, Щербинский проезд',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.508473, 37.618632]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Ясеневское кладбище',
            iconCaption: 'Ясеневское кладбище',
            balloonContentHeader: 'Ясеневское кладбище',
            balloonContentBody: 'Москва, ЮЗАО, Новоясеневский пр-т, вл. 42',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-98-72">8 (495) 181-98-72</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.600633, 37.552301]
          },
          options: {
            itemType: 'cemetery',
            preset: 'islands#blueIcon'
          }
        },
        /* end cemetery */
        /* begin columbarium */
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Калитниковского кладбища',
            iconCaption: 'Открытый колумбарий Калитниковского кладбища',
            balloonContentHeader: 'Открытый колумбарий Калитниковского кладбища',
            balloonContentBody: 'Москва, Большой Калитниковский проезд, 11',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.732028, 37.691046]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Новодевичьего кладбища',
            iconCaption: 'Открытый колумбарий Новодевичьего кладбища',
            balloonContentHeader: 'Открытый колумбарий Новодевичьего кладбища',
            balloonContentBody: 'Москва, Лужнецкий проезд, 2',
            balloonContentFooter: 'Телефон: <a href="tel:8 (499) 246-66-14">8 (499) 246-66-14</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.724758, 37.554268]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Бусиновского кладбища',
            iconCaption: 'Открытый колумбарий Бусиновского кладбища',
            balloonContentHeader: 'Открытый колумбарий Бусиновского кладбища',
            balloonContentBody: 'Москва, Краснополянская улица, 18',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.888282013137, 37.495928492065]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Кунцевского кладбища',
            iconCaption: 'Открытый колумбарий Кунцевского кладбища',
            balloonContentHeader: 'Открытый колумбарий Кунцевского кладбища',
            balloonContentBody: 'Москва, Рябиновая улица, 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.707243, 37.420033]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Ваганьковского кладбища',
            iconCaption: 'Открытый колумбарий Ваганьковского кладбища',
            balloonContentHeader: 'Открытый колумбарий Ваганьковского кладбища',
            balloonContentBody: 'Москва, улица Сергея Макеева, 15',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.768309, 37.548914]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Митинского кладбища',
            iconCaption: 'Открытый колумбарий Митинского кладбища',
            balloonContentHeader: 'Открытый колумбарий Митинского кладбища',
            balloonContentBody: 'Москва, Пятницкое шоссе, Пятницкое шоссе, 6-й километр',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.877218395712, 37.346603714355]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Введенского кладбища',
            iconCaption: 'Открытый колумбарий Введенского кладбища',
            balloonContentHeader: 'Открытый колумбарий Введенского кладбища',
            balloonContentBody: 'Москва, Наличная улица, вл1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.768861, 37.707611]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Гольяновского кладбища',
            iconCaption: 'Открытый колумбарий Гольяновского кладбища',
            balloonContentHeader: 'Открытый колумбарий Гольяновского кладбища',
            balloonContentBody: 'Москва, Курганская улица, 11',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.830978, 37.813046]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Николо-Архангельского кладбища',
            iconCaption: 'Открытый колумбарий Николо-Архангельского кладбища',
            balloonContentHeader: 'Открытый колумбарий Николо-Архангельского кладбища',
            balloonContentBody: 'Московская область, Балашиха, микрорайон Салтыковка, Носовихинское шоссе, 16',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.737428855703, 37.899890534605]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Перовского кладбища',
            iconCaption: 'Открытый колумбарий Перовского кладбища',
            balloonContentHeader: 'Открытый колумбарий Перовского кладбища',
            balloonContentBody: 'Москва, Кетчерская улица, 20',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.741865, 37.83854]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Преображенского кладбища',
            iconCaption: 'Открытый колумбарий Преображенского кладбища',
            balloonContentHeader: 'Открытый колумбарий Преображенского кладбища',
            balloonContentBody: 'Москва, улица Преображенский Вал, 17А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.790327, 37.721355]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Владыкинского кладбища',
            iconCaption: 'Открытый колумбарий Владыкинского кладбища',
            balloonContentHeader: 'Открытый колумбарий Владыкинского кладбища',
            balloonContentBody: 'Москва, Станционная улица, 8',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.845254, 37.591351]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Останкинского кладбища',
            iconCaption: 'Открытый колумбарий Останкинского кладбища',
            balloonContentHeader: 'Открытый колумбарий Останкинского кладбища',
            balloonContentBody: 'Москва, Прудовая улица, 11',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.816465, 37.612955]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Даниловского кладбища',
            iconCaption: 'Открытый колумбарий Даниловского кладбища',
            balloonContentHeader: 'Открытый колумбарий Даниловского кладбища',
            balloonContentBody: 'Москва, 4-й Рощинский проезд, 30',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.704007, 37.609029]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Нового Донского кладбища',
            iconCaption: 'Открытый колумбарий Нового Донского кладбища',
            balloonContentHeader: 'Открытый колумбарий Нового Донского кладбища',
            balloonContentBody: 'Москва, Донская площадь, 1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 954-12-89">8 (495) 954-12-89</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.714257, 37.600046]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Кузьминского кладбища',
            iconCaption: 'Открытый колумбарий Кузьминского кладбища',
            balloonContentHeader: 'Открытый колумбарий Кузьминского кладбища',
            balloonContentBody: 'Москва, улица Академика Скрябина, 19',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-25">8 (495) 181-97-25</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.704191114812, 37.799139952392]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Люблинского кладбища',
            iconCaption: 'Открытый колумбарий Люблинского кладбища',
            balloonContentHeader: 'Открытый колумбарий Люблинского кладбища',
            balloonContentBody: 'Москва, Ставропольская улица, вл74А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-25">8 (495) 181-97-25</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.680037, 37.786635]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Рогожского кладбища',
            iconCaption: 'Открытый колумбарий Рогожского кладбища',
            balloonContentHeader: 'Открытый колумбарий Рогожского кладбища',
            balloonContentBody: 'Москва, Старообрядческая улица, 31А',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-25">8 (495) 181-97-25</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.742174, 37.702984]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Ясеневского кладбища',
            iconCaption: 'Открытый колумбарий Ясеневского кладбища',
            balloonContentHeader: 'Открытый колумбарий Ясеневского кладбища',
            balloonContentBody: 'Москва, Новоясеневский проспект, 46',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-25">8 (495) 181-97-25</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.600633, 37.552301]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Открытый колумбарий Зеленоградского кладбища',
            iconCaption: 'Открытый колумбарий Зеленоградского кладбища',
            balloonContentHeader: 'Открытый колумбарий Зеленоградского кладбища',
            balloonContentBody: 'Москва, Зеленоград, 4921-й проезд, 3с1',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-25">8 (495) 181-97-25</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.984315, 37.259172]
          },
          options: {
            itemType: 'columbarium',
            preset: 'islands#orangeIcon'
          }
        },
        /* end columbarium */
        /* begin crematorium */
        {
          type: 'Feature',
          properties: {
            name: 'Митинский крематорий',
            iconCaption: 'Митинский крематорий',
            balloonContentHeader: 'Митинский крематорий',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href="tel:8 (495) 181-97-01">8 (495) 181-97-01</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.87147425798398, 37.344901121703984]
          },
          options: {
            itemType: 'crematorium',
            preset: 'islands#darkBlueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Хованский крематорий',
            iconCaption: 'Хованский крематорий',
            balloonContentHeader: 'Хованский крематорий',
            balloonContentBody: 'Москва, ТиНАО, поселение «Мосрентген», 21 км Киевского шоссе, ул. Адмирала Корнилова',
            balloonContentFooter: 'Телефон: <a href="tel:+7 495 339‑47-11">+7 495 339‑47-11</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.61282112936598, 37.4530456771222]
          },
          options: {
            itemType: 'crematorium',
            preset: 'islands#darkBlueIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'Николо-Архангельский крематорий',
            iconCaption: 'Николо-Архангельский крематорий',
            balloonContentHeader: 'Николо-Архангельский крематорий',
            balloonContentBody: 'Московская обл., Балашиха г., микрорайон Салтыковка, ул. Окольная, вл. 4',
            balloonContentFooter: 'Телефоны: <a href="tel:+7 495 791‑05-39">+7 495 791‑05-39</a>, <a href="tel:+7 495 791‑26-08">+7 495 791‑26-08</a>, <a href="tel:+7 495 791‑46-74">+7 495 791‑46-74</a>, <a href="tel:+7 499 610‑00-00">+7 499 610‑00-00</a>, <a href="tel:+7 495 702‑19-78">+7 495 702‑19-78</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.741009, 37.891118]
          },
          options: {
            itemType: 'crematorium',
            preset: 'islands#darkBlueIcon'
          }
        },
        /* end crematorium */
        /* begin */
        {
          type: 'Feature',
          properties: {
            name: 'МОРГ ГКБ №1 ИМ. ПИРОГОВА',
            iconCaption: 'МОРГ ГКБ №1 ИМ. ПИРОГОВА',
            balloonContentHeader: 'МОРГ ГКБ №1 ИМ. ПИРОГОВА',
            balloonContentBody: 'Москва, Ленинский просп., 8, корп. 17',
            balloonContentFooter: 'Телефоны: <a href="tel:+7 499 764‑50-02">+7 499 764‑50-02</a>, <a href="tel:+7 495 536‑91-54">+7 495 536‑91-54</a>, <a href="tel:+7 495 536‑96-07">+7 495 536‑96-07</a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.723465, 37.598169]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: 'МОРГ ИН ИМ. Н.Н.БУРДЕНКО',
            iconCaption: 'МОРГ ИН ИМ. Н.Н.БУРДЕНКО',
            balloonContentHeader: 'МОРГ ИН ИМ. Н.Н.БУРДЕНКО',
            balloonContentBody: 'Москва, Госпитальная площадь, д.3, строение 16',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.774527, 37.598456]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГВВ №2',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.689278, 37.810207]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКТБ №3',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.88461, 37.38216]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГВВ №3',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.888382, 37.705544]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №4',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.712639, 37.630679]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКТБ №7',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.788009, 37.691171]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №7 ИМ. С.С.ЮДИНА',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.662583, 37.636949]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №12',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.616514, 37.652616]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №13',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.719642, 37.667016]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ФЮГКБ №13',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.702008, 37.679601]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №15',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.731146, 37.836645]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №17',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.642819, 37.415362]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №20',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.864717, 37.664078]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №23 ИМ. ДАВЫДОВСКОГО',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.746319, 37.649849]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №24',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.798318, 37.578936]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №24',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.799532, 37.569521]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №29 ИМ. БАУМАНА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.769155, 37.702553]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №31'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.669625, 37.50213]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №33 МИНИСТЕРСТВА СВЯЗИ РФ'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.828834, 37.667438]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №36'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.792959, 37.736222]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №40'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.825037, 37.657431]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №50'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.812707, 37.555454]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №51'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.742858, 37.484577]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №52'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.80441, 37.484595]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №54'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.806717, 37.730571]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №55'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.696052, 37.602948]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №56'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.71164, 37.646067]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №57'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.798971, 37.806524]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №60'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.76369, 37.792295]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №64'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.68599, 37.555894]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №67'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.771758, 37.469593]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №68'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.693734, 37.753847]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №71'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.722796, 37.433948]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №72'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.743806, 37.404555]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №81'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.89079, 37.529726]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №83'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.615456, 37.761168]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ ИМ. БРАТЬЕВ БАХРУШИНЫХ'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.794067, 37.689312]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ ИМ. БОТКИНА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.78115, 37.554744]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКБ РАН'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.614683, 37.524857]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ НИИ СП ИМ. СКЛИФОСОВСКОГО'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.77557, 37.634227]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ ИМ. Е.О.МУХИНА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.756731, 37.813387]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКБ СВ. АЛЕКСИЯ'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.715591, 37.593183]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГИК А.Л.МЯСНИКОВА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.757121, 37.378225]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ДГКБ СВ. ВЛАДИМИРА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.787548, 37.695322]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ДКБ №9 ИМ. Г.Н.СПЕРАНСКОГО'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.755702, 37.543713]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКБ МПС ИМ. Н.А.СЕМАШКО'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.829841, 37.72369]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКБ ГА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.8253, 37.460448]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКБ №1'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.7513, 37.401581]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКБ №1 МПС РФ'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.818296, 37.45822]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГОСПИТАЛЯ ИМ. Н.Н.БУРДЕНКО'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.771434, 37.696795]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ РКБ №3'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.718811, 37.482547]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ПЛ №162'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.687665, 37.259827]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ОЦ ИМ. Н.Н.БЛОХИНА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.656509, 37.643076]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ НИИ ССХ ИМ. А.Н.БАКУЛЕВА'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.76096, 37.378234]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ РНЦР '
          },
          geometry: {
            type: 'Point',
            coordinates: [55.652781, 37.53367]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ДГКБ'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.85486, 37.405597]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ МДГКБ'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.725549, 37.619755]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ МОНИКИ ИМ. М.Ф.ВЛАДИМИРСКОГО'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.788237, 37.628343]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ МСЧ №60'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.831378, 37.431127]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ МЕДСИ'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.831903, 37.411961]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №119'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.905099, 37.336202]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКИБ №2'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.772755, 37.739366]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКИБ №3'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.651257, 37.698016]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ПБ №1 им. Н.А.Алексеева'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.700146, 37.607969]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ПБ №3 им. В.А. Гиляровского '
          },
          geometry: {
            type: 'Point',
            coordinates: [55.79303735434335, 37.70128599999788]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ПБ №4 им. П.Б.Ганнушкина'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.797954, 37.702301]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ПБ №15'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.65145, 37.644719]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ ЦКБ РАН'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.61415, 37.524803]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ № 1'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.638719, 37.629771]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №2'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.699578, 37.408813]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №3'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.77512, 37.634766]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №4'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.769666, 37.685305]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №5'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.772973, 37.469844]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №6'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.769155, 37.702553]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №7'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.8213, 37.530274]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №8'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.983414, 37.236732]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №9'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.756325, 37.813459]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №10'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.780233, 37.547567]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №11'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.799006, 37.807593]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ СМЭ №12'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.698827, 37.407717]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКБ №3'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.983333, 37.235699]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ГКИБ №1',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.816065, 37.45866]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦНИИ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.765458, 37.796517]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ НМХЦ ИМ.ПИРОГОВА',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.790904, 37.822595]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКББ',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.81844201144643, 37.46536581349121]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ФМБЦ ИМ.БУРНАЗЯНА',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.799229, 37.456217]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦПО НИИ ММА ИМ.СЕЧЕНОВА',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.735231, 37.580301]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        },
        {
          type: 'Feature',
          properties: {
            name: '',
            iconCaption: 'МОРГ ЦКБ №2 ОАО «РЖД»',
            balloonContentHeader: '',
            balloonContentBody: '',
            balloonContentFooter: 'Телефон: <a href=""></a>'
          },
          geometry: {
            type: 'Point',
            coordinates: [55.83384, 37.669324]
          },
          options: {
            itemType: 'morgue',
            preset: 'islands#blackIcon'
          }
        }
        /* end */
      ]
    });

    myObjects.search('options.itemType = "mfc"').addToMap(myMapSrav);;

    myMapSrav.controls.add('zoomControl');
    myMapSrav.controls.remove('typeSelector');
  }

}
