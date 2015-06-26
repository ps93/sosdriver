'use strict';

module.exports = function (app) {


    app.directive('panelMapMarkers', ['$rootScope', 'GoogleMapInitService','$state','$compile','localStorageService',
        function ($rootScope, GoogleMapInitService,$state,$compile,localStorageService) {
            return {
                restrict: 'E',
                scope: {
                    drivers: '='
                },
                link: function (scope, element) {

                    element.ready(function () {

                        var Icon = require('../../images/sosMarker.png');
                        var iconHome = require('../../images/home.png');
                        scope.$watch('drivers', function (value) {
                            if (value !== undefined) {
                                GoogleMapInitService.then(function () {




                                    var mapOptions = {
                                        zoom: 10,
                                        center: new google.maps.LatLng(45.4822,9.21405),
                                        disableDefaultUI: false
                                    };
                                    $rootScope.mapOptions = mapOptions ;
                                    var map = new google.maps.Map(document.querySelector('#google-map'), mapOptions);

                                    var drivers = value;

                                    var markers = [];



                                    for (var a = 0; a < drivers.length; a++)
                                        addMarker(drivers[a], Icon);





                                    $rootScope.markersToInsert = value;

                                    scope.driverDetail = function(id)
                                    {
                                      $state.go('driver',{id:id});

                                    }

                                    angular.element(document.getElementById('google-map')).append($compile("<div class='search-bottom'><i ng-click='calculateAddress()' class='search-bottom-icon ion-ios-search'></i><input type='sosDriverSearch' id='sosDriverAutocomplete' ng-model='resultSearch' placeholder='indirizzo' class = 'sosDriverSearchAdress'/></div>")(scope));


                //       document.querySelector("#google-map").appendChild(document.createElement('div')).innerHTML+= "<div class='search-bottom'><i ng-click=\'prova()\' class='search-bottom-icon ion-ios-search'></i><input type='sosDriverSearch' id='sosDriverAutocomplete' ng-model='resultSearch' placeholder='indirizzo' class = 'sosDriverSearchAdress'/></div>";
          //      var newDirective = angular.element("<div class='search-bottom'><i ng-click=\'prova()\' class='search-bottom-icon ion-ios-search'></i><input type='sosDriverSearch' id='sosDriverAutocomplete' ng-model='resultSearch' placeholder='indirizzo' class = 'sosDriverSearchAdress'/></div>");
    //        element.append(newDirective);
    //        $compile(newDirective)(scope);


                       scope.prova = function()
                       {

                         alert('funge');
                       };

                       var placeSearch, autocomplete;
                        var componentForm = {
                          street_number: 'short_name',
                          route: 'long_name',
                          locality: 'long_name',
                          administrative_area_level_1: 'short_name',
                          country: 'long_name',
                          postal_code: 'short_name'
                        };


                      // Create the autocomplete object, restricting the search
                      // to geographical location types.
                      autocomplete = new google.maps.places.Autocomplete(
                          /** @type {HTMLInputElement} */(document.getElementById('sosDriverAutocomplete')),
                          { types: ['geocode'] });
                      // When the user selects an address from the dropdown,
                      // populate the address fields in the form.
                      google.maps.event.addListener(autocomplete, 'place_changed', function() {
                        fillInAddress();
                      });


function fillInAddress() {
  // riempe le caselle di suggerimenti
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }


  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}


function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}


scope.calculateAddress = function()
{
  if($rootScope.lastMarker!==undefined)
  {
      var  marker = $rootScope.lastMarker;
      marker.setMap(null);

  }

  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById('sosDriverAutocomplete').value;
//  alert(address);
  console.log(address);

  geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

           console.log("posizione : "+results[0].geometry.location);

          // var myOptions = $rootScope.mapOptions;
           var myLatlng = new google.maps.LatLng(results[0].geometry.location.A,results[0].geometry.location.F);

           var data = { lat : results[0].geometry.location.A , long : results[0].geometry.location.F , isDriver: 1};

           $rootScope.homeCustomer = data;
           var marker = new google.maps.Marker({
               position: new google.maps.LatLng(data.lat, data.long),
               icon: iconHome,
               map: map,
               title: data.nome
           });

           $rootScope.lastMarker = marker;



      } else {
       alert('Geocode was not successful for the following reason: ' + status);
      }
      });
};
                                    function addMarker(data, icon) {



                                      var content =
            '<div                     class="popup">'+
            '<h2 >'+data.nome+' '+  data.cognome+'</h2>'+
            ' <div class="row"> <div class="col col-50"><img src="http://img4.wikia.nocookie.net/__cb20130920142351/simpsons/images/e/e9/Pic_1187696292_8.jpg" style="max-width:100%;" /> </div>'+
            '<div class="col col-50"> <div class="spacer-20"> </div> <div class="spacer-10"> </div><button id="detailButton" class="button button-outline button-dark" ng-click="driverDetail('+data.idautista+')"> Dettagli/Prenota </button><div class="spacer-5"></div> </div> </div>'+
            '</div>';

            var compiled = $compile(content)(scope);

            var buttonDetail = document.querySelector('#detailButton');


                                      var infowindow = new google.maps.InfoWindow({
                                          content: compiled[0],
                                          maxWidth: 350
                                      });


                                        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(data.lat, data.lon),
                                            icon: icon,
                                            map: map,
                                            title: data.nome
                                        });

                                        markers.push(marker);

                                        google.maps.event.addListener(marker,'mouseover', function () {

                                            marker.setAnimation(google.maps.Animation.BOUNCE);
                                            openInfoWindow(marker);
                                            stopAnimation(marker);
                                        });

                                        function stopAnimation(marker) {
                                            setTimeout(function () {
                                                marker.setAnimation(null);
                                            }, 600);
                                        }

                                        function openInfoWindow(marker) {


                                            infowindow.open(map, marker);
                                        }




                                    }




                                });
                            }

                        });


                    });
                }
            };
        }
    ]);

};
