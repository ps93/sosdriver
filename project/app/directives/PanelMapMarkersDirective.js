'use strict';

module.exports = function (app) {

  require('js-marker-clusterer');

    app.directive('panelMapMarkers', ['$rootScope', 'GoogleMapInitService',
        function ($rootScope, GoogleMapInitService) {
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

                                    var map = new google.maps.Map(document.querySelector('#map'), mapOptions);

                                    var drivers = value;
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

                                    for (var a = 0; a < drivers.length; a++) addMarker(drivers[a], Icon);

                                    var markerCluster = new MarkerClusterer(map, markers, {gridSize: 20});


                                    function addMarker(data, icon) {
                                        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(data.lat, data.long),
                                            icon: icon,
                                            map: map,
                                            title: data.nome
                                        });

                                        markers.push(marker);

                                        google.maps.event.addListener(marker, "click", function () {
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
