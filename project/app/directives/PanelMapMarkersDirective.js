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


                                  scope.calculateAddress = function()
                                  {
                                    var geocoder = new google.maps.Geocoder();
                                    var address = document.getElementById('sosDriverAutocomplete').value;
                                  //  alert(address);
                                    console.log(address);

                                    geocoder.geocode( { 'address': address}, function(results, status) {
                                        if (status == google.maps.GeocoderStatus.OK) {

                                             console.log("posizione : "+results[0].geometry.location);

                                             var myOptions = $rootScope.mapOptions;
                                             var myLatlng = new google.maps.LatLng(results[0].geometry.location.A,results[0].geometry.location.F);

                                             var temp = { lat : results[0].geometry.location.A , long : results[0].geometry.location.F , isDriver: 1};

                                             $rootScope.markersToInsert.push(temp);
                                             localStorageService.set('markers',$rootScope.markersToInsert);
                                             $window.location.reload();

                                             var marker = new google.maps.Marker({
                                                 position: new google.maps.LatLng(data.lat, data.long),
                                                 icon: iconHome,
                                                 map: map,
                                                 title: data.nome
                                             });



                                        } else {
                                         alert('Geocode was not successful for the following reason: ' + status);
                                        }
                                        });
                                  };


                                    var mapOptions = {
                                        zoom: 9,
                                        center: new google.maps.LatLng(45.4822,9.21405),
                                        disableDefaultUI: false
                                    };
                                    $rootScope.mapOptions = mapOptions ;
                                    var map = new google.maps.Map(document.querySelector('#google-map'), mapOptions);

                                    var drivers = value;
                                    $rootScope.value;
                                    var markers = [];



                                    for (var a = 0; a < drivers.length; a++)
                                      if(drivers[a].isDriver!==1)
                                        addMarker(drivers[a], Icon);
                                      else {

                                        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(drivers[a].lat, drivers[a].long),
                                            icon: iconHome,
                                            map: map,
                                            title: "Home"
                                        });
                                      }





                                    $rootScope.markersToInsert = value;

                                    scope.driverDetail = function(id)
                                    {
                                      $state.go('driver',{id:id});

                                    }


                                    function addMarker(data, icon) {



                                      var content =
            '<div                     class="popup">'+
            '<h2 >'+data.nome+' '+  data.cognome+'</h2>'+
            ' <div class="row"> <div class="col col-50"><img src="http://img4.wikia.nocookie.net/__cb20130920142351/simpsons/images/e/e9/Pic_1187696292_8.jpg" style="max-width:100%;" /> </div>'+
            '<div class="col col-50"> <button id="detailButton" class="button button-outline button-dark" ng-click="driverDetail('+data.idautista+')"> Dettagli </button><div class="spacer-5"></div><button class="button button-outline button-dark"> Prenota </button> </div> </div>'+
            '</div>';

            document.querySelector("#google-map").innerHTML += "<div class='search-bottom' ng-controller='GeolocalizationController'><i ng-click='calculateAddress()'' class='search-bottom-icon ion-ios-search'></i><input type='sosDriverSearch' id='sosDriverAutocomplete' ng-model='resultSearch' placeholder='indirizzo' class = 'sosDriverSearchAdress'/></div>";

            var compiled = $compile(content)(scope);

            var buttonDetail = document.querySelector('#detailButton');


                                      var infowindow = new google.maps.InfoWindow({
                                          content: compiled[0],
                                          maxWidth: 350
                                      });


                                        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(data.lat, data.long),
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
