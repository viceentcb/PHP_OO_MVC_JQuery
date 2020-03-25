$(document).ready(function () {
  if (document.getElementById("map") != null) {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + api + "&callback=initMap";
    script.async;
    script.defer;
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
  }
})

function initMap() {
  var ray = [];

  // var
    // jewelry_stores = [
    //   [estacio],
    //   ['Cartier-Madrid'],
    //   ['Vintage Watches Valencia'],
    // ];
    // console.log(jewelry_stores)
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6.3,
    center: new google.maps.LatLng(40.2, -3.695447),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: "module/contact/controller/controller_contact.php?op=maps"

  }).done(function (data) {
    // console.log("caca")
    console.log(data);
    
    for (row in data) {


      var newMarker = new google.maps.Marker({
        position: new google.maps.LatLng(
          data[row].lat,
          data[row].lng),
        map: map,
        title:
        data[row].tienda
      });

      google.maps.event.addListener(newMarker, 'click', (function (newMarker, row) {
        return function () {
          infowindow.setContent(
            data[row].descripcion);
          infowindow.open(map, newMarker);
        }
      })(newMarker, row));

      ray.push(newMarker);
    }
  })    .fail(function () {
    console.log("FAIL");
})
}

  // function initMap() {
  //     var ontinyent = {lat: 38.810612, lng: -0.604359};
  //     var map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 18,
  //       center: ontinyent
  //     });
  //     var contentString = '<div id="content">'+
  //         '<div id="siteNotice">'+
  //         '</div>'+
  //         '<h1 id="firstHeading" class="firstHeading">ESTAMOS AQUIIIII</h1>'+
  //         '<div id="bodyContent">'+
  //         '<p><b>Ontinyent</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  //         'sandstone rock formation in the southern part of the '+
  //         'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  //         'south west of the nearest large town, Alice Springs; 450&#160;km '+
  //         'Heritage Site.</p>'+
  //         '<p>Attribution:<b> IES LESTACIÓ</b>, <a href="http://www.iestacio.com/</a> '+
  //         '(last visited June 22, 2019).</p>'+
  //         '</div>'+
  //         '</div>';

  //         var infowindow = new google.maps.InfoWindow({
  //             content: contentString
  //           });

  //           var marker = new google.maps.Marker({
  //             position: ontinyent,
  //             map: map,
  //             title: 'Ontinyent'
  //           });
  //           marker.addListener('click', function() {
  //             infowindow.open(map, marker);
  //           });
  //         }
