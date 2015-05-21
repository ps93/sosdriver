'use strict';

module.exports = function ($rootScope, $scope, $state) {


    $scope.goToLogin = function () {

      //  vai login

      console.log('logga');
      $state.go('login');
    };

    $scope.goToRegistration = function ()
    {
          console.log('registra');
          $state.go('registration');
    };
    $scope.goToSettings = function () {
        //vai impostazioni
        console.log('settings');
    };

};
