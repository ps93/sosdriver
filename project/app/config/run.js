'use strict';

module.exports = function (app) {

    app.run(['COMPONENTS_VALUES', '$rootScope', '$state', 'localStorageService',
        function (COMPONENTS_VALUES, $rootScope, $state, localStorageService) {

            $rootScope.$on('$stateChangeStart', function (event, toState) {



                $rootScope.userSettings = localStorageService.get('userSettings') || {};

                $rootScope.deviceData = COMPONENTS_VALUES;




            });
        }

    ]);

};
