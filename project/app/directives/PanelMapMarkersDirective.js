'use strict';

module.exports = function (app) {


    app.directive('panelMapMarkers', ['$rootScope', 'GoogleMapInitService',
        function ($rootScope, GoogleMapInitService) {
            return {
                restrict: 'E',
                scope: {
                    drivers: '='
                },
                template: '<div id="google-map"></div>',
                link: function (scope, element) {

                    element.ready(function () {

                        var myMarker = require('../../images/sosMarker.png');

                        scope.$watch('drivers', function (value) {

                            if (value !== undefined) {


                                GoogleMapInitService.then(function () {

                                  var drivers = value;
                                  var centerLat = value[1].at;
                                  var centerLong = value[1].long;
                                    var mapOptions = {
                                        zoom: 12,
                                        center: new google.maps.LatLng(45.473127,9.1888361),
                                        disableDefaultUI: false
                                    };

                                    var map = new google.maps.Map(document.querySelector('.swiper-slide'), mapOptions);
                                    var markers = [];



                                    var content = document.createElement("div");
                                    var title = document.createElement("div");
                                    var streetview = document.createElement("div");
                                    content.appendChild(title);
                                    content.appendChild(streetview);
                                    streetview.style.width = "150px";
                                    streetview.style.height = "auto";

                                    var infowindow = new google.maps.InfoWindow({
                                        content: content
                                    });

                                    for (var a = 0; a < drivers.length; a++) addMarker(drivers[a], myMarker);



                                    function addMarker(data, icon) {

                                        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(data.lat,data.long),
                                            icon: icon,
                                            map: map,
                                            title: data.nome
                                        });
                                        alert("gna");
                                        markers.push(marker);

                                        google.maps.event.addListener(marker, 'click', function (event) {

                                          console.log("entra");
                                          alert("entra");
                                            marker.setAnimation(google.maps.Animation.BOUNCE);
                                            openInfoWindow(marker);
                                            stopAnimation(marker);
                                        });


                                    }

                                    function stopAnimation(marker) {
                                        setTimeout(function () {
                                            marker.setAnimation(null);
                                        }, 500);
                                    }

                                    function openInfoWindow(marker) {
                                        title.innerHTML = marker.getTitle();
                                        infowindow.open(map, marker);
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
