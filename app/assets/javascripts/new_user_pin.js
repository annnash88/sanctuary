// function placeUserMarker(location, addressString) {
//
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
//
//   userMarkerArray.push(marker);
//
//   var infoWindow = new google.maps.InfoWindow();
//
//   infoWindowArray.push(infoWindow);
//
//   var saveAddress;
//   var address;
//
//   if (!addressString) {
//     var geocoder = new google.maps.Geocoder();
//     var LatLngLiteral = {lat: marker.position.lat(), lng: marker.position.lng()};
//
//     geocoder.geocode({'location': LatLngLiteral}, function(results, status) {
//       if (status === 'OK') {
//         if (results[1]) {
//           address = results[1].formatted_address;
//           saveAddress = results[1].formatted_address;
//           setInfoWindow(address);
//         } else {
//           // console.log(LatLngLiteral);
//           address = location.lat + ', ' + location.lng;
//           setInfoWindow(address);
//         }
//       } else {
//         // console.log(LatLngLiteral);
//         address = location.lat + ', ' + location.lng;
//         setInfoWindow(address);
//       }
//     });
//   } else {
//     saveAddress = addressString;
//     setInfoWindow(addressString);
//   }
//
//   function setInfoWindow(inputAddress) {
//     $('#_form #pin_latitude').val(location.lat);
//     $('#_form #pin_longitude').val(location.lng);
//     $('#_form #pin_address').val(saveAddress);
//
//     var form = $('#_form').html();
//
//     infoWindow.setContent(
//       '<p id="ask_if_report">Report raid at or near<br>' +
//       inputAddress + ' ?</p>' +'<div id="new_pin">' +
//       form +'</div>'
//       );
//
//     $('#_form #pin_latitude').val('');
//     $('#_form #pin_longitude').val('');
//   }
//
//   infoWindow.open(map, marker);
//
//   google.maps.event.addListener(marker, 'click', function() {
//     infoWindow.open(map, marker);
//   });
//
//   return marker;
// }
