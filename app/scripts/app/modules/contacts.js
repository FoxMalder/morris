ymaps.ready(init);

let map      = document.getElementById('map');

function init(){
  if (map) {
    let myMap = new ymaps.Map("map", {
      center: [55.778487, 37.672379],
      zoom: 16,
      controls: []
    });

    let myPlacemark = new ymaps.Placemark([55.778487, 37.672379], {
      hintContent: 'ООО «Лет-О» — Европейские моторные масла',
      balloonContentBody: '<div class="balloon_body">ООО «Лет-О»: Европейские моторные масла</div>',
      balloonContentFooter: '<div class="balloon_footer"><span class="map-place">Москва, Спартаковский переулок, дом №2, строение 1</span><a href="tel:+74952200727" class="map-link">+7 (495) 220-07-27</a> <a href="mailto:info@let-o.com" class="map-link">info@let-o.com</a></div>',
    }, {
      preset: 'islands#yellowDotIcon',
      iconColor: '#FFDD00'
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl');
    myMap.controls.remove('typeSelector');
  }
}
