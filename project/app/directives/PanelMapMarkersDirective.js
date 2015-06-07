'use strict';

module.exports = function (app) {


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

                                    var map = new google.maps.Map(document.querySelector('#map-canvas'), mapOptions);

                                    var drivers = value;
                                    var markers = [];

                                    var content = '<div id="iw-container">' +
                    '<div class="iw-title">NOME QUI</div>' +
                    '<div class="iw-content">' +
                      '<img src="provafoto.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>';

                                    var infowindow = new google.maps.InfoWindow({
                                        content: content,
                                        maxWidth: 350
                                    });

                                    for (var a = 0; a < drivers.length; a++) addMarker(drivers[a], Icon);

                        

                                    function addMarker(data, icon) {


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
                                    }

                                    function stopAnimation(marker) {
                                        setTimeout(function () {
                                            marker.setAnimation(null);
                                        }, 600);
                                    }

                                    function openInfoWindow(marker) {


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
