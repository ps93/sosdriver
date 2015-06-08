'use strict';

module.exports = function (app) {


    app.directive('panelMapMarkers', ['$rootScope', 'GoogleMapInitService','$state','$compile',
        function ($rootScope, GoogleMapInitService,$state,$compile) {
            return {
                restrict: 'E',
                scope: {
                    drivers: '='
                },
                link: function (scope, element) {

                    element.ready(function () {

                        var Icon = require('../../images/sosMarker.png');
                        scope.$watch('drivers', function (value) {
                            if (value !== undefined) {
                                GoogleMapInitService.then(function () {
                                    var mapOptions = {
                                        zoom: 13,
                                        center: new google.maps.LatLng(45.4822,9.21405),
                                        disableDefaultUI: false
                                    };

                                    var map = new google.maps.Map(document.querySelector('#map-canvas'), mapOptions);

                                    var drivers = value;
                                    var markers = [];



                                    for (var a = 0; a < drivers.length; a++) addMarker(drivers[a], Icon);



                                    scope.driverDetail = function()
                                    {
                                      $state.go('driver',{id:1});

                                    }

                                    function addMarker(data, icon) {



                                      var content =
            '<div                     class="popup">'+
            '<h2 >'+data.nome+' '+  data.cognome+'</h2>'+
            ' <div class="row"> <div class="col col-50"><img src="http://img4.wikia.nocookie.net/__cb20130920142351/simpsons/images/e/e9/Pic_1187696292_8.jpg" style="max-width:100%;" /> </div>'+
            '<div class="col col-50"> <button id="detailButton" class="button button-outline button-dark" ng-click="driverDetail()"> Dettagli </button><div class="spacer-5"></div><button class="button button-outline button-dark"> Prenota </button> </div> </div>'+
            '</div>';

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
