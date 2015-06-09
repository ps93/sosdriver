'use strict';

module.exports = function ($rootScope, $scope, $state, $translate, localStorageService, tmhDynamicLocale, $timeout) {

  $scope.settings = {};
  $scope.settings.language = ($rootScope.userSettings && $rootScope.userSettings.language) || 'it';
  $rootScope.userSettings= {};
  $rootScope.userSettings.language = $scope.settings.language;

      $scope.saveSettings = function ($event) {


          $event.preventDefault();
          $rootScope.userSettings.language = $scope.settings.language;
          localStorageService.set('userSettings', $rootScope.userSettings);
          $translate.use($scope.settings.language);
          tmhDynamicLocale.set($scope.settings.language);
          console.log("cambiato lingua");
      };

      $scope.driverDetail = function ()
      {
        alert("si");
      };


};
