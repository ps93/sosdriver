              GoogleMapInitService.then(function () {


                        function mia_posizione(position) {

                          var myLat = position.coords.latitude;
                          var myLon = position.coords.longitude;
                          var myPosition = new google.maps.LatLng(myLat, myLon); // my position


                            //myPosition contiene la tua posizione

                        }

                        if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mia_posizione);
  var a =5;
      }
      else{
        alert('La geo-localizzazione NON è possibile');
      }


                      });
