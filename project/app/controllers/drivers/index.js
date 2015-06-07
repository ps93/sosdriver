'use strict';

var app = angular.module('app.driver', [])



.controller('DriverController', [
  '$rootScope', '$scope', '$state','$translate', 'localStorageService', 'tmhDynamicLocale', '$timeout',
    require('./DriverController')
]);

module.exports = app;
