'use strict';

var app = angular.module('app.userArea', [])

.controller('UserAreaController', [
    '$rootScope', '$scope', '$state',
    require('./UserAreaController')
])



//controller del primo tab che richiama file UserController.js
.controller('UserController', [
    '$rootScope', '$scope', '$state','SANITRANSPORT',
    require('./UserController')
])



//controller del primo tab che richiama file UserController.js
.controller('GeolocalizationController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT',
    require('./GeolocalizationController')
])

.controller('SettingsController', [
    '$rootScope', '$scope', '$state','$http','SANITRANSPORT',
    require('./SettingsController')
]);

module.exports = app;
