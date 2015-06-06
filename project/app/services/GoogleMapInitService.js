'use strict';

module.exports = function (app) {

    app.factory('GoogleMapInitService', ['$rootScope', '$window', '$q',
        function ($rootScope, $window, $q) {

            var CONFIG = {
                URL: 'https://maps.googleapis.com/maps/api/js',
                VERSION: 'v=3.exp',
                KEY: 'AIzaSyAa_T3lkyGhDY5B2ZjQ1yMD9AWfxf4Gx3s',
                SENSOR: false,
                LIBRARIES: 'places',
                CALLBACK: 'init'
            };

            var defer = $q.defer();

            function loadMapScript() {
                var script = document.createElement('script');
                script.src = CONFIG.URL
                + "?" + CONFIG.VERSION
                + "&key=" + CONFIG.KEY
                + "&sensor=" + CONFIG.SENSOR
                + "&libraries=" + CONFIG.LIBRARIES
                + "&callback=" + CONFIG.CALLBACK;
                document.body.appendChild(script);
            }

            $window.init = function () {
                defer.resolve();
            };

            loadMapScript();

            return defer.promise;

        }
    ]);

};
