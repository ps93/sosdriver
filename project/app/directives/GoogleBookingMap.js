'use strict';

module.exports = function (app) {

    app.directive('googleBookingMap', ['$rootScope','GoogleMapInitService','$timeout','$http','$state',
        function ($rootScope,GoogleMapInitService,$timeout,$http,$state) {
            return {
              restrict : 'E',
                scope: {

                    booking: "&"
                },
                template: '\
                <div style="width:100%; height:50%; position: absolute;">\
                <div class="spacer-20"></div>\
                <div class="spacer-20"></div>\
                <div class="list">\
                <a class="item item-icon-left" >\
                  <i class="icon ion-cash"></i>\
                  {{prezzo | limitTo:5}}\
                </a>\
                <a class="item item-icon-left">\
                  <i class="icon ion-clock"></i>\
                  {{durata | limitTo:5}} min\
                </a>\
                <a class="item item-icon-left" >\
                  <i class="icon ion-arrow-graph-up-right"></i>\
                  {{partenzaIndirizzo}}\
                </a>\
                <a class="item item-icon-left" >\
                  <i class="icon ion-arrow-graph-up-left"></i>\
                  {{destinazioneIndirizzo}}\
                </a>\
                <button class="button button-block button-dark" ng-click="booking()">\
                Conferma\
                </button>\
                </div>\
                </div>\
                <div id="map-canvas" style="width:100%; height:50%; top: 50%; position: absolute;" >\
                Conferma\
                </div>',
                link: function (scope, element) {

                    element.ready(function () {


                      GoogleMapInitService.then(function () {




                        if(navigator.geolocation)
                        {
                          navigator.geolocation.getCurrentPosition(mia_posizione)
                          var a =5 ;
                        }
                        else
                        alert('la geolocalizzazione non e possibile');


                        function mia_posizione(position)
                        {

                          var myLat = position.coords.latitude;
                          var myLon = position.coords.longitude;
                          var myPosition = new google.maps.LatLng(myLat,myLon);
                          console.log(myPosition);
                          var destination = new google.maps.LatLng($rootScope.homeCustomer.lat,$rootScope.homeCustomer.long);




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


                                 var addressMyPosition="";

                                 var geocoder = new google.maps.Geocoder();


                                  geocoder.geocode({'latLng':myPosition},function(data,status){

                                    if(status == google.maps.GeocoderStatus.OK){

                                        addressMyPosition = data[0].formatted_address; //this is the full address


                                        console.log(addressMyPosition);

                                        }

                                  });

                                  var addressDestination="";

                                  geocoder.geocode({'latLng':destination},function(data,status){

                                    if(status == google.maps.GeocoderStatus.OK){

                                        addressDestination = data[0].formatted_address; //this is the full address


                                        console.log(addressDestination);

                                        }

                                  });





                                 $timeout(function(){
                                   scope.prezzo = prezzo;
                                   scope.distanza = distanzaKM;
                                   scope.durata = durataMM;
                                   scope.partenzaIndirizzo = addressMyPosition;
                                   scope.destinazioneIndirizzo = addressDestination;
                                   scope.myLat = myLat;
                                   scope.myLon = myLon;
                                 },1000);

                                 directionsDisplay.setMap(map);
                                 directionsDisplay.setDirections(response);
                               } else {
                                   alert("impossibile trovare indirizzo specificato")
                               }

                             });


  }








                        var mapOptions = {
                            zoom: 9,
                            center: new google.maps.LatLng(45.4822,9.21405),
                            disableDefaultUI: false
                        };

                        var map = new google.maps.Map(document.querySelector('#map-canvas'), mapOptions);




                      });


                      scope.booking = function()
                      {
                      //    alert("prenoto");
                      //    console.log($rootScope);
                        var data = {

                          "amount": scope.prezzo,
                          "languages": $rootScope.userSettings.language,
                          "minutes":scope.durata,
                          "distance":  scope.distanza,
                          "iddriver": $rootScope.driverSelected.iddriver,
                          "iduser": $rootScope.user.idUser,
                          "lonpartenza": scope.myLon,
                          "latpartenza": scope.myLat,
                          "latarrivo": $rootScope.driverSelected.lat,
                          "lonarrivo":$rootScope.driverSelected.lon,
                          "name": $rootScope.user.nome,
                          "surname": $rootScope.user.cognome

                        };


                        $http.post('http://sosdriver.esy.es/booking', data).success(function()
                        {

                          alert("Richiesta mandata a buon fine");
                          $state.go('userArea');

                        });

                      }




                    });
                }
            };
        }
    ]);

};
