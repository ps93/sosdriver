'use strict';

var app = angular.module('app.userArea', [])

.controller('UserAreaController', [
    '$rootScope','$scope','$state','GoogleMapInitService','$interval',
    require('./UserAreaController')
])



//controller del primo tab che richiama file UserController.js
.controller('UserController', [
    '$rootScope', '$scope', '$state', '$http','SANITRANSPORT','$filter', 'localStorageService', 'GoogleMapInitService',
    require('./UserController')
])



//controller del primo tab che richiama file UserController.js
.controller('GeolocalizationController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT','GoogleMapInitService','localStorageService','$window',
    require('./GeolocalizationController')
])

.controller('SettingsController', [
  '$rootScope', '$scope', '$state','$translate', 'localStorageService', 'tmhDynamicLocale', '$timeout',
    require('./SettingsController')
])

.controller('registrationLicenseController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT', 'localStorageService',
    require('./registrationLicenseController')
]);


module.exports = app;
