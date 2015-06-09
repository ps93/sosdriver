'use strict';

module.exports = function (app) {

    app.run(['COMPONENTS_VALUES', '$rootScope', '$state', 'localStorageService',
        function (COMPONENTS_VALUES, $rootScope, $state, localStorageService) {

            $rootScope.$on('$stateChangeStart', function (event, toState) {



                $rootScope.user = localStorageService.get('user');
                $rootScope.IS_AUTH = $rootScope.userData !== null;
                $rootScope.deviceData = COMPONENTS_VALUES;

            });
        }

    ]);

};
