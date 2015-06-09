'use strict';

module.exports = function (app) {

    app.directive('googleHotelMap', ['$rootScope','GoogleMapInitService',
        function ($rootScope,GoogleMapInitService) {
            return {
                restrict: 'E',
                scope: {
                    partenza: '='
                },
                template: '\
                <div style="width:100%; height:50%; position: absolute;">\
                <div class="spacer-20"></div>\
                <div class="spacer-20"></div>\
                <div class="list">\
                <a class="item item-icon-left" >\
                  <i class="icon ion-cash"></i>\
                  prezzo\
                </a>\
                <a class="item item-icon-left">\
                  <i class="icon ion-clock"></i>\
                  durata\
                </a>\
                <a class="item item-icon-left" >\
                  <i class="icon ion-arrow-graph-up-right"></i>\
                  partenza\
                </a>\
                <a class="item item-icon-left" >\
                  <i class="icon ion-arrow-graph-up-left"></i>\
                  {{\'destinazione\'}}\
                </a>\
                <button class="button button-block button-dark" >\
                Conferma\
                </button>\
                </div>\
                </div>\
                <div id="map-canvas" style="width:100%; height:50%; top: 50%; position: absolute;">\
                Conferma\
                </div>',
                link: function (scope, element) {

                    element.ready(function () {


                      GoogleMapInitService.then(function () {


                        function mia_posizione(position) {


                          var lat = position.coords.latitude;
                          var lon = position.coords.longitude;
                          var myPosition = new google.maps.LatLng(lat, lon);

                          var destination = new google.maps.LatLng(scope.partenza.lat_partenza,scope.partenza.lon_partenza);

                          var directionsDisplay = new google.maps.DirectionsRenderer();
                          var directionsService = new google.maps.DirectionsService();

                          var request = {
                                 origin:myPosition,
                                 destination:destination,
                                 travelMode: google.maps.DirectionsTravelMode.DRIVING
                             };


                             directionsService.route(request, function(response, status) {
                               if (status == google.maps.DirectionsStatus.OK) {

                                 var distanzaKM = (response.routes[0].legs[0].distance.value)/1000;
                                 var durataMM =  Math.floor(((response.routes[0].legs[0].duration.value)/60)) ;
                                 var prezzo = distanzaKM*1.50;
                                 console.log("distanza : "+distanzaKM);
                                 console.log("durata :" + durataMM);
                                 console.log("prezzo :" + prezzo);
                                 scope.info={};
                                 scope.prezzo = prezzo;
                                 scope.distanza = distanzaKM;
                                 scope.durata = durataMM;
                                 directionsDisplay.setMap(map);
                                 directionsDisplay.setDirections(response);
                               } else {
                                   alert("impossibile trovare indirizzo specificato")
                               }

                             });

                        }

                        if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mia_posizione);
  var a =5;
      }
      else{
        alert('La geo-localizzazione NON è possibile');
      }








                        var mapOptions = {
                            zoom: 9,
                            center: new google.maps.LatLng(45.4822,9.21405),
                            disableDefaultUI: false
                        };

                        var map = new google.maps.Map(document.querySelector('#map-canvas'), mapOptions);




                      });




                    });
                }
            };
        }
    ]);

};
