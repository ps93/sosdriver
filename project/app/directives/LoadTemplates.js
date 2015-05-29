'use strict';

module.exports = function (app) {

    app.directive('loadTemplate', function () {

        return {
            restrict: 'E',
            template: function (tElement, tAttrs) {

                var pathHtml = tAttrs.url;

                switch (pathHtml) {

                    /* HOME */
                    case '../views/home/user.html':
                        return require('../views/home/user.html');
                    case '../views/home/geolocalization.html':
                        return require('../views/home/geolocalization.html');
                    case '../views/home/history.html':
                        return require('../views/home/history.html');
                    case '../views/home/settings.html':
                        return require('../views/home/settings.html');

                }
            }
        };

    });

};
